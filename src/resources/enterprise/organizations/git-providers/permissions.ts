// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Permissions extends APIResource {
  /**
   * Replace Git Permissions
   */
  create(
    orgID: string,
    body: PermissionCreateParams,
    options?: RequestOptions,
  ): APIPromise<PermissionCreateResponse> {
    return this._client.put(path`/v3/enterprise/organizations/${orgID}/git-providers/permissions`, {
      body,
      ...options,
    });
  }

  /**
   * List git permissions for the organization.
   */
  list(
    orgID: string,
    query: PermissionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PermissionListResponse> {
    return this._client.get(path`/v3/enterprise/organizations/${orgID}/git-providers/permissions`, {
      query,
      ...options,
    });
  }

  /**
   * Delete Git Permission
   */
  delete(
    gitPermissionID: string,
    params: PermissionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<GitPermission> {
    const { org_id } = params;
    return this._client.delete(
      path`/v3/enterprise/organizations/${org_id}/git-providers/permissions/${gitPermissionID}`,
      options,
    );
  }

  /**
   * Clear Git Permissions
   */
  deleteAll(orgID: string, options?: RequestOptions): APIPromise<PermissionDeleteAllResponse> {
    return this._client.delete(
      path`/v3/enterprise/organizations/${orgID}/git-providers/permissions`,
      options,
    );
  }
}

export interface GitPermission {
  git_connection_id: string;

  git_permission_id: string;

  created_at?: number | null;

  group_prefix?: string | null;

  prefix_path?: string | null;

  repo_path?: string | null;
}

export interface GitPermissionBulkCreate {
  permissions: Array<GitPermissionBulkCreate.Permission>;
}

export namespace GitPermissionBulkCreate {
  export interface Permission {
    git_connection_id: string;

    group_prefix?: string | null;

    prefix_path?: string | null;

    repo_path?: string | null;
  }
}

export type PermissionCreateResponse = Array<GitPermission>;

export interface PermissionListResponse {
  items: Array<GitPermission>;

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

export type PermissionDeleteAllResponse = Array<GitPermission>;

export interface PermissionCreateParams {
  permissions: Array<PermissionCreateParams.Permission>;
}

export namespace PermissionCreateParams {
  export interface Permission {
    git_connection_id: string;

    group_prefix?: string | null;

    prefix_path?: string | null;

    repo_path?: string | null;
  }
}

export interface PermissionListParams {
  after?: string | null;

  first?: number;
}

export interface PermissionDeleteParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export declare namespace Permissions {
  export {
    type GitPermission as GitPermission,
    type GitPermissionBulkCreate as GitPermissionBulkCreate,
    type PermissionCreateResponse as PermissionCreateResponse,
    type PermissionListResponse as PermissionListResponse,
    type PermissionDeleteAllResponse as PermissionDeleteAllResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionListParams as PermissionListParams,
    type PermissionDeleteParams as PermissionDeleteParams,
  };
}
