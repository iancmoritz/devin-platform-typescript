// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiKeys', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.beta1.enterprise.serviceUsers.apiKeys.create('service-user-abc123def456', {
      name: 'x',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.beta1.enterprise.serviceUsers.apiKeys.create('service-user-abc123def456', {
      name: 'x',
      expires_at: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.beta1.enterprise.serviceUsers.apiKeys.list('service-user-abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.beta1.enterprise.serviceUsers.apiKeys.list(
        'service-user-abc123def456',
        { status: 'active' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.beta1.enterprise.serviceUsers.apiKeys.revoke('api_key_id', {
      service_user_id: 'service-user-abc123def456',
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
  test.skip('revoke: required and optional params', async () => {
    const response = await client.beta1.enterprise.serviceUsers.apiKeys.revoke('api_key_id', {
      service_user_id: 'service-user-abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('rotate: only required params', async () => {
    const responsePromise = client.beta1.enterprise.serviceUsers.apiKeys.rotate('api_key_id', {
      service_user_id: 'service-user-abc123def456',
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
  test.skip('rotate: required and optional params', async () => {
    const response = await client.beta1.enterprise.serviceUsers.apiKeys.rotate('api_key_id', {
      service_user_id: 'service-user-abc123def456',
      new_key_expires_at: 0,
      revoke_current: true,
    });
  });
});
