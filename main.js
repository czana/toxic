const Gpio = require('onoff').Gpio;
const button = new Gpio(17, 'in', 'both', {debounceTimeout: 10});

button.watch((e, value) => console.log(value));
