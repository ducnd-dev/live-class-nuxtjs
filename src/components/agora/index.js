/* eslint-disable class-methods-use-this */
import { AgoraEduSDK } from 'agora-classroom-sdk';

export default class App {
    constructor(elem, config) {
        if (!elem) return;
        this.elem = elem;
        this.config = config;
    }

    setupClassroom() {
        AgoraEduSDK.config({
            appId: 'ca1e80b04d894071927ff829377ad9f6',
        });
        AgoraEduSDK.launch(document.querySelector(`#${this.elem.id}`), {
            rtmToken: this.config.roleType !== 1 ? '006ca1e80b04d894071927ff829377ad9f6IAC7Y2AllMsQ03+Do2T8omG+9liW9JTnB7B6sfbDQtDnEr8HbDYAAAAAEABkneg7cpREYQEA6ANylERh' : '006ca1e80b04d894071927ff829377ad9f6IACHv8j/XCsPBeWW9GH2GY1jyjTWTuJQziHSbSJOpTVZ19Wm9rAAAAAAEABkneg7oJVEYQEA6AOglURh',
            userUuid: this.config.roleType !== 1 ? 'duc' : 'teacher',
            userName: this.config.userName ? this.config.userName : '',
            roomUuid: '43211',
            roleType: this.config.roleType ? this.config.roleType : null,
            roomType: this.config.roomType ? this.config.roomType : null,
            roomName: this.config.roomName ? this.config.roomName : '',
            pretest: true,
            language: 'en',
            startTime: new Date().getTime(),
            duration: 60 * 30,
            courseWareList: [],
            recordUrl: '',
            listener: (evt) => {
                console.log('evt-1111111', evt);
            },
        })
            .then((res) => console.log('res', res))
            .catch((err) => console.log('err', err));
    }
}
