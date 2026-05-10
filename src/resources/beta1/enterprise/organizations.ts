// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnterpriseAPI from './enterprise';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Organizations extends APIResource {
  /**
   * List guardrail violations for a specific organization.
   */
  listGuardrailViolations(
    orgID: string,
    query: OrganizationListGuardrailViolationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnterpriseAPI.PaginatedResponse> {
    return this._client.get(path`/v3beta1/enterprise/organizations/${orgID}/guardrail-violations`, {
      query,
      ...options,
    });
  }
}

export interface OrganizationListGuardrailViolationsParams {
  after?: string | null;

  first?: number;

  guardrail_id?: string | null;

  order?: 'asc' | 'desc';

  session_id?: string | null;

  time_after?: number | null;

  time_before?: number | null;
}

export declare namespace Organizations {
  export { type OrganizationListGuardrailViolationsParams as OrganizationListGuardrailViolationsParams };
}
