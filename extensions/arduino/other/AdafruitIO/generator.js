/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.adafruitIO_begin = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const aiossid = Blockly.Arduino.valueToCode(block, 'aiossid', Blockly.Arduino.ORDER_ATOMIC);
        const aiopswd = Blockly.Arduino.valueToCode(block, 'aiopswd', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.adafruitIO_init = `#include <AdafruitIO_WiFi.h>`;
        Blockly.Arduino.definitions_[`adafruitIO_begin`] =
    `const char* ssid = ${aiossid};\nconst char* password = ${aiopswd};\n`;

         Blockly.Arduino.setups_[`adafruitIO_begin`] =
    `io.connect();
    Serial.begin(115200);
    while(io.status() < AIO_CONNECTED) {
    Serial.print(".");
    delay(500);
    }
    Serial.println(io.statusText());`;
       return '';
    };
     
    Blockly.Arduino.adafruitIO_userid = function (block) {
      // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
       const aiouserid = Blockly.Arduino.valueToCode(block, 'aiouserid', Blockly.Arduino.ORDER_ATOMIC);
       const aiokey = Blockly.Arduino.valueToCode(block, 'aiokey', Blockly.Arduino.ORDER_ATOMIC);
       
       Blockly.Arduino.definitions_[`adafruitIO_userid`] = `AdafruitIO_WiFi io(${aiouserid}, ${aiokey}, ssid, password);`;
      return 'io.run();\n';
   };
   
   Blockly.Arduino.adafruitIO_send = function (block) {
    // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
     const aioout = Blockly.Arduino.valueToCode(block, 'aioout', Blockly.Arduino.ORDER_ATOMIC);
     const aiofeed = Blockly.Arduino.valueToCode(block, 'aiofeed', Blockly.Arduino.ORDER_ATOMIC);
     const aiofeedname = Blockly.Arduino.valueToCode(block, 'aiofeedname', Blockly.Arduino.ORDER_ATOMIC);

     Blockly.Arduino.definitions_[`adafruitIO_feed_${aiofeed}`] =
 `AdafruitIO_Feed *feed_${aiofeed} = io.feed(${aiofeedname});
  void handlefeed_${aiofeed}(AdafruitIO_Data *data) {${aioout} = data->toInt();}`;

      Blockly.Arduino.setups_[`adafruitIO_feed_${aiofeed}`] =
  `feed_${aiofeed}->onMessage(handlefeed_${aiofeed});
  feed_${aiofeed}->get();\n`;
    return '';
 };

 Blockly.Arduino.adafruitIO_receive = function (block) {
  // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
   const aioin = Blockly.Arduino.valueToCode(block, 'aioin', Blockly.Arduino.ORDER_ATOMIC);
   const aiofeed = Blockly.Arduino.valueToCode(block, 'aiofeed', Blockly.Arduino.ORDER_ATOMIC);
   const aiofeedname = Blockly.Arduino.valueToCode(block, 'aiofeedname', Blockly.Arduino.ORDER_ATOMIC);

   Blockly.Arduino.definitions_[`adafruitIO_feed_${aiofeed}`] =
`AdafruitIO_Feed *feed_${aiofeed} = io.feed(${aiofeedname});`
  
 return `if(last == ${aioin})\nreturn;\nfeed_${aiofeed}->save(${aioin});\nlast=${aioin};\n`;
};  
    return Blockly;
}

exports = addGenerator;
