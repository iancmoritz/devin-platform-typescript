// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DefaultAPI from './default';
import { Default, DefaultCreateParams, DefaultTag } from './default';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tags extends APIResource {
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);

  /**
   * Replace the full set of allowed session tags for an organization.
   */
  create(orgID: string, body: TagCreateParams, options?: RequestOptions): APIPromise<Tags> {
    return this._client.put(path`/v3/enterprise/organizations/${orgID}/tags`, { body, ...options });
  }

  /**
   * Get the allowed session tags for an organization.
   */
  list(orgID: string, options?: RequestOptions): APIPromise<Tags> {
    return this._client.get(path`/v3/enterprise/organizations/${orgID}/tags`, options);
  }

  /**
   * Remove a single tag from the allowed session tags for an organization.
   */
  delete(tag: string, params: TagDeleteParams, options?: RequestOptions): APIPromise<Tags> {
    const { org_id } = params;
    return this._client.delete(path`/v3/enterprise/organizations/${org_id}/tags/${tag}`, options);
  }

  /**
   * Clear all allowed session tags for an organization.
   */
  deleteAll(orgID: string, options?: RequestOptions): APIPromise<Tags> {
    return this._client.delete(path`/v3/enterprise/organizations/${orgID}/tags`, options);
  }
}

export interface Tags {
  tags: Array<string>;
}

export interface TagsCreate {
  tags: Array<string>;
}

export interface TagCreateParams {
  tags: Array<string>;
}

export interface TagDeleteParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

Tags.Default = Default;

export declare namespace Tags {
  export {
    type Tags as Tags,
    type TagsCreate as TagsCreate,
    type TagCreateParams as TagCreateParams,
    type TagDeleteParams as TagDeleteParams,
  };

  export {
    Default as Default,
    type DefaultTag as DefaultTag,
    type DefaultCreateParams as DefaultCreateParams,
  };
}
