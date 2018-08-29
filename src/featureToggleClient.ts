import { SelfUpdatable } from './selfUpdatable';

/**
 * Feature-Toggle client
 */
export interface FeatureToggleClient extends SelfUpdatable {
  /**
   * Allow to get the treatment as string based on feature name, differentiator and default
   * treatment.
   */
  getTreatment(
    featureName: string,
    differentiator: string,
    defaultTreatment: string
  ): Promise<string>;
}
