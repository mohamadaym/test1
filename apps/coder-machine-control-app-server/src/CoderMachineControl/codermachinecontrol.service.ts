import { Injectable } from "@nestjs/common";
import { FormulateMessageDto } from "../coderMachineControl/FormulateMessageDto";
import { ProcessUserInputDto } from "../coderMachineControl/ProcessUserInputDto";

@Injectable()
export class CoderMachineControlService {
  constructor() {}
  async CheckDatabase(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FormulateMessage(args: FormulateMessageDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProcessUserInput(args: ProcessUserInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async SendToPrinter(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
