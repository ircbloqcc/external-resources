/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BLYNK_CATEGORY: 'BLYNK',
        BLYNK_BEGIN: 'Initialize BLYNK Server',
        BLYNK_USERID: 'Connect SSID %1 Password %2 Auth Token %3 for Blynk',
		BLYNK_START: 'Start Blynk Server',
        BLYNK_RECEIVE: 'Receive %1 data in virtual pin %2 from Blynk',
        BLYNK_SEND: 'Send %1 data in virtual pin %2 in every %3 ms to Blynk'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BLYNK_CATEGORY: 'BLYNK',
        BLYNK_BEGIN: 'Initialize BLYNK Server',
        BLYNK_USERID: 'Connect SSID %1 Password %2 Auth Token %3 for Blynk',
        BLYNK_START: 'Start BLYNK Server',
        BLYNK_RECEIVE: 'Receive %1 data in virtual pin %2 from Blynk',
        BLYNK_SEND: 'Send %1 data in virtual pin %2 in every %3 ms to Blynk'
	});
    return Blockly;
}

exports = addMsg;
