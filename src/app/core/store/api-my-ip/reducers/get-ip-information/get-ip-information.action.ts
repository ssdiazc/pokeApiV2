import { createAction, props } from '@ngrx/store';
import { GetMyIpByTypeModel } from 'src/app/dependencies/models/api-my-ip-get-ip-by-type-model';
import { GetMyIpInformationByTypeRequestTemplate } from 'src/app/dependencies/templates/api-my-ip-templates';
import { ErrorGenericAction } from 'src/app/dependencies/templates/get-pokemon-list-template';

export const fetchGetIpByTypeAPI = createAction(
  'GET_IP_BY_TYPE_FETCH',
  props<{ getIpByTypeRq: GetMyIpInformationByTypeRequestTemplate }>()
);

export const fetchGetIpByTypeAPISuccess = createAction(
  'GET_IP_BY_TYPE_SUCCESS',
  props<{ data: GetMyIpByTypeModel }>()
);

export const fetchGetIpByTypeAPIError = createAction(
  'GET_IP_BY_TYPE_ERROR',
  props<{ error: ErrorGenericAction }>()
);
