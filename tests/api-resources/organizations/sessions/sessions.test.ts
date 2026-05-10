// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.organizations.sessions.create('org-abc123def456', { prompt: 'prompt' });
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
    const response = await client.organizations.sessions.create('org-abc123def456', {
      prompt: 'prompt',
      devin_id: 'devin_id',
      attachment_urls: ['https://example.com'],
      bypass_approval: true,
      child_playbook_id: 'child_playbook_id',
      create_as_user_id: 'create_as_user_id',
      knowledge_ids: ['string'],
      max_acu_limit: 0,
      platform: 'platform',
      playbook_id: 'playbook_id',
      repos: ['string'],
      secret_ids: ['string'],
      session_links: ['string'],
      session_secrets: [
        {
          key: 'x',
          value: 'value',
          sensitive: true,
        },
      ],
      structured_output_required: true,
      structured_output_schema: { foo: 'bar' },
      tags: ['string'],
      title: 'title',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.organizations.sessions.retrieve('devin-abc123def456', {
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
    const response = await client.organizations.sessions.retrieve('devin-abc123def456', {
      org_id: 'org-abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.organizations.sessions.list('org-abc123def456', { qs: {} });
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
    const response = await client.organizations.sessions.list('org-abc123def456', {
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
  test.skip('archive: only required params', async () => {
    const responsePromise = client.organizations.sessions.archive('devin-abc123def456', {
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
  test.skip('archive: required and optional params', async () => {
    const response = await client.organizations.sessions.archive('devin-abc123def456', {
      org_id: 'org-abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('listAttachments: only required params', async () => {
    const responsePromise = client.organizations.sessions.listAttachments('devin-abc123def456', {
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
  test.skip('listAttachments: required and optional params', async () => {
    const response = await client.organizations.sessions.listAttachments('devin-abc123def456', {
      org_id: 'org-abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('terminate: only required params', async () => {
    const responsePromise = client.organizations.sessions.terminate('devin-abc123def456', {
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
  test.skip('terminate: required and optional params', async () => {
    const response = await client.organizations.sessions.terminate('devin-abc123def456', {
      org_id: 'org-abc123def456',
      archive: true,
    });
  });
});
