import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductionRecordResolverBase } from "./base/productionRecord.resolver.base";
import { ProductionRecord } from "./base/ProductionRecord";
import { ProductionRecordService } from "./productionRecord.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductionRecord)
export class ProductionRecordResolver extends ProductionRecordResolverBase {
  constructor(
    protected readonly service: ProductionRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
