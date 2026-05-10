// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Attachments extends APIResource {
  /**
   * Download a file attachment. Returns a redirect to a presigned URL.
   */
  download(name: string, params: AttachmentDownloadParams, options?: RequestOptions): APIPromise<unknown> {
    const { org_id, uuid } = params;
    return this._client.get(path`/v3/organizations/${org_id}/attachments/${uuid}/${name}`, options);
  }

  /**
   * Upload a file attachment that can be used in Devin sessions.
   */
  upload(
    orgID: string,
    body: AttachmentUploadParams,
    options?: RequestOptions,
  ): APIPromise<AttachmentUploadResponse> {
    return this._client.post(
      path`/v3/organizations/${orgID}/attachments`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type AttachmentDownloadResponse = unknown;

export interface AttachmentUploadResponse {
  attachment_id: string;

  name: string;

  url: string;
}

export interface AttachmentDownloadParams {
  /**
   * Organization ID (prefix: org-)
   */
  org_id: string;

  uuid: string;
}

export interface AttachmentUploadParams {
  file: Uploadable;
}

export declare namespace Attachments {
  export {
    type AttachmentDownloadResponse as AttachmentDownloadResponse,
    type AttachmentUploadResponse as AttachmentUploadResponse,
    type AttachmentDownloadParams as AttachmentDownloadParams,
    type AttachmentUploadParams as AttachmentUploadParams,
  };
}
