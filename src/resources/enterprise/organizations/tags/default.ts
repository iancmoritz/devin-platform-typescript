// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Default extends APIResource {
  /**
   * Set the default tag for an organization. The tag must exist in the allowed tags
   * list.
   */
  create(orgID: string, body: DefaultCreateParams, options?: RequestOptions): APIPromise<DefaultTag> {
    return this._client.put(path`/v3/enterprise/organizations/${orgID}/tags/default`, { body, ...options });
  }

  /**
   * Get the current default tag for an organization.
   */
  list(orgID: string, options?: RequestOptions): APIPromise<DefaultTag> {
    return this._client.get(path`/v3/enterprise/organizations/${orgID}/tags/default`, options);
  }

  /**
   * Clear the default tag for an organization.
   */
  deleteAll(orgID: string, options?: RequestOptions): APIPromise<DefaultTag> {
    return this._client.delete(path`/v3/enterprise/organizations/${orgID}/tags/default`, options);
  }
}

export interface DefaultTag {
  default_tag: string | null;
}

export interface DefaultCreateParams {
  tag: string;
}

export declare namespace Default {
  export { type DefaultTag as DefaultTag, type DefaultCreateParams as DefaultCreateParams };
}
