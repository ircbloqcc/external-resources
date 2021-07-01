/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_HC05BLUETOOTHESP8266_CATEGORY}" id="HC05BLUETOOTHESP8266_CATEGORY" colour="#00D7B0" secondaryColour="#00D7B0">
    <block type="HC05BluetoothEsp8266_begin" id="HC05BluetoothEsp8266_begin">
        <value name="rx">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="tx">
            <shadow type="math_number">
                <field name="NUM">11</field>
            </shadow>
        </value>
        <field name="baudrate">9600</field>
    </block>
    <block type="HC05BluetoothEsp8266_print" id="HC05BluetoothEsp8266_print">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="HC05BluetoothEsp8266_available" id="HC05BluetoothEsp8266_available">
    </block>
    <block type="HC05BluetoothEsp8266_readAByte" id="HC05BluetoothEsp8266_readAByte">
    </block>
    <block type="HC05BluetoothEsp8266_readInteger" id="HC05BluetoothEsp8266_readInteger">
    </block>
    <block type="HC05BluetoothEsp8266_readString" id="HC05BluetoothEsp8266_readString">
    </block>
    <block type="HC05BluetoothEsp8266_compareString" id="HC05BluetoothEsp8266_compareString">
    <value name="data">
            <shadow type="text">
                <field name="TEXT">LEDON</field>
            </shadow>
        </value>
        </block>
</category>`;
}

exports = addToolbox;
