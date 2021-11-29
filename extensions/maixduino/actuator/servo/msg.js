/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SERVO_CATEGORY: 'Servo',
        SERVO_WRITE: 'set servo pin %1 angle as %2 timer %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SERVO_CATEGORY: 'Servo',
        SERVO_WRITE: 'set servo pin %1 angle as %2 timer %3'
    });
    return Blockly;
}

exports = addMsg;
