// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource insights', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.organizations.sessions.insights.retrieve('devin-abc123def456', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.organizations.sessions.insights.retrieve('devin-abc123def456', {
      org_id: 'org-abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.organizations.sessions.insights.list('org-abc123def456', { qs: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.organizations.sessions.insights.list('org-abc123def456', {
      qs: {
        after: 'after',
        category: 'bug_fixing',
        created_after: 0,
        created_before: 0,
        first: 1,
        is_archived: true,
        origins: ['webapp'],
        playbook_id: 'playbook_id',
        repo_names: ['string'],
        schedule_id: 'schedule_id',
        service_user_ids: ['string'],
        session_ids: ['string'],
        tags: ['string'],
        updated_after: 0,
        updated_before: 0,
        user_ids: ['string'],
      },
      devin_id: 'devin_id',
    });
  });

  // Mock server tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.organizations.sessions.insights.generate('devin-abc123def456', {
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
  test.skip('generate: required and optional params', async () => {
    const response = await client.organizations.sessions.insights.generate('devin-abc123def456', {
      org_id: 'org-abc123def456',
    });
  });
});
