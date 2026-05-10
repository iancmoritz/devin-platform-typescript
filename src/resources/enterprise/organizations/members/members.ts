// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MembersAPI from '../../members/members';
import * as IdpGroupsAPI from './idp-groups';
import {
  IdpGroupDeleteParams,
  IdpGroupRetrieveIdpGroupsParams,
  IdpGroupRetrieveParams,
  IdpGroupUpdateParams,
  IdpGroups,
} from './idp-groups';
import * as ServiceUsersAPI from './service-users';
import {
  ServiceUserDeleteParams,
  ServiceUserRetrieveServiceUsersParams,
  ServiceUserUpdateParams,
  ServiceUsers,
} from './service-users';
import * as UsersAPI from './users';
import { UserDeleteParams, UserListParams, UserUpdateParams, Users } from './users';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Members extends APIResource {
  idpGroups: IdpGroupsAPI.IdpGroups = new IdpGroupsAPI.IdpGroups(this._client);
  serviceUsers: ServiceUsersAPI.ServiceUsers = new ServiceUsersAPI.ServiceUsers(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * List users whose organization membership is derived from IDP group assignments.
   */
  retrieveIdpUsers(
    orgID: string,
    query: MemberRetrieveIdpUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MembersAPI.PaginatedIdpGroupUser> {
    return this._client.get(path`/v3/enterprise/organizations/${orgID}/members/idp-users`, {
      query,
      ...options,
    });
  }
}

export interface MemberRetrieveIdpUsersParams {
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
  export { type MemberRetrieveIdpUsersParams as MemberRetrieveIdpUsersParams };

  export {
    IdpGroups as IdpGroups,
    type IdpGroupRetrieveParams as IdpGroupRetrieveParams,
    type IdpGroupUpdateParams as IdpGroupUpdateParams,
    type IdpGroupDeleteParams as IdpGroupDeleteParams,
    type IdpGroupRetrieveIdpGroupsParams as IdpGroupRetrieveIdpGroupsParams,
  };

  export {
    ServiceUsers as ServiceUsers,
    type ServiceUserUpdateParams as ServiceUserUpdateParams,
    type ServiceUserDeleteParams as ServiceUserDeleteParams,
    type ServiceUserRetrieveServiceUsersParams as ServiceUserRetrieveServiceUsersParams,
  };

  export {
    Users as Users,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
  };
}
