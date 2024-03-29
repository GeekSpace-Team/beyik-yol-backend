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
        const testToken = ["c3JbsF21Siq3C9Fc2uIDD8:APA91bFjEG8hK2VeGyR-jqkAVIkXluOua02C86Nzhbd6AZp5RyhI6otwp3nud3_lwgKJwSujCGATRaHesPXIz4Gj6efLF8ywX3p-ws6w5IWvU_tvDH4N6lbZq-Woym3A6nVysSgH6c_b", ...tokens];
        const payload = {
            notification: {
                title: `${notification.title_tm} / ${notification.title_ru}`,
                body: `${notification.body_tm} / ${notification.body_ru}`
            },
            data: {
                'url': notification.url
            }
        };
        console.log(testToken, payload);
        await admin.messaging().sendToDevice(testToken.filter((tkn, i) => typeof tkn !== 'undefined' && tkn != null && tkn != "" && tkn.length > 0), payload)
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