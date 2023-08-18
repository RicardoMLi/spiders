
//webpack参考这篇文章：https://blog.csdn.net/weixin_41586984/article/details/116268341

const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
window = dom.window;
document = window.document;
XMLHttpRequest = window.XMLHttpRequest;

require('./chunk-libs.js');

var sign;

!function(c) {
    function n(n) {
        for (var h, k, d = n[0], f = n[1], b = n[2], t = 0, o = []; t < d.length; t++) k = d[t], Object.prototype.hasOwnProperty.call(e, k) && e[k] && o.push(e[k][0]), e[k] = 0;
        for (h in f) Object.prototype.hasOwnProperty.call(f, h) && (c[h] = f[h]);
        for (r && r(n); o.length;) o.shift()();
        return a.push.apply(a, b || []), u()
    }

    function u() {
        for (var c, n = 0; n < a.length; n++) {
            for (var u = a[n], h = !0, k = 1; k < u.length; k++) {
                var f = u[k];
                0 !== e[f] && (h = !1)
            }
            h && (a.splice(n--, 1), c = d(d.s = u[0]))
        }
        return c
    }
    var h = {},
        k = {
            runtime: 0
        },
        e = {
            runtime: 0
        },
        a = [];

    function d(n) {
        if (h[n]) return h[n].exports;
        var u = h[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        console.log("In exports",n)
        return c[n].call(u.exports, u, u.exports, d), u.l = !0, u.exports
    }
    d.e = function(c) {
        var n = [];
        k[c] ? n.push(k[c]) : 0 !== k[c] && {
            "chunk-03a6": 1,
            "chunk-095a": 1,
            "chunk-140b": 1,
            "chunk-1a15": 1,
            "chunk-22c3": 1,
            "chunk-237a": 1,
            "chunk-b436": 1,
            "chunk-2ca8": 1,
            "chunk-5b8e": 1,
            "chunk-b2a6": 1,
            "chunk-2452": 1,
            "chunk-25e3": 1,
            "chunk-27b5": 1,
            "chunk-3212": 1,
            "chunk-395f": 1,
            "chunk-39c3": 1,
            "chunk-39d6": 1,
            "chunk-3bba": 1,
            "chunk-006c": 1,
            "chunk-18a2": 1,
            "chunk-a12e": 1,
            "chunk-44dc": 1,
            "chunk-34ab": 1,
            "chunk-701f": 1,
            "chunk-32ec": 1,
            "chunk-8e01": 1,
            "chunk-f7ff": 1,
            "chunk-421e": 1,
            "chunk-45a6": 1,
            "chunk-4709": 1,
            "chunk-4e4d": 1,
            "chunk-4f77": 1,
            "chunk-658b": 1,
            "chunk-65ec": 1,
            "chunk-1cad": 1,
            "chunk-c327": 1,
            "chunk-6b48": 1,
            "chunk-f919": 1,
            "chunk-363d": 1,
            "chunk-5bfc": 1,
            "chunk-7798": 1,
            "chunk-7b12": 1,
            "chunk-7ebe": 1,
            "chunk-87d5": 1,
            "chunk-9e0d": 1,
            "chunk-3fcb": 1,
            "chunk-11cb": 1,
            "chunk-2bb3": 1,
            "chunk-6dac": 1,
            "chunk-780b": 1,
            "chunk-fdb5": 1,
            "chunk-a66f": 1,
            "chunk-01b9": 1,
            "chunk-55ae": 1,
            "chunk-6be3": 1,
            "chunk-7eac": 1,
            "chunk-c33f": 1,
            "chunk-c550": 1,
            "chunk-cff0": 1,
            "chunk-commons": 1,
            "chunk-0ce6": 1,
            "chunk-0d6c": 1,
            "chunk-887d": 1,
            "chunk-ca8d": 1,
            "chunk-3cb8": 1,
            "chunk-018f": 1,
            "chunk-384b": 1,
            "chunk-08ac": 1,
            "chunk-0b01": 1,
            "chunk-0c9f": 1,
            "chunk-c41c": 1,
            "chunk-112a": 1,
            "chunk-1f10": 1,
            "chunk-1f68": 1,
            "chunk-2a6d": 1,
            "chunk-0548": 1,
            "chunk-6095": 1,
            "chunk-8a64": 1,
            "chunk-2990": 1,
            "chunk-6d50": 1,
            "chunk-3c20": 1,
            "chunk-579c": 1,
            "chunk-7c41": 1,
            "chunk-3d6d": 1,
            "chunk-3e0b": 1,
            "chunk-42ac": 1,
            "chunk-4340": 1,
            "chunk-438e": 1,
            "chunk-4931": 1,
            "chunk-4d03": 1,
            "chunk-5074": 1,
            "chunk-0fa5": 1,
            "chunk-7593": 1,
            "chunk-50f9": 1,
            "chunk-5770": 1,
            "chunk-57e1": 1,
            "chunk-5b88": 1,
            "chunk-3373": 1,
            "chunk-5cda": 1,
            "chunk-5e5b": 1,
            "chunk-5e7a": 1,
            "chunk-9df9": 1,
            "chunk-26a5": 1,
            "chunk-644c": 1,
            "chunk-1595": 1,
            "chunk-026d": 1,
            "chunk-94aa": 1,
            "chunk-d4e5": 1,
            "chunk-6890": 1,
            "chunk-6b7a": 1,
            "chunk-6f36": 1,
            "chunk-6ffe": 1,
            "chunk-7bd9": 1,
            "chunk-861c": 1,
            "chunk-5ed1": 1,
            "chunk-70a4": 1,
            "chunk-2bb6": 1,
            "chunk-422c": 1,
            "chunk-6231": 1,
            "chunk-c362": 1,
            "chunk-8def": 1,
            "chunk-8fd7": 1,
            "chunk-95fe": 1,
            "chunk-a372": 1,
            "chunk-c48d": 1,
            "chunk-ce73": 1,
            "chunk-1d1d": 1,
            "chunk-32c2": 1,
            "chunk-c19f": 1,
            "chunk-e139": 1,
            "chunk-bc52": 1,
            "chunk-c63e": 1,
            "chunk-7299": 1,
            "chunk-6cea": 1,
            "chunk-2a1e": 1,
            "chunk-4fe7": 1,
            "chunk-9c09": 1,
            "chunk-6887": 1
        } [c] && n.push(k[c] = new Promise(function(n, u) {
            for (var h = "static/css/" + ({
                    "chunk-commons": "chunk-commons"
                } [c] || c) + "." + {
                    "chunk-03a6": "e48d9ba7",
                    "chunk-095a": "ba10eed3",
                    "chunk-140b": "877cb442",
                    "chunk-1a15": "aecef286",
                    "chunk-22c3": "d135fd27",
                    "chunk-237a": "2bdd78ed",
                    "chunk-238f": "31d6cfe0",
                    "chunk-345b": "31d6cfe0",
                    "chunk-b436": "2a478dae",
                    "chunk-2ca8": "34b6ef44",
                    "chunk-5b8e": "af1d034e",
                    "chunk-b2a6": "54360661",
                    "chunk-2452": "fddf77d3",
                    "chunk-25e3": "b0dc9d5d",
                    "chunk-27b5": "6bfd3cf8",
                    "chunk-3212": "b1e6be37",
                    "chunk-395f": "6bb0d2fe",
                    "chunk-39c3": "ea3be3e0",
                    "chunk-39d6": "a368e9e5",
                    "chunk-3bba": "e47533e4",
                    "chunk-006c": "c5c01059",
                    "chunk-18a2": "347bcded",
                    "chunk-a12e": "0e435b55",
                    "chunk-44dc": "342d5630",
                    "chunk-34ab": "64fea887",
                    "chunk-701f": "ee20ca3b",
                    "chunk-32ec": "2b4b0c12",
                    "chunk-8e01": "e3cf6ef4",
                    "chunk-f7ff": "6aa14299",
                    "chunk-421e": "a39eccb7",
                    "chunk-45a6": "cd9e29ea",
                    "chunk-4709": "e99f227b",
                    "chunk-4e4d": "a119b32c",
                    "chunk-4f77": "70833b5c",
                    "chunk-658b": "b9a4799e",
                    "chunk-65ec": "0a9c66ac",
                    "chunk-1cad": "a648f389",
                    "chunk-c327": "e00a2cef",
                    "chunk-6b48": "9322355b",
                    "chunk-72df": "31d6cfe0",
                    "chunk-f919": "6d3f3e76",
                    "chunk-363d": "1eaa84a2",
                    "chunk-5bfc": "3a6ce668",
                    "chunk-7798": "5527d363",
                    "chunk-7b12": "35056401",
                    "chunk-7ebe": "5df4c28f",
                    "chunk-8839": "31d6cfe0",
                    "chunk-87d5": "33693180",
                    "chunk-9e0d": "daa0eabc",
                    "chunk-3fcb": "cf13db78",
                    "chunk-11cb": "f44ffa70",
                    "chunk-1c26": "31d6cfe0",
                    "chunk-2bb3": "c2854611",
                    "chunk-6dac": "2686a9ac",
                    "chunk-780b": "3de694ba",
                    "chunk-fdb5": "5223dc16",
                    "chunk-a66f": "07ca6b26",
                    "chunk-01b9": "f64419ba",
                    "chunk-55ae": "a73db9e0",
                    "chunk-6be3": "ecbeb458",
                    "chunk-7eac": "83cdc28b",
                    "chunk-c33f": "a783c398",
                    "chunk-c550": "fdb8cce5",
                    "chunk-cff0": "45726a2b",
                    "chunk-commons": "3a95dde4",
                    MT78: "31d6cfe0",
                    "chunk-0ce6": "97ffffc2",
                    "chunk-0d6c": "3da9e46c",
                    "chunk-887d": "ca5ca7eb",
                    "chunk-6e7d": "31d6cfe0",
                    "chunk-ca8d": "61b8e85b",
                    "chunk-3cb8": "9aafdb76",
                    "chunk-018f": "373b4bca",
                    "chunk-384b": "0f895a37",
                    "chunk-08ac": "6521b17b",
                    "chunk-0b01": "863a09f2",
                    "chunk-0c9f": "5b6b0768",
                    "chunk-c41c": "a4d84b7f",
                    "chunk-112a": "417b3c63",
                    "chunk-1f10": "977dca8a",
                    "chunk-1f68": "bea0a89f",
                    "chunk-2a6d": "5f83354d",
                    "chunk-0548": "40049260",
                    "chunk-6095": "a54c354b",
                    "chunk-8a64": "bf0867e0",
                    "chunk-2990": "f2935d4c",
                    "chunk-6d50": "c611bd0b",
                    "chunk-3c20": "4d6fc7e7",
                    "chunk-579c": "322bb797",
                    "chunk-7c41": "347c0ee0",
                    "chunk-3d6d": "020179e8",
                    "chunk-3e0b": "48547600",
                    "chunk-42ac": "9e332912",
                    "chunk-4340": "cc4c6ecd",
                    "chunk-438e": "52d3a3d9",
                    "chunk-4931": "f9c0d43d",
                    "chunk-4d03": "186e7a1f",
                    "chunk-5074": "ded97b89",
                    "chunk-0fa5": "55b0c501",
                    "chunk-7593": "4bf39dd2",
                    "chunk-53e4": "31d6cfe0",
                    "chunk-50f9": "e46a3246",
                    "chunk-5770": "75bb9c44",
                    "chunk-57e1": "fa30443e",
                    "chunk-5b88": "d874d6f1",
                    "chunk-3373": "a4ce9110",
                    "chunk-5cda": "4a5609ee",
                    "chunk-5e5b": "4318f7ca",
                    "chunk-5e7a": "f560dd1e",
                    "chunk-9df9": "e4699033",
                    "chunk-26a5": "d0b25e93",
                    "chunk-644c": "710b2aef",
                    "chunk-1595": "461b7352",
                    "chunk-026d": "4cb55d92",
                    "chunk-94aa": "b586e0fd",
                    "chunk-d4e5": "df569756",
                    "chunk-6890": "31d8013c",
                    "chunk-6b7a": "afc34c4f",
                    "chunk-6f36": "29f31813",
                    "chunk-6ffe": "ad8134d8",
                    "chunk-7bd9": "4b6c32aa",
                    "chunk-861c": "cebb8097",
                    "chunk-5ed1": "8ea43390",
                    "chunk-70a4": "8edf0a1a",
                    "chunk-87e6": "31d6cfe0",
                    "chunk-2bb6": "6a6413f7",
                    "chunk-422c": "233551a3",
                    "chunk-6231": "e60803a2",
                    "chunk-c362": "15159684",
                    "chunk-8def": "0be8ff81",
                    "chunk-8fd7": "74016d81",
                    "chunk-95fe": "816b737f",
                    "chunk-a372": "78bf5f43",
                    "chunk-c48d": "48883d08",
                    "chunk-ce73": "998d8916",
                    "chunk-1d1d": "95c41e2e",
                    "chunk-32c2": "86156a46",
                    "chunk-c19f": "afb22fc7",
                    "chunk-e139": "9b101d59",
                    "chunk-bc52": "9e773c28",
                    "chunk-c63e": "fbe6dd70",
                    "chunk-7299": "2a0d9607",
                    "chunk-6cea": "cab5009c",
                    "chunk-2a1e": "d8877dbb",
                    "chunk-4fe7": "2ec7a39c",
                    "chunk-9c09": "a3d484e0",
                    "chunk-6887": "c38f6f90"
                } [c] + ".css", k = d.p + h, e = document.getElementsByTagName("link"), a = 0; a < e.length; a++) {
                var f = (t = e[a]).getAttribute("data-href") || t.getAttribute("href");
                if ("stylesheet" === t.rel && (f === h || f === k)) return n()
            }
            var b = document.getElementsByTagName("style");
            for (a = 0; a < b.length; a++) {
                var t;
                if ((f = (t = b[a]).getAttribute("data-href")) === h || f === k) return n()
            }
            var r = document.createElement("link");
            r.rel = "stylesheet", r.type = "text/css", r.onload = n, r.onerror = function(n) {
                var h = n && n.target && n.target.src || k,
                    e = new Error("Loading CSS chunk " + c + " failed.\n(" + h + ")");
                e.request = h, u(e)
            }, r.href = k, document.getElementsByTagName("head")[0].appendChild(r)
        }).then(function() {
            k[c] = 0
        }));
        var u = e[c];
        if (0 !== u)
            if (u) n.push(u[2]);
            else {
                var h = new Promise(function(n, h) {
                    u = e[c] = [n, h]
                });
                n.push(u[2] = h);
                var a, f = document.createElement("script");
                f.charset = "utf-8", f.timeout = 120, d.nc && f.setAttribute("nonce", d.nc), f.src = function(c) {
                    return d.p + "static/js/" + ({
                        "chunk-commons": "chunk-commons"
                    } [c] || c) + "." + {
                        "chunk-03a6": "305e4dd4",
                        "chunk-095a": "adfa78e7",
                        "chunk-140b": "92eb4af2",
                        "chunk-1a15": "128dc3f7",
                        "chunk-22c3": "13b089a1",
                        "chunk-237a": "bfe15daa",
                        "chunk-238f": "7c220dc0",
                        "chunk-345b": "515609a8",
                        "chunk-b436": "966d0539",
                        "chunk-2ca8": "76713705",
                        "chunk-5b8e": "deb0d35b",
                        "chunk-b2a6": "f1f5b400",
                        "chunk-2452": "3aececdb",
                        "chunk-25e3": "5e1f581e",
                        "chunk-27b5": "cd0b047d",
                        "chunk-3212": "b6caa42d",
                        "chunk-395f": "1fcf3b97",
                        "chunk-39c3": "a835c865",
                        "chunk-39d6": "4cd514d8",
                        "chunk-3bba": "fd6de78e",
                        "chunk-006c": "261eb1c3",
                        "chunk-18a2": "a8a7a03e",
                        "chunk-a12e": "83f72ad3",
                        "chunk-44dc": "283e2e1f",
                        "chunk-34ab": "54f2c7da",
                        "chunk-701f": "a90d9c8d",
                        "chunk-32ec": "1afa1494",
                        "chunk-8e01": "3b0f5977",
                        "chunk-f7ff": "59ccf5e8",
                        "chunk-421e": "6d21af66",
                        "chunk-45a6": "4cbbb944",
                        "chunk-4709": "de7077d4",
                        "chunk-4e4d": "75da2a42",
                        "chunk-4f77": "8d1427a3",
                        "chunk-658b": "ca2e910b",
                        "chunk-65ec": "6a44a96c",
                        "chunk-1cad": "648239e3",
                        "chunk-c327": "7d8871d0",
                        "chunk-6b48": "61748dcd",
                        "chunk-72df": "2536171f",
                        "chunk-f919": "b7704bfd",
                        "chunk-363d": "b7ccffb2",
                        "chunk-5bfc": "632275d6",
                        "chunk-7798": "1a28d5b6",
                        "chunk-7b12": "c6159e68",
                        "chunk-7ebe": "9ab264fe",
                        "chunk-8839": "2bb965a5",
                        "chunk-87d5": "74fad5d5",
                        "chunk-9e0d": "3bbc87f0",
                        "chunk-3fcb": "5709f07e",
                        "chunk-11cb": "266e87f0",
                        "chunk-1c26": "84b470f7",
                        "chunk-2bb3": "9f7c470e",
                        "chunk-6dac": "12c687c2",
                        "chunk-780b": "868460b8",
                        "chunk-fdb5": "8ced5f4f",
                        "chunk-a66f": "a64d78fe",
                        "chunk-01b9": "62888e95",
                        "chunk-55ae": "3442b894",
                        "chunk-6be3": "7031d3fb",
                        "chunk-7eac": "985107bf",
                        "chunk-c33f": "7d3ae166",
                        "chunk-c550": "b0830b77",
                        "chunk-cff0": "5c0fd768",
                        "chunk-commons": "334908f2",
                        MT78: "c636f2f7",
                        "chunk-0ce6": "05a61aed",
                        "chunk-0d6c": "5f61cfa1",
                        "chunk-887d": "506c722b",
                        "chunk-6e7d": "0872bb56",
                        "chunk-ca8d": "5192d57d",
                        "chunk-3cb8": "9ce221c1",
                        "chunk-018f": "e80cde77",
                        "chunk-384b": "21d2cd84",
                        "chunk-08ac": "57d3ff2f",
                        "chunk-0b01": "1e6478ff",
                        "chunk-0c9f": "b8bdbe43",
                        "chunk-c41c": "804cab58",
                        "chunk-112a": "7330f3bc",
                        "chunk-1f10": "db612ff4",
                        "chunk-1f68": "f81f8f2f",
                        "chunk-2a6d": "6cc72efc",
                        "chunk-0548": "2a17d3ca",
                        "chunk-6095": "e51db0e0",
                        "chunk-8a64": "db620438",
                        "chunk-2990": "70a7405a",
                        "chunk-6d50": "fe0d8973",
                        "chunk-3c20": "56b8aef3",
                        "chunk-579c": "d70347b7",
                        "chunk-7c41": "b1a00983",
                        "chunk-3d6d": "0b74b36d",
                        "chunk-3e0b": "d7238e24",
                        "chunk-42ac": "df8d10d1",
                        "chunk-4340": "04ebb5af",
                        "chunk-438e": "30bc7f68",
                        "chunk-4931": "330bc935",
                        "chunk-4d03": "982797ea",
                        "chunk-5074": "f932800d",
                        "chunk-0fa5": "c5c076b8",
                        "chunk-7593": "21c12a66",
                        "chunk-53e4": "b26b3003",
                        "chunk-50f9": "65d66392",
                        "chunk-5770": "1d3d1feb",
                        "chunk-57e1": "d8f9321b",
                        "chunk-5b88": "5f93d2e0",
                        "chunk-3373": "422cb5c5",
                        "chunk-5cda": "830bf53d",
                        "chunk-5e5b": "f915227c",
                        "chunk-5e7a": "796978a7",
                        "chunk-9df9": "b77969e5",
                        "chunk-26a5": "a3c2f46e",
                        "chunk-644c": "c5451a91",
                        "chunk-1595": "6b15e805",
                        "chunk-026d": "620092d1",
                        "chunk-94aa": "b8738d2b",
                        "chunk-d4e5": "b284ab73",
                        "chunk-6890": "c30ca371",
                        "chunk-6b7a": "7f09bf72",
                        "chunk-6f36": "9446905c",
                        "chunk-6ffe": "a9e87a6d",
                        "chunk-7bd9": "8b23816b",
                        "chunk-861c": "68389028",
                        "chunk-5ed1": "7a0d0701",
                        "chunk-70a4": "7d94da39",
                        "chunk-87e6": "9dc6ad71",
                        "chunk-2bb6": "acd7d02e",
                        "chunk-422c": "a13fe35d",
                        "chunk-6231": "c9970aaf",
                        "chunk-c362": "943378fa",
                        "chunk-8def": "d1669cd2",
                        "chunk-8fd7": "d09d5a9d",
                        "chunk-95fe": "01687657",
                        "chunk-a372": "2bfe7e9a",
                        "chunk-c48d": "f41d852f",
                        "chunk-ce73": "5073fe8e",
                        "chunk-1d1d": "64145b7b",
                        "chunk-32c2": "914fa652",
                        "chunk-c19f": "d6dedea9",
                        "chunk-e139": "673e6b60",
                        "chunk-bc52": "cbe55d62",
                        "chunk-c63e": "4df220f9",
                        "chunk-7299": "7051c3db",
                        "chunk-6cea": "69e45cb9",
                        "chunk-2a1e": "5342a374",
                        "chunk-4fe7": "fa2757dc",
                        "chunk-9c09": "66d2f896",
                        "chunk-6887": "cc8ad500"
                    } [c] + ".js"
                }(c);
                var b = new Error;
                a = function(n) {
                    f.onerror = f.onload = null, clearTimeout(t);
                    var u = e[c];
                    if (0 !== u) {
                        if (u) {
                            var h = n && ("load" === n.type ? "missing" : n.type),
                                k = n && n.target && n.target.src;
                            b.message = "Loading chunk " + c + " failed.\n(" + h + ": " + k + ")", b.name = "ChunkLoadError", b.type = h, b.request = k, u[1](b)
                        }
                        e[c] = void 0
                    }
                };
                var t = setTimeout(function() {
                    a({
                        type: "timeout",
                        target: f
                    })
                }, 12e4);
                f.onerror = f.onload = a, document.head.appendChild(f)
            } return Promise.all(n)
    }, d.m = c, d.c = h, d.d = function(c, n, u) {
        d.o(c, n) || Object.defineProperty(c, n, {
            enumerable: !0,
            get: u
        })
    }, d.r = function(c) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(c, "__esModule", {
            value: !0
        })
    }, d.t = function(c, n) {
        if (1 & n && (c = d(c)), 8 & n) return c;
        if (4 & n && "object" == typeof c && c && c.__esModule) return c;
        var u = Object.create(null);
        if (d.r(u), Object.defineProperty(u, "default", {
                enumerable: !0,
                value: c
            }), 2 & n && "string" != typeof c)
            for (var h in c) d.d(u, h, function(n) {
                return c[n]
            }.bind(null, h));
        return u
    }, d.n = function(c) {
        var n = c && c.__esModule ? function() {
            return c.default
        } : function() {
            return c
        };
        return d.d(n, "a", n), n
    }, d.o = function(c, n) {
        return Object.prototype.hasOwnProperty.call(c, n)
    }, d.p = "/", d.oe = function(c) {
        throw c
    };
    var f = window.webpackJsonp = window.webpackJsonp || [],
        b = f.push.bind(f);
    f.push = n, f = f.slice();
    for (var t = 0; t < f.length; t++) n(f[t]);
    var r = b;
    u();
    sign = d;
}(
    {
        MuMZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }),
            n.d(t, "b", function() {
                return a
            });
            var i = n("XBrZ");
            function o(e) {
                var t = i.pki.publicKeyFromPem("-----BEGIN PUBLIC KEY-----\n MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsy4xppPDUT2eAOR5h0cyydzxtKB9O80A\n GjUT6FmDgg6CwelpnE0C2h2JQyP1gCveJs6GDwSDn20RVVpD67f//YPYErjaH/CBOxNG3k5IkW1o\n Qx04uqFNMtWvjzk0aFh2eJLsBi7Ha4elw3WySg00B8oZCL4VBay4ML9kyOAjjCj5jHCX8a2yxIMJ\n IF+EjW3kBR68IMwBvuDL45Qa0oB24vTffaSEs+hGjMTQvoCciOfti3pmEAlVc438/cBgAhK5cIMf\n IMElxYAVvmsDy0I7RCUTrajetKjX94Q+JuQUxnIHNC3IVtYsl1x0lNRtb93IhlRCkZ9djOu350eq\n hZIOXQIDAQAB\n  -----END PUBLIC KEY-----").encrypt(e, "RSA-OAEP", {
                    md: i.md.sha256.create(),
                    mgf1: {
                        md: i.md.sha1.create()
                    }
                });
                return window.btoa(t)
            }
            function a(e) {
                var t = i.md.md5.create();
                return t.update(e),
                t.digest().toHex()
            }
        },
    //其余函数均在chunk-libs.js这个文件里面,直接在头部require就行
    //     XBrZ: function(t, e, r) {
    //         t.exports = r("0ycz"),
    //         r("AGlJ"),
    //         r("2Jrn"),
    //         r("gnJ6"),
    //         r("J+c4"),
    //         r("GQwA"),
    //         r("LPco"),
    //         r("p1tZ"),
    //         r("A8hn"),
    //         r("E5Ee"),
    //         r("e8O8"),
    //         r("XOHF"),
    //         r("RZUv"),
    //         r("GiPW"),
    //         r("satG"),
    //         r("0UiV"),
    //         r("43Zp"),
    //         r("f5dM"),
    //         r("DFIB"),
    //         r("jU3g"),
    //         r("DLcV"),
    //         r("s4A5"),
    //         r("SnOD"),
    //         r("xqgi"),
    //         r("f9LP"),
    //         r("yIUi"),
    //         r("+ywU"),
    //         r("sdTk")
    //     },
    //     "0ycz": function(t, e) {
    //         t.exports = {
    //             options: {
    //                 usePureJavaScript: !1
    //             }
    //         }
    //     },
    //     AGlJ: function(t, e, r) {
    //         var n = r("0ycz");
    //         function i(t, e) {
    //             n.cipher.registerAlgorithm(t, function() {
    //                 return new n.aes.Algorithm(t,e)
    //             })
    //         }
    //         r("J+c4"),
    //         r("pGWr"),
    //         r("sdTk"),
    //         t.exports = n.aes = n.aes || {},
    //         n.aes.startEncrypting = function(t, e, r, n) {
    //             var i = y({
    //                 key: t,
    //                 output: r,
    //                 decrypt: !1,
    //                 mode: n
    //             });
    //             return i.start(e),
    //             i
    //         }
    //         ,
    //         n.aes.createEncryptionCipher = function(t, e) {
    //             return y({
    //                 key: t,
    //                 output: null,
    //                 decrypt: !1,
    //                 mode: e
    //             })
    //         }
    //         ,
    //         n.aes.startDecrypting = function(t, e, r, n) {
    //             var i = y({
    //                 key: t,
    //                 output: r,
    //                 decrypt: !0,
    //                 mode: n
    //             });
    //             return i.start(e),
    //             i
    //         }
    //         ,
    //         n.aes.createDecryptionCipher = function(t, e) {
    //             return y({
    //                 key: t,
    //                 output: null,
    //                 decrypt: !0,
    //                 mode: e
    //             })
    //         }
    //         ,
    //         n.aes.Algorithm = function(t, e) {
    //             f || h();
    //             var r = this;
    //             r.name = t,
    //             r.mode = new e({
    //                 blockSize: 16,
    //                 cipher: {
    //                     encrypt: function(t, e) {
    //                         return d(r._w, t, e, !1)
    //                     },
    //                     decrypt: function(t, e) {
    //                         return d(r._w, t, e, !0)
    //                     }
    //                 }
    //             }),
    //             r._init = !1
    //         }
    //         ,
    //         n.aes.Algorithm.prototype.initialize = function(t) {
    //             if (!this._init) {
    //                 var e, r = t.key;
    //                 if ("string" != typeof r || 16 !== r.length && 24 !== r.length && 32 !== r.length) {
    //                     if (n.util.isArray(r) && (16 === r.length || 24 === r.length || 32 === r.length)) {
    //                         e = r,
    //                         r = n.util.createBuffer();
    //                         for (var i = 0; i < e.length; ++i)
    //                             r.putByte(e[i])
    //                     }
    //                 } else
    //                     r = n.util.createBuffer(r);
    //                 if (!n.util.isArray(r)) {
    //                     e = r,
    //                     r = [];
    //                     var o = e.length();
    //                     if (16 === o || 24 === o || 32 === o) {
    //                         o >>>= 2;
    //                         for (i = 0; i < o; ++i)
    //                             r.push(e.getInt32())
    //                     }
    //                 }
    //                 if (!n.util.isArray(r) || 4 !== r.length && 6 !== r.length && 8 !== r.length)
    //                     throw new Error("Invalid key parameter.");
    //                 var a = this.mode.name
    //                   , s = -1 !== ["CFB", "OFB", "CTR", "GCM"].indexOf(a);
    //                 this._w = p(r, t.decrypt && !s),
    //                 this._init = !0
    //             }
    //         }
    //         ,
    //         n.aes._expandKey = function(t, e) {
    //             return f || h(),
    //             p(t, e)
    //         }
    //         ,
    //         n.aes._updateBlock = d,
    //         i("AES-ECB", n.cipher.modes.ecb),
    //         i("AES-CBC", n.cipher.modes.cbc),
    //         i("AES-CFB", n.cipher.modes.cfb),
    //         i("AES-OFB", n.cipher.modes.ofb),
    //         i("AES-CTR", n.cipher.modes.ctr),
    //         i("AES-GCM", n.cipher.modes.gcm);
    //         var o, a, s, u, c, f = !1, l = 4;
    //         function h() {
    //             f = !0,
    //             s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    //             for (var t = new Array(256), e = 0; e < 128; ++e)
    //                 t[e] = e << 1,
    //                 t[e + 128] = e + 128 << 1 ^ 283;
    //             o = new Array(256),
    //             a = new Array(256),
    //             u = new Array(4),
    //             c = new Array(4);
    //             for (e = 0; e < 4; ++e)
    //                 u[e] = new Array(256),
    //                 c[e] = new Array(256);
    //             var r, n, i, l, h, p, d, y = 0, v = 0;
    //             for (e = 0; e < 256; ++e) {
    //                 l = (l = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4) >> 8 ^ 255 & l ^ 99,
    //                 o[y] = l,
    //                 a[l] = y,
    //                 p = (h = t[l]) << 24 ^ l << 16 ^ l << 8 ^ l ^ h,
    //                 d = ((r = t[y]) ^ (n = t[r]) ^ (i = t[n])) << 24 ^ (y ^ i) << 16 ^ (y ^ n ^ i) << 8 ^ y ^ r ^ i;
    //                 for (var g = 0; g < 4; ++g)
    //                     u[g][y] = p,
    //                     c[g][l] = d,
    //                     p = p << 24 | p >>> 8,
    //                     d = d << 24 | d >>> 8;
    //                 0 === y ? y = v = 1 : (y = r ^ t[t[t[r ^ i]]],
    //                 v ^= t[t[v]])
    //             }
    //         }
    //         function p(t, e) {
    //             for (var r, n = t.slice(0), i = 1, a = n.length, u = l * (a + 6 + 1), f = a; f < u; ++f)
    //                 r = n[f - 1],
    //                 f % a == 0 ? (r = o[r >>> 16 & 255] << 24 ^ o[r >>> 8 & 255] << 16 ^ o[255 & r] << 8 ^ o[r >>> 24] ^ s[i] << 24,
    //                 i++) : a > 6 && f % a == 4 && (r = o[r >>> 24] << 24 ^ o[r >>> 16 & 255] << 16 ^ o[r >>> 8 & 255] << 8 ^ o[255 & r]),
    //                 n[f] = n[f - a] ^ r;
    //             if (e) {
    //                 for (var h, p = c[0], d = c[1], y = c[2], v = c[3], g = n.slice(0), m = (f = 0,
    //                 (u = n.length) - l); f < u; f += l,
    //                 m -= l)
    //                     if (0 === f || f === u - l)
    //                         g[f] = n[m],
    //                         g[f + 1] = n[m + 3],
    //                         g[f + 2] = n[m + 2],
    //                         g[f + 3] = n[m + 1];
    //                     else
    //                         for (var b = 0; b < l; ++b)
    //                             h = n[m + b],
    //                             g[f + (3 & -b)] = p[o[h >>> 24]] ^ d[o[h >>> 16 & 255]] ^ y[o[h >>> 8 & 255]] ^ v[o[255 & h]];
    //                 n = g
    //             }
    //             return n
    //         }
    //         function d(t, e, r, n) {
    //             var i, s, f, l, h, p, d, y, v, g, m, b, E = t.length / 4 - 1;
    //             n ? (i = c[0],
    //             s = c[1],
    //             f = c[2],
    //             l = c[3],
    //             h = a) : (i = u[0],
    //             s = u[1],
    //             f = u[2],
    //             l = u[3],
    //             h = o),
    //             p = e[0] ^ t[0],
    //             d = e[n ? 3 : 1] ^ t[1],
    //             y = e[2] ^ t[2],
    //             v = e[n ? 1 : 3] ^ t[3];
    //             for (var S = 3, _ = 1; _ < E; ++_)
    //                 g = i[p >>> 24] ^ s[d >>> 16 & 255] ^ f[y >>> 8 & 255] ^ l[255 & v] ^ t[++S],
    //                 m = i[d >>> 24] ^ s[y >>> 16 & 255] ^ f[v >>> 8 & 255] ^ l[255 & p] ^ t[++S],
    //                 b = i[y >>> 24] ^ s[v >>> 16 & 255] ^ f[p >>> 8 & 255] ^ l[255 & d] ^ t[++S],
    //                 v = i[v >>> 24] ^ s[p >>> 16 & 255] ^ f[d >>> 8 & 255] ^ l[255 & y] ^ t[++S],
    //                 p = g,
    //                 d = m,
    //                 y = b;
    //             r[0] = h[p >>> 24] << 24 ^ h[d >>> 16 & 255] << 16 ^ h[y >>> 8 & 255] << 8 ^ h[255 & v] ^ t[++S],
    //             r[n ? 3 : 1] = h[d >>> 24] << 24 ^ h[y >>> 16 & 255] << 16 ^ h[v >>> 8 & 255] << 8 ^ h[255 & p] ^ t[++S],
    //             r[2] = h[y >>> 24] << 24 ^ h[v >>> 16 & 255] << 16 ^ h[p >>> 8 & 255] << 8 ^ h[255 & d] ^ t[++S],
    //             r[n ? 1 : 3] = h[v >>> 24] << 24 ^ h[p >>> 16 & 255] << 16 ^ h[d >>> 8 & 255] << 8 ^ h[255 & y] ^ t[++S]
    //         }
    //         function y(t) {
    //             var e, r = "AES-" + ((t = t || {}).mode || "CBC").toUpperCase(), i = (e = t.decrypt ? n.cipher.createDecipher(r, t.key) : n.cipher.createCipher(r, t.key)).start;
    //             return e.start = function(t, r) {
    //                 var o = null;
    //                 r instanceof n.util.ByteBuffer && (o = r,
    //                 r = {}),
    //                 (r = r || {}).output = o,
    //                 r.iv = t,
    //                 i.call(e, r)
    //             }
    //             ,
    //             e
    //         }
    //     },
    //     "J+c4": function(t, e, r) {
    //         var n = r("0ycz");
    //         r("sdTk"),
    //         t.exports = n.cipher = n.cipher || {},
    //         n.cipher.algorithms = n.cipher.algorithms || {},
    //         n.cipher.createCipher = function(t, e) {
    //             var r = t;
    //             if ("string" == typeof r && (r = n.cipher.getAlgorithm(r)) && (r = r()),
    //             !r)
    //                 throw new Error("Unsupported algorithm: " + t);
    //             return new n.cipher.BlockCipher({
    //                 algorithm: r,
    //                 key: e,
    //                 decrypt: !1
    //             })
    //         }
    //         ,
    //         n.cipher.createDecipher = function(t, e) {
    //             var r = t;
    //             if ("string" == typeof r && (r = n.cipher.getAlgorithm(r)) && (r = r()),
    //             !r)
    //                 throw new Error("Unsupported algorithm: " + t);
    //             return new n.cipher.BlockCipher({
    //                 algorithm: r,
    //                 key: e,
    //                 decrypt: !0
    //             })
    //         }
    //         ,
    //         n.cipher.registerAlgorithm = function(t, e) {
    //             t = t.toUpperCase(),
    //             n.cipher.algorithms[t] = e
    //         }
    //         ,
    //         n.cipher.getAlgorithm = function(t) {
    //             return (t = t.toUpperCase())in n.cipher.algorithms ? n.cipher.algorithms[t] : null
    //         }
    //         ;
    //         var i = n.cipher.BlockCipher = function(t) {
    //             this.algorithm = t.algorithm,
    //             this.mode = this.algorithm.mode,
    //             this.blockSize = this.mode.blockSize,
    //             this._finish = !1,
    //             this._input = null,
    //             this.output = null,
    //             this._op = t.decrypt ? this.mode.decrypt : this.mode.encrypt,
    //             this._decrypt = t.decrypt,
    //             this.algorithm.initialize(t)
    //         }
    //         ;
    //         i.prototype.start = function(t) {
    //             t = t || {};
    //             var e = {};
    //             for (var r in t)
    //                 e[r] = t[r];
    //             e.decrypt = this._decrypt,
    //             this._finish = !1,
    //             this._input = n.util.createBuffer(),
    //             this.output = t.output || n.util.createBuffer(),
    //             this.mode.start(e)
    //         }
    //         ,
    //         i.prototype.update = function(t) {
    //             for (t && this._input.putBuffer(t); !this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish; )
    //                 ;
    //             this._input.compact()
    //         }
    //         ,
    //         i.prototype.finish = function(t) {
    //             !t || "ECB" !== this.mode.name && "CBC" !== this.mode.name || (this.mode.pad = function(e) {
    //                 return t(this.blockSize, e, !1)
    //             }
    //             ,
    //             this.mode.unpad = function(e) {
    //                 return t(this.blockSize, e, !0)
    //             }
    //             );
    //             var e = {};
    //             return e.decrypt = this._decrypt,
    //             e.overflow = this._input.length() % this.blockSize,
    //             !(!this._decrypt && this.mode.pad && !this.mode.pad(this._input, e)) && (this._finish = !0,
    //             this.update(),
    //             !(this._decrypt && this.mode.unpad && !this.mode.unpad(this.output, e)) && !(this.mode.afterFinish && !this.mode.afterFinish(this.output, e)))
    //         }
    //     },
    //     sdTk: function(t, e, r) {
    //             (function(e, n, i) {
    //                 var o = r("0ycz")
    //                   , a = r("KJB1")
    //                   , s = t.exports = o.util = o.util || {};
    //                 function u(t) {
    //                     if (8 !== t && 16 !== t && 24 !== t && 32 !== t)
    //                         throw new Error("Only 8, 16, 24, or 32 bits supported: " + t)
    //                 }
    //                 function c(t) {
    //                     if (this.data = "",
    //                     this.read = 0,
    //                     "string" == typeof t)
    //                         this.data = t;
    //                     else if (s.isArrayBuffer(t) || s.isArrayBufferView(t))
    //                         if (void 0 !== i && t instanceof i)
    //                             this.data = t.toString("binary");
    //                         else {
    //                             var e = new Uint8Array(t);
    //                             try {
    //                                 this.data = String.fromCharCode.apply(null, e)
    //                             } catch (t) {
    //                                 for (var r = 0; r < e.length; ++r)
    //                                     this.putByte(e[r])
    //                             }
    //                         }
    //                     else
    //                         (t instanceof c || "object" == typeof t && "string" == typeof t.data && "number" == typeof t.read) && (this.data = t.data,
    //                         this.read = t.read);
    //                     this._constructedStringLength = 0
    //                 }
    //                 !function() {
    //                     if (void 0 !== e && e.nextTick && !e.browser)
    //                         return s.nextTick = e.nextTick,
    //                         void ("function" == typeof setImmediate ? s.setImmediate = setImmediate : s.setImmediate = s.nextTick);
    //                     if ("function" == typeof setImmediate)
    //                         return s.setImmediate = function() {
    //                             return setImmediate.apply(void 0, arguments)
    //                         }
    //                         ,
    //                         void (s.nextTick = function(t) {
    //                             return setImmediate(t)
    //                         }
    //                         );
    //                     if (s.setImmediate = function(t) {
    //                         setTimeout(t, 0)
    //                     }
    //                     ,
    //                     "undefined" != typeof window && "function" == typeof window.postMessage) {
    //                         var t = "forge.setImmediate"
    //                           , r = [];
    //                         s.setImmediate = function(e) {
    //                             r.push(e),
    //                             1 === r.length && window.postMessage(t, "*")
    //                         }
    //                         ,
    //                         window.addEventListener("message", function(e) {
    //                             if (e.source === window && e.data === t) {
    //                                 e.stopPropagation();
    //                                 var n = r.slice();
    //                                 r.length = 0,
    //                                 n.forEach(function(t) {
    //                                     t()
    //                                 })
    //                             }
    //                         }, !0)
    //                     }
    //                     if ("undefined" != typeof MutationObserver) {
    //                         var n = Date.now()
    //                           , i = !0
    //                           , o = document.createElement("div");
    //                         r = [];
    //                         new MutationObserver(function() {
    //                             var t = r.slice();
    //                             r.length = 0,
    //                             t.forEach(function(t) {
    //                                 t()
    //                             })
    //                         }
    //                         ).observe(o, {
    //                             attributes: !0
    //                         });
    //                         var a = s.setImmediate;
    //                         s.setImmediate = function(t) {
    //                             Date.now() - n > 15 ? (n = Date.now(),
    //                             a(t)) : (r.push(t),
    //                             1 === r.length && o.setAttribute("a", i = !i))
    //                         }
    //                     }
    //                     s.nextTick = s.setImmediate
    //                 }(),
    //                 s.isNodejs = void 0 !== e && e.versions && e.versions.node,
    //                 s.globalScope = s.isNodejs ? n : "undefined" == typeof self ? window : self,
    //                 s.isArray = Array.isArray || function(t) {
    //                     return "[object Array]" === Object.prototype.toString.call(t)
    //                 }
    //                 ,
    //                 s.isArrayBuffer = function(t) {
    //                     return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
    //                 }
    //                 ,
    //                 s.isArrayBufferView = function(t) {
    //                     return t && s.isArrayBuffer(t.buffer) && void 0 !== t.byteLength
    //                 }
    //                 ,
    //                 s.ByteBuffer = c,
    //                 s.ByteStringBuffer = c;
    //                 s.ByteStringBuffer.prototype._optimizeConstructedString = function(t) {
    //                     this._constructedStringLength += t,
    //                     this._constructedStringLength > 4096 && (this.data.substr(0, 1),
    //                     this._constructedStringLength = 0)
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.length = function() {
    //                     return this.data.length - this.read
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.isEmpty = function() {
    //                     return this.length() <= 0
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putByte = function(t) {
    //                     return this.putBytes(String.fromCharCode(t))
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.fillWithByte = function(t, e) {
    //                     t = String.fromCharCode(t);
    //                     for (var r = this.data; e > 0; )
    //                         1 & e && (r += t),
    //                         (e >>>= 1) > 0 && (t += t);
    //                     return this.data = r,
    //                     this._optimizeConstructedString(e),
    //                     this
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putBytes = function(t) {
    //                     return this.data += t,
    //                     this._optimizeConstructedString(t.length),
    //                     this
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putString = function(t) {
    //                     return this.putBytes(s.encodeUtf8(t))
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putInt16 = function(t) {
    //                     return this.putBytes(String.fromCharCode(t >> 8 & 255) + String.fromCharCode(255 & t))
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putInt24 = function(t) {
    //                     return this.putBytes(String.fromCharCode(t >> 16 & 255) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(255 & t))
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putInt32 = function(t) {
    //                     return this.putBytes(String.fromCharCode(t >> 24 & 255) + String.fromCharCode(t >> 16 & 255) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(255 & t))
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putInt16Le = function(t) {
    //                     return this.putBytes(String.fromCharCode(255 & t) + String.fromCharCode(t >> 8 & 255))
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putInt24Le = function(t) {
    //                     return this.putBytes(String.fromCharCode(255 & t) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(t >> 16 & 255))
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putInt32Le = function(t) {
    //                     return this.putBytes(String.fromCharCode(255 & t) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(t >> 16 & 255) + String.fromCharCode(t >> 24 & 255))
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putInt = function(t, e) {
    //                     u(e);
    //                     var r = "";
    //                     do {
    //                         e -= 8,
    //                         r += String.fromCharCode(t >> e & 255)
    //                     } while (e > 0);
    //                     return this.putBytes(r)
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putSignedInt = function(t, e) {
    //                     return t < 0 && (t += 2 << e - 1),
    //                     this.putInt(t, e)
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.putBuffer = function(t) {
    //                     return this.putBytes(t.getBytes())
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.getByte = function() {
    //                     return this.data.charCodeAt(this.read++)
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.getInt16 = function() {
    //                     var t = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1);
    //                     return this.read += 2,
    //                     t
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.getInt24 = function() {
    //                     var t = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2);
    //                     return this.read += 3,
    //                     t
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.getInt32 = function() {
    //                     var t = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
    //                     return this.read += 4,
    //                     t
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.getInt16Le = function() {
    //                     var t = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
    //                     return this.read += 2,
    //                     t
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.getInt24Le = function() {
    //                     var t = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16;
    //                     return this.read += 3,
    //                     t
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.getInt32Le = function() {
    //                     var t = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
    //                     return this.read += 4,
    //                     t
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.getInt = function(t) {
    //                     u(t);
    //                     var e = 0;
    //                     do {
    //                         e = (e << 8) + this.data.charCodeAt(this.read++),
    //                         t -= 8
    //                     } while (t > 0);
    //                     return e
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.getSignedInt = function(t) {
    //                     var e = this.getInt(t)
    //                       , r = 2 << t - 2;
    //                     return e >= r && (e -= r << 1),
    //                     e
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.getBytes = function(t) {
    //                     var e;
    //                     return t ? (t = Math.min(this.length(), t),
    //                     e = this.data.slice(this.read, this.read + t),
    //                     this.read += t) : 0 === t ? e = "" : (e = 0 === this.read ? this.data : this.data.slice(this.read),
    //                     this.clear()),
    //                     e
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.bytes = function(t) {
    //                     return void 0 === t ? this.data.slice(this.read) : this.data.slice(this.read, this.read + t)
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.at = function(t) {
    //                     return this.data.charCodeAt(this.read + t)
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.setAt = function(t, e) {
    //                     return this.data = this.data.substr(0, this.read + t) + String.fromCharCode(e) + this.data.substr(this.read + t + 1),
    //                     this
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.last = function() {
    //                     return this.data.charCodeAt(this.data.length - 1)
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.copy = function() {
    //                     var t = s.createBuffer(this.data);
    //                     return t.read = this.read,
    //                     t
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.compact = function() {
    //                     return this.read > 0 && (this.data = this.data.slice(this.read),
    //                     this.read = 0),
    //                     this
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.clear = function() {
    //                     return this.data = "",
    //                     this.read = 0,
    //                     this
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.truncate = function(t) {
    //                     var e = Math.max(0, this.length() - t);
    //                     return this.data = this.data.substr(this.read, e),
    //                     this.read = 0,
    //                     this
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.toHex = function() {
    //                     for (var t = "", e = this.read; e < this.data.length; ++e) {
    //                         var r = this.data.charCodeAt(e);
    //                         r < 16 && (t += "0"),
    //                         t += r.toString(16)
    //                     }
    //                     return t
    //                 }
    //                 ,
    //                 s.ByteStringBuffer.prototype.toString = function() {
    //                     return s.decodeUtf8(this.bytes())
    //                 }
    //                 ,
    //                 s.DataBuffer = function(t, e) {
    //                     e = e || {},
    //                     this.read = e.readOffset || 0,
    //                     this.growSize = e.growSize || 1024;
    //                     var r = s.isArrayBuffer(t)
    //                       , n = s.isArrayBufferView(t);
    //                     if (r || n)
    //                         return this.data = r ? new DataView(t) : new DataView(t.buffer,t.byteOffset,t.byteLength),
    //                         void (this.write = "writeOffset"in e ? e.writeOffset : this.data.byteLength);
    //                     this.data = new DataView(new ArrayBuffer(0)),
    //                     this.write = 0,
    //                     null !== t && void 0 !== t && this.putBytes(t),
    //                     "writeOffset"in e && (this.write = e.writeOffset)
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.length = function() {
    //                     return this.write - this.read
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.isEmpty = function() {
    //                     return this.length() <= 0
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.accommodate = function(t, e) {
    //                     if (this.length() >= t)
    //                         return this;
    //                     e = Math.max(e || this.growSize, t);
    //                     var r = new Uint8Array(this.data.buffer,this.data.byteOffset,this.data.byteLength)
    //                       , n = new Uint8Array(this.length() + e);
    //                     return n.set(r),
    //                     this.data = new DataView(n.buffer),
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putByte = function(t) {
    //                     return this.accommodate(1),
    //                     this.data.setUint8(this.write++, t),
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.fillWithByte = function(t, e) {
    //                     this.accommodate(e);
    //                     for (var r = 0; r < e; ++r)
    //                         this.data.setUint8(t);
    //                     return this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putBytes = function(t, e) {
    //                     if (s.isArrayBufferView(t)) {
    //                         var r = (n = new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).byteLength - n.byteOffset;
    //                         return this.accommodate(r),
    //                         new Uint8Array(this.data.buffer,this.write).set(n),
    //                         this.write += r,
    //                         this
    //                     }
    //                     if (s.isArrayBuffer(t)) {
    //                         var n = new Uint8Array(t);
    //                         return this.accommodate(n.byteLength),
    //                         new Uint8Array(this.data.buffer).set(n, this.write),
    //                         this.write += n.byteLength,
    //                         this
    //                     }
    //                     if (t instanceof s.DataBuffer || "object" == typeof t && "number" == typeof t.read && "number" == typeof t.write && s.isArrayBufferView(t.data)) {
    //                         n = new Uint8Array(t.data.byteLength,t.read,t.length());
    //                         return this.accommodate(n.byteLength),
    //                         new Uint8Array(t.data.byteLength,this.write).set(n),
    //                         this.write += n.byteLength,
    //                         this
    //                     }
    //                     if (t instanceof s.ByteStringBuffer && (t = t.data,
    //                     e = "binary"),
    //                     e = e || "binary",
    //                     "string" == typeof t) {
    //                         var i;
    //                         if ("hex" === e)
    //                             return this.accommodate(Math.ceil(t.length / 2)),
    //                             i = new Uint8Array(this.data.buffer,this.write),
    //                             this.write += s.binary.hex.decode(t, i, this.write),
    //                             this;
    //                         if ("base64" === e)
    //                             return this.accommodate(3 * Math.ceil(t.length / 4)),
    //                             i = new Uint8Array(this.data.buffer,this.write),
    //                             this.write += s.binary.base64.decode(t, i, this.write),
    //                             this;
    //                         if ("utf8" === e && (t = s.encodeUtf8(t),
    //                         e = "binary"),
    //                         "binary" === e || "raw" === e)
    //                             return this.accommodate(t.length),
    //                             i = new Uint8Array(this.data.buffer,this.write),
    //                             this.write += s.binary.raw.decode(i),
    //                             this;
    //                         if ("utf16" === e)
    //                             return this.accommodate(2 * t.length),
    //                             i = new Uint16Array(this.data.buffer,this.write),
    //                             this.write += s.text.utf16.encode(i),
    //                             this;
    //                         throw new Error("Invalid encoding: " + e)
    //                     }
    //                     throw Error("Invalid parameter: " + t)
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putBuffer = function(t) {
    //                     return this.putBytes(t),
    //                     t.clear(),
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putString = function(t) {
    //                     return this.putBytes(t, "utf16")
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putInt16 = function(t) {
    //                     return this.accommodate(2),
    //                     this.data.setInt16(this.write, t),
    //                     this.write += 2,
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putInt24 = function(t) {
    //                     return this.accommodate(3),
    //                     this.data.setInt16(this.write, t >> 8 & 65535),
    //                     this.data.setInt8(this.write, t >> 16 & 255),
    //                     this.write += 3,
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putInt32 = function(t) {
    //                     return this.accommodate(4),
    //                     this.data.setInt32(this.write, t),
    //                     this.write += 4,
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putInt16Le = function(t) {
    //                     return this.accommodate(2),
    //                     this.data.setInt16(this.write, t, !0),
    //                     this.write += 2,
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putInt24Le = function(t) {
    //                     return this.accommodate(3),
    //                     this.data.setInt8(this.write, t >> 16 & 255),
    //                     this.data.setInt16(this.write, t >> 8 & 65535, !0),
    //                     this.write += 3,
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putInt32Le = function(t) {
    //                     return this.accommodate(4),
    //                     this.data.setInt32(this.write, t, !0),
    //                     this.write += 4,
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putInt = function(t, e) {
    //                     u(e),
    //                     this.accommodate(e / 8);
    //                     do {
    //                         e -= 8,
    //                         this.data.setInt8(this.write++, t >> e & 255)
    //                     } while (e > 0);
    //                     return this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.putSignedInt = function(t, e) {
    //                     return u(e),
    //                     this.accommodate(e / 8),
    //                     t < 0 && (t += 2 << e - 1),
    //                     this.putInt(t, e)
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.getByte = function() {
    //                     return this.data.getInt8(this.read++)
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.getInt16 = function() {
    //                     var t = this.data.getInt16(this.read);
    //                     return this.read += 2,
    //                     t
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.getInt24 = function() {
    //                     var t = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2);
    //                     return this.read += 3,
    //                     t
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.getInt32 = function() {
    //                     var t = this.data.getInt32(this.read);
    //                     return this.read += 4,
    //                     t
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.getInt16Le = function() {
    //                     var t = this.data.getInt16(this.read, !0);
    //                     return this.read += 2,
    //                     t
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.getInt24Le = function() {
    //                     var t = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, !0) << 8;
    //                     return this.read += 3,
    //                     t
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.getInt32Le = function() {
    //                     var t = this.data.getInt32(this.read, !0);
    //                     return this.read += 4,
    //                     t
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.getInt = function(t) {
    //                     u(t);
    //                     var e = 0;
    //                     do {
    //                         e = (e << 8) + this.data.getInt8(this.read++),
    //                         t -= 8
    //                     } while (t > 0);
    //                     return e
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.getSignedInt = function(t) {
    //                     var e = this.getInt(t)
    //                       , r = 2 << t - 2;
    //                     return e >= r && (e -= r << 1),
    //                     e
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.getBytes = function(t) {
    //                     var e;
    //                     return t ? (t = Math.min(this.length(), t),
    //                     e = this.data.slice(this.read, this.read + t),
    //                     this.read += t) : 0 === t ? e = "" : (e = 0 === this.read ? this.data : this.data.slice(this.read),
    //                     this.clear()),
    //                     e
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.bytes = function(t) {
    //                     return void 0 === t ? this.data.slice(this.read) : this.data.slice(this.read, this.read + t)
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.at = function(t) {
    //                     return this.data.getUint8(this.read + t)
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.setAt = function(t, e) {
    //                     return this.data.setUint8(t, e),
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.last = function() {
    //                     return this.data.getUint8(this.write - 1)
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.copy = function() {
    //                     return new s.DataBuffer(this)
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.compact = function() {
    //                     if (this.read > 0) {
    //                         var t = new Uint8Array(this.data.buffer,this.read)
    //                           , e = new Uint8Array(t.byteLength);
    //                         e.set(t),
    //                         this.data = new DataView(e),
    //                         this.write -= this.read,
    //                         this.read = 0
    //                     }
    //                     return this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.clear = function() {
    //                     return this.data = new DataView(new ArrayBuffer(0)),
    //                     this.read = this.write = 0,
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.truncate = function(t) {
    //                     return this.write = Math.max(0, this.length() - t),
    //                     this.read = Math.min(this.read, this.write),
    //                     this
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.toHex = function() {
    //                     for (var t = "", e = this.read; e < this.data.byteLength; ++e) {
    //                         var r = this.data.getUint8(e);
    //                         r < 16 && (t += "0"),
    //                         t += r.toString(16)
    //                     }
    //                     return t
    //                 }
    //                 ,
    //                 s.DataBuffer.prototype.toString = function(t) {
    //                     var e = new Uint8Array(this.data,this.read,this.length());
    //                     if ("binary" === (t = t || "utf8") || "raw" === t)
    //                         return s.binary.raw.encode(e);
    //                     if ("hex" === t)
    //                         return s.binary.hex.encode(e);
    //                     if ("base64" === t)
    //                         return s.binary.base64.encode(e);
    //                     if ("utf8" === t)
    //                         return s.text.utf8.decode(e);
    //                     if ("utf16" === t)
    //                         return s.text.utf16.decode(e);
    //                     throw new Error("Invalid encoding: " + t)
    //                 }
    //                 ,
    //                 s.createBuffer = function(t, e) {
    //                     return e = e || "raw",
    //                     void 0 !== t && "utf8" === e && (t = s.encodeUtf8(t)),
    //                     new s.ByteBuffer(t)
    //                 }
    //                 ,
    //                 s.fillString = function(t, e) {
    //                     for (var r = ""; e > 0; )
    //                         1 & e && (r += t),
    //                         (e >>>= 1) > 0 && (t += t);
    //                     return r
    //                 }
    //                 ,
    //                 s.xorBytes = function(t, e, r) {
    //                     for (var n = "", i = "", o = "", a = 0, s = 0; r > 0; --r,
    //                     ++a)
    //                         i = t.charCodeAt(a) ^ e.charCodeAt(a),
    //                         s >= 10 && (n += o,
    //                         o = "",
    //                         s = 0),
    //                         o += String.fromCharCode(i),
    //                         ++s;
    //                     return n += o
    //                 }
    //                 ,
    //                 s.hexToBytes = function(t) {
    //                     var e = ""
    //                       , r = 0;
    //                     for (!0 & t.length && (r = 1,
    //                     e += String.fromCharCode(parseInt(t[0], 16))); r < t.length; r += 2)
    //                         e += String.fromCharCode(parseInt(t.substr(r, 2), 16));
    //                     return e
    //                 }
    //                 ,
    //                 s.bytesToHex = function(t) {
    //                     return s.createBuffer(t).toHex()
    //                 }
    //                 ,
    //                 s.int32ToBytes = function(t) {
    //                     return String.fromCharCode(t >> 24 & 255) + String.fromCharCode(t >> 16 & 255) + String.fromCharCode(t >> 8 & 255) + String.fromCharCode(255 & t)
    //                 }
    //                 ;
    //                 var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    //                   , l = [62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
    //                   , h = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    //                 s.encode64 = function(t, e) {
    //                     for (var r, n, i, o = "", a = "", s = 0; s < t.length; )
    //                         r = t.charCodeAt(s++),
    //                         n = t.charCodeAt(s++),
    //                         i = t.charCodeAt(s++),
    //                         o += f.charAt(r >> 2),
    //                         o += f.charAt((3 & r) << 4 | n >> 4),
    //                         isNaN(n) ? o += "==" : (o += f.charAt((15 & n) << 2 | i >> 6),
    //                         o += isNaN(i) ? "=" : f.charAt(63 & i)),
    //                         e && o.length > e && (a += o.substr(0, e) + "\r\n",
    //                         o = o.substr(e));
    //                     return a += o
    //                 }
    //                 ,
    //                 s.decode64 = function(t) {
    //                     t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    //                     for (var e, r, n, i, o = "", a = 0; a < t.length; )
    //                         e = l[t.charCodeAt(a++) - 43],
    //                         r = l[t.charCodeAt(a++) - 43],
    //                         n = l[t.charCodeAt(a++) - 43],
    //                         i = l[t.charCodeAt(a++) - 43],
    //                         o += String.fromCharCode(e << 2 | r >> 4),
    //                         64 !== n && (o += String.fromCharCode((15 & r) << 4 | n >> 2),
    //                         64 !== i && (o += String.fromCharCode((3 & n) << 6 | i)));
    //                     return o
    //                 }
    //                 ,
    //                 s.encodeUtf8 = function(t) {
    //                     return unescape(encodeURIComponent(t))
    //                 }
    //                 ,
    //                 s.decodeUtf8 = function(t) {
    //                     return decodeURIComponent(escape(t))
    //                 }
    //                 ,
    //                 s.binary = {
    //                     raw: {},
    //                     hex: {},
    //                     base64: {},
    //                     base58: {},
    //                     baseN: {
    //                         encode: a.encode,
    //                         decode: a.decode
    //                     }
    //                 },
    //                 s.binary.raw.encode = function(t) {
    //                     return String.fromCharCode.apply(null, t)
    //                 }
    //                 ,
    //                 s.binary.raw.decode = function(t, e, r) {
    //                     var n = e;
    //                     n || (n = new Uint8Array(t.length));
    //                     for (var i = r = r || 0, o = 0; o < t.length; ++o)
    //                         n[i++] = t.charCodeAt(o);
    //                     return e ? i - r : n
    //                 }
    //                 ,
    //                 s.binary.hex.encode = s.bytesToHex,
    //                 s.binary.hex.decode = function(t, e, r) {
    //                     var n = e;
    //                     n || (n = new Uint8Array(Math.ceil(t.length / 2)));
    //                     var i = 0
    //                       , o = r = r || 0;
    //                     for (1 & t.length && (i = 1,
    //                     n[o++] = parseInt(t[0], 16)); i < t.length; i += 2)
    //                         n[o++] = parseInt(t.substr(i, 2), 16);
    //                     return e ? o - r : n
    //                 }
    //                 ,
    //                 s.binary.base64.encode = function(t, e) {
    //                     for (var r, n, i, o = "", a = "", s = 0; s < t.byteLength; )
    //                         r = t[s++],
    //                         n = t[s++],
    //                         i = t[s++],
    //                         o += f.charAt(r >> 2),
    //                         o += f.charAt((3 & r) << 4 | n >> 4),
    //                         isNaN(n) ? o += "==" : (o += f.charAt((15 & n) << 2 | i >> 6),
    //                         o += isNaN(i) ? "=" : f.charAt(63 & i)),
    //                         e && o.length > e && (a += o.substr(0, e) + "\r\n",
    //                         o = o.substr(e));
    //                     return a += o
    //                 }
    //                 ,
    //                 s.binary.base64.decode = function(t, e, r) {
    //                     var n, i, o, a, s = e;
    //                     s || (s = new Uint8Array(3 * Math.ceil(t.length / 4))),
    //                     t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    //                     for (var u = 0, c = r = r || 0; u < t.length; )
    //                         n = l[t.charCodeAt(u++) - 43],
    //                         i = l[t.charCodeAt(u++) - 43],
    //                         o = l[t.charCodeAt(u++) - 43],
    //                         a = l[t.charCodeAt(u++) - 43],
    //                         s[c++] = n << 2 | i >> 4,
    //                         64 !== o && (s[c++] = (15 & i) << 4 | o >> 2,
    //                         64 !== a && (s[c++] = (3 & o) << 6 | a));
    //                     return e ? c - r : s.subarray(0, c)
    //                 }
    //                 ,
    //                 s.binary.base58.encode = function(t, e) {
    //                     return s.binary.baseN.encode(t, h, e)
    //                 }
    //                 ,
    //                 s.binary.base58.decode = function(t, e) {
    //                     return s.binary.baseN.decode(t, h, e)
    //                 }
    //                 ,
    //                 s.text = {
    //                     utf8: {},
    //                     utf16: {}
    //                 },
    //                 s.text.utf8.encode = function(t, e, r) {
    //                     t = s.encodeUtf8(t);
    //                     var n = e;
    //                     n || (n = new Uint8Array(t.length));
    //                     for (var i = r = r || 0, o = 0; o < t.length; ++o)
    //                         n[i++] = t.charCodeAt(o);
    //                     return e ? i - r : n
    //                 }
    //                 ,
    //                 s.text.utf8.decode = function(t) {
    //                     return s.decodeUtf8(String.fromCharCode.apply(null, t))
    //                 }
    //                 ,
    //                 s.text.utf16.encode = function(t, e, r) {
    //                     var n = e;
    //                     n || (n = new Uint8Array(2 * t.length));
    //                     for (var i = new Uint16Array(n.buffer), o = r = r || 0, a = r, s = 0; s < t.length; ++s)
    //                         i[a++] = t.charCodeAt(s),
    //                         o += 2;
    //                     return e ? o - r : n
    //                 }
    //                 ,
    //                 s.text.utf16.decode = function(t) {
    //                     return String.fromCharCode.apply(null, new Uint16Array(t.buffer))
    //                 }
    //                 ,
    //                 s.deflate = function(t, e, r) {
    //                     if (e = s.decode64(t.deflate(s.encode64(e)).rval),
    //                     r) {
    //                         var n = 2;
    //                         32 & e.charCodeAt(1) && (n = 6),
    //                         e = e.substring(n, e.length - 4)
    //                     }
    //                     return e
    //                 }
    //                 ,
    //                 s.inflate = function(t, e, r) {
    //                     var n = t.inflate(s.encode64(e)).rval;
    //                     return null === n ? null : s.decode64(n)
    //                 }
    //                 ;
    //                 var p = function(t, e, r) {
    //                     if (!t)
    //                         throw new Error("WebStorage not available.");
    //                     var n;
    //                     if (null === r ? n = t.removeItem(e) : (r = s.encode64(JSON.stringify(r)),
    //                     n = t.setItem(e, r)),
    //                     void 0 !== n && !0 !== n.rval) {
    //                         var i = new Error(n.error.message);
    //                         throw i.id = n.error.id,
    //                         i.name = n.error.name,
    //                         i
    //                     }
    //                 }
    //                   , d = function(t, e) {
    //                     if (!t)
    //                         throw new Error("WebStorage not available.");
    //                     var r = t.getItem(e);
    //                     if (t.init)
    //                         if (null === r.rval) {
    //                             if (r.error) {
    //                                 var n = new Error(r.error.message);
    //                                 throw n.id = r.error.id,
    //                                 n.name = r.error.name,
    //                                 n
    //                             }
    //                             r = null
    //                         } else
    //                             r = r.rval;
    //                     return null !== r && (r = JSON.parse(s.decode64(r))),
    //                     r
    //                 }
    //                   , y = function(t, e, r, n) {
    //                     var i = d(t, e);
    //                     null === i && (i = {}),
    //                     i[r] = n,
    //                     p(t, e, i)
    //                 }
    //                   , v = function(t, e, r) {
    //                     var n = d(t, e);
    //                     return null !== n && (n = r in n ? n[r] : null),
    //                     n
    //                 }
    //                   , g = function(t, e, r) {
    //                     var n = d(t, e);
    //                     if (null !== n && r in n) {
    //                         delete n[r];
    //                         var i = !0;
    //                         for (var o in n) {
    //                             i = !1;
    //                             break
    //                         }
    //                         i && (n = null),
    //                         p(t, e, n)
    //                     }
    //                 }
    //                   , m = function(t, e) {
    //                     p(t, e, null)
    //                 }
    //                   , b = function(t, e, r) {
    //                     var n, i = null;
    //                     void 0 === r && (r = ["web", "flash"]);
    //                     var o = !1
    //                       , a = null;
    //                     for (var s in r) {
    //                         n = r[s];
    //                         try {
    //                             if ("flash" === n || "both" === n) {
    //                                 if (null === e[0])
    //                                     throw new Error("Flash local storage not available.");
    //                                 i = t.apply(this, e),
    //                                 o = "flash" === n
    //                             }
    //                             "web" !== n && "both" !== n || (e[0] = localStorage,
    //                             i = t.apply(this, e),
    //                             o = !0)
    //                         } catch (t) {
    //                             a = t
    //                         }
    //                         if (o)
    //                             break
    //                     }
    //                     if (!o)
    //                         throw a;
    //                     return i
    //                 };
    //                 s.setItem = function(t, e, r, n, i) {
    //                     b(y, arguments, i)
    //                 }
    //                 ,
    //                 s.getItem = function(t, e, r, n) {
    //                     return b(v, arguments, n)
    //                 }
    //                 ,
    //                 s.removeItem = function(t, e, r, n) {
    //                     b(g, arguments, n)
    //                 }
    //                 ,
    //                 s.clearItems = function(t, e, r) {
    //                     b(m, arguments, r)
    //                 }
    //                 ,
    //                 s.parseUrl = function(t) {
    //                     var e = /^(https?):\/\/([^:&^\/]*):?(\d*)(.*)$/g;
    //                     e.lastIndex = 0;
    //                     var r = e.exec(t)
    //                       , n = null === r ? null : {
    //                         full: t,
    //                         scheme: r[1],
    //                         host: r[2],
    //                         port: r[3],
    //                         path: r[4]
    //                     };
    //                     return n && (n.fullHost = n.host,
    //                     n.port ? 80 !== n.port && "http" === n.scheme ? n.fullHost += ":" + n.port : 443 !== n.port && "https" === n.scheme && (n.fullHost += ":" + n.port) : "http" === n.scheme ? n.port = 80 : "https" === n.scheme && (n.port = 443),
    //                     n.full = n.scheme + "://" + n.fullHost),
    //                     n
    //                 }
    //                 ;
    //                 var E = null;
    //                 s.getQueryVariables = function(t) {
    //                     var e, r = function(t) {
    //                         for (var e = {}, r = t.split("&"), n = 0; n < r.length; n++) {
    //                             var i, o, a = r[n].indexOf("=");
    //                             a > 0 ? (i = r[n].substring(0, a),
    //                             o = r[n].substring(a + 1)) : (i = r[n],
    //                             o = null),
    //                             i in e || (e[i] = []),
    //                             i in Object.prototype || null === o || e[i].push(unescape(o))
    //                         }
    //                         return e
    //                     };
    //                     return void 0 === t ? (null === E && (E = "undefined" != typeof window && window.location && window.location.search ? r(window.location.search.substring(1)) : {}),
    //                     e = E) : e = r(t),
    //                     e
    //                 }
    //                 ,
    //                 s.parseFragment = function(t) {
    //                     var e = t
    //                       , r = ""
    //                       , n = t.indexOf("?");
    //                     n > 0 && (e = t.substring(0, n),
    //                     r = t.substring(n + 1));
    //                     var i = e.split("/");
    //                     return i.length > 0 && "" === i[0] && i.shift(),
    //                     {
    //                         pathString: e,
    //                         queryString: r,
    //                         path: i,
    //                         query: "" === r ? {} : s.getQueryVariables(r)
    //                     }
    //                 }
    //                 ,
    //                 s.makeRequest = function(t) {
    //                     var e = s.parseFragment(t)
    //                       , r = {
    //                         path: e.pathString,
    //                         query: e.queryString,
    //                         getPath: function(t) {
    //                             return void 0 === t ? e.path : e.path[t]
    //                         },
    //                         getQuery: function(t, r) {
    //                             var n;
    //                             return void 0 === t ? n = e.query : (n = e.query[t]) && void 0 !== r && (n = n[r]),
    //                             n
    //                         },
    //                         getQueryLast: function(t, e) {
    //                             var n = r.getQuery(t);
    //                             return n ? n[n.length - 1] : e
    //                         }
    //                     };
    //                     return r
    //                 }
    //                 ,
    //                 s.makeLink = function(t, e, r) {
    //                     t = jQuery.isArray(t) ? t.join("/") : t;
    //                     var n = jQuery.param(e || {});
    //                     return r = r || "",
    //                     t + (n.length > 0 ? "?" + n : "") + (r.length > 0 ? "#" + r : "")
    //                 }
    //                 ,
    //                 s.isEmpty = function(t) {
    //                     for (var e in t)
    //                         if (t.hasOwnProperty(e))
    //                             return !1;
    //                     return !0
    //                 }
    //                 ,
    //                 s.format = function(t) {
    //                     for (var e, r, n = /%./g, i = 0, o = [], a = 0; e = n.exec(t); ) {
    //                         (r = t.substring(a, n.lastIndex - 2)).length > 0 && o.push(r),
    //                         a = n.lastIndex;
    //                         var s = e[0][1];
    //                         switch (s) {
    //                         case "s":
    //                         case "o":
    //                             i < arguments.length ? o.push(arguments[1 + i++]) : o.push("<?>");
    //                             break;
    //                         case "%":
    //                             o.push("%");
    //                             break;
    //                         default:
    //                             o.push("<%" + s + "?>")
    //                         }
    //                     }
    //                     return o.push(t.substring(a)),
    //                     o.join("")
    //                 }
    //                 ,
    //                 s.formatNumber = function(t, e, r, n) {
    //                     var i = t
    //                       , o = isNaN(e = Math.abs(e)) ? 2 : e
    //                       , a = void 0 === r ? "," : r
    //                       , s = void 0 === n ? "." : n
    //                       , u = i < 0 ? "-" : ""
    //                       , c = parseInt(i = Math.abs(+i || 0).toFixed(o), 10) + ""
    //                       , f = c.length > 3 ? c.length % 3 : 0;
    //                     return u + (f ? c.substr(0, f) + s : "") + c.substr(f).replace(/(\d{3})(?=\d)/g, "$1" + s) + (o ? a + Math.abs(i - c).toFixed(o).slice(2) : "")
    //                 }
    //                 ,
    //                 s.formatSize = function(t) {
    //                     return t = t >= 1073741824 ? s.formatNumber(t / 1073741824, 2, ".", "") + " GiB" : t >= 1048576 ? s.formatNumber(t / 1048576, 2, ".", "") + " MiB" : t >= 1024 ? s.formatNumber(t / 1024, 0) + " KiB" : s.formatNumber(t, 0) + " bytes"
    //                 }
    //                 ,
    //                 s.bytesFromIP = function(t) {
    //                     return -1 !== t.indexOf(".") ? s.bytesFromIPv4(t) : -1 !== t.indexOf(":") ? s.bytesFromIPv6(t) : null
    //                 }
    //                 ,
    //                 s.bytesFromIPv4 = function(t) {
    //                     if (4 !== (t = t.split(".")).length)
    //                         return null;
    //                     for (var e = s.createBuffer(), r = 0; r < t.length; ++r) {
    //                         var n = parseInt(t[r], 10);
    //                         if (isNaN(n))
    //                             return null;
    //                         e.putByte(n)
    //                     }
    //                     return e.getBytes()
    //                 }
    //                 ,
    //                 s.bytesFromIPv6 = function(t) {
    //                     for (var e = 0, r = 2 * (8 - (t = t.split(":").filter(function(t) {
    //                         return 0 === t.length && ++e,
    //                         !0
    //                     })).length + e), n = s.createBuffer(), i = 0; i < 8; ++i)
    //                         if (t[i] && 0 !== t[i].length) {
    //                             var o = s.hexToBytes(t[i]);
    //                             o.length < 2 && n.putByte(0),
    //                             n.putBytes(o)
    //                         } else
    //                             n.fillWithByte(0, r),
    //                             r = 0;
    //                     return n.getBytes()
    //                 }
    //                 ,
    //                 s.bytesToIP = function(t) {
    //                     return 4 === t.length ? s.bytesToIPv4(t) : 16 === t.length ? s.bytesToIPv6(t) : null
    //                 }
    //                 ,
    //                 s.bytesToIPv4 = function(t) {
    //                     if (4 !== t.length)
    //                         return null;
    //                     for (var e = [], r = 0; r < t.length; ++r)
    //                         e.push(t.charCodeAt(r));
    //                     return e.join(".")
    //                 }
    //                 ,
    //                 s.bytesToIPv6 = function(t) {
    //                     if (16 !== t.length)
    //                         return null;
    //                     for (var e = [], r = [], n = 0, i = 0; i < t.length; i += 2) {
    //                         for (var o = s.bytesToHex(t[i] + t[i + 1]); "0" === o[0] && "0" !== o; )
    //                             o = o.substr(1);
    //                         if ("0" === o) {
    //                             var a = r[r.length - 1]
    //                               , u = e.length;
    //                             a && u === a.end + 1 ? (a.end = u,
    //                             a.end - a.start > r[n].end - r[n].start && (n = r.length - 1)) : r.push({
    //                                 start: u,
    //                                 end: u
    //                             })
    //                         }
    //                         e.push(o)
    //                     }
    //                     if (r.length > 0) {
    //                         var c = r[n];
    //                         c.end - c.start > 0 && (e.splice(c.start, c.end - c.start + 1, ""),
    //                         0 === c.start && e.unshift(""),
    //                         7 === c.end && e.push(""))
    //                     }
    //                     return e.join(":")
    //                 }
    //                 ,
    //                 s.estimateCores = function(t, e) {
    //                     if ("function" == typeof t && (e = t,
    //                     t = {}),
    //                     t = t || {},
    //                     "cores"in s && !t.update)
    //                         return e(null, s.cores);
    //                     if ("undefined" != typeof navigator && "hardwareConcurrency"in navigator && navigator.hardwareConcurrency > 0)
    //                         return s.cores = navigator.hardwareConcurrency,
    //                         e(null, s.cores);
    //                     if ("undefined" == typeof Worker)
    //                         return s.cores = 1,
    //                         e(null, s.cores);
    //                     if ("undefined" == typeof Blob)
    //                         return s.cores = 2,
    //                         e(null, s.cores);
    //                     var r = URL.createObjectURL(new Blob(["(", function() {
    //                         self.addEventListener("message", function(t) {
    //                             for (var e = Date.now(), r = e + 4; Date.now() < r; )
    //                                 ;
    //                             self.postMessage({
    //                                 st: e,
    //                                 et: r
    //                             })
    //                         })
    //                     }
    //                     .toString(), ")()"],{
    //                         type: "application/javascript"
    //                     }));
    //                     !function t(n, i, o) {
    //                         if (0 === i) {
    //                             var a = Math.floor(n.reduce(function(t, e) {
    //                                 return t + e
    //                             }, 0) / n.length);
    //                             return s.cores = Math.max(1, a),
    //                             URL.revokeObjectURL(r),
    //                             e(null, s.cores)
    //                         }
    //                         !function(t, e) {
    //                             for (var n = [], i = [], o = 0; o < t; ++o) {
    //                                 var a = new Worker(r);
    //                                 a.addEventListener("message", function(r) {
    //                                     if (i.push(r.data),
    //                                     i.length === t) {
    //                                         for (var o = 0; o < t; ++o)
    //                                             n[o].terminate();
    //                                         e(null, i)
    //                                     }
    //                                 }),
    //                                 n.push(a)
    //                             }
    //                             for (var o = 0; o < t; ++o)
    //                                 n[o].postMessage(o)
    //                         }(o, function(e, r) {
    //                             n.push(function(t, e) {
    //                                 for (var r = [], n = 0; n < t; ++n)
    //                                     for (var i = e[n], o = r[n] = [], a = 0; a < t; ++a)
    //                                         if (n !== a) {
    //                                             var s = e[a];
    //                                             (i.st > s.st && i.st < s.et || s.st > i.st && s.st < i.et) && o.push(a)
    //                                         }
    //                                 return r.reduce(function(t, e) {
    //                                     return Math.max(t, e.length)
    //                                 }, 0)
    //                             }(o, r)),
    //                             t(n, i - 1, o)
    //                         })
    //                     }([], 5, 16)
    //                 }
    //             }
    //             ).call(this, r("8oxB"), r("yLpj"), r("HDXh").Buffer)
    //         },
    //     "8oxB": function(t, e) {
    //     var r, n, i = t.exports = {};
    //     function o() {
    //         throw new Error("setTimeout has not been defined")
    //     }
    //     function a() {
    //         throw new Error("clearTimeout has not been defined")
    //     }
    //     function s(t) {
    //         if (r === setTimeout)
    //             return setTimeout(t, 0);
    //         if ((r === o || !r) && setTimeout)
    //             return r = setTimeout,
    //             setTimeout(t, 0);
    //         try {
    //             return r(t, 0)
    //         } catch (e) {
    //             try {
    //                 return r.call(null, t, 0)
    //             } catch (e) {
    //                 return r.call(this, t, 0)
    //             }
    //         }
    //     }
    //     !function() {
    //         try {
    //             r = "function" == typeof setTimeout ? setTimeout : o
    //         } catch (t) {
    //             r = o
    //         }
    //         try {
    //             n = "function" == typeof clearTimeout ? clearTimeout : a
    //         } catch (t) {
    //             n = a
    //         }
    //     }();
    //     var u, c = [], f = !1, l = -1;
    //     function h() {
    //         f && u && (f = !1,
    //         u.length ? c = u.concat(c) : l = -1,
    //         c.length && p())
    //     }
    //     function p() {
    //         if (!f) {
    //             var t = s(h);
    //             f = !0;
    //             for (var e = c.length; e; ) {
    //                 for (u = c,
    //                 c = []; ++l < e; )
    //                     u && u[l].run();
    //                 l = -1,
    //                 e = c.length
    //             }
    //             u = null,
    //             f = !1,
    //             function(t) {
    //                 if (n === clearTimeout)
    //                     return clearTimeout(t);
    //                 if ((n === a || !n) && clearTimeout)
    //                     return n = clearTimeout,
    //                     clearTimeout(t);
    //                 try {
    //                     n(t)
    //                 } catch (e) {
    //                     try {
    //                         return n.call(null, t)
    //                     } catch (e) {
    //                         return n.call(this, t)
    //                     }
    //                 }
    //             }(t)
    //         }
    //     }
    //     function d(t, e) {
    //         this.fun = t,
    //         this.array = e
    //     }
    //     function y() {}
    //     i.nextTick = function(t) {
    //         var e = new Array(arguments.length - 1);
    //         if (arguments.length > 1)
    //             for (var r = 1; r < arguments.length; r++)
    //                 e[r - 1] = arguments[r];
    //         c.push(new d(t,e)),
    //         1 !== c.length || f || s(p)
    //     }
    //     ,
    //     d.prototype.run = function() {
    //         this.fun.apply(null, this.array)
    //     }
    //     ,
    //     i.title = "browser",
    //     i.browser = !0,
    //     i.env = {},
    //     i.argv = [],
    //     i.version = "",
    //     i.versions = {},
    //     i.on = y,
    //     i.addListener = y,
    //     i.once = y,
    //     i.off = y,
    //     i.removeListener = y,
    //     i.removeAllListeners = y,
    //     i.emit = y,
    //     i.prependListener = y,
    //     i.prependOnceListener = y,
    //     i.listeners = function(t) {
    //         return []
    //     }
    //     ,
    //     i.binding = function(t) {
    //         throw new Error("process.binding is not supported")
    //     }
    //     ,
    //     i.cwd = function() {
    //         return "/"
    //     }
    //     ,
    //     i.chdir = function(t) {
    //         throw new Error("process.chdir is not supported")
    //     }
    //     ,
    //     i.umask = function() {
    //         return 0
    //     }
    // },
    //      yLpj: function(t, e) {
    //         var r;
    //         r = function() {
    //             return this
    //         }();
    //         try {
    //             r = r || new Function("return this")()
    //         } catch (t) {
    //             "object" == typeof window && (r = window)
    //         }
    //         t.exports = r
    //     },
    //     HDXh: function(t, e, r) {
    //     "use strict";
    //     (function(t) {
    //         var n = r("H7XF")
    //           , i = r("kVK+")
    //           , o = r("49sm");
    //         function a() {
    //             return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    //         }
    //         function s(t, e) {
    //             if (a() < e)
    //                 throw new RangeError("Invalid typed array length");
    //             return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)),
    //             t.length = e),
    //             t
    //         }
    //         function u(t, e, r) {
    //             if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
    //                 return new u(t,e,r);
    //             if ("number" == typeof t) {
    //                 if ("string" == typeof e)
    //                     throw new Error("If encoding is specified then the first argument must be a string");
    //                 return l(this, t)
    //             }
    //             return c(this, t, e, r)
    //         }
    //         function c(t, e, r, n) {
    //             if ("number" == typeof e)
    //                 throw new TypeError('"value" argument must not be a number');
    //             return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, n) {
    //                 if (e.byteLength,
    //                 r < 0 || e.byteLength < r)
    //                     throw new RangeError("'offset' is out of bounds");
    //                 if (e.byteLength < r + (n || 0))
    //                     throw new RangeError("'length' is out of bounds");
    //                 e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e,r) : new Uint8Array(e,r,n);
    //                 u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = h(t, e);
    //                 return t
    //             }(t, e, r, n) : "string" == typeof e ? function(t, e, r) {
    //                 "string" == typeof r && "" !== r || (r = "utf8");
    //                 if (!u.isEncoding(r))
    //                     throw new TypeError('"encoding" must be a valid string encoding');
    //                 var n = 0 | d(e, r)
    //                   , i = (t = s(t, n)).write(e, r);
    //                 i !== n && (t = t.slice(0, i));
    //                 return t
    //             }(t, e, r) : function(t, e) {
    //                 if (u.isBuffer(e)) {
    //                     var r = 0 | p(e.length);
    //                     return 0 === (t = s(t, r)).length ? t : (e.copy(t, 0, 0, r),
    //                     t)
    //                 }
    //                 if (e) {
    //                     if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
    //                         return "number" != typeof e.length || (n = e.length) != n ? s(t, 0) : h(t, e);
    //                     if ("Buffer" === e.type && o(e.data))
    //                         return h(t, e.data)
    //                 }
    //                 var n;
    //                 throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
    //             }(t, e)
    //         }
    //         function f(t) {
    //             if ("number" != typeof t)
    //                 throw new TypeError('"size" argument must be a number');
    //             if (t < 0)
    //                 throw new RangeError('"size" argument must not be negative')
    //         }
    //         function l(t, e) {
    //             if (f(e),
    //             t = s(t, e < 0 ? 0 : 0 | p(e)),
    //             !u.TYPED_ARRAY_SUPPORT)
    //                 for (var r = 0; r < e; ++r)
    //                     t[r] = 0;
    //             return t
    //         }
    //         function h(t, e) {
    //             var r = e.length < 0 ? 0 : 0 | p(e.length);
    //             t = s(t, r);
    //             for (var n = 0; n < r; n += 1)
    //                 t[n] = 255 & e[n];
    //             return t
    //         }
    //         function p(t) {
    //             if (t >= a())
    //                 throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
    //             return 0 | t
    //         }
    //         function d(t, e) {
    //             if (u.isBuffer(t))
    //                 return t.length;
    //             if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
    //                 return t.byteLength;
    //             "string" != typeof t && (t = "" + t);
    //             var r = t.length;
    //             if (0 === r)
    //                 return 0;
    //             for (var n = !1; ; )
    //                 switch (e) {
    //                 case "ascii":
    //                 case "latin1":
    //                 case "binary":
    //                     return r;
    //                 case "utf8":
    //                 case "utf-8":
    //                 case void 0:
    //                     return F(t).length;
    //                 case "ucs2":
    //                 case "ucs-2":
    //                 case "utf16le":
    //                 case "utf-16le":
    //                     return 2 * r;
    //                 case "hex":
    //                     return r >>> 1;
    //                 case "base64":
    //                     return V(t).length;
    //                 default:
    //                     if (n)
    //                         return F(t).length;
    //                     e = ("" + e).toLowerCase(),
    //                     n = !0
    //                 }
    //         }
    //         function y(t, e, r) {
    //             var n = t[e];
    //             t[e] = t[r],
    //             t[r] = n
    //         }
    //         function v(t, e, r, n, i) {
    //             if (0 === t.length)
    //                 return -1;
    //             if ("string" == typeof r ? (n = r,
    //             r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
    //             r = +r,
    //             isNaN(r) && (r = i ? 0 : t.length - 1),
    //             r < 0 && (r = t.length + r),
    //             r >= t.length) {
    //                 if (i)
    //                     return -1;
    //                 r = t.length - 1
    //             } else if (r < 0) {
    //                 if (!i)
    //                     return -1;
    //                 r = 0
    //             }
    //             if ("string" == typeof e && (e = u.from(e, n)),
    //             u.isBuffer(e))
    //                 return 0 === e.length ? -1 : g(t, e, r, n, i);
    //             if ("number" == typeof e)
    //                 return e &= 255,
    //                 u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : g(t, [e], r, n, i);
    //             throw new TypeError("val must be string, number or Buffer")
    //         }
    //         function g(t, e, r, n, i) {
    //             var o, a = 1, s = t.length, u = e.length;
    //             if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
    //                 if (t.length < 2 || e.length < 2)
    //                     return -1;
    //                 a = 2,
    //                 s /= 2,
    //                 u /= 2,
    //                 r /= 2
    //             }
    //             function c(t, e) {
    //                 return 1 === a ? t[e] : t.readUInt16BE(e * a)
    //             }
    //             if (i) {
    //                 var f = -1;
    //                 for (o = r; o < s; o++)
    //                     if (c(t, o) === c(e, -1 === f ? 0 : o - f)) {
    //                         if (-1 === f && (f = o),
    //                         o - f + 1 === u)
    //                             return f * a
    //                     } else
    //                         -1 !== f && (o -= o - f),
    //                         f = -1
    //             } else
    //                 for (r + u > s && (r = s - u),
    //                 o = r; o >= 0; o--) {
    //                     for (var l = !0, h = 0; h < u; h++)
    //                         if (c(t, o + h) !== c(e, h)) {
    //                             l = !1;
    //                             break
    //                         }
    //                     if (l)
    //                         return o
    //                 }
    //             return -1
    //         }
    //         function m(t, e, r, n) {
    //             r = Number(r) || 0;
    //             var i = t.length - r;
    //             n ? (n = Number(n)) > i && (n = i) : n = i;
    //             var o = e.length;
    //             if (o % 2 != 0)
    //                 throw new TypeError("Invalid hex string");
    //             n > o / 2 && (n = o / 2);
    //             for (var a = 0; a < n; ++a) {
    //                 var s = parseInt(e.substr(2 * a, 2), 16);
    //                 if (isNaN(s))
    //                     return a;
    //                 t[r + a] = s
    //             }
    //             return a
    //         }
    //         function b(t, e, r, n) {
    //             return K(F(e, t.length - r), t, r, n)
    //         }
    //         function E(t, e, r, n) {
    //             return K(function(t) {
    //                 for (var e = [], r = 0; r < t.length; ++r)
    //                     e.push(255 & t.charCodeAt(r));
    //                 return e
    //             }(e), t, r, n)
    //         }
    //         function S(t, e, r, n) {
    //             return E(t, e, r, n)
    //         }
    //         function _(t, e, r, n) {
    //             return K(V(e), t, r, n)
    //         }
    //         function C(t, e, r, n) {
    //             return K(function(t, e) {
    //                 for (var r, n, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a)
    //                     r = t.charCodeAt(a),
    //                     n = r >> 8,
    //                     i = r % 256,
    //                     o.push(i),
    //                     o.push(n);
    //                 return o
    //             }(e, t.length - r), t, r, n)
    //         }
    //         function w(t, e, r) {
    //             return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
    //         }
    //         function T(t, e, r) {
    //             r = Math.min(t.length, r);
    //             for (var n = [], i = e; i < r; ) {
    //                 var o, a, s, u, c = t[i], f = null, l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
    //                 if (i + l <= r)
    //                     switch (l) {
    //                     case 1:
    //                         c < 128 && (f = c);
    //                         break;
    //                     case 2:
    //                         128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (f = u);
    //                         break;
    //                     case 3:
    //                         o = t[i + 1],
    //                         a = t[i + 2],
    //                         128 == (192 & o) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (f = u);
    //                         break;
    //                     case 4:
    //                         o = t[i + 1],
    //                         a = t[i + 2],
    //                         s = t[i + 3],
    //                         128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (f = u)
    //                     }
    //                 null === f ? (f = 65533,
    //                 l = 1) : f > 65535 && (f -= 65536,
    //                 n.push(f >>> 10 & 1023 | 55296),
    //                 f = 56320 | 1023 & f),
    //                 n.push(f),
    //                 i += l
    //             }
    //             return function(t) {
    //                 var e = t.length;
    //                 if (e <= A)
    //                     return String.fromCharCode.apply(String, t);
    //                 var r = ""
    //                   , n = 0;
    //                 for (; n < e; )
    //                     r += String.fromCharCode.apply(String, t.slice(n, n += A));
    //                 return r
    //             }(n)
    //         }
    //         e.Buffer = u,
    //         e.SlowBuffer = function(t) {
    //             +t != t && (t = 0);
    //             return u.alloc(+t)
    //         }
    //         ,
    //         e.INSPECT_MAX_BYTES = 50,
    //         u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
    //             try {
    //                 var t = new Uint8Array(1);
    //                 return t.__proto__ = {
    //                     __proto__: Uint8Array.prototype,
    //                     foo: function() {
    //                         return 42
    //                     }
    //                 },
    //                 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
    //             } catch (t) {
    //                 return !1
    //             }
    //         }(),
    //         e.kMaxLength = a(),
    //         u.poolSize = 8192,
    //         u._augment = function(t) {
    //             return t.__proto__ = u.prototype,
    //             t
    //         }
    //         ,
    //         u.from = function(t, e, r) {
    //             return c(null, t, e, r)
    //         }
    //         ,
    //         u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype,
    //         u.__proto__ = Uint8Array,
    //         "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
    //             value: null,
    //             configurable: !0
    //         })),
    //         u.alloc = function(t, e, r) {
    //             return function(t, e, r, n) {
    //                 return f(e),
    //                 e <= 0 ? s(t, e) : void 0 !== r ? "string" == typeof n ? s(t, e).fill(r, n) : s(t, e).fill(r) : s(t, e)
    //             }(null, t, e, r)
    //         }
    //         ,
    //         u.allocUnsafe = function(t) {
    //             return l(null, t)
    //         }
    //         ,
    //         u.allocUnsafeSlow = function(t) {
    //             return l(null, t)
    //         }
    //         ,
    //         u.isBuffer = function(t) {
    //             return !(null == t || !t._isBuffer)
    //         }
    //         ,
    //         u.compare = function(t, e) {
    //             if (!u.isBuffer(t) || !u.isBuffer(e))
    //                 throw new TypeError("Arguments must be Buffers");
    //             if (t === e)
    //                 return 0;
    //             for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
    //                 if (t[i] !== e[i]) {
    //                     r = t[i],
    //                     n = e[i];
    //                     break
    //                 }
    //             return r < n ? -1 : n < r ? 1 : 0
    //         }
    //         ,
    //         u.isEncoding = function(t) {
    //             switch (String(t).toLowerCase()) {
    //             case "hex":
    //             case "utf8":
    //             case "utf-8":
    //             case "ascii":
    //             case "latin1":
    //             case "binary":
    //             case "base64":
    //             case "ucs2":
    //             case "ucs-2":
    //             case "utf16le":
    //             case "utf-16le":
    //                 return !0;
    //             default:
    //                 return !1
    //             }
    //         }
    //         ,
    //         u.concat = function(t, e) {
    //             if (!o(t))
    //                 throw new TypeError('"list" argument must be an Array of Buffers');
    //             if (0 === t.length)
    //                 return u.alloc(0);
    //             var r;
    //             if (void 0 === e)
    //                 for (e = 0,
    //                 r = 0; r < t.length; ++r)
    //                     e += t[r].length;
    //             var n = u.allocUnsafe(e)
    //               , i = 0;
    //             for (r = 0; r < t.length; ++r) {
    //                 var a = t[r];
    //                 if (!u.isBuffer(a))
    //                     throw new TypeError('"list" argument must be an Array of Buffers');
    //                 a.copy(n, i),
    //                 i += a.length
    //             }
    //             return n
    //         }
    //         ,
    //         u.byteLength = d,
    //         u.prototype._isBuffer = !0,
    //         u.prototype.swap16 = function() {
    //             var t = this.length;
    //             if (t % 2 != 0)
    //                 throw new RangeError("Buffer size must be a multiple of 16-bits");
    //             for (var e = 0; e < t; e += 2)
    //                 y(this, e, e + 1);
    //             return this
    //         }
    //         ,
    //         u.prototype.swap32 = function() {
    //             var t = this.length;
    //             if (t % 4 != 0)
    //                 throw new RangeError("Buffer size must be a multiple of 32-bits");
    //             for (var e = 0; e < t; e += 4)
    //                 y(this, e, e + 3),
    //                 y(this, e + 1, e + 2);
    //             return this
    //         }
    //         ,
    //         u.prototype.swap64 = function() {
    //             var t = this.length;
    //             if (t % 8 != 0)
    //                 throw new RangeError("Buffer size must be a multiple of 64-bits");
    //             for (var e = 0; e < t; e += 8)
    //                 y(this, e, e + 7),
    //                 y(this, e + 1, e + 6),
    //                 y(this, e + 2, e + 5),
    //                 y(this, e + 3, e + 4);
    //             return this
    //         }
    //         ,
    //         u.prototype.toString = function() {
    //             var t = 0 | this.length;
    //             return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : function(t, e, r) {
    //                 var n = !1;
    //                 if ((void 0 === e || e < 0) && (e = 0),
    //                 e > this.length)
    //                     return "";
    //                 if ((void 0 === r || r > this.length) && (r = this.length),
    //                 r <= 0)
    //                     return "";
    //                 if ((r >>>= 0) <= (e >>>= 0))
    //                     return "";
    //                 for (t || (t = "utf8"); ; )
    //                     switch (t) {
    //                     case "hex":
    //                         return k(this, e, r);
    //                     case "utf8":
    //                     case "utf-8":
    //                         return T(this, e, r);
    //                     case "ascii":
    //                         return I(this, e, r);
    //                     case "latin1":
    //                     case "binary":
    //                         return x(this, e, r);
    //                     case "base64":
    //                         return w(this, e, r);
    //                     case "ucs2":
    //                     case "ucs-2":
    //                     case "utf16le":
    //                     case "utf-16le":
    //                         return O(this, e, r);
    //                     default:
    //                         if (n)
    //                             throw new TypeError("Unknown encoding: " + t);
    //                         t = (t + "").toLowerCase(),
    //                         n = !0
    //                     }
    //             }
    //             .apply(this, arguments)
    //         }
    //         ,
    //         u.prototype.equals = function(t) {
    //             if (!u.isBuffer(t))
    //                 throw new TypeError("Argument must be a Buffer");
    //             return this === t || 0 === u.compare(this, t)
    //         }
    //         ,
    //         u.prototype.inspect = function() {
    //             var t = ""
    //               , r = e.INSPECT_MAX_BYTES;
    //             return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
    //             this.length > r && (t += " ... ")),
    //             "<Buffer " + t + ">"
    //         }
    //         ,
    //         u.prototype.compare = function(t, e, r, n, i) {
    //             if (!u.isBuffer(t))
    //                 throw new TypeError("Argument must be a Buffer");
    //             if (void 0 === e && (e = 0),
    //             void 0 === r && (r = t ? t.length : 0),
    //             void 0 === n && (n = 0),
    //             void 0 === i && (i = this.length),
    //             e < 0 || r > t.length || n < 0 || i > this.length)
    //                 throw new RangeError("out of range index");
    //             if (n >= i && e >= r)
    //                 return 0;
    //             if (n >= i)
    //                 return -1;
    //             if (e >= r)
    //                 return 1;
    //             if (e >>>= 0,
    //             r >>>= 0,
    //             n >>>= 0,
    //             i >>>= 0,
    //             this === t)
    //                 return 0;
    //             for (var o = i - n, a = r - e, s = Math.min(o, a), c = this.slice(n, i), f = t.slice(e, r), l = 0; l < s; ++l)
    //                 if (c[l] !== f[l]) {
    //                     o = c[l],
    //                     a = f[l];
    //                     break
    //                 }
    //             return o < a ? -1 : a < o ? 1 : 0
    //         }
    //         ,
    //         u.prototype.includes = function(t, e, r) {
    //             return -1 !== this.indexOf(t, e, r)
    //         }
    //         ,
    //         u.prototype.indexOf = function(t, e, r) {
    //             return v(this, t, e, r, !0)
    //         }
    //         ,
    //         u.prototype.lastIndexOf = function(t, e, r) {
    //             return v(this, t, e, r, !1)
    //         }
    //         ,
    //         u.prototype.write = function(t, e, r, n) {
    //             if (void 0 === e)
    //                 n = "utf8",
    //                 r = this.length,
    //                 e = 0;
    //             else if (void 0 === r && "string" == typeof e)
    //                 n = e,
    //                 r = this.length,
    //                 e = 0;
    //             else {
    //                 if (!isFinite(e))
    //                     throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    //                 e |= 0,
    //                 isFinite(r) ? (r |= 0,
    //                 void 0 === n && (n = "utf8")) : (n = r,
    //                 r = void 0)
    //             }
    //             var i = this.length - e;
    //             if ((void 0 === r || r > i) && (r = i),
    //             t.length > 0 && (r < 0 || e < 0) || e > this.length)
    //                 throw new RangeError("Attempt to write outside buffer bounds");
    //             n || (n = "utf8");
    //             for (var o = !1; ; )
    //                 switch (n) {
    //                 case "hex":
    //                     return m(this, t, e, r);
    //                 case "utf8":
    //                 case "utf-8":
    //                     return b(this, t, e, r);
    //                 case "ascii":
    //                     return E(this, t, e, r);
    //                 case "latin1":
    //                 case "binary":
    //                     return S(this, t, e, r);
    //                 case "base64":
    //                     return _(this, t, e, r);
    //                 case "ucs2":
    //                 case "ucs-2":
    //                 case "utf16le":
    //                 case "utf-16le":
    //                     return C(this, t, e, r);
    //                 default:
    //                     if (o)
    //                         throw new TypeError("Unknown encoding: " + n);
    //                     n = ("" + n).toLowerCase(),
    //                     o = !0
    //                 }
    //         }
    //         ,
    //         u.prototype.toJSON = function() {
    //             return {
    //                 type: "Buffer",
    //                 data: Array.prototype.slice.call(this._arr || this, 0)
    //             }
    //         }
    //         ;
    //         var A = 4096;
    //         function I(t, e, r) {
    //             var n = "";
    //             r = Math.min(t.length, r);
    //             for (var i = e; i < r; ++i)
    //                 n += String.fromCharCode(127 & t[i]);
    //             return n
    //         }
    //         function x(t, e, r) {
    //             var n = "";
    //             r = Math.min(t.length, r);
    //             for (var i = e; i < r; ++i)
    //                 n += String.fromCharCode(t[i]);
    //             return n
    //         }
    //         function k(t, e, r) {
    //             var n = t.length;
    //             (!e || e < 0) && (e = 0),
    //             (!r || r < 0 || r > n) && (r = n);
    //             for (var i = "", o = e; o < r; ++o)
    //                 i += j(t[o]);
    //             return i
    //         }
    //         function O(t, e, r) {
    //             for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2)
    //                 i += String.fromCharCode(n[o] + 256 * n[o + 1]);
    //             return i
    //         }
    //         function B(t, e, r) {
    //             if (t % 1 != 0 || t < 0)
    //                 throw new RangeError("offset is not uint");
    //             if (t + e > r)
    //                 throw new RangeError("Trying to access beyond buffer length")
    //         }
    //         function N(t, e, r, n, i, o) {
    //             if (!u.isBuffer(t))
    //                 throw new TypeError('"buffer" argument must be a Buffer instance');
    //             if (e > i || e < o)
    //                 throw new RangeError('"value" argument is out of bounds');
    //             if (r + n > t.length)
    //                 throw new RangeError("Index out of range")
    //         }
    //         function R(t, e, r, n) {
    //             e < 0 && (e = 65535 + e + 1);
    //             for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i)
    //                 t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
    //         }
    //         function L(t, e, r, n) {
    //             e < 0 && (e = 4294967295 + e + 1);
    //             for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i)
    //                 t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
    //         }
    //         function D(t, e, r, n, i, o) {
    //             if (r + n > t.length)
    //                 throw new RangeError("Index out of range");
    //             if (r < 0)
    //                 throw new RangeError("Index out of range")
    //         }
    //         function U(t, e, r, n, o) {
    //             return o || D(t, 0, r, 4),
    //             i.write(t, e, r, n, 23, 4),
    //             r + 4
    //         }
    //         function P(t, e, r, n, o) {
    //             return o || D(t, 0, r, 8),
    //             i.write(t, e, r, n, 52, 8),
    //             r + 8
    //         }
    //         u.prototype.slice = function(t, e) {
    //             var r, n = this.length;
    //             if (t = ~~t,
    //             e = void 0 === e ? n : ~~e,
    //             t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
    //             e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
    //             e < t && (e = t),
    //             u.TYPED_ARRAY_SUPPORT)
    //                 (r = this.subarray(t, e)).__proto__ = u.prototype;
    //             else {
    //                 var i = e - t;
    //                 r = new u(i,void 0);
    //                 for (var o = 0; o < i; ++o)
    //                     r[o] = this[o + t]
    //             }
    //             return r
    //         }
    //         ,
    //         u.prototype.readUIntLE = function(t, e, r) {
    //             t |= 0,
    //             e |= 0,
    //             r || B(t, e, this.length);
    //             for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
    //                 n += this[t + o] * i;
    //             return n
    //         }
    //         ,
    //         u.prototype.readUIntBE = function(t, e, r) {
    //             t |= 0,
    //             e |= 0,
    //             r || B(t, e, this.length);
    //             for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
    //                 n += this[t + --e] * i;
    //             return n
    //         }
    //         ,
    //         u.prototype.readUInt8 = function(t, e) {
    //             return e || B(t, 1, this.length),
    //             this[t]
    //         }
    //         ,
    //         u.prototype.readUInt16LE = function(t, e) {
    //             return e || B(t, 2, this.length),
    //             this[t] | this[t + 1] << 8
    //         }
    //         ,
    //         u.prototype.readUInt16BE = function(t, e) {
    //             return e || B(t, 2, this.length),
    //             this[t] << 8 | this[t + 1]
    //         }
    //         ,
    //         u.prototype.readUInt32LE = function(t, e) {
    //             return e || B(t, 4, this.length),
    //             (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
    //         }
    //         ,
    //         u.prototype.readUInt32BE = function(t, e) {
    //             return e || B(t, 4, this.length),
    //             16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    //         }
    //         ,
    //         u.prototype.readIntLE = function(t, e, r) {
    //             t |= 0,
    //             e |= 0,
    //             r || B(t, e, this.length);
    //             for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
    //                 n += this[t + o] * i;
    //             return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)),
    //             n
    //         }
    //         ,
    //         u.prototype.readIntBE = function(t, e, r) {
    //             t |= 0,
    //             e |= 0,
    //             r || B(t, e, this.length);
    //             for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
    //                 o += this[t + --n] * i;
    //             return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)),
    //             o
    //         }
    //         ,
    //         u.prototype.readInt8 = function(t, e) {
    //             return e || B(t, 1, this.length),
    //             128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
    //         }
    //         ,
    //         u.prototype.readInt16LE = function(t, e) {
    //             e || B(t, 2, this.length);
    //             var r = this[t] | this[t + 1] << 8;
    //             return 32768 & r ? 4294901760 | r : r
    //         }
    //         ,
    //         u.prototype.readInt16BE = function(t, e) {
    //             e || B(t, 2, this.length);
    //             var r = this[t + 1] | this[t] << 8;
    //             return 32768 & r ? 4294901760 | r : r
    //         }
    //         ,
    //         u.prototype.readInt32LE = function(t, e) {
    //             return e || B(t, 4, this.length),
    //             this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    //         }
    //         ,
    //         u.prototype.readInt32BE = function(t, e) {
    //             return e || B(t, 4, this.length),
    //             this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    //         }
    //         ,
    //         u.prototype.readFloatLE = function(t, e) {
    //             return e || B(t, 4, this.length),
    //             i.read(this, t, !0, 23, 4)
    //         }
    //         ,
    //         u.prototype.readFloatBE = function(t, e) {
    //             return e || B(t, 4, this.length),
    //             i.read(this, t, !1, 23, 4)
    //         }
    //         ,
    //         u.prototype.readDoubleLE = function(t, e) {
    //             return e || B(t, 8, this.length),
    //             i.read(this, t, !0, 52, 8)
    //         }
    //         ,
    //         u.prototype.readDoubleBE = function(t, e) {
    //             return e || B(t, 8, this.length),
    //             i.read(this, t, !1, 52, 8)
    //         }
    //         ,
    //         u.prototype.writeUIntLE = function(t, e, r, n) {
    //             (t = +t,
    //             e |= 0,
    //             r |= 0,
    //             n) || N(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
    //             var i = 1
    //               , o = 0;
    //             for (this[e] = 255 & t; ++o < r && (i *= 256); )
    //                 this[e + o] = t / i & 255;
    //             return e + r
    //         }
    //         ,
    //         u.prototype.writeUIntBE = function(t, e, r, n) {
    //             (t = +t,
    //             e |= 0,
    //             r |= 0,
    //             n) || N(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
    //             var i = r - 1
    //               , o = 1;
    //             for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
    //                 this[e + i] = t / o & 255;
    //             return e + r
    //         }
    //         ,
    //         u.prototype.writeUInt8 = function(t, e, r) {
    //             return t = +t,
    //             e |= 0,
    //             r || N(this, t, e, 1, 255, 0),
    //             u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
    //             this[e] = 255 & t,
    //             e + 1
    //         }
    //         ,
    //         u.prototype.writeUInt16LE = function(t, e, r) {
    //             return t = +t,
    //             e |= 0,
    //             r || N(this, t, e, 2, 65535, 0),
    //             u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
    //             this[e + 1] = t >>> 8) : R(this, t, e, !0),
    //             e + 2
    //         }
    //         ,
    //         u.prototype.writeUInt16BE = function(t, e, r) {
    //             return t = +t,
    //             e |= 0,
    //             r || N(this, t, e, 2, 65535, 0),
    //             u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
    //             this[e + 1] = 255 & t) : R(this, t, e, !1),
    //             e + 2
    //         }
    //         ,
    //         u.prototype.writeUInt32LE = function(t, e, r) {
    //             return t = +t,
    //             e |= 0,
    //             r || N(this, t, e, 4, 4294967295, 0),
    //             u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
    //             this[e + 2] = t >>> 16,
    //             this[e + 1] = t >>> 8,
    //             this[e] = 255 & t) : L(this, t, e, !0),
    //             e + 4
    //         }
    //         ,
    //         u.prototype.writeUInt32BE = function(t, e, r) {
    //             return t = +t,
    //             e |= 0,
    //             r || N(this, t, e, 4, 4294967295, 0),
    //             u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
    //             this[e + 1] = t >>> 16,
    //             this[e + 2] = t >>> 8,
    //             this[e + 3] = 255 & t) : L(this, t, e, !1),
    //             e + 4
    //         }
    //         ,
    //         u.prototype.writeIntLE = function(t, e, r, n) {
    //             if (t = +t,
    //             e |= 0,
    //             !n) {
    //                 var i = Math.pow(2, 8 * r - 1);
    //                 N(this, t, e, r, i - 1, -i)
    //             }
    //             var o = 0
    //               , a = 1
    //               , s = 0;
    //             for (this[e] = 255 & t; ++o < r && (a *= 256); )
    //                 t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
    //                 this[e + o] = (t / a >> 0) - s & 255;
    //             return e + r
    //         }
    //         ,
    //         u.prototype.writeIntBE = function(t, e, r, n) {
    //             if (t = +t,
    //             e |= 0,
    //             !n) {
    //                 var i = Math.pow(2, 8 * r - 1);
    //                 N(this, t, e, r, i - 1, -i)
    //             }
    //             var o = r - 1
    //               , a = 1
    //               , s = 0;
    //             for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
    //                 t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
    //                 this[e + o] = (t / a >> 0) - s & 255;
    //             return e + r
    //         }
    //         ,
    //         u.prototype.writeInt8 = function(t, e, r) {
    //             return t = +t,
    //             e |= 0,
    //             r || N(this, t, e, 1, 127, -128),
    //             u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
    //             t < 0 && (t = 255 + t + 1),
    //             this[e] = 255 & t,
    //             e + 1
    //         }
    //         ,
    //         u.prototype.writeInt16LE = function(t, e, r) {
    //             return t = +t,
    //             e |= 0,
    //             r || N(this, t, e, 2, 32767, -32768),
    //             u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
    //             this[e + 1] = t >>> 8) : R(this, t, e, !0),
    //             e + 2
    //         }
    //         ,
    //         u.prototype.writeInt16BE = function(t, e, r) {
    //             return t = +t,
    //             e |= 0,
    //             r || N(this, t, e, 2, 32767, -32768),
    //             u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
    //             this[e + 1] = 255 & t) : R(this, t, e, !1),
    //             e + 2
    //         }
    //         ,
    //         u.prototype.writeInt32LE = function(t, e, r) {
    //             return t = +t,
    //             e |= 0,
    //             r || N(this, t, e, 4, 2147483647, -2147483648),
    //             u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
    //             this[e + 1] = t >>> 8,
    //             this[e + 2] = t >>> 16,
    //             this[e + 3] = t >>> 24) : L(this, t, e, !0),
    //             e + 4
    //         }
    //         ,
    //         u.prototype.writeInt32BE = function(t, e, r) {
    //             return t = +t,
    //             e |= 0,
    //             r || N(this, t, e, 4, 2147483647, -2147483648),
    //             t < 0 && (t = 4294967295 + t + 1),
    //             u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
    //             this[e + 1] = t >>> 16,
    //             this[e + 2] = t >>> 8,
    //             this[e + 3] = 255 & t) : L(this, t, e, !1),
    //             e + 4
    //         }
    //         ,
    //         u.prototype.writeFloatLE = function(t, e, r) {
    //             return U(this, t, e, !0, r)
    //         }
    //         ,
    //         u.prototype.writeFloatBE = function(t, e, r) {
    //             return U(this, t, e, !1, r)
    //         }
    //         ,
    //         u.prototype.writeDoubleLE = function(t, e, r) {
    //             return P(this, t, e, !0, r)
    //         }
    //         ,
    //         u.prototype.writeDoubleBE = function(t, e, r) {
    //             return P(this, t, e, !1, r)
    //         }
    //         ,
    //         u.prototype.copy = function(t, e, r, n) {
    //             if (r || (r = 0),
    //             n || 0 === n || (n = this.length),
    //             e >= t.length && (e = t.length),
    //             e || (e = 0),
    //             n > 0 && n < r && (n = r),
    //             n === r)
    //                 return 0;
    //             if (0 === t.length || 0 === this.length)
    //                 return 0;
    //             if (e < 0)
    //                 throw new RangeError("targetStart out of bounds");
    //             if (r < 0 || r >= this.length)
    //                 throw new RangeError("sourceStart out of bounds");
    //             if (n < 0)
    //                 throw new RangeError("sourceEnd out of bounds");
    //             n > this.length && (n = this.length),
    //             t.length - e < n - r && (n = t.length - e + r);
    //             var i, o = n - r;
    //             if (this === t && r < e && e < n)
    //                 for (i = o - 1; i >= 0; --i)
    //                     t[i + e] = this[i + r];
    //             else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
    //                 for (i = 0; i < o; ++i)
    //                     t[i + e] = this[i + r];
    //             else
    //                 Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
    //             return o
    //         }
    //         ,
    //         u.prototype.fill = function(t, e, r, n) {
    //             if ("string" == typeof t) {
    //                 if ("string" == typeof e ? (n = e,
    //                 e = 0,
    //                 r = this.length) : "string" == typeof r && (n = r,
    //                 r = this.length),
    //                 1 === t.length) {
    //                     var i = t.charCodeAt(0);
    //                     i < 256 && (t = i)
    //                 }
    //                 if (void 0 !== n && "string" != typeof n)
    //                     throw new TypeError("encoding must be a string");
    //                 if ("string" == typeof n && !u.isEncoding(n))
    //                     throw new TypeError("Unknown encoding: " + n)
    //             } else
    //                 "number" == typeof t && (t &= 255);
    //             if (e < 0 || this.length < e || this.length < r)
    //                 throw new RangeError("Out of range index");
    //             if (r <= e)
    //                 return this;
    //             var o;
    //             if (e >>>= 0,
    //             r = void 0 === r ? this.length : r >>> 0,
    //             t || (t = 0),
    //             "number" == typeof t)
    //                 for (o = e; o < r; ++o)
    //                     this[o] = t;
    //             else {
    //                 var a = u.isBuffer(t) ? t : F(new u(t,n).toString())
    //                   , s = a.length;
    //                 for (o = 0; o < r - e; ++o)
    //                     this[o + e] = a[o % s]
    //             }
    //             return this
    //         }
    //         ;
    //         var M = /[^+\/0-9A-Za-z-_]/g;
    //         function j(t) {
    //             return t < 16 ? "0" + t.toString(16) : t.toString(16)
    //         }
    //         function F(t, e) {
    //             var r;
    //             e = e || 1 / 0;
    //             for (var n = t.length, i = null, o = [], a = 0; a < n; ++a) {
    //                 if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
    //                     if (!i) {
    //                         if (r > 56319) {
    //                             (e -= 3) > -1 && o.push(239, 191, 189);
    //                             continue
    //                         }
    //                         if (a + 1 === n) {
    //                             (e -= 3) > -1 && o.push(239, 191, 189);
    //                             continue
    //                         }
    //                         i = r;
    //                         continue
    //                     }
    //                     if (r < 56320) {
    //                         (e -= 3) > -1 && o.push(239, 191, 189),
    //                         i = r;
    //                         continue
    //                     }
    //                     r = 65536 + (i - 55296 << 10 | r - 56320)
    //                 } else
    //                     i && (e -= 3) > -1 && o.push(239, 191, 189);
    //                 if (i = null,
    //                 r < 128) {
    //                     if ((e -= 1) < 0)
    //                         break;
    //                     o.push(r)
    //                 } else if (r < 2048) {
    //                     if ((e -= 2) < 0)
    //                         break;
    //                     o.push(r >> 6 | 192, 63 & r | 128)
    //                 } else if (r < 65536) {
    //                     if ((e -= 3) < 0)
    //                         break;
    //                     o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
    //                 } else {
    //                     if (!(r < 1114112))
    //                         throw new Error("Invalid code point");
    //                     if ((e -= 4) < 0)
    //                         break;
    //                     o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
    //                 }
    //             }
    //             return o
    //         }
    //         function V(t) {
    //             return n.toByteArray(function(t) {
    //                 if ((t = function(t) {
    //                     return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    //                 }(t).replace(M, "")).length < 2)
    //                     return "";
    //                 for (; t.length % 4 != 0; )
    //                     t += "=";
    //                 return t
    //             }(t))
    //         }
    //         function K(t, e, r, n) {
    //             for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
    //                 e[i + r] = t[i];
    //             return i
    //         }
    //     }
    //     ).call(this, r("yLpj"))
    // },
    //     H7XF: function(t, e, r) {
    //     "use strict";
    //     e.byteLength = function(t) {
    //         var e = c(t)
    //           , r = e[0]
    //           , n = e[1];
    //         return 3 * (r + n) / 4 - n
    //     }
    //     ,
    //     e.toByteArray = function(t) {
    //         var e, r, n = c(t), a = n[0], s = n[1], u = new o(function(t, e, r) {
    //             return 3 * (e + r) / 4 - r
    //         }(0, a, s)), f = 0, l = s > 0 ? a - 4 : a;
    //         for (r = 0; r < l; r += 4)
    //             e = i[t.charCodeAt(r)] << 18 | i[t.charCodeAt(r + 1)] << 12 | i[t.charCodeAt(r + 2)] << 6 | i[t.charCodeAt(r + 3)],
    //             u[f++] = e >> 16 & 255,
    //             u[f++] = e >> 8 & 255,
    //             u[f++] = 255 & e;
    //         2 === s && (e = i[t.charCodeAt(r)] << 2 | i[t.charCodeAt(r + 1)] >> 4,
    //         u[f++] = 255 & e);
    //         1 === s && (e = i[t.charCodeAt(r)] << 10 | i[t.charCodeAt(r + 1)] << 4 | i[t.charCodeAt(r + 2)] >> 2,
    //         u[f++] = e >> 8 & 255,
    //         u[f++] = 255 & e);
    //         return u
    //     }
    //     ,
    //     e.fromByteArray = function(t) {
    //         for (var e, r = t.length, i = r % 3, o = [], a = 0, s = r - i; a < s; a += 16383)
    //             o.push(f(t, a, a + 16383 > s ? s : a + 16383));
    //         1 === i ? (e = t[r - 1],
    //         o.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1],
    //         o.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
    //         return o.join("")
    //     }
    //     ;
    //     for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s)
    //         n[s] = a[s],
    //         i[a.charCodeAt(s)] = s;
    //     function c(t) {
    //         var e = t.length;
    //         if (e % 4 > 0)
    //             throw new Error("Invalid string. Length must be a multiple of 4");
    //         var r = t.indexOf("=");
    //         return -1 === r && (r = e),
    //         [r, r === e ? 0 : 4 - r % 4]
    //     }
    //     function f(t, e, r) {
    //         for (var i, o, a = [], s = e; s < r; s += 3)
    //             i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]),
    //             a.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
    //         return a.join("")
    //     }
    //     i["-".charCodeAt(0)] = 62,
    //     i["_".charCodeAt(0)] = 63
    // },
    //     "kVK+": function(t, e) {
    //     e.read = function(t, e, r, n, i) {
    //         var o, a, s = 8 * i - n - 1, u = (1 << s) - 1, c = u >> 1, f = -7, l = r ? i - 1 : 0, h = r ? -1 : 1, p = t[e + l];
    //         for (l += h,
    //         o = p & (1 << -f) - 1,
    //         p >>= -f,
    //         f += s; f > 0; o = 256 * o + t[e + l],
    //         l += h,
    //         f -= 8)
    //             ;
    //         for (a = o & (1 << -f) - 1,
    //         o >>= -f,
    //         f += n; f > 0; a = 256 * a + t[e + l],
    //         l += h,
    //         f -= 8)
    //             ;
    //         if (0 === o)
    //             o = 1 - c;
    //         else {
    //             if (o === u)
    //                 return a ? NaN : 1 / 0 * (p ? -1 : 1);
    //             a += Math.pow(2, n),
    //             o -= c
    //         }
    //         return (p ? -1 : 1) * a * Math.pow(2, o - n)
    //     }
    //     ,
    //     e.write = function(t, e, r, n, i, o) {
    //         var a, s, u, c = 8 * o - i - 1, f = (1 << c) - 1, l = f >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : o - 1, d = n ? 1 : -1, y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
    //         for (e = Math.abs(e),
    //         isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0,
    //         a = f) : (a = Math.floor(Math.log(e) / Math.LN2),
    //         e * (u = Math.pow(2, -a)) < 1 && (a--,
    //         u *= 2),
    //         (e += a + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (a++,
    //         u /= 2),
    //         a + l >= f ? (s = 0,
    //         a = f) : a + l >= 1 ? (s = (e * u - 1) * Math.pow(2, i),
    //         a += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, i),
    //         a = 0)); i >= 8; t[r + p] = 255 & s,
    //         p += d,
    //         s /= 256,
    //         i -= 8)
    //             ;
    //         for (a = a << i | s,
    //         c += i; c > 0; t[r + p] = 255 & a,
    //         p += d,
    //         a /= 256,
    //         c -= 8)
    //             ;
    //         t[r + p - d] |= 128 * y
    //     }
    // },
    //     "49sm": function(t, e) {
    //     var r = {}.toString;
    //     t.exports = Array.isArray || function(t) {
    //         return "[object Array]" == r.call(t)
    //     }
    // },
    //     KJB1: function(t, e, r) {
    //     (function(e) {
    //         var r = {};
    //         t.exports = r;
    //         var n = {};
    //         r.encode = function(t, e, r) {
    //             if ("string" != typeof e)
    //                 throw new TypeError('"alphabet" must be a string.');
    //             if (void 0 !== r && "number" != typeof r)
    //                 throw new TypeError('"maxline" must be a number.');
    //             var n = "";
    //             if (t instanceof Uint8Array) {
    //                 var i = 0
    //                   , o = e.length
    //                   , a = e.charAt(0)
    //                   , s = [0];
    //                 for (i = 0; i < t.length; ++i) {
    //                     for (var u = 0, c = t[i]; u < s.length; ++u)
    //                         c += s[u] << 8,
    //                         s[u] = c % o,
    //                         c = c / o | 0;
    //                     for (; c > 0; )
    //                         s.push(c % o),
    //                         c = c / o | 0
    //                 }
    //                 for (i = 0; 0 === t[i] && i < t.length - 1; ++i)
    //                     n += a;
    //                 for (i = s.length - 1; i >= 0; --i)
    //                     n += e[s[i]]
    //             } else
    //                 n = function(t, e) {
    //                     var r = 0
    //                       , n = e.length
    //                       , i = e.charAt(0)
    //                       , o = [0];
    //                     for (r = 0; r < t.length(); ++r) {
    //                         for (var a = 0, s = t.at(r); a < o.length; ++a)
    //                             s += o[a] << 8,
    //                             o[a] = s % n,
    //                             s = s / n | 0;
    //                         for (; s > 0; )
    //                             o.push(s % n),
    //                             s = s / n | 0
    //                     }
    //                     var u = "";
    //                     for (r = 0; 0 === t.at(r) && r < t.length() - 1; ++r)
    //                         u += i;
    //                     for (r = o.length - 1; r >= 0; --r)
    //                         u += e[o[r]];
    //                     return u
    //                 }(t, e);
    //             if (r) {
    //                 var f = new RegExp(".{1," + r + "}","g");
    //                 n = n.match(f).join("\r\n")
    //             }
    //             return n
    //         }
    //         ,
    //         r.decode = function(t, r) {
    //             if ("string" != typeof t)
    //                 throw new TypeError('"input" must be a string.');
    //             if ("string" != typeof r)
    //                 throw new TypeError('"alphabet" must be a string.');
    //             var i = n[r];
    //             if (!i) {
    //                 i = n[r] = [];
    //                 for (var o = 0; o < r.length; ++o)
    //                     i[r.charCodeAt(o)] = o
    //             }
    //             t = t.replace(/\s/g, "");
    //             var a = r.length
    //               , s = r.charAt(0)
    //               , u = [0];
    //             for (o = 0; o < t.length; o++) {
    //                 var c = i[t.charCodeAt(o)];
    //                 if (void 0 === c)
    //                     return;
    //                 for (var f = 0, l = c; f < u.length; ++f)
    //                     l += u[f] * a,
    //                     u[f] = 255 & l,
    //                     l >>= 8;
    //                 for (; l > 0; )
    //                     u.push(255 & l),
    //                     l >>= 8
    //             }
    //             for (var h = 0; t[h] === s && h < t.length - 1; ++h)
    //                 u.push(0);
    //             return void 0 !== e ? e.from(u.reverse()) : new Uint8Array(u.reverse())
    //         }
    //     }
    //     ).call(this, r("HDXh").Buffer)
    // },
    }
);

console.log(sign('MuMZ').a('aabbcc'))

