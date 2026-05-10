// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InsightsAPI from './insights';
import * as SessionsAPI from './sessions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Insights extends APIResource {
  /**
   * Get detailed insights for a specific session, including message counts, session
   * size classification, and AI-generated analysis.
   */
  list(
    devinID: string,
    query: InsightListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionInsights> {
    return this._client.get(path`/v3/enterprise/sessions/${devinID}/insights`, { query, ...options });
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
    params: InsightGenerateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionInsightsGenerate> {
    const { org_id } = params ?? {};
    return this._client.post(path`/v3/enterprise/sessions/${devinID}/insights/generate`, {
      query: { org_id },
      ...options,
    });
  }
}

export interface PaginatedSessionInsightsResponse {
  items: Array<SessionInsights>;

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

/**
 * Session details augmented with quantitative metrics and AI analysis.
 *
 * Extends SessionResponse with additional fields that require extra queries.
 */
export interface SessionInsights {
  acus_consumed: number;

  created_at: number;

  /**
   * Number of Devin messages sent during the session.
   */
  num_devin_messages: number;

  /**
   * Number of user messages sent during the session.
   */
  num_user_messages: number;

  org_id: string;

  pull_requests: Array<SessionsAPI.SessionPullRequest>;

  session_id: string;

  /**
   * Session size classification based on ACU usage and message count.
   */
  session_size: 'xs' | 's' | 'm' | 'l' | 'xl';

  status: 'new' | 'creating' | 'claimed' | 'running' | 'exit' | 'error' | 'suspended' | 'resuming';

  tags: Array<string>;

  updated_at: number;

  url: string;

  /**
   * AI-generated session analysis. None if analysis has not completed.
   */
  analysis?: SessionInsights.Analysis | null;

  child_session_ids?: Array<string> | null;

  is_advanced?: boolean;

  is_archived?: boolean;

  parent_session_id?: string | null;

  playbook_id?: string | null;

  service_user_id?: string | null;

  /**
   * Additional detail about the session's current status. When status is 'running':
   * 'working' (actively working), 'waiting_for_user' (needs user input),
   * 'waiting_for_approval' (awaiting action approval in safe mode), or 'finished'
   * (task complete). When status is 'suspended': the reason for suspension such as
   * 'inactivity', 'user_request', 'usage_limit_exceeded', 'out_of_credits',
   * 'out_of_quota', 'no_quota_allocation', 'payment_declined',
   * 'org_usage_limit_exceeded', or 'error'. Only populated on get/list endpoints.
   */
  status_detail?:
    | 'working'
    | 'waiting_for_user'
    | 'waiting_for_approval'
    | 'finished'
    | 'inactivity'
    | 'user_request'
    | 'usage_limit_exceeded'
    | 'out_of_credits'
    | 'out_of_quota'
    | 'no_quota_allocation'
    | 'payment_declined'
    | 'org_usage_limit_exceeded'
    | 'error'
    | null;

  /**
   * Validated structured output from the session. Only populated on get/list
   * endpoints.
   */
  structured_output?: { [key: string]: unknown } | null;

  title?: string | null;

  user_id?: string | null;
}

export namespace SessionInsights {
  /**
   * AI-generated session analysis. None if analysis has not completed.
   */
  export interface Analysis {
    action_items?: Array<Analysis.ActionItem>;

    classification?: Analysis.Classification | null;

    issues?: Array<Analysis.Issue>;

    note_usage?: Analysis.NoteUsage | null;

    suggested_prompt?: Analysis.SuggestedPrompt | null;

    timeline?: Array<Analysis.Timeline>;
  }

  export namespace Analysis {
    export interface ActionItem {
      action_item: string;

      issue_id?: string | null;

      type?: 'machine_setup' | 'repo_config' | 'knowledge' | 'prompt_improvement' | 'other';
    }

    export interface Classification {
      category: string;

      confidence: number;

      programming_languages?: Array<string>;

      tools_and_frameworks?: Array<string>;
    }

    export interface Issue {
      id: string;

      impact: string;

      issue: string;

      label: string;
    }

    export interface NoteUsage {
      bad_usages?: Array<InsightsAPI.SessionInsightsNoteUsageItem>;

      good_usages?: Array<InsightsAPI.SessionInsightsNoteUsageItem>;
    }

    export interface SuggestedPrompt {
      original_prompt: string;

      suggested_prompt: string;

      feedback_items?: Array<SuggestedPrompt.FeedbackItem>;
    }

    export namespace SuggestedPrompt {
      export interface FeedbackItem {
        details: string;

        excerpt: string;

        summary: string;

        issue_id?: string | null;
      }
    }

    export interface Timeline {
      description: string;

      title: string;

      color?: string;

      issue_id?: string | null;
    }
  }
}

/**
 * Response from triggering session insights generation.
 */
export interface SessionInsightsGenerate {
  /**
   * The session ID for which insights generation was triggered.
   */
  session_id: string;

  /**
   * The status of the generation request.
   */
  status: string;
}

export interface SessionInsightsNoteUsageItem {
  message: string;

  note_id: string;

  reason: string;
}

export interface InsightListParams {
  org_id?: string | null;
}

export interface InsightGenerateParams {
  org_id?: string | null;
}

export declare namespace Insights {
  export {
    type PaginatedSessionInsightsResponse as PaginatedSessionInsightsResponse,
    type SessionInsights as SessionInsights,
    type SessionInsightsGenerate as SessionInsightsGenerate,
    type SessionInsightsNoteUsageItem as SessionInsightsNoteUsageItem,
    type InsightListParams as InsightListParams,
    type InsightGenerateParams as InsightGenerateParams,
  };
}
