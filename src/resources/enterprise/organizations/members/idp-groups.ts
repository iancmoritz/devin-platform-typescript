// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as IdpGroupsAPI from '../../members/idp-groups';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class IdpGroups extends APIResource {
  /**
   * Get Organization IDP Group
   */
  retrieve(
    idpGroupName: string,
    params: IdpGroupRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<IdpGroupsAPI.IdpGroup> {
    const { org_id } = params;
    return this._client.get(
      path`/v3/enterprise/organizations/${org_id}/members/idp-groups/${idpGroupName}`,
      options,
    );
  }

  /**
   * Assign Organization IDP Group
   */
  update(
    idpGroupName: string,
    params: IdpGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IdpGroupsAPI.IdpGroup> {
    const { org_id, ...body } = params;
    return this._client.post(
      path`/v3/enterprise/organizations/${org_id}/members/idp-groups/${idpGroupName}`,
      { body, ...options },
    );
  }

  /**
   * Remove idp_group from the organization.
   */
  delete(
    idpGroupName: string,
    params: IdpGroupDeleteParams,
    options?: RequestOptions,
  ): APIPromise<IdpGroupsAPI.IdpGroup> {
    const { org_id } = params;
    return this._client.delete(
      path`/v3/enterprise/organizations/${org_id}/members/idp-groups/${idpGroupName}`,
      options,
    );
  }

  /**
   * List Organization IDP Groups
   */
  retrieveIdpGroups(
    orgID: string,
    query: IdpGroupRetrieveIdpGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IdpGroupsAPI.PaginatedIdpGroup> {
    return this._client.get(path`/v3/enterprise/organizations/${orgID}/members/idp-groups`, {
      query,
      ...options,
    });
  }
}

export interface IdpGroupRetrieveParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface IdpGroupUpdateParams {
  /**
   * Path param: Organization ID (prefix: org-)
   */
  org_id: string;

  /**
   * Body param
   */
  role_id: string;
}

export interface IdpGroupDeleteParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface IdpGroupRetrieveIdpGroupsParams {
  after?: string | null;

  first?: number;
}

export declare namespace IdpGroups {
  export {
    type IdpGroupRetrieveParams as IdpGroupRetrieveParams,
    type IdpGroupUpdateParams as IdpGroupUpdateParams,
    type IdpGroupDeleteParams as IdpGroupDeleteParams,
    type IdpGroupRetrieveIdpGroupsParams as IdpGroupRetrieveIdpGroupsParams,
  };
}
