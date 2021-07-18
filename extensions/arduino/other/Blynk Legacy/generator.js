/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.Blynk_begin = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.Blynk_init = `
#define BLYNK_PRINT Serial
#include "BlynkSimpleEsp8266.h"`;
      return '';
    };
     
    Blockly.Arduino.Blynk_userid = function (block) {
      // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
       const blynkssid = Blockly.Arduino.valueToCode(block, 'blynkssid', Blockly.Arduino.ORDER_ATOMIC);
       const blynkpass = Blockly.Arduino.valueToCode(block, 'blynkpass', Blockly.Arduino.ORDER_ATOMIC);
       const blynkauth = Blockly.Arduino.valueToCode(block, 'blynkauth', Blockly.Arduino.ORDER_ATOMIC);
       
      return `Blynk.begin(${blynkauth}, ${blynkssid}, ${blynkpass});\n`;
   };
   
   Blockly.Arduino.Blynk_start = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
      return 'Blynk.run();\n';
    };
   
   Blockly.Arduino.Blynk_receive = function (block) {
    // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
     const blynkin = Blockly.Arduino.valueToCode(block, 'blynkin', Blockly.Arduino.ORDER_ATOMIC);
     const vpin = Blockly.Arduino.valueToCode(block, 'vpin', Blockly.Arduino.ORDER_ATOMIC);
    
     Blockly.Arduino.definitions_[`Blynk_vpin_${vpin}`] =
 `BLYNK_WRITE(V${vpin}){
  ${blynkin} = param.asDouble();
  } `;
    return '';
 };

 Blockly.Arduino.Blynk_send = function (block) {
  // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
   const blynkout = Blockly.Arduino.valueToCode(block, 'blynkout', Blockly.Arduino.ORDER_ATOMIC);
   const vpin = Blockly.Arduino.valueToCode(block, 'vpin', Blockly.Arduino.ORDER_ATOMIC);
   const msec = Blockly.Arduino.valueToCode(block, 'msec', Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.definitions_[`Blynk_time`]=
   `BlynkTimer timer;`
   Blockly.Arduino.definitions_[`Blynk_timers_${vpin}`] =
`void myTimerEvent_${vpin}(){
	Blynk.virtualWrite(V${vpin}, ${blynkout});
 }`;
 
  Blockly.Arduino.setups_[`Blynk_timer_${vpin}`] = 
  `timer.setInterval(${msec}L, myTimerEvent_${vpin});`;
  Blockly.Arduino.loops_[`Blynk_run_timer`]=
  `timer.run();`;
 return '';
};  
    return Blockly;
}

exports = addGenerator;
