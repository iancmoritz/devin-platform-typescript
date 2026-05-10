// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MetricsAPI from '../metrics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Metrics extends APIResource {
  /**
   * Get aggregated usage metrics for the enterprise account.
   *
   * Returns counts of sessions, searches, and PRs (opened, closed, merged) within
   * the specified time range.
   */
  retrieveUsage(
    orgID: string,
    query: MetricRetrieveUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MetricsAPI.UsageMetrics> {
    return this._client.get(path`/v3/enterprise/organizations/${orgID}/metrics/usage`, { query, ...options });
  }
}

export interface MetricRetrieveUsageParams {
  time_after?: number | null;

  time_before?: number | null;
}

export declare namespace Metrics {
  export { type MetricRetrieveUsageParams as MetricRetrieveUsageParams };
}
