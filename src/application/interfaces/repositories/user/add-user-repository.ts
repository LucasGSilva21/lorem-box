import { User } from '../../../../domain/models/user';
import { CreateUserDTO } from '../../../../domain/dto/user';

export interface AddUserRepository {
  add(data: CreateUserDTO): Promise<User>;
}
