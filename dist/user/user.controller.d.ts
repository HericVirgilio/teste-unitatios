import { UserService } from "./user.service";
import { UserEntity } from "src/entity/user.entity";
import { CreateUserDto } from "src/dto/CreateUserDto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    CreateUser(createUser: CreateUserDto): Promise<UserEntity>;
    GetALLUsers(): Promise<UserEntity[]>;
    GetFindOne(id: number): Promise<UserEntity>;
}
