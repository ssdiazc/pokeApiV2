import { ErrorGenericAction } from './get-pokemon-list-template';

export interface GetMyIpInformationByTypeRequestTemplate {
  format: string;
}

export interface GetMyIpInformationByTypeResponseTemplate {
  data?: GetMyIpInformationByTypeResponseData;
  status?: ErrorGenericAction;
}

export interface GetMyIpInformationByTypeResponseData {
  success: boolean;
  ip: string;
  type: string;
  country: Country;
  region: string;
  city: string;
  location: Location;
  timeZone: string;
  asn: Asn;
}

export interface Country {
  code: string;
  name: string;
}

export interface Location {
  lat: number;
  lon: number;
}

export interface Asn {
  number: number;
  name: string;
  network: string;
}
