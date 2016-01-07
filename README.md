# detectClientSpeed
See it in action:
http://ashanbh.github.io/detectClientSpeed/example1.html
http://ashanbh.github.io/detectClientSpeed/example2.html

##About
detectClientSpeed allows you to detect the speed of your connection within a browser, i.e determine whether the user is using 3G, WIFi, broadband etc.

This may have wide application. But, this is mosty useful in situations where you'd like to serve smaller assets on slower connections. E.g. You can decide to serve a video (larger asset) on broadband and an image (smaller asset) on 3G.

##Approach
The utility tries to download a file in the browser and measure client speed. Its pretty simple, in that it makes an XHR call to retreive an image, and calculates things like latency, throughput and conection speed class.

There are other means of approximating your connection speed: device type, browser etc. You can, for instance assume that an iPhone is most likley using 3G. However, it could be using wifi, and hence have a faster connection. This utility takes the guess work out.

##Get Started
Download the library https://raw.githubusercontent.com/ashanbh/detectClientSpeed/master/detectSpeed/detectSpeed.js

Include it in your HTML using a script tag. This will create a global object called 'detectSpeed'.
see [example](http://ashanbh.github.io/detectClientSpeed/example2.html)
```
 <script src="scripts/detectSpeed.js"></script>
```

Use via AMD. see [example](http://ashanbh.github.io/detectClientSpeed/example1.html)
```javascript
<script src="scripts/require.js"></script>
<script>
        requirejs(['scripts/detectSpeed'], function (detectSpeed) {

            //Callback to receive timing information
            var callback = function (timings) {
                console.log(timings);
            }
            detectSpeed.startSpeedCheck("https://s3-us-west-1.amazonaws.com/amit.shanbhag/3g/coffee-apple-iphone-laptop.jpg", callback);

        });
</script>
```

##Usage
The basic syntax is as follows
```javascript
detectSpeed.startSpeedCheck (
  'http://mydomain.com/mylargingImage.png',
  function callback(timings){
    ...
  },
  function onprogress(evt){
      if (evt.lengthComputable)
      {
        var percentComplete = (evt.loaded / evt.total)*100;
        console.log(percentComplete);
      }
    }
);

/*
 * The timing data is returned as follows:
 *
 *      timings: {
 *          "start":        //start time in milliseconds
 *          "end":          //end time in milliseconds
 *          "firstByte":    //Time the first byte was received
 *          "url":          //URL that was used for testing
 *          "dataSizeKB":   //Size of the data in *bytes*
 *          "latency":      //Latency (connection round trip time) in milliseconds
 *          "throughput":   //in KBPS
 *          "throughPutSpeedClass":   //returns a speed class e.g. 3G,4G,WIFI etc.
 *                                    //which has atleast as much throughput.
 *          "latencySpeedClass":      //where the latency is no more that of  
 *                                    // a given speed class
 *                                     
 *      }
*/
```

You call the function "startSpeedCheck" with 2 arguments, a url and a callback function. The callback function receives an object with timing information.

## Speed Classes
The utility tries to best guess the type of connection in the browser. It does so based on the definitions below. However, it also returns raw information, incase you need it.

```javascript
 * 	    "SPEED_OFFLINE": {
 * 	        "name": "offline",
 * 	        "latency": 0,
 * 	        "throughput": 0
 * 	    },
 *          "DIAL_UP": {
 *              name: 'DAIL_UP',
 *              latency: 2000,
 *              throughput: 2.4
 *          },
 * 	    "SPEED_GPRS"
 * 	        "name": "GPRS",
 * 	        "latency": 500,
 * 	        "throughput": 50
 * 	    },
 * 	    "SPEED_2G": {
 * 	        "name": "2G",
 * 	        "latency": 300,
 * 	        "throughput": 250
 * 	    },
 * 	    "SPEED_2G_EDGE": {
 * 	        "name": "2G_EDGE",
 * 	        "latency": 300,
 * 	        "throughput": 450
 * 	    },
 * 	    "SPEED_3G": {
 * 	        "name": "3G",
 * 	        "latency": 200,
 * 	        "throughput": 750
 * 	    },
 * 	    "SPEED_3G_HSPA": {
 * 	        "name": "3G_HSPA",
 * 	        "latency": 200,
 * 	        "throughput": 1000
 * 	    },
 * 	    "SPEED_4G": {
 * 	        "name": "4G",
 * 	        "latency": 100,
 * 	        "throughput": 4000
 * 	    },
 * 	    "SPEED_WIFI": {
 * 	        "name": "WIFI",
 * 	        "latency": 100 ,
 * 	        "throughput": 10000
 * 	    }
```
