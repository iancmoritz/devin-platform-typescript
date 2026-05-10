// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Schedules extends APIResource {
  /**
   * Create a new scheduled session.
   */
  create(orgID: string, body: ScheduleCreateParams, options?: RequestOptions): APIPromise<Schedule> {
    return this._client.post(path`/v3/organizations/${orgID}/schedules`, { body, ...options });
  }

  /**
   * Get a specific schedule by ID.
   */
  retrieve(
    scheduleID: string,
    params: ScheduleRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Schedule> {
    const { org_id } = params;
    return this._client.get(path`/v3/organizations/${org_id}/schedules/${scheduleID}`, options);
  }

  /**
   * Update an existing schedule.
   */
  update(scheduleID: string, params: ScheduleUpdateParams, options?: RequestOptions): APIPromise<Schedule> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/v3/organizations/${org_id}/schedules/${scheduleID}`, {
      body,
      ...options,
    });
  }

  /**
   * List all schedules for the organization.
   */
  list(
    orgID: string,
    query: ScheduleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduleListResponse> {
    return this._client.get(path`/v3/organizations/${orgID}/schedules`, { query, ...options });
  }

  /**
   * Soft delete a schedule.
   */
  delete(scheduleID: string, params: ScheduleDeleteParams, options?: RequestOptions): APIPromise<Schedule> {
    const { org_id } = params;
    return this._client.delete(path`/v3/organizations/${org_id}/schedules/${scheduleID}`, options);
  }
}

export interface Schedule {
  agent: 'devin' | 'data_analyst';

  consecutive_failures: number;

  created_at: string;

  created_by: string | null;

  enabled: boolean;

  frequency: string | null;

  last_error_at: string | null;

  last_error_message: string | null;

  last_executed_at: string | null;

  name: string;

  notify_on: 'always' | 'failure' | 'never';

  org_id: string;

  playbook: Schedule.Playbook | null;

  prompt: string;

  scheduled_session_id: string;

  updated_at: string;

  bypass_approval?: boolean;

  interval_count?: number;

  last_edited_by?: string | null;

  schedule_type?: 'recurring' | 'one_time';

  scheduled_at?: string | null;

  slack_channel_id?: string | null;

  slack_team_id?: string | null;

  tags?: Array<string> | null;

  target_devin_id?: string | null;
}

export namespace Schedule {
  export interface Playbook {
    playbook_id: string;

    title: string | null;
  }
}

export interface ScheduleListResponse {
  items: Array<Schedule>;

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

export interface ScheduleCreateParams {
  name: string;

  prompt: string;

  agent?: 'devin' | 'data_analyst';

  bypass_approval?: boolean;

  create_as_user_id?: string | null;

  frequency?: string | null;

  interval_count?: number;

  notify_on?: 'always' | 'failure' | 'never';

  playbook_id?: string | null;

  schedule_type?: 'recurring' | 'one_time';

  scheduled_at?: string | null;

  slack_channel_id?: string | null;

  slack_team_id?: string | null;

  tags?: Array<string> | null;

  target_devin_id?: string | null;
}

export interface ScheduleRetrieveParams {
  org_id: string;
}

export interface ScheduleUpdateParams {
  /**
   * Path param
   */
  org_id: string;

  /**
   * Body param
   */
  agent?: 'devin' | 'data_analyst' | null;

  /**
   * Body param
   */
  bypass_approval?: boolean | null;

  /**
   * Body param
   */
  enabled?: boolean | null;

  /**
   * Body param
   */
  frequency?: string | null;

  /**
   * Body param
   */
  interval_count?: number | null;

  /**
   * Body param
   */
  name?: string | null;

  /**
   * Body param
   */
  notify_on?: 'always' | 'failure' | 'never' | null;

  /**
   * Body param
   */
  playbook_id?: string | null;

  /**
   * Body param
   */
  prompt?: string | null;

  /**
   * Body param: Set the user ID that this schedule will run as. Requires
   * ImpersonateOrgSessions permission. Setting to null reverts to the default bot
   * user. Omitting the field leaves the current identity unchanged.
   */
  run_as_user_id?: string | null;

  /**
   * Body param
   */
  schedule_type?: 'recurring' | 'one_time' | null;

  /**
   * Body param
   */
  scheduled_at?: string | null;

  /**
   * Body param
   */
  slack_channel_id?: string | null;

  /**
   * Body param
   */
  slack_team_id?: string | null;

  /**
   * Body param
   */
  tags?: Array<string> | null;

  /**
   * Body param
   */
  target_devin_id?: string | null;
}

export interface ScheduleListParams {
  limit?: number;

  offset?: number;
}

export interface ScheduleDeleteParams {
  org_id: string;
}

export declare namespace Schedules {
  export {
    type Schedule as Schedule,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleRetrieveParams as ScheduleRetrieveParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}
