// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class GitProviders extends APIResource {
  /**
   * List Git Connections
   */
  listConnections(
    query: GitProviderListConnectionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GitProviderListConnectionsResponse> {
    return this._client.get('/v3/enterprise/git-providers/connections', { query, ...options });
  }
}

export interface GitProviderListConnectionsResponse {
  items: Array<GitProviderListConnectionsResponse.Item>;

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

export namespace GitProviderListConnectionsResponse {
  export interface Item {
    created_at: number;

    git_connection_id: string;

    git_provider_type:
      | 'github_token'
      | 'github_individual_token'
      | 'github_app'
      | 'gitlab_token'
      | 'gitlab_oauth'
      | 'azure_devops_oauth'
      | 'bitbucket_oauth'
      | 'bitbucket_token';

    host: string;

    name: string | null;
  }
}

export interface GitProviderListConnectionsParams {
  after?: string | null;

  first?: number;
}

export declare namespace GitProviders {
  export {
    type GitProviderListConnectionsResponse as GitProviderListConnectionsResponse,
    type GitProviderListConnectionsParams as GitProviderListConnectionsParams,
  };
}
