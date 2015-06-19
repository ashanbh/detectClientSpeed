(function () {
        var root, previous_detectSpeed;

        root = this;
        if (root != null) {
            previous_detectSpeed = root.detectSpeed;
        }

        detectSpeed.noConflict = function () {
            root.detectSpeed = previous_detectSpeed;
            return detectSpeed;
        };
        
        var detectSpeed = function (earl, callback) {
            var earl = earl || "https://s3-us-west-1.amazonaws.com/amit.shanbhag/3g/coffee-apple-iphone-laptop.jpg";
            earl = earl + (/\?/.test(earl) ? "&" : "?") + "cacheBuster=" + Date.now();
            var _timings = {};
            var _progress = function (e) {
                _timings.firstByte = _timings.firstByte || Date.now();
            };
            var _done = function (data) {
                var size = data.target.response.length;
                _timings.url = earl;
                _timings.dataSize = size;
                _timings.end = Date.now();
                _timings.latency = (_timings.firstByte - _timings.start);
                _timings.throughput = Math.round(size / (_timings.end - _timings.firstByte) * 100) / 100;
                console.log("Timings", _timings);
                callback && callback(_timings);
            };
            var oReq = new XMLHttpRequest();
            oReq.addEventListener("progress", _progress, false);
            oReq.onload = _done;
            _timings.start = Date.now();
            oReq.open("GET", earl);
            oReq.send();
        };

        // Node.js
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = detectSpeed;
        }
        // AMD / RequireJS
        else if (typeof define !== 'undefined' && define.amd) {
            define([], function () {
                return detectSpeed;
            });
        }
        // included directly via <script> tag
        else {
            root.detectSpeed = detectSpeed;
        }
    }
)();
