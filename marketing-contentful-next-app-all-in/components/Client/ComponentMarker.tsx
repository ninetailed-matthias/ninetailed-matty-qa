'use client';

import { useEffect, useRef, forwardRef } from 'react';

export const ComponentMarker = forwardRef((_, ref) => {
  const markerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    /*
    Due to React's limitation on setting !important styles during rendering, we set the display property on the DOM element directly.
    See: https://github.com/facebook/react/issues/1881
    */
    markerRef.current?.style.setProperty('display', 'none', 'important');
  }, []);

  useEffect(() => {
    if (markerRef.current) {
      const observableElement = getObservableElement(markerRef.current);

      if (ref) {
        if (typeof ref === 'function') {
          ref(observableElement);
        } else {
          ref.current = observableElement;
        }
      }
    }
  }, []);

  return (
    <div
      className="nt-cmp-marker"
      style={{ display: 'none' }}
      ref={markerRef}
    />
  );
});

const getObservableSibling = (element: Element): Element | null => {
  const nextSibling = element.nextElementSibling;

  if (!nextSibling) {
    return null;
  }

  const nextSiblingStyle = getComputedStyle(nextSibling);

  // Elements with display: none are not observable by the IntersectionObserver
  if (nextSiblingStyle.display !== 'none') {
    return nextSibling;
  }

  return getObservableSibling(nextSibling);
};

const getObservableElement = (element: Element): Element | null => {
  const observableSibling = getObservableSibling(element);

  if (observableSibling) {
    return observableSibling;
  }

  const { parentElement } = element;

  if (!parentElement) {
    return null;
  }

  return getObservableElement(parentElement);
};

ComponentMarker.displayName = 'ComponentMarker';
