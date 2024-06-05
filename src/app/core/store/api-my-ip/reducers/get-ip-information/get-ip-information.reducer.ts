import { createReducer, on } from '@ngrx/store';
import { GetMyIpInformationByTypeResponseTemplate } from 'src/app/dependencies/templates/api-my-ip-templates';
import {
  fetchGetIpByTypeAPIError,
  fetchGetIpByTypeAPISuccess,
} from './get-ip-information.action';

// Se instancia un estado inicial del store
// En este caso es un objeto vacío de tipo GetMyIpInformationByTypeResponseTemplate
export const initialState: Readonly<GetMyIpInformationByTypeResponseTemplate> =
  {};

// Se inicializa el reducer par almacenar la información
// un reducer debe tener un estado inicial, y un on por cada acción que vamos a realizar sobre el store
export const getIpInformationReducer = createReducer(
  initialState,
  // En este caso cuando se detecte la acción en la que el servicio contestó correctamente, el store
  // va a ser actualizado con la data que venga en esa acción
  // Nota: Tener en cuenta que los tipos de datos deben ser compatibles
  on(fetchGetIpByTypeAPISuccess, (state, { data }) => {
    return data;
  }),
  // En este caso cuando se detecte la acción en la que se generó un error en la respuesta del servicio,
  // el store va a ser actualizado con la data del correspondiente error
  on(fetchGetIpByTypeAPIError, (state, { error }) => {
    return { status: error };
  })
);
