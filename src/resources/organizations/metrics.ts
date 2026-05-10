// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MetricsAPI from '../enterprise/metrics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  /**
   * Get unique active users for a custom date range.
   */
  getActiveUsers(
    orgID: string,
    query: MetricGetActiveUsersParams,
    options?: RequestOptions,
  ): APIPromise<MetricsAPI.ActiveUserMetrics> {
    return this._client.get(path`/v3/organizations/${orgID}/metrics/active-users`, { query, ...options });
  }

  /**
   * Get daily active users for each day in the specified time range.
   */
  getDailyActiveUsers(
    orgID: string,
    query: MetricGetDailyActiveUsersParams,
    options?: RequestOptions,
  ): APIPromise<MetricGetDailyActiveUsersResponse> {
    return this._client.get(path`/v3/organizations/${orgID}/metrics/dau`, { query, ...options });
  }

  /**
   * Get monthly active users for each month in the specified time range.
   */
  getMonthlyActiveUsers(
    orgID: string,
    query: MetricGetMonthlyActiveUsersParams,
    options?: RequestOptions,
  ): APIPromise<MetricGetMonthlyActiveUsersResponse> {
    return this._client.get(path`/v3/organizations/${orgID}/metrics/mau`, { query, ...options });
  }

  /**
   * Get aggregated PR metrics for the organization.
   */
  getPrMetrics(
    orgID: string,
    query: MetricGetPrMetricsParams,
    options?: RequestOptions,
  ): APIPromise<MetricsAPI.PrMetrics> {
    return this._client.get(path`/v3/organizations/${orgID}/metrics/prs`, { query, ...options });
  }

  /**
   * Get aggregated search metrics for the organization.
   */
  getSearchMetrics(
    orgID: string,
    query: MetricGetSearchMetricsParams,
    options?: RequestOptions,
  ): APIPromise<MetricsAPI.SearchMetrics> {
    return this._client.get(path`/v3/organizations/${orgID}/metrics/searches`, { query, ...options });
  }

  /**
   * Get aggregated session metrics for the organization.
   */
  getSessionMetrics(
    orgID: string,
    query: MetricGetSessionMetricsParams,
    options?: RequestOptions,
  ): APIPromise<MetricsAPI.SessionMetrics> {
    return this._client.get(path`/v3/organizations/${orgID}/metrics/sessions`, { query, ...options });
  }

  /**
   * Get aggregated usage metrics for the organization.
   */
  getUsageMetrics(
    orgID: string,
    query: MetricGetUsageMetricsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MetricsAPI.UsageMetrics> {
    return this._client.get(path`/v3/organizations/${orgID}/metrics/usage`, { query, ...options });
  }

  /**
   * Get weekly active users for each week in the specified time range.
   */
  getWeeklyActiveUsers(
    orgID: string,
    query: MetricGetWeeklyActiveUsersParams,
    options?: RequestOptions,
  ): APIPromise<MetricGetWeeklyActiveUsersResponse> {
    return this._client.get(path`/v3/organizations/${orgID}/metrics/wau`, { query, ...options });
  }
}

/**
 * Validated list of active user metrics with ascending order and no overlapping
 * periods.
 */
export type MetricGetDailyActiveUsersResponse = Array<MetricsAPI.ActiveUserMetrics>;

/**
 * Validated list of active user metrics with ascending order and no overlapping
 * periods.
 */
export type MetricGetMonthlyActiveUsersResponse = Array<MetricsAPI.ActiveUserMetrics>;

/**
 * Validated list of active user metrics with ascending order and no overlapping
 * periods.
 */
export type MetricGetWeeklyActiveUsersResponse = Array<MetricsAPI.ActiveUserMetrics>;

export interface MetricGetActiveUsersParams {
  time_after: number;

  time_before: number;

  min_searches?: number;

  min_sessions?: number;
}

export interface MetricGetDailyActiveUsersParams {
  time_after: number;

  time_before: number;

  min_searches?: number;

  min_sessions?: number;
}

export interface MetricGetMonthlyActiveUsersParams {
  time_after: number;

  time_before: number;

  min_searches?: number;

  min_sessions?: number;
}

export interface MetricGetPrMetricsParams {
  time_after: number;

  time_before: number;

  playbook_id?: string | null;

  service_user_ids?: Array<string> | null;

  user_ids?: Array<string> | null;
}

export interface MetricGetSearchMetricsParams {
  time_after: number;

  time_before: number;
}

export interface MetricGetSessionMetricsParams {
  time_after: number;

  time_before: number;

  playbook_id?: string | null;

  service_user_ids?: Array<string> | null;

  user_ids?: Array<string> | null;
}

export interface MetricGetUsageMetricsParams {
  time_after?: number | null;

  time_before?: number | null;
}

export interface MetricGetWeeklyActiveUsersParams {
  time_after: number;

  time_before: number;

  min_searches?: number;

  min_sessions?: number;
}

export declare namespace Metrics {
  export {
    type MetricGetDailyActiveUsersResponse as MetricGetDailyActiveUsersResponse,
    type MetricGetMonthlyActiveUsersResponse as MetricGetMonthlyActiveUsersResponse,
    type MetricGetWeeklyActiveUsersResponse as MetricGetWeeklyActiveUsersResponse,
    type MetricGetActiveUsersParams as MetricGetActiveUsersParams,
    type MetricGetDailyActiveUsersParams as MetricGetDailyActiveUsersParams,
    type MetricGetMonthlyActiveUsersParams as MetricGetMonthlyActiveUsersParams,
    type MetricGetPrMetricsParams as MetricGetPrMetricsParams,
    type MetricGetSearchMetricsParams as MetricGetSearchMetricsParams,
    type MetricGetSessionMetricsParams as MetricGetSessionMetricsParams,
    type MetricGetUsageMetricsParams as MetricGetUsageMetricsParams,
    type MetricGetWeeklyActiveUsersParams as MetricGetWeeklyActiveUsersParams,
  };
}
