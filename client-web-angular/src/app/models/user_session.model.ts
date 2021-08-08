import {UserModel} from './user.model';

export interface UserSessionModel   {
  accessToken: string,
  user: UserModel
}
