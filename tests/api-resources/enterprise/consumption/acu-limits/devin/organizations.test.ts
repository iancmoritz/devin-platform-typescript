// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizations', () => {
  // Mock server tests are disabled
  test.skip('deleteAcuLimit', async () => {
    const responsePromise =
      client.enterprise.consumption.acuLimits.devin.organizations.deleteAcuLimit('org-abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('setAcuLimit: only required params', async () => {
    const responsePromise = client.enterprise.consumption.acuLimits.devin.organizations.setAcuLimit(
      'org-abc123def456',
      { cycle_acu_limit: 0 },
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
  test.skip('setAcuLimit: required and optional params', async () => {
    const response = await client.enterprise.consumption.acuLimits.devin.organizations.setAcuLimit(
      'org-abc123def456',
      { cycle_acu_limit: 0 },
    );
  });
});
