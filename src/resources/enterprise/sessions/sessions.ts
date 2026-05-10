// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InsightsAPI from './insights';
import {
  InsightGenerateParams,
  InsightListParams,
  Insights,
  PaginatedSessionInsightsResponse,
  SessionInsights,
  SessionInsightsGenerate,
  SessionInsightsNoteUsageItem,
} from './insights';
import * as MessagesAPI from './messages';
import {
  MessageCreateParams,
  MessageListParams,
  Messages,
  PaginatedSessionMessage,
  SessionMessageCreate,
} from './messages';
import * as TagsAPI from './tags';
import { SessionTagsResponse, SessionTagsUpdate, TagCreateParams, TagListParams, Tags } from './tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Sessions extends APIResource {
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Get details of a specific session.
   */
  retrieve(
    devinID: string,
    query: SessionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionResponse> {
    return this._client.get(path`/v3/enterprise/sessions/${devinID}`, { query, ...options });
  }

  /**
   * List all sessions across the enterprise.
   */
  list(
    query: SessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedSessionResponse> {
    return this._client.get('/v3/enterprise/sessions', { query, ...options });
  }

  /**
   * List all attachments for a session.
   */
  retrieveAttachments(
    devinID: string,
    query: SessionRetrieveAttachmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionRetrieveAttachmentsResponse> {
    return this._client.get(path`/v3/enterprise/sessions/${devinID}/attachments`, { query, ...options });
  }
}

export interface PaginatedSessionResponse {
  items: Array<SessionResponse>;

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
 * An attachment sent during a session.
 */
export interface SessionAttachment {
  attachment_id: string;

  name: string;

  source: 'devin' | 'user';

  url: string;

  content_type?: string | null;
}

export interface SessionPullRequest {
  pr_state: string | null;

  pr_url: string;
}

export interface SessionResponse {
  acus_consumed: number;

  created_at: number;

  org_id: string;

  pull_requests: Array<SessionPullRequest>;

  session_id: string;

  status: 'new' | 'claimed' | 'running' | 'exit' | 'error' | 'suspended' | 'resuming';

  tags: Array<string>;

  updated_at: number;

  url: string;

  /**
   * The session's assigned use-case category, if categorisation has run. Only
   * populated on get/list endpoints.
   */
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

  child_session_ids?: Array<string> | null;

  is_archived?: boolean;

  /**
   * The origin from which the session was created.
   */
  origin?:
    | 'webapp'
    | 'slack'
    | 'teams'
    | 'api'
    | 'linear'
    | 'jira'
    | 'automation'
    | 'cli'
    | 'desktop'
    | 'other'
    | null;

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
   * 'org_usage_limit_exceeded', 'total_session_limit_exceeded', or 'error'. Only
   * populated on get/list endpoints.
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
    | 'total_session_limit_exceeded'
    | 'error'
    | null;

  /**
   * Validated structured output from the session. Only populated on get/list
   * endpoints.
   */
  structured_output?: { [key: string]: unknown } | null;

  /**
   * The session's assigned subcategory display name. 'Other' when a category is set
   * but no subcategory was assigned or resolved. Only populated on get/list
   * endpoints.
   */
  subcategory?: string | null;

  title?: string | null;

  user_id?: string | null;
}

export type SessionRetrieveAttachmentsResponse = Array<SessionAttachment>;

export interface SessionRetrieveParams {
  org_id?: string | null;
}

export interface SessionListParams {
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

  include_deleted_orgs?: boolean;

  is_archived?: boolean | null;

  org_ids?: Array<string> | null;

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

export interface SessionRetrieveAttachmentsParams {
  org_id?: string | null;
}

Sessions.Insights = Insights;
Sessions.Messages = Messages;
Sessions.Tags = Tags;

export declare namespace Sessions {
  export {
    type PaginatedSessionResponse as PaginatedSessionResponse,
    type SessionAttachment as SessionAttachment,
    type SessionPullRequest as SessionPullRequest,
    type SessionResponse as SessionResponse,
    type SessionRetrieveAttachmentsResponse as SessionRetrieveAttachmentsResponse,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionListParams as SessionListParams,
    type SessionRetrieveAttachmentsParams as SessionRetrieveAttachmentsParams,
  };

  export {
    Insights as Insights,
    type PaginatedSessionInsightsResponse as PaginatedSessionInsightsResponse,
    type SessionInsights as SessionInsights,
    type SessionInsightsGenerate as SessionInsightsGenerate,
    type SessionInsightsNoteUsageItem as SessionInsightsNoteUsageItem,
    type InsightListParams as InsightListParams,
    type InsightGenerateParams as InsightGenerateParams,
  };

  export {
    Messages as Messages,
    type PaginatedSessionMessage as PaginatedSessionMessage,
    type SessionMessageCreate as SessionMessageCreate,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };

  export {
    Tags as Tags,
    type SessionTagsResponse as SessionTagsResponse,
    type SessionTagsUpdate as SessionTagsUpdate,
    type TagCreateParams as TagCreateParams,
    type TagListParams as TagListParams,
  };
}
