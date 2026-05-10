// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IdpGroupsAPI from './idp-groups';
import {
  IdpGroup,
  IdpGroupAssignParams,
  IdpGroupListParams,
  IdpGroupUpdateParams,
  IdpGroupUpdateRole,
  IdpGroups,
  PaginatedIdpGroup,
  RoleAssignment,
} from './idp-groups';
import * as ServiceUsersAPI from './service-users';
import {
  PaginatedServiceUser,
  ServiceUser,
  ServiceUserAssignParams,
  ServiceUserListParams,
  ServiceUserUpdateParams,
  ServiceUserUpdateRole,
  ServiceUsers,
} from './service-users';
import * as UsersAPI from './users';
import {
  IdpRoleAssignment,
  PaginatedUser,
  User,
  UserInviteParams,
  UserInviteResponse,
  UserListParams,
  UserRetrieveResponse,
  UserUpdateParams,
  UserUpdateRole,
  Users,
} from './users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Members extends APIResource {
  idpGroups: IdpGroupsAPI.IdpGroups = new IdpGroupsAPI.IdpGroups(this._client);
  serviceUsers: ServiceUsersAPI.ServiceUsers = new ServiceUsersAPI.ServiceUsers(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * List users whose enterprise membership is derived from IDP group assignments.
   */
  listIdpGroupUsers(
    query: MemberListIdpGroupUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedIdpGroupUser> {
    return this._client.get('/v3/enterprise/members/idp-users', { query, ...options });
  }
}

export interface PaginatedIdpGroupUser {
  items: Array<PaginatedIdpGroupUser.Item>;

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

export namespace PaginatedIdpGroupUser {
  /**
   * A user whose membership is derived from IDP group assignments.
   */
  export interface Item {
    email: string | null;

    idp_role_assignments: Array<UsersAPI.IdpRoleAssignment>;

    name: string | null;

    user_id: string;
  }
}

export interface MemberListIdpGroupUsersParams {
  after?: string | null;

  /**
   * Filter by exact email address
   */
  email?: string | null;

  first?: number;
}

Members.IdpGroups = IdpGroups;
Members.ServiceUsers = ServiceUsers;
Members.Users = Users;

export declare namespace Members {
  export {
    type PaginatedIdpGroupUser as PaginatedIdpGroupUser,
    type MemberListIdpGroupUsersParams as MemberListIdpGroupUsersParams,
  };

  export {
    IdpGroups as IdpGroups,
    type IdpGroup as IdpGroup,
    type IdpGroupUpdateRole as IdpGroupUpdateRole,
    type PaginatedIdpGroup as PaginatedIdpGroup,
    type RoleAssignment as RoleAssignment,
    type IdpGroupUpdateParams as IdpGroupUpdateParams,
    type IdpGroupListParams as IdpGroupListParams,
    type IdpGroupAssignParams as IdpGroupAssignParams,
  };

  export {
    ServiceUsers as ServiceUsers,
    type PaginatedServiceUser as PaginatedServiceUser,
    type ServiceUser as ServiceUser,
    type ServiceUserUpdateRole as ServiceUserUpdateRole,
    type ServiceUserUpdateParams as ServiceUserUpdateParams,
    type ServiceUserListParams as ServiceUserListParams,
    type ServiceUserAssignParams as ServiceUserAssignParams,
  };

  export {
    Users as Users,
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
