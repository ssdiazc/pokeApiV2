import {
  GetMyIpInformationByTypeResponseData,
  GetMyIpInformationByTypeResponseTemplate,
} from '../templates/api-my-ip-templates';
import { ErrorGenericAction } from '../templates/get-pokemon-list-template';

export class GetMyIpByTypeModel {
  private _data?: GetMyIpInformationByTypeResponseData;
  private _status?: ErrorGenericAction;

  constructor(inputData: GetMyIpInformationByTypeResponseTemplate) {
    this._data = inputData?.data;
    this._status = inputData?.status;
  }

  get data() {
    return this._data;
  }
}
