// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class OrgGroupLimits extends APIResource {
  /**
   * Get the current organization groups configuration.
   */
  getOrgGroupConfig(options?: RequestOptions): APIPromise<OrgGroupsConfig> {
    return this._client.get('/v3/enterprise/org-group-limits', options);
  }

  /**
   * Update the organization groups configuration.
   *
   * This endpoint replaces the entire org groups configuration with the provided
   * config.
   *
   * - Groups not in the request will be deleted
   * - Groups in the request will be created or updated to match the config
   */
  updateOrgGroupConfig(
    body: OrgGroupLimitUpdateOrgGroupConfigParams,
    options?: RequestOptions,
  ): APIPromise<OrgGroupsConfig> {
    return this._client.put('/v3/enterprise/org-group-limits', { body, ...options });
  }
}

/**
 * Configuration mapping group names to their settings.
 */
export interface OrgGroupsConfig {
  groups: { [key: string]: OrgGroupsConfig.Groups };
}

export namespace OrgGroupsConfig {
  export interface Groups {
    org_ids: Array<string>;

    max_cycle_acus?: number | null;
  }
}

export interface OrgGroupLimitUpdateOrgGroupConfigParams {
  groups: { [key: string]: OrgGroupLimitUpdateOrgGroupConfigParams.Groups };
}

export namespace OrgGroupLimitUpdateOrgGroupConfigParams {
  export interface Groups {
    org_ids: Array<string>;

    max_cycle_acus?: number | null;
  }
}

export declare namespace OrgGroupLimits {
  export {
    type OrgGroupsConfig as OrgGroupsConfig,
    type OrgGroupLimitUpdateOrgGroupConfigParams as OrgGroupLimitUpdateOrgGroupConfigParams,
  };
}
