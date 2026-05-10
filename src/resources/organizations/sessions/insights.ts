// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InsightsAPI from '../../enterprise/sessions/insights';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Insights extends APIResource {
  /**
   * Get detailed insights for a specific session, including message counts, session
   * size classification, and AI-generated analysis.
   */
  retrieve(
    devinID: string,
    params: InsightRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<InsightsAPI.SessionInsights> {
    const { org_id } = params;
    return this._client.get(path`/v3/organizations/${org_id}/sessions/${devinID}/insights`, options);
  }

  /**
   * List sessions with detailed insights including message counts, session size
   * classification, and AI-generated analysis.
   */
  list(
    orgID: string,
    query: InsightListParams,
    options?: RequestOptions,
  ): APIPromise<InsightsAPI.PaginatedSessionInsightsResponse> {
    return this._client.get(path`/v3/organizations/${orgID}/sessions/insights`, { query, ...options });
  }

  /**
   * Trigger on-demand generation of session insights.
   *
   * Returns `already_exists` if insights have already been generated. Otherwise
   * kicks off generation in the background. Poll the GET insights endpoint to
   * retrieve results once generation completes.
   */
  generate(
    devinID: string,
    params: InsightGenerateParams,
    options?: RequestOptions,
  ): APIPromise<InsightsAPI.SessionInsightsGenerate> {
    const { org_id } = params;
    return this._client.post(
      path`/v3/organizations/${org_id}/sessions/${devinID}/insights/generate`,
      options,
    );
  }
}

export interface InsightRetrieveParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface InsightListParams {
  qs: InsightListParams.Qs;

  devin_id?: string | null;
}

export namespace InsightListParams {
  export interface Qs {
    after?: string | null;

    category?:
      | 'bug_fixing'
      | 'ci_cd_and_devops'
      | 'code_quality_and_security'
      | 'code_review_and_analysis'
      | 'data_and_automation'
      | 'documentation_and_content'
      | 'feature_development'
      | 'migrations_and_upgrades'
      | 'other'
      | 'refactoring_and_optimization'
      | 'research_and_exploration'
      | 'unit_test_generation'
      | null;

    created_after?: number | null;

    created_before?: number | null;

    first?: number;

    is_archived?: boolean | null;

    origins?: Array<
      'webapp' | 'slack' | 'teams' | 'api' | 'linear' | 'jira' | 'automation' | 'cli' | 'desktop' | 'other'
    > | null;

    playbook_id?: string | null;

    /**
     * Filter by repository names (e.g., 'owner/repo')
     */
    repo_names?: Array<string> | null;

    schedule_id?: string | null;

    service_user_ids?: Array<string> | null;

    session_ids?: Array<string> | null;

    tags?: Array<string> | null;

    updated_after?: number | null;

    updated_before?: number | null;

    user_ids?: Array<string> | null;
  }
}

export interface InsightGenerateParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export declare namespace Insights {
  export {
    type InsightRetrieveParams as InsightRetrieveParams,
    type InsightListParams as InsightListParams,
    type InsightGenerateParams as InsightGenerateParams,
  };
}
