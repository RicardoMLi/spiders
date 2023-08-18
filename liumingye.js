const crypto = require('crypto-js')
function Hs(e, t) {
    return e.charCodeAt(Math.floor(t % 64));
}
function Us(e, t) {
    var i = t.split("");
    return i['map'](function(t, s) {
        return t.charCodeAt(0) ^ Hs(e, s);
    });
}


function Vs(e) {
    var f = "";
    return  f + "===".slice(3);
}

Es = {
    encode: function(e, t) {
        t = 'yGz4n9XE9xYy2Oj5Ub7E6u9a5p5aIWZYe53Orq5wE5UgnjbWq0410WTvmLBO1Z2N'
        var i = Us(t.toString(), e.toString());
        return "20230327." + crypto.MD5(Vs(i));
    }
}

function get_token(tz, song) {
    var data = {
        page: 1,
        type: 'YQM',
        v: 'beta',
        _t: tz,
        text: song
    }
    return Es.encode(encodeURIComponent(data.toString()))
}

