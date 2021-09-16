/* eslint-disable class-methods-use-this */
import { AgoraEduSDK } from 'agora-classroom-sdk';

export default class App {
    // constructor(elem) {
    //     if (!elem) return;
    //     this.elem = elem;
    // }

    setupClassroom() {
        AgoraEduSDK.config({
            appId: 'ca1e80b04d894071927ff829377ad9f6',
        });
        AgoraEduSDK.launch(document.querySelector('#live-class'), {
            rtmToken:
                '006ca1e80b04d894071927ff829377ad9f6IABRQySz+LgjkRPP9sPRNvgT0doMTy2Rx7dl2mvtdXXfPb8HbDYAAAAAEAAj6skOHEdDYQEA6AMcR0Nh',
            userUuid: 'duc',
            userName: 'teacher',
            roomUuid: '4321',
            roleType: 1,
            roomType: 0,
            roomName: 'demo-class',
            pretest: false,
            language: 'en',
            startTime: new Date().getTime(),
            duration: 60 * 30,
            courseWareList: [],
            recordUrl: '<Your Record Page Url>',
            listener: () => {
                // console.log('evt', evt);
            },
        });
    }
}
