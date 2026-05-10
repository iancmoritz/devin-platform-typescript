// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource daily', () => {
  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.organizations.consumption.daily.get('org-abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.consumption.daily.get(
        'org-abc123def456',
        { time_after: 0, time_before: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getServiceUser: only required params', async () => {
    const responsePromise = client.organizations.consumption.daily.getServiceUser(
      'service-user-abc123def456',
      { org_id: 'org-abc123def456' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getServiceUser: required and optional params', async () => {
    const response = await client.organizations.consumption.daily.getServiceUser(
      'service-user-abc123def456',
      {
        org_id: 'org-abc123def456',
        time_after: 0,
        time_before: 0,
      },
    );
  });

  // Mock server tests are disabled
  test.skip('getSession: only required params', async () => {
    const responsePromise = client.organizations.consumption.daily.getSession('devin-abc123def456', {
      org_id: 'org-abc123def456',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSession: required and optional params', async () => {
    const response = await client.organizations.consumption.daily.getSession('devin-abc123def456', {
      org_id: 'org-abc123def456',
      time_after: 0,
      time_before: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getUser: only required params', async () => {
    const responsePromise = client.organizations.consumption.daily.getUser('user_id', {
      org_id: 'org-abc123def456',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getUser: required and optional params', async () => {
    const response = await client.organizations.consumption.daily.getUser('user_id', {
      org_id: 'org-abc123def456',
      time_after: 0,
      time_before: 0,
    });
  });
});
