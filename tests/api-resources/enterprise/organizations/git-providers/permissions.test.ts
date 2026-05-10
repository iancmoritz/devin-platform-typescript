// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource permissions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.enterprise.organizations.gitProviders.permissions.create(
      'org-abc123def456',
      { permissions: [{ git_connection_id: 'git_connection_id' }] },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.enterprise.organizations.gitProviders.permissions.create(
      'org-abc123def456',
      {
        permissions: [
          {
            git_connection_id: 'git_connection_id',
            group_prefix: 'group_prefix',
            prefix_path: 'prefix_path',
            read_only: true,
            repo_path: 'repo_path',
          },
        ],
      },
    );
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.enterprise.organizations.gitProviders.permissions.list('org-abc123def456');
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
      client.enterprise.organizations.gitProviders.permissions.list(
        'org-abc123def456',
        { after: 'after', first: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.enterprise.organizations.gitProviders.permissions.delete(
      'git-permission-abc123def456',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.enterprise.organizations.gitProviders.permissions.delete(
      'git-permission-abc123def456',
      { org_id: 'org-abc123def456' },
    );
  });

  // Mock server tests are disabled
  test.skip('deleteAll', async () => {
    const responsePromise =
      client.enterprise.organizations.gitProviders.permissions.deleteAll('org-abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
