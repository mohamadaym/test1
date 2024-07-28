import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductionRecordService } from "./productionRecord.service";
import { ProductionRecordControllerBase } from "./base/productionRecord.controller.base";

@swagger.ApiTags("productionRecords")
@common.Controller("productionRecords")
export class ProductionRecordController extends ProductionRecordControllerBase {
  constructor(
    protected readonly service: ProductionRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
