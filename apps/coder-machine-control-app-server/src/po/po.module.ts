import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PoModuleBase } from "./base/po.module.base";
import { PoService } from "./po.service";
import { PoController } from "./po.controller";
import { PoResolver } from "./po.resolver";

@Module({
  imports: [PoModuleBase, forwardRef(() => AuthModule)],
  controllers: [PoController],
  providers: [PoService, PoResolver],
  exports: [PoService],
})
export class PoModule {}
