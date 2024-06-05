import { createAction, props } from '@ngrx/store';
import { GetMyIpByTypeModel } from 'src/app/dependencies/models/api-my-ip-get-ip-by-type-model';
import { GetMyIpInformationByTypeRequestTemplate } from 'src/app/dependencies/templates/api-my-ip-templates';
import { ErrorGenericAction } from 'src/app/dependencies/templates/get-pokemon-list-template';

// Se crean las acciones que se van a llevar a cabo para actualizar la información en el store
// Cada acción lleva:
// - Un texto que identifica la acción que se va a realizar
// - unas props que son los datos que requerirá tener la acción para poder ejecutarse

// Para este caso se van a tener 3 acciones distintas:

// fetchGetIpByTypeAPI: Corresponde a la acción de llamado al servicio
// getIpByTypeRq: Corresponde a la información del RQ que va a ser enviado
// GetMyIpInformationByTypeRequestTemplate: Corresponde a la estructura que tiene el RQ
export const fetchGetIpByTypeAPI = createAction(
  'GET_IP_BY_TYPE_FETCH',
  props<{ getIpByTypeRq: GetMyIpInformationByTypeRequestTemplate }>()
);

// fetchGetIpByTypeAPISuccess: Corresponde a la acción que ejecutará si el servicio responde correctamente
// data: Corresponde a la información que va a actualizar el store proveniente de la respuesta del servicio
// GetMyIpByTypeModel: Corresponde a la estructura que tiene el Response
export const fetchGetIpByTypeAPISuccess = createAction(
  'GET_IP_BY_TYPE_SUCCESS',
  props<{ data: GetMyIpByTypeModel }>()
);

// fetchGetIpByTypeAPIError: Corresponde a la acción que ejecutará si el servicio responde con error
// error: Corresponde al error obtenido en el llamado a la acción
// ErrorGenericAction: Corresponde a la estructura del error.
export const fetchGetIpByTypeAPIError = createAction(
  'GET_IP_BY_TYPE_ERROR',
  props<{ error: ErrorGenericAction }>()
);
