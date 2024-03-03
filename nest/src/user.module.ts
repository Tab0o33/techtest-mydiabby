import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserServiceKey } from "./application/ports/user.port";
import { GetFullNamesOfAllUsers } from "./application/use-cases/getFullNameOfAllUsers";
import { UserController } from "./controllers/user.controller";
import { UserAdapter } from "./repositories/adapters/user.adapter";
import { UserSchema } from "./repositories/schemas/user.schema";
import { AddUserUseCase } from "./application/use-cases/addUser.usercase";
import { GetAllUsersUseCase } from "./application/use-cases/getAllUsers.usercase";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserSchema]),
    ],
    controllers: [
        UserController,
    ],
    providers: [
        {
            provide: UserServiceKey,
            useClass: UserAdapter,
        },
        GetFullNamesOfAllUsers,
        AddUserUseCase,
        GetAllUsersUseCase
    ],
})
export class UserModule { }
