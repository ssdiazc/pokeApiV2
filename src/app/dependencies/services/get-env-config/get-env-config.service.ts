import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetEnvConfigService {
  constructor() {}

  getConfiguration(configurationName: string) {
    return environment[configurationName] || '';
  }
}
