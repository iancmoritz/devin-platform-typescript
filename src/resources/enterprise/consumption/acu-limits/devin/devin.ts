// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as OrganizationsAPI from './organizations';
import { OrganizationSetAcuLimitParams, Organizations } from './organizations';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Devin extends APIResource {
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);

  /**
   * Get all org-level Devin ACU limits for this enterprise.
   */
  getAcuLimits(
    query: DevinGetAcuLimitsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DevinGetAcuLimitsResponse> {
    return this._client.get('/v3/enterprise/consumption/acu-limits/devin', { query, ...options });
  }
}

export interface DevinGetAcuLimitsResponse {
  items: Array<DevinGetAcuLimitsResponse.Item>;

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

export namespace DevinGetAcuLimitsResponse {
  export interface Item {
    cycle_acu_limit: number;

    scope: 'enterprise' | 'org' | 'user';

    org_id?: string | null;

    user_id?: string | null;
  }
}

export interface DevinGetAcuLimitsParams {
  after?: string | null;

  first?: number;
}

Devin.Organizations = Organizations;

export declare namespace Devin {
  export {
    type DevinGetAcuLimitsResponse as DevinGetAcuLimitsResponse,
    type DevinGetAcuLimitsParams as DevinGetAcuLimitsParams,
  };

  export {
    Organizations as Organizations,
    type OrganizationSetAcuLimitParams as OrganizationSetAcuLimitParams,
  };
}
