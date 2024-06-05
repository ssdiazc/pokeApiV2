import { createReducer, on } from '@ngrx/store';
import { GetMyIpInformationByTypeResponseTemplate } from 'src/app/dependencies/templates/api-my-ip-templates';
import {
  fetchGetIpByTypeAPIError,
  fetchGetIpByTypeAPISuccess,
} from './get-ip-information.action';

export const initialState: Readonly<GetMyIpInformationByTypeResponseTemplate> =
  {};

export const getIpInformationReducer = createReducer(
  initialState,
  on(fetchGetIpByTypeAPISuccess, (state, { data }) => {
    return data;
  }),
  on(fetchGetIpByTypeAPIError, (state, { error }) => {
    return { status: error };
  })
);
