/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#015212';

    Blockly.Blocks.adafruitIO_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADAFRUITIO_BEGIN,
                args0: [{
                    type: 'input_value',
                    name: 'aiossid'
                }, {
                    type: 'input_value',
                    name: 'aiopswd'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.adafruitIO_userid = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADAFRUITIO_USERID,
                args0: [{
                    type: 'input_value',
                    name: 'aiouserid'
                },
                {
                    type: 'input_value',
                    name: 'aiokey'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.adafruitIO_send = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADAFRUITIO_SEND,
                args0: [{
                    type: 'input_value',
                    name: 'aioout'
                },
                {
                    type: 'input_value',
                    name: 'aiofeed'
                },
                {
                    type: 'input_value',
                    name: 'aiofeedname'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.adafruitIO_receive = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADAFRUITIO_RECEIVE,
                args0: [{
                    type: 'input_value',
                    name: 'aioin'
                },
                {
                    type: 'input_value',
                    name: 'aiofeed'
                },
                {
                    type: 'input_value',
                    name: 'aiofeedname'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
