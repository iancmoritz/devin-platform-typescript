// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Metrics extends APIResource {
  /**
   * Get unique active users for a custom date range.
   *
   * A user is considered active if they have created at least min_sessions sessions
   * OR at least min_searches searches within the specified time range.
   *
   * Returns a single count of unique active users across the entire range.
   */
  getActiveUsers(query: MetricGetActiveUsersParams, options?: RequestOptions): APIPromise<ActiveUserMetrics> {
    return this._client.get('/v3/enterprise/metrics/active-users', { query, ...options });
  }

  /**
   * Get daily active users for each day in the specified time range.
   *
   * A user is considered active on a given day if they have created at least
   * min_sessions sessions OR at least min_searches searches during that UTC day.
   *
   * Returns a list of daily active user counts, one entry per day in the range.
   */
  getDailyActiveUsers(
    query: MetricGetDailyActiveUsersParams,
    options?: RequestOptions,
  ): APIPromise<MetricGetDailyActiveUsersResponse> {
    return this._client.get('/v3/enterprise/metrics/dau', { query, ...options });
  }

  /**
   * Get monthly active users for each month in the specified time range.
   *
   * A user is considered active in a given month if they have created at least
   * min_sessions sessions OR at least min_searches searches during that UTC month.
   *
   * Returns a list of monthly active user counts, one entry per month in the range.
   */
  getMonthlyActiveUsers(
    query: MetricGetMonthlyActiveUsersParams,
    options?: RequestOptions,
  ): APIPromise<MetricGetMonthlyActiveUsersResponse> {
    return this._client.get('/v3/enterprise/metrics/mau', { query, ...options });
  }

  /**
   * Get aggregated PR metrics for the enterprise account.
   *
   * Optionally filter by playbook_id to get metrics for PRs from sessions created
   * with a specific playbook.
   */
  getPrMetrics(query: MetricGetPrMetricsParams, options?: RequestOptions): APIPromise<PrMetrics> {
    return this._client.get('/v3/enterprise/metrics/prs', { query, ...options });
  }

  /**
   * Get aggregated search metrics for the enterprise account.
   */
  getSearchMetrics(query: MetricGetSearchMetricsParams, options?: RequestOptions): APIPromise<SearchMetrics> {
    return this._client.get('/v3/enterprise/metrics/searches', { query, ...options });
  }

  /**
   * Get aggregated session metrics for the enterprise account.
   *
   * Optionally filter by playbook_id to get metrics for sessions created with a
   * specific playbook.
   */
  getSessionMetrics(
    query: MetricGetSessionMetricsParams,
    options?: RequestOptions,
  ): APIPromise<SessionMetrics> {
    return this._client.get('/v3/enterprise/metrics/sessions', { query, ...options });
  }

  /**
   * Get session counts and ACU consumption grouped by category and subcategory.
   */
  getSessionMetricsByCategory(
    query: MetricGetSessionMetricsByCategoryParams,
    options?: RequestOptions,
  ): APIPromise<MetricGetSessionMetricsByCategoryResponse> {
    return this._client.get('/v3/enterprise/metrics/sessions-by-category', { query, ...options });
  }

  /**
   * Get aggregated usage metrics for the enterprise account.
   *
   * Returns counts of sessions, searches, and PRs (opened, closed, merged) within
   * the specified time range.
   */
  getUsageMetrics(
    query: MetricGetUsageMetricsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageMetrics> {
    return this._client.get('/v3/enterprise/metrics/usage', { query, ...options });
  }

  /**
   * Get weekly active users for each week in the specified time range.
   *
   * A user is considered active in a given week if they have created at least
   * min_sessions sessions OR at least min_searches searches during that UTC week.
   *
   * Weeks are defined as Monday 00:00:00 UTC to Sunday 23:59:59 UTC.
   *
   * Returns a list of weekly active user counts, one entry per week in the range.
   */
  getWeeklyActiveUsers(
    query: MetricGetWeeklyActiveUsersParams,
    options?: RequestOptions,
  ): APIPromise<MetricGetWeeklyActiveUsersResponse> {
    return this._client.get('/v3/enterprise/metrics/wau', { query, ...options });
  }
}

/**
 * Single entry for active users over time.
 */
export interface ActiveUserMetrics {
  active_users: number;

  end_time: number;

  start_time: number;
}

/**
 * Response model for PR metrics.
 */
export interface PrMetrics {
  /**
   * PRs Devin authored that were closed without merging.
   */
  prs_closed_count: number;

  /**
   * Total PRs Devin authored across all states (open + merged + closed).
   */
  prs_created_count: number;

  /**
   * PRs Devin authored that were merged.
   */
  prs_merged_count: number;

  /**
   * PRs Devin authored that are currently open.
   */
  prs_opened_count: number;

  /**
   * PRs Devin took over that were closed without merging.
   */
  prs_taken_over_closed_count?: number;

  /**
   * Total PRs Devin took over across all states (open + merged + closed). A
   * take-over is when Devin pushed commits to a PR it did not originally create.
   */
  prs_taken_over_count?: number;

  /**
   * PRs Devin took over that were merged.
   */
  prs_taken_over_merged_count?: number;

  /**
   * PRs Devin took over that are currently open.
   */
  prs_taken_over_opened_count?: number;
}

/**
 * Response model for search metrics.
 */
export interface SearchMetrics {
  searches_created_count: number;
}

/**
 * Session counts by size category.
 */
export interface SessionCountsBySize {
  l?: number;

  m?: number;

  s?: number;

  xl?: number;

  xs?: number;
}

/**
 * Response model for session metrics.
 */
export interface SessionMetrics {
  avg_acus_per_session: number;

  /**
   * Session counts by origin type, exposed on the v3 metrics API.
   *
   * A curated subset of `SessionOrigin`: legacy origins (cli, vscode_extension,
   * devin_spaces) are intentionally not surfaced. Counts for sessions with a
   * `scheduled` DB origin roll into `automation` via the canonical
   * `db_origin_to_api` mapping, since automations are a superset that schedules will
   * migrate into.
   */
  sessions_created_by_origin: SessionMetrics.SessionsCreatedByOrigin;

  /**
   * Session counts by size category.
   */
  sessions_created_by_size: SessionCountsBySize;

  sessions_created_count: number;

  sessions_created_with_playbook_count: number;

  sessions_created_with_search_count: number;

  /**
   * Session counts by size category.
   */
  sessions_with_merged_prs_by_size: SessionCountsBySize;

  sessions_with_merged_prs_count: number;
}

export namespace SessionMetrics {
  /**
   * Session counts by origin type, exposed on the v3 metrics API.
   *
   * A curated subset of `SessionOrigin`: legacy origins (cli, vscode_extension,
   * devin_spaces) are intentionally not surfaced. Counts for sessions with a
   * `scheduled` DB origin roll into `automation` via the canonical
   * `db_origin_to_api` mapping, since automations are a superset that schedules will
   * migrate into.
   */
  export interface SessionsCreatedByOrigin {
    api?: number;

    automation?: number;

    desktop?: number;

    jira?: number;

    linear?: number;

    slack?: number;

    teams?: number;

    webapp?: number;
  }
}

export interface UsageMetrics {
  prs_created_count: number;

  prs_merged_count: number;

  searches_count: number;

  sessions_count: number;
}

/**
 * Validated list of active user metrics with ascending order and no overlapping
 * periods.
 */
export type MetricGetDailyActiveUsersResponse = Array<ActiveUserMetrics>;

/**
 * Validated list of active user metrics with ascending order and no overlapping
 * periods.
 */
export type MetricGetMonthlyActiveUsersResponse = Array<ActiveUserMetrics>;

export interface MetricGetSessionMetricsByCategoryResponse {
  categories: Array<MetricGetSessionMetricsByCategoryResponse.Category>;
}

export namespace MetricGetSessionMetricsByCategoryResponse {
  export interface Category {
    acus: number;

    category: string;

    sessions_count: number;

    subcategories: Array<Category.Subcategory>;
  }

  export namespace Category {
    export interface Subcategory {
      acus: number;

      display_name: string;

      sessions_count: number;

      subcategory_id: string | null;
    }
  }
}

/**
 * Validated list of active user metrics with ascending order and no overlapping
 * periods.
 */
export type MetricGetWeeklyActiveUsersResponse = Array<ActiveUserMetrics>;

export interface MetricGetActiveUsersParams {
  time_after: number;

  time_before: number;

  min_searches?: number;

  min_sessions?: number;

  org_ids?: Array<string> | null;
}

export interface MetricGetDailyActiveUsersParams {
  time_after: number;

  time_before: number;

  min_searches?: number;

  min_sessions?: number;

  org_ids?: Array<string> | null;
}

export interface MetricGetMonthlyActiveUsersParams {
  time_after: number;

  time_before: number;

  min_searches?: number;

  min_sessions?: number;

  org_ids?: Array<string> | null;
}

export interface MetricGetPrMetricsParams {
  time_after: number;

  time_before: number;

  org_ids?: Array<string> | null;

  playbook_id?: string | null;

  service_user_ids?: Array<string> | null;

  user_ids?: Array<string> | null;
}

export interface MetricGetSearchMetricsParams {
  time_after: number;

  time_before: number;

  org_ids?: Array<string> | null;
}

export interface MetricGetSessionMetricsParams {
  time_after: number;

  time_before: number;

  org_ids?: Array<string> | null;

  playbook_id?: string | null;

  service_user_ids?: Array<string> | null;

  user_ids?: Array<string> | null;
}

export interface MetricGetSessionMetricsByCategoryParams {
  time_after: number;

  time_before: number;

  org_ids?: Array<string> | null;
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

  org_ids?: Array<string> | null;
}

export declare namespace Metrics {
  export {
    type ActiveUserMetrics as ActiveUserMetrics,
    type PrMetrics as PrMetrics,
    type SearchMetrics as SearchMetrics,
    type SessionCountsBySize as SessionCountsBySize,
    type SessionMetrics as SessionMetrics,
    type UsageMetrics as UsageMetrics,
    type MetricGetDailyActiveUsersResponse as MetricGetDailyActiveUsersResponse,
    type MetricGetMonthlyActiveUsersResponse as MetricGetMonthlyActiveUsersResponse,
    type MetricGetSessionMetricsByCategoryResponse as MetricGetSessionMetricsByCategoryResponse,
    type MetricGetWeeklyActiveUsersResponse as MetricGetWeeklyActiveUsersResponse,
    type MetricGetActiveUsersParams as MetricGetActiveUsersParams,
    type MetricGetDailyActiveUsersParams as MetricGetDailyActiveUsersParams,
    type MetricGetMonthlyActiveUsersParams as MetricGetMonthlyActiveUsersParams,
    type MetricGetPrMetricsParams as MetricGetPrMetricsParams,
    type MetricGetSearchMetricsParams as MetricGetSearchMetricsParams,
    type MetricGetSessionMetricsParams as MetricGetSessionMetricsParams,
    type MetricGetSessionMetricsByCategoryParams as MetricGetSessionMetricsByCategoryParams,
    type MetricGetUsageMetricsParams as MetricGetUsageMetricsParams,
    type MetricGetWeeklyActiveUsersParams as MetricGetWeeklyActiveUsersParams,
  };
}
