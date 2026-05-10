// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Daily extends APIResource {
  /**
   * Get daily ACU consumption for the entire enterprise.
   *
   * Returns total ACUs and consumption broken down by date.
   *
   * **Timezone behavior**: Billing cycles use midnight PST (Pacific Standard Time)
   * as the day boundary, which corresponds to 08:00:00 UTC. To match the consumption
   * data shown in the Devin dashboard, pass Unix timestamps that align with this
   * timezone offset (e.g., 1733385600 for December 5, 2025 at midnight PST).
   */
  getDailyConsumption(
    query: DailyGetDailyConsumptionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Consumption> {
    return this._client.get('/v3/enterprise/consumption/daily', { query, ...options });
  }

  /**
   * Get daily ACU consumption for a specific organization.
   *
   * Returns total ACUs and consumption broken down by date for the org.
   *
   * **Timezone behavior**: Billing cycles use midnight PST (Pacific Standard Time)
   * as the day boundary, which corresponds to 08:00:00 UTC. To match the consumption
   * data shown in the Devin dashboard, pass Unix timestamps that align with this
   * timezone offset (e.g., 1733385600 for December 5, 2025 at midnight PST).
   */
  getOrgDailyConsumption(
    orgID: string,
    query: DailyGetOrgDailyConsumptionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Consumption> {
    return this._client.get(path`/v3/enterprise/consumption/daily/organizations/${orgID}`, {
      query,
      ...options,
    });
  }

  /**
   * Get daily ACU consumption for a specific service user.
   *
   * Returns total ACUs and consumption broken down by date for sessions created by
   * the given service user.
   *
   * **Timezone behavior**: Billing cycles use midnight PST (Pacific Standard Time)
   * as the day boundary, which corresponds to 08:00:00 UTC. To match the consumption
   * data shown in the Devin dashboard, pass Unix timestamps that align with this
   * timezone offset (e.g., 1733385600 for December 5, 2025 at midnight PST).
   */
  getServiceUserDailyConsumption(
    serviceUserID: string,
    query: DailyGetServiceUserDailyConsumptionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Consumption> {
    return this._client.get(path`/v3/enterprise/consumption/daily/service-users/${serviceUserID}`, {
      query,
      ...options,
    });
  }

  /**
   * Get daily ACU consumption for a specific session.
   *
   * Returns total ACUs and consumption broken down by date for the session.
   *
   * **Timezone behavior**: Billing cycles use midnight PST (Pacific Standard Time)
   * as the day boundary, which corresponds to 08:00:00 UTC. To match the consumption
   * data shown in the Devin dashboard, pass Unix timestamps that align with this
   * timezone offset (e.g., 1733385600 for December 5, 2025 at midnight PST).
   */
  getSessionDailyConsumption(
    sessionID: string,
    query: DailyGetSessionDailyConsumptionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Consumption> {
    return this._client.get(path`/v3/enterprise/consumption/daily/sessions/${sessionID}`, {
      query,
      ...options,
    });
  }

  /**
   * Get daily ACU consumption for a specific user.
   *
   * Returns total ACUs and consumption broken down by date for the user.
   *
   * **Timezone behavior**: Billing cycles use midnight PST (Pacific Standard Time)
   * as the day boundary, which corresponds to 08:00:00 UTC. To match the consumption
   * data shown in the Devin dashboard, pass Unix timestamps that align with this
   * timezone offset (e.g., 1733385600 for December 5, 2025 at midnight PST).
   */
  getUserDailyConsumption(
    userID: string,
    query: DailyGetUserDailyConsumptionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Consumption> {
    return this._client.get(path`/v3/enterprise/consumption/daily/users/${userID}`, { query, ...options });
  }
}

export interface Consumption {
  consumption_by_date: Array<Consumption.ConsumptionByDate>;

  total_acus: number;
}

export namespace Consumption {
  export interface ConsumptionByDate {
    acus: number;

    acus_by_product: ConsumptionByDate.AcusByProduct;

    date: number;
  }

  export namespace ConsumptionByDate {
    export interface AcusByProduct {
      cascade: number;

      devin: number;

      terminal: number;

      review?: number | null;
    }
  }
}

export interface DailyGetDailyConsumptionParams {
  time_after?: number | null;

  time_before?: number | null;
}

export interface DailyGetOrgDailyConsumptionParams {
  time_after?: number | null;

  time_before?: number | null;
}

export interface DailyGetServiceUserDailyConsumptionParams {
  time_after?: number | null;

  time_before?: number | null;
}

export interface DailyGetSessionDailyConsumptionParams {
  time_after?: number | null;

  time_before?: number | null;
}

export interface DailyGetUserDailyConsumptionParams {
  time_after?: number | null;

  time_before?: number | null;
}

export declare namespace Daily {
  export {
    type Consumption as Consumption,
    type DailyGetDailyConsumptionParams as DailyGetDailyConsumptionParams,
    type DailyGetOrgDailyConsumptionParams as DailyGetOrgDailyConsumptionParams,
    type DailyGetServiceUserDailyConsumptionParams as DailyGetServiceUserDailyConsumptionParams,
    type DailyGetSessionDailyConsumptionParams as DailyGetSessionDailyConsumptionParams,
    type DailyGetUserDailyConsumptionParams as DailyGetUserDailyConsumptionParams,
  };
}
