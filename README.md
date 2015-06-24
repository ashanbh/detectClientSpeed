# detectClientSpeed

##About
detectClientSpeed is a simple utility, that allows you to detect the speed of your connection within a browser. This may have wide application. But, this is mosty useful in situations, where you'd like to serve smaller assets on slower connections. 

E.g. i wanted to dynamically decide whether to serve a video (larger asset) or an image (smaller asset) based on the connection speed. There are other means of approximating your connection speed: device type, browser etc. You can, for instance assume that an iPhone is most likley using 3G. However, it could be using wifi, and hence have a faster connection. This utility takes the guess work out. 

##Approach
This utility tries to download a file in the browser and measure client speed. Its pretty simple, in that it makes an XHR call to retreive an image, and calculates things like latency, throughput and speed class.

##Usage



