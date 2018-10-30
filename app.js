
Stream = require('node-rtsp-stream');
stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://admin:1qaz2wsx@172.18.77.53/Streaming/Channels/101/',
    wsPort: 9999
});
stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://admin:1qaz2wsx@172.18.77.53/Streaming/Channels/101/',
    wsPort: 9990
});
// rtsp://admin:1qaz2wsx@172.18.77.53/Streaming/Channels/101/
// rtsp://192.168.2.26:554/av0_0




/*const onvif = require('node-onvif');

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://192.168.2.26:2000/onvif/device_service',
  user : 'admin',
  pass : 'admin'
});

device.init().then(() => {
    // Get the UDP stream URL
    let url = device.getUdpStreamUrl();
    console.log(url);
  }).catch((error) => {
    console.error(error);
  });*/