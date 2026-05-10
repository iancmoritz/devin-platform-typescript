// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PermissionsAPI from './permissions';
import {
  GitPermission,
  GitPermissionBulkCreate,
  PermissionCreateParams,
  PermissionCreateResponse,
  PermissionDeleteAllResponse,
  PermissionDeleteParams,
  PermissionListParams,
  PermissionListResponse,
  Permissions,
} from './permissions';

export class GitProviders extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
}

GitProviders.Permissions = Permissions;

export declare namespace GitProviders {
  export {
    Permissions as Permissions,
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
