import { User } from '../../../domain/models/user';
import { CreateUserDTO } from '../../../domain/dto/user';
import { AddUserUseCases } from '../../../domain/usecases/user';
import { AddUserRepository } from '../../interfaces/repositories/user';
import { Hasher } from '../../interfaces/criptography';

export class AddUserService implements AddUserUseCases {
  private readonly addUserRepository: AddUserRepository;

  private readonly hasher: Hasher;

  constructor(addUserRepository: AddUserRepository, hasher: Hasher) {
    this.addUserRepository = addUserRepository;
    this.hasher = hasher;
  }

  async add(userData: CreateUserDTO): Promise<User> {
    const hashedPassword = await this.hasher.hash(userData.password);

    return this.addUserRepository.add({
      ...userData,
      password: hashedPassword,
    });
  }
}
