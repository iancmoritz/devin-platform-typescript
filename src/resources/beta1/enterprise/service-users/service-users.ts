// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as APIKeysAPI from './api-keys';
import {
  APIKey,
  APIKeyCreateParams,
  APIKeyListParams,
  APIKeyListResponse,
  APIKeyRevokeParams,
  APIKeyRotateParams,
  APIKeyWithToken,
  APIKeys,
} from './api-keys';

export class ServiceUsers extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
}

ServiceUsers.APIKeys = APIKeys;

export declare namespace ServiceUsers {
  export {
    APIKeys as APIKeys,
    type APIKey as APIKey,
    type APIKeyWithToken as APIKeyWithToken,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyRevokeParams as APIKeyRevokeParams,
    type APIKeyRotateParams as APIKeyRotateParams,
  };
}
