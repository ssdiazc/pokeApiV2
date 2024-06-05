import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetMyIpInformationByTypeResponseData } from '../../templates/api-my-ip-templates';
import { GetEnvConfigService } from '../get-env-config/get-env-config.service';

@Injectable({
  providedIn: 'root',
})
export class ApiMyIpService {
  constructor(
    private httpRequest: HttpClient,
    private envConfigs: GetEnvConfigService
  ) {}

  host = this.envConfigs.getConfiguration('HOST_API_MY_IP');
  contextPath = this.envConfigs.getConfiguration('OP_GET_IP_API_MY_IP');

  getMyIpInfoByType(
    format?: string
  ): Observable<GetMyIpInformationByTypeResponseData> {
    return this.httpRequest.get<GetMyIpInformationByTypeResponseData>(
      'https://demo9379358.mockable.io/ip-mock'
      // `${this.host}${this.contextPath}.${format || 'json'}`
    );
  }
}
