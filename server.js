var i2cBus = require("i2c-bus");
var Pca9685Driver = require("pca9685").Pca9685Driver;

var options = {
    i2c: i2cBus.openSync(1),
    address: 0x40,
    frequency: 50,
    debug: false
};
pwm = new Pca9685Driver(options, function() {
    console.log("Initialization done");
});

var channel = parseInt(process.argv[2]);
var dutyCycle = parseFloat(process.argv[3]);

// // Set channel 0 to turn on on step 42 and off on step 255
// pwm.setPulseRange(channel, 42, 255);
//
// // Set the pulse length to 1500 microseconds for channel 2
// pwm.setPulseLength(channel, 1700);
//
// // Set the duty cycle to 25% for channel 8
// pwm.setDutyCycle(channel, dutyCycle);
// console.log(channel, dutyCycle);


// Set channel 0 to turn on on step 42 and off on step 255
pwm.setPulseRange(0, 42, 120);

// Set the pulse length to 1500 microseconds for channel 2
pwm.setPulseLength(2, 2000);

// Set the duty cycle to 25% for channel 8
pwm.setDutyCycle(8, 0.25);


setTimeout(function(){
  pwm.setDutyCycle(8, 0.50);
},2000);


setTimeout(function(){
  pwm.setDutyCycle(8, 0.75);
},4000);
