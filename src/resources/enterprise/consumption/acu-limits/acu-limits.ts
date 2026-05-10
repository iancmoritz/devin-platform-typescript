// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DevinAPI from './devin/devin';
import { Devin, DevinGetAcuLimitsParams, DevinGetAcuLimitsResponse } from './devin/devin';

export class AcuLimits extends APIResource {
  devin: DevinAPI.Devin = new DevinAPI.Devin(this._client);
}

AcuLimits.Devin = Devin;

export declare namespace AcuLimits {
  export {
    Devin as Devin,
    type DevinGetAcuLimitsResponse as DevinGetAcuLimitsResponse,
    type DevinGetAcuLimitsParams as DevinGetAcuLimitsParams,
  };
}
