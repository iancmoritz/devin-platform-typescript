// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource indexing', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.beta1.organizations.repositories.indexing.list('org-abc123def456');
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
      client.beta1.organizations.repositories.indexing.list(
        'org-abc123def456',
        { after: 'after', first: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('bulkIndex: only required params', async () => {
    const responsePromise = client.beta1.organizations.repositories.indexing.bulkIndex('org-abc123def456', {
      repositories: [{ repository_path: 'repository_path' }],
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
  test.skip('bulkIndex: required and optional params', async () => {
    const response = await client.beta1.organizations.repositories.indexing.bulkIndex('org-abc123def456', {
      repositories: [{ repository_path: 'repository_path', branch_names: ['string'] }],
    });
  });

  // Mock server tests are disabled
  test.skip('bulkRemove: only required params', async () => {
    const responsePromise = client.beta1.organizations.repositories.indexing.bulkRemove('org-abc123def456', {
      repository_paths: ['string'],
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
  test.skip('bulkRemove: required and optional params', async () => {
    const response = await client.beta1.organizations.repositories.indexing.bulkRemove('org-abc123def456', {
      repository_paths: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('getStatus: only required params', async () => {
    const responsePromise = client.beta1.organizations.repositories.indexing.getStatus('repository_path', {
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
  test.skip('getStatus: required and optional params', async () => {
    const response = await client.beta1.organizations.repositories.indexing.getStatus('repository_path', {
      org_id: 'org-abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('index: only required params', async () => {
    const responsePromise = client.beta1.organizations.repositories.indexing.index('repository_path', {
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
  test.skip('index: required and optional params', async () => {
    const response = await client.beta1.organizations.repositories.indexing.index('repository_path', {
      org_id: 'org-abc123def456',
      branch_names: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.beta1.organizations.repositories.indexing.remove('repository_path', {
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
  test.skip('remove: required and optional params', async () => {
    const response = await client.beta1.organizations.repositories.indexing.remove('repository_path', {
      org_id: 'org-abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('removeBranch: only required params', async () => {
    const responsePromise = client.beta1.organizations.repositories.indexing.removeBranch('branch_name', {
      org_id: 'org-abc123def456',
      repository_path: 'repository_path',
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
  test.skip('removeBranch: required and optional params', async () => {
    const response = await client.beta1.organizations.repositories.indexing.removeBranch('branch_name', {
      org_id: 'org-abc123def456',
      repository_path: 'repository_path',
    });
  });
});
