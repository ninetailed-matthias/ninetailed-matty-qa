import React, { PropsWithChildren } from 'react';

import { Reference } from '@ninetailed/experience.js';
import { getExperiences } from '@/lib/ninetailedServerContext';
import { ExperienceBaseProps } from '@/types/serverExperience';

export const ServerExperience = <
  P,
  PassThroughProps extends Partial<P> = Partial<P>,
  Variant extends Pick<P, Exclude<keyof P, keyof PassThroughProps>> &
    Reference = Pick<P, Exclude<keyof P, keyof PassThroughProps>> & Reference
>({
  experiences,
  component: Component,
  passthroughProps,
  ...baseline
}: ExperienceBaseProps<P, PassThroughProps, Variant>) => {
  const profileExperiences = getExperiences();

  if (!profileExperiences) {
    return (
      <Component
        {...passthroughProps}
        {...(baseline as P)}
        ninetailed={{ isPersonalized: false, audience: { id: 'baseline' } }}
      />
    );
  }

  const experience = experiences.find((experience) =>
    profileExperiences.some(
      (profileExperience) => profileExperience.experienceId === experience.id
    )
  );

  if (!experience) {
    return (
      <Component
        {...passthroughProps}
        {...(baseline as P)}
        ninetailed={{ isPersonalized: false, audience: { id: 'baseline' } }}
      />
    );
  }

  const experienceInfo = profileExperiences.find(
    (profileExperience) => profileExperience.experienceId === experience.id
  );

  const component = experience.components.find(
    (component) => component.baseline.id === baseline.id
  );

  if (!component || !experienceInfo) {
    return (
      <Component
        {...passthroughProps}
        {...(baseline as P)}
        ninetailed={{ isPersonalized: false, audience: { id: 'baseline' } }}
      />
    );
  }

  const selectableVariants = [baseline, ...component.variants];
  const variant = selectableVariants[experienceInfo.variantIndex];

  if (!variant) {
    return (
      <Component
        {...passthroughProps}
        {...(baseline as P)}
        ninetailed={{ isPersonalized: false, audience: { id: 'baseline' } }}
      />
    );
  }

  if ('hidden' in variant && variant.hidden) {
    return null;
  }

  return (
    <Component
      {...passthroughProps}
      {...(variant as P)}
      ninetailed={{
        isPersonalized: true,
        audience: { id: experience.audience?.id },
      }}
    />
  );
};
