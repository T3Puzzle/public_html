(()=>{
 function _buffer () {
     let __r = {
        1: [
          function (t, r, e) {
            "use strict";
            (e.byteLength = function (t) {
              var r = h(t),
                e = r[0],
                n = r[1];
              return (3 * (e + n)) / 4 - n;
            }),
              (e.toByteArray = function (t) {
                var r,
                  e,
                  n = h(t),
                  f = n[0],
                  u = n[1],
                  s = new o(
                    (function (t, r, e) {
                      return (3 * (r + e)) / 4 - e;
                    })(0, f, u)
                  ),
                  a = 0,
                  c = u > 0 ? f - 4 : f;
                for (e = 0; e < c; e += 4)
                  (r =
                    (i[t.charCodeAt(e)] << 18) |
                    (i[t.charCodeAt(e + 1)] << 12) |
                    (i[t.charCodeAt(e + 2)] << 6) |
                    i[t.charCodeAt(e + 3)]),
                    (s[a++] = (r >> 16) & 255),
                    (s[a++] = (r >> 8) & 255),
                    (s[a++] = 255 & r);
                2 === u &&
                  ((r =
                    (i[t.charCodeAt(e)] << 2) | (i[t.charCodeAt(e + 1)] >> 4)),
                  (s[a++] = 255 & r));
                1 === u &&
                  ((r =
                    (i[t.charCodeAt(e)] << 10) |
                    (i[t.charCodeAt(e + 1)] << 4) |
                    (i[t.charCodeAt(e + 2)] >> 2)),
                  (s[a++] = (r >> 8) & 255),
                  (s[a++] = 255 & r));
                return s;
              }),
              (e.fromByteArray = function (t) {
                for (
                  var r, e = t.length, i = e % 3, o = [], f = 0, u = e - i;
                  f < u;
                  f += 16383
                )
                  o.push(a(t, f, f + 16383 > u ? u : f + 16383));
                1 === i
                  ? ((r = t[e - 1]),
                    o.push(n[r >> 2] + n[(r << 4) & 63] + "=="))
                  : 2 === i &&
                    ((r = (t[e - 2] << 8) + t[e - 1]),
                    o.push(
                      n[r >> 10] + n[(r >> 4) & 63] + n[(r << 2) & 63] + "="
                    ));
                return o.join("");
              });
            for (
              var n = [],
                i = [],
                o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                f =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                u = 0,
                s = f.length;
              u < s;
              ++u
            )
              (n[u] = f[u]), (i[f.charCodeAt(u)] = u);
            function h(t) {
              var r = t.length;
              if (r % 4 > 0)
                throw new Error(
                  "Invalid string. Length must be a multiple of 4"
                );
              var e = t.indexOf("=");
              return -1 === e && (e = r), [e, e === r ? 0 : 4 - (e % 4)];
            }
            function a(t, r, e) {
              for (var i, o, f = [], u = r; u < e; u += 3)
                (i =
                  ((t[u] << 16) & 16711680) +
                  ((t[u + 1] << 8) & 65280) +
                  (255 & t[u + 2])),
                  f.push(
                    n[((o = i) >> 18) & 63] +
                      n[(o >> 12) & 63] +
                      n[(o >> 6) & 63] +
                      n[63 & o]
                  );
              return f.join("");
            }
            (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
          },
          {}
        ],
        2: [
          function (t, r, e) {
            (function (r) {
              "use strict";
              var n = t("base64-js"),
                i = t("ieee754");
              (e.Buffer = r),
                (e.SlowBuffer = function (t) {
                  +t != t && (t = 0);
                  return r.alloc(+t);
                }),
                (e.INSPECT_MAX_BYTES = 50);
              var o = 2147483647;
              function f(t) {
                if (t > o)
                  throw new RangeError(
                    'The value "' + t + '" is invalid for option "size"'
                  );
                var e = new Uint8Array(t);
                return (e.__proto__ = r.prototype), e;
              }
              function r(t, r, e) {
                if ("number" == typeof t) {
                  if ("string" == typeof r)
                    throw new TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return h(t);
                }
                return u(t, r, e);
              }
              function u(t, e, n) {
                if ("string" == typeof t)
                  return (function (t, e) {
                    ("string" == typeof e && "" !== e) || (e = "utf8");
                    if (!r.isEncoding(e))
                      throw new TypeError("Unknown encoding: " + e);
                    var n = 0 | p(t, e),
                      i = f(n),
                      o = i.write(t, e);
                    o !== n && (i = i.slice(0, o));
                    return i;
                  })(t, e);
                if (ArrayBuffer.isView(t)) return a(t);
                if (null == t)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof t
                  );
                if (j(t, ArrayBuffer) || (t && j(t.buffer, ArrayBuffer)))
                  return (function (t, e, n) {
                    if (e < 0 || t.byteLength < e)
                      throw new RangeError(
                        '"offset" is outside of buffer bounds'
                      );
                    if (t.byteLength < e + (n || 0))
                      throw new RangeError(
                        '"length" is outside of buffer bounds'
                      );
                    var i;
                    i =
                      void 0 === e && void 0 === n
                        ? new Uint8Array(t)
                        : void 0 === n
                        ? new Uint8Array(t, e)
                        : new Uint8Array(t, e, n);
                    return (i.__proto__ = r.prototype), i;
                  })(t, e, n);
                if ("number" == typeof t)
                  throw new TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var i = t.valueOf && t.valueOf();
                if (null != i && i !== t) return r.from(i, e, n);
                var o = (function (t) {
                  if (r.isBuffer(t)) {
                    var e = 0 | c(t.length),
                      n = f(e);
                    return 0 === n.length ? n : (t.copy(n, 0, 0, e), n);
                  }
                  if (void 0 !== t.length)
                    return "number" != typeof t.length || F(t.length)
                      ? f(0)
                      : a(t);
                  if ("Buffer" === t.type && Array.isArray(t.data))
                    return a(t.data);
                })(t);
                if (o) return o;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof t[Symbol.toPrimitive]
                )
                  return r.from(t[Symbol.toPrimitive]("string"), e, n);
                throw new TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof t
                );
              }
              function s(t) {
                if ("number" != typeof t)
                  throw new TypeError('"size" argument must be of type number');
                if (t < 0)
                  throw new RangeError(
                    'The value "' + t + '" is invalid for option "size"'
                  );
              }
              function h(t) {
                return s(t), f(t < 0 ? 0 : 0 | c(t));
              }
              function a(t) {
                for (
                  var r = t.length < 0 ? 0 : 0 | c(t.length), e = f(r), n = 0;
                  n < r;
                  n += 1
                )
                  e[n] = 255 & t[n];
                return e;
              }
              function c(t) {
                if (t >= o)
                  throw new RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x" +
                      o.toString(16) +
                      " bytes"
                  );
                return 0 | t;
              }
              function p(t, e) {
                if (r.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || j(t, ArrayBuffer))
                  return t.byteLength;
                if ("string" != typeof t)
                  throw new TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof t
                  );
                var n = t.length,
                  i = arguments.length > 2 && !0 === arguments[2];
                if (!i && 0 === n) return 0;
                for (var o = !1; ; )
                  switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return n;
                    case "utf8":
                    case "utf-8":
                      return P(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * n;
                    case "hex":
                      return n >>> 1;
                    case "base64":
                      return k(t).length;
                    default:
                      if (o) return i ? -1 : P(t).length;
                      (e = ("" + e).toLowerCase()), (o = !0);
                  }
              }
              function l(t, r, e) {
                var n = t[r];
                (t[r] = t[e]), (t[e] = n);
              }
              function y(t, e, n, i, o) {
                if (0 === t.length) return -1;
                if (
                  ("string" == typeof n
                    ? ((i = n), (n = 0))
                    : n > 2147483647
                    ? (n = 2147483647)
                    : n < -2147483648 && (n = -2147483648),
                  F((n = +n)) && (n = o ? 0 : t.length - 1),
                  n < 0 && (n = t.length + n),
                  n >= t.length)
                ) {
                  if (o) return -1;
                  n = t.length - 1;
                } else if (n < 0) {
                  if (!o) return -1;
                  n = 0;
                }
                if (("string" == typeof e && (e = r.from(e, i)), r.isBuffer(e)))
                  return 0 === e.length ? -1 : g(t, e, n, i, o);
                if ("number" == typeof e)
                  return (
                    (e &= 255),
                    "function" == typeof Uint8Array.prototype.indexOf
                      ? o
                        ? Uint8Array.prototype.indexOf.call(t, e, n)
                        : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                      : g(t, [e], n, i, o)
                  );
                throw new TypeError("val must be string, number or Buffer");
              }
              function g(t, r, e, n, i) {
                var o,
                  f = 1,
                  u = t.length,
                  s = r.length;
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (t.length < 2 || r.length < 2) return -1;
                  (f = 2), (u /= 2), (s /= 2), (e /= 2);
                }
                function h(t, r) {
                  return 1 === f ? t[r] : t.readUInt16BE(r * f);
                }
                if (i) {
                  var a = -1;
                  for (o = e; o < u; o++)
                    if (h(t, o) === h(r, -1 === a ? 0 : o - a)) {
                      if ((-1 === a && (a = o), o - a + 1 === s)) return a * f;
                    } else -1 !== a && (o -= o - a), (a = -1);
                } else
                  for (e + s > u && (e = u - s), o = e; o >= 0; o--) {
                    for (var c = !0, p = 0; p < s; p++)
                      if (h(t, o + p) !== h(r, p)) {
                        c = !1;
                        break;
                      }
                    if (c) return o;
                  }
                return -1;
              }
              function w(t, r, e, n) {
                e = Number(e) || 0;
                var i = t.length - e;
                n ? (n = Number(n)) > i && (n = i) : (n = i);
                var o = r.length;
                n > o / 2 && (n = o / 2);
                for (var f = 0; f < n; ++f) {
                  var u = parseInt(r.substr(2 * f, 2), 16);
                  if (F(u)) return f;
                  t[e + f] = u;
                }
                return f;
              }
              function d(t, r, e, n) {
                return $(P(r, t.length - e), t, e, n);
              }
              function b(t, r, e, n) {
                return $(
                  (function (t) {
                    for (var r = [], e = 0; e < t.length; ++e)
                      r.push(255 & t.charCodeAt(e));
                    return r;
                  })(r),
                  t,
                  e,
                  n
                );
              }
              function m(t, r, e, n) {
                return b(t, r, e, n);
              }
              function E(t, r, e, n) {
                return $(k(r), t, e, n);
              }
              function v(t, r, e, n) {
                return $(
                  (function (t, r) {
                    for (
                      var e, n, i, o = [], f = 0;
                      f < t.length && !((r -= 2) < 0);
                      ++f
                    )
                      (e = t.charCodeAt(f)),
                        (n = e >> 8),
                        (i = e % 256),
                        o.push(i),
                        o.push(n);
                    return o;
                  })(r, t.length - e),
                  t,
                  e,
                  n
                );
              }
              function B(t, r, e) {
                return 0 === r && e === t.length
                  ? n.fromByteArray(t)
                  : n.fromByteArray(t.slice(r, e));
              }
              function A(t, r, e) {
                e = Math.min(t.length, e);
                for (var n = [], i = r; i < e; ) {
                  var o,
                    f,
                    u,
                    s,
                    h = t[i],
                    a = null,
                    c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                  if (i + c <= e)
                    switch (c) {
                      case 1:
                        h < 128 && (a = h);
                        break;
                      case 2:
                        128 == (192 & (o = t[i + 1])) &&
                          (s = ((31 & h) << 6) | (63 & o)) > 127 &&
                          (a = s);
                        break;
                      case 3:
                        (o = t[i + 1]),
                          (f = t[i + 2]),
                          128 == (192 & o) &&
                            128 == (192 & f) &&
                            (s =
                              ((15 & h) << 12) | ((63 & o) << 6) | (63 & f)) >
                              2047 &&
                            (s < 55296 || s > 57343) &&
                            (a = s);
                        break;
                      case 4:
                        (o = t[i + 1]),
                          (f = t[i + 2]),
                          (u = t[i + 3]),
                          128 == (192 & o) &&
                            128 == (192 & f) &&
                            128 == (192 & u) &&
                            (s =
                              ((15 & h) << 18) |
                              ((63 & o) << 12) |
                              ((63 & f) << 6) |
                              (63 & u)) > 65535 &&
                            s < 1114112 &&
                            (a = s);
                    }
                  null === a
                    ? ((a = 65533), (c = 1))
                    : a > 65535 &&
                      ((a -= 65536),
                      n.push(((a >>> 10) & 1023) | 55296),
                      (a = 56320 | (1023 & a))),
                    n.push(a),
                    (i += c);
                }
                return (function (t) {
                  var r = t.length;
                  if (r <= I) return String.fromCharCode.apply(String, t);
                  var e = "",
                    n = 0;
                  for (; n < r; )
                    e += String.fromCharCode.apply(
                      String,
                      t.slice(n, (n += I))
                    );
                  return e;
                })(n);
              }
              (e.kMaxLength = o),
                (r.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        }
                      }),
                      42 === t.foo()
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
                r.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(r.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (r.isBuffer(this)) return this.buffer;
                  }
                }),
                Object.defineProperty(r.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (r.isBuffer(this)) return this.byteOffset;
                  }
                }),
                "undefined" != typeof Symbol &&
                  null != Symbol.species &&
                  r[Symbol.species] === r &&
                  Object.defineProperty(r, Symbol.species, {
                    value: null,
                    configurable: !0,
                    enumerable: !1,
                    writable: !1
                  }),
                (r.poolSize = 8192),
                (r.from = function (t, r, e) {
                  return u(t, r, e);
                }),
                (r.prototype.__proto__ = Uint8Array.prototype),
                (r.__proto__ = Uint8Array),
                (r.alloc = function (t, r, e) {
                  return (function (t, r, e) {
                    return (
                      s(t),
                      t <= 0
                        ? f(t)
                        : void 0 !== r
                        ? "string" == typeof e
                          ? f(t).fill(r, e)
                          : f(t).fill(r)
                        : f(t)
                    );
                  })(t, r, e);
                }),
                (r.allocUnsafe = function (t) {
                  return h(t);
                }),
                (r.allocUnsafeSlow = function (t) {
                  return h(t);
                }),
                (r.isBuffer = function (t) {
                  return null != t && !0 === t._isBuffer && t !== r.prototype;
                }),
                (r.compare = function (t, e) {
                  if (
                    (j(t, Uint8Array) &&
                      (t = r.from(t, t.offset, t.byteLength)),
                    j(e, Uint8Array) && (e = r.from(e, e.offset, e.byteLength)),
                    !r.isBuffer(t) || !r.isBuffer(e))
                  )
                    throw new TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (t === e) return 0;
                  for (
                    var n = t.length, i = e.length, o = 0, f = Math.min(n, i);
                    o < f;
                    ++o
                  )
                    if (t[o] !== e[o]) {
                      (n = t[o]), (i = e[o]);
                      break;
                    }
                  return n < i ? -1 : i < n ? 1 : 0;
                }),
                (r.isEncoding = function (t) {
                  switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (r.concat = function (t, e) {
                  if (!Array.isArray(t))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === t.length) return r.alloc(0);
                  var n;
                  if (void 0 === e)
                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                  var i = r.allocUnsafe(e),
                    o = 0;
                  for (n = 0; n < t.length; ++n) {
                    var f = t[n];
                    if ((j(f, Uint8Array) && (f = r.from(f)), !r.isBuffer(f)))
                      throw new TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    f.copy(i, o), (o += f.length);
                  }
                  return i;
                }),
                (r.byteLength = p),
                (r.prototype._isBuffer = !0),
                (r.prototype.swap16 = function () {
                  var t = this.length;
                  if (t % 2 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var r = 0; r < t; r += 2) l(this, r, r + 1);
                  return this;
                }),
                (r.prototype.swap32 = function () {
                  var t = this.length;
                  if (t % 4 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var r = 0; r < t; r += 4)
                    l(this, r, r + 3), l(this, r + 1, r + 2);
                  return this;
                }),
                (r.prototype.swap64 = function () {
                  var t = this.length;
                  if (t % 8 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var r = 0; r < t; r += 8)
                    l(this, r, r + 7),
                      l(this, r + 1, r + 6),
                      l(this, r + 2, r + 5),
                      l(this, r + 3, r + 4);
                  return this;
                }),
                (r.prototype.toString = function () {
                  var t = this.length;
                  return 0 === t
                    ? ""
                    : 0 === arguments.length
                    ? A(this, 0, t)
                    : function (t, r, e) {
                        var n = !1;
                        if (
                          ((void 0 === r || r < 0) && (r = 0), r > this.length)
                        )
                          return "";
                        if (
                          ((void 0 === e || e > this.length) &&
                            (e = this.length),
                          e <= 0)
                        )
                          return "";
                        if ((e >>>= 0) <= (r >>>= 0)) return "";
                        for (t || (t = "utf8"); ; )
                          switch (t) {
                            case "hex":
                              return T(this, r, e);
                            case "utf8":
                            case "utf-8":
                              return A(this, r, e);
                            case "ascii":
                              return U(this, r, e);
                            case "latin1":
                            case "binary":
                              return R(this, r, e);
                            case "base64":
                              return B(this, r, e);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                              return _(this, r, e);
                            default:
                              if (n)
                                throw new TypeError("Unknown encoding: " + t);
                              (t = (t + "").toLowerCase()), (n = !0);
                          }
                      }.apply(this, arguments);
                }),
                (r.prototype.toLocaleString = r.prototype.toString),
                (r.prototype.equals = function (t) {
                  if (!r.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                  return this === t || 0 === r.compare(this, t);
                }),
                (r.prototype.inspect = function () {
                  var t = "",
                    r = e.INSPECT_MAX_BYTES;
                  return (
                    (t = this.toString("hex", 0, r)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > r && (t += " ... "),
                    "<Buffer " + t + ">"
                  );
                }),
                (r.prototype.compare = function (t, e, n, i, o) {
                  if (
                    (j(t, Uint8Array) &&
                      (t = r.from(t, t.offset, t.byteLength)),
                    !r.isBuffer(t))
                  )
                    throw new TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof t
                    );
                  if (
                    (void 0 === e && (e = 0),
                    void 0 === n && (n = t ? t.length : 0),
                    void 0 === i && (i = 0),
                    void 0 === o && (o = this.length),
                    e < 0 || n > t.length || i < 0 || o > this.length)
                  )
                    throw new RangeError("out of range index");
                  if (i >= o && e >= n) return 0;
                  if (i >= o) return -1;
                  if (e >= n) return 1;
                  if (this === t) return 0;
                  for (
                    var f = (o >>>= 0) - (i >>>= 0),
                      u = (n >>>= 0) - (e >>>= 0),
                      s = Math.min(f, u),
                      h = this.slice(i, o),
                      a = t.slice(e, n),
                      c = 0;
                    c < s;
                    ++c
                  )
                    if (h[c] !== a[c]) {
                      (f = h[c]), (u = a[c]);
                      break;
                    }
                  return f < u ? -1 : u < f ? 1 : 0;
                }),
                (r.prototype.includes = function (t, r, e) {
                  return -1 !== this.indexOf(t, r, e);
                }),
                (r.prototype.indexOf = function (t, r, e) {
                  return y(this, t, r, e, !0);
                }),
                (r.prototype.lastIndexOf = function (t, r, e) {
                  return y(this, t, r, e, !1);
                }),
                (r.prototype.write = function (t, r, e, n) {
                  if (void 0 === r) (n = "utf8"), (e = this.length), (r = 0);
                  else if (void 0 === e && "string" == typeof r)
                    (n = r), (e = this.length), (r = 0);
                  else {
                    if (!isFinite(r))
                      throw new Error(
                        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                      );
                    (r >>>= 0),
                      isFinite(e)
                        ? ((e >>>= 0), void 0 === n && (n = "utf8"))
                        : ((n = e), (e = void 0));
                  }
                  var i = this.length - r;
                  if (
                    ((void 0 === e || e > i) && (e = i),
                    (t.length > 0 && (e < 0 || r < 0)) || r > this.length)
                  )
                    throw new RangeError(
                      "Attempt to write outside buffer bounds"
                    );
                  n || (n = "utf8");
                  for (var o = !1; ; )
                    switch (n) {
                      case "hex":
                        return w(this, t, r, e);
                      case "utf8":
                      case "utf-8":
                        return d(this, t, r, e);
                      case "ascii":
                        return b(this, t, r, e);
                      case "latin1":
                      case "binary":
                        return m(this, t, r, e);
                      case "base64":
                        return E(this, t, r, e);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return v(this, t, r, e);
                      default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        (n = ("" + n).toLowerCase()), (o = !0);
                    }
                }),
                (r.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                  };
                });
              var I = 4096;
              function U(t, r, e) {
                var n = "";
                e = Math.min(t.length, e);
                for (var i = r; i < e; ++i)
                  n += String.fromCharCode(127 & t[i]);
                return n;
              }
              function R(t, r, e) {
                var n = "";
                e = Math.min(t.length, e);
                for (var i = r; i < e; ++i) n += String.fromCharCode(t[i]);
                return n;
              }
              function T(t, r, e) {
                var n = t.length;
                (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
                for (var i = "", o = r; o < e; ++o) i += N(t[o]);
                return i;
              }
              function _(t, r, e) {
                for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2)
                  i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i;
              }
              function L(t, r, e) {
                if (t % 1 != 0 || t < 0)
                  throw new RangeError("offset is not uint");
                if (t + r > e)
                  throw new RangeError("Trying to access beyond buffer length");
              }
              function S(t, e, n, i, o, f) {
                if (!r.isBuffer(t))
                  throw new TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (e > o || e < f)
                  throw new RangeError('"value" argument is out of bounds');
                if (n + i > t.length)
                  throw new RangeError("Index out of range");
              }
              function O(t, r, e, n, i, o) {
                if (e + n > t.length)
                  throw new RangeError("Index out of range");
                if (e < 0) throw new RangeError("Index out of range");
              }
              function C(t, r, e, n, o) {
                return (
                  (r = +r),
                  (e >>>= 0),
                  o || O(t, 0, e, 4),
                  i.write(t, r, e, n, 23, 4),
                  e + 4
                );
              }
              function x(t, r, e, n, o) {
                return (
                  (r = +r),
                  (e >>>= 0),
                  o || O(t, 0, e, 8),
                  i.write(t, r, e, n, 52, 8),
                  e + 8
                );
              }
              (r.prototype.slice = function (t, e) {
                var n = this.length;
                (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                  (e = void 0 === e ? n : ~~e) < 0
                    ? (e += n) < 0 && (e = 0)
                    : e > n && (e = n),
                  e < t && (e = t);
                var i = this.subarray(t, e);
                return (i.__proto__ = r.prototype), i;
              }),
                (r.prototype.readUIntLE = function (t, r, e) {
                  (t >>>= 0), (r >>>= 0), e || L(t, r, this.length);
                  for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); )
                    n += this[t + o] * i;
                  return n;
                }),
                (r.prototype.readUIntBE = function (t, r, e) {
                  (t >>>= 0), (r >>>= 0), e || L(t, r, this.length);
                  for (var n = this[t + --r], i = 1; r > 0 && (i *= 256); )
                    n += this[t + --r] * i;
                  return n;
                }),
                (r.prototype.readUInt8 = function (t, r) {
                  return (t >>>= 0), r || L(t, 1, this.length), this[t];
                }),
                (r.prototype.readUInt16LE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 2, this.length),
                    this[t] | (this[t + 1] << 8)
                  );
                }),
                (r.prototype.readUInt16BE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 2, this.length),
                    (this[t] << 8) | this[t + 1]
                  );
                }),
                (r.prototype.readUInt32LE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 4, this.length),
                    (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                      16777216 * this[t + 3]
                  );
                }),
                (r.prototype.readUInt32BE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 4, this.length),
                    16777216 * this[t] +
                      ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                  );
                }),
                (r.prototype.readIntLE = function (t, r, e) {
                  (t >>>= 0), (r >>>= 0), e || L(t, r, this.length);
                  for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); )
                    n += this[t + o] * i;
                  return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n;
                }),
                (r.prototype.readIntBE = function (t, r, e) {
                  (t >>>= 0), (r >>>= 0), e || L(t, r, this.length);
                  for (
                    var n = r, i = 1, o = this[t + --n];
                    n > 0 && (i *= 256);

                  )
                    o += this[t + --n] * i;
                  return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o;
                }),
                (r.prototype.readInt8 = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 1, this.length),
                    128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                  );
                }),
                (r.prototype.readInt16LE = function (t, r) {
                  (t >>>= 0), r || L(t, 2, this.length);
                  var e = this[t] | (this[t + 1] << 8);
                  return 32768 & e ? 4294901760 | e : e;
                }),
                (r.prototype.readInt16BE = function (t, r) {
                  (t >>>= 0), r || L(t, 2, this.length);
                  var e = this[t + 1] | (this[t] << 8);
                  return 32768 & e ? 4294901760 | e : e;
                }),
                (r.prototype.readInt32LE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 4, this.length),
                    this[t] |
                      (this[t + 1] << 8) |
                      (this[t + 2] << 16) |
                      (this[t + 3] << 24)
                  );
                }),
                (r.prototype.readInt32BE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 4, this.length),
                    (this[t] << 24) |
                      (this[t + 1] << 16) |
                      (this[t + 2] << 8) |
                      this[t + 3]
                  );
                }),
                (r.prototype.readFloatLE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 4, this.length),
                    i.read(this, t, !0, 23, 4)
                  );
                }),
                (r.prototype.readFloatBE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 4, this.length),
                    i.read(this, t, !1, 23, 4)
                  );
                }),
                (r.prototype.readDoubleLE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 8, this.length),
                    i.read(this, t, !0, 52, 8)
                  );
                }),
                (r.prototype.readDoubleBE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || L(t, 8, this.length),
                    i.read(this, t, !1, 52, 8)
                  );
                }),
                (r.prototype.writeUIntLE = function (t, r, e, n) {
                  ((t = +t), (r >>>= 0), (e >>>= 0), n) ||
                    S(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                  var i = 1,
                    o = 0;
                  for (this[r] = 255 & t; ++o < e && (i *= 256); )
                    this[r + o] = (t / i) & 255;
                  return r + e;
                }),
                (r.prototype.writeUIntBE = function (t, r, e, n) {
                  ((t = +t), (r >>>= 0), (e >>>= 0), n) ||
                    S(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                  var i = e - 1,
                    o = 1;
                  for (this[r + i] = 255 & t; --i >= 0 && (o *= 256); )
                    this[r + i] = (t / o) & 255;
                  return r + e;
                }),
                (r.prototype.writeUInt8 = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || S(this, t, r, 1, 255, 0),
                    (this[r] = 255 & t),
                    r + 1
                  );
                }),
                (r.prototype.writeUInt16LE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || S(this, t, r, 2, 65535, 0),
                    (this[r] = 255 & t),
                    (this[r + 1] = t >>> 8),
                    r + 2
                  );
                }),
                (r.prototype.writeUInt16BE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || S(this, t, r, 2, 65535, 0),
                    (this[r] = t >>> 8),
                    (this[r + 1] = 255 & t),
                    r + 2
                  );
                }),
                (r.prototype.writeUInt32LE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || S(this, t, r, 4, 4294967295, 0),
                    (this[r + 3] = t >>> 24),
                    (this[r + 2] = t >>> 16),
                    (this[r + 1] = t >>> 8),
                    (this[r] = 255 & t),
                    r + 4
                  );
                }),
                (r.prototype.writeUInt32BE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || S(this, t, r, 4, 4294967295, 0),
                    (this[r] = t >>> 24),
                    (this[r + 1] = t >>> 16),
                    (this[r + 2] = t >>> 8),
                    (this[r + 3] = 255 & t),
                    r + 4
                  );
                }),
                (r.prototype.writeIntLE = function (t, r, e, n) {
                  if (((t = +t), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * e - 1);
                    S(this, t, r, e, i - 1, -i);
                  }
                  var o = 0,
                    f = 1,
                    u = 0;
                  for (this[r] = 255 & t; ++o < e && (f *= 256); )
                    t < 0 && 0 === u && 0 !== this[r + o - 1] && (u = 1),
                      (this[r + o] = (((t / f) >> 0) - u) & 255);
                  return r + e;
                }),
                (r.prototype.writeIntBE = function (t, r, e, n) {
                  if (((t = +t), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * e - 1);
                    S(this, t, r, e, i - 1, -i);
                  }
                  var o = e - 1,
                    f = 1,
                    u = 0;
                  for (this[r + o] = 255 & t; --o >= 0 && (f *= 256); )
                    t < 0 && 0 === u && 0 !== this[r + o + 1] && (u = 1),
                      (this[r + o] = (((t / f) >> 0) - u) & 255);
                  return r + e;
                }),
                (r.prototype.writeInt8 = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || S(this, t, r, 1, 127, -128),
                    t < 0 && (t = 255 + t + 1),
                    (this[r] = 255 & t),
                    r + 1
                  );
                }),
                (r.prototype.writeInt16LE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || S(this, t, r, 2, 32767, -32768),
                    (this[r] = 255 & t),
                    (this[r + 1] = t >>> 8),
                    r + 2
                  );
                }),
                (r.prototype.writeInt16BE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || S(this, t, r, 2, 32767, -32768),
                    (this[r] = t >>> 8),
                    (this[r + 1] = 255 & t),
                    r + 2
                  );
                }),
                (r.prototype.writeInt32LE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || S(this, t, r, 4, 2147483647, -2147483648),
                    (this[r] = 255 & t),
                    (this[r + 1] = t >>> 8),
                    (this[r + 2] = t >>> 16),
                    (this[r + 3] = t >>> 24),
                    r + 4
                  );
                }),
                (r.prototype.writeInt32BE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || S(this, t, r, 4, 2147483647, -2147483648),
                    t < 0 && (t = 4294967295 + t + 1),
                    (this[r] = t >>> 24),
                    (this[r + 1] = t >>> 16),
                    (this[r + 2] = t >>> 8),
                    (this[r + 3] = 255 & t),
                    r + 4
                  );
                }),
                (r.prototype.writeFloatLE = function (t, r, e) {
                  return C(this, t, r, !0, e);
                }),
                (r.prototype.writeFloatBE = function (t, r, e) {
                  return C(this, t, r, !1, e);
                }),
                (r.prototype.writeDoubleLE = function (t, r, e) {
                  return x(this, t, r, !0, e);
                }),
                (r.prototype.writeDoubleBE = function (t, r, e) {
                  return x(this, t, r, !1, e);
                }),
                (r.prototype.copy = function (t, e, n, i) {
                  if (!r.isBuffer(t))
                    throw new TypeError("argument should be a Buffer");
                  if (
                    (n || (n = 0),
                    i || 0 === i || (i = this.length),
                    e >= t.length && (e = t.length),
                    e || (e = 0),
                    i > 0 && i < n && (i = n),
                    i === n)
                  )
                    return 0;
                  if (0 === t.length || 0 === this.length) return 0;
                  if (e < 0) throw new RangeError("targetStart out of bounds");
                  if (n < 0 || n >= this.length)
                    throw new RangeError("Index out of range");
                  if (i < 0) throw new RangeError("sourceEnd out of bounds");
                  i > this.length && (i = this.length),
                    t.length - e < i - n && (i = t.length - e + n);
                  var o = i - n;
                  if (
                    this === t &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(e, n, i);
                  else if (this === t && n < e && e < i)
                    for (var f = o - 1; f >= 0; --f) t[f + e] = this[f + n];
                  else Uint8Array.prototype.set.call(t, this.subarray(n, i), e);
                  return o;
                }),
                (r.prototype.fill = function (t, e, n, i) {
                  if ("string" == typeof t) {
                    if (
                      ("string" == typeof e
                        ? ((i = e), (e = 0), (n = this.length))
                        : "string" == typeof n && ((i = n), (n = this.length)),
                      void 0 !== i && "string" != typeof i)
                    )
                      throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !r.isEncoding(i))
                      throw new TypeError("Unknown encoding: " + i);
                    if (1 === t.length) {
                      var o = t.charCodeAt(0);
                      (("utf8" === i && o < 128) || "latin1" === i) && (t = o);
                    }
                  } else "number" == typeof t && (t &= 255);
                  if (e < 0 || this.length < e || this.length < n)
                    throw new RangeError("Out of range index");
                  if (n <= e) return this;
                  var f;
                  if (
                    ((e >>>= 0),
                    (n = void 0 === n ? this.length : n >>> 0),
                    t || (t = 0),
                    "number" == typeof t)
                  )
                    for (f = e; f < n; ++f) this[f] = t;
                  else {
                    var u = r.isBuffer(t) ? t : r.from(t, i),
                      s = u.length;
                    if (0 === s)
                      throw new TypeError(
                        'The value "' + t + '" is invalid for argument "value"'
                      );
                    for (f = 0; f < n - e; ++f) this[f + e] = u[f % s];
                  }
                  return this;
                });
              var M = /[^+\/0-9A-Za-z-_]/g;
              function N(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16);
              }
              function P(t, r) {
                var e;
                r = r || 1 / 0;
                for (var n = t.length, i = null, o = [], f = 0; f < n; ++f) {
                  if ((e = t.charCodeAt(f)) > 55295 && e < 57344) {
                    if (!i) {
                      if (e > 56319) {
                        (r -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      if (f + 1 === n) {
                        (r -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      i = e;
                      continue;
                    }
                    if (e < 56320) {
                      (r -= 3) > -1 && o.push(239, 191, 189), (i = e);
                      continue;
                    }
                    e = 65536 + (((i - 55296) << 10) | (e - 56320));
                  } else i && (r -= 3) > -1 && o.push(239, 191, 189);
                  if (((i = null), e < 128)) {
                    if ((r -= 1) < 0) break;
                    o.push(e);
                  } else if (e < 2048) {
                    if ((r -= 2) < 0) break;
                    o.push((e >> 6) | 192, (63 & e) | 128);
                  } else if (e < 65536) {
                    if ((r -= 3) < 0) break;
                    o.push(
                      (e >> 12) | 224,
                      ((e >> 6) & 63) | 128,
                      (63 & e) | 128
                    );
                  } else {
                    if (!(e < 1114112)) throw new Error("Invalid code point");
                    if ((r -= 4) < 0) break;
                    o.push(
                      (e >> 18) | 240,
                      ((e >> 12) & 63) | 128,
                      ((e >> 6) & 63) | 128,
                      (63 & e) | 128
                    );
                  }
                }
                return o;
              }
              function k(t) {
                return n.toByteArray(
                  (function (t) {
                    if (
                      (t = (t = t.split("=")[0]).trim().replace(M, "")).length <
                      2
                    )
                      return "";
                    for (; t.length % 4 != 0; ) t += "=";
                    return t;
                  })(t)
                );
              }
              function $(t, r, e, n) {
                for (
                  var i = 0;
                  i < n && !(i + e >= r.length || i >= t.length);
                  ++i
                )
                  r[i + e] = t[i];
                return i;
              }
              function j(t, r) {
                return (
                  t instanceof r ||
                  (null != t &&
                    null != t.constructor &&
                    null != t.constructor.name &&
                    t.constructor.name === r.name)
                );
              }
              function F(t) {
                return t != t;
              }
            }.call(this, t("buffer").Buffer));
          },
          { "base64-js": 1, buffer: 2, ieee754: 3 }
        ],
        3: [
          function (t, r, e) {
            (e.read = function (t, r, e, n, i) {
              var o,
                f,
                u = 8 * i - n - 1,
                s = (1 << u) - 1,
                h = s >> 1,
                a = -7,
                c = e ? i - 1 : 0,
                p = e ? -1 : 1,
                l = t[r + c];
              for (
                c += p, o = l & ((1 << -a) - 1), l >>= -a, a += u;
                a > 0;
                o = 256 * o + t[r + c], c += p, a -= 8
              );
              for (
                f = o & ((1 << -a) - 1), o >>= -a, a += n;
                a > 0;
                f = 256 * f + t[r + c], c += p, a -= 8
              );
              if (0 === o) o = 1 - h;
              else {
                if (o === s) return f ? NaN : (1 / 0) * (l ? -1 : 1);
                (f += Math.pow(2, n)), (o -= h);
              }
              return (l ? -1 : 1) * f * Math.pow(2, o - n);
            }),
              (e.write = function (t, r, e, n, i, o) {
                var f,
                  u,
                  s,
                  h = 8 * o - i - 1,
                  a = (1 << h) - 1,
                  c = a >> 1,
                  p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                  l = n ? 0 : o - 1,
                  y = n ? 1 : -1,
                  g = r < 0 || (0 === r && 1 / r < 0) ? 1 : 0;
                for (
                  r = Math.abs(r),
                    isNaN(r) || r === 1 / 0
                      ? ((u = isNaN(r) ? 1 : 0), (f = a))
                      : ((f = Math.floor(Math.log(r) / Math.LN2)),
                        r * (s = Math.pow(2, -f)) < 1 && (f--, (s *= 2)),
                        (r += f + c >= 1 ? p / s : p * Math.pow(2, 1 - c)) *
                          s >=
                          2 && (f++, (s /= 2)),
                        f + c >= a
                          ? ((u = 0), (f = a))
                          : f + c >= 1
                          ? ((u = (r * s - 1) * Math.pow(2, i)), (f += c))
                          : ((u = r * Math.pow(2, c - 1) * Math.pow(2, i)),
                            (f = 0)));
                  i >= 8;
                  t[e + l] = 255 & u, l += y, u /= 256, i -= 8
                );
                for (
                  f = (f << i) | u, h += i;
                  h > 0;
                  t[e + l] = 255 & f, l += y, f /= 256, h -= 8
                );
                t[e + l - y] |= 128 * g;
              });
          },
          {}
        ],
        4: [
          function (t, r, e) {
            (function (r) {
              "use strict";
              const n = t("base64-js"),
                i = t("ieee754"),
                o =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              (e.Buffer = r),
                (e.SlowBuffer = function (t) {
                  +t != t && (t = 0);
                  return r.alloc(+t);
                }),
                (e.INSPECT_MAX_BYTES = 50);
              const f = 2147483647;
              function u(t) {
                if (t > f)
                  throw new RangeError(
                    'The value "' + t + '" is invalid for option "size"'
                  );
                const e = new Uint8Array(t);
                return Object.setPrototypeOf(e, r.prototype), e;
              }
              function r(t, r, e) {
                if ("number" == typeof t) {
                  if ("string" == typeof r)
                    throw new TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return a(t);
                }
                return s(t, r, e);
              }
              function s(t, e, n) {
                if ("string" == typeof t)
                  return (function (t, e) {
                    ("string" == typeof e && "" !== e) || (e = "utf8");
                    if (!r.isEncoding(e))
                      throw new TypeError("Unknown encoding: " + e);
                    const n = 0 | y(t, e);
                    let i = u(n);
                    const o = i.write(t, e);
                    o !== n && (i = i.slice(0, o));
                    return i;
                  })(t, e);
                if (ArrayBuffer.isView(t))
                  return (function (t) {
                    if (W(t, Uint8Array)) {
                      const r = new Uint8Array(t);
                      return p(r.buffer, r.byteOffset, r.byteLength);
                    }
                    return c(t);
                  })(t);
                if (null == t)
                  throw new TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof t
                  );
                if (W(t, ArrayBuffer) || (t && W(t.buffer, ArrayBuffer)))
                  return p(t, e, n);
                if (
                  "undefined" != typeof SharedArrayBuffer &&
                  (W(t, SharedArrayBuffer) ||
                    (t && W(t.buffer, SharedArrayBuffer)))
                )
                  return p(t, e, n);
                if ("number" == typeof t)
                  throw new TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                const i = t.valueOf && t.valueOf();
                if (null != i && i !== t) return r.from(i, e, n);
                const o = (function (t) {
                  if (r.isBuffer(t)) {
                    const r = 0 | l(t.length),
                      e = u(r);
                    return 0 === e.length ? e : (t.copy(e, 0, 0, r), e);
                  }
                  if (void 0 !== t.length)
                    return "number" != typeof t.length || X(t.length)
                      ? u(0)
                      : c(t);
                  if ("Buffer" === t.type && Array.isArray(t.data))
                    return c(t.data);
                })(t);
                if (o) return o;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof t[Symbol.toPrimitive]
                )
                  return r.from(t[Symbol.toPrimitive]("string"), e, n);
                throw new TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof t
                );
              }
              function h(t) {
                if ("number" != typeof t)
                  throw new TypeError('"size" argument must be of type number');
                if (t < 0)
                  throw new RangeError(
                    'The value "' + t + '" is invalid for option "size"'
                  );
              }
              function a(t) {
                return h(t), u(t < 0 ? 0 : 0 | l(t));
              }
              function c(t) {
                const r = t.length < 0 ? 0 : 0 | l(t.length),
                  e = u(r);
                for (let n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e;
              }
              function p(t, e, n) {
                if (e < 0 || t.byteLength < e)
                  throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (n || 0))
                  throw new RangeError('"length" is outside of buffer bounds');
                let i;
                return (
                  (i =
                    void 0 === e && void 0 === n
                      ? new Uint8Array(t)
                      : void 0 === n
                      ? new Uint8Array(t, e)
                      : new Uint8Array(t, e, n)),
                  Object.setPrototypeOf(i, r.prototype),
                  i
                );
              }
              function l(t) {
                if (t >= f)
                  throw new RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x" +
                      f.toString(16) +
                      " bytes"
                  );
                return 0 | t;
              }
              function y(t, e) {
                if (r.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || W(t, ArrayBuffer))
                  return t.byteLength;
                if ("string" != typeof t)
                  throw new TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof t
                  );
                const n = t.length,
                  i = arguments.length > 2 && !0 === arguments[2];
                if (!i && 0 === n) return 0;
                let o = !1;
                for (;;)
                  switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return n;
                    case "utf8":
                    case "utf-8":
                      return q(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * n;
                    case "hex":
                      return n >>> 1;
                    case "base64":
                      return G(t).length;
                    default:
                      if (o) return i ? -1 : q(t).length;
                      (e = ("" + e).toLowerCase()), (o = !0);
                  }
              }
              function g(t, r, e) {
                const n = t[r];
                (t[r] = t[e]), (t[e] = n);
              }
              function w(t, e, n, i, o) {
                if (0 === t.length) return -1;
                if (
                  ("string" == typeof n
                    ? ((i = n), (n = 0))
                    : n > 2147483647
                    ? (n = 2147483647)
                    : n < -2147483648 && (n = -2147483648),
                  X((n = +n)) && (n = o ? 0 : t.length - 1),
                  n < 0 && (n = t.length + n),
                  n >= t.length)
                ) {
                  if (o) return -1;
                  n = t.length - 1;
                } else if (n < 0) {
                  if (!o) return -1;
                  n = 0;
                }
                if (("string" == typeof e && (e = r.from(e, i)), r.isBuffer(e)))
                  return 0 === e.length ? -1 : d(t, e, n, i, o);
                if ("number" == typeof e)
                  return (
                    (e &= 255),
                    "function" == typeof Uint8Array.prototype.indexOf
                      ? o
                        ? Uint8Array.prototype.indexOf.call(t, e, n)
                        : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                      : d(t, [e], n, i, o)
                  );
                throw new TypeError("val must be string, number or Buffer");
              }
              function d(t, r, e, n, i) {
                let o,
                  f = 1,
                  u = t.length,
                  s = r.length;
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (t.length < 2 || r.length < 2) return -1;
                  (f = 2), (u /= 2), (s /= 2), (e /= 2);
                }
                function h(t, r) {
                  return 1 === f ? t[r] : t.readUInt16BE(r * f);
                }
                if (i) {
                  let n = -1;
                  for (o = e; o < u; o++)
                    if (h(t, o) === h(r, -1 === n ? 0 : o - n)) {
                      if ((-1 === n && (n = o), o - n + 1 === s)) return n * f;
                    } else -1 !== n && (o -= o - n), (n = -1);
                } else
                  for (e + s > u && (e = u - s), o = e; o >= 0; o--) {
                    let e = !0;
                    for (let n = 0; n < s; n++)
                      if (h(t, o + n) !== h(r, n)) {
                        e = !1;
                        break;
                      }
                    if (e) return o;
                  }
                return -1;
              }
              function b(t, r, e, n) {
                e = Number(e) || 0;
                const i = t.length - e;
                n ? (n = Number(n)) > i && (n = i) : (n = i);
                const o = r.length;
                let f;
                for (n > o / 2 && (n = o / 2), f = 0; f < n; ++f) {
                  const n = parseInt(r.substr(2 * f, 2), 16);
                  if (X(n)) return f;
                  t[e + f] = n;
                }
                return f;
              }
              function m(t, r, e, n) {
                return V(q(r, t.length - e), t, e, n);
              }
              function E(t, r, e, n) {
                return V(
                  (function (t) {
                    const r = [];
                    for (let e = 0; e < t.length; ++e)
                      r.push(255 & t.charCodeAt(e));
                    return r;
                  })(r),
                  t,
                  e,
                  n
                );
              }
              function v(t, r, e, n) {
                return V(G(r), t, e, n);
              }
              function B(t, r, e, n) {
                return V(
                  (function (t, r) {
                    let e, n, i;
                    const o = [];
                    for (let f = 0; f < t.length && !((r -= 2) < 0); ++f)
                      (e = t.charCodeAt(f)),
                        (n = e >> 8),
                        (i = e % 256),
                        o.push(i),
                        o.push(n);
                    return o;
                  })(r, t.length - e),
                  t,
                  e,
                  n
                );
              }
              function A(t, r, e) {
                return 0 === r && e === t.length
                  ? n.fromByteArray(t)
                  : n.fromByteArray(t.slice(r, e));
              }
              function I(t, r, e) {
                e = Math.min(t.length, e);
                const n = [];
                let i = r;
                for (; i < e; ) {
                  const r = t[i];
                  let o = null,
                    f = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
                  if (i + f <= e) {
                    let e, n, u, s;
                    switch (f) {
                      case 1:
                        r < 128 && (o = r);
                        break;
                      case 2:
                        128 == (192 & (e = t[i + 1])) &&
                          (s = ((31 & r) << 6) | (63 & e)) > 127 &&
                          (o = s);
                        break;
                      case 3:
                        (e = t[i + 1]),
                          (n = t[i + 2]),
                          128 == (192 & e) &&
                            128 == (192 & n) &&
                            (s =
                              ((15 & r) << 12) | ((63 & e) << 6) | (63 & n)) >
                              2047 &&
                            (s < 55296 || s > 57343) &&
                            (o = s);
                        break;
                      case 4:
                        (e = t[i + 1]),
                          (n = t[i + 2]),
                          (u = t[i + 3]),
                          128 == (192 & e) &&
                            128 == (192 & n) &&
                            128 == (192 & u) &&
                            (s =
                              ((15 & r) << 18) |
                              ((63 & e) << 12) |
                              ((63 & n) << 6) |
                              (63 & u)) > 65535 &&
                            s < 1114112 &&
                            (o = s);
                    }
                  }
                  null === o
                    ? ((o = 65533), (f = 1))
                    : o > 65535 &&
                      ((o -= 65536),
                      n.push(((o >>> 10) & 1023) | 55296),
                      (o = 56320 | (1023 & o))),
                    n.push(o),
                    (i += f);
                }
                return (function (t) {
                  const r = t.length;
                  if (r <= U) return String.fromCharCode.apply(String, t);
                  let e = "",
                    n = 0;
                  for (; n < r; )
                    e += String.fromCharCode.apply(
                      String,
                      t.slice(n, (n += U))
                    );
                  return e;
                })(n);
              }
              (e.kMaxLength = f),
                (r.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    const t = new Uint8Array(1),
                      r = {
                        foo: function () {
                          return 42;
                        }
                      };
                    return (
                      Object.setPrototypeOf(r, Uint8Array.prototype),
                      Object.setPrototypeOf(t, r),
                      42 === t.foo()
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
                r.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(r.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (r.isBuffer(this)) return this.buffer;
                  }
                }),
                Object.defineProperty(r.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (r.isBuffer(this)) return this.byteOffset;
                  }
                }),
                (r.poolSize = 8192),
                (r.from = function (t, r, e) {
                  return s(t, r, e);
                }),
                Object.setPrototypeOf(r.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(r, Uint8Array),
                (r.alloc = function (t, r, e) {
                  return (function (t, r, e) {
                    return (
                      h(t),
                      t <= 0
                        ? u(t)
                        : void 0 !== r
                        ? "string" == typeof e
                          ? u(t).fill(r, e)
                          : u(t).fill(r)
                        : u(t)
                    );
                  })(t, r, e);
                }),
                (r.allocUnsafe = function (t) {
                  return a(t);
                }),
                (r.allocUnsafeSlow = function (t) {
                  return a(t);
                }),
                (r.isBuffer = function (t) {
                  return null != t && !0 === t._isBuffer && t !== r.prototype;
                }),
                (r.compare = function (t, e) {
                  if (
                    (W(t, Uint8Array) &&
                      (t = r.from(t, t.offset, t.byteLength)),
                    W(e, Uint8Array) && (e = r.from(e, e.offset, e.byteLength)),
                    !r.isBuffer(t) || !r.isBuffer(e))
                  )
                    throw new TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (t === e) return 0;
                  let n = t.length,
                    i = e.length;
                  for (let r = 0, o = Math.min(n, i); r < o; ++r)
                    if (t[r] !== e[r]) {
                      (n = t[r]), (i = e[r]);
                      break;
                    }
                  return n < i ? -1 : i < n ? 1 : 0;
                }),
                (r.isEncoding = function (t) {
                  switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (r.concat = function (t, e) {
                  if (!Array.isArray(t))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === t.length) return r.alloc(0);
                  let n;
                  if (void 0 === e)
                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                  const i = r.allocUnsafe(e);
                  let o = 0;
                  for (n = 0; n < t.length; ++n) {
                    let e = t[n];
                    if (W(e, Uint8Array))
                      o + e.length > i.length
                        ? (r.isBuffer(e) || (e = r.from(e)), e.copy(i, o))
                        : Uint8Array.prototype.set.call(i, e, o);
                    else {
                      if (!r.isBuffer(e))
                        throw new TypeError(
                          '"list" argument must be an Array of Buffers'
                        );
                      e.copy(i, o);
                    }
                    o += e.length;
                  }
                  return i;
                }),
                (r.byteLength = y),
                (r.prototype._isBuffer = !0),
                (r.prototype.swap16 = function () {
                  const t = this.length;
                  if (t % 2 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (let r = 0; r < t; r += 2) g(this, r, r + 1);
                  return this;
                }),
                (r.prototype.swap32 = function () {
                  const t = this.length;
                  if (t % 4 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (let r = 0; r < t; r += 4)
                    g(this, r, r + 3), g(this, r + 1, r + 2);
                  return this;
                }),
                (r.prototype.swap64 = function () {
                  const t = this.length;
                  if (t % 8 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (let r = 0; r < t; r += 8)
                    g(this, r, r + 7),
                      g(this, r + 1, r + 6),
                      g(this, r + 2, r + 5),
                      g(this, r + 3, r + 4);
                  return this;
                }),
                (r.prototype.toString = function () {
                  const t = this.length;
                  return 0 === t
                    ? ""
                    : 0 === arguments.length
                    ? I(this, 0, t)
                    : function (t, r, e) {
                        let n = !1;
                        if (
                          ((void 0 === r || r < 0) && (r = 0), r > this.length)
                        )
                          return "";
                        if (
                          ((void 0 === e || e > this.length) &&
                            (e = this.length),
                          e <= 0)
                        )
                          return "";
                        if ((e >>>= 0) <= (r >>>= 0)) return "";
                        for (t || (t = "utf8"); ; )
                          switch (t) {
                            case "hex":
                              return _(this, r, e);
                            case "utf8":
                            case "utf-8":
                              return I(this, r, e);
                            case "ascii":
                              return R(this, r, e);
                            case "latin1":
                            case "binary":
                              return T(this, r, e);
                            case "base64":
                              return A(this, r, e);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                              return L(this, r, e);
                            default:
                              if (n)
                                throw new TypeError("Unknown encoding: " + t);
                              (t = (t + "").toLowerCase()), (n = !0);
                          }
                      }.apply(this, arguments);
                }),
                (r.prototype.toLocaleString = r.prototype.toString),
                (r.prototype.equals = function (t) {
                  if (!r.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                  return this === t || 0 === r.compare(this, t);
                }),
                (r.prototype.inspect = function () {
                  let t = "";
                  const r = e.INSPECT_MAX_BYTES;
                  return (
                    (t = this.toString("hex", 0, r)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > r && (t += " ... "),
                    "<Buffer " + t + ">"
                  );
                }),
                o && (r.prototype[o] = r.prototype.inspect),
                (r.prototype.compare = function (t, e, n, i, o) {
                  if (
                    (W(t, Uint8Array) &&
                      (t = r.from(t, t.offset, t.byteLength)),
                    !r.isBuffer(t))
                  )
                    throw new TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof t
                    );
                  if (
                    (void 0 === e && (e = 0),
                    void 0 === n && (n = t ? t.length : 0),
                    void 0 === i && (i = 0),
                    void 0 === o && (o = this.length),
                    e < 0 || n > t.length || i < 0 || o > this.length)
                  )
                    throw new RangeError("out of range index");
                  if (i >= o && e >= n) return 0;
                  if (i >= o) return -1;
                  if (e >= n) return 1;
                  if (this === t) return 0;
                  let f = (o >>>= 0) - (i >>>= 0),
                    u = (n >>>= 0) - (e >>>= 0);
                  const s = Math.min(f, u),
                    h = this.slice(i, o),
                    a = t.slice(e, n);
                  for (let t = 0; t < s; ++t)
                    if (h[t] !== a[t]) {
                      (f = h[t]), (u = a[t]);
                      break;
                    }
                  return f < u ? -1 : u < f ? 1 : 0;
                }),
                (r.prototype.includes = function (t, r, e) {
                  return -1 !== this.indexOf(t, r, e);
                }),
                (r.prototype.indexOf = function (t, r, e) {
                  return w(this, t, r, e, !0);
                }),
                (r.prototype.lastIndexOf = function (t, r, e) {
                  return w(this, t, r, e, !1);
                }),
                (r.prototype.write = function (t, r, e, n) {
                  if (void 0 === r) (n = "utf8"), (e = this.length), (r = 0);
                  else if (void 0 === e && "string" == typeof r)
                    (n = r), (e = this.length), (r = 0);
                  else {
                    if (!isFinite(r))
                      throw new Error(
                        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                      );
                    (r >>>= 0),
                      isFinite(e)
                        ? ((e >>>= 0), void 0 === n && (n = "utf8"))
                        : ((n = e), (e = void 0));
                  }
                  const i = this.length - r;
                  if (
                    ((void 0 === e || e > i) && (e = i),
                    (t.length > 0 && (e < 0 || r < 0)) || r > this.length)
                  )
                    throw new RangeError(
                      "Attempt to write outside buffer bounds"
                    );
                  n || (n = "utf8");
                  let o = !1;
                  for (;;)
                    switch (n) {
                      case "hex":
                        return b(this, t, r, e);
                      case "utf8":
                      case "utf-8":
                        return m(this, t, r, e);
                      case "ascii":
                      case "latin1":
                      case "binary":
                        return E(this, t, r, e);
                      case "base64":
                        return v(this, t, r, e);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return B(this, t, r, e);
                      default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        (n = ("" + n).toLowerCase()), (o = !0);
                    }
                }),
                (r.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                  };
                });
              const U = 4096;
              function R(t, r, e) {
                let n = "";
                e = Math.min(t.length, e);
                for (let i = r; i < e; ++i)
                  n += String.fromCharCode(127 & t[i]);
                return n;
              }
              function T(t, r, e) {
                let n = "";
                e = Math.min(t.length, e);
                for (let i = r; i < e; ++i) n += String.fromCharCode(t[i]);
                return n;
              }
              function _(t, r, e) {
                const n = t.length;
                (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
                let i = "";
                for (let n = r; n < e; ++n) i += J[t[n]];
                return i;
              }
              function L(t, r, e) {
                const n = t.slice(r, e);
                let i = "";
                for (let t = 0; t < n.length - 1; t += 2)
                  i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                return i;
              }
              function S(t, r, e) {
                if (t % 1 != 0 || t < 0)
                  throw new RangeError("offset is not uint");
                if (t + r > e)
                  throw new RangeError("Trying to access beyond buffer length");
              }
              function O(t, e, n, i, o, f) {
                if (!r.isBuffer(t))
                  throw new TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (e > o || e < f)
                  throw new RangeError('"value" argument is out of bounds');
                if (n + i > t.length)
                  throw new RangeError("Index out of range");
              }
              function C(t, r, e, n, i) {
                F(r, n, i, t, e, 7);
                let o = Number(r & BigInt(4294967295));
                (t[e++] = o),
                  (o >>= 8),
                  (t[e++] = o),
                  (o >>= 8),
                  (t[e++] = o),
                  (o >>= 8),
                  (t[e++] = o);
                let f = Number((r >> BigInt(32)) & BigInt(4294967295));
                return (
                  (t[e++] = f),
                  (f >>= 8),
                  (t[e++] = f),
                  (f >>= 8),
                  (t[e++] = f),
                  (f >>= 8),
                  (t[e++] = f),
                  e
                );
              }
              function x(t, r, e, n, i) {
                F(r, n, i, t, e, 7);
                let o = Number(r & BigInt(4294967295));
                (t[e + 7] = o),
                  (o >>= 8),
                  (t[e + 6] = o),
                  (o >>= 8),
                  (t[e + 5] = o),
                  (o >>= 8),
                  (t[e + 4] = o);
                let f = Number((r >> BigInt(32)) & BigInt(4294967295));
                return (
                  (t[e + 3] = f),
                  (f >>= 8),
                  (t[e + 2] = f),
                  (f >>= 8),
                  (t[e + 1] = f),
                  (f >>= 8),
                  (t[e] = f),
                  e + 8
                );
              }
              function M(t, r, e, n, i, o) {
                if (e + n > t.length)
                  throw new RangeError("Index out of range");
                if (e < 0) throw new RangeError("Index out of range");
              }
              function N(t, r, e, n, o) {
                return (
                  (r = +r),
                  (e >>>= 0),
                  o || M(t, 0, e, 4),
                  i.write(t, r, e, n, 23, 4),
                  e + 4
                );
              }
              function P(t, r, e, n, o) {
                return (
                  (r = +r),
                  (e >>>= 0),
                  o || M(t, 0, e, 8),
                  i.write(t, r, e, n, 52, 8),
                  e + 8
                );
              }
              (r.prototype.slice = function (t, e) {
                const n = this.length;
                (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                  (e = void 0 === e ? n : ~~e) < 0
                    ? (e += n) < 0 && (e = 0)
                    : e > n && (e = n),
                  e < t && (e = t);
                const i = this.subarray(t, e);
                return Object.setPrototypeOf(i, r.prototype), i;
              }),
                (r.prototype.readUintLE = r.prototype.readUIntLE = function (
                  t,
                  r,
                  e
                ) {
                  (t >>>= 0), (r >>>= 0), e || S(t, r, this.length);
                  let n = this[t],
                    i = 1,
                    o = 0;
                  for (; ++o < r && (i *= 256); ) n += this[t + o] * i;
                  return n;
                }),
                (r.prototype.readUintBE = r.prototype.readUIntBE = function (
                  t,
                  r,
                  e
                ) {
                  (t >>>= 0), (r >>>= 0), e || S(t, r, this.length);
                  let n = this[t + --r],
                    i = 1;
                  for (; r > 0 && (i *= 256); ) n += this[t + --r] * i;
                  return n;
                }),
                (r.prototype.readUint8 = r.prototype.readUInt8 = function (
                  t,
                  r
                ) {
                  return (t >>>= 0), r || S(t, 1, this.length), this[t];
                }),
                (r.prototype.readUint16LE = r.prototype.readUInt16LE = function (
                  t,
                  r
                ) {
                  return (
                    (t >>>= 0),
                    r || S(t, 2, this.length),
                    this[t] | (this[t + 1] << 8)
                  );
                }),
                (r.prototype.readUint16BE = r.prototype.readUInt16BE = function (
                  t,
                  r
                ) {
                  return (
                    (t >>>= 0),
                    r || S(t, 2, this.length),
                    (this[t] << 8) | this[t + 1]
                  );
                }),
                (r.prototype.readUint32LE = r.prototype.readUInt32LE = function (
                  t,
                  r
                ) {
                  return (
                    (t >>>= 0),
                    r || S(t, 4, this.length),
                    (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                      16777216 * this[t + 3]
                  );
                }),
                (r.prototype.readUint32BE = r.prototype.readUInt32BE = function (
                  t,
                  r
                ) {
                  return (
                    (t >>>= 0),
                    r || S(t, 4, this.length),
                    16777216 * this[t] +
                      ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                  );
                }),
                (r.prototype.readBigUInt64LE = Z(function (t) {
                  z((t >>>= 0), "offset");
                  const r = this[t],
                    e = this[t + 7];
                  (void 0 !== r && void 0 !== e) || D(t, this.length - 8);
                  const n =
                      r +
                      256 * this[++t] +
                      65536 * this[++t] +
                      this[++t] * 2 ** 24,
                    i =
                      this[++t] +
                      256 * this[++t] +
                      65536 * this[++t] +
                      e * 2 ** 24;
                  return BigInt(n) + (BigInt(i) << BigInt(32));
                })),
                (r.prototype.readBigUInt64BE = Z(function (t) {
                  z((t >>>= 0), "offset");
                  const r = this[t],
                    e = this[t + 7];
                  (void 0 !== r && void 0 !== e) || D(t, this.length - 8);
                  const n =
                      r * 2 ** 24 +
                      65536 * this[++t] +
                      256 * this[++t] +
                      this[++t],
                    i =
                      this[++t] * 2 ** 24 +
                      65536 * this[++t] +
                      256 * this[++t] +
                      e;
                  return (BigInt(n) << BigInt(32)) + BigInt(i);
                })),
                (r.prototype.readIntLE = function (t, r, e) {
                  (t >>>= 0), (r >>>= 0), e || S(t, r, this.length);
                  let n = this[t],
                    i = 1,
                    o = 0;
                  for (; ++o < r && (i *= 256); ) n += this[t + o] * i;
                  return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n;
                }),
                (r.prototype.readIntBE = function (t, r, e) {
                  (t >>>= 0), (r >>>= 0), e || S(t, r, this.length);
                  let n = r,
                    i = 1,
                    o = this[t + --n];
                  for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
                  return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o;
                }),
                (r.prototype.readInt8 = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || S(t, 1, this.length),
                    128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                  );
                }),
                (r.prototype.readInt16LE = function (t, r) {
                  (t >>>= 0), r || S(t, 2, this.length);
                  const e = this[t] | (this[t + 1] << 8);
                  return 32768 & e ? 4294901760 | e : e;
                }),
                (r.prototype.readInt16BE = function (t, r) {
                  (t >>>= 0), r || S(t, 2, this.length);
                  const e = this[t + 1] | (this[t] << 8);
                  return 32768 & e ? 4294901760 | e : e;
                }),
                (r.prototype.readInt32LE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || S(t, 4, this.length),
                    this[t] |
                      (this[t + 1] << 8) |
                      (this[t + 2] << 16) |
                      (this[t + 3] << 24)
                  );
                }),
                (r.prototype.readInt32BE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || S(t, 4, this.length),
                    (this[t] << 24) |
                      (this[t + 1] << 16) |
                      (this[t + 2] << 8) |
                      this[t + 3]
                  );
                }),
                (r.prototype.readBigInt64LE = Z(function (t) {
                  z((t >>>= 0), "offset");
                  const r = this[t],
                    e = this[t + 7];
                  (void 0 !== r && void 0 !== e) || D(t, this.length - 8);
                  const n =
                    this[t + 4] +
                    256 * this[t + 5] +
                    65536 * this[t + 6] +
                    (e << 24);
                  return (
                    (BigInt(n) << BigInt(32)) +
                    BigInt(
                      r +
                        256 * this[++t] +
                        65536 * this[++t] +
                        this[++t] * 2 ** 24
                    )
                  );
                })),
                (r.prototype.readBigInt64BE = Z(function (t) {
                  z((t >>>= 0), "offset");
                  const r = this[t],
                    e = this[t + 7];
                  (void 0 !== r && void 0 !== e) || D(t, this.length - 8);
                  const n =
                    (r << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                  return (
                    (BigInt(n) << BigInt(32)) +
                    BigInt(
                      this[++t] * 2 ** 24 +
                        65536 * this[++t] +
                        256 * this[++t] +
                        e
                    )
                  );
                })),
                (r.prototype.readFloatLE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || S(t, 4, this.length),
                    i.read(this, t, !0, 23, 4)
                  );
                }),
                (r.prototype.readFloatBE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || S(t, 4, this.length),
                    i.read(this, t, !1, 23, 4)
                  );
                }),
                (r.prototype.readDoubleLE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || S(t, 8, this.length),
                    i.read(this, t, !0, 52, 8)
                  );
                }),
                (r.prototype.readDoubleBE = function (t, r) {
                  return (
                    (t >>>= 0),
                    r || S(t, 8, this.length),
                    i.read(this, t, !1, 52, 8)
                  );
                }),
                (r.prototype.writeUintLE = r.prototype.writeUIntLE = function (
                  t,
                  r,
                  e,
                  n
                ) {
                  if (((t = +t), (r >>>= 0), (e >>>= 0), !n)) {
                    O(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                  }
                  let i = 1,
                    o = 0;
                  for (this[r] = 255 & t; ++o < e && (i *= 256); )
                    this[r + o] = (t / i) & 255;
                  return r + e;
                }),
                (r.prototype.writeUintBE = r.prototype.writeUIntBE = function (
                  t,
                  r,
                  e,
                  n
                ) {
                  if (((t = +t), (r >>>= 0), (e >>>= 0), !n)) {
                    O(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                  }
                  let i = e - 1,
                    o = 1;
                  for (this[r + i] = 255 & t; --i >= 0 && (o *= 256); )
                    this[r + i] = (t / o) & 255;
                  return r + e;
                }),
                (r.prototype.writeUint8 = r.prototype.writeUInt8 = function (
                  t,
                  r,
                  e
                ) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || O(this, t, r, 1, 255, 0),
                    (this[r] = 255 & t),
                    r + 1
                  );
                }),
                (r.prototype.writeUint16LE = r.prototype.writeUInt16LE = function (
                  t,
                  r,
                  e
                ) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || O(this, t, r, 2, 65535, 0),
                    (this[r] = 255 & t),
                    (this[r + 1] = t >>> 8),
                    r + 2
                  );
                }),
                (r.prototype.writeUint16BE = r.prototype.writeUInt16BE = function (
                  t,
                  r,
                  e
                ) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || O(this, t, r, 2, 65535, 0),
                    (this[r] = t >>> 8),
                    (this[r + 1] = 255 & t),
                    r + 2
                  );
                }),
                (r.prototype.writeUint32LE = r.prototype.writeUInt32LE = function (
                  t,
                  r,
                  e
                ) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || O(this, t, r, 4, 4294967295, 0),
                    (this[r + 3] = t >>> 24),
                    (this[r + 2] = t >>> 16),
                    (this[r + 1] = t >>> 8),
                    (this[r] = 255 & t),
                    r + 4
                  );
                }),
                (r.prototype.writeUint32BE = r.prototype.writeUInt32BE = function (
                  t,
                  r,
                  e
                ) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || O(this, t, r, 4, 4294967295, 0),
                    (this[r] = t >>> 24),
                    (this[r + 1] = t >>> 16),
                    (this[r + 2] = t >>> 8),
                    (this[r + 3] = 255 & t),
                    r + 4
                  );
                }),
                (r.prototype.writeBigUInt64LE = Z(function (t, r = 0) {
                  return C(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
                })),
                (r.prototype.writeBigUInt64BE = Z(function (t, r = 0) {
                  return x(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
                })),
                (r.prototype.writeIntLE = function (t, r, e, n) {
                  if (((t = +t), (r >>>= 0), !n)) {
                    const n = Math.pow(2, 8 * e - 1);
                    O(this, t, r, e, n - 1, -n);
                  }
                  let i = 0,
                    o = 1,
                    f = 0;
                  for (this[r] = 255 & t; ++i < e && (o *= 256); )
                    t < 0 && 0 === f && 0 !== this[r + i - 1] && (f = 1),
                      (this[r + i] = (((t / o) >> 0) - f) & 255);
                  return r + e;
                }),
                (r.prototype.writeIntBE = function (t, r, e, n) {
                  if (((t = +t), (r >>>= 0), !n)) {
                    const n = Math.pow(2, 8 * e - 1);
                    O(this, t, r, e, n - 1, -n);
                  }
                  let i = e - 1,
                    o = 1,
                    f = 0;
                  for (this[r + i] = 255 & t; --i >= 0 && (o *= 256); )
                    t < 0 && 0 === f && 0 !== this[r + i + 1] && (f = 1),
                      (this[r + i] = (((t / o) >> 0) - f) & 255);
                  return r + e;
                }),
                (r.prototype.writeInt8 = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || O(this, t, r, 1, 127, -128),
                    t < 0 && (t = 255 + t + 1),
                    (this[r] = 255 & t),
                    r + 1
                  );
                }),
                (r.prototype.writeInt16LE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || O(this, t, r, 2, 32767, -32768),
                    (this[r] = 255 & t),
                    (this[r + 1] = t >>> 8),
                    r + 2
                  );
                }),
                (r.prototype.writeInt16BE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || O(this, t, r, 2, 32767, -32768),
                    (this[r] = t >>> 8),
                    (this[r + 1] = 255 & t),
                    r + 2
                  );
                }),
                (r.prototype.writeInt32LE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || O(this, t, r, 4, 2147483647, -2147483648),
                    (this[r] = 255 & t),
                    (this[r + 1] = t >>> 8),
                    (this[r + 2] = t >>> 16),
                    (this[r + 3] = t >>> 24),
                    r + 4
                  );
                }),
                (r.prototype.writeInt32BE = function (t, r, e) {
                  return (
                    (t = +t),
                    (r >>>= 0),
                    e || O(this, t, r, 4, 2147483647, -2147483648),
                    t < 0 && (t = 4294967295 + t + 1),
                    (this[r] = t >>> 24),
                    (this[r + 1] = t >>> 16),
                    (this[r + 2] = t >>> 8),
                    (this[r + 3] = 255 & t),
                    r + 4
                  );
                }),
                (r.prototype.writeBigInt64LE = Z(function (t, r = 0) {
                  return C(
                    this,
                    t,
                    r,
                    -BigInt("0x8000000000000000"),
                    BigInt("0x7fffffffffffffff")
                  );
                })),
                (r.prototype.writeBigInt64BE = Z(function (t, r = 0) {
                  return x(
                    this,
                    t,
                    r,
                    -BigInt("0x8000000000000000"),
                    BigInt("0x7fffffffffffffff")
                  );
                })),
                (r.prototype.writeFloatLE = function (t, r, e) {
                  return N(this, t, r, !0, e);
                }),
                (r.prototype.writeFloatBE = function (t, r, e) {
                  return N(this, t, r, !1, e);
                }),
                (r.prototype.writeDoubleLE = function (t, r, e) {
                  return P(this, t, r, !0, e);
                }),
                (r.prototype.writeDoubleBE = function (t, r, e) {
                  return P(this, t, r, !1, e);
                }),
                (r.prototype.copy = function (t, e, n, i) {
                  if (!r.isBuffer(t))
                    throw new TypeError("argument should be a Buffer");
                  if (
                    (n || (n = 0),
                    i || 0 === i || (i = this.length),
                    e >= t.length && (e = t.length),
                    e || (e = 0),
                    i > 0 && i < n && (i = n),
                    i === n)
                  )
                    return 0;
                  if (0 === t.length || 0 === this.length) return 0;
                  if (e < 0) throw new RangeError("targetStart out of bounds");
                  if (n < 0 || n >= this.length)
                    throw new RangeError("Index out of range");
                  if (i < 0) throw new RangeError("sourceEnd out of bounds");
                  i > this.length && (i = this.length),
                    t.length - e < i - n && (i = t.length - e + n);
                  const o = i - n;
                  return (
                    this === t &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                      ? this.copyWithin(e, n, i)
                      : Uint8Array.prototype.set.call(
                          t,
                          this.subarray(n, i),
                          e
                        ),
                    o
                  );
                }),
                (r.prototype.fill = function (t, e, n, i) {
                  if ("string" == typeof t) {
                    if (
                      ("string" == typeof e
                        ? ((i = e), (e = 0), (n = this.length))
                        : "string" == typeof n && ((i = n), (n = this.length)),
                      void 0 !== i && "string" != typeof i)
                    )
                      throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !r.isEncoding(i))
                      throw new TypeError("Unknown encoding: " + i);
                    if (1 === t.length) {
                      const r = t.charCodeAt(0);
                      (("utf8" === i && r < 128) || "latin1" === i) && (t = r);
                    }
                  } else
                    "number" == typeof t
                      ? (t &= 255)
                      : "boolean" == typeof t && (t = Number(t));
                  if (e < 0 || this.length < e || this.length < n)
                    throw new RangeError("Out of range index");
                  if (n <= e) return this;
                  let o;
                  if (
                    ((e >>>= 0),
                    (n = void 0 === n ? this.length : n >>> 0),
                    t || (t = 0),
                    "number" == typeof t)
                  )
                    for (o = e; o < n; ++o) this[o] = t;
                  else {
                    const f = r.isBuffer(t) ? t : r.from(t, i),
                      u = f.length;
                    if (0 === u)
                      throw new TypeError(
                        'The value "' + t + '" is invalid for argument "value"'
                      );
                    for (o = 0; o < n - e; ++o) this[o + e] = f[o % u];
                  }
                  return this;
                });
              const k = {};
              function $(t, r, e) {
                k[t] = class extends e {
                  constructor() {
                    super(),
                      Object.defineProperty(this, "message", {
                        value: r.apply(this, arguments),
                        writable: !0,
                        configurable: !0
                      }),
                      (this.name = `${this.name} [${t}]`),
                      this.stack,
                      delete this.name;
                  }
                  get code() {
                    return t;
                  }
                  set code(t) {
                    Object.defineProperty(this, "code", {
                      configurable: !0,
                      enumerable: !0,
                      value: t,
                      writable: !0
                    });
                  }
                  toString() {
                    return `${this.name} [${t}]: ${this.message}`;
                  }
                };
              }
              function j(t) {
                let r = "",
                  e = t.length;
                const n = "-" === t[0] ? 1 : 0;
                for (; e >= n + 4; e -= 3) r = `_${t.slice(e - 3, e)}${r}`;
                return `${t.slice(0, e)}${r}`;
              }
              function F(t, r, e, n, i, o) {
                if (t > e || t < r) {
                  const n = "bigint" == typeof r ? "n" : "";
                  let i;
                  throw (
                    ((i =
                      o > 3
                        ? 0 === r || r === BigInt(0)
                          ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
                          : `>= -(2${n} ** ${
                              8 * (o + 1) - 1
                            }${n}) and < 2 ** ` + `${8 * (o + 1) - 1}${n}`
                        : `>= ${r}${n} and <= ${e}${n}`),
                    new k.ERR_OUT_OF_RANGE("value", i, t))
                  );
                }
                !(function (t, r, e) {
                  z(r, "offset"),
                    (void 0 !== t[r] && void 0 !== t[r + e]) ||
                      D(r, t.length - (e + 1));
                })(n, i, o);
              }
              function z(t, r) {
                if ("number" != typeof t)
                  throw new k.ERR_INVALID_ARG_TYPE(r, "number", t);
              }
              function D(t, r, e) {
                if (Math.floor(t) !== t)
                  throw (
                    (z(t, e),
                    new k.ERR_OUT_OF_RANGE(e || "offset", "an integer", t))
                  );
                if (r < 0) throw new k.ERR_BUFFER_OUT_OF_BOUNDS();
                throw new k.ERR_OUT_OF_RANGE(
                  e || "offset",
                  `>= ${e ? 1 : 0} and <= ${r}`,
                  t
                );
              }
              $(
                "ERR_BUFFER_OUT_OF_BOUNDS",
                function (t) {
                  return t
                    ? `${t} is outside of buffer bounds`
                    : "Attempt to access memory outside buffer bounds";
                },
                RangeError
              ),
                $(
                  "ERR_INVALID_ARG_TYPE",
                  function (t, r) {
                    return `The "${t}" argument must be of type number. Received type ${typeof r}`;
                  },
                  TypeError
                ),
                $(
                  "ERR_OUT_OF_RANGE",
                  function (t, r, e) {
                    let n = `The value of "${t}" is out of range.`,
                      i = e;
                    return (
                      Number.isInteger(e) && Math.abs(e) > 2 ** 32
                        ? (i = j(String(e)))
                        : "bigint" == typeof e &&
                          ((i = String(e)),
                          (e > BigInt(2) ** BigInt(32) ||
                            e < -(BigInt(2) ** BigInt(32))) &&
                            (i = j(i)),
                          (i += "n")),
                      (n += ` It must be ${r}. Received ${i}`)
                    );
                  },
                  RangeError
                );
              const Y = /[^+\/0-9A-Za-z-_]/g;
              function q(t, r) {
                let e;
                r = r || 1 / 0;
                const n = t.length;
                let i = null;
                const o = [];
                for (let f = 0; f < n; ++f) {
                  if ((e = t.charCodeAt(f)) > 55295 && e < 57344) {
                    if (!i) {
                      if (e > 56319) {
                        (r -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      if (f + 1 === n) {
                        (r -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      i = e;
                      continue;
                    }
                    if (e < 56320) {
                      (r -= 3) > -1 && o.push(239, 191, 189), (i = e);
                      continue;
                    }
                    e = 65536 + (((i - 55296) << 10) | (e - 56320));
                  } else i && (r -= 3) > -1 && o.push(239, 191, 189);
                  if (((i = null), e < 128)) {
                    if ((r -= 1) < 0) break;
                    o.push(e);
                  } else if (e < 2048) {
                    if ((r -= 2) < 0) break;
                    o.push((e >> 6) | 192, (63 & e) | 128);
                  } else if (e < 65536) {
                    if ((r -= 3) < 0) break;
                    o.push(
                      (e >> 12) | 224,
                      ((e >> 6) & 63) | 128,
                      (63 & e) | 128
                    );
                  } else {
                    if (!(e < 1114112)) throw new Error("Invalid code point");
                    if ((r -= 4) < 0) break;
                    o.push(
                      (e >> 18) | 240,
                      ((e >> 12) & 63) | 128,
                      ((e >> 6) & 63) | 128,
                      (63 & e) | 128
                    );
                  }
                }
                return o;
              }
              function G(t) {
                return n.toByteArray(
                  (function (t) {
                    if (
                      (t = (t = t.split("=")[0]).trim().replace(Y, "")).length <
                      2
                    )
                      return "";
                    for (; t.length % 4 != 0; ) t += "=";
                    return t;
                  })(t)
                );
              }
              function V(t, r, e, n) {
                let i;
                for (i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i)
                  r[i + e] = t[i];
                return i;
              }
              function W(t, r) {
                return (
                  t instanceof r ||
                  (null != t &&
                    null != t.constructor &&
                    null != t.constructor.name &&
                    t.constructor.name === r.name)
                );
              }
              function X(t) {
                return t != t;
              }
              const J = (function () {
                const t = new Array(256);
                for (let r = 0; r < 16; ++r) {
                  const e = 16 * r;
                  for (let n = 0; n < 16; ++n)
                    t[e + n] = "0123456789abcdef"[r] + "0123456789abcdef"[n];
                }
                return t;
              })();
              function Z(t) {
                return "undefined" == typeof BigInt ? H : t;
              }
              function H() {
                throw new Error("BigInt not supported");
              }
            }.call(this, t("buffer").Buffer));
          },
          { "base64-js": 5, buffer: 2, ieee754: 6 }
        ],
        5: [
          function (t, r, e) {
            "use strict";
            (e.byteLength = function (t) {
              var r = h(t),
                e = r[0],
                n = r[1];
              return (3 * (e + n)) / 4 - n;
            }),
              (e.toByteArray = function (t) {
                var r,
                  e,
                  n = h(t),
                  f = n[0],
                  u = n[1],
                  s = new o(
                    (function (t, r, e) {
                      return (3 * (r + e)) / 4 - e;
                    })(0, f, u)
                  ),
                  a = 0,
                  c = u > 0 ? f - 4 : f;
                for (e = 0; e < c; e += 4)
                  (r =
                    (i[t.charCodeAt(e)] << 18) |
                    (i[t.charCodeAt(e + 1)] << 12) |
                    (i[t.charCodeAt(e + 2)] << 6) |
                    i[t.charCodeAt(e + 3)]),
                    (s[a++] = (r >> 16) & 255),
                    (s[a++] = (r >> 8) & 255),
                    (s[a++] = 255 & r);
                2 === u &&
                  ((r =
                    (i[t.charCodeAt(e)] << 2) | (i[t.charCodeAt(e + 1)] >> 4)),
                  (s[a++] = 255 & r));
                1 === u &&
                  ((r =
                    (i[t.charCodeAt(e)] << 10) |
                    (i[t.charCodeAt(e + 1)] << 4) |
                    (i[t.charCodeAt(e + 2)] >> 2)),
                  (s[a++] = (r >> 8) & 255),
                  (s[a++] = 255 & r));
                return s;
              }),
              (e.fromByteArray = function (t) {
                for (
                  var r, e = t.length, i = e % 3, o = [], f = 0, u = e - i;
                  f < u;
                  f += 16383
                )
                  o.push(a(t, f, f + 16383 > u ? u : f + 16383));
                1 === i
                  ? ((r = t[e - 1]),
                    o.push(n[r >> 2] + n[(r << 4) & 63] + "=="))
                  : 2 === i &&
                    ((r = (t[e - 2] << 8) + t[e - 1]),
                    o.push(
                      n[r >> 10] + n[(r >> 4) & 63] + n[(r << 2) & 63] + "="
                    ));
                return o.join("");
              });
            for (
              var n = [],
                i = [],
                o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                f =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                u = 0,
                s = f.length;
              u < s;
              ++u
            )
              (n[u] = f[u]), (i[f.charCodeAt(u)] = u);
            function h(t) {
              var r = t.length;
              if (r % 4 > 0)
                throw new Error(
                  "Invalid string. Length must be a multiple of 4"
                );
              var e = t.indexOf("=");
              return -1 === e && (e = r), [e, e === r ? 0 : 4 - (e % 4)];
            }
            function a(t, r, e) {
              for (var i, o, f = [], u = r; u < e; u += 3)
                (i =
                  ((t[u] << 16) & 16711680) +
                  ((t[u + 1] << 8) & 65280) +
                  (255 & t[u + 2])),
                  f.push(
                    n[((o = i) >> 18) & 63] +
                      n[(o >> 12) & 63] +
                      n[(o >> 6) & 63] +
                      n[63 & o]
                  );
              return f.join("");
            }
            (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
          },
          {}
        ],
        6: [
          function (t, r, e) {
            (e.read = function (t, r, e, n, i) {
              var o,
                f,
                u = 8 * i - n - 1,
                s = (1 << u) - 1,
                h = s >> 1,
                a = -7,
                c = e ? i - 1 : 0,
                p = e ? -1 : 1,
                l = t[r + c];
              for (
                c += p, o = l & ((1 << -a) - 1), l >>= -a, a += u;
                a > 0;
                o = 256 * o + t[r + c], c += p, a -= 8
              );
              for (
                f = o & ((1 << -a) - 1), o >>= -a, a += n;
                a > 0;
                f = 256 * f + t[r + c], c += p, a -= 8
              );
              if (0 === o) o = 1 - h;
              else {
                if (o === s) return f ? NaN : (1 / 0) * (l ? -1 : 1);
                (f += Math.pow(2, n)), (o -= h);
              }
              return (l ? -1 : 1) * f * Math.pow(2, o - n);
            }),
              (e.write = function (t, r, e, n, i, o) {
                var f,
                  u,
                  s,
                  h = 8 * o - i - 1,
                  a = (1 << h) - 1,
                  c = a >> 1,
                  p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                  l = n ? 0 : o - 1,
                  y = n ? 1 : -1,
                  g = r < 0 || (0 === r && 1 / r < 0) ? 1 : 0;
                for (
                  r = Math.abs(r),
                    isNaN(r) || r === 1 / 0
                      ? ((u = isNaN(r) ? 1 : 0), (f = a))
                      : ((f = Math.floor(Math.log(r) / Math.LN2)),
                        r * (s = Math.pow(2, -f)) < 1 && (f--, (s *= 2)),
                        (r += f + c >= 1 ? p / s : p * Math.pow(2, 1 - c)) *
                          s >=
                          2 && (f++, (s /= 2)),
                        f + c >= a
                          ? ((u = 0), (f = a))
                          : f + c >= 1
                          ? ((u = (r * s - 1) * Math.pow(2, i)), (f += c))
                          : ((u = r * Math.pow(2, c - 1) * Math.pow(2, i)),
                            (f = 0)));
                  i >= 8;
                  t[e + l] = 255 & u, l += y, u /= 256, i -= 8
                );
                for (
                  f = (f << i) | u, h += i;
                  h > 0;
                  t[e + l] = 255 & f, l += y, f /= 256, h -= 8
                );
                t[e + l - y] |= 128 * g;
              });
          },
          {}
        ]
      };
      let __e = {};
      let __n = [4];

      return t(__r, __e, __n)(4);

      function t(r, e, n) {
        function i(f, u) {
          if (!e[f]) {
            if (!r[f]) {
              var s = "function" == typeof require && require;
              if (!u && s) return s(f, !0);
              if (o) return o(f, !0);
              var h = new Error("Cannot find module '" + f + "'");
              throw ((h.code = "MODULE_NOT_FOUND"), h);
            }
            var a = (e[f] = { exports: {} });
            r[f][0].call(
              a.exports,
              function (t) {
                return i(r[f][1][t] || t);
              },
              a,
              a.exports,
              t,
              r,
              e,
              n
            );
          }
          return e[f].exports;
        }
        for (
          var o = "function" == typeof require && require, f = 0;
          f < n.length;
          f++
        )
        i(n[f]);
        return i;
    }
 }
  //export { buffer as _buffer };
  _export({ buffer: _buffer });
function _export(j){document.currentScript.setAttribute("x-module",(()=>{for(let k in j){j[k]=j[k].toString()};return JSON.stringify(j)})())}
})();

