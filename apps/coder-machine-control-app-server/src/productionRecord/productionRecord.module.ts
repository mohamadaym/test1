import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductionRecordModuleBase } from "./base/productionRecord.module.base";
import { ProductionRecordService } from "./productionRecord.service";
import { ProductionRecordController } from "./productionRecord.controller";
import { ProductionRecordResolver } from "./productionRecord.resolver";

@Module({
  imports: [ProductionRecordModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductionRecordController],
  providers: [ProductionRecordService, ProductionRecordResolver],
  exports: [ProductionRecordService],
})
export class ProductionRecordModule {}
