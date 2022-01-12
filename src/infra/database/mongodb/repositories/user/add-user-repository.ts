import { AddUserRepository } from '../../../../../application/interfaces/repositories/user';
import { CreateUserDTO } from '../../../../../domain/dto/user';
import { User } from '../../../../../domain/models/user';
import { UserModel } from '../../schemas';

export class AddUserMongoRepository implements AddUserRepository {
  async add(data: CreateUserDTO): Promise<User> {
    return UserModel.create(data);
  }
}
