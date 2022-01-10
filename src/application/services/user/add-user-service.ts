import { User } from '../../../domain/models/user';
import { CreateUserDTO } from '../../../domain/dto/user';
import { AddUserUseCases } from '../../../domain/usecases/user';
import { AddUserRepository } from '../../interfaces/repositories/user';

export class AddUserService implements AddUserUseCases {
  private addUserRepository: AddUserRepository;

  constructor(addUserRepository: AddUserRepository) {
    this.addUserRepository = addUserRepository;
  }

  async add(userData: CreateUserDTO): Promise<User> {
    return this.addUserRepository.add(userData);
  }
}
