// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnterpriseAPI from '../enterprise';
import * as MetricsAPI from './metrics';
import { MetricRetrieveUsageParams, Metrics } from './metrics';
import * as GitProvidersAPI from './git-providers/git-providers';
import { GitProviders } from './git-providers/git-providers';
import * as MembersAPI from './members/members';
import { MemberRetrieveIdpUsersParams, Members } from './members/members';
import * as TagsAPI from './tags/tags';
import { TagCreateParams, TagDeleteParams, Tags, TagsCreate } from './tags/tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Organizations extends APIResource {
  gitProviders: GitProvidersAPI.GitProviders = new GitProvidersAPI.GitProviders(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Create a new organization in this enterprise
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<Organization> {
    return this._client.post('/v3/enterprise/organizations', { body, ...options });
  }

  /**
   * Get details for a specific organization in the enterprise.
   */
  retrieve(orgID: string, options?: RequestOptions): APIPromise<Organization> {
    return this._client.get(path`/v3/enterprise/organizations/${orgID}`, options);
  }

  /**
   * Update an organization's name and/or ACU limits
   */
  update(orgID: string, body: OrganizationUpdateParams, options?: RequestOptions): APIPromise<Organization> {
    return this._client.patch(path`/v3/enterprise/organizations/${orgID}`, { body, ...options });
  }

  /**
   * List organizations in the enterprise.
   */
  list(
    query: OrganizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationListResponse> {
    return this._client.get('/v3/enterprise/organizations', { query, ...options });
  }

  /**
   * Delete an organization from this enterprise
   */
  delete(orgID: string, options?: RequestOptions): APIPromise<Organization> {
    return this._client.delete(path`/v3/enterprise/organizations/${orgID}`, options);
  }

  /**
   * List audit logs for the organization.
   */
  retrieveAuditLogs(
    orgID: string,
    query: OrganizationRetrieveAuditLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnterpriseAPI.PaginatedAuditLogResponse> {
    return this._client.get(path`/v3/enterprise/organizations/${orgID}/audit-logs`, { query, ...options });
  }
}

export interface Organization {
  created_at: number;

  max_cycle_acu_limit: number | null;

  max_session_acu_limit: number | null;

  name: string;

  org_id: string;

  updated_at: number;
}

export interface OrganizationListResponse {
  items: Array<Organization>;

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

export interface OrganizationCreateParams {
  name: string;

  max_cycle_acu_limit?: number | null;

  max_session_acu_limit?: number | null;
}

export interface OrganizationUpdateParams {
  max_cycle_acu_limit?: number | null;

  max_session_acu_limit?: number | null;

  name?: string | null;
}

export interface OrganizationListParams {
  after?: string | null;

  first?: number;
}

export interface OrganizationRetrieveAuditLogsParams {
  action?: EnterpriseAPI.AuditLogAction | null;

  after?: string | null;

  first?: number;

  order?: 'asc' | 'desc';

  time_after?: number | null;

  time_before?: number | null;
}

Organizations.GitProviders = GitProviders;
Organizations.Members = Members;
Organizations.Metrics = Metrics;

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationRetrieveAuditLogsParams as OrganizationRetrieveAuditLogsParams,
  };

  export { GitProviders as GitProviders };

  export { Members as Members, type MemberRetrieveIdpUsersParams as MemberRetrieveIdpUsersParams };

  export { Metrics as Metrics, type MetricRetrieveUsageParams as MetricRetrieveUsageParams };

  export {
    type Tags as Tags,
    type TagsCreate as TagsCreate,
    type TagCreateParams as TagCreateParams,
    type TagDeleteParams as TagDeleteParams,
  };
}
