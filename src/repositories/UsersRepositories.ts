import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";


@EntityRepository(User)
class UsersRepositories extends Repository<User> {
  static findOne(arg0: { email: string; }) {
    throw new Error("Method not implemented.");
  }
}

export { UsersRepositories };
