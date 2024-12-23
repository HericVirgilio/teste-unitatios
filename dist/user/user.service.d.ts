import { CreateUserDto } from "src/dto/CreateUserDto";
import { UserEntity } from "../entity/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private readonly userRepository;
    findUserById(id: number): void;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
}
