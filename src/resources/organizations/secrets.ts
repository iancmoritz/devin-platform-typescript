// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Create a secret for an organization.
   */
  create(orgID: string, body: SecretCreateParams, options?: RequestOptions): APIPromise<Secret> {
    return this._client.post(path`/v3/organizations/${orgID}/secrets`, { body, ...options });
  }

  /**
   * List secrets for an organization.
   */
  list(
    orgID: string,
    query: SecretListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecretListResponse> {
    return this._client.get(path`/v3/organizations/${orgID}/secrets`, { query, ...options });
  }

  /**
   * Delete a secret for an organization.
   */
  delete(secretID: string, params: SecretDeleteParams, options?: RequestOptions): APIPromise<Secret> {
    const { org_id } = params;
    return this._client.delete(path`/v3/organizations/${org_id}/secrets/${secretID}`, options);
  }
}

export interface Secret {
  access_type: 'org' | 'personal';

  created_at: number;

  created_by: string;

  is_sensitive: boolean;

  key: string | null;

  note: string | null;

  secret_id: string;

  secret_type: 'cookie' | 'key-value' | 'totp';

  updated_at?: number | null;

  updated_by?: string | null;
}

export interface SecretListResponse {
  items: Array<Secret>;

  /**
   * Cursor to fetch the next page, or None if this is the last page.
   */
  end_cursor?: string | null;

  /**
   * Whether there are more items available after this page.
   */
  has_next_page?: boolean;

  /**
   * Optional total count (can be omitted for performance).
   */
  total?: number | null;
}

export interface SecretCreateParams {
  key: string;

  type: 'cookie' | 'key-value' | 'totp';

  value: string;

  is_sensitive?: boolean;

  note?: string | null;
}

export interface SecretListParams {
  after?: string | null;

  first?: number;
}

export interface SecretDeleteParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export declare namespace Secrets {
  export {
    type Secret as Secret,
    type SecretListResponse as SecretListResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
  };
}
