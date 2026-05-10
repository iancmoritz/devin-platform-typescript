// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ServiceUsersAPI from '../../members/service-users';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ServiceUsers extends APIResource {
  /**
   * Assign organization role to service user.
   */
  update(
    serviceUserID: string,
    params: ServiceUserUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ServiceUsersAPI.ServiceUser> {
    const { org_id, ...body } = params;
    return this._client.post(
      path`/v3/enterprise/organizations/${org_id}/members/service-users/${serviceUserID}`,
      { body, ...options },
    );
  }

  /**
   * Remove service user from the organization.
   */
  delete(
    serviceUserID: string,
    params: ServiceUserDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ServiceUsersAPI.ServiceUser> {
    const { org_id } = params;
    return this._client.delete(
      path`/v3/enterprise/organizations/${org_id}/members/service-users/${serviceUserID}`,
      options,
    );
  }

  /**
   * List service users in the organization.
   */
  retrieveServiceUsers(
    orgID: string,
    query: ServiceUserRetrieveServiceUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServiceUsersAPI.PaginatedServiceUser> {
    return this._client.get(path`/v3/enterprise/organizations/${orgID}/members/service-users`, {
      query,
      ...options,
    });
  }
}

export interface ServiceUserUpdateParams {
  /**
   * Path param: Organization ID (prefix: org-)
   */
  org_id: string;

  /**
   * Body param
   */
  role_id: string;
}

export interface ServiceUserDeleteParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface ServiceUserRetrieveServiceUsersParams {
  after?: string | null;

  first?: number;
}

export declare namespace ServiceUsers {
  export {
    type ServiceUserUpdateParams as ServiceUserUpdateParams,
    type ServiceUserDeleteParams as ServiceUserDeleteParams,
    type ServiceUserRetrieveServiceUsersParams as ServiceUserRetrieveServiceUsersParams,
  };
}
