import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PoService } from "./po.service";
import { PoControllerBase } from "./base/po.controller.base";

@swagger.ApiTags("pos")
@common.Controller("pos")
export class PoController extends PoControllerBase {
  constructor(
    protected readonly service: PoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
