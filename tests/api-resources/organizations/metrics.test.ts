// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metrics', () => {
  // Mock server tests are disabled
  test.skip('getActiveUsers: only required params', async () => {
    const responsePromise = client.organizations.metrics.getActiveUsers('org-abc123def456', {
      time_after: 0,
      time_before: 0,
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
  test.skip('getActiveUsers: required and optional params', async () => {
    const response = await client.organizations.metrics.getActiveUsers('org-abc123def456', {
      time_after: 0,
      time_before: 0,
      min_searches: 0,
      min_sessions: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getDailyActiveUsers: only required params', async () => {
    const responsePromise = client.organizations.metrics.getDailyActiveUsers('org-abc123def456', {
      time_after: 0,
      time_before: 0,
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
  test.skip('getDailyActiveUsers: required and optional params', async () => {
    const response = await client.organizations.metrics.getDailyActiveUsers('org-abc123def456', {
      time_after: 0,
      time_before: 0,
      min_searches: 0,
      min_sessions: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getMonthlyActiveUsers: only required params', async () => {
    const responsePromise = client.organizations.metrics.getMonthlyActiveUsers('org-abc123def456', {
      time_after: 0,
      time_before: 0,
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
  test.skip('getMonthlyActiveUsers: required and optional params', async () => {
    const response = await client.organizations.metrics.getMonthlyActiveUsers('org-abc123def456', {
      time_after: 0,
      time_before: 0,
      min_searches: 0,
      min_sessions: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getPrMetrics: only required params', async () => {
    const responsePromise = client.organizations.metrics.getPrMetrics('org-abc123def456', {
      time_after: 0,
      time_before: 0,
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
  test.skip('getPrMetrics: required and optional params', async () => {
    const response = await client.organizations.metrics.getPrMetrics('org-abc123def456', {
      time_after: 0,
      time_before: 0,
      playbook_id: 'playbook_id',
      service_user_ids: ['string'],
      user_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('getSearchMetrics: only required params', async () => {
    const responsePromise = client.organizations.metrics.getSearchMetrics('org-abc123def456', {
      time_after: 0,
      time_before: 0,
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
  test.skip('getSearchMetrics: required and optional params', async () => {
    const response = await client.organizations.metrics.getSearchMetrics('org-abc123def456', {
      time_after: 0,
      time_before: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getSessionMetrics: only required params', async () => {
    const responsePromise = client.organizations.metrics.getSessionMetrics('org-abc123def456', {
      time_after: 0,
      time_before: 0,
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
  test.skip('getSessionMetrics: required and optional params', async () => {
    const response = await client.organizations.metrics.getSessionMetrics('org-abc123def456', {
      time_after: 0,
      time_before: 0,
      playbook_id: 'playbook_id',
      service_user_ids: ['string'],
      user_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('getUsageMetrics', async () => {
    const responsePromise = client.organizations.metrics.getUsageMetrics('org-abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getUsageMetrics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.metrics.getUsageMetrics(
        'org-abc123def456',
        { time_after: 0, time_before: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DevinPlatform.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getWeeklyActiveUsers: only required params', async () => {
    const responsePromise = client.organizations.metrics.getWeeklyActiveUsers('org-abc123def456', {
      time_after: 0,
      time_before: 0,
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
  test.skip('getWeeklyActiveUsers: required and optional params', async () => {
    const response = await client.organizations.metrics.getWeeklyActiveUsers('org-abc123def456', {
      time_after: 0,
      time_before: 0,
      min_searches: 0,
      min_sessions: 0,
    });
  });
});
