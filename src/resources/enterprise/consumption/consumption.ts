// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DailyAPI from './daily';
import {
  Consumption as DailyAPIConsumption,
  Daily,
  DailyGetDailyConsumptionParams,
  DailyGetOrgDailyConsumptionParams,
  DailyGetServiceUserDailyConsumptionParams,
  DailyGetSessionDailyConsumptionParams,
  DailyGetUserDailyConsumptionParams,
} from './daily';
import * as AcuLimitsAPI from './acu-limits/acu-limits';
import { AcuLimits } from './acu-limits/acu-limits';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Consumption extends APIResource {
  acuLimits: AcuLimitsAPI.AcuLimits = new AcuLimitsAPI.AcuLimits(this._client);
  daily: DailyAPI.Daily = new DailyAPI.Daily(this._client);

  /**
   * List Consumption Cycles
   */
  listConsumptionCycles(
    query: ConsumptionListConsumptionCyclesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConsumptionListConsumptionCyclesResponse> {
    return this._client.get('/v3/enterprise/consumption/cycles', { query, ...options });
  }
}

export interface ConsumptionListConsumptionCyclesResponse {
  items: Array<ConsumptionListConsumptionCyclesResponse.Item>;

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

export namespace ConsumptionListConsumptionCyclesResponse {
  export interface Item {
    after: number;

    before: number;
  }
}

export interface ConsumptionListConsumptionCyclesParams {
  after?: string | null;

  first?: number;
}

Consumption.AcuLimits = AcuLimits;
Consumption.Daily = Daily;

export declare namespace Consumption {
  export {
    type ConsumptionListConsumptionCyclesResponse as ConsumptionListConsumptionCyclesResponse,
    type ConsumptionListConsumptionCyclesParams as ConsumptionListConsumptionCyclesParams,
  };

  export { AcuLimits as AcuLimits };

  export {
    Daily as Daily,
    type DailyAPIConsumption as Consumption,
    type DailyGetDailyConsumptionParams as DailyGetDailyConsumptionParams,
    type DailyGetOrgDailyConsumptionParams as DailyGetOrgDailyConsumptionParams,
    type DailyGetServiceUserDailyConsumptionParams as DailyGetServiceUserDailyConsumptionParams,
    type DailyGetSessionDailyConsumptionParams as DailyGetSessionDailyConsumptionParams,
    type DailyGetUserDailyConsumptionParams as DailyGetUserDailyConsumptionParams,
  };
}
