// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource daily', () => {
  // Mock server tests are disabled
  test.skip('getDailyConsumption', async () => {
    const responsePromise = client.enterprise.consumption.daily.getDailyConsumption();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getDailyConsumption: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprise.consumption.daily.getDailyConsumption(
        { time_after: 0, time_before: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getOrgDailyConsumption', async () => {
    const responsePromise = client.enterprise.consumption.daily.getOrgDailyConsumption('org-abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getOrgDailyConsumption: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprise.consumption.daily.getOrgDailyConsumption(
        'org-abc123def456',
        { time_after: 0, time_before: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getServiceUserDailyConsumption', async () => {
    const responsePromise =
      client.enterprise.consumption.daily.getServiceUserDailyConsumption('service-user-abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getServiceUserDailyConsumption: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprise.consumption.daily.getServiceUserDailyConsumption(
        'service-user-abc123def456',
        { time_after: 0, time_before: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getSessionDailyConsumption', async () => {
    const responsePromise =
      client.enterprise.consumption.daily.getSessionDailyConsumption('devin-abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSessionDailyConsumption: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprise.consumption.daily.getSessionDailyConsumption(
        'devin-abc123def456',
        { time_after: 0, time_before: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getUserDailyConsumption', async () => {
    const responsePromise = client.enterprise.consumption.daily.getUserDailyConsumption('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getUserDailyConsumption: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprise.consumption.daily.getUserDailyConsumption(
        'user_id',
        { time_after: 0, time_before: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });
});
