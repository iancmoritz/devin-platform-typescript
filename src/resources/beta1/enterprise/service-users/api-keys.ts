// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Create a new API key for a service user.
   *
   * The caller must have ManageAccountServiceUsers permission.
   */
  create(
    serviceUserID: string,
    body: APIKeyCreateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyWithToken> {
    return this._client.post(path`/v3beta1/enterprise/service-users/${serviceUserID}/api-keys`, {
      body,
      ...options,
    });
  }

  /**
   * List API keys for a service user, optionally filtered by status.
   */
  list(
    serviceUserID: string,
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyListResponse> {
    return this._client.get(path`/v3beta1/enterprise/service-users/${serviceUserID}/api-keys`, {
      query,
      ...options,
    });
  }

  /**
   * Revoke an API key for a service user.
   *
   * Returns 404 if the key is not found, 409 if already revoked.
   */
  revoke(apiKeyID: string, params: APIKeyRevokeParams, options?: RequestOptions): APIPromise<APIKey> {
    const { service_user_id } = params;
    return this._client.delete(
      path`/v3beta1/enterprise/service-users/${service_user_id}/api-keys/${apiKeyID}`,
      options,
    );
  }

  /**
   * Rotate an API key for a service user.
   *
   * Creates a new key. By default revokes the old key; set revoke_current=false for
   * graceful rollover where both keys remain active temporarily. Returns 404 if the
   * key is not found, 400 if the key is not active.
   */
  rotate(
    apiKeyID: string,
    params: APIKeyRotateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyWithToken> {
    const { service_user_id, ...body } = params;
    return this._client.post(
      path`/v3beta1/enterprise/service-users/${service_user_id}/api-keys/${apiKeyID}/rotate`,
      { body, ...options },
    );
  }
}

/**
 * Shared response model for API key details (used by both PAT and service user
 * endpoints).
 */
export interface APIKey {
  api_key_id: string;

  api_key_name: string;

  created_at: number;

  expires_at: number | null;

  is_active: boolean;

  last_used_at: number | null;

  revoked_at: number | null;
}

/**
 * Shared response model for API key creation/rotation (includes one-time token).
 */
export interface APIKeyWithToken {
  /**
   * The raw API token. This is only shown once at creation/rotation time.
   */
  token: string;

  api_key_id: string;

  api_key_name: string;
}

export interface APIKeyListResponse {
  items: Array<APIKey>;

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

export interface APIKeyCreateParams {
  name: string;

  /**
   * Optional expiration as a UNIX timestamp in seconds. Must be in the future if
   * provided.
   */
  expires_at?: number | null;
}

export interface APIKeyListParams {
  status?: 'active' | 'revoked' | 'expired' | 'all';
}

export interface APIKeyRevokeParams {
  /**
   * Service user ID (prefix: service-user-)
   */
  service_user_id: string;
}

export interface APIKeyRotateParams {
  /**
   * Path param: Service user ID (prefix: service-user-)
   */
  service_user_id: string;

  /**
   * Body param: Optional expiration for the new key as a UNIX timestamp in seconds.
   * Null for no expiration.
   */
  new_key_expires_at?: number | null;

  /**
   * Body param: Whether to revoke the current key. Set to False for graceful
   * rollover.
   */
  revoke_current?: boolean;
}

export declare namespace APIKeys {
  export {
    type APIKey as APIKey,
    type APIKeyWithToken as APIKeyWithToken,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyRevokeParams as APIKeyRevokeParams,
    type APIKeyRotateParams as APIKeyRotateParams,
  };
}
