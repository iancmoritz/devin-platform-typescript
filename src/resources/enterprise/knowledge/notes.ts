// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Notes extends APIResource {
  /**
   * Create an enterprise-level note
   */
  create(body: NoteCreateParams, options?: RequestOptions): APIPromise<KnowledgeNote> {
    return this._client.post('/v3/enterprise/knowledge/notes', { body, ...options });
  }

  /**
   * Get a note by ID.
   */
  retrieve(noteID: string, options?: RequestOptions): APIPromise<KnowledgeNote> {
    return this._client.get(path`/v3/enterprise/knowledge/notes/${noteID}`, options);
  }

  /**
   * Update a note
   */
  update(noteID: string, body: NoteUpdateParams, options?: RequestOptions): APIPromise<KnowledgeNote> {
    return this._client.put(path`/v3/enterprise/knowledge/notes/${noteID}`, { body, ...options });
  }

  /**
   * List all notes.
   */
  list(
    query: NoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedKnowledgeNoteResponse> {
    return this._client.get('/v3/enterprise/knowledge/notes', { query, ...options });
  }

  /**
   * Delete a note
   */
  delete(noteID: string, options?: RequestOptions): APIPromise<KnowledgeNote> {
    return this._client.delete(path`/v3/enterprise/knowledge/notes/${noteID}`, options);
  }
}

export interface KnowledgeNote {
  access_type: 'enterprise' | 'org';

  body: string;

  created_at: number;

  folder_id: string | null;

  folder_path: string;

  is_enabled: boolean;

  macro: string | null;

  name: string;

  note_id: string;

  org_id: string | null;

  pinned_repo: string | null;

  trigger: string;

  updated_at: number;
}

export interface KnowledgeNoteCreate {
  body: string;

  name: string;

  trigger: string;

  folder_id?: string | null;

  is_enabled?: boolean | null;

  pinned_repo?: string | null;
}

export interface PaginatedKnowledgeNoteResponse {
  items: Array<KnowledgeNote>;

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

export interface NoteCreateParams {
  body: string;

  name: string;

  trigger: string;

  folder_id?: string | null;

  is_enabled?: boolean | null;

  pinned_repo?: string | null;
}

export interface NoteUpdateParams {
  body: string;

  name: string;

  trigger: string;

  folder_id?: string | null;

  is_enabled?: boolean | null;

  pinned_repo?: string | null;
}

export interface NoteListParams {
  access_type?: 'org' | 'enterprise' | null;

  after?: string | null;

  first?: number;

  folder_path?: string | null;

  pinned_repo?: string | null;

  search?: string | null;
}

export declare namespace Notes {
  export {
    type KnowledgeNote as KnowledgeNote,
    type KnowledgeNoteCreate as KnowledgeNoteCreate,
    type PaginatedKnowledgeNoteResponse as PaginatedKnowledgeNoteResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };
}
