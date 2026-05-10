// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnterpriseAPI from '../enterprise';
import * as IdpGroupsAPI from './idp-groups';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Get a user by ID. Returns both direct and IDP-group-derived role assignments.
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/v3/enterprise/members/users/${userID}`, options);
  }

  /**
   * Update User
   */
  update(userID: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<User> {
    return this._client.patch(path`/v3/enterprise/members/users/${userID}`, { body, ...options });
  }

  /**
   * List Users
   */
  list(query: UserListParams | null | undefined = {}, options?: RequestOptions): APIPromise<PaginatedUser> {
    return this._client.get('/v3/enterprise/members/users', { query, ...options });
  }

  /**
   * Delete User
   */
  delete(userID: string, options?: RequestOptions): APIPromise<User> {
    return this._client.delete(path`/v3/enterprise/members/users/${userID}`, options);
  }

  /**
   * Invite Users
   */
  invite(body: UserInviteParams, options?: RequestOptions): APIPromise<UserInviteResponse> {
    return this._client.post('/v3/enterprise/members/users', { body, ...options });
  }
}

/**
 * A role assignment inherited via IDP group membership.
 */
export interface IdpRoleAssignment {
  idp_group_name: string;

  role: EnterpriseAPI.Role;

  org_id?: string | null;
}

export interface PaginatedUser {
  items: Array<User>;

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

export interface User {
  email: string | null;

  name: string | null;

  role_assignments: Array<IdpGroupsAPI.RoleAssignment>;

  user_id: string;
}

export interface UserUpdateRole {
  role_id: string;
}

/**
 * User with both direct and IDP-group-derived role assignments.
 */
export interface UserRetrieveResponse {
  email: string | null;

  name: string | null;

  role_assignments: Array<IdpGroupsAPI.RoleAssignment>;

  user_id: string;

  idp_role_assignments?: Array<IdpRoleAssignment>;
}

export type UserInviteResponse = Array<User>;

export interface UserUpdateParams {
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

export interface UserInviteParams {
  emails: Array<string>;

  enterprise_role_id: string;
}

export declare namespace Users {
  export {
    type IdpRoleAssignment as IdpRoleAssignment,
    type PaginatedUser as PaginatedUser,
    type User as User,
    type UserUpdateRole as UserUpdateRole,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserInviteResponse as UserInviteResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserInviteParams as UserInviteParams,
  };
}
