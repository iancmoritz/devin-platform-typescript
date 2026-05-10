// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class IPAccessList extends APIResource {
  /**
   * Clear IP Access List
   */
  clearAccessList(options?: RequestOptions): APIPromise<IPAccessListResponse> {
    return this._client.delete('/v3/enterprise/ip-access-list', options);
  }

  /**
   * Get IP Access List
   */
  getAccessList(options?: RequestOptions): APIPromise<IPAccessListResponse> {
    return this._client.get('/v3/enterprise/ip-access-list', options);
  }

  /**
   * Replace IP Access List
   */
  replaceAccessList(
    body: IPAccessListReplaceAccessListParams,
    options?: RequestOptions,
  ): APIPromise<IPAccessListResponse> {
    return this._client.put('/v3/enterprise/ip-access-list', { body, ...options });
  }
}

export interface IPAccessListResponse {
  ip_ranges: Array<string>;
}

export interface IPAccessListReplaceAccessListParams {
  ip_ranges: Array<string>;
}

export declare namespace IPAccessList {
  export {
    type IPAccessListResponse as IPAccessListResponse,
    type IPAccessListReplaceAccessListParams as IPAccessListReplaceAccessListParams,
  };
}
