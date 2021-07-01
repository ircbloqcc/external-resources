/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ADAFRUITIO_CATEGORY}" id="ADAFRUITIO_CATEGORY" colour="#015212" secondaryColour="#015212">
    <block type="adafruitIO_begin" id="adafruitIO_begin">
        <value name="aiossid">
            <shadow type="text">
                <field name="TEXT">ssid</field>
            </shadow>
        </value>
        <value name="aiopswd">
            <shadow type="text">
                <field name="TEXT">password</field>
            </shadow>
        </value>
    </block>
    
    <block type="adafruitIO_userid" id="adafruitIO_usedid">
        <value name="aiouserid">
            <shadow type="text">
                <field name="TEXT">USERNAME</field>
            </shadow>
        </value>
        <value name="aiokey">
            <shadow type="text">
                <field name="TEXT">AIO KEY</field>
            </shadow>
        </value>
    </block>
    
    <block type="adafruitIO_send" id="adafruitIO_send">
        <value name="aioout">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="aiofeed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="aiofeedname">
            <shadow type="text">
                <field name="TEXT">FEED_NAME</field>
            </shadow>
        </value>
    </block>

    <block type="adafruitIO_receive" id="adafruitIO_receive">
        <value name="aioin">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="aiofeed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="aiofeedname">
            <shadow type="text">
                <field name="TEXT">FEED_NAME</field>
            </shadow>
        </value>
    </block>
    
</category>`;
}

exports = addToolbox;
