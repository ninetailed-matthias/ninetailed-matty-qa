export interface PublishDetails {
  environment: string;
  locale: string;
  time: string;
  user: string;
}

export interface File {
  uid: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  tags: string[];
  filename: string;
  url: string;
  ACL: any[];
  is_dir: boolean;
  parent_uid: string;
  _version: number;
  title: string;
  publish_details: PublishDetails;
}

export interface Link {
  title: string;
  href: string;
}

export interface Taxonomy {
  taxonomy_uid: string;
  max_terms?: number;
  mandatory: boolean;
  non_localizable: boolean;
}

/** A field group for specifying SEO data on an associated page entry. */
export interface Seo {
  /** Version */
  version: 1;
  /** Meta Title */
  meta_title?: string;
  /** Meta Description */
  meta_description?: string;
  /** Enable Search Indexing */
  enable_search_indexing?: boolean;
  /** Enable Link Following */
  enable_link_following?: boolean;
}

export interface Config {
  /** Version */
  version: 2;
  /** Internal Title */
  title: string;
  /** Banner */
  banner?: Banner[];
  /** Navigation */
  navigation?: Navigation[];
  /** Footer */
  footer?: Footer[];
}

/** Ninetailed Experience */
export interface NtExperience {
  /** Version */
  version: 2;
  /** Name */
  nt_name: string;
  /** Description */
  nt_description?: string;
  /** Type */
  nt_type: 'nt_experiment' | 'nt_personalization';
  /** Audience */
  nt_audience?: NtAudience[];
  /** Config */
  nt_config: any;
  /** Variants */
  nt_variants?: NtAudience[];
  /** Title */
  title: string;
}

/** Ninetailed Merge Tag */
export interface NtMergetag {
  /** Version */
  version: 2;
  /** Name */
  nt_name: string;
  /** Fallback */
  nt_fallback?: string;
  /** Merge Tag Id */
  nt_mergetag_id: string;
  /** Title */
  title: string;
}

/** Ninetailed Audience */
export interface NtAudience {
  /** Version */
  version: 2;
  /** Name */
  nt_name: string;
  /** Description */
  nt_description?: string;
  /** Rules */
  nt_rules: any;
  /** Audience Id */
  nt_audience_id: string;
  /** Title */
  title: string;
}

export interface Button {
  /** Version */
  version: 3;
  /** Internal Title */
  title: string;
  /** Button Link */
  button_link?: Link;
  /** Button Variant */
  button_variant?: ('Primary' | 'Secondary' | 'Loud') | null;
  /** Ninetailed */
  nt_experiences?: NtExperience[];
}

export interface LandingPage {
  /** Version */
  version: 10;
  /** Title */
  title: string;
  /** SEO */
  seo?: Seo;
  /** URL */
  url?: string;
  /** Sections */
  sections?: (
    | {
        hero: {
          /** Internal Title */ title?: string;
          /** Headline */
          headline?: any;
          /** Subline */
          subline?: any;
          /** Buttons */
          buttons?: [
            {
              /** Button Link */
              button_link?: Link;
              /** Button Variant */
              button_variant?: ('Primary' | 'Secondary' | 'Loud') | null;
            },
            {
              /** Button Link */
              button_link?: Link;
              /** Button Variant */
              button_variant?: ('Primary' | 'Secondary' | 'Loud') | null;
            }
          ];
          /** Image */
          image?: File | null;
          /** Ninetailed Experiences */
          nt_experiences?: NtExperience[];
        };
        cta: undefined;
        hubspot_form: undefined;
      }
    | {
        cta: {
          /** Internal Title */ title?: string;
          /** Headline */
          headline?: any;
          /** Subline */
          subline?: any;
          /** Buttons */
          buttons?: [
            {
              /** Button Link */
              button_link?: Link;
              /** Button Variant */
              button_variant?: ('Primary' | 'Secondary' | 'Loud') | null;
            },
            {
              /** Button Link */
              button_link?: Link;
              /** Button Variant */
              button_variant?: ('Primary' | 'Secondary' | 'Loud') | null;
            }
          ];
          /** Ninetailed Experiences */
          nt_experiences?: NtExperience[];
        };
        hero: undefined;
        hubspot_form: undefined;
      }
    | {
        hubspot_form: {
          /** Title */ title?: string;
          /** Hubspot Form ID */
          hubspot_form_id?: string;
          /** Hubspot Portal ID */
          hubspot_portal_id?: string;
          /** Ninetailed Experiences */
          nt_experiences?: NtExperience[];
        };
        hero: undefined;
        cta: undefined;
      }
  )[];
  /** Ninetailed Experiences */
  nt_modular_blocks_experiences?: {
    nt_experience_block_sections: {
      /** Title */ nt_title?: string;
      /** Experience */
      nt_experience: NtExperience[];
      /** Baseline */
      nt_baseline: any;
      /** Variants */
      nt_variants?: (
        | {
            hero: {
              /** Internal Title */ title?: string;
              /** Headline */
              headline?: any;
              /** Subline */
              subline?: any;
              /** Buttons */
              buttons?: [
                {
                  /** Button Link */
                  button_link?: Link;
                  /** Button Variant */
                  button_variant?: ('Primary' | 'Secondary' | 'Loud') | null;
                },
                {
                  /** Button Link */
                  button_link?: Link;
                  /** Button Variant */
                  button_variant?: ('Primary' | 'Secondary' | 'Loud') | null;
                }
              ];
              /** Image */
              image?: File | null;
            };
            cta: undefined;
            hubspot_form: undefined;
          }
        | {
            cta: {
              /** Internal Title */ title?: string;
              /** Headline */
              headline?: any;
              /** Subline */
              subline?: any;
              /** Buttons */
              buttons?: [
                {
                  /** Button Link */
                  button_link?: Link;
                  /** Button Variant */
                  button_variant?: ('Primary' | 'Secondary' | 'Loud') | null;
                },
                {
                  /** Button Link */
                  button_link?: Link;
                  /** Button Variant */
                  button_variant?: ('Primary' | 'Secondary' | 'Loud') | null;
                }
              ];
            };
            hero: undefined;
            hubspot_form: undefined;
          }
        | {
            hubspot_form: {
              /** Title */ title?: string;
              /** Hubspot Form ID */
              hubspot_form_id?: string;
              /** Hubspot Portal ID */
              hubspot_portal_id?: string;
            };
            hero: undefined;
            cta: undefined;
          }
      )[];
    };
  }[];
  /** Ninetailed */
  nt_experiences?: NtExperience[];
}

export interface Footer {
  /** Version */
  version: 3;
  /** Title */
  title: string;
  /** Footer Links */
  footer_links?: {
    /** Title */
    title: string;
    /** Page Reference */
    page_reference?: LandingPage[];
  }[];
  /** Copyright */
  copyright?: any;
}

export interface Navigation {
  /** Version */
  version: 4;
  /** Title */
  title: string;
  /** Navigation Items */
  navigation_items?: {
    /** Title */
    title: string;
    /** Page Reference */
    page_reference?: LandingPage[];
  }[];
  /** Ninetailed */
  nt_experiences?: NtExperience[];
}

/** A dismissible call-to-cation displayed at the top of the viewport. */
export interface Banner {
  /** Version */
  version: 3;
  /** Title */
  title: string;
  /** Text */
  text?: any;
  /** Link */
  link?: Link;
  /** Ninetailed */
  nt_experiences?: NtExperience[];
}
