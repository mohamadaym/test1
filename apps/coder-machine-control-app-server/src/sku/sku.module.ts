import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SkuModuleBase } from "./base/sku.module.base";
import { SkuService } from "./sku.service";
import { SkuController } from "./sku.controller";
import { SkuResolver } from "./sku.resolver";

@Module({
  imports: [SkuModuleBase, forwardRef(() => AuthModule)],
  controllers: [SkuController],
  providers: [SkuService, SkuResolver],
  exports: [SkuService],
})
export class SkuModule {}
