import { IMenu } from "./Menu";

export interface IMenuPayload {
  menu?: IMenu[];
  menuSelected?: string;
}

export interface IMenuAction {
  payload: IMenuPayload;
  type: string;
}
