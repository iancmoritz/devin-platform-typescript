// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { DevinPlatform } from '../client';

export abstract class APIResource {
  protected _client: DevinPlatform;

  constructor(client: DevinPlatform) {
    this._client = client;
  }
}
