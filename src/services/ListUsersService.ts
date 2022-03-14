import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { instanceToPlain } from "class-transformer";

class ListUsersService {
  async execute() {
    const userRepositories = getCustomRepository(UsersRepositories);

    const users = await userRepositories.find();

    return instanceToPlain(users);
  }

}

export { ListUsersService };