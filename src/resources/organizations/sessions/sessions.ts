// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SessionsAPI from '../../enterprise/sessions/sessions';
import * as InsightsAPI from './insights';
import { InsightGenerateParams, InsightListParams, InsightRetrieveParams, Insights } from './insights';
import * as MessagesAPI from './messages';
import { MessageListParams, MessageSendParams, Messages } from './messages';
import * as TagsAPI from './tags';
import { TagAppendParams, TagReplaceParams, TagRetrieveParams, Tags } from './tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Sessions extends APIResource {
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Create a new session
   */
  create(
    orgID: string,
    params: SessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<SessionsAPI.SessionResponse> {
    const { devin_id, ...body } = params;
    return this._client.post(path`/v3/organizations/${orgID}/sessions`, {
      query: { devin_id },
      body,
      ...options,
    });
  }

  /**
   * Get details of a specific session.
   */
  retrieve(
    devinID: string,
    params: SessionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SessionsAPI.SessionResponse> {
    const { org_id } = params;
    return this._client.get(path`/v3/organizations/${org_id}/sessions/${devinID}`, options);
  }

  /**
   * List sessions.
   */
  list(
    orgID: string,
    query: SessionListParams,
    options?: RequestOptions,
  ): APIPromise<SessionsAPI.PaginatedSessionResponse> {
    return this._client.get(path`/v3/organizations/${orgID}/sessions`, { query, ...options });
  }

  /**
   * Archive session and put it to sleep if currently running
   */
  archive(
    devinID: string,
    params: SessionArchiveParams,
    options?: RequestOptions,
  ): APIPromise<SessionsAPI.SessionResponse> {
    const { org_id } = params;
    return this._client.post(path`/v3/organizations/${org_id}/sessions/${devinID}/archive`, options);
  }

  /**
   * List all attachments for a session.
   */
  listAttachments(
    devinID: string,
    params: SessionListAttachmentsParams,
    options?: RequestOptions,
  ): APIPromise<SessionListAttachmentsResponse> {
    const { org_id } = params;
    return this._client.get(path`/v3/organizations/${org_id}/sessions/${devinID}/attachments`, options);
  }

  /**
   * Terminate session
   */
  terminate(
    devinID: string,
    params: SessionTerminateParams,
    options?: RequestOptions,
  ): APIPromise<SessionsAPI.SessionResponse> {
    const { org_id, archive } = params;
    return this._client.delete(path`/v3/organizations/${org_id}/sessions/${devinID}`, {
      query: { archive },
      ...options,
    });
  }
}

export type SessionListAttachmentsResponse = Array<SessionsAPI.SessionAttachment>;

export interface SessionCreateParams {
  /**
   * Body param
   */
  prompt: string;

  /**
   * Query param
   */
  devin_id?: string | null;

  /**
   * Body param
   */
  attachment_urls?: Array<string> | null;

  /**
   * Body param
   */
  bypass_approval?: boolean | null;

  /**
   * Body param
   */
  child_playbook_id?: string | null;

  /**
   * Body param
   */
  create_as_user_id?: string | null;

  /**
   * Body param
   */
  knowledge_ids?: Array<string> | null;

  /**
   * Body param
   */
  max_acu_limit?: number | null;

  /**
   * Body param: Override the VM platform for the session (e.g. 'windows'). When
   * omitted (or set to 'inherit'), a session created by a parent Devin inherits the
   * parent's platform; otherwise the organization default is used. Pass 'default' to
   * force the organization default regardless of parent. Any other value must match
   * a platform configured for your organization (case-insensitive); unrecognized
   * values are rejected with a 400 whose error body lists the available platform
   * labels for the org.
   */
  platform?: string | null;

  /**
   * Body param
   */
  playbook_id?: string | null;

  /**
   * Body param
   */
  repos?: Array<string> | null;

  /**
   * Body param
   */
  secret_ids?: Array<string> | null;

  /**
   * Body param
   */
  session_links?: Array<string> | null;

  /**
   * Body param
   */
  session_secrets?: Array<SessionCreateParams.SessionSecret> | null;

  /**
   * Body param: When true (default), the agent MUST call provide_structured_output
   * with is_final=true before its turn ends. When false, the tool is available but
   * not required — it is not guaranteed to be called in a given turn.
   */
  structured_output_required?: boolean | null;

  /**
   * Body param: JSON Schema (Draft 7) for validating structured output. Max 64KB.
   * Must be self-contained (no external $ref).
   */
  structured_output_schema?: { [key: string]: unknown } | null;

  /**
   * Body param
   */
  tags?: Array<string> | null;

  /**
   * Body param
   */
  title?: string | null;
}

export namespace SessionCreateParams {
  /**
   * Input model for a session secret provided via API.
   */
  export interface SessionSecret {
    key: string;

    value: string;

    sensitive?: boolean;
  }
}

export interface SessionRetrieveParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface SessionListParams {
  qs: SessionListParams.Qs;

  devin_id?: string | null;
}

export namespace SessionListParams {
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

export interface SessionArchiveParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface SessionListAttachmentsParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface SessionTerminateParams {
  /**
   * Path param: Organization ID (prefix: org-)
   */
  org_id: string;

  /**
   * Query param: Whether to archive the devin session
   */
  archive?: boolean;
}

Sessions.Insights = Insights;
Sessions.Messages = Messages;
Sessions.Tags = Tags;

export declare namespace Sessions {
  export {
    type SessionListAttachmentsResponse as SessionListAttachmentsResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionListParams as SessionListParams,
    type SessionArchiveParams as SessionArchiveParams,
    type SessionListAttachmentsParams as SessionListAttachmentsParams,
    type SessionTerminateParams as SessionTerminateParams,
  };

  export {
    Insights as Insights,
    type InsightRetrieveParams as InsightRetrieveParams,
    type InsightListParams as InsightListParams,
    type InsightGenerateParams as InsightGenerateParams,
  };

  export {
    Messages as Messages,
    type MessageListParams as MessageListParams,
    type MessageSendParams as MessageSendParams,
  };

  export {
    Tags as Tags,
    type TagRetrieveParams as TagRetrieveParams,
    type TagAppendParams as TagAppendParams,
    type TagReplaceParams as TagReplaceParams,
  };
}
