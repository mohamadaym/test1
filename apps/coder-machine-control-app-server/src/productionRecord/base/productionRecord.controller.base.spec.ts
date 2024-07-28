import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ProductionRecordController } from "../productionRecord.controller";
import { ProductionRecordService } from "../productionRecord.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  productionDateTime: new Date(),
  expiryDate: new Date(),
  batchNumber: "exampleBatchNumber",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  productionDateTime: new Date(),
  expiryDate: new Date(),
  batchNumber: "exampleBatchNumber",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    productionDateTime: new Date(),
    expiryDate: new Date(),
    batchNumber: "exampleBatchNumber",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  productionDateTime: new Date(),
  expiryDate: new Date(),
  batchNumber: "exampleBatchNumber",
};

const service = {
  createProductionRecord() {
    return CREATE_RESULT;
  },
  productionRecords: () => FIND_MANY_RESULT,
  productionRecord: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ProductionRecord", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductionRecordService,
          useValue: service,
        },
      ],
      controllers: [ProductionRecordController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /productionRecords", async () => {
    await request(app.getHttpServer())
      .post("/productionRecords")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        productionDateTime: CREATE_RESULT.productionDateTime.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
      });
  });

  test("GET /productionRecords", async () => {
    await request(app.getHttpServer())
      .get("/productionRecords")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          productionDateTime:
            FIND_MANY_RESULT[0].productionDateTime.toISOString(),
          expiryDate: FIND_MANY_RESULT[0].expiryDate.toISOString(),
        },
      ]);
  });

  test("GET /productionRecords/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productionRecords"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /productionRecords/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productionRecords"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        productionDateTime: FIND_ONE_RESULT.productionDateTime.toISOString(),
        expiryDate: FIND_ONE_RESULT.expiryDate.toISOString(),
      });
  });

  test("POST /productionRecords existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/productionRecords")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        productionDateTime: CREATE_RESULT.productionDateTime.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/productionRecords")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
