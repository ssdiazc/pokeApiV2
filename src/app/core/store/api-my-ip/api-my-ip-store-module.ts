import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GetMyIpByTypeModel } from 'src/app/dependencies/models/api-my-ip-get-ip-by-type-model';
import { getIpInformationReducer } from './reducers/get-ip-information/get-ip-information.reducer';

export interface ApiMyIpReducerTemplate {
  getIpInformationByTypeData?: GetMyIpByTypeModel;
}

export const selecApiMyIp =
  createFeatureSelector<ApiMyIpReducerTemplate>('apimyipmodule');

export const selectGetIpByType = createSelector(
  selecApiMyIp,
  (state: ApiMyIpReducerTemplate) => state.getIpInformationByTypeData
);
export const reducers = {
  getIpInformationByTypeData: getIpInformationReducer,
};
