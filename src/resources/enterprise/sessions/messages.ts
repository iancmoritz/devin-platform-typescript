// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SessionsAPI from './sessions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Send a message to an active session. The session will be automatically resumed
   * if suspended.
   */
  create(
    devinID: string,
    params: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<SessionsAPI.SessionResponse> {
    const { org_id, ...body } = params;
    return this._client.post(path`/v3/enterprise/sessions/${devinID}/messages`, {
      query: { org_id },
      body,
      ...options,
    });
  }

  /**
   * List all messages for a session with cursor-based pagination, ordered
   * chronologically.
   */
  list(
    devinID: string,
    query: MessageListParams,
    options?: RequestOptions,
  ): APIPromise<PaginatedSessionMessage> {
    return this._client.get(path`/v3/enterprise/sessions/${devinID}/messages`, { query, ...options });
  }
}

export interface PaginatedSessionMessage {
  items: Array<PaginatedSessionMessage.Item>;

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

export namespace PaginatedSessionMessage {
  /**
   * A message in a Devin session.
   */
  export interface Item {
    created_at: number;

    event_id: string;

    message: string;

    source: 'devin' | 'user';
  }
}

export interface SessionMessageCreate {
  message: string;

  message_as_user_id?: string | null;
}

export interface MessageCreateParams {
  /**
   * Body param
   */
  message: string;

  /**
   * Query param
   */
  org_id?: string | null;

  /**
   * Body param
   */
  message_as_user_id?: string | null;
}

export interface MessageListParams {
  qs: MessageListParams.Qs;

  org_id?: string | null;
}

export namespace MessageListParams {
  export interface Qs {
    after?: string | null;

    first?: number;
  }
}

export declare namespace Messages {
  export {
    type PaginatedSessionMessage as PaginatedSessionMessage,
    type SessionMessageCreate as SessionMessageCreate,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}
