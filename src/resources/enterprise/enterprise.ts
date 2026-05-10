// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnterpriseAPI from './enterprise';
import * as GitProvidersAPI from './git-providers';
import {
  GitProviderListConnectionsParams,
  GitProviderListConnectionsResponse,
  GitProviders,
} from './git-providers';
import * as IdpGroupsAPI from './idp-groups';
import {
  IdpGroupListIdpGroupsParams,
  IdpGroupListIdpGroupsResponse,
  IdpGroupRegisterIdpGroupsParams,
  IdpGroupRegisterIdpGroupsResponse,
  IdpGroupResponse,
  IdpGroups,
} from './idp-groups';
import * as IPAccessListAPI from './ip-access-list';
import { IPAccessList, IPAccessListReplaceAccessListParams, IPAccessListResponse } from './ip-access-list';
import * as MetricsAPI from './metrics';
import {
  ActiveUserMetrics,
  MetricGetActiveUsersParams,
  MetricGetDailyActiveUsersParams,
  MetricGetDailyActiveUsersResponse,
  MetricGetMonthlyActiveUsersParams,
  MetricGetMonthlyActiveUsersResponse,
  MetricGetPrMetricsParams,
  MetricGetSearchMetricsParams,
  MetricGetSessionMetricsByCategoryParams,
  MetricGetSessionMetricsByCategoryResponse,
  MetricGetSessionMetricsParams,
  MetricGetUsageMetricsParams,
  MetricGetWeeklyActiveUsersParams,
  MetricGetWeeklyActiveUsersResponse,
  Metrics,
  PrMetrics,
  SearchMetrics,
  SessionCountsBySize,
  SessionMetrics,
  UsageMetrics,
} from './metrics';
import * as OrgGroupLimitsAPI from './org-group-limits';
import { OrgGroupLimitUpdateOrgGroupConfigParams, OrgGroupLimits, OrgGroupsConfig } from './org-group-limits';
import * as PlaybooksAPI from './playbooks';
import {
  PaginatedPlaybookResponse,
  PlaybookCreate,
  PlaybookCreateParams,
  PlaybookListParams,
  PlaybookResponse,
  PlaybookUpdateParams,
  Playbooks,
} from './playbooks';
import * as ConsumptionAPI from './consumption/consumption';
import {
  Consumption,
  ConsumptionListConsumptionCyclesParams,
  ConsumptionListConsumptionCyclesResponse,
} from './consumption/consumption';
import * as KnowledgeAPI from './knowledge/knowledge';
import { FolderTree, Knowledge } from './knowledge/knowledge';
import * as MembersAPI from './members/members';
import { MemberListIdpGroupUsersParams, Members, PaginatedIdpGroupUser } from './members/members';
import * as OrganizationsAPI from './organizations/organizations';
import {
  Organization,
  OrganizationCreateParams,
  OrganizationListParams,
  OrganizationListResponse,
  OrganizationRetrieveAuditLogsParams,
  OrganizationUpdateParams,
  Organizations,
} from './organizations/organizations';
import * as SessionsAPI from './sessions/sessions';
import {
  PaginatedSessionResponse,
  SessionAttachment,
  SessionListParams,
  SessionPullRequest,
  SessionResponse,
  SessionRetrieveAttachmentsParams,
  SessionRetrieveAttachmentsResponse,
  SessionRetrieveParams,
  Sessions,
} from './sessions/sessions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Enterprise extends APIResource {
  consumption: ConsumptionAPI.Consumption = new ConsumptionAPI.Consumption(this._client);
  gitProviders: GitProvidersAPI.GitProviders = new GitProvidersAPI.GitProviders(this._client);
  idpGroups: IdpGroupsAPI.IdpGroups = new IdpGroupsAPI.IdpGroups(this._client);
  ipAccessList: IPAccessListAPI.IPAccessList = new IPAccessListAPI.IPAccessList(this._client);
  knowledge: KnowledgeAPI.Knowledge = new KnowledgeAPI.Knowledge(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  orgGroupLimits: OrgGroupLimitsAPI.OrgGroupLimits = new OrgGroupLimitsAPI.OrgGroupLimits(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  playbooks: PlaybooksAPI.Playbooks = new PlaybooksAPI.Playbooks(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);

  /**
   * Get the queue status for an enterprise.
   *
   * Returns the total number of queued sessions (status: new, resuming, claimed) and
   * a status indicator (normal/elevated/high).
   *
   * This endpoint is useful for enterprise admins to monitor queue health and set up
   * alerts for capacity issues.
   */
  getQueueStatus(options?: RequestOptions): APIPromise<EnterpriseGetQueueStatusResponse> {
    return this._client.get('/v3/enterprise/queue', options);
  }

  /**
   * List audit logs for the enterprise.
   */
  listAuditLogs(
    query: EnterpriseListAuditLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedAuditLogResponse> {
    return this._client.get('/v3/enterprise/audit-logs', { query, ...options });
  }

  /**
   * List Hypervisors
   */
  listHypervisors(
    query: EnterpriseListHypervisorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnterpriseListHypervisorsResponse> {
    return this._client.get('/v3/enterprise/hypervisors', { query, ...options });
  }

  /**
   * Get roles for this enterprise
   */
  listRoles(
    query: EnterpriseListRolesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnterpriseListRolesResponse> {
    return this._client.get('/v3/enterprise/roles', { query, ...options });
  }
}

export type AuditLogAction =
  | 'login'
  | 'create_org'
  | 'update_org'
  | 'delete_org'
  | 'revoke_all_enterprise_api_keys'
  | 'add_enterprise_member'
  | 'delete_member'
  | 'add_member'
  | 'assign_roles'
  | 'update_role'
  | 'create_role'
  | 'delete_role'
  | 'add_group_membership'
  | 'update_group_membership'
  | 'delete_group_membership'
  | 'create_knowledge'
  | 'edit_knowledge'
  | 'delete_knowledge'
  | 'create_folder'
  | 'update_folder'
  | 'delete_folder'
  | 'create_session'
  | 'sleep_session'
  | 'terminate_session'
  | 'send_message'
  | 'create_service_api_key'
  | 'revoke_enterprise_api_key'
  | 'create_gitlab_integration'
  | 'update_gitlab_integration'
  | 'reconnect_gitlab_integration'
  | 'delete_gitlab_integration'
  | 'create_azure_devops_integration'
  | 'reconnect_azure_devops_integration'
  | 'delete_azure_devops_integration'
  | 'remove_repo_from_devin'
  | 'update_enterprise_hypervisor_settings'
  | 'update_enterprise_settings'
  | 'update_org_settings'
  | 'ai_guardrail_violation'
  | 'update_ai_guardrail'
  | 'approve_deploy'
  | 'approve_test_app'
  | 'permission_response'
  | 'search_query'
  | 'create_org_api_key'
  | 'create_user_api_key'
  | 'view_org_api_key'
  | 'view_user_api_key'
  | 'create_secret'
  | 'update_secret'
  | 'delete_secret'
  | 'create_playbook'
  | 'update_playbook'
  | 'delete_playbook'
  | 'enable_persona'
  | 'disable_persona'
  | 'delete_persona'
  | 'start_repo_setup'
  | 'delete_repo_setup'
  | 'finish_repo_setup'
  | 'github_integration_deleted'
  | 'create_github_integration'
  | 'delete_github_integration'
  | 'refresh_github_integration'
  | 'create_bitbucket_integration'
  | 'delete_bitbucket_integration'
  | 'mcp_server_install'
  | 'mcp_server_enable'
  | 'mcp_server_disable'
  | 'mcp_server_delete'
  | 'create_mcp_validation_session'
  | 'create_service_user'
  | 'delete_service_user'
  | 'assign_service_user_role'
  | 'remove_service_user_role'
  | 'create_git_permission'
  | 'delete_git_permission'
  | 'update_git_permission'
  | 'create_maintenance_task'
  | 'update_maintenance_task'
  | 'delete_maintenance_task'
  | 'create_snapshot_script'
  | 'schedule_snapshot_script'
  | 'execute_snapshot_script'
  | 'update_repo_setup_steering_knowledge'
  | 'delete_repo_setup_steering_knowledge'
  | 'set_org_group_limits'
  | 'create_join_request'
  | 'approve_join_request'
  | 'automatic_join_event'
  | 'reject_join_request'
  | 'create_service_user_api_key'
  | 'revoke_service_user_api_key'
  | 'rotate_service_user_api_key'
  | 'create_pat'
  | 'revoke_pat'
  | 'rotate_pat';

export interface PaginatedAuditLogResponse {
  items: Array<PaginatedAuditLogResponse.Item>;

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

export namespace PaginatedAuditLogResponse {
  export interface Item {
    action: EnterpriseAPI.AuditLogAction;

    audit_log_id: string;

    created_at: number;

    data: { [key: string]: unknown };

    org_id: string | null;

    service_user_id: string | null;

    service_user_name: string | null;

    user_email: string | null;

    user_id: string | null;
  }
}

export interface Role {
  role_id: string;

  role_name: string;

  role_type: 'enterprise' | 'org';
}

/**
 * Response model for queue endpoint.
 */
export interface EnterpriseGetQueueStatusResponse {
  queue_size: number;

  status: 'normal' | 'elevated' | 'high';
}

export interface EnterpriseListHypervisorsResponse {
  items: Array<EnterpriseListHypervisorsResponse.Item>;

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

export namespace EnterpriseListHypervisorsResponse {
  export interface Item {
    cloud_provider_instance_id: string | null;

    created_at: number | null;

    hypervisor_id: string;

    last_heartbeat: number | null;

    status: string;

    utilization_percentage: number;
  }
}

export interface EnterpriseListRolesResponse {
  items: Array<Role>;

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

export interface EnterpriseListAuditLogsParams {
  action?: AuditLogAction | null;

  after?: string | null;

  first?: number;

  order?: 'asc' | 'desc';

  time_after?: number | null;

  time_before?: number | null;
}

export interface EnterpriseListHypervisorsParams {
  after?: string | null;

  first?: number;

  status?: 'available' | 'restarting' | 'disconnected' | 'terminated' | 'draining' | 'all';
}

export interface EnterpriseListRolesParams {
  after?: string | null;

  first?: number;
}

Enterprise.Consumption = Consumption;
Enterprise.GitProviders = GitProviders;
Enterprise.IdpGroups = IdpGroups;
Enterprise.IPAccessList = IPAccessList;
Enterprise.Knowledge = Knowledge;
Enterprise.Members = Members;
Enterprise.Metrics = Metrics;
Enterprise.OrgGroupLimits = OrgGroupLimits;
Enterprise.Organizations = Organizations;
Enterprise.Playbooks = Playbooks;
Enterprise.Sessions = Sessions;

export declare namespace Enterprise {
  export {
    type AuditLogAction as AuditLogAction,
    type PaginatedAuditLogResponse as PaginatedAuditLogResponse,
    type Role as Role,
    type EnterpriseGetQueueStatusResponse as EnterpriseGetQueueStatusResponse,
    type EnterpriseListHypervisorsResponse as EnterpriseListHypervisorsResponse,
    type EnterpriseListRolesResponse as EnterpriseListRolesResponse,
    type EnterpriseListAuditLogsParams as EnterpriseListAuditLogsParams,
    type EnterpriseListHypervisorsParams as EnterpriseListHypervisorsParams,
    type EnterpriseListRolesParams as EnterpriseListRolesParams,
  };

  export {
    Consumption as Consumption,
    type ConsumptionListConsumptionCyclesResponse as ConsumptionListConsumptionCyclesResponse,
    type ConsumptionListConsumptionCyclesParams as ConsumptionListConsumptionCyclesParams,
  };

  export {
    GitProviders as GitProviders,
    type GitProviderListConnectionsResponse as GitProviderListConnectionsResponse,
    type GitProviderListConnectionsParams as GitProviderListConnectionsParams,
  };

  export {
    IdpGroups as IdpGroups,
    type IdpGroupResponse as IdpGroupResponse,
    type IdpGroupListIdpGroupsResponse as IdpGroupListIdpGroupsResponse,
    type IdpGroupRegisterIdpGroupsResponse as IdpGroupRegisterIdpGroupsResponse,
    type IdpGroupListIdpGroupsParams as IdpGroupListIdpGroupsParams,
    type IdpGroupRegisterIdpGroupsParams as IdpGroupRegisterIdpGroupsParams,
  };

  export {
    IPAccessList as IPAccessList,
    type IPAccessListResponse as IPAccessListResponse,
    type IPAccessListReplaceAccessListParams as IPAccessListReplaceAccessListParams,
  };

  export { Knowledge as Knowledge, type FolderTree as FolderTree };

  export {
    Members as Members,
    type PaginatedIdpGroupUser as PaginatedIdpGroupUser,
    type MemberListIdpGroupUsersParams as MemberListIdpGroupUsersParams,
  };

  export {
    Metrics as Metrics,
    type ActiveUserMetrics as ActiveUserMetrics,
    type PrMetrics as PrMetrics,
    type SearchMetrics as SearchMetrics,
    type SessionCountsBySize as SessionCountsBySize,
    type SessionMetrics as SessionMetrics,
    type UsageMetrics as UsageMetrics,
    type MetricGetDailyActiveUsersResponse as MetricGetDailyActiveUsersResponse,
    type MetricGetMonthlyActiveUsersResponse as MetricGetMonthlyActiveUsersResponse,
    type MetricGetSessionMetricsByCategoryResponse as MetricGetSessionMetricsByCategoryResponse,
    type MetricGetWeeklyActiveUsersResponse as MetricGetWeeklyActiveUsersResponse,
    type MetricGetActiveUsersParams as MetricGetActiveUsersParams,
    type MetricGetDailyActiveUsersParams as MetricGetDailyActiveUsersParams,
    type MetricGetMonthlyActiveUsersParams as MetricGetMonthlyActiveUsersParams,
    type MetricGetPrMetricsParams as MetricGetPrMetricsParams,
    type MetricGetSearchMetricsParams as MetricGetSearchMetricsParams,
    type MetricGetSessionMetricsParams as MetricGetSessionMetricsParams,
    type MetricGetSessionMetricsByCategoryParams as MetricGetSessionMetricsByCategoryParams,
    type MetricGetUsageMetricsParams as MetricGetUsageMetricsParams,
    type MetricGetWeeklyActiveUsersParams as MetricGetWeeklyActiveUsersParams,
  };

  export {
    OrgGroupLimits as OrgGroupLimits,
    type OrgGroupsConfig as OrgGroupsConfig,
    type OrgGroupLimitUpdateOrgGroupConfigParams as OrgGroupLimitUpdateOrgGroupConfigParams,
  };

  export {
    Organizations as Organizations,
    type Organization as Organization,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationRetrieveAuditLogsParams as OrganizationRetrieveAuditLogsParams,
  };

  export {
    Playbooks as Playbooks,
    type PaginatedPlaybookResponse as PaginatedPlaybookResponse,
    type PlaybookCreate as PlaybookCreate,
    type PlaybookResponse as PlaybookResponse,
    type PlaybookCreateParams as PlaybookCreateParams,
    type PlaybookUpdateParams as PlaybookUpdateParams,
    type PlaybookListParams as PlaybookListParams,
  };

  export {
    Sessions as Sessions,
    type PaginatedSessionResponse as PaginatedSessionResponse,
    type SessionAttachment as SessionAttachment,
    type SessionPullRequest as SessionPullRequest,
    type SessionResponse as SessionResponse,
    type SessionRetrieveAttachmentsResponse as SessionRetrieveAttachmentsResponse,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionListParams as SessionListParams,
    type SessionRetrieveAttachmentsParams as SessionRetrieveAttachmentsParams,
  };
}
