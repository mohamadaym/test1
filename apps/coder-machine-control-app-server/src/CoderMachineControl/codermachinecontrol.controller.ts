import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CoderMachineControlService } from "./codermachinecontrol.service";

@swagger.ApiTags("coderMachineControls")
@common.Controller("coderMachineControls")
export class CoderMachineControlController {
  constructor(protected readonly service: CoderMachineControlService) {}

  @common.Get("/checkDatabase/:sku")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckDatabase(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CheckDatabase(body);
      }

  @common.Post("/formulateMessage")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FormulateMessage(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FormulateMessage(body);
      }

  @common.Post("/processUserInput")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessUserInput(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProcessUserInput(body);
      }

  @common.Post("/sendToPrinter")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendToPrinter(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SendToPrinter(body);
      }
}
