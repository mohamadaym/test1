import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoServiceBase } from "./base/po.service.base";

@Injectable()
export class PoService extends PoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
