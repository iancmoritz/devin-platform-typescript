// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AttachmentsAPI from './attachments';
import {
  AttachmentDownloadParams,
  AttachmentDownloadResponse,
  AttachmentUploadParams,
  AttachmentUploadResponse,
  Attachments,
} from './attachments';
import * as MetricsAPI from './metrics';
import {
  MetricGetActiveUsersParams,
  MetricGetDailyActiveUsersParams,
  MetricGetDailyActiveUsersResponse,
  MetricGetMonthlyActiveUsersParams,
  MetricGetMonthlyActiveUsersResponse,
  MetricGetPrMetricsParams,
  MetricGetSearchMetricsParams,
  MetricGetSessionMetricsParams,
  MetricGetUsageMetricsParams,
  MetricGetWeeklyActiveUsersParams,
  MetricGetWeeklyActiveUsersResponse,
  Metrics,
} from './metrics';
import * as PlaybooksAPI from './playbooks';
import {
  PlaybookCreateParams,
  PlaybookDeleteParams,
  PlaybookListParams,
  PlaybookRetrieveParams,
  PlaybookUpdateParams,
  Playbooks,
} from './playbooks';
import * as SchedulesAPI from './schedules';
import {
  Schedule,
  ScheduleCreateParams,
  ScheduleDeleteParams,
  ScheduleListParams,
  ScheduleListResponse,
  ScheduleRetrieveParams,
  ScheduleUpdateParams,
  Schedules,
} from './schedules';
import * as SecretsAPI from './secrets';
import {
  Secret,
  SecretCreateParams,
  SecretDeleteParams,
  SecretListParams,
  SecretListResponse,
  Secrets,
} from './secrets';
import * as ConsumptionAPI from './consumption/consumption';
import { Consumption } from './consumption/consumption';
import * as KnowledgeAPI from './knowledge/knowledge';
import { Knowledge } from './knowledge/knowledge';
import * as SessionsAPI from './sessions/sessions';
import {
  SessionArchiveParams,
  SessionCreateParams,
  SessionListAttachmentsParams,
  SessionListAttachmentsResponse,
  SessionListParams,
  SessionRetrieveParams,
  SessionTerminateParams,
  Sessions,
} from './sessions/sessions';

export class Organizations extends APIResource {
  attachments: AttachmentsAPI.Attachments = new AttachmentsAPI.Attachments(this._client);
  consumption: ConsumptionAPI.Consumption = new ConsumptionAPI.Consumption(this._client);
  knowledge: KnowledgeAPI.Knowledge = new KnowledgeAPI.Knowledge(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  playbooks: PlaybooksAPI.Playbooks = new PlaybooksAPI.Playbooks(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
}

Organizations.Attachments = Attachments;
Organizations.Consumption = Consumption;
Organizations.Knowledge = Knowledge;
Organizations.Metrics = Metrics;
Organizations.Playbooks = Playbooks;
Organizations.Schedules = Schedules;
Organizations.Secrets = Secrets;
Organizations.Sessions = Sessions;

export declare namespace Organizations {
  export {
    Attachments as Attachments,
    type AttachmentDownloadResponse as AttachmentDownloadResponse,
    type AttachmentUploadResponse as AttachmentUploadResponse,
    type AttachmentDownloadParams as AttachmentDownloadParams,
    type AttachmentUploadParams as AttachmentUploadParams,
  };

  export { Consumption as Consumption };

  export { Knowledge as Knowledge };

  export {
    Metrics as Metrics,
    type MetricGetDailyActiveUsersResponse as MetricGetDailyActiveUsersResponse,
    type MetricGetMonthlyActiveUsersResponse as MetricGetMonthlyActiveUsersResponse,
    type MetricGetWeeklyActiveUsersResponse as MetricGetWeeklyActiveUsersResponse,
    type MetricGetActiveUsersParams as MetricGetActiveUsersParams,
    type MetricGetDailyActiveUsersParams as MetricGetDailyActiveUsersParams,
    type MetricGetMonthlyActiveUsersParams as MetricGetMonthlyActiveUsersParams,
    type MetricGetPrMetricsParams as MetricGetPrMetricsParams,
    type MetricGetSearchMetricsParams as MetricGetSearchMetricsParams,
    type MetricGetSessionMetricsParams as MetricGetSessionMetricsParams,
    type MetricGetUsageMetricsParams as MetricGetUsageMetricsParams,
    type MetricGetWeeklyActiveUsersParams as MetricGetWeeklyActiveUsersParams,
  };

  export {
    Playbooks as Playbooks,
    type PlaybookCreateParams as PlaybookCreateParams,
    type PlaybookRetrieveParams as PlaybookRetrieveParams,
    type PlaybookUpdateParams as PlaybookUpdateParams,
    type PlaybookListParams as PlaybookListParams,
    type PlaybookDeleteParams as PlaybookDeleteParams,
  };

  export {
    Schedules as Schedules,
    type Schedule as Schedule,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleRetrieveParams as ScheduleRetrieveParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };

  export {
    Secrets as Secrets,
    type Secret as Secret,
    type SecretListResponse as SecretListResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
  };

  export {
    Sessions as Sessions,
    type SessionListAttachmentsResponse as SessionListAttachmentsResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionListParams as SessionListParams,
    type SessionArchiveParams as SessionArchiveParams,
    type SessionListAttachmentsParams as SessionListAttachmentsParams,
    type SessionTerminateParams as SessionTerminateParams,
  };
}
