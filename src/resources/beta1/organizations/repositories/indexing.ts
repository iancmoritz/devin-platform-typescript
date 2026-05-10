// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Indexing extends APIResource {
  /**
   * List indexed repositories
   */
  list(
    orgID: string,
    query: IndexingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndexingListResponse> {
    return this._client.get(path`/v3beta1/organizations/${orgID}/repositories/indexing`, {
      query,
      ...options,
    });
  }

  /**
   * Idempotently enables indexing for a batch of repositories and triggers indexing
   * jobs.
   */
  bulkIndex(
    orgID: string,
    body: IndexingBulkIndexParams,
    options?: RequestOptions,
  ): APIPromise<IndexingBulkIndexResponse> {
    return this._client.put(path`/v3beta1/organizations/${orgID}/repositories/indexing`, {
      body,
      ...options,
    });
  }

  /**
   * Disables indexing and clears configured branches for a batch of repositories.
   */
  bulkRemove(
    orgID: string,
    body: IndexingBulkRemoveParams,
    options?: RequestOptions,
  ): APIPromise<IndexingBulkRemoveResponse> {
    return this._client.delete(path`/v3beta1/organizations/${orgID}/repositories/indexing`, {
      body,
      ...options,
    });
  }

  /**
   * Get indexing status for a repository
   */
  getStatus(
    repositoryPath: string,
    params: IndexingGetStatusParams,
    options?: RequestOptions,
  ): APIPromise<RepoIndexingStatus> {
    const { org_id } = params;
    return this._client.get(
      path`/v3beta1/organizations/${org_id}/repositories/${repositoryPath}/indexing`,
      options,
    );
  }

  /**
   * Idempotently enables indexing for a single repository and triggers indexing
   * jobs.
   */
  index(
    repositoryPath: string,
    params: IndexingIndexParams,
    options?: RequestOptions,
  ): APIPromise<RepositoryIndexing> {
    const { org_id, ...body } = params;
    return this._client.put(path`/v3beta1/organizations/${org_id}/repositories/${repositoryPath}/indexing`, {
      body,
      ...options,
    });
  }

  /**
   * Disables indexing and clears configured branches for a single repository.
   */
  remove(
    repositoryPath: string,
    params: IndexingRemoveParams,
    options?: RequestOptions,
  ): APIPromise<RepositoryIndexing> {
    const { org_id } = params;
    return this._client.delete(
      path`/v3beta1/organizations/${org_id}/repositories/${repositoryPath}/indexing`,
      options,
    );
  }

  /**
   * Remove a branch from indexing
   */
  removeBranch(
    branchName: string,
    params: IndexingRemoveBranchParams,
    options?: RequestOptions,
  ): APIPromise<RepositoryIndexing> {
    const { org_id, repository_path } = params;
    return this._client.delete(
      path`/v3beta1/organizations/${org_id}/repositories/${repository_path}/indexing/branches/${branchName}`,
      options,
    );
  }
}

export interface RepoIndexJob {
  branch_name: string | null;

  commit: string;

  created_at: number;

  job_id: string;

  status: 'failed' | 'completed' | 'in_progress';
}

export interface RepoIndexingStatus {
  indexing_enabled: boolean;

  latest_completed_search_index_job: RepoIndexJob | null;

  latest_completed_wiki_index_job: RepoIndexJob | null;

  latest_indexes: Array<RepoIndexJob>;
}

export interface RepositoryIndexing {
  branches: Array<string>;

  indexing_enabled: boolean;

  repository_path: string;

  indexing_status?: RepoIndexingStatus | null;
}

export interface IndexingListResponse {
  items: Array<RepositoryIndexing>;

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

export type IndexingBulkIndexResponse = Array<RepositoryIndexing>;

export type IndexingBulkRemoveResponse = Array<RepositoryIndexing>;

export interface IndexingListParams {
  after?: string | null;

  first?: number;
}

export interface IndexingBulkIndexParams {
  repositories: Array<IndexingBulkIndexParams.Repository>;
}

export namespace IndexingBulkIndexParams {
  export interface Repository {
    /**
     * e.g., 'org/repo-name'
     */
    repository_path: string;

    branch_names?: Array<string>;
  }
}

export interface IndexingBulkRemoveParams {
  repository_paths: Array<string>;
}

export interface IndexingGetStatusParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface IndexingIndexParams {
  /**
   * Path param: Organization ID (prefix: org-)
   */
  org_id: string;

  /**
   * Body param
   */
  branch_names?: Array<string>;
}

export interface IndexingRemoveParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;
}

export interface IndexingRemoveBranchParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;

  repository_path: string;
}

export declare namespace Indexing {
  export {
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
