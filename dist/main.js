"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
const exception_filter_1 = require("./exceptions/exception.filter");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("./validation/pipe/validation.pipe");
const prisma_client_exception_filter_1 = require("./exceptions/prisma-client-exception.filter");
const admin = require("firebase-admin");
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
    const serviceAccount = JSON.parse(`{
  "type": "service_account",
  "project_id": "beyik-yol-2",
  "private_key_id": "88ba86d706e63bd7191c950ecac5ae23d61f18b4",
  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDavCVz4vP9doN3\\ndZ72RrR3kOLi2Hshn6h/ctSegXKom/G/s6m7pJBSbeex97iblHF3glN6STGqx6KI\\noa89I4ZMajisqxlcFEJuznezVTD3Cb8QLAw2Cw2ELDUPnqrww2YgXpUvgy4hwqKZ\\ni0/HDxXuyuvrtBvfcmh53CUV/d72ZXhmKSu+bCH6oUU6WqiaaKZ4JZ8Xx8vg5f5G\\nFYhm7koWlxh0VdUUnneaMWPTVHmg44d2ESCsHv3c8No/m/ZP5Fe4SZFDOLxBccte\\ngRKqVqNaN8HfgTcTPB33m7LXeMgJzUC7RuMS31XK7K9k1CVsfsY385fMKn9zVLsk\\nbvYRu22BAgMBAAECggEABDT/MWnpkHPxlmAcRRdaDDysqHlKcPydpInkXgIWXvjU\\n3v+JIbNKFVPI04r0sYVa41YN3fm/a034qdEWSkI/KIQYf/WwgK1hE7mD4t6eGPpG\\ngvyd5YIz6dlh0eGW3xebBL9c9jN7NSoFr5dW2vjGzrd3byqhKJyONt3Nls0xtyJ2\\nYU55ihnOotJo05WZb6l9SFJGRpBPaurdWfsEihHVXaSPGGE5mq3C3KdeD1o20Vmf\\nPdxLEXgBlQt3okp2DPvoI7X/UBIakGxLGRMmeqR91UzsDXm5NkN6pGfrn6oZKGAO\\n80UCEM/y2PB3MczWmoD8UKMbNestWvAGrrTa2ShLUwKBgQD0h2S8P2Es7rJ8V7fq\\nVYkAUMPZTxaRDCSGUj+gPNbA2+HdjR+qxD5Wv8Np0vYq1O3cKgahs5q9YrOZRM+e\\ngiDhZvj5012wiK+D/t7/8bNuNweX0HU8RLJcyvOEVG6dQSbsTmyP+jwoc0Y9fCDt\\noWJUZP0jvpApX48q4djTSC+ohwKBgQDk/vy5TjrW3GZGgAxzEjd/mrpNR8/MmzkJ\\nTDVBaA+65ACHlWa1P/PE+HDgxexWZlLE4/K/ml4PUYJE/TdN3QETfQ3E0Iubz7zK\\nf13slOYhyMJr+8xfi0Zys7OmhfCDCJSYMSbSrP6jdtzy0dhnWXY/vIlsOpxpwQj3\\nYnbzKMSjtwKBgHaf7BWKpai3j2zU3QrYPeMiSzBztp3dBycGZYllmkTrJpJlMPSV\\nySwqUTFYP0WeEFobJSZyy+GOLVRwVkwuEqdmXehMSoomdQcSsLn3VjVkitFyNj1r\\nkh+D8UjD8Plmruw6S145Zc+1xGB1hD/jZ6FLcKZTfvojOn/yGk69GSmnAoGATocK\\nj1k+YDQQdpiurD9Q/NdIj/vSTK3mL0QM9zMCQeqyK8yV/g3CQIeZ3drBoxdPxukM\\nc5wyKTqgW5wh/PeOyOoXcKi7V2EzspVe1iRxjqBT28frW9BdBjSNpMtFoQmuO0qP\\nr6tXXyMBvdssRLSvEkhLL+whezqRIpSHifcvB50CgYEA5vSY24onP/VyLvNfwQlJ\\nC3/AchvxGxCQisUpe7W039Gvm8cg6jupZ/SM6Ke9ioMNHkuvetGnLu0I46yB5xjK\\nUwyVAU1+DU+LDBlV5vV6fGqUiOsQye1nc/6Qka0CgGw3m/SIJThYi1/DzYx8lnU3\\nVQI+wY86VGLVHQAYgK5wNh8=\\n-----END PRIVATE KEY-----\\n",
  "client_email": "firebase-adminsdk-1eb6t@beyik-yol-2.iam.gserviceaccount.com",
  "client_id": "110482617780265641392",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1eb6t%40beyik-yol-2.iam.gserviceaccount.com"
}`);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://beyik-yol-2.firebaseio.com",
    });
    await app.listen(6967);
}
bootstrap();
//# sourceMappingURL=main.js.map