// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UsersAPI from '../../members/users';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Assign Organization User
   */
  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<UsersAPI.User> {
    const { org_id, ...body } = params;
    return this._client.post(path`/v3/enterprise/organizations/${org_id}/members/users/${userID}`, {
      body,
      ...options,
    });
  }

  /**
   * List Organization Users
   */
  list(
    orgID: string,
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsersAPI.PaginatedUser> {
    return this._client.get(path`/v3/enterprise/organizations/${orgID}/members/users`, { query, ...options });
  }

  /**
   * Delete Organization User
   */
  delete(userID: string, params: UserDeleteParams, options?: RequestOptions): APIPromise<UsersAPI.User> {
    const { org_id } = params;
    return this._client.delete(path`/v3/enterprise/organizations/${org_id}/members/users/${userID}`, options);
  }
}

export interface UserUpdateParams {
  /**
   * Path param: Organization ID (prefix: org-)
   */
  org_id: string;

  /**
   * Body param
   */
  role_id: string;
}

export interface UserListParams {
  after?: string | null;

  /**
   * Filter by exact email address
   */
  email?: string | null;

  first?: number;
}

export interface UserDeleteParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export declare namespace Users {
  export {
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
  };
}
