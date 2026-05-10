// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DevinPlatform, { toFile } from 'devin-platform';

const client = new DevinPlatform({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attachments', () => {
  // Mock server tests are disabled
  test.skip('download: only required params', async () => {
    const responsePromise = client.organizations.attachments.download('name', {
      org_id: 'org_id',
      uuid: 'uuid',
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
  test.skip('download: required and optional params', async () => {
    const response = await client.organizations.attachments.download('name', {
      org_id: 'org_id',
      uuid: 'uuid',
    });
  });

  // Mock server tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.organizations.attachments.upload('org_id', {
      file: await toFile(Buffer.from('Example data'), 'README.md'),
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.organizations.attachments.upload('org_id', {
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });
});
