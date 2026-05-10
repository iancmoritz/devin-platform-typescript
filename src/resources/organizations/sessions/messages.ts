// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagesAPI from '../../enterprise/sessions/messages';
import * as SessionsAPI from '../../enterprise/sessions/sessions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * List all messages for a session with cursor-based pagination, ordered
   * chronologically.
   */
  list(
    devinID: string,
    params: MessageListParams,
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.PaginatedSessionMessage> {
    const { org_id, ...query } = params;
    return this._client.get(path`/v3/organizations/${org_id}/sessions/${devinID}/messages`, {
      query,
      ...options,
    });
  }

  /**
   * Send a message to an active session. The session will be automatically resumed
   * if suspended.
   */
  send(
    devinID: string,
    params: MessageSendParams,
    options?: RequestOptions,
  ): APIPromise<SessionsAPI.SessionResponse> {
    const { org_id, ...body } = params;
    return this._client.post(path`/v3/organizations/${org_id}/sessions/${devinID}/messages`, {
      body,
      ...options,
    });
  }
}

export interface MessageListParams {
  /**
   * Path param: Organization ID (prefix: org-)
   */
  org_id: string;

  /**
   * Query param
   */
  after?: string | null;

  /**
   * Query param
   */
  first?: number;
}

export interface MessageSendParams {
  /**
   * Path param: Organization ID (prefix: org-)
   */
  org_id: string;

  /**
   * Body param
   */
  message: string;

  /**
   * Body param
   */
  message_as_user_id?: string | null;
}

export declare namespace Messages {
  export { type MessageListParams as MessageListParams, type MessageSendParams as MessageSendParams };
}
