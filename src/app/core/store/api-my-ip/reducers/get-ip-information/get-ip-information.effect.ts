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
export class GetIpInformationEffects {
  errorTemplate = {
    status: 'Error',
    message: 'There was an error',
  };
  constructor(
    private actions$: Actions,
    private apiMyIpService: ApiMyIpService
  ) {}

  pokemonList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchGetIpByTypeAPI),
      switchMap((action) =>
        this.apiMyIpService.getMyIpInfoByType(action.getIpByTypeRq.format).pipe(
          map((ipInformationResponse) =>
            fetchGetIpByTypeAPISuccess({
              data: new GetMyIpByTypeModel({
                data: ipInformationResponse,
                status: { message: '', status: 'Ok' },
              }),
            })
          ),
          catchError((err) =>
            of(fetchGetIpByTypeAPIError({ error: this.errorTemplate }))
          )
        )
      )
    )
  );
}
