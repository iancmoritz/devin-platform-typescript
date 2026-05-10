// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnterpriseAPI from '../enterprise';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class IdpGroups extends APIResource {
  /**
   * Get IDP Group
   */
  retrieve(idpGroupName: string, options?: RequestOptions): APIPromise<IdpGroup> {
    return this._client.get(path`/v3/enterprise/members/idp-groups/${idpGroupName}`, options);
  }

  /**
   * Update IDP Group
   */
  update(idpGroupName: string, body: IdpGroupUpdateParams, options?: RequestOptions): APIPromise<IdpGroup> {
    return this._client.patch(path`/v3/enterprise/members/idp-groups/${idpGroupName}`, { body, ...options });
  }

  /**
   * List IDP Groups
   */
  list(
    query: IdpGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedIdpGroup> {
    return this._client.get('/v3/enterprise/members/idp-groups', { query, ...options });
  }

  /**
   * Delete IDP Group
   */
  delete(idpGroupName: string, options?: RequestOptions): APIPromise<IdpGroup> {
    return this._client.delete(path`/v3/enterprise/members/idp-groups/${idpGroupName}`, options);
  }

  /**
   * Assign IDP Group
   */
  assign(idpGroupName: string, body: IdpGroupAssignParams, options?: RequestOptions): APIPromise<IdpGroup> {
    return this._client.post(path`/v3/enterprise/members/idp-groups/${idpGroupName}`, { body, ...options });
  }
}

export interface IdpGroup {
  idp_group_name: string;

  role_assignments: Array<RoleAssignment>;
}

export interface IdpGroupUpdateRole {
  role_id: string;
}

export interface PaginatedIdpGroup {
  items: Array<IdpGroup>;

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

export interface RoleAssignment {
  role: EnterpriseAPI.Role;

  org_id?: string | null;
}

export interface IdpGroupUpdateParams {
  role_id: string;
}

export interface IdpGroupListParams {
  after?: string | null;

  first?: number;
}

export interface IdpGroupAssignParams {
  role_id: string;
}

export declare namespace IdpGroups {
  export {
    type IdpGroup as IdpGroup,
    type IdpGroupUpdateRole as IdpGroupUpdateRole,
    type PaginatedIdpGroup as PaginatedIdpGroup,
    type RoleAssignment as RoleAssignment,
    type IdpGroupUpdateParams as IdpGroupUpdateParams,
    type IdpGroupListParams as IdpGroupListParams,
    type IdpGroupAssignParams as IdpGroupAssignParams,
  };
}
