import { User } from '../../models/user';
import { CreateUserDTO } from '../../dto/user';

export interface AddUserUseCases {
  add(userData: CreateUserDTO): Promise<User>;
}
