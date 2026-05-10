// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OrganizationsAPI from './organizations';
import { OrganizationListGuardrailViolationsParams, Organizations } from './organizations';
import * as ServiceUsersAPI from './service-users/service-users';
import { ServiceUsers } from './service-users/service-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Enterprise extends APIResource {
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  serviceUsers: ServiceUsersAPI.ServiceUsers = new ServiceUsersAPI.ServiceUsers(this._client);

  /**
   * List guardrail violations across the enterprise.
   */
  listGuardrailViolations(
    query: EnterpriseListGuardrailViolationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedResponse> {
    return this._client.get('/v3beta1/enterprise/guardrail-violations', { query, ...options });
  }
}

export interface PaginatedResponse {
  items: Array<PaginatedResponse.Item>;

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

export namespace PaginatedResponse {
  export interface Item {
    action_taken: string;

    confidence_score: number;

    created_at: number;

    event_id: string;

    guardrail_id: string;

    guardrail_name: string;

    org_id: string;

    reasoning: string;

    session_id: string | null;

    user_message: string;

    violation_id: number;
  }
}

export interface EnterpriseListGuardrailViolationsParams {
  after?: string | null;

  first?: number;

  guardrail_id?: string | null;

  order?: 'asc' | 'desc';

  session_id?: string | null;

  time_after?: number | null;

  time_before?: number | null;
}

Enterprise.Organizations = Organizations;
Enterprise.ServiceUsers = ServiceUsers;

export declare namespace Enterprise {
  export {
    type PaginatedResponse as PaginatedResponse,
    type EnterpriseListGuardrailViolationsParams as EnterpriseListGuardrailViolationsParams,
  };

  export {
    Organizations as Organizations,
    type OrganizationListGuardrailViolationsParams as OrganizationListGuardrailViolationsParams,
  };

  export { ServiceUsers as ServiceUsers };
}
