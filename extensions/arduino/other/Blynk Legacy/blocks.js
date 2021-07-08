/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#23be8a';

    Blockly.Blocks.Blynk_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_BEGIN,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Blynk_userid = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_USERID,
                args0: [{
                    type: 'input_value',
                    name: 'blynkssid'
                },
                {
                    type: 'input_value',
                    name: 'blynkpass'
                },
                {
                    type: 'input_value',
                    name: 'blynkauth'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.Blynk_start = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_START,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.Blynk_receive = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_RECEIVE,
                args0: [{
                    type: 'input_value',
                    name: 'blynkin'
                },
                {
                    type: 'input_value',
                    name: 'vpin'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Blynk_send = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_SEND,
                args0: [{
                    type: 'input_value',
                    name: 'blynkout'
                },
                {
                    type: 'input_value',
                    name: 'vpin'
                },
                {
                    type: 'input_value',
                    name: 'msec'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    

    return Blockly;
}

exports = addBlocks;
