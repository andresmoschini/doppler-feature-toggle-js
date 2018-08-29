import { FeatureToggleClient } from './featureToggleClient';
import { default as Axios, AxiosInstance } from 'axios';

/**
 * Feature-Toggle client based on a external HTTP resource
 */
export class HttpFeatureToggleClient implements FeatureToggleClient {
  private axios: AxiosInstance;

  public constructor(private url: string, axios?: AxiosInstance) {
    this.axios = axios || Axios.create();
    // I am thinking about removing all concrete dependency on Axios, only in types.
    // In the future we could remove completely the dependency, but it is less confortable for the
    // user.
    // import { AxiosInstance } from 'axios';
    // export class HttpFeatureToggleClient implements FeatureToggleClient {
    //   public constructor(private url: string, private axios: AxiosInstance) {
  }

  /**
   * Determine the treatment as string based on feature name, differentiator and default treatment
   * and current loaded rules.
   */
  public getTreatment(
    featureName: string,
    differentiator: string,
    defaultTreatment: string
  ): Promise<string> {
    throw new Error('Method not implemented.');
  }

  /**
   * Update rules based on the remote HTTP resource
   */
  public async update(): Promise<void> {
    const result = await this.axios.get(this.url);
    console.log('>>> result: ', result);
  }
}
