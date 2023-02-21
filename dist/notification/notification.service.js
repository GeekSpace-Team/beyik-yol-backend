"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
let NotificationsService = class NotificationsService {
    async sendToAll(notification, tokens) {
        const testToken = tokens;
        const payload = {
            notification: {
                title: `${notification.title_tm} / ${notification.title_ru}`,
                body: `${notification.body_tm} / ${notification.body_ru}`
            },
            data: {
                'url': notification.url
            }
        };
        await admin.messaging().sendToDevice(tokens, payload)
            .then((value) => {
            console.log(value);
        }, (reason) => {
            console.log(reason);
        })
            .catch((reason) => {
            console.log(reason);
        });
    }
};
NotificationsService = __decorate([
    (0, common_1.Injectable)()
], NotificationsService);
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notification.service.js.map