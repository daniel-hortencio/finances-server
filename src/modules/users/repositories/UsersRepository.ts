import { prismaClient } from "../../../prisma";
import { User } from "../entities/User";
import { IUsersRepository } from "./implementations/IUsersRepository";
import {
  ICreateUserDTO,
  IUpdateUserDTO
} from '../dtos'

class UsersRepository implements IUsersRepository {
  private allUsers: User[];
  private static INSTANCE: UsersRepository;

  constructor() {
    this.allUsers = []
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository()
    }

    return UsersRepository.INSTANCE
  }

  async list() {
    this.allUsers = await prismaClient.users.findMany()

    return this.allUsers
  }

  async findByEmail(email: string) {
    const user = await prismaClient.users.findFirst({
      where: {
        email
      }
    })

    return user
  }

  async findById(id_user: string) {
    const user = await prismaClient.users.findFirst({
      where: {
        id_user
      }
    })

    return user
  }

  async create({
    email,
    name,
    password,
    language,
    preferred_currency
  }: ICreateUserDTO) {
    const newUser = new User({
      email,
      name,
      password,
      language,
      preferred_currency
    })

    await prismaClient.users.create({
      data: newUser
    })
  }

  async update(
    id_user: string,
    {
      name,
      password,
      language,
      preferred_currency
    }: IUpdateUserDTO) {

    await prismaClient.users.update({
      where: {
        id_user
      },
      data: {
        name,
        password,
        language,
        preferred_currency
      }
    })
  }

  async delete(id_user: string) {
    await prismaClient.users.delete({
      where: {
        id_user
      }
    })
  }
}

export { UsersRepository }