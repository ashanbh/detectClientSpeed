# detectClientSpeed

##About
detectClientSpeed allows you to detect the speed of your connection within a browser, i.e determine whether the user is using 3G, WIFi, broadband etc. 

This may have wide application. But, this is mosty useful in situations where you'd like to serve smaller assets on slower connections. E.g. You can decide to serve a video (larger asset) on broadband and an image (smaller asset) on 3G. 

##Approach
The utility tries to download a file in the browser and measure client speed. Its pretty simple, in that it makes an XHR call to retreive an image, and calculates things like latency, throughput and conection speed class. 

There are other means of approximating your connection speed: device type, browser etc. You can, for instance assume that an iPhone is most likley using 3G. However, it could be using wifi, and hence have a faster connection. This utility takes the guess work out. 

##Usage



