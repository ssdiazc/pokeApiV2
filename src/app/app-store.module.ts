import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GetMyIpByTypeModel } from 'src/app/dependencies/models/api-my-ip-get-ip-by-type-model';
import { getIpInformationReducer } from './core/store/api-my-ip/reducers/get-ip-information/get-ip-information.reducer';

export interface ApiMyIpReducerTemplate {
  getIpInformationByTypeData?: GetMyIpByTypeModel;
}

export const selecApp =
  createFeatureSelector<ApiMyIpReducerTemplate>('appmodule');

export const selectGetIpByType = createSelector(
  selecApp,
  (state: ApiMyIpReducerTemplate) => state.getIpInformationByTypeData
);
export const reducers = {
  getIpInformationByTypeData: getIpInformationReducer,
};
