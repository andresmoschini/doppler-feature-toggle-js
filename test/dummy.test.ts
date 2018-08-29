import { Dummy } from '../src/dummy';
import { HttpFeatureToggleClient } from '../src/httpFeatureToggleClient';
import { AxiosInstance } from 'axios';

/**
 * Dummy test
 */
describe('Dummy test', () => {
  // it does not use the mock
  // it('test1', () => {
  //   const url = 'http://api.dopplerrelay.com/resources/countries.json';
  //   const client = new HttpFeatureToggleClient(url);
  //   client.update();
  // });

  it('test2', () => {
    // Arrange
    const axiosMock = jest.fn<AxiosInstance>(() => ({
      get: jest.fn(x => x) // TODO: return something that makes sense
    }));

    const axios = new axiosMock();
    const url = 'http://api.dopplerrelay.com/resources/countries.json';
    const client = new HttpFeatureToggleClient(url, axios);

    expect(axios.get).toHaveBeenCalledTimes(0);

    // Act
    client.update();

    // Assert
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
  });

  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('DummyClass is instantiable', () => {
    expect(new Dummy()).toBeInstanceOf(Dummy);
  });

  it('getPerson should return a new Person', () => {
    const result = new Dummy().getPerson('john');
    expect(result.name).toEqual('john');
  });
});
