/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ADAFRUITIO_CATEGORY: 'Adafruit IO',
        ADAFRUITIO_BEGIN: 'Connect SSID %1 Password %2 for AdafruitIO',
        ADAFRUITIO_USERID: 'Set Username %1 AIO Key %2 for AdafruitIO',
        ADAFRUITIO_RECEIVE: 'Receive %1 data in feed %2 from AdafruitIO Feed Name %3',
        ADAFRUITIO_SEND: 'Send %1 data in feed %2 from AdafruitIO Feed Name %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ADAFRUITIO_CATEGORY: 'Adafruit IO',
        ADAFRUITIO_BEGIN: 'Connect SSID %1 Password %2 for AdafruitIO',
        ADAFRUITIO_USERID: 'Set Username %1 AIO Key %2 for AdafruitIO',
        ADAFRUITIO_RECEIVE: 'Receive %1 data in feed %2 from AdafruitIO Feed Name %3',
        ADAFRUITIO_SEND: 'Send %1 data in feed %2 from AdafruitIO Feed Name %3'
    });
    return Blockly;
}

exports = addMsg;
