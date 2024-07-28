import { Module } from "@nestjs/common";
import { CoderMachineControlService } from "./codermachinecontrol.service";
import { CoderMachineControlController } from "./codermachinecontrol.controller";
import { CoderMachineControlResolver } from "./codermachinecontrol.resolver";

@Module({
  controllers: [CoderMachineControlController],
  providers: [CoderMachineControlService, CoderMachineControlResolver],
  exports: [CoderMachineControlService],
})
export class CoderMachineControlModule {}
