// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DailyAPI from '../../enterprise/consumption/daily';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Daily extends APIResource {
  /**
   * Get daily ACU consumption for the organization.
   *
   * **Timezone behavior**: Billing cycles use midnight PST (Pacific Standard Time)
   * as the day boundary, which corresponds to 08:00:00 UTC.
   */
  get(
    orgID: string,
    query: DailyGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DailyAPI.Consumption> {
    return this._client.get(path`/v3/organizations/${orgID}/consumption/daily`, { query, ...options });
  }

  /**
   * Get daily ACU consumption for a specific service user within the organization.
   *
   * **Timezone behavior**: Billing cycles use midnight PST (Pacific Standard Time)
   * as the day boundary, which corresponds to 08:00:00 UTC.
   */
  getServiceUser(
    serviceUserID: string,
    params: DailyGetServiceUserParams,
    options?: RequestOptions,
  ): APIPromise<DailyAPI.Consumption> {
    const { org_id, ...query } = params;
    return this._client.get(
      path`/v3/organizations/${org_id}/consumption/daily/service-users/${serviceUserID}`,
      { query, ...options },
    );
  }

  /**
   * Get daily ACU consumption for a specific session within the organization.
   *
   * **Timezone behavior**: Billing cycles use midnight PST (Pacific Standard Time)
   * as the day boundary, which corresponds to 08:00:00 UTC.
   */
  getSession(
    sessionID: string,
    params: DailyGetSessionParams,
    options?: RequestOptions,
  ): APIPromise<DailyAPI.Consumption> {
    const { org_id, ...query } = params;
    return this._client.get(path`/v3/organizations/${org_id}/consumption/daily/sessions/${sessionID}`, {
      query,
      ...options,
    });
  }

  /**
   * Get daily ACU consumption for a specific user within the organization.
   *
   * **Timezone behavior**: Billing cycles use midnight PST (Pacific Standard Time)
   * as the day boundary, which corresponds to 08:00:00 UTC.
   */
  getUser(
    userID: string,
    params: DailyGetUserParams,
    options?: RequestOptions,
  ): APIPromise<DailyAPI.Consumption> {
    const { org_id, ...query } = params;
    return this._client.get(path`/v3/organizations/${org_id}/consumption/daily/users/${userID}`, {
      query,
      ...options,
    });
  }
}

export interface DailyGetParams {
  time_after?: number | null;

  time_before?: number | null;
}

export interface DailyGetServiceUserParams {
  /**
   * Path param
   */
  org_id: string;

  /**
   * Query param
   */
  time_after?: number | null;

  /**
   * Query param
   */
  time_before?: number | null;
}

export interface DailyGetSessionParams {
  /**
   * Path param
   */
  org_id: string;

  /**
   * Query param
   */
  time_after?: number | null;

  /**
   * Query param
   */
  time_before?: number | null;
}

export interface DailyGetUserParams {
  /**
   * Path param
   */
  org_id: string;

  /**
   * Query param
   */
  time_after?: number | null;

  /**
   * Query param
   */
  time_before?: number | null;
}

export declare namespace Daily {
  export {
    type DailyGetParams as DailyGetParams,
    type DailyGetServiceUserParams as DailyGetServiceUserParams,
    type DailyGetSessionParams as DailyGetSessionParams,
    type DailyGetUserParams as DailyGetUserParams,
  };
}
