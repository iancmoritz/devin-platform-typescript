// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IdpGroupsAPI from './idp-groups';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ServiceUsers extends APIResource {
  /**
   * Get a service user by ID.
   */
  retrieve(serviceUserID: string, options?: RequestOptions): APIPromise<ServiceUser> {
    return this._client.get(path`/v3/enterprise/members/service-users/${serviceUserID}`, options);
  }

  /**
   * Update enterprise role for service user.
   */
  update(
    serviceUserID: string,
    body: ServiceUserUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ServiceUser> {
    return this._client.patch(path`/v3/enterprise/members/service-users/${serviceUserID}`, {
      body,
      ...options,
    });
  }

  /**
   * List service users in the enterprise.
   */
  list(
    query: ServiceUserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedServiceUser> {
    return this._client.get('/v3/enterprise/members/service-users', { query, ...options });
  }

  /**
   * Delete Service User
   */
  delete(serviceUserID: string, options?: RequestOptions): APIPromise<ServiceUser> {
    return this._client.delete(path`/v3/enterprise/members/service-users/${serviceUserID}`, options);
  }

  /**
   * Assign enterprise role to service user.
   */
  assign(
    serviceUserID: string,
    body: ServiceUserAssignParams,
    options?: RequestOptions,
  ): APIPromise<ServiceUser> {
    return this._client.post(path`/v3/enterprise/members/service-users/${serviceUserID}`, {
      body,
      ...options,
    });
  }
}

export interface PaginatedServiceUser {
  items: Array<ServiceUser>;

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

export interface ServiceUser {
  expires_at: number | null;

  name: string;

  role_assignments: Array<IdpGroupsAPI.RoleAssignment>;

  service_user_id: string;
}

export interface ServiceUserUpdateRole {
  role_id: string;
}

export interface ServiceUserUpdateParams {
  role_id: string;
}

export interface ServiceUserListParams {
  after?: string | null;

  first?: number;
}

export interface ServiceUserAssignParams {
  role_id: string;
}

export declare namespace ServiceUsers {
  export {
    type PaginatedServiceUser as PaginatedServiceUser,
    type ServiceUser as ServiceUser,
    type ServiceUserUpdateRole as ServiceUserUpdateRole,
    type ServiceUserUpdateParams as ServiceUserUpdateParams,
    type ServiceUserListParams as ServiceUserListParams,
    type ServiceUserAssignParams as ServiceUserAssignParams,
  };
}
