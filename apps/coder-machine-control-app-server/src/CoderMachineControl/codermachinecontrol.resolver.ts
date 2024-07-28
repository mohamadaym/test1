import * as graphql from "@nestjs/graphql";
import { FormulateMessageDto } from "../coderMachineControl/FormulateMessageDto";
import { ProcessUserInputDto } from "../coderMachineControl/ProcessUserInputDto";
import { CoderMachineControlService } from "./codermachinecontrol.service";

export class CoderMachineControlResolver {
  constructor(protected readonly service: CoderMachineControlService) {}

  @graphql.Query(() => String)
  async CheckDatabase(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CheckDatabase(args);
  }

  @graphql.Mutation(() => String)
  async FormulateMessage(
    @graphql.Args()
    args: FormulateMessageDto
  ): Promise<string> {
    return this.service.FormulateMessage(args);
  }

  @graphql.Mutation(() => String)
  async ProcessUserInput(
    @graphql.Args()
    args: ProcessUserInputDto
  ): Promise<string> {
    return this.service.ProcessUserInput(args);
  }

  @graphql.Mutation(() => String)
  async SendToPrinter(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendToPrinter(args);
  }
}
