// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from '../../enterprise/sessions/tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Get the tags for a specific session.
   */
  retrieve(
    devinID: string,
    params: TagRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TagsAPI.SessionTagsResponse> {
    const { org_id } = params;
    return this._client.get(path`/v3/organizations/${org_id}/sessions/${devinID}/tags`, options);
  }

  /**
   * Append tags to a session (deduplicating with existing tags).
   */
  append(
    devinID: string,
    params: TagAppendParams,
    options?: RequestOptions,
  ): APIPromise<TagsAPI.SessionTagsResponse> {
    const { org_id, ...body } = params;
    return this._client.post(path`/v3/organizations/${org_id}/sessions/${devinID}/tags`, {
      body,
      ...options,
    });
  }

  /**
   * Replace all tags on a session.
   */
  replace(
    devinID: string,
    params: TagReplaceParams,
    options?: RequestOptions,
  ): APIPromise<TagsAPI.SessionTagsResponse> {
    const { org_id, ...body } = params;
    return this._client.put(path`/v3/organizations/${org_id}/sessions/${devinID}/tags`, { body, ...options });
  }
}

export interface TagRetrieveParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface TagAppendParams {
  /**
   * Path param: Organization ID (prefix: org-)
   */
  org_id: string;

  /**
   * Body param
   */
  tags: Array<string>;
}

export interface TagReplaceParams {
  /**
   * Path param: Organization ID (prefix: org-)
   */
  org_id: string;

  /**
   * Body param
   */
  tags: Array<string>;
}

export declare namespace Tags {
  export {
    type TagRetrieveParams as TagRetrieveParams,
    type TagAppendParams as TagAppendParams,
    type TagReplaceParams as TagReplaceParams,
  };
}
