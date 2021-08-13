import {UserModel} from './user.model';

export class UserSessionModel   {
  accessToken: string;
  user?: UserModel;
}
