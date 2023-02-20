"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
const exception_filter_1 = require("./exceptions/exception.filter");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("./validation/pipe/validation.pipe");
const prisma_client_exception_filter_1 = require("./exceptions/prisma-client-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new exception_filter_1.HttpExceptionFilter());
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new prisma_client_exception_filter_1.PrismaClientExceptionFilter(httpAdapter));
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Beyik yol super admin')
        .setDescription('Beyik yol super admin')
        .setVersion('0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(5501);
}
bootstrap();
//# sourceMappingURL=main.js.map