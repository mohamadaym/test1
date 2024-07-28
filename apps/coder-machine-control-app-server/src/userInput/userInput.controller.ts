import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserInputService } from "./userInput.service";
import { UserInputControllerBase } from "./base/userInput.controller.base";

@swagger.ApiTags("userInputs")
@common.Controller("userInputs")
export class UserInputController extends UserInputControllerBase {
  constructor(
    protected readonly service: UserInputService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
