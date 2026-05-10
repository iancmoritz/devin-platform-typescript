// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class IdpGroups extends APIResource {
  /**
   * Remove a registered IDP group from this enterprise.
   */
  deleteIdpGroup(idpGroupName: string, options?: RequestOptions): APIPromise<IdpGroupResponse> {
    return this._client.delete(path`/v3/enterprise/idp-groups/${idpGroupName}`, options);
  }

  /**
   * List IDP groups registered with this enterprise.
   */
  listIdpGroups(
    query: IdpGroupListIdpGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IdpGroupListIdpGroupsResponse> {
    return this._client.get('/v3/enterprise/idp-groups', { query, ...options });
  }

  /**
   * Bulk create IDP groups for this enterprise. Existing groups are ignored.
   */
  registerIdpGroups(
    body: IdpGroupRegisterIdpGroupsParams,
    options?: RequestOptions,
  ): APIPromise<IdpGroupRegisterIdpGroupsResponse> {
    return this._client.post('/v3/enterprise/idp-groups', { body, ...options });
  }
}

export interface IdpGroupResponse {
  idp_group_name: string;
}

export interface IdpGroupListIdpGroupsResponse {
  items: Array<IdpGroupResponse>;

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

export type IdpGroupRegisterIdpGroupsResponse = Array<IdpGroupResponse>;

export interface IdpGroupListIdpGroupsParams {
  after?: string | null;

  first?: number;
}

export interface IdpGroupRegisterIdpGroupsParams {
  idp_group_names: Array<string>;
}

export declare namespace IdpGroups {
  export {
    type IdpGroupResponse as IdpGroupResponse,
    type IdpGroupListIdpGroupsResponse as IdpGroupListIdpGroupsResponse,
    type IdpGroupRegisterIdpGroupsResponse as IdpGroupRegisterIdpGroupsResponse,
    type IdpGroupListIdpGroupsParams as IdpGroupListIdpGroupsParams,
    type IdpGroupRegisterIdpGroupsParams as IdpGroupRegisterIdpGroupsParams,
  };
}
