/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.hc_sr04_read_distance = function (block) {

        const trigPin = Blockly.Arduino.valueToCode(block, 'trig_pin', Blockly.Arduino.ORDER_ATOMIC);
        const echoPin = Blockly.Arduino.valueToCode(block, 'echo_pin', Blockly.Arduino.ORDER_ATOMIC);
        const unit = block.getFieldValue('unit');

        //Blockly.Arduino.includes_.include_hc_sr04_read = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`hc_sr04_read${trigPin}${echoPin}`] =
    `float getDistance(int trig,int echo) {
     pinMode(trig,OUTPUT);
     digitalWrite(trig,LOW);
     delayMicroseconds(2);
     digitalWrite(trig,HIGH);
     delayMicroseconds(10);
     digitalWrite(trig,LOW);
     pinMode(echo, INPUT);
     return pulseIn(echo,HIGH,30000)/58.0;
     }`;
             return [`getDistance(${trigPin},${echoPin})`, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
