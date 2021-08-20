import {UserModel} from './user.model';

export class SessionModel   {
  accessToken: string;
  user?: UserModel;
}
