import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserInputModuleBase } from "./base/userInput.module.base";
import { UserInputService } from "./userInput.service";
import { UserInputController } from "./userInput.controller";
import { UserInputResolver } from "./userInput.resolver";

@Module({
  imports: [UserInputModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserInputController],
  providers: [UserInputService, UserInputResolver],
  exports: [UserInputService],
})
export class UserInputModule {}
