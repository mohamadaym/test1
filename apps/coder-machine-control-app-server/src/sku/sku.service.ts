import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkuServiceBase } from "./base/sku.service.base";

@Injectable()
export class SkuService extends SkuServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
