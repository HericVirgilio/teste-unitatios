import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/dto/CreateUserDto";
import { UserEntity } from "../entity/user.entity";
import { Repository } from "typeorm";
import { hash } from "bcrypt"; 

@Injectable()
export class UserService{
    findUserById(id: number) {
      throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity>{

        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.senha, saltOrRounds);

        const newUser = await this.userRepository.save({
            ...createUserDto,
            senha: passwordHashed
        })

        return newUser
    }

    async getAllUsers(): Promise <UserEntity[]>{
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<UserEntity>{
        return await this.userRepository.findOne({ where: { id }})
    }
}