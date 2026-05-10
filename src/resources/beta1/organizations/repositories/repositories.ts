// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as IndexingAPI from './indexing';
import {
  Indexing,
  IndexingBulkIndexParams,
  IndexingBulkIndexResponse,
  IndexingBulkRemoveParams,
  IndexingBulkRemoveResponse,
  IndexingGetStatusParams,
  IndexingIndexParams,
  IndexingListParams,
  IndexingListResponse,
  IndexingRemoveBranchParams,
  IndexingRemoveParams,
  RepoIndexJob,
  RepoIndexingStatus,
  RepositoryIndexing,
} from './indexing';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Repositories extends APIResource {
  indexing: IndexingAPI.Indexing = new IndexingAPI.Indexing(this._client);

  /**
   * List repositories available to an organization
   */
  list(
    orgID: string,
    query: RepositoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RepositoryListResponse> {
    return this._client.get(path`/v3beta1/organizations/${orgID}/repositories`, { query, ...options });
  }
}

export interface RepositoryListResponse {
  items: Array<RepositoryListResponse.Item>;

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

export namespace RepositoryListResponse {
  export interface Item {
    git_connection_host: string;

    git_connection_id: string;

    indexing_status: IndexingAPI.RepoIndexingStatus | null;

    last_updated_at: number | null;

    provider_repository_id: string;

    repo_description: string | null;

    repo_language: string | null;

    repo_name: string;

    repo_path: string;
  }
}

export interface RepositoryListParams {
  after?: string | null;

  exclude_repo_paths?: Array<string> | null;

  filter_name?: string | null;

  first?: number;

  load_indexing_status?: boolean;

  only_repo_paths?: Array<string> | null;
}

Repositories.Indexing = Indexing;

export declare namespace Repositories {
  export {
    type RepositoryListResponse as RepositoryListResponse,
    type RepositoryListParams as RepositoryListParams,
  };

  export {
    Indexing as Indexing,
    type RepoIndexJob as RepoIndexJob,
    type RepoIndexingStatus as RepoIndexingStatus,
    type RepositoryIndexing as RepositoryIndexing,
    type IndexingListResponse as IndexingListResponse,
    type IndexingBulkIndexResponse as IndexingBulkIndexResponse,
    type IndexingBulkRemoveResponse as IndexingBulkRemoveResponse,
    type IndexingListParams as IndexingListParams,
    type IndexingBulkIndexParams as IndexingBulkIndexParams,
    type IndexingBulkRemoveParams as IndexingBulkRemoveParams,
    type IndexingGetStatusParams as IndexingGetStatusParams,
    type IndexingIndexParams as IndexingIndexParams,
    type IndexingRemoveParams as IndexingRemoveParams,
    type IndexingRemoveBranchParams as IndexingRemoveBranchParams,
  };
}
