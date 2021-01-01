const { Console } = require('console');
const serialportgsm = require('serialport-gsm');

let modem = serialportgsm.Modem()
let options = {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
    rtscts: false,
    xon: false,
    xoff: false,
    xany: false,
    autoDeleteOnReceive: true,
    enableConcatenation: true,
    incomingCallIndication: true,
    incomingSMSIndication: true,
    pin: '',
    customInitCommand: '',
    logger: console
}

modem.open('COM37', options, {});

modem.on('open', data => {	
  //init
	modem.initializeModem((data)=> {
    console.log("modem is ok");
	
    ////////////////Send SMS//////////
	modem.sendSMS('213669693609', 'I love you Sara', false, (data)=> {
	console.log(data);
    });
	//////////////////////////////////
	
	
	
  });
    

})	


modem.on('onSendingMessage', result => { 
    console.log(result);
})
