// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NotesAPI from './notes';
import {
  KnowledgeNote,
  KnowledgeNoteCreate,
  NoteCreateParams,
  NoteListParams,
  NoteUpdateParams,
  Notes,
  PaginatedKnowledgeNoteResponse,
} from './notes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Knowledge extends APIResource {
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);

  /**
   * Return the full folder tree with per-folder note counts.
   */
  listFolders(options?: RequestOptions): APIPromise<FolderTree> {
    return this._client.get('/v3/enterprise/knowledge/folders', options);
  }
}

/**
 * Response for the folder-structure endpoint.
 */
export interface FolderTree {
  folders: Array<FolderTree.Folder>;

  root_note_count: number;
}

export namespace FolderTree {
  /**
   * One folder in the knowledge folder tree.
   */
  export interface Folder {
    folder_id: string;

    name: string;

    note_count: number;

    path: string;

    parent_folder_id?: string | null;
  }
}

Knowledge.Notes = Notes;

export declare namespace Knowledge {
  export { type FolderTree as FolderTree };

  export {
    Notes as Notes,
    type KnowledgeNote as KnowledgeNote,
    type KnowledgeNoteCreate as KnowledgeNoteCreate,
    type PaginatedKnowledgeNoteResponse as PaginatedKnowledgeNoteResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };
}
