// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Playbooks extends APIResource {
  /**
   * Create an enterprise-level playbook
   */
  create(body: PlaybookCreateParams, options?: RequestOptions): APIPromise<PlaybookResponse> {
    return this._client.post('/v3/enterprise/playbooks', { body, ...options });
  }

  /**
   * Get a specific playbook by ID.
   */
  retrieve(playbookID: string, options?: RequestOptions): APIPromise<PlaybookResponse> {
    return this._client.get(path`/v3/enterprise/playbooks/${playbookID}`, options);
  }

  /**
   * Update a playbook
   */
  update(
    playbookID: string,
    body: PlaybookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PlaybookResponse> {
    return this._client.put(path`/v3/enterprise/playbooks/${playbookID}`, { body, ...options });
  }

  /**
   * List all playbooks.
   */
  list(
    query: PlaybookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedPlaybookResponse> {
    return this._client.get('/v3/enterprise/playbooks', { query, ...options });
  }

  /**
   * Delete a playbook
   */
  delete(playbookID: string, options?: RequestOptions): APIPromise<PlaybookResponse> {
    return this._client.delete(path`/v3/enterprise/playbooks/${playbookID}`, options);
  }
}

export interface PaginatedPlaybookResponse {
  items: Array<PlaybookResponse>;

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

export interface PlaybookCreate {
  body: string;

  title: string;

  /**
   * Playbook macro identifier. Must start with '!' followed by one or more letters,
   * digits, underscores, or hyphens. Example: '!my_macro' or '!my-macro'
   */
  macro?: string | null;
}

export interface PlaybookResponse {
  access_type: 'enterprise' | 'org';

  body: string;

  created_at: number;

  created_by: string;

  macro: string | null;

  org_id: string | null;

  playbook_id: string;

  title: string;

  updated_at: number;

  updated_by: string;
}

export interface PlaybookCreateParams {
  body: string;

  title: string;

  /**
   * Playbook macro identifier. Must start with '!' followed by one or more letters,
   * digits, underscores, or hyphens. Example: '!my_macro' or '!my-macro'
   */
  macro?: string | null;
}

export interface PlaybookUpdateParams {
  body: string;

  title: string;

  /**
   * Playbook macro identifier. Must start with '!' followed by one or more letters,
   * digits, underscores, or hyphens. Example: '!my_macro' or '!my-macro'
   */
  macro?: string | null;
}

export interface PlaybookListParams {
  after?: string | null;

  first?: number;
}

export declare namespace Playbooks {
  export {
    type PaginatedPlaybookResponse as PaginatedPlaybookResponse,
    type PlaybookCreate as PlaybookCreate,
    type PlaybookResponse as PlaybookResponse,
    type PlaybookCreateParams as PlaybookCreateParams,
    type PlaybookUpdateParams as PlaybookUpdateParams,
    type PlaybookListParams as PlaybookListParams,
  };
}
