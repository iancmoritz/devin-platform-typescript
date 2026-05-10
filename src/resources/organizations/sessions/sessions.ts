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
    body: SessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<SessionsAPI.SessionResponse> {
    return this._client.post(path`/v3/organizations/${orgID}/sessions`, { body, ...options });
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
    query: SessionListParams | null | undefined = {},
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
  prompt: string;

  advanced_mode?: 'analyze' | 'create' | 'improve' | 'batch' | 'manage' | null;

  attachment_urls?: Array<string> | null;

  bypass_approval?: boolean | null;

  child_playbook_id?: string | null;

  create_as_user_id?: string | null;

  knowledge_ids?: Array<string> | null;

  max_acu_limit?: number | null;

  playbook_id?: string | null;

  repos?: Array<string> | null;

  secret_ids?: Array<string> | null;

  session_links?: Array<string> | null;

  session_secrets?: Array<SessionCreateParams.SessionSecret> | null;

  /**
   * JSON Schema (Draft 7) for validating structured output. Max 64KB. Must be
   * self-contained (no external $ref).
   */
  structured_output_schema?: { [key: string]: unknown } | null;

  tags?: Array<string> | null;

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
  after?: string | null;

  created_after?: number | null;

  created_before?: number | null;

  first?: number;

  origins?: Array<
    'webapp' | 'slack' | 'teams' | 'api' | 'linear' | 'jira' | 'scheduled' | 'cli' | 'other'
  > | null;

  playbook_id?: string | null;

  schedule_id?: string | null;

  service_user_ids?: Array<string> | null;

  session_ids?: Array<string> | null;

  tags?: Array<string> | null;

  updated_after?: number | null;

  updated_before?: number | null;

  user_ids?: Array<string> | null;
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
