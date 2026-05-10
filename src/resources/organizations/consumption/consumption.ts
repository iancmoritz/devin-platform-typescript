// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DailyAPI from './daily';
import {
  Daily,
  DailyGetParams,
  DailyGetServiceUserParams,
  DailyGetSessionParams,
  DailyGetUserParams,
} from './daily';

export class Consumption extends APIResource {
  daily: DailyAPI.Daily = new DailyAPI.Daily(this._client);
}

Consumption.Daily = Daily;

export declare namespace Consumption {
  export {
    Daily as Daily,
    type DailyGetParams as DailyGetParams,
    type DailyGetServiceUserParams as DailyGetServiceUserParams,
    type DailyGetSessionParams as DailyGetSessionParams,
    type DailyGetUserParams as DailyGetUserParams,
  };
}
