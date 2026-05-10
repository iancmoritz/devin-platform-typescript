// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Organizations extends APIResource {
  /**
   * Delete an org-level Devin ACU limit.
   */
  deleteAcuLimit(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v3/enterprise/consumption/acu-limits/devin/organizations/${orgID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create or update an org-level Devin ACU limit.
   */
  setAcuLimit(
    orgID: string,
    body: OrganizationSetAcuLimitParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/v3/enterprise/consumption/acu-limits/devin/organizations/${orgID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrganizationSetAcuLimitParams {
  cycle_acu_limit: number;
}

export declare namespace Organizations {
  export { type OrganizationSetAcuLimitParams as OrganizationSetAcuLimitParams };
}
