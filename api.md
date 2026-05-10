# Enterprise

Types:

- <code><a href="./src/resources/enterprise/enterprise.ts">AuditLogAction</a></code>
- <code><a href="./src/resources/enterprise/enterprise.ts">PaginatedAuditLogResponse</a></code>
- <code><a href="./src/resources/enterprise/enterprise.ts">Role</a></code>
- <code><a href="./src/resources/enterprise/enterprise.ts">EnterpriseGetQueueStatusResponse</a></code>
- <code><a href="./src/resources/enterprise/enterprise.ts">EnterpriseListHypervisorsResponse</a></code>
- <code><a href="./src/resources/enterprise/enterprise.ts">EnterpriseListRolesResponse</a></code>

Methods:

- <code title="get /v3/enterprise/queue">client.enterprise.<a href="./src/resources/enterprise/enterprise.ts">getQueueStatus</a>() -> EnterpriseGetQueueStatusResponse</code>
- <code title="get /v3/enterprise/audit-logs">client.enterprise.<a href="./src/resources/enterprise/enterprise.ts">listAuditLogs</a>({ ...params }) -> PaginatedAuditLogResponse</code>
- <code title="get /v3/enterprise/hypervisors">client.enterprise.<a href="./src/resources/enterprise/enterprise.ts">listHypervisors</a>({ ...params }) -> EnterpriseListHypervisorsResponse</code>
- <code title="get /v3/enterprise/roles">client.enterprise.<a href="./src/resources/enterprise/enterprise.ts">listRoles</a>({ ...params }) -> EnterpriseListRolesResponse</code>

## Consumption

Types:

- <code><a href="./src/resources/enterprise/consumption/consumption.ts">ConsumptionListConsumptionCyclesResponse</a></code>

Methods:

- <code title="get /v3/enterprise/consumption/cycles">client.enterprise.consumption.<a href="./src/resources/enterprise/consumption/consumption.ts">listConsumptionCycles</a>({ ...params }) -> ConsumptionListConsumptionCyclesResponse</code>

### AcuLimits

#### Devin

Types:

- <code><a href="./src/resources/enterprise/consumption/acu-limits/devin/devin.ts">DevinGetAcuLimitsResponse</a></code>

Methods:

- <code title="get /v3/enterprise/consumption/acu-limits/devin">client.enterprise.consumption.acuLimits.devin.<a href="./src/resources/enterprise/consumption/acu-limits/devin/devin.ts">getAcuLimits</a>({ ...params }) -> DevinGetAcuLimitsResponse</code>

##### Organizations

Methods:

- <code title="delete /v3/enterprise/consumption/acu-limits/devin/organizations/{org_id}">client.enterprise.consumption.acuLimits.devin.organizations.<a href="./src/resources/enterprise/consumption/acu-limits/devin/organizations.ts">deleteAcuLimit</a>(orgID) -> void</code>
- <code title="put /v3/enterprise/consumption/acu-limits/devin/organizations/{org_id}">client.enterprise.consumption.acuLimits.devin.organizations.<a href="./src/resources/enterprise/consumption/acu-limits/devin/organizations.ts">setAcuLimit</a>(orgID, { ...params }) -> void</code>

### Daily

Types:

- <code><a href="./src/resources/enterprise/consumption/daily.ts">Consumption</a></code>

Methods:

- <code title="get /v3/enterprise/consumption/daily">client.enterprise.consumption.daily.<a href="./src/resources/enterprise/consumption/daily.ts">getDailyConsumption</a>({ ...params }) -> Consumption</code>
- <code title="get /v3/enterprise/consumption/daily/organizations/{org_id}">client.enterprise.consumption.daily.<a href="./src/resources/enterprise/consumption/daily.ts">getOrgDailyConsumption</a>(orgID, { ...params }) -> Consumption</code>
- <code title="get /v3/enterprise/consumption/daily/service-users/{service_user_id}">client.enterprise.consumption.daily.<a href="./src/resources/enterprise/consumption/daily.ts">getServiceUserDailyConsumption</a>(serviceUserID, { ...params }) -> Consumption</code>
- <code title="get /v3/enterprise/consumption/daily/sessions/{session_id}">client.enterprise.consumption.daily.<a href="./src/resources/enterprise/consumption/daily.ts">getSessionDailyConsumption</a>(sessionID, { ...params }) -> Consumption</code>
- <code title="get /v3/enterprise/consumption/daily/users/{user_id}">client.enterprise.consumption.daily.<a href="./src/resources/enterprise/consumption/daily.ts">getUserDailyConsumption</a>(userID, { ...params }) -> Consumption</code>

## GitProviders

Types:

- <code><a href="./src/resources/enterprise/git-providers.ts">GitProviderListConnectionsResponse</a></code>

Methods:

- <code title="get /v3/enterprise/git-providers/connections">client.enterprise.gitProviders.<a href="./src/resources/enterprise/git-providers.ts">listConnections</a>({ ...params }) -> GitProviderListConnectionsResponse</code>

## IdpGroups

Types:

- <code><a href="./src/resources/enterprise/idp-groups.ts">IdpGroupResponse</a></code>
- <code><a href="./src/resources/enterprise/idp-groups.ts">IdpGroupListIdpGroupsResponse</a></code>
- <code><a href="./src/resources/enterprise/idp-groups.ts">IdpGroupRegisterIdpGroupsResponse</a></code>

Methods:

- <code title="delete /v3/enterprise/idp-groups/{idp_group_name}">client.enterprise.idpGroups.<a href="./src/resources/enterprise/idp-groups.ts">deleteIdpGroup</a>(idpGroupName) -> IdpGroupResponse</code>
- <code title="get /v3/enterprise/idp-groups">client.enterprise.idpGroups.<a href="./src/resources/enterprise/idp-groups.ts">listIdpGroups</a>({ ...params }) -> IdpGroupListIdpGroupsResponse</code>
- <code title="post /v3/enterprise/idp-groups">client.enterprise.idpGroups.<a href="./src/resources/enterprise/idp-groups.ts">registerIdpGroups</a>({ ...params }) -> IdpGroupRegisterIdpGroupsResponse</code>

## IPAccessList

Types:

- <code><a href="./src/resources/enterprise/ip-access-list.ts">IPAccessListResponse</a></code>

Methods:

- <code title="delete /v3/enterprise/ip-access-list">client.enterprise.ipAccessList.<a href="./src/resources/enterprise/ip-access-list.ts">clearAccessList</a>() -> IPAccessListResponse</code>
- <code title="get /v3/enterprise/ip-access-list">client.enterprise.ipAccessList.<a href="./src/resources/enterprise/ip-access-list.ts">getAccessList</a>() -> IPAccessListResponse</code>
- <code title="put /v3/enterprise/ip-access-list">client.enterprise.ipAccessList.<a href="./src/resources/enterprise/ip-access-list.ts">replaceAccessList</a>({ ...params }) -> IPAccessListResponse</code>

## Knowledge

Types:

- <code><a href="./src/resources/enterprise/knowledge/knowledge.ts">FolderTree</a></code>

Methods:

- <code title="get /v3/enterprise/knowledge/folders">client.enterprise.knowledge.<a href="./src/resources/enterprise/knowledge/knowledge.ts">listFolders</a>() -> FolderTree</code>

### Notes

Types:

- <code><a href="./src/resources/enterprise/knowledge/notes.ts">KnowledgeNote</a></code>
- <code><a href="./src/resources/enterprise/knowledge/notes.ts">KnowledgeNoteCreate</a></code>
- <code><a href="./src/resources/enterprise/knowledge/notes.ts">PaginatedKnowledgeNoteResponse</a></code>

Methods:

- <code title="post /v3/enterprise/knowledge/notes">client.enterprise.knowledge.notes.<a href="./src/resources/enterprise/knowledge/notes.ts">create</a>({ ...params }) -> KnowledgeNote</code>
- <code title="get /v3/enterprise/knowledge/notes/{note_id}">client.enterprise.knowledge.notes.<a href="./src/resources/enterprise/knowledge/notes.ts">retrieve</a>(noteID) -> KnowledgeNote</code>
- <code title="put /v3/enterprise/knowledge/notes/{note_id}">client.enterprise.knowledge.notes.<a href="./src/resources/enterprise/knowledge/notes.ts">update</a>(noteID, { ...params }) -> KnowledgeNote</code>
- <code title="get /v3/enterprise/knowledge/notes">client.enterprise.knowledge.notes.<a href="./src/resources/enterprise/knowledge/notes.ts">list</a>({ ...params }) -> PaginatedKnowledgeNoteResponse</code>
- <code title="delete /v3/enterprise/knowledge/notes/{note_id}">client.enterprise.knowledge.notes.<a href="./src/resources/enterprise/knowledge/notes.ts">delete</a>(noteID) -> KnowledgeNote</code>

## Members

Types:

- <code><a href="./src/resources/enterprise/members/members.ts">PaginatedIdpGroupUser</a></code>

Methods:

- <code title="get /v3/enterprise/members/idp-users">client.enterprise.members.<a href="./src/resources/enterprise/members/members.ts">listIdpGroupUsers</a>({ ...params }) -> PaginatedIdpGroupUser</code>

### IdpGroups

Types:

- <code><a href="./src/resources/enterprise/members/idp-groups.ts">IdpGroup</a></code>
- <code><a href="./src/resources/enterprise/members/idp-groups.ts">IdpGroupUpdateRole</a></code>
- <code><a href="./src/resources/enterprise/members/idp-groups.ts">PaginatedIdpGroup</a></code>
- <code><a href="./src/resources/enterprise/members/idp-groups.ts">RoleAssignment</a></code>

Methods:

- <code title="get /v3/enterprise/members/idp-groups/{idp_group_name}">client.enterprise.members.idpGroups.<a href="./src/resources/enterprise/members/idp-groups.ts">retrieve</a>(idpGroupName) -> IdpGroup</code>
- <code title="patch /v3/enterprise/members/idp-groups/{idp_group_name}">client.enterprise.members.idpGroups.<a href="./src/resources/enterprise/members/idp-groups.ts">update</a>(idpGroupName, { ...params }) -> IdpGroup</code>
- <code title="get /v3/enterprise/members/idp-groups">client.enterprise.members.idpGroups.<a href="./src/resources/enterprise/members/idp-groups.ts">list</a>({ ...params }) -> PaginatedIdpGroup</code>
- <code title="delete /v3/enterprise/members/idp-groups/{idp_group_name}">client.enterprise.members.idpGroups.<a href="./src/resources/enterprise/members/idp-groups.ts">delete</a>(idpGroupName) -> IdpGroup</code>
- <code title="post /v3/enterprise/members/idp-groups/{idp_group_name}">client.enterprise.members.idpGroups.<a href="./src/resources/enterprise/members/idp-groups.ts">assign</a>(idpGroupName, { ...params }) -> IdpGroup</code>

### ServiceUsers

Types:

- <code><a href="./src/resources/enterprise/members/service-users.ts">PaginatedServiceUser</a></code>
- <code><a href="./src/resources/enterprise/members/service-users.ts">ServiceUser</a></code>
- <code><a href="./src/resources/enterprise/members/service-users.ts">ServiceUserUpdateRole</a></code>

Methods:

- <code title="get /v3/enterprise/members/service-users/{service_user_id}">client.enterprise.members.serviceUsers.<a href="./src/resources/enterprise/members/service-users.ts">retrieve</a>(serviceUserID) -> ServiceUser</code>
- <code title="patch /v3/enterprise/members/service-users/{service_user_id}">client.enterprise.members.serviceUsers.<a href="./src/resources/enterprise/members/service-users.ts">update</a>(serviceUserID, { ...params }) -> ServiceUser</code>
- <code title="get /v3/enterprise/members/service-users">client.enterprise.members.serviceUsers.<a href="./src/resources/enterprise/members/service-users.ts">list</a>({ ...params }) -> PaginatedServiceUser</code>
- <code title="delete /v3/enterprise/members/service-users/{service_user_id}">client.enterprise.members.serviceUsers.<a href="./src/resources/enterprise/members/service-users.ts">delete</a>(serviceUserID) -> ServiceUser</code>
- <code title="post /v3/enterprise/members/service-users/{service_user_id}">client.enterprise.members.serviceUsers.<a href="./src/resources/enterprise/members/service-users.ts">assign</a>(serviceUserID, { ...params }) -> ServiceUser</code>

### Users

Types:

- <code><a href="./src/resources/enterprise/members/users.ts">IdpRoleAssignment</a></code>
- <code><a href="./src/resources/enterprise/members/users.ts">PaginatedUser</a></code>
- <code><a href="./src/resources/enterprise/members/users.ts">User</a></code>
- <code><a href="./src/resources/enterprise/members/users.ts">UserUpdateRole</a></code>
- <code><a href="./src/resources/enterprise/members/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/enterprise/members/users.ts">UserInviteResponse</a></code>

Methods:

- <code title="get /v3/enterprise/members/users/{user_id}">client.enterprise.members.users.<a href="./src/resources/enterprise/members/users.ts">retrieve</a>(userID) -> UserRetrieveResponse</code>
- <code title="patch /v3/enterprise/members/users/{user_id}">client.enterprise.members.users.<a href="./src/resources/enterprise/members/users.ts">update</a>(userID, { ...params }) -> User</code>
- <code title="get /v3/enterprise/members/users">client.enterprise.members.users.<a href="./src/resources/enterprise/members/users.ts">list</a>({ ...params }) -> PaginatedUser</code>
- <code title="delete /v3/enterprise/members/users/{user_id}">client.enterprise.members.users.<a href="./src/resources/enterprise/members/users.ts">delete</a>(userID) -> User</code>
- <code title="post /v3/enterprise/members/users">client.enterprise.members.users.<a href="./src/resources/enterprise/members/users.ts">invite</a>({ ...params }) -> UserInviteResponse</code>

## Metrics

Types:

- <code><a href="./src/resources/enterprise/metrics.ts">ActiveUserMetrics</a></code>
- <code><a href="./src/resources/enterprise/metrics.ts">PrMetrics</a></code>
- <code><a href="./src/resources/enterprise/metrics.ts">SearchMetrics</a></code>
- <code><a href="./src/resources/enterprise/metrics.ts">SessionCountsBySize</a></code>
- <code><a href="./src/resources/enterprise/metrics.ts">SessionMetrics</a></code>
- <code><a href="./src/resources/enterprise/metrics.ts">UsageMetrics</a></code>
- <code><a href="./src/resources/enterprise/metrics.ts">MetricGetDailyActiveUsersResponse</a></code>
- <code><a href="./src/resources/enterprise/metrics.ts">MetricGetMonthlyActiveUsersResponse</a></code>
- <code><a href="./src/resources/enterprise/metrics.ts">MetricGetSessionMetricsByCategoryResponse</a></code>
- <code><a href="./src/resources/enterprise/metrics.ts">MetricGetWeeklyActiveUsersResponse</a></code>

Methods:

- <code title="get /v3/enterprise/metrics/active-users">client.enterprise.metrics.<a href="./src/resources/enterprise/metrics.ts">getActiveUsers</a>({ ...params }) -> ActiveUserMetrics</code>
- <code title="get /v3/enterprise/metrics/dau">client.enterprise.metrics.<a href="./src/resources/enterprise/metrics.ts">getDailyActiveUsers</a>({ ...params }) -> MetricGetDailyActiveUsersResponse</code>
- <code title="get /v3/enterprise/metrics/mau">client.enterprise.metrics.<a href="./src/resources/enterprise/metrics.ts">getMonthlyActiveUsers</a>({ ...params }) -> MetricGetMonthlyActiveUsersResponse</code>
- <code title="get /v3/enterprise/metrics/prs">client.enterprise.metrics.<a href="./src/resources/enterprise/metrics.ts">getPrMetrics</a>({ ...params }) -> PrMetrics</code>
- <code title="get /v3/enterprise/metrics/searches">client.enterprise.metrics.<a href="./src/resources/enterprise/metrics.ts">getSearchMetrics</a>({ ...params }) -> SearchMetrics</code>
- <code title="get /v3/enterprise/metrics/sessions">client.enterprise.metrics.<a href="./src/resources/enterprise/metrics.ts">getSessionMetrics</a>({ ...params }) -> SessionMetrics</code>
- <code title="get /v3/enterprise/metrics/sessions-by-category">client.enterprise.metrics.<a href="./src/resources/enterprise/metrics.ts">getSessionMetricsByCategory</a>({ ...params }) -> MetricGetSessionMetricsByCategoryResponse</code>
- <code title="get /v3/enterprise/metrics/usage">client.enterprise.metrics.<a href="./src/resources/enterprise/metrics.ts">getUsageMetrics</a>({ ...params }) -> UsageMetrics</code>
- <code title="get /v3/enterprise/metrics/wau">client.enterprise.metrics.<a href="./src/resources/enterprise/metrics.ts">getWeeklyActiveUsers</a>({ ...params }) -> MetricGetWeeklyActiveUsersResponse</code>

## OrgGroupLimits

Types:

- <code><a href="./src/resources/enterprise/org-group-limits.ts">OrgGroupsConfig</a></code>

Methods:

- <code title="get /v3/enterprise/org-group-limits">client.enterprise.orgGroupLimits.<a href="./src/resources/enterprise/org-group-limits.ts">getOrgGroupConfig</a>() -> OrgGroupsConfig</code>
- <code title="put /v3/enterprise/org-group-limits">client.enterprise.orgGroupLimits.<a href="./src/resources/enterprise/org-group-limits.ts">updateOrgGroupConfig</a>({ ...params }) -> OrgGroupsConfig</code>

## Organizations

Types:

- <code><a href="./src/resources/enterprise/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/enterprise/organizations/organizations.ts">OrganizationListResponse</a></code>

Methods:

- <code title="post /v3/enterprise/organizations">client.enterprise.organizations.<a href="./src/resources/enterprise/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="get /v3/enterprise/organizations/{org_id}">client.enterprise.organizations.<a href="./src/resources/enterprise/organizations/organizations.ts">retrieve</a>(orgID) -> Organization</code>
- <code title="patch /v3/enterprise/organizations/{org_id}">client.enterprise.organizations.<a href="./src/resources/enterprise/organizations/organizations.ts">update</a>(orgID, { ...params }) -> Organization</code>
- <code title="get /v3/enterprise/organizations">client.enterprise.organizations.<a href="./src/resources/enterprise/organizations/organizations.ts">list</a>({ ...params }) -> OrganizationListResponse</code>
- <code title="delete /v3/enterprise/organizations/{org_id}">client.enterprise.organizations.<a href="./src/resources/enterprise/organizations/organizations.ts">delete</a>(orgID) -> Organization</code>
- <code title="get /v3/enterprise/organizations/{org_id}/audit-logs">client.enterprise.organizations.<a href="./src/resources/enterprise/organizations/organizations.ts">retrieveAuditLogs</a>(orgID, { ...params }) -> PaginatedAuditLogResponse</code>

### GitProviders

#### Permissions

Types:

- <code><a href="./src/resources/enterprise/organizations/git-providers/permissions.ts">GitPermission</a></code>
- <code><a href="./src/resources/enterprise/organizations/git-providers/permissions.ts">GitPermissionBulkCreate</a></code>
- <code><a href="./src/resources/enterprise/organizations/git-providers/permissions.ts">PermissionCreateResponse</a></code>
- <code><a href="./src/resources/enterprise/organizations/git-providers/permissions.ts">PermissionListResponse</a></code>
- <code><a href="./src/resources/enterprise/organizations/git-providers/permissions.ts">PermissionDeleteAllResponse</a></code>

Methods:

- <code title="put /v3/enterprise/organizations/{org_id}/git-providers/permissions">client.enterprise.organizations.gitProviders.permissions.<a href="./src/resources/enterprise/organizations/git-providers/permissions.ts">create</a>(orgID, { ...params }) -> PermissionCreateResponse</code>
- <code title="get /v3/enterprise/organizations/{org_id}/git-providers/permissions">client.enterprise.organizations.gitProviders.permissions.<a href="./src/resources/enterprise/organizations/git-providers/permissions.ts">list</a>(orgID, { ...params }) -> PermissionListResponse</code>
- <code title="delete /v3/enterprise/organizations/{org_id}/git-providers/permissions/{git_permission_id}">client.enterprise.organizations.gitProviders.permissions.<a href="./src/resources/enterprise/organizations/git-providers/permissions.ts">delete</a>(gitPermissionID, { ...params }) -> GitPermission</code>
- <code title="delete /v3/enterprise/organizations/{org_id}/git-providers/permissions">client.enterprise.organizations.gitProviders.permissions.<a href="./src/resources/enterprise/organizations/git-providers/permissions.ts">deleteAll</a>(orgID) -> PermissionDeleteAllResponse</code>

### Members

Methods:

- <code title="get /v3/enterprise/organizations/{org_id}/members/idp-users">client.enterprise.organizations.members.<a href="./src/resources/enterprise/organizations/members/members.ts">retrieveIdpUsers</a>(orgID, { ...params }) -> PaginatedIdpGroupUser</code>

#### IdpGroups

Methods:

- <code title="get /v3/enterprise/organizations/{org_id}/members/idp-groups/{idp_group_name}">client.enterprise.organizations.members.idpGroups.<a href="./src/resources/enterprise/organizations/members/idp-groups.ts">retrieve</a>(idpGroupName, { ...params }) -> IdpGroup</code>
- <code title="post /v3/enterprise/organizations/{org_id}/members/idp-groups/{idp_group_name}">client.enterprise.organizations.members.idpGroups.<a href="./src/resources/enterprise/organizations/members/idp-groups.ts">update</a>(idpGroupName, { ...params }) -> IdpGroup</code>
- <code title="delete /v3/enterprise/organizations/{org_id}/members/idp-groups/{idp_group_name}">client.enterprise.organizations.members.idpGroups.<a href="./src/resources/enterprise/organizations/members/idp-groups.ts">delete</a>(idpGroupName, { ...params }) -> IdpGroup</code>
- <code title="get /v3/enterprise/organizations/{org_id}/members/idp-groups">client.enterprise.organizations.members.idpGroups.<a href="./src/resources/enterprise/organizations/members/idp-groups.ts">retrieveIdpGroups</a>(orgID, { ...params }) -> PaginatedIdpGroup</code>

#### ServiceUsers

Methods:

- <code title="post /v3/enterprise/organizations/{org_id}/members/service-users/{service_user_id}">client.enterprise.organizations.members.serviceUsers.<a href="./src/resources/enterprise/organizations/members/service-users.ts">update</a>(serviceUserID, { ...params }) -> ServiceUser</code>
- <code title="delete /v3/enterprise/organizations/{org_id}/members/service-users/{service_user_id}">client.enterprise.organizations.members.serviceUsers.<a href="./src/resources/enterprise/organizations/members/service-users.ts">delete</a>(serviceUserID, { ...params }) -> ServiceUser</code>
- <code title="get /v3/enterprise/organizations/{org_id}/members/service-users">client.enterprise.organizations.members.serviceUsers.<a href="./src/resources/enterprise/organizations/members/service-users.ts">retrieveServiceUsers</a>(orgID, { ...params }) -> PaginatedServiceUser</code>

#### Users

Methods:

- <code title="post /v3/enterprise/organizations/{org_id}/members/users/{user_id}">client.enterprise.organizations.members.users.<a href="./src/resources/enterprise/organizations/members/users.ts">update</a>(userID, { ...params }) -> User</code>
- <code title="get /v3/enterprise/organizations/{org_id}/members/users">client.enterprise.organizations.members.users.<a href="./src/resources/enterprise/organizations/members/users.ts">list</a>(orgID, { ...params }) -> PaginatedUser</code>
- <code title="delete /v3/enterprise/organizations/{org_id}/members/users/{user_id}">client.enterprise.organizations.members.users.<a href="./src/resources/enterprise/organizations/members/users.ts">delete</a>(userID, { ...params }) -> User</code>

### Metrics

Methods:

- <code title="get /v3/enterprise/organizations/{org_id}/metrics/usage">client.enterprise.organizations.metrics.<a href="./src/resources/enterprise/organizations/metrics.ts">retrieveUsage</a>(orgID, { ...params }) -> UsageMetrics</code>

### Tags

Types:

- <code><a href="./src/resources/enterprise/organizations/tags/tags.ts">Tags</a></code>
- <code><a href="./src/resources/enterprise/organizations/tags/tags.ts">TagsCreate</a></code>

Methods:

- <code title="put /v3/enterprise/organizations/{org_id}/tags">client.enterprise.organizations.tags.<a href="./src/resources/enterprise/organizations/tags/tags.ts">create</a>(orgID, { ...params }) -> Tags</code>
- <code title="get /v3/enterprise/organizations/{org_id}/tags">client.enterprise.organizations.tags.<a href="./src/resources/enterprise/organizations/tags/tags.ts">list</a>(orgID) -> Tags</code>
- <code title="delete /v3/enterprise/organizations/{org_id}/tags/{tag}">client.enterprise.organizations.tags.<a href="./src/resources/enterprise/organizations/tags/tags.ts">delete</a>(tag, { ...params }) -> Tags</code>
- <code title="delete /v3/enterprise/organizations/{org_id}/tags">client.enterprise.organizations.tags.<a href="./src/resources/enterprise/organizations/tags/tags.ts">deleteAll</a>(orgID) -> Tags</code>

#### Default

Types:

- <code><a href="./src/resources/enterprise/organizations/tags/default.ts">DefaultTag</a></code>

Methods:

- <code title="put /v3/enterprise/organizations/{org_id}/tags/default">client.enterprise.organizations.tags.default.<a href="./src/resources/enterprise/organizations/tags/default.ts">create</a>(orgID, { ...params }) -> DefaultTag</code>
- <code title="get /v3/enterprise/organizations/{org_id}/tags/default">client.enterprise.organizations.tags.default.<a href="./src/resources/enterprise/organizations/tags/default.ts">list</a>(orgID) -> DefaultTag</code>
- <code title="delete /v3/enterprise/organizations/{org_id}/tags/default">client.enterprise.organizations.tags.default.<a href="./src/resources/enterprise/organizations/tags/default.ts">deleteAll</a>(orgID) -> DefaultTag</code>

## Playbooks

Types:

- <code><a href="./src/resources/enterprise/playbooks.ts">PaginatedPlaybookResponse</a></code>
- <code><a href="./src/resources/enterprise/playbooks.ts">PlaybookCreate</a></code>
- <code><a href="./src/resources/enterprise/playbooks.ts">PlaybookResponse</a></code>

Methods:

- <code title="post /v3/enterprise/playbooks">client.enterprise.playbooks.<a href="./src/resources/enterprise/playbooks.ts">create</a>({ ...params }) -> PlaybookResponse</code>
- <code title="get /v3/enterprise/playbooks/{playbook_id}">client.enterprise.playbooks.<a href="./src/resources/enterprise/playbooks.ts">retrieve</a>(playbookID) -> PlaybookResponse</code>
- <code title="put /v3/enterprise/playbooks/{playbook_id}">client.enterprise.playbooks.<a href="./src/resources/enterprise/playbooks.ts">update</a>(playbookID, { ...params }) -> PlaybookResponse</code>
- <code title="get /v3/enterprise/playbooks">client.enterprise.playbooks.<a href="./src/resources/enterprise/playbooks.ts">list</a>({ ...params }) -> PaginatedPlaybookResponse</code>
- <code title="delete /v3/enterprise/playbooks/{playbook_id}">client.enterprise.playbooks.<a href="./src/resources/enterprise/playbooks.ts">delete</a>(playbookID) -> PlaybookResponse</code>

## Sessions

Types:

- <code><a href="./src/resources/enterprise/sessions/sessions.ts">PaginatedSessionResponse</a></code>
- <code><a href="./src/resources/enterprise/sessions/sessions.ts">SessionAttachment</a></code>
- <code><a href="./src/resources/enterprise/sessions/sessions.ts">SessionPullRequest</a></code>
- <code><a href="./src/resources/enterprise/sessions/sessions.ts">SessionResponse</a></code>
- <code><a href="./src/resources/enterprise/sessions/sessions.ts">SessionRetrieveAttachmentsResponse</a></code>

Methods:

- <code title="get /v3/enterprise/sessions/{devin_id}">client.enterprise.sessions.<a href="./src/resources/enterprise/sessions/sessions.ts">retrieve</a>(devinID, { ...params }) -> SessionResponse</code>
- <code title="get /v3/enterprise/sessions">client.enterprise.sessions.<a href="./src/resources/enterprise/sessions/sessions.ts">list</a>({ ...params }) -> PaginatedSessionResponse</code>
- <code title="get /v3/enterprise/sessions/{devin_id}/attachments">client.enterprise.sessions.<a href="./src/resources/enterprise/sessions/sessions.ts">retrieveAttachments</a>(devinID, { ...params }) -> SessionRetrieveAttachmentsResponse</code>

### Insights

Types:

- <code><a href="./src/resources/enterprise/sessions/insights.ts">PaginatedSessionInsightsResponse</a></code>
- <code><a href="./src/resources/enterprise/sessions/insights.ts">SessionInsights</a></code>
- <code><a href="./src/resources/enterprise/sessions/insights.ts">SessionInsightsGenerate</a></code>
- <code><a href="./src/resources/enterprise/sessions/insights.ts">SessionInsightsNoteUsageItem</a></code>

Methods:

- <code title="get /v3/enterprise/sessions/{devin_id}/insights">client.enterprise.sessions.insights.<a href="./src/resources/enterprise/sessions/insights.ts">list</a>(devinID, { ...params }) -> SessionInsights</code>
- <code title="post /v3/enterprise/sessions/{devin_id}/insights/generate">client.enterprise.sessions.insights.<a href="./src/resources/enterprise/sessions/insights.ts">generate</a>(devinID, { ...params }) -> SessionInsightsGenerate</code>

### Messages

Types:

- <code><a href="./src/resources/enterprise/sessions/messages.ts">PaginatedSessionMessage</a></code>
- <code><a href="./src/resources/enterprise/sessions/messages.ts">SessionMessageCreate</a></code>

Methods:

- <code title="post /v3/enterprise/sessions/{devin_id}/messages">client.enterprise.sessions.messages.<a href="./src/resources/enterprise/sessions/messages.ts">create</a>(devinID, { ...params }) -> SessionResponse</code>
- <code title="get /v3/enterprise/sessions/{devin_id}/messages">client.enterprise.sessions.messages.<a href="./src/resources/enterprise/sessions/messages.ts">list</a>(devinID, { ...params }) -> PaginatedSessionMessage</code>

### Tags

Types:

- <code><a href="./src/resources/enterprise/sessions/tags.ts">SessionTagsResponse</a></code>
- <code><a href="./src/resources/enterprise/sessions/tags.ts">SessionTagsUpdate</a></code>

Methods:

- <code title="put /v3/enterprise/sessions/{devin_id}/tags">client.enterprise.sessions.tags.<a href="./src/resources/enterprise/sessions/tags.ts">create</a>(devinID, { ...params }) -> SessionTagsResponse</code>
- <code title="get /v3/enterprise/sessions/{devin_id}/tags">client.enterprise.sessions.tags.<a href="./src/resources/enterprise/sessions/tags.ts">list</a>(devinID, { ...params }) -> SessionTagsResponse</code>

# Organizations

## Attachments

Types:

- <code><a href="./src/resources/organizations/attachments.ts">AttachmentDownloadResponse</a></code>
- <code><a href="./src/resources/organizations/attachments.ts">AttachmentUploadResponse</a></code>

Methods:

- <code title="get /v3/organizations/{org_id}/attachments/{uuid}/{name}">client.organizations.attachments.<a href="./src/resources/organizations/attachments.ts">download</a>(name, { ...params }) -> unknown</code>
- <code title="post /v3/organizations/{org_id}/attachments">client.organizations.attachments.<a href="./src/resources/organizations/attachments.ts">upload</a>(orgID, { ...params }) -> AttachmentUploadResponse</code>

## Consumption

### Daily

Methods:

- <code title="get /v3/organizations/{org_id}/consumption/daily">client.organizations.consumption.daily.<a href="./src/resources/organizations/consumption/daily.ts">get</a>(orgID, { ...params }) -> Consumption</code>
- <code title="get /v3/organizations/{org_id}/consumption/daily/service-users/{service_user_id}">client.organizations.consumption.daily.<a href="./src/resources/organizations/consumption/daily.ts">getServiceUser</a>(serviceUserID, { ...params }) -> Consumption</code>
- <code title="get /v3/organizations/{org_id}/consumption/daily/sessions/{session_id}">client.organizations.consumption.daily.<a href="./src/resources/organizations/consumption/daily.ts">getSession</a>(sessionID, { ...params }) -> Consumption</code>
- <code title="get /v3/organizations/{org_id}/consumption/daily/users/{user_id}">client.organizations.consumption.daily.<a href="./src/resources/organizations/consumption/daily.ts">getUser</a>(userID, { ...params }) -> Consumption</code>

## Knowledge

Methods:

- <code title="get /v3/organizations/{org_id}/knowledge/folders">client.organizations.knowledge.<a href="./src/resources/organizations/knowledge/knowledge.ts">getFolders</a>(orgID) -> FolderTree</code>

### Notes

Methods:

- <code title="post /v3/organizations/{org_id}/knowledge/notes">client.organizations.knowledge.notes.<a href="./src/resources/organizations/knowledge/notes.ts">create</a>(orgID, { ...params }) -> KnowledgeNote</code>
- <code title="get /v3/organizations/{org_id}/knowledge/notes/{note_id}">client.organizations.knowledge.notes.<a href="./src/resources/organizations/knowledge/notes.ts">retrieve</a>(noteID, { ...params }) -> KnowledgeNote</code>
- <code title="put /v3/organizations/{org_id}/knowledge/notes/{note_id}">client.organizations.knowledge.notes.<a href="./src/resources/organizations/knowledge/notes.ts">update</a>(noteID, { ...params }) -> KnowledgeNote</code>
- <code title="get /v3/organizations/{org_id}/knowledge/notes">client.organizations.knowledge.notes.<a href="./src/resources/organizations/knowledge/notes.ts">list</a>(orgID, { ...params }) -> PaginatedKnowledgeNoteResponse</code>
- <code title="delete /v3/organizations/{org_id}/knowledge/notes/{note_id}">client.organizations.knowledge.notes.<a href="./src/resources/organizations/knowledge/notes.ts">delete</a>(noteID, { ...params }) -> KnowledgeNote</code>

## Metrics

Types:

- <code><a href="./src/resources/organizations/metrics.ts">MetricGetDailyActiveUsersResponse</a></code>
- <code><a href="./src/resources/organizations/metrics.ts">MetricGetMonthlyActiveUsersResponse</a></code>
- <code><a href="./src/resources/organizations/metrics.ts">MetricGetWeeklyActiveUsersResponse</a></code>

Methods:

- <code title="get /v3/organizations/{org_id}/metrics/active-users">client.organizations.metrics.<a href="./src/resources/organizations/metrics.ts">getActiveUsers</a>(orgID, { ...params }) -> ActiveUserMetrics</code>
- <code title="get /v3/organizations/{org_id}/metrics/dau">client.organizations.metrics.<a href="./src/resources/organizations/metrics.ts">getDailyActiveUsers</a>(orgID, { ...params }) -> MetricGetDailyActiveUsersResponse</code>
- <code title="get /v3/organizations/{org_id}/metrics/mau">client.organizations.metrics.<a href="./src/resources/organizations/metrics.ts">getMonthlyActiveUsers</a>(orgID, { ...params }) -> MetricGetMonthlyActiveUsersResponse</code>
- <code title="get /v3/organizations/{org_id}/metrics/prs">client.organizations.metrics.<a href="./src/resources/organizations/metrics.ts">getPrMetrics</a>(orgID, { ...params }) -> PrMetrics</code>
- <code title="get /v3/organizations/{org_id}/metrics/searches">client.organizations.metrics.<a href="./src/resources/organizations/metrics.ts">getSearchMetrics</a>(orgID, { ...params }) -> SearchMetrics</code>
- <code title="get /v3/organizations/{org_id}/metrics/sessions">client.organizations.metrics.<a href="./src/resources/organizations/metrics.ts">getSessionMetrics</a>(orgID, { ...params }) -> SessionMetrics</code>
- <code title="get /v3/organizations/{org_id}/metrics/usage">client.organizations.metrics.<a href="./src/resources/organizations/metrics.ts">getUsageMetrics</a>(orgID, { ...params }) -> UsageMetrics</code>
- <code title="get /v3/organizations/{org_id}/metrics/wau">client.organizations.metrics.<a href="./src/resources/organizations/metrics.ts">getWeeklyActiveUsers</a>(orgID, { ...params }) -> MetricGetWeeklyActiveUsersResponse</code>

## Playbooks

Methods:

- <code title="post /v3/organizations/{org_id}/playbooks">client.organizations.playbooks.<a href="./src/resources/organizations/playbooks.ts">create</a>(orgID, { ...params }) -> PlaybookResponse</code>
- <code title="get /v3/organizations/{org_id}/playbooks/{playbook_id}">client.organizations.playbooks.<a href="./src/resources/organizations/playbooks.ts">retrieve</a>(playbookID, { ...params }) -> PlaybookResponse</code>
- <code title="put /v3/organizations/{org_id}/playbooks/{playbook_id}">client.organizations.playbooks.<a href="./src/resources/organizations/playbooks.ts">update</a>(playbookID, { ...params }) -> PlaybookResponse</code>
- <code title="get /v3/organizations/{org_id}/playbooks">client.organizations.playbooks.<a href="./src/resources/organizations/playbooks.ts">list</a>(orgID, { ...params }) -> PaginatedPlaybookResponse</code>
- <code title="delete /v3/organizations/{org_id}/playbooks/{playbook_id}">client.organizations.playbooks.<a href="./src/resources/organizations/playbooks.ts">delete</a>(playbookID, { ...params }) -> PlaybookResponse</code>

## Schedules

Types:

- <code><a href="./src/resources/organizations/schedules.ts">Schedule</a></code>
- <code><a href="./src/resources/organizations/schedules.ts">ScheduleListResponse</a></code>

Methods:

- <code title="post /v3/organizations/{org_id}/schedules">client.organizations.schedules.<a href="./src/resources/organizations/schedules.ts">create</a>(orgID, { ...params }) -> Schedule</code>
- <code title="get /v3/organizations/{org_id}/schedules/{schedule_id}">client.organizations.schedules.<a href="./src/resources/organizations/schedules.ts">retrieve</a>(scheduleID, { ...params }) -> Schedule</code>
- <code title="patch /v3/organizations/{org_id}/schedules/{schedule_id}">client.organizations.schedules.<a href="./src/resources/organizations/schedules.ts">update</a>(scheduleID, { ...params }) -> Schedule</code>
- <code title="get /v3/organizations/{org_id}/schedules">client.organizations.schedules.<a href="./src/resources/organizations/schedules.ts">list</a>(orgID, { ...params }) -> ScheduleListResponse</code>
- <code title="delete /v3/organizations/{org_id}/schedules/{schedule_id}">client.organizations.schedules.<a href="./src/resources/organizations/schedules.ts">delete</a>(scheduleID, { ...params }) -> Schedule</code>

## Secrets

Types:

- <code><a href="./src/resources/organizations/secrets.ts">Secret</a></code>
- <code><a href="./src/resources/organizations/secrets.ts">SecretListResponse</a></code>

Methods:

- <code title="post /v3/organizations/{org_id}/secrets">client.organizations.secrets.<a href="./src/resources/organizations/secrets.ts">create</a>(orgID, { ...params }) -> Secret</code>
- <code title="get /v3/organizations/{org_id}/secrets">client.organizations.secrets.<a href="./src/resources/organizations/secrets.ts">list</a>(orgID, { ...params }) -> SecretListResponse</code>
- <code title="delete /v3/organizations/{org_id}/secrets/{secret_id}">client.organizations.secrets.<a href="./src/resources/organizations/secrets.ts">delete</a>(secretID, { ...params }) -> Secret</code>

## Sessions

Types:

- <code><a href="./src/resources/organizations/sessions/sessions.ts">SessionListAttachmentsResponse</a></code>

Methods:

- <code title="post /v3/organizations/{org_id}/sessions">client.organizations.sessions.<a href="./src/resources/organizations/sessions/sessions.ts">create</a>(orgID, { ...params }) -> SessionResponse</code>
- <code title="get /v3/organizations/{org_id}/sessions/{devin_id}">client.organizations.sessions.<a href="./src/resources/organizations/sessions/sessions.ts">retrieve</a>(devinID, { ...params }) -> SessionResponse</code>
- <code title="get /v3/organizations/{org_id}/sessions">client.organizations.sessions.<a href="./src/resources/organizations/sessions/sessions.ts">list</a>(orgID, { ...params }) -> PaginatedSessionResponse</code>
- <code title="post /v3/organizations/{org_id}/sessions/{devin_id}/archive">client.organizations.sessions.<a href="./src/resources/organizations/sessions/sessions.ts">archive</a>(devinID, { ...params }) -> SessionResponse</code>
- <code title="get /v3/organizations/{org_id}/sessions/{devin_id}/attachments">client.organizations.sessions.<a href="./src/resources/organizations/sessions/sessions.ts">listAttachments</a>(devinID, { ...params }) -> SessionListAttachmentsResponse</code>
- <code title="delete /v3/organizations/{org_id}/sessions/{devin_id}">client.organizations.sessions.<a href="./src/resources/organizations/sessions/sessions.ts">terminate</a>(devinID, { ...params }) -> SessionResponse</code>

### Insights

Methods:

- <code title="get /v3/organizations/{org_id}/sessions/{devin_id}/insights">client.organizations.sessions.insights.<a href="./src/resources/organizations/sessions/insights.ts">retrieve</a>(devinID, { ...params }) -> SessionInsights</code>
- <code title="get /v3/organizations/{org_id}/sessions/insights">client.organizations.sessions.insights.<a href="./src/resources/organizations/sessions/insights.ts">list</a>(orgID, { ...params }) -> PaginatedSessionInsightsResponse</code>
- <code title="post /v3/organizations/{org_id}/sessions/{devin_id}/insights/generate">client.organizations.sessions.insights.<a href="./src/resources/organizations/sessions/insights.ts">generate</a>(devinID, { ...params }) -> SessionInsightsGenerate</code>

### Messages

Methods:

- <code title="get /v3/organizations/{org_id}/sessions/{devin_id}/messages">client.organizations.sessions.messages.<a href="./src/resources/organizations/sessions/messages.ts">list</a>(devinID, { ...params }) -> PaginatedSessionMessage</code>
- <code title="post /v3/organizations/{org_id}/sessions/{devin_id}/messages">client.organizations.sessions.messages.<a href="./src/resources/organizations/sessions/messages.ts">send</a>(devinID, { ...params }) -> SessionResponse</code>

### Tags

Methods:

- <code title="get /v3/organizations/{org_id}/sessions/{devin_id}/tags">client.organizations.sessions.tags.<a href="./src/resources/organizations/sessions/tags.ts">retrieve</a>(devinID, { ...params }) -> SessionTagsResponse</code>
- <code title="post /v3/organizations/{org_id}/sessions/{devin_id}/tags">client.organizations.sessions.tags.<a href="./src/resources/organizations/sessions/tags.ts">append</a>(devinID, { ...params }) -> SessionTagsResponse</code>
- <code title="put /v3/organizations/{org_id}/sessions/{devin_id}/tags">client.organizations.sessions.tags.<a href="./src/resources/organizations/sessions/tags.ts">replace</a>(devinID, { ...params }) -> SessionTagsResponse</code>

# Beta1

## Enterprise

Types:

- <code><a href="./src/resources/beta1/enterprise/enterprise.ts">PaginatedResponse</a></code>

Methods:

- <code title="get /v3beta1/enterprise/guardrail-violations">client.beta1.enterprise.<a href="./src/resources/beta1/enterprise/enterprise.ts">listGuardrailViolations</a>({ ...params }) -> PaginatedResponse</code>

### Organizations

Methods:

- <code title="get /v3beta1/enterprise/organizations/{org_id}/guardrail-violations">client.beta1.enterprise.organizations.<a href="./src/resources/beta1/enterprise/organizations.ts">listGuardrailViolations</a>(orgID, { ...params }) -> PaginatedResponse</code>

### ServiceUsers

#### APIKeys

Types:

- <code><a href="./src/resources/beta1/enterprise/service-users/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/beta1/enterprise/service-users/api-keys.ts">APIKeyWithToken</a></code>
- <code><a href="./src/resources/beta1/enterprise/service-users/api-keys.ts">APIKeyListResponse</a></code>

Methods:

- <code title="post /v3beta1/enterprise/service-users/{service_user_id}/api-keys">client.beta1.enterprise.serviceUsers.apiKeys.<a href="./src/resources/beta1/enterprise/service-users/api-keys.ts">create</a>(serviceUserID, { ...params }) -> APIKeyWithToken</code>
- <code title="get /v3beta1/enterprise/service-users/{service_user_id}/api-keys">client.beta1.enterprise.serviceUsers.apiKeys.<a href="./src/resources/beta1/enterprise/service-users/api-keys.ts">list</a>(serviceUserID, { ...params }) -> APIKeyListResponse</code>
- <code title="delete /v3beta1/enterprise/service-users/{service_user_id}/api-keys/{api_key_id}">client.beta1.enterprise.serviceUsers.apiKeys.<a href="./src/resources/beta1/enterprise/service-users/api-keys.ts">revoke</a>(apiKeyID, { ...params }) -> APIKey</code>
- <code title="post /v3beta1/enterprise/service-users/{service_user_id}/api-keys/{api_key_id}/rotate">client.beta1.enterprise.serviceUsers.apiKeys.<a href="./src/resources/beta1/enterprise/service-users/api-keys.ts">rotate</a>(apiKeyID, { ...params }) -> APIKeyWithToken</code>

## Organizations

### Repositories

Types:

- <code><a href="./src/resources/beta1/organizations/repositories/repositories.ts">RepositoryListResponse</a></code>

Methods:

- <code title="get /v3beta1/organizations/{org_id}/repositories">client.beta1.organizations.repositories.<a href="./src/resources/beta1/organizations/repositories/repositories.ts">list</a>(orgID, { ...params }) -> RepositoryListResponse</code>

#### Indexing

Types:

- <code><a href="./src/resources/beta1/organizations/repositories/indexing.ts">RepoIndexJob</a></code>
- <code><a href="./src/resources/beta1/organizations/repositories/indexing.ts">RepoIndexingStatus</a></code>
- <code><a href="./src/resources/beta1/organizations/repositories/indexing.ts">RepositoryIndexing</a></code>
- <code><a href="./src/resources/beta1/organizations/repositories/indexing.ts">IndexingListResponse</a></code>
- <code><a href="./src/resources/beta1/organizations/repositories/indexing.ts">IndexingBulkIndexResponse</a></code>
- <code><a href="./src/resources/beta1/organizations/repositories/indexing.ts">IndexingBulkRemoveResponse</a></code>

Methods:

- <code title="get /v3beta1/organizations/{org_id}/repositories/indexing">client.beta1.organizations.repositories.indexing.<a href="./src/resources/beta1/organizations/repositories/indexing.ts">list</a>(orgID, { ...params }) -> IndexingListResponse</code>
- <code title="put /v3beta1/organizations/{org_id}/repositories/indexing">client.beta1.organizations.repositories.indexing.<a href="./src/resources/beta1/organizations/repositories/indexing.ts">bulkIndex</a>(orgID, { ...params }) -> IndexingBulkIndexResponse</code>
- <code title="delete /v3beta1/organizations/{org_id}/repositories/indexing">client.beta1.organizations.repositories.indexing.<a href="./src/resources/beta1/organizations/repositories/indexing.ts">bulkRemove</a>(orgID, { ...params }) -> IndexingBulkRemoveResponse</code>
- <code title="get /v3beta1/organizations/{org_id}/repositories/{repository_path}/indexing">client.beta1.organizations.repositories.indexing.<a href="./src/resources/beta1/organizations/repositories/indexing.ts">getStatus</a>(repositoryPath, { ...params }) -> RepoIndexingStatus</code>
- <code title="put /v3beta1/organizations/{org_id}/repositories/{repository_path}/indexing">client.beta1.organizations.repositories.indexing.<a href="./src/resources/beta1/organizations/repositories/indexing.ts">index</a>(repositoryPath, { ...params }) -> RepositoryIndexing</code>
- <code title="delete /v3beta1/organizations/{org_id}/repositories/{repository_path}/indexing">client.beta1.organizations.repositories.indexing.<a href="./src/resources/beta1/organizations/repositories/indexing.ts">remove</a>(repositoryPath, { ...params }) -> RepositoryIndexing</code>
- <code title="delete /v3beta1/organizations/{org_id}/repositories/{repository_path}/indexing/branches/{branch_name}">client.beta1.organizations.repositories.indexing.<a href="./src/resources/beta1/organizations/repositories/indexing.ts">removeBranch</a>(branchName, { ...params }) -> RepositoryIndexing</code>
