// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IBannerFields {
  /** Internal title */
  internalTitle: string;

  /** Text */
  text: Document;

  /** Link text */
  linkText: string;

  /** slug */
  slug: string;

  /** Ninetailed */
  nt_experiences?: INtExperience[] | undefined;
}

export interface IBanner extends Entry<IBannerFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'banner';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IButtonFields {
  /** Internal name */
  internalName: string;

  /** Button text */
  buttonText: string;

  /** Icon */
  icon?: Asset | undefined;

  /** Variant */
  variant: 'primary' | 'secondary' | 'loud';

  /** slug */
  slug: string;
}

export interface IButton extends Entry<IButtonFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'button';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IConfigFields {
  /** Internal Name */
  name: 'Configuration';

  /** Settings */
  settings?: ISetting[] | undefined;

  /** Styles */
  styles: IStyle[];
}

export interface IConfig extends Entry<IConfigFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'config';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ICtaFields {
  /** Internal name */
  internalName: string;

  /** Headline */
  headline: Document;

  /** Subline */
  subline?: Document | undefined;

  /** Buttons */
  buttons?: IButton[] | undefined;

  /** Ninetailed */
  nt_experiences?: INtExperience[] | undefined;

  isAIGenerated?: boolean | undefined;
}

export interface ICta extends Entry<ICtaFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'cta';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFeatureFields {
  /** Internal name */
  internalName?: string | undefined;

  /** Headline */
  headline: Document;

  /** Subline */
  subline?: Document | undefined;

  /** Button */
  button?: IButton[] | undefined;

  /** Image */
  image: Asset;

  /** Image position */
  imagePosition?: 'right' | 'left' | undefined;

  /** Ninetailed */
  nt_experiences?: INtExperience[] | undefined;
}

export interface IFeature extends Entry<IFeatureFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'feature';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFooterFields {
  /** Internal title */
  internalTitle: string;

  /** Footer links */
  footerLinks: IButton[];

  /** Copyright */
  copyright: Document;
}

export interface IFooter extends Entry<IFooterFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'footer';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHeroFields {
  /** Internal name */
  internalName: string;

  /** Headline */
  headline: Document;

  /** Subline */
  subline?: Document | undefined;

  /** Buttons */
  buttons?: IButton[] | undefined;

  /** Image */
  image: Asset;

  /** Ninetailed */
  nt_experiences?: INtExperience[] | undefined;
}

export interface IHero extends Entry<IHeroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'hero';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHubspotFormFields {
  /** Internal Name */
  internalName: string;

  /** Hubspot Form ID */
  hubspotFormId: string;

  /** Hubspot Portal ID */
  hubspotPortalId: string;
}

/** Connect a Hubspot form using its unique GUID and portal ID. */

export interface IHubspotForm extends Entry<IHubspotFormFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'hubspotForm';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface INavigationFields {
  /** Internal title */
  internalTitle?: string | undefined;

  /** Navigation links */
  navigationLinks: IButton[];

  /** Ninetailed */
  nt_experiences?: INtExperience[] | undefined;
}

export interface INavigation extends Entry<INavigationFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'navigation';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface INtAudienceFields {
  /** Name */
  nt_name: string;

  /** Description */
  nt_description?: string | undefined;

  /** Rules */
  nt_rules: Record<string, any>;

  /** Audience Id */
  nt_audience_id: string;

  /** Metadata */
  nt_metadata?: Record<string, any> | undefined;
}

/** Ninetailed Audience */

export interface INtAudience extends Entry<INtAudienceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'nt_audience';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface INtExperienceFields {
  /** Name */
  nt_name: string;

  /** Description */
  nt_description?: string | undefined;

  /** Type */
  nt_type: 'nt_experiment' | 'nt_personalization';

  /** Config */
  nt_config: Record<string, any>;

  /** Audience */
  nt_audience?: INtAudience | undefined;

  /** Variants */
  nt_variants?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** Ninetailed Experience */

export interface INtExperience extends Entry<INtExperienceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'nt_experience';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface INtMergetagFields {
  /** Name */
  nt_name: string;

  /** Fallback */
  nt_fallback?: string | undefined;

  /** Merge Tag Id */
  nt_mergetag_id: string;
}

/** Ninetailed Merge Tag */

export interface INtMergetag extends Entry<INtMergetagFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'nt_mergetag';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPageFields {
  /** Internal Name */
  name: string;

  /** Slug */
  slug: string;

  /** SEO */
  seo?: ISeo | undefined;

  /** Banner */
  banner?: IBanner | undefined;

  /** Navigation */
  navigation?: INavigation | undefined;

  /** Sections */
  sections: (ICta | IFeature | IHero | IHubspotForm | IPricingTable)[];

  /** Footer */
  footer?: IFooter | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'page';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPricingPlanFields {
  /** Internal name */
  internalName?: string | undefined;

  /** Title */
  title: Document;

  /** Price */
  price: Document;

  /** Frequency */
  frequency?: '/month' | '/week' | '/day' | undefined;

  /** Discounted price */
  discountedPrice?: Document | undefined;

  /** Description */
  description?: Document | undefined;

  /** Button */
  button: IButton;

  /** Most popular */
  mostPopular?: boolean | undefined;
}

export interface IPricingPlan extends Entry<IPricingPlanFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'pricingPlan';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPricingTableFields {
  /** Internal name */
  internalName?: string | undefined;

  /** Headline */
  headline: Document;

  /** Subline */
  subline: Document;

  /** Pricing plans */
  pricingPlans: IPricingPlan[];

  /** Ninetailed */
  nt_experiences?: INtExperience[] | undefined;
}

export interface IPricingTable extends Entry<IPricingTableFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'pricingTable';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISeoFields {
  /** Internal Name */
  name: string;

  /** SEO Title */
  title: string;

  /** SEO Description */
  description?: string | undefined;

  /** Hide page from search engines (noindex) */
  no_index?: boolean | undefined;

  /** Exclude links from search rankings? (nofollow) */
  no_follow?: boolean | undefined;
}

export interface ISeo extends Entry<ISeoFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'seo';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISettingFields {
  /** Internal Name */
  name: string;

  /** Setting Key */
  settingKey: string;

  /** Setting Value */
  settingValue: string;

  /** Value */
  value?: Record<string, any> | undefined;

  /** Ninetailed */
  nt_experiences?: INtExperience[] | undefined;
}

export interface ISetting extends Entry<ISettingFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'setting';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IStyleFields {
  /** Internal Name */
  name: string;

  /** CSS */
  css?: string | undefined;

  /** Ninetailed */
  nt_experiences?: INtExperience[] | undefined;
}

export interface IStyle extends Entry<IStyleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'style';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | 'banner'
  | 'button'
  | 'config'
  | 'cta'
  | 'feature'
  | 'footer'
  | 'hero'
  | 'hubspotForm'
  | 'navigation'
  | 'nt_audience'
  | 'nt_experience'
  | 'nt_mergetag'
  | 'page'
  | 'pricingPlan'
  | 'pricingTable'
  | 'seo'
  | 'setting'
  | 'style';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
