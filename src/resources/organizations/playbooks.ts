// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PlaybooksAPI from '../enterprise/playbooks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Playbooks extends APIResource {
  /**
   * Create a playbook for an organization.
   */
  create(
    orgID: string,
    body: PlaybookCreateParams,
    options?: RequestOptions,
  ): APIPromise<PlaybooksAPI.PlaybookResponse> {
    return this._client.post(path`/v3/organizations/${orgID}/playbooks`, { body, ...options });
  }

  /**
   * Get a specific playbook by ID for an organization.
   */
  retrieve(
    playbookID: string,
    params: PlaybookRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PlaybooksAPI.PlaybookResponse> {
    const { org_id } = params;
    return this._client.get(path`/v3/organizations/${org_id}/playbooks/${playbookID}`, options);
  }

  /**
   * Update a playbook for an organization.
   */
  update(
    playbookID: string,
    params: PlaybookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PlaybooksAPI.PlaybookResponse> {
    const { org_id, ...body } = params;
    return this._client.put(path`/v3/organizations/${org_id}/playbooks/${playbookID}`, { body, ...options });
  }

  /**
   * List playbooks for an organization.
   */
  list(
    orgID: string,
    query: PlaybookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlaybooksAPI.PaginatedPlaybookResponse> {
    return this._client.get(path`/v3/organizations/${orgID}/playbooks`, { query, ...options });
  }

  /**
   * Delete a playbook for an organization.
   */
  delete(
    playbookID: string,
    params: PlaybookDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PlaybooksAPI.PlaybookResponse> {
    const { org_id } = params;
    return this._client.delete(path`/v3/organizations/${org_id}/playbooks/${playbookID}`, options);
  }
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

export interface PlaybookRetrieveParams {
  org_id: string;
}

export interface PlaybookUpdateParams {
  /**
   * Path param
   */
  org_id: string;

  /**
   * Body param
   */
  body: string;

  /**
   * Body param
   */
  title: string;

  /**
   * Body param: Playbook macro identifier. Must start with '!' followed by one or
   * more letters, digits, underscores, or hyphens. Example: '!my_macro' or
   * '!my-macro'
   */
  macro?: string | null;
}

export interface PlaybookListParams {
  after?: string | null;

  first?: number;
}

export interface PlaybookDeleteParams {
  org_id: string;
}

export declare namespace Playbooks {
  export {
    type PlaybookCreateParams as PlaybookCreateParams,
    type PlaybookRetrieveParams as PlaybookRetrieveParams,
    type PlaybookUpdateParams as PlaybookUpdateParams,
    type PlaybookListParams as PlaybookListParams,
    type PlaybookDeleteParams as PlaybookDeleteParams,
  };
}
