import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetMyIpByTypeModel } from 'src/app/dependencies/models/api-my-ip-get-ip-by-type-model';
import { selectGetIpByType } from '../../../../../app-store.module';
import { fetchGetIpByTypeAPI } from './get-ip-information.action';

// Se crea un storeService con el fin de centralizar en una clase el llamado a la acción que hace el fetch
// y para poderse subscribir al store para recibir notificación cada vez que la información sea actualizada

// El decorador @Injectable es propio de angular y permite que la información contenida en esta clase pueda
// ser inyectada en cualquier componente que se requiera

// la propiedad providedIn, permite indicar desde qué módulo se está importando el servicio, en este caso
// es root porque se está haciendo referencia al módulo general appModule
@Injectable({
  providedIn: 'root',
})
export class GetIpInformatioStoreServiceService {
  // Se importa el servicio Store, bajo el nombre local storeService, para poder hacer uso de los métodos
  constructor(private storeService: Store) {}

  // fetchGetIpInformationByType: es el método que despacha la acción de consulta al servicio
  // lleva un parámetro de entrada format de tipo string
  fetchGetIpInformationByType(format: string) {
    // Se llama al método dispatch del servicio Store, al cual se le indica la acción a despachar y las props
    this.storeService.dispatch(
      fetchGetIpByTypeAPI({ getIpByTypeRq: { format } })
    );
  }

  // getPokemonList: es el método que permite llamar la información almacenada en el store
  // En este caso observamos varias cosas:
  // -  Observable: Nos indica que esta información puede cambiar, y nos permite colocar un subscribe (listening)
  // -  Observable<>: El <> Nos indica el tipo de dato que esta esperando recibir en cada actualización
  // -  GetMyIpByTypeModel | undefined: Indica que la información que puede llegar es tipada o sin tipo,
  //    esto porque puede pasar que el estado inicial del store no lleve el mismo tipo de la respuesta del servicio
  getPokemonList(): Observable<GetMyIpByTypeModel | undefined> {
    // se hace el select al store generado
    // se utiliza pipe, por buena práctica, el pipe permite transforamr data, o concatenar multiples funciones en una
    return this.storeService.pipe(select(selectGetIpByType));
  }
}
