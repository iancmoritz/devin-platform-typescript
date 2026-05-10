// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KnowledgeAPI from '../../enterprise/knowledge/knowledge';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteDeleteParams,
  NoteListParams,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Knowledge extends APIResource {
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);

  /**
   * Return the full folder tree with per-folder note counts.
   */
  getFolders(orgID: string, options?: RequestOptions): APIPromise<KnowledgeAPI.FolderTree> {
    return this._client.get(path`/v3/organizations/${orgID}/knowledge/folders`, options);
  }
}

Knowledge.Notes = Notes;

export declare namespace Knowledge {
  export {
    Notes as Notes,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
    type NoteDeleteParams as NoteDeleteParams,
  };
}
