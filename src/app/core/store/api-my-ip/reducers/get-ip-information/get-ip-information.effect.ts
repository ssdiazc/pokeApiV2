import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetMyIpByTypeModel } from 'src/app/dependencies/models/api-my-ip-get-ip-by-type-model';
import { ApiMyIpService } from 'src/app/dependencies/services/api-my-ip/api-my-ip.service';
import {
  fetchGetIpByTypeAPI,
  fetchGetIpByTypeAPIError,
  fetchGetIpByTypeAPISuccess,
} from './get-ip-information.action';

@Injectable()
// Se genera una interfaz con los datos del error en caso de que sea necesario despachar dicha acción
export class GetIpInformationEffects {
  errorTemplate = {
    status: 'Error',
    message: 'There was an error',
  };
  // Se inyectan las acciones propias de la libreria ngrx para poder hacer uso de ellas
  // Se inyecta la clase service que va a hacer el llamado a nuestro servicio
  constructor(
    private actions$: Actions,
    private apiMyIpService: ApiMyIpService
  ) {}

  // Se instancia el effect, que nos va a ayudar a llamar el servicio y a actualizar el store, dependiendo de lo que ocurra
  getIpByType$ = createEffect(() =>
    this.actions$.pipe(
      // Si la acción es de tipo fetchGetIpByTypeAPI (Llamado del servicio)
      ofType(fetchGetIpByTypeAPI),
      switchMap((action) =>
        // Se llama al servicio con los parámetros de entrada del RQ
        this.apiMyIpService.getMyIpInfoByType(action.getIpByTypeRq.format).pipe(
          map((ipInformationResponse) =>
            // Si se obtiene respuesta, se llama a la acción correspondiente
            // Se actualiza la data con una instacia del modelo de la respuesta
            // Junto al correspondiente status
            fetchGetIpByTypeAPISuccess({
              data: new GetMyIpByTypeModel({
                data: ipInformationResponse,
                status: { message: '', status: 'Ok' },
              }),
            })
          ),
          catchError((err) =>
            // En caso de error se actualiza el store con el error
            of(fetchGetIpByTypeAPIError({ error: this.errorTemplate }))
          )
        )
      )
    )
  );
}
