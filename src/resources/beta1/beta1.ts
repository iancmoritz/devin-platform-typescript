// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnterpriseAPI from './enterprise/enterprise';
import {
  Enterprise,
  EnterpriseListGuardrailViolationsParams,
  PaginatedResponse,
} from './enterprise/enterprise';
import * as OrganizationsAPI from './organizations/organizations';
import { Organizations } from './organizations/organizations';

export class Beta1 extends APIResource {
  enterprise: EnterpriseAPI.Enterprise = new EnterpriseAPI.Enterprise(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
}

Beta1.Enterprise = Enterprise;
Beta1.Organizations = Organizations;

export declare namespace Beta1 {
  export {
    Enterprise as Enterprise,
    type PaginatedResponse as PaginatedResponse,
    type EnterpriseListGuardrailViolationsParams as EnterpriseListGuardrailViolationsParams,
  };

  export { Organizations as Organizations };
}
