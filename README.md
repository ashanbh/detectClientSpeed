# detectClientSpeed

##About
We often encounter situations, in webapps, where we'd like to serve smaller assets(images etc.) on slower connects. E.g. i wanted to dynamically decide whether to serve a video (larger asset) or an image (smaller asset) based on the connection speed. You can use other means of approximating your connection speed: device type, browser etc. You can, for instance assume that an iPhone is most likley using 3G. However, it could be using wifi, and hence have a faster connection.

##Approach
This utility tries to download a file in the browser and measure client speed. Its pretty simple, in that it makes an XHR call to retreive an image, and calculates things like latency, throughput and speed class.

##Usage



