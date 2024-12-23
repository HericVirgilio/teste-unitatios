import { Controller, Body, Post, Get, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "src/entity/user.entity";
import { CreateUserDto } from "src/dto/CreateUserDto";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    async CreateUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createUser)
    }

    @Get('all')
    async GetALLUsers(): Promise<UserEntity[]> {
        return this.userService.getAllUsers()
    }

    @Get('find')
    async GetFindOne(@Body('id') id: number): Promise<UserEntity> {
        const userId = Number(id)
        return this.userService.findOne(userId)
    }

    
}