import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionRecordServiceBase } from "./base/productionRecord.service.base";

@Injectable()
export class ProductionRecordService extends ProductionRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
