import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GetMyIpByTypeModel } from 'src/app/dependencies/models/api-my-ip-get-ip-by-type-model';
import { getIpInformationReducer } from './core/store/api-my-ip/reducers/get-ip-information/get-ip-information.reducer';

// Se instancia template con estructura en la que va a almacenarse el store del módulo
export interface ApiMyIpReducerTemplate {
  getIpInformationByTypeData?: GetMyIpByTypeModel;
}

// Se crea el selector y se le da un nombre al store
export const selectApp =
  createFeatureSelector<ApiMyIpReducerTemplate>('appmodule');

// Se crea el customSelector para actualizar en este caso el store de la información de la ip
// el custom selector debe tener:
// -  El selector padre, en el cual se va a almacenar la info
// -  la directriz de lo que se debe actualizar según el estado que llegue
export const selectGetIpByType = createSelector(
  selectApp,
  (state: ApiMyIpReducerTemplate) => state.getIpInformationByTypeData
);
// Se exportan los reducers creados, para poderlos importar como dependencias en el modulo asociado
export const reducers = {
  getIpInformationByTypeData: getIpInformationReducer,
};
