// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Replace all tags on a session.
   */
  create(
    devinID: string,
    params: TagCreateParams,
    options?: RequestOptions,
  ): APIPromise<SessionTagsResponse> {
    const { org_id, ...body } = params;
    return this._client.put(path`/v3/enterprise/sessions/${devinID}/tags`, {
      query: { org_id },
      body,
      ...options,
    });
  }

  /**
   * Get the tags for a specific session.
   */
  list(
    devinID: string,
    query: TagListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionTagsResponse> {
    return this._client.get(path`/v3/enterprise/sessions/${devinID}/tags`, { query, ...options });
  }
}

export interface SessionTagsResponse {
  tags: Array<string>;
}

export interface SessionTagsUpdate {
  tags: Array<string>;
}

export interface TagCreateParams {
  /**
   * Body param
   */
  tags: Array<string>;

  /**
   * Query param
   */
  org_id?: string | null;
}

export interface TagListParams {
  org_id?: string | null;
}

export declare namespace Tags {
  export {
    type SessionTagsResponse as SessionTagsResponse,
    type SessionTagsUpdate as SessionTagsUpdate,
    type TagCreateParams as TagCreateParams,
    type TagListParams as TagListParams,
  };
}
