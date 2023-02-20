import * as firebase from 'firebase-admin';
import { BatchResponse } from 'firebase-admin/lib/messaging/messaging-api';
export interface ISendFirebaseMessages {
    token: string;
    title?: string;
    message: string;
}
export declare class NotificationsService {
    constructor();
    sendFirebaseMessages(firebaseMessages: ISendFirebaseMessages[], dryRun?: boolean): Promise<BatchResponse>;
    sendAll(messages: firebase.messaging.TokenMessage[], dryRun?: boolean): Promise<BatchResponse>;
}
