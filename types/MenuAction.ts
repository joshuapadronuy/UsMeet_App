import { IMenu } from "./Menu";

export interface IMenuPayload {
  menu?: IMenu[];
  mainMenuSelected?: string;
  subMenuSelected?: string;
}

export interface IMenuAction {
  payload: IMenuPayload;
  type: string;
}
