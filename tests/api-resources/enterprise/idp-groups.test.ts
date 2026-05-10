// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource idpGroups', () => {
  // Mock server tests are disabled
  test.skip('deleteIdpGroup', async () => {
    const responsePromise = client.enterprise.idpGroups.deleteIdpGroup('idp_group_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listIdpGroups', async () => {
    const responsePromise = client.enterprise.idpGroups.listIdpGroups();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listIdpGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprise.idpGroups.listIdpGroups(
        { after: 'after', first: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('registerIdpGroups: only required params', async () => {
    const responsePromise = client.enterprise.idpGroups.registerIdpGroups({ idp_group_names: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('registerIdpGroups: required and optional params', async () => {
    const response = await client.enterprise.idpGroups.registerIdpGroups({ idp_group_names: ['string'] });
  });
});
