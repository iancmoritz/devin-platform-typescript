// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RepositoriesAPI from './repositories/repositories';
import { Repositories, RepositoryListParams, RepositoryListResponse } from './repositories/repositories';

export class Organizations extends APIResource {
  repositories: RepositoriesAPI.Repositories = new RepositoriesAPI.Repositories(this._client);
}

Organizations.Repositories = Repositories;

export declare namespace Organizations {
  export {
    Repositories as Repositories,
    type RepositoryListResponse as RepositoryListResponse,
    type RepositoryListParams as RepositoryListParams,
  };
}
