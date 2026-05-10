// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NotesAPI from '../../enterprise/knowledge/notes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Notes extends APIResource {
  /**
   * Create a note for an organization.
   */
  create(
    orgID: string,
    body: NoteCreateParams,
    options?: RequestOptions,
  ): APIPromise<NotesAPI.KnowledgeNote> {
    return this._client.post(path`/v3/organizations/${orgID}/knowledge/notes`, { body, ...options });
  }

  /**
   * Get a note by ID for an organization.
   */
  retrieve(
    noteID: string,
    params: NoteRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<NotesAPI.KnowledgeNote> {
    const { org_id } = params;
    return this._client.get(path`/v3/organizations/${org_id}/knowledge/notes/${noteID}`, options);
  }

  /**
   * Update a note for an organization.
   */
  update(
    noteID: string,
    params: NoteUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NotesAPI.KnowledgeNote> {
    const { org_id, ...body } = params;
    return this._client.put(path`/v3/organizations/${org_id}/knowledge/notes/${noteID}`, {
      body,
      ...options,
    });
  }

  /**
   * List notes for an organization.
   */
  list(
    orgID: string,
    query: NoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotesAPI.PaginatedKnowledgeNoteResponse> {
    return this._client.get(path`/v3/organizations/${orgID}/knowledge/notes`, { query, ...options });
  }

  /**
   * Delete a note for an organization.
   */
  delete(
    noteID: string,
    params: NoteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<NotesAPI.KnowledgeNote> {
    const { org_id } = params;
    return this._client.delete(path`/v3/organizations/${org_id}/knowledge/notes/${noteID}`, options);
  }
}

export interface NoteCreateParams {
  body: string;

  name: string;

  trigger: string;

  pinned_repo?: string | null;
}

export interface NoteRetrieveParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface NoteUpdateParams {
  /**
   * Path param: Organization ID (prefix: org-)
   */
  org_id: string;

  /**
   * Body param
   */
  body: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  trigger: string;

  /**
   * Body param
   */
  pinned_repo?: string | null;
}

export interface NoteListParams {
  after?: string | null;

  first?: number;

  folder_path?: string | null;

  pinned_repo?: string | null;

  search?: string | null;
}

export interface NoteDeleteParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export declare namespace Notes {
  export {
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
    type NoteDeleteParams as NoteDeleteParams,
  };
}
