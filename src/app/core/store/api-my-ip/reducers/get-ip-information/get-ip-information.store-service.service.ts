import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetMyIpByTypeModel } from 'src/app/dependencies/models/api-my-ip-get-ip-by-type-model';
import { selectGetIpByType } from '../../../../../app-store.module';
import { fetchGetIpByTypeAPI } from './get-ip-information.action';

@Injectable({
  providedIn: 'root',
})
export class GetIpInformatioStoreServiceService {
  constructor(private storeService: Store) {}

  fetchGetIpInformationByType(format: string) {
    this.storeService.dispatch(
      fetchGetIpByTypeAPI({ getIpByTypeRq: { format } })
    );
  }

  getPokemonList(): Observable<GetMyIpByTypeModel | undefined> {
    return this.storeService.pipe(select(selectGetIpByType));
  }
}
