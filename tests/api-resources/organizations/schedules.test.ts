// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schedules', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.organizations.schedules.create('org_id', {
      name: 'name',
      prompt: 'prompt',
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
    const response = await client.organizations.schedules.create('org_id', {
      name: 'name',
      prompt: 'prompt',
      agent: 'devin',
      bypass_approval: true,
      create_as_user_id: 'create_as_user_id',
      frequency: 'frequency',
      interval_count: 0,
      notify_on: 'always',
      playbook_id: 'playbook_id',
      schedule_type: 'recurring',
      scheduled_at: '2019-12-27T18:11:19.117Z',
      slack_channel_id: 'slack_channel_id',
      slack_team_id: 'slack_team_id',
      tags: ['string'],
      target_devin_id: 'target_devin_id',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.organizations.schedules.retrieve('sched-abc123def456', {
      org_id: 'org_id',
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
    const response = await client.organizations.schedules.retrieve('sched-abc123def456', {
      org_id: 'org_id',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.organizations.schedules.update('sched-abc123def456', { org_id: 'org_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.organizations.schedules.update('sched-abc123def456', {
      org_id: 'org_id',
      agent: 'devin',
      bypass_approval: true,
      enabled: true,
      frequency: 'frequency',
      interval_count: 0,
      name: 'name',
      notify_on: 'always',
      playbook_id: 'playbook_id',
      prompt: 'prompt',
      run_as_user_id: 'run_as_user_id',
      schedule_type: 'recurring',
      scheduled_at: '2019-12-27T18:11:19.117Z',
      slack_channel_id: 'slack_channel_id',
      slack_team_id: 'slack_team_id',
      tags: ['string'],
      target_devin_id: 'target_devin_id',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.organizations.schedules.list('org_id');
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
      client.organizations.schedules.list(
        'org_id',
        { limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.organizations.schedules.delete('sched-abc123def456', { org_id: 'org_id' });
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
    const response = await client.organizations.schedules.delete('sched-abc123def456', { org_id: 'org_id' });
  });
});
