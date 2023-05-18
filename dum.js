// go/mss-setup#7-load-the-js-or-css-from-your-initial-page
if (!window["_DumpException"]) {
  const _DumpException =
    window["_DumpException"] ||
    function (e) {
      throw e;
    };
  window["_DumpException"] = _DumpException;
}
("use strict");
this.default_tr = this.default_tr || {};
(function (_) {
  var window = this;
  try {
    /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
    /*
  
   SPDX-License-Identifier: Apache-2.0
  */
    var ba,
      ea,
      ja,
      ra,
      xa,
      Aa,
      Pa,
      Sa,
      Ta,
      Ua,
      Va,
      Xa,
      cb,
      db,
      eb,
      fb,
      gb,
      hb,
      jb,
      kb,
      ob;
    _.aa = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, _.aa);
      else {
        var c = Error().stack;
        c && (this.stack = c);
      }
      a && (this.message = String(a));
      void 0 !== b && (this.cause = b);
    };
    ba = function (a) {
      _.q.setTimeout(function () {
        throw a;
      }, 0);
    };
    _.ca = function (a) {
      a && "function" == typeof a.T && a.T();
    };
    ea = function (a) {
      for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        _.da(d) ? ea.apply(null, d) : _.ca(d);
      }
    };
    ja = function () {
      !_.fa && _.ha && _.ia();
      return _.fa;
    };
    _.ia = function () {
      _.fa = (0, _.ha)();
      ka.forEach(function (a) {
        a(_.fa);
      });
      ka = [];
    };
    _.ma = function (a) {
      _.fa && la(a);
    };
    _.pa = function () {
      _.fa && na(_.fa);
    };
    ra = function (a, b) {
      b.hasOwnProperty("displayName") || (b.displayName = a);
      b[qa] = a;
    };
    _.ta = function (a, b) {
      return 0 <= sa(a, b);
    };
    _.ua = function (a, b) {
      _.ta(a, b) || a.push(b);
    };
    _.va = function (a, b) {
      b = sa(a, b);
      var c;
      (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
      return c;
    };
    _.wa = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    };
    xa = function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (_.da(d)) {
          var e = a.length || 0,
            f = d.length || 0;
          a.length = e + f;
          for (var g = 0; g < f; g++) a[e + g] = d[g];
        } else a.push(d);
      }
    };
    Aa = function (a, b) {
      b = b || a;
      for (var c = 0, d = 0, e = {}; d < a.length; ) {
        var f = a[d++],
          g = _.ya(f) ? "o" + _.za(f) : (typeof f).charAt(0) + f;
        Object.prototype.hasOwnProperty.call(e, g) ||
          ((e[g] = !0), (b[c++] = f));
      }
      b.length = c;
    };
    _.Ba = function () {
      var a = _.q.navigator;
      return a && (a = a.userAgent) ? a : "";
    };
    _.u = function (a) {
      return -1 != _.Ba().indexOf(a);
    };
    _.Fa = function () {
      return _.Da ? !!_.Ea && 0 < _.Ea.brands.length : !1;
    };
    _.Ga = function () {
      return _.Fa() ? !1 : _.u("Opera");
    };
    _.Ha = function () {
      return _.Fa() ? !1 : _.u("Trident") || _.u("MSIE");
    };
    _.Ia = function () {
      return _.Fa() ? !1 : _.u("Edge");
    };
    _.Ja = function () {
      return _.Da ? !!_.Ea && !!_.Ea.platform : !1;
    };
    _.Ka = function () {
      return _.Ja() ? "Android" === _.Ea.platform : _.u("Android");
    };
    _.La = function () {
      return _.u("iPhone") && !_.u("iPod") && !_.u("iPad");
    };
    _.Ma = function () {
      return _.La() || _.u("iPad") || _.u("iPod");
    };
    _.Na = function () {
      return _.Ja() ? "macOS" === _.Ea.platform : _.u("Macintosh");
    };
    _.Oa = function () {
      return _.Ja() ? "Windows" === _.Ea.platform : _.u("Windows");
    };
    Pa = function (a, b) {
      for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
      return !1;
    };
    _.Qa = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b;
    };
    Sa = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Ra.length; f++)
          (c = Ra[f]),
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    };
    Ta = function (a) {
      var b = arguments.length;
      if (1 == b && Array.isArray(arguments[0]))
        return Ta.apply(null, arguments[0]);
      for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
      return c;
    };
    Ua = function () {};
    Va = function (a) {
      return { valueOf: a }.valueOf();
    };
    Xa = function (a) {
      return new _.Wa(function (b) {
        return b.substr(0, a.length + 1).toLowerCase() === a + ":";
      });
    };
    _.Za = function (a, b) {
      a.src = _.Ya(b);
      var c, d;
      (c = (b =
        null ==
        (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window)
          .document).querySelector)
          ? void 0
          : d.call(c, "script[nonce]"))
        ? b.nonce || b.getAttribute("nonce") || ""
        : "") && a.setAttribute("nonce", c);
    };
    _.bb = function (a) {
      a = _.$a(a);
      return _.ab(a);
    };
    _.$a = function (a) {
      return null === a ? "null" : void 0 === a ? "undefined" : a;
    };
    cb = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    };
    db =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          };
    eb = function (a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("a");
    };
    fb = eb(this);
    gb = function (a, b) {
      if (b)
        a: {
          var c = fb;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d &&
            null != b &&
            db(c, a, { configurable: !0, writable: !0, value: b });
        }
    };
    gb("Symbol", function (a) {
      if (a) return a;
      var b = function (f, g) {
        this.g = f;
        db(this, "description", { configurable: !0, writable: !0, value: g });
      };
      b.prototype.toString = function () {
        return this.g;
      };
      var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        d = 0,
        e = function (f) {
          if (this instanceof e) throw new TypeError("b");
          return new b(c + (f || "") + "_" + d++, f);
        };
      return e;
    });
    gb("Symbol.iterator", function (a) {
      if (a) return a;
      a = Symbol("c");
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " "
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = fb[b[c]];
        "function" === typeof d &&
          "function" != typeof d.prototype[a] &&
          db(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return hb(cb(this));
            },
          });
      }
      return a;
    });
    hb = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    };
    _.v = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: cb(a) };
      throw Error("d`" + String(a));
    };
    _.ib = function (a) {
      if (!(a instanceof Array)) {
        a = _.v(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    };
    jb =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          };
    if ("function" == typeof Object.setPrototypeOf) kb = Object.setPrototypeOf;
    else {
      var lb;
      a: {
        var mb = { a: !0 },
          nb = {};
        try {
          nb.__proto__ = mb;
          lb = nb.a;
          break a;
        } catch (a) {}
        lb = !1;
      }
      kb = lb
        ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("e`" + a);
            return a;
          }
        : null;
    }
    ob = kb;
    _.w = function (a, b) {
      a.prototype = jb(b.prototype);
      a.prototype.constructor = a;
      if (ob) ob(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.P = b.prototype;
    };
    _.pb = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    };
    gb("Promise", function (a) {
      function b() {
        this.g = null;
      }
      function c(g) {
        return g instanceof e
          ? g
          : new e(function (h) {
              h(g);
            });
      }
      if (a) return a;
      b.prototype.h = function (g) {
        if (null == this.g) {
          this.g = [];
          var h = this;
          this.j(function () {
            h.o();
          });
        }
        this.g.push(g);
      };
      var d = fb.setTimeout;
      b.prototype.j = function (g) {
        d(g, 0);
      };
      b.prototype.o = function () {
        for (; this.g && this.g.length; ) {
          var g = this.g;
          this.g = [];
          for (var h = 0; h < g.length; ++h) {
            var k = g[h];
            g[h] = null;
            try {
              k();
            } catch (m) {
              this.l(m);
            }
          }
        }
        this.g = null;
      };
      b.prototype.l = function (g) {
        this.j(function () {
          throw g;
        });
      };
      var e = function (g) {
        this.g = 0;
        this.j = void 0;
        this.h = [];
        this.A = !1;
        var h = this.l();
        try {
          g(h.resolve, h.reject);
        } catch (k) {
          h.reject(k);
        }
      };
      e.prototype.l = function () {
        function g(m) {
          return function (n) {
            k || ((k = !0), m.call(h, n));
          };
        }
        var h = this,
          k = !1;
        return { resolve: g(this.L), reject: g(this.o) };
      };
      e.prototype.L = function (g) {
        if (g === this) this.o(new TypeError("h"));
        else if (g instanceof e) this.N(g);
        else {
          a: switch (typeof g) {
            case "object":
              var h = null != g;
              break a;
            case "function":
              h = !0;
              break a;
            default:
              h = !1;
          }
          h ? this.H(g) : this.s(g);
        }
      };
      e.prototype.H = function (g) {
        var h = void 0;
        try {
          h = g.then;
        } catch (k) {
          this.o(k);
          return;
        }
        "function" == typeof h ? this.ha(h, g) : this.s(g);
      };
      e.prototype.o = function (g) {
        this.C(2, g);
      };
      e.prototype.s = function (g) {
        this.C(1, g);
      };
      e.prototype.C = function (g, h) {
        if (0 != this.g) throw Error("i`" + g + "`" + h + "`" + this.g);
        this.g = g;
        this.j = h;
        2 === this.g && this.G();
        this.F();
      };
      e.prototype.G = function () {
        var g = this;
        d(function () {
          if (g.D()) {
            var h = fb.console;
            "undefined" !== typeof h && h.error(g.j);
          }
        }, 1);
      };
      e.prototype.D = function () {
        if (this.A) return !1;
        var g = fb.CustomEvent,
          h = fb.Event,
          k = fb.dispatchEvent;
        if ("undefined" === typeof k) return !0;
        "function" === typeof g
          ? (g = new g("unhandledrejection", { cancelable: !0 }))
          : "function" === typeof h
          ? (g = new h("unhandledrejection", { cancelable: !0 }))
          : ((g = fb.document.createEvent("CustomEvent")),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.j;
        return k(g);
      };
      e.prototype.F = function () {
        if (null != this.h) {
          for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
          this.h = null;
        }
      };
      var f = new b();
      e.prototype.N = function (g) {
        var h = this.l();
        g.qd(h.resolve, h.reject);
      };
      e.prototype.ha = function (g, h) {
        var k = this.l();
        try {
          g.call(h, k.resolve, k.reject);
        } catch (m) {
          k.reject(m);
        }
      };
      e.prototype.then = function (g, h) {
        function k(r, t) {
          return "function" == typeof r
            ? function (y) {
                try {
                  m(r(y));
                } catch (G) {
                  n(G);
                }
              }
            : t;
        }
        var m,
          n,
          p = new e(function (r, t) {
            m = r;
            n = t;
          });
        this.qd(k(g, m), k(h, n));
        return p;
      };
      e.prototype.catch = function (g) {
        return this.then(void 0, g);
      };
      e.prototype.qd = function (g, h) {
        function k() {
          switch (m.g) {
            case 1:
              g(m.j);
              break;
            case 2:
              h(m.j);
              break;
            default:
              throw Error("j`" + m.g);
          }
        }
        var m = this;
        null == this.h ? f.h(k) : this.h.push(k);
        this.A = !0;
      };
      e.resolve = c;
      e.reject = function (g) {
        return new e(function (h, k) {
          k(g);
        });
      };
      e.race = function (g) {
        return new e(function (h, k) {
          for (var m = _.v(g), n = m.next(); !n.done; n = m.next())
            c(n.value).qd(h, k);
        });
      };
      e.all = function (g) {
        var h = _.v(g),
          k = h.next();
        return k.done
          ? c([])
          : new e(function (m, n) {
              function p(y) {
                return function (G) {
                  r[y] = G;
                  t--;
                  0 == t && m(r);
                };
              }
              var r = [],
                t = 0;
              do
                r.push(void 0),
                  t++,
                  c(k.value).qd(p(r.length - 1), n),
                  (k = h.next());
              while (!k.done);
            });
      };
      return e;
    });
    var qb = function (a, b, c) {
      if (null == a) throw new TypeError("k`" + c);
      if (b instanceof RegExp) throw new TypeError("l`" + c);
      return a + "";
    };
    gb("String.prototype.startsWith", function (a) {
      return a
        ? a
        : function (b, c) {
            var d = qb(this, b, "startsWith"),
              e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
            return g >= f;
          };
    });
    var rb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };
    gb("WeakMap", function (a) {
      function b() {}
      function c(k) {
        var m = typeof k;
        return ("object" === m && null !== k) || "function" === m;
      }
      function d(k) {
        if (!rb(k, f)) {
          var m = new b();
          db(k, f, { value: m });
        }
      }
      function e(k) {
        var m = Object[k];
        m &&
          (Object[k] = function (n) {
            if (n instanceof b) return n;
            Object.isExtensible(n) && d(n);
            return m(n);
          });
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var k = Object.seal({}),
              m = Object.seal({}),
              n = new a([
                [k, 2],
                [m, 3],
              ]);
            if (2 != n.get(k) || 3 != n.get(m)) return !1;
            n.delete(k);
            n.set(m, 4);
            return !n.has(k) && 4 == n.get(m);
          } catch (p) {
            return !1;
          }
        })()
      )
        return a;
      var f = "$jscomp_hidden_" + Math.random();
      e("freeze");
      e("preventExtensions");
      e("seal");
      var g = 0,
        h = function (k) {
          this.g = (g += Math.random() + 1).toString();
          if (k) {
            k = _.v(k);
            for (var m; !(m = k.next()).done; )
              (m = m.value), this.set(m[0], m[1]);
          }
        };
      h.prototype.set = function (k, m) {
        if (!c(k)) throw Error("m");
        d(k);
        if (!rb(k, f)) throw Error("n`" + k);
        k[f][this.g] = m;
        return this;
      };
      h.prototype.get = function (k) {
        return c(k) && rb(k, f) ? k[f][this.g] : void 0;
      };
      h.prototype.has = function (k) {
        return c(k) && rb(k, f) && rb(k[f], this.g);
      };
      h.prototype.delete = function (k) {
        return c(k) && rb(k, f) && rb(k[f], this.g) ? delete k[f][this.g] : !1;
      };
      return h;
    });
    gb("Map", function (a) {
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              k = new a(_.v([[h, "s"]]));
            if (
              "s" != k.get(h) ||
              1 != k.size ||
              k.get({ x: 4 }) ||
              k.set({ x: 4 }, "t") != k ||
              2 != k.size
            )
              return !1;
            var m = k.entries(),
              n = m.next();
            if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
            n = m.next();
            return n.done ||
              4 != n.value[0].x ||
              "t" != n.value[1] ||
              !m.next().done
              ? !1
              : !0;
          } catch (p) {
            return !1;
          }
        })()
      )
        return a;
      var b = new WeakMap(),
        c = function (h) {
          this.h = {};
          this.g = f();
          this.size = 0;
          if (h) {
            h = _.v(h);
            for (var k; !(k = h.next()).done; )
              (k = k.value), this.set(k[0], k[1]);
          }
        };
      c.prototype.set = function (h, k) {
        h = 0 === h ? 0 : h;
        var m = d(this, h);
        m.list || (m.list = this.h[m.id] = []);
        m.Ka
          ? (m.Ka.value = k)
          : ((m.Ka = {
              next: this.g,
              Lb: this.g.Lb,
              head: this.g,
              key: h,
              value: k,
            }),
            m.list.push(m.Ka),
            (this.g.Lb.next = m.Ka),
            (this.g.Lb = m.Ka),
            this.size++);
        return this;
      };
      c.prototype.delete = function (h) {
        h = d(this, h);
        return h.Ka && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this.h[h.id],
            (h.Ka.Lb.next = h.Ka.next),
            (h.Ka.next.Lb = h.Ka.Lb),
            (h.Ka.head = null),
            this.size--,
            !0)
          : !1;
      };
      c.prototype.clear = function () {
        this.h = {};
        this.g = this.g.Lb = f();
        this.size = 0;
      };
      c.prototype.has = function (h) {
        return !!d(this, h).Ka;
      };
      c.prototype.get = function (h) {
        return (h = d(this, h).Ka) && h.value;
      };
      c.prototype.entries = function () {
        return e(this, function (h) {
          return [h.key, h.value];
        });
      };
      c.prototype.keys = function () {
        return e(this, function (h) {
          return h.key;
        });
      };
      c.prototype.values = function () {
        return e(this, function (h) {
          return h.value;
        });
      };
      c.prototype.forEach = function (h, k) {
        for (var m = this.entries(), n; !(n = m.next()).done; )
          (n = n.value), h.call(k, n[1], n[0], this);
      };
      c.prototype[Symbol.iterator] = c.prototype.entries;
      var d = function (h, k) {
          var m = k && typeof k;
          "object" == m || "function" == m
            ? b.has(k)
              ? (m = b.get(k))
              : ((m = "" + ++g), b.set(k, m))
            : (m = "p_" + k);
          var n = h.h[m];
          if (n && rb(h.h, m))
            for (h = 0; h < n.length; h++) {
              var p = n[h];
              if ((k !== k && p.key !== p.key) || k === p.key)
                return { id: m, list: n, index: h, Ka: p };
            }
          return { id: m, list: n, index: -1, Ka: void 0 };
        },
        e = function (h, k) {
          var m = h.g;
          return hb(function () {
            if (m) {
              for (; m.head != h.g; ) m = m.Lb;
              for (; m.next != m.head; )
                return (m = m.next), { done: !1, value: k(m) };
              m = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        f = function () {
          var h = {};
          return (h.Lb = h.next = h.head = h);
        },
        g = 0;
      return c;
    });
    gb("Array.prototype.find", function (a) {
      return a
        ? a
        : function (b, c) {
            a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (b.call(c, g, f, d)) {
                  b = g;
                  break a;
                }
              }
              b = void 0;
            }
            return b;
          };
    });
    gb("String.prototype.endsWith", function (a) {
      return a
        ? a
        : function (b, c) {
            var d = qb(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c; )
              if (d[--c] != b[--e]) return !1;
            return 0 >= e;
          };
    });
    var sb = function (a, b) {
      a instanceof String && (a += "");
      var c = 0,
        d = !1,
        e = {
          next: function () {
            if (!d && c < a.length) {
              var f = c++;
              return { value: b(f, a[f]), done: !1 };
            }
            d = !0;
            return { done: !0, value: void 0 };
          },
        };
      e[Symbol.iterator] = function () {
        return e;
      };
      return e;
    };
    gb("Array.prototype.entries", function (a) {
      return a
        ? a
        : function () {
            return sb(this, function (b, c) {
              return [b, c];
            });
          };
    });
    gb("Array.prototype.keys", function (a) {
      return a
        ? a
        : function () {
            return sb(this, function (b) {
              return b;
            });
          };
    });
    gb("Array.from", function (a) {
      return a
        ? a
        : function (b, c, d) {
            c =
              null != c
                ? c
                : function (h) {
                    return h;
                  };
            var e = [],
              f =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                b[Symbol.iterator];
            if ("function" == typeof f) {
              b = f.call(b);
              for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++));
            } else
              for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e;
          };
    });
    gb("Array.prototype.values", function (a) {
      return a
        ? a
        : function () {
            return sb(this, function (b, c) {
              return c;
            });
          };
    });
    gb("Set", function (a) {
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(_.v([c]));
            if (
              !d.has(c) ||
              1 != d.size ||
              d.add(c) != d ||
              1 != d.size ||
              d.add({ x: 4 }) != d ||
              2 != d.size
            )
              return !1;
            var e = d.entries(),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done ||
              f.value[0] == c ||
              4 != f.value[0].x ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done;
          } catch (g) {
            return !1;
          }
        })()
      )
        return a;
      var b = function (c) {
        this.g = new Map();
        if (c) {
          c = _.v(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.g.size;
      };
      b.prototype.add = function (c) {
        c = 0 === c ? 0 : c;
        this.g.set(c, c);
        this.size = this.g.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.g.delete(c);
        this.size = this.g.size;
        return c;
      };
      b.prototype.clear = function () {
        this.g.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.g.has(c);
      };
      b.prototype.entries = function () {
        return this.g.entries();
      };
      b.prototype.values = function () {
        return this.g.values();
      };
      b.prototype.keys = b.prototype.values;
      b.prototype[Symbol.iterator] = b.prototype.values;
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.g.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    });
    var tb =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) rb(d, e) && (a[e] = d[e]);
            }
            return a;
          };
    gb("Object.assign", function (a) {
      return a || tb;
    });
    gb("Object.is", function (a) {
      return a
        ? a
        : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
          };
    });
    gb("Array.prototype.includes", function (a) {
      return a
        ? a
        : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
              var f = d[c];
              if (f === b || Object.is(f, b)) return !0;
            }
            return !1;
          };
    });
    gb("String.prototype.includes", function (a) {
      return a
        ? a
        : function (b, c) {
            return -1 !== qb(this, b, "includes").indexOf(b, c || 0);
          };
    });
    gb("Object.entries", function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) rb(b, d) && c.push([d, b[d]]);
            return c;
          };
    });
    gb("String.prototype.replaceAll", function (a) {
      return a
        ? a
        : function (b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("o");
            return b instanceof RegExp
              ? this.replace(b, c)
              : this.replace(
                  new RegExp(
                    String(b)
                      .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
                      .replace(/\x08/g, "\\x08"),
                    "g"
                  ),
                  c
                );
          };
    });
    _._DumpException =
      window._DumpException ||
      function (a) {
        throw a;
      };
    window._DumpException = _._DumpException;
    var ub, vb, xb, wb, Ab, Bb, Cb, Db, Hb;
    ub = ub || {};
    _.q = this || self;
    vb = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
    xb = function (a) {
      if ("string" !== typeof a || !a || -1 == a.search(vb)) throw Error("p");
      if (!wb || "goog" != wb.type) throw Error("q`" + a);
      if (wb.qj) throw Error("r");
      wb.qj = a;
    };
    xb.get = function () {
      return null;
    };
    wb = null;
    _.yb = function (a, b) {
      a = a.split(".");
      b = b || _.q;
      for (var c = 0; c < a.length; c++)
        if (((b = b[a[c]]), null == b)) return null;
      return b;
    };
    _.zb = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    };
    _.da = function (a) {
      var b = _.zb(a);
      return "array" == b || ("object" == b && "number" == typeof a.length);
    };
    _.ya = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    };
    _.za = function (a) {
      return (
        (Object.prototype.hasOwnProperty.call(a, Ab) && a[Ab]) || (a[Ab] = ++Bb)
      );
    };
    Ab = "closure_uid_" + ((1e9 * Math.random()) >>> 0);
    Bb = 0;
    Cb = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    };
    Db = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    };
    _.x = function (a, b, c) {
      _.x =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? Cb
          : Db;
      return _.x.apply(null, arguments);
    };
    _.Eb = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    };
    _.Fb = function () {
      return Date.now();
    };
    _.Gb = function (a, b) {
      a = a.split(".");
      var c = _.q;
      a[0] in c ||
        "undefined" == typeof c.execScript ||
        c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    };
    _.z = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.P = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.jl = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    };
    Hb = function (a) {
      return a;
    };
    _.z(_.aa, Error);
    _.aa.prototype.name = "CustomError";
    var Ib;
    _.A = function () {
      this.Ba = this.Ba;
      this.ha = this.ha;
    };
    _.A.prototype.Ba = !1;
    _.A.prototype.Xa = function () {
      return this.Ba;
    };
    _.A.prototype.T = function () {
      this.Ba || ((this.Ba = !0), this.K());
    };
    _.A.prototype.K = function () {
      if (this.ha) for (; this.ha.length; ) this.ha.shift()();
    };
    var Kb;
    _.Jb = function () {};
    Kb = function (a) {
      return function () {
        throw Error(a);
      };
    };
    var Lb,
      Mb = function () {
        if (void 0 === Lb) {
          var a = null,
            b = _.q.trustedTypes;
          if (b && b.createPolicy) {
            try {
              a = b.createPolicy("goog#html", {
                createHTML: Hb,
                createScript: Hb,
                createScriptURL: Hb,
              });
            } catch (c) {
              _.q.console && _.q.console.error(c.message);
            }
            Lb = a;
          } else Lb = a;
        }
        return Lb;
      };
    var Nb = {},
      Ob = function (a) {
        this.g = a;
        this.kb = !0;
      };
    Ob.prototype.toString = function () {
      return this.g.toString();
    };
    Ob.prototype.Qa = function () {
      return this.g.toString();
    };
    _.Pb = function (a) {
      return a instanceof Ob && a.constructor === Ob
        ? a.g
        : "type_error:SafeScript";
    };
    _.Qb = function (a) {
      var b = Mb();
      a = b ? b.createScript(a) : a;
      return new Ob(a, Nb);
    };
    var Tb;
    _.Rb = function (a) {
      this.g = a;
    };
    _.Rb.prototype.toString = function () {
      return this.g + "";
    };
    _.Rb.prototype.kb = !0;
    _.Rb.prototype.Qa = function () {
      return this.g.toString();
    };
    _.Ya = function (a) {
      return a instanceof _.Rb && a.constructor === _.Rb
        ? a.g
        : "type_error:TrustedResourceUrl";
    };
    _.Sb = RegExp(
      "^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)",
      "i"
    );
    Tb = {};
    _.ab = function (a) {
      var b = Mb();
      a = b ? b.createScriptURL(a) : a;
      return new _.Rb(a, Tb);
    };
    xb = xb || {};
    var Ub = function () {
      _.A.call(this);
    };
    _.z(Ub, _.A);
    Ub.prototype.initialize = function () {};
    var Vb = function (a, b) {
      this.g = a;
      this.h = b;
    };
    Vb.prototype.j = function (a) {
      this.g && (this.g.call(this.h || null, a), (this.g = this.h = null));
    };
    Vb.prototype.abort = function () {
      this.h = this.g = null;
    };
    var Wb = function (a, b) {
      _.A.call(this);
      this.h = a;
      this.s = b;
      this.l = [];
      this.j = [];
      this.o = [];
    };
    _.z(Wb, _.A);
    Wb.prototype.A = Ub;
    Wb.prototype.g = null;
    Wb.prototype.ib = function () {
      return this.s;
    };
    var Xb = function (a, b) {
      a.j.push(new Vb(b));
    };
    Wb.prototype.onLoad = function (a) {
      var b = new this.A();
      b.initialize(a());
      this.g = b;
      b = (b = !!Yb(this.o, a())) || !!Yb(this.l, a());
      b || (this.j.length = 0);
      return b;
    };
    Wb.prototype.af = function (a) {
      (a = Yb(this.j, a)) &&
        _.q.setTimeout(Kb("Module errback failures: " + a), 0);
      this.o.length = 0;
      this.l.length = 0;
    };
    var Yb = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        try {
          a[d].j(b);
        } catch (e) {
          ba(e), c.push(e);
        }
      a.length = 0;
      return c.length ? c : null;
    };
    Wb.prototype.K = function () {
      Wb.P.K.call(this);
      _.ca(this.g);
    };
    var Zb = function () {
      this.C = this.Ba = null;
    };
    _.l = Zb.prototype;
    _.l.Yg = function () {};
    _.l.mf = function () {};
    _.l.Vg = function () {
      throw Error("v");
    };
    _.l.hg = function () {
      return this.Ba;
    };
    _.l.nf = function (a) {
      this.Ba = a;
    };
    _.l.isActive = function () {
      return !1;
    };
    _.l.Cg = function () {
      return !1;
    };
    var ka;
    _.fa = null;
    _.ha = null;
    ka = [];
    var B = function (a, b) {
      this.h = a;
      this.g = b || null;
    };
    B.prototype.toString = function () {
      return this.h;
    };
    new B("ZtVrH");
    new B("rJmJrc", "rJmJrc");
    new B("fJuxOc");
    new B("NGntwf");
    new B("ofuapc");
    new B("BWETze");
    new B("ZmXAm");
    var $b = new B("n73qwf", "n73qwf");
    var qa = Symbol("x");
    var sa, bc;
    sa = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length
              ? -1
              : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        };
    _.ac = Array.prototype.forEach
      ? function (a, b) {
          Array.prototype.forEach.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = "string" === typeof a ? a.split("") : a,
              e = 0;
            e < c;
            e++
          )
            e in d && b.call(void 0, d[e], e, a);
        };
    bc = Array.prototype.reduce
      ? function (a, b, c) {
          Array.prototype.reduce.call(a, b, c);
        }
      : function (a, b, c) {
          var d = c;
          (0, _.ac)(a, function (e, f) {
            d = b.call(void 0, d, e, f, a);
          });
        };
    _.cc = Array.prototype.some
      ? function (a, b) {
          return Array.prototype.some.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = "string" === typeof a ? a.split("") : a,
              e = 0;
            e < c;
            e++
          )
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1;
        };
    var dc, ec;
    dc = _.yb("WIZ_global_data.oxN3nb");
    ec = dc && dc[610401301];
    _.Da = null != ec ? ec : !1;
    _.fc = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        };
    var gc;
    gc = _.q.navigator;
    _.Ea = gc ? gc.userAgentData || null : null;
    var hc = function (a) {
      hc[" "](a);
      return a;
    };
    hc[" "] = function () {};
    _.ic = function (a, b) {
      try {
        return hc(a[b]), !0;
      } catch (c) {}
      return !1;
    };
    var wc, xc, Cc;
    _.jc = _.Ga();
    _.C = _.Ha();
    _.kc = _.u("Edge");
    _.lc = _.kc || _.C;
    _.mc =
      _.u("Gecko") &&
      !(-1 != _.Ba().toLowerCase().indexOf("webkit") && !_.u("Edge")) &&
      !(_.u("Trident") || _.u("MSIE")) &&
      !_.u("Edge");
    _.nc = -1 != _.Ba().toLowerCase().indexOf("webkit") && !_.u("Edge");
    _.oc = _.nc && _.u("Mobile");
    _.pc = _.Na();
    _.qc = _.Oa();
    _.rc = _.Ka();
    _.sc = _.La();
    _.tc = _.u("iPad");
    _.uc = _.u("iPod");
    _.vc = _.Ma();
    wc = function () {
      var a = _.q.document;
      return a ? a.documentMode : void 0;
    };
    a: {
      var yc = "",
        zc = (function () {
          var a = _.Ba();
          if (_.mc) return /rv:([^\);]+)(\)|;)/.exec(a);
          if (_.kc) return /Edge\/([\d\.]+)/.exec(a);
          if (_.C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
          if (_.nc) return /WebKit\/(\S+)/.exec(a);
          if (_.jc) return /(?:Version)[ \/]?(\S+)/.exec(a);
        })();
      zc && (yc = zc ? zc[1] : "");
      if (_.C) {
        var Ac = wc();
        if (null != Ac && Ac > parseFloat(yc)) {
          xc = String(Ac);
          break a;
        }
      }
      xc = yc;
    }
    _.Bc = xc;
    if (_.q.document && _.C) {
      var Dc = wc();
      Cc = Dc ? Dc : parseInt(_.Bc, 10) || void 0;
    } else Cc = void 0;
    _.Ec = Cc;
    _.Fc = _.C || _.nc;
    var Ra;
    Ra =
      "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " "
      );
    _.Gc = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    };
    var Kc;
    _.Hc = function (a) {
      this.g = a;
    };
    _.Hc.prototype.toString = function () {
      return this.g.toString();
    };
    _.Hc.prototype.kb = !0;
    _.Hc.prototype.Qa = function () {
      return this.g.toString();
    };
    var Ic;
    try {
      new URL("s://g"), (Ic = !0);
    } catch (a) {
      Ic = !1;
    }
    _.Jc = Ic;
    Kc = {};
    _.Lc = function (a) {
      return new _.Hc(a, Kc);
    };
    _.Mc = _.Lc("about:invalid#zClosurez");
    _.Nc = {};
    _.Oc = function (a) {
      this.g = a;
      this.kb = !0;
    };
    _.Oc.prototype.Qa = function () {
      return this.g;
    };
    _.Oc.prototype.toString = function () {
      return this.g.toString();
    };
    _.Pc = new _.Oc("", _.Nc);
    _.Qc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
    _.Rc = RegExp(
      "\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))",
      "g"
    );
    _.Sc = RegExp(
      "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
      "g"
    );
    var Tc;
    Tc = {};
    _.Uc = function (a) {
      this.g = a;
      this.kb = !0;
    };
    _.Uc.prototype.Qa = function () {
      return this.g.toString();
    };
    _.Uc.prototype.toString = function () {
      return this.g.toString();
    };
    _.Vc = function (a) {
      return a instanceof _.Uc && a.constructor === _.Uc
        ? a.g
        : "type_error:SafeHtml";
    };
    _.Wc = function (a) {
      var b = Mb();
      a = b ? b.createHTML(a) : a;
      return new _.Uc(a, Tc);
    };
    _.Xc = _.Wc("<!DOCTYPE html>");
    _.Yc = new _.Uc((_.q.trustedTypes && _.q.trustedTypes.emptyHTML) || "", Tc);
    _.Zc = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      b = a.firstChild.firstChild;
      a.innerHTML = _.Vc(_.Yc);
      return !b.parentElement;
    });
    _.$c = function (a, b) {
      this.width = a;
      this.height = b;
    };
    _.ad = function (a, b) {
      return a == b
        ? !0
        : a && b
        ? a.width == b.width && a.height == b.height
        : !1;
    };
    _.$c.prototype.aspectRatio = function () {
      return this.width / this.height;
    };
    _.$c.prototype.ceil = function () {
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this;
    };
    _.$c.prototype.floor = function () {
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this;
    };
    _.$c.prototype.round = function () {
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this;
    };
    _.bd = function (a) {
      return encodeURIComponent(String(a));
    };
    _.cd = function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "));
    };
    _.dd = function () {
      return (
        Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ _.Fb()).toString(36)
      );
    };
    var jd, id;
    _.gd = function (a) {
      return a ? new _.ed(_.fd(a)) : Ib || (Ib = new _.ed());
    };
    _.hd = function (a, b) {
      return "string" === typeof b ? a.getElementById(b) : b;
    };
    jd = function (a, b) {
      _.Gc(b, function (c, d) {
        c && "object" == typeof c && c.kb && (c = c.Qa());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : id.hasOwnProperty(d)
          ? a.setAttribute(id[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    };
    id = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width",
    };
    _.ld = function (a) {
      a = a.document;
      a = _.kd(a) ? a.documentElement : a.body;
      return new _.$c(a.clientWidth, a.clientHeight);
    };
    _.md = function (a) {
      return a ? a.parentWindow || a.defaultView : window;
    };
    _.pd = function (a, b) {
      var c = b[1],
        d = _.nd(a, String(b[0]));
      c &&
        ("string" === typeof c
          ? (d.className = c)
          : Array.isArray(c)
          ? (d.className = c.join(" "))
          : jd(d, c));
      2 < b.length && _.od(a, d, b, 2);
      return d;
    };
    _.od = function (a, b, c, d) {
      function e(h) {
        h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!_.da(f) || (_.ya(f) && 0 < f.nodeType)) e(f);
        else {
          a: {
            if (f && "number" == typeof f.length) {
              if (_.ya(f)) {
                var g =
                  "function" == typeof f.item || "string" == typeof f.item;
                break a;
              }
              if ("function" === typeof f) {
                g = "function" == typeof f.item;
                break a;
              }
            }
            g = !1;
          }
          _.ac(g ? _.wa(f) : f, e);
        }
      }
    };
    _.nd = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    };
    _.kd = function (a) {
      return "CSS1Compat" == a.compatMode;
    };
    _.qd = function (a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    };
    _.rd = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; ) b = b.parentNode;
      return b == a;
    };
    _.fd = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    };
    _.sd = function (a, b) {
      if ("textContent" in a) a.textContent = b;
      else if (3 == a.nodeType) a.data = String(b);
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
        a.firstChild.data = String(b);
      } else _.qd(a), a.appendChild(_.fd(a).createTextNode(String(b)));
    };
    _.ed = function (a) {
      this.g = a || _.q.document || document;
    };
    _.ed.prototype.B = function (a) {
      return _.hd(this.g, a);
    };
    _.ed.prototype.R = function (a, b, c) {
      return _.pd(this.g, arguments);
    };
    _.td = function (a) {
      a = a.g;
      return a.parentWindow || a.defaultView;
    };
    _.ed.prototype.appendChild = function (a, b) {
      a.appendChild(b);
    };
    _.ed.prototype.df = _.qd;
    _.ed.prototype.h = _.rd;
    _.ed.prototype.Hc = _.sd;
    var ud = function () {
      this.id = "b";
    };
    ud.prototype.toString = function () {
      return this.id;
    };
    _.vd = function (a, b) {
      this.type = a instanceof ud ? String(a) : a;
      this.currentTarget = this.target = b;
      this.defaultPrevented = this.h = !1;
    };
    _.vd.prototype.stopPropagation = function () {
      this.h = !0;
    };
    _.vd.prototype.preventDefault = function () {
      this.defaultPrevented = !0;
    };
    var wd = (function () {
      if (!_.q.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
      try {
        var c = function () {};
        _.q.addEventListener("test", c, b);
        _.q.removeEventListener("test", c, b);
      } catch (d) {}
      return a;
    })();
    _.yd = function (a, b) {
      _.vd.call(this, a ? a.type : "");
      this.relatedTarget = this.currentTarget = this.target = null;
      this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
        this.offsetY =
        this.offsetX =
          0;
      this.key = "";
      this.charCode = this.keyCode = 0;
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.state = null;
      this.j = !1;
      this.pointerId = 0;
      this.pointerType = "";
      this.g = null;
      if (a) {
        var c = (this.type = a.type),
          d =
            a.changedTouches && a.changedTouches.length
              ? a.changedTouches[0]
              : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget)
          ? _.mc && (_.ic(b, "nodeName") || (b = null))
          : "mouseover" == c
          ? (b = a.fromElement)
          : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d
          ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
            (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
            (this.screenX = d.screenX || 0),
            (this.screenY = d.screenY || 0))
          : ((this.offsetX =
              _.nc || void 0 !== a.offsetX ? a.offsetX : a.layerX),
            (this.offsetY =
              _.nc || void 0 !== a.offsetY ? a.offsetY : a.layerY),
            (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
            (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
            (this.screenX = a.screenX || 0),
            (this.screenY = a.screenY || 0));
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.j = _.pc ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType =
          "string" === typeof a.pointerType
            ? a.pointerType
            : xd[a.pointerType] || "";
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && _.yd.P.preventDefault.call(this);
      }
    };
    _.z(_.yd, _.vd);
    var xd = { 2: "touch", 3: "pen", 4: "mouse" };
    _.yd.prototype.stopPropagation = function () {
      _.yd.P.stopPropagation.call(this);
      this.g.stopPropagation
        ? this.g.stopPropagation()
        : (this.g.cancelBubble = !0);
    };
    _.yd.prototype.preventDefault = function () {
      _.yd.P.preventDefault.call(this);
      var a = this.g;
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
    };
    var zd;
    zd = "closure_listenable_" + ((1e6 * Math.random()) | 0);
    _.Ad = function (a) {
      return !(!a || !a[zd]);
    };
    var Bd = 0;
    var Cd = function (a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Hd = e;
        this.key = ++Bd;
        this.bd = this.pd = !1;
      },
      Dd = function (a) {
        a.bd = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Hd = null;
      };
    var Ed = function (a) {
        this.src = a;
        this.g = {};
        this.h = 0;
      },
      Gd;
    Ed.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();
      a = this.g[f];
      a || ((a = this.g[f] = []), this.h++);
      var g = Fd(a, b, d, e);
      -1 < g
        ? ((b = a[g]), c || (b.pd = !1))
        : ((b = new Cd(b, this.src, f, !!d, e)), (b.pd = c), a.push(b));
      return b;
    };
    Ed.prototype.remove = function (a, b, c, d) {
      a = a.toString();
      if (!(a in this.g)) return !1;
      var e = this.g[a];
      b = Fd(e, b, c, d);
      return -1 < b
        ? (Dd(e[b]),
          Array.prototype.splice.call(e, b, 1),
          0 == e.length && (delete this.g[a], this.h--),
          !0)
        : !1;
    };
    Gd = function (a, b) {
      var c = b.type;
      if (!(c in a.g)) return !1;
      var d = _.va(a.g[c], b);
      d && (Dd(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
      return d;
    };
    _.Hd = function (a) {
      var b = 0,
        c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Dd(d[e]);
        delete a.g[c];
        a.h--;
      }
    };
    Ed.prototype.Wc = function (a, b, c, d) {
      a = this.g[a.toString()];
      var e = -1;
      a && (e = Fd(a, b, c, d));
      return -1 < e ? a[e] : null;
    };
    Ed.prototype.hasListener = function (a, b) {
      var c = void 0 !== a,
        d = c ? a.toString() : "",
        e = void 0 !== b;
      return Pa(this.g, function (f) {
        for (var g = 0; g < f.length; ++g)
          if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
        return !1;
      });
    };
    var Fd = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.bd && f.listener == b && f.capture == !!c && f.Hd == d) return e;
      }
      return -1;
    };
    var Jd, Kd, Ld, Od, Qd, Rd, Sd, Vd, Nd;
    Jd = "closure_lm_" + ((1e6 * Math.random()) | 0);
    Kd = {};
    Ld = 0;
    _.D = function (a, b, c, d, e) {
      if (d && d.once) return _.Md(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) _.D(a, b[f], c, d, e);
        return null;
      }
      c = Nd(c);
      return _.Ad(a)
        ? a.I(b, c, _.ya(d) ? !!d.capture : !!d, e)
        : Od(a, b, c, !1, d, e);
    };
    Od = function (a, b, c, d, e, f) {
      if (!b) throw Error("C");
      var g = _.ya(e) ? !!e.capture : !!e,
        h = _.Pd(a);
      h || (a[Jd] = h = new Ed(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = Qd();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        wd || (e = g),
          void 0 === e && (e = !1),
          a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Rd(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("D");
      Ld++;
      return c;
    };
    Qd = function () {
      var a = Sd,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    };
    _.Md = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) _.Md(a, b[f], c, d, e);
        return null;
      }
      c = Nd(c);
      return _.Ad(a)
        ? a.Rb(b, c, _.ya(d) ? !!d.capture : !!d, e)
        : Od(a, b, c, !0, d, e);
    };
    _.Td = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) _.Td(a, b[f], c, d, e);
      else
        (d = _.ya(d) ? !!d.capture : !!d),
          (c = Nd(c)),
          _.Ad(a)
            ? a.mb(b, c, d, e)
            : a && (a = _.Pd(a)) && (b = a.Wc(b, c, d, e)) && _.Ud(b);
    };
    _.Ud = function (a) {
      if ("number" === typeof a || !a || a.bd) return !1;
      var b = a.src;
      if (_.Ad(b)) return Gd(b.Ya, a);
      var c = a.type,
        d = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Rd(c), d)
        : b.addListener && b.removeListener && b.removeListener(d);
      Ld--;
      (c = _.Pd(b))
        ? (Gd(c, a), 0 == c.h && ((c.src = null), (b[Jd] = null)))
        : Dd(a);
      return !0;
    };
    Rd = function (a) {
      return a in Kd ? Kd[a] : (Kd[a] = "on" + a);
    };
    Sd = function (a, b) {
      if (a.bd) a = !0;
      else {
        b = new _.yd(b, this);
        var c = a.listener,
          d = a.Hd || a.src;
        a.pd && _.Ud(a);
        a = c.call(d, b);
      }
      return a;
    };
    _.Pd = function (a) {
      a = a[Jd];
      return a instanceof Ed ? a : null;
    };
    Vd = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
    Nd = function (a) {
      if ("function" === typeof a) return a;
      a[Vd] ||
        (a[Vd] = function (b) {
          return a.handleEvent(b);
        });
      return a[Vd];
    };
    _.E = function () {
      _.A.call(this);
      this.Ya = new Ed(this);
      this.Nh = this;
      this.Vd = null;
    };
    _.z(_.E, _.A);
    _.E.prototype[zd] = !0;
    _.l = _.E.prototype;
    _.l.Yd = function (a) {
      this.Vd = a;
    };
    _.l.addEventListener = function (a, b, c, d) {
      _.D(this, a, b, c, d);
    };
    _.l.removeEventListener = function (a, b, c, d) {
      _.Td(this, a, b, c, d);
    };
    _.l.dispatchEvent = function (a) {
      var b,
        c = this.Vd;
      if (c) for (b = []; c; c = c.Vd) b.push(c);
      c = this.Nh;
      var d = a.type || a;
      if ("string" === typeof a) a = new _.vd(a, c);
      else if (a instanceof _.vd) a.target = a.target || c;
      else {
        var e = a;
        a = new _.vd(d, c);
        Sa(a, e);
      }
      e = !0;
      if (b)
        for (var f = b.length - 1; !a.h && 0 <= f; f--) {
          var g = (a.currentTarget = b[f]);
          e = Wd(g, d, !0, a) && e;
        }
      a.h ||
        ((g = a.currentTarget = c),
        (e = Wd(g, d, !0, a) && e),
        a.h || (e = Wd(g, d, !1, a) && e));
      if (b)
        for (f = 0; !a.h && f < b.length; f++)
          (g = a.currentTarget = b[f]), (e = Wd(g, d, !1, a) && e);
      return e;
    };
    _.l.K = function () {
      _.E.P.K.call(this);
      this.Ya && _.Hd(this.Ya);
      this.Vd = null;
    };
    _.l.I = function (a, b, c, d) {
      return this.Ya.add(String(a), b, !1, c, d);
    };
    _.l.Rb = function (a, b, c, d) {
      return this.Ya.add(String(a), b, !0, c, d);
    };
    _.l.mb = function (a, b, c, d) {
      return this.Ya.remove(String(a), b, c, d);
    };
    var Wd = function (a, b, c, d) {
      b = a.Ya.g[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.bd && g.capture == c) {
          var h = g.listener,
            k = g.Hd || g.src;
          g.pd && Gd(a.Ya, g);
          e = !1 !== h.call(k, d) && e;
        }
      }
      return e && !d.defaultPrevented;
    };
    _.E.prototype.Wc = function (a, b, c, d) {
      return this.Ya.Wc(String(a), b, c, d);
    };
    _.E.prototype.hasListener = function (a, b) {
      return this.Ya.hasListener(void 0 !== a ? String(a) : void 0, b);
    };
    var Xd = function (a) {
      _.E.call(this);
      this.g = a || window;
      this.h = _.D(this.g, "resize", this.l, !1, this);
      this.j = _.ld(this.g || window);
    };
    _.z(Xd, _.E);
    Xd.prototype.K = function () {
      Xd.P.K.call(this);
      this.h && (_.Ud(this.h), (this.h = null));
      this.j = this.g = null;
    };
    Xd.prototype.l = function () {
      var a = _.ld(this.g || window);
      _.ad(a, this.j) || ((this.j = a), this.dispatchEvent("resize"));
    };
    var Yd = function (a) {
      _.E.call(this);
      this.j = a ? _.td(a) : window;
      this.o = 1.5 <= this.j.devicePixelRatio ? 2 : 1;
      this.h = (0, _.x)(this.s, this);
      this.l = null;
      (this.g = this.j.matchMedia
        ? this.j.matchMedia(
            "(min-resolution: 1.5dppx), (-webkit-min-device-pixel-ratio: 1.5)"
          )
        : null) &&
        "function" !== typeof this.g.addListener &&
        "function" !== typeof this.g.addEventListener &&
        (this.g = null);
    };
    _.z(Yd, _.E);
    Yd.prototype.start = function () {
      var a = this;
      this.g &&
        ("function" === typeof this.g.addEventListener
          ? (this.g.addEventListener("change", this.h),
            (this.l = function () {
              a.g.removeEventListener("change", a.h);
            }))
          : (this.g.addListener(this.h),
            (this.l = function () {
              a.g.removeListener(a.h);
            })));
    };
    Yd.prototype.s = function () {
      var a = 1.5 <= this.j.devicePixelRatio ? 2 : 1;
      this.o != a && ((this.o = a), this.dispatchEvent("a"));
    };
    Yd.prototype.K = function () {
      this.l && this.l();
      Yd.P.K.call(this);
    };
    var Zd = function (a, b) {
      _.A.call(this);
      this.o = a;
      if (b) {
        if (this.l) throw Error("E");
        this.l = b;
        this.h = _.gd(b);
        this.g = new Xd(_.md(b));
        this.g.Yd(this.o.h());
        this.j = new Yd(this.h);
        this.j.start();
      }
    };
    _.z(Zd, _.A);
    Zd.prototype.K = function () {
      this.h = this.l = null;
      this.g && (this.g.T(), (this.g = null));
      _.ca(this.j);
      this.j = null;
    };
    ra($b, Zd);
    var $d = function (a, b) {
      this.l = a;
      this.j = b;
      this.h = 0;
      this.g = null;
    };
    $d.prototype.get = function () {
      if (0 < this.h) {
        this.h--;
        var a = this.g;
        this.g = a.next;
        a.next = null;
      } else a = this.l();
      return a;
    };
    var ae = function (a, b) {
      a.j(b);
      100 > a.h && (a.h++, (b.next = a.g), (a.g = b));
    };
    var be,
      ce = function () {
        var a = _.q.MessageChannel;
        "undefined" === typeof a &&
          "undefined" !== typeof window &&
          window.postMessage &&
          window.addEventListener &&
          !_.u("Presto") &&
          (a = function () {
            var e = _.nd(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
              h =
                "file:" == f.location.protocol
                  ? "*"
                  : f.location.protocol + "//" + f.location.host;
            e = (0, _.x)(function (k) {
              if (("*" == h || k.origin == h) && k.data == g)
                this.port1.onmessage();
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
              postMessage: function () {
                f.postMessage(g, h);
              },
            };
          });
        if ("undefined" !== typeof a && !_.Ha()) {
          var b = new a(),
            c = {},
            d = c;
          b.port1.onmessage = function () {
            if (void 0 !== c.next) {
              c = c.next;
              var e = c.Vf;
              c.Vf = null;
              e();
            }
          };
          return function (e) {
            d.next = { Vf: e };
            d = d.next;
            b.port2.postMessage(0);
          };
        }
        return function (e) {
          _.q.setTimeout(e, 0);
        };
      };
    var de = function () {
      this.h = this.g = null;
    };
    de.prototype.add = function (a, b) {
      var c = ee.get();
      c.set(a, b);
      this.h ? (this.h.next = c) : (this.g = c);
      this.h = c;
    };
    de.prototype.remove = function () {
      var a = null;
      this.g &&
        ((a = this.g),
        (this.g = this.g.next),
        this.g || (this.h = null),
        (a.next = null));
      return a;
    };
    var ee = new $d(
        function () {
          return new fe();
        },
        function (a) {
          return a.reset();
        }
      ),
      fe = function () {
        this.next = this.g = this.h = null;
      };
    fe.prototype.set = function (a, b) {
      this.h = a;
      this.g = b;
      this.next = null;
    };
    fe.prototype.reset = function () {
      this.next = this.g = this.h = null;
    };
    var ge,
      he = !1,
      ie = new de(),
      ke = function (a, b) {
        ge || je();
        he || (ge(), (he = !0));
        ie.add(a, b);
      },
      je = function () {
        if (_.q.Promise && _.q.Promise.resolve) {
          var a = _.q.Promise.resolve(void 0);
          ge = function () {
            a.then(le);
          };
        } else
          ge = function () {
            var b = le;
            "function" !== typeof _.q.setImmediate ||
            (_.q.Window &&
              _.q.Window.prototype &&
              !_.Ia() &&
              _.q.Window.prototype.setImmediate == _.q.setImmediate)
              ? (be || (be = ce()), be(b))
              : _.q.setImmediate(b);
          };
      },
      le = function () {
        for (var a; (a = ie.remove()); ) {
          try {
            a.h.call(a.g);
          } catch (b) {
            ba(b);
          }
          ae(ee, a);
        }
        he = !1;
      };
    var me = function (a) {
      if (!a) return !1;
      try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };
    var oe, ye, we, ue;
    _.F = function (a) {
      this.g = 0;
      this.A = void 0;
      this.l = this.h = this.j = null;
      this.o = this.s = !1;
      if (a != _.Jb)
        try {
          var b = this;
          a.call(
            void 0,
            function (c) {
              _.ne(b, 2, c);
            },
            function (c) {
              _.ne(b, 3, c);
            }
          );
        } catch (c) {
          _.ne(this, 3, c);
        }
    };
    oe = function () {
      this.next = this.j = this.h = this.l = this.g = null;
      this.o = !1;
    };
    oe.prototype.reset = function () {
      this.j = this.h = this.l = this.g = null;
      this.o = !1;
    };
    var pe = new $d(
        function () {
          return new oe();
        },
        function (a) {
          a.reset();
        }
      ),
      qe = function (a, b, c) {
        var d = pe.get();
        d.l = a;
        d.h = b;
        d.j = c;
        return d;
      };
    _.F.prototype.then = function (a, b, c) {
      return re(
        this,
        "function" === typeof a ? a : null,
        "function" === typeof b ? b : null,
        c
      );
    };
    _.F.prototype.$goog_Thenable = !0;
    _.F.prototype.C = function (a, b) {
      return re(this, null, a, b);
    };
    _.F.prototype.catch = _.F.prototype.C;
    _.F.prototype.cancel = function (a) {
      if (0 == this.g) {
        var b = new se(a);
        ke(function () {
          te(this, b);
        }, this);
      }
    };
    var te = function (a, b) {
        if (0 == a.g)
          if (a.j) {
            var c = a.j;
            if (c.h) {
              for (
                var d = 0, e = null, f = null, g = c.h;
                g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d)));
                g = g.next
              )
                e || (f = g);
              e &&
                (0 == c.g && 1 == d
                  ? te(c, b)
                  : (f
                      ? ((d = f),
                        d.next == c.l && (c.l = d),
                        (d.next = d.next.next))
                      : ue(c),
                    ve(c, e, 3, b)));
            }
            a.j = null;
          } else _.ne(a, 3, b);
      },
      xe = function (a, b) {
        a.h || (2 != a.g && 3 != a.g) || we(a);
        a.l ? (a.l.next = b) : (a.h = b);
        a.l = b;
      },
      re = function (a, b, c, d) {
        var e = qe(null, null, null);
        e.g = new _.F(function (f, g) {
          e.l = b
            ? function (h) {
                try {
                  var k = b.call(d, h);
                  f(k);
                } catch (m) {
                  g(m);
                }
              }
            : f;
          e.h = c
            ? function (h) {
                try {
                  var k = c.call(d, h);
                  void 0 === k && h instanceof se ? g(h) : f(k);
                } catch (m) {
                  g(m);
                }
              }
            : g;
        });
        e.g.j = a;
        xe(a, e);
        return e.g;
      };
    _.F.prototype.D = function (a) {
      this.g = 0;
      _.ne(this, 2, a);
    };
    _.F.prototype.H = function (a) {
      this.g = 0;
      _.ne(this, 3, a);
    };
    _.ne = function (a, b, c) {
      if (0 == a.g) {
        a === c && ((b = 3), (c = new TypeError("F")));
        a.g = 1;
        a: {
          var d = c,
            e = a.D,
            f = a.H;
          if (d instanceof _.F) {
            xe(d, qe(e || _.Jb, f || null, a));
            var g = !0;
          } else if (me(d)) d.then(e, f, a), (g = !0);
          else {
            if (_.ya(d))
              try {
                var h = d.then;
                if ("function" === typeof h) {
                  ye(d, h, e, f, a);
                  g = !0;
                  break a;
                }
              } catch (k) {
                f.call(a, k);
                g = !0;
                break a;
              }
            g = !1;
          }
        }
        g ||
          ((a.A = c),
          (a.g = b),
          (a.j = null),
          we(a),
          3 != b || c instanceof se || ze(a, c));
      }
    };
    ye = function (a, b, c, d, e) {
      var f = !1,
        g = function (k) {
          f || ((f = !0), c.call(e, k));
        },
        h = function (k) {
          f || ((f = !0), d.call(e, k));
        };
      try {
        b.call(a, g, h);
      } catch (k) {
        h(k);
      }
    };
    we = function (a) {
      a.s || ((a.s = !0), ke(a.F, a));
    };
    ue = function (a) {
      var b = null;
      a.h && ((b = a.h), (a.h = b.next), (b.next = null));
      a.h || (a.l = null);
      return b;
    };
    _.F.prototype.F = function () {
      for (var a; (a = ue(this)); ) ve(this, a, this.g, this.A);
      this.s = !1;
    };
    var ve = function (a, b, c, d) {
        if (3 == c && b.h && !b.o) for (; a && a.o; a = a.j) a.o = !1;
        if (b.g) (b.g.j = null), Ae(b, c, d);
        else
          try {
            b.o ? b.l.call(b.j) : Ae(b, c, d);
          } catch (e) {
            Be.call(null, e);
          }
        ae(pe, b);
      },
      Ae = function (a, b, c) {
        2 == b ? a.l.call(a.j, c) : a.h && a.h.call(a.j, c);
      },
      ze = function (a, b) {
        a.o = !0;
        ke(function () {
          a.o && Be.call(null, b);
        });
      },
      Be = ba,
      se = function (a) {
        _.aa.call(this, a);
      };
    _.z(se, _.aa);
    se.prototype.name = "cancel"; /*
  
   Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: MIT
  */
    var Ce = function (a, b) {
      this.s = [];
      this.G = a;
      this.L = b || null;
      this.l = this.g = !1;
      this.j = void 0;
      this.D = this.N = this.C = !1;
      this.A = 0;
      this.h = null;
      this.o = 0;
    };
    _.z(Ce, Ua);
    Ce.prototype.cancel = function (a) {
      if (this.g) this.j instanceof Ce && this.j.cancel();
      else {
        if (this.h) {
          var b = this.h;
          delete this.h;
          a ? b.cancel(a) : (b.o--, 0 >= b.o && b.cancel());
        }
        this.G ? this.G.call(this.L, this) : (this.D = !0);
        this.g || this.F(new De(this));
      }
    };
    Ce.prototype.H = function (a, b) {
      this.C = !1;
      Ee(this, a, b);
    };
    var Ee = function (a, b, c) {
        a.g = !0;
        a.j = c;
        a.l = !b;
        Fe(a);
      },
      He = function (a) {
        if (a.g) {
          if (!a.D) throw new Ge(a);
          a.D = !1;
        }
      };
    Ce.prototype.callback = function (a) {
      He(this);
      Ee(this, !0, a);
    };
    Ce.prototype.F = function (a) {
      He(this);
      Ee(this, !1, a);
    };
    var Je = function (a, b, c) {
        Ie(a, b, null, c);
      },
      Ke = function (a, b, c) {
        Ie(a, null, b, c);
      },
      Ie = function (a, b, c, d) {
        a.s.push([b, c, d]);
        a.g && Fe(a);
      };
    Ce.prototype.then = function (a, b, c) {
      var d,
        e,
        f = new _.F(function (g, h) {
          e = g;
          d = h;
        });
      Ie(
        this,
        e,
        function (g) {
          g instanceof De ? f.cancel() : d(g);
          return Le;
        },
        this
      );
      return f.then(a, b, c);
    };
    Ce.prototype.$goog_Thenable = !0;
    var Me = function (a, b) {
      b instanceof Ce
        ? Je(a, (0, _.x)(b.ha, b))
        : Je(a, function () {
            return b;
          });
    };
    Ce.prototype.ha = function (a) {
      var b = new Ce();
      Ie(this, b.callback, b.F, b);
      a && ((b.h = this), this.o++);
      return b;
    };
    var Ne = function (a) {
        return _.cc(a.s, function (b) {
          return "function" === typeof b[1];
        });
      },
      Le = {},
      Fe = function (a) {
        if (a.A && a.g && Ne(a)) {
          var b = a.A,
            c = Oe[b];
          c && (_.q.clearTimeout(c.g), delete Oe[b]);
          a.A = 0;
        }
        a.h && (a.h.o--, delete a.h);
        b = a.j;
        for (var d = (c = !1); a.s.length && !a.C; ) {
          var e = a.s.shift(),
            f = e[0],
            g = e[1];
          e = e[2];
          if ((f = a.l ? g : f))
            try {
              var h = f.call(e || a.L, b);
              h === Le && (h = void 0);
              void 0 !== h &&
                ((a.l = a.l && (h == b || h instanceof Error)), (a.j = b = h));
              if (
                me(b) ||
                ("function" === typeof _.q.Promise && b instanceof _.q.Promise)
              )
                (d = !0), (a.C = !0);
            } catch (k) {
              (b = k), (a.l = !0), Ne(a) || (c = !0);
            }
        }
        a.j = b;
        d &&
          ((h = (0, _.x)(a.H, a, !0)),
          (d = (0, _.x)(a.H, a, !1)),
          b instanceof Ce ? (Ie(b, h, d), (b.N = !0)) : b.then(h, d));
        c && ((b = new Pe(b)), (Oe[b.g] = b), (a.A = b.g));
      },
      Ge = function () {
        _.aa.call(this);
      };
    _.z(Ge, _.aa);
    Ge.prototype.message = "Deferred has already fired";
    Ge.prototype.name = "AlreadyCalledError";
    var De = function () {
      _.aa.call(this);
    };
    _.z(De, _.aa);
    De.prototype.message = "Deferred was canceled";
    De.prototype.name = "CanceledError";
    var Pe = function (a) {
      this.g = _.q.setTimeout((0, _.x)(this.j, this), 0);
      this.h = a;
    };
    Pe.prototype.j = function () {
      delete Oe[this.g];
      throw this.h;
    };
    var Oe = {};
    var Qe = function (a, b) {
      this.type = a;
      this.status = b;
    };
    Qe.prototype.toString = function () {
      return (
        Re(this) + " (" + (void 0 != this.status ? this.status : "?") + ")"
      );
    };
    var Re = function (a) {
      switch (a.type) {
        case Qe.g.Of:
          return "Unauthorized";
        case Qe.g.Df:
          return "Consecutive load failures";
        case Qe.g.TIMEOUT:
          return "Timed out";
        case Qe.g.Mf:
          return "Out of date module id";
        case Qe.g.fe:
          return "Init error";
        default:
          return "Unknown failure type " + a.type;
      }
    };
    xb.Ua = Qe;
    xb.Ua.g = { Of: 0, Df: 1, TIMEOUT: 2, Mf: 3, fe: 4 };
    var Se = function () {
      Zb.call(this);
      this.g = {};
      this.j = [];
      this.l = [];
      this.L = [];
      this.h = [];
      this.A = [];
      this.s = {};
      this.N = {};
      this.o = this.F = new Wb([], "");
      this.ha = null;
      this.H = new Ce();
      this.G = !1;
      this.D = 0;
      this.S = this.U = this.Y = !1;
    };
    _.z(Se, Zb);
    var Te = function (a, b) {
      _.aa.call(this, "Error loading " + a + ": " + b);
    };
    _.z(Te, _.aa);
    _.l = Se.prototype;
    _.l.Yg = function (a) {
      this.G = a;
    };
    _.l.mf = function (a, b) {
      if (!(this instanceof Se)) this.mf(a, b);
      else if ("string" === typeof a) {
        a = a.split("/");
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a[d].split(":"),
            f = e[0];
          if (e[1]) {
            e = e[1].split(",");
            for (var g = 0; g < e.length; g++) e[g] = c[parseInt(e[g], 36)];
          } else e = [];
          c.push(f);
          this.g[f]
            ? ((f = this.g[f].h),
              f != e && f.splice.apply(f, [0, f.length].concat(_.ib(e))))
            : (this.g[f] = new Wb(e, f));
        }
        b && b.length
          ? (xa(this.j, b), (this.ha = b[b.length - 1]))
          : this.H.g || this.H.callback();
        Ue(this);
      }
    };
    _.l.Vg = function (a, b) {
      if (this.s[a]) {
        delete this.s[a][b];
        for (var c in this.s[a]) return;
        delete this.s[a];
      }
    };
    _.l.nf = function (a) {
      Se.P.nf.call(this, a);
      Ue(this);
    };
    _.l.isActive = function () {
      return 0 < this.j.length;
    };
    _.l.Cg = function () {
      return 0 < this.A.length;
    };
    var We = function (a) {
        var b = a.Y,
          c = a.isActive();
        c != b && (Ve(a, c ? "active" : "idle"), (a.Y = c));
        b = a.Cg();
        b != a.U && (Ve(a, b ? "userActive" : "userIdle"), (a.U = b));
      },
      Ze = function (a, b, c) {
        var d = [];
        Aa(b, d);
        b = [];
        for (var e = {}, f = 0; f < d.length; f++) {
          var g = d[f],
            h = a.g[g];
          if (!h) throw Error("G`" + g);
          var k = new Ce();
          e[g] = k;
          h.g ? k.callback(a.Ba) : (Xe(a, g, h, !!c, k), Ye(a, g) || b.push(g));
        }
        0 < b.length && (0 === a.j.length ? a.M(b) : (a.h.push(b), We(a)));
        return e;
      },
      Xe = function (a, b, c, d, e) {
        c.l.push(new Vb(e.callback, e));
        Xb(c, function (f) {
          e.F(new Te(b, f));
        });
        Ye(a, b)
          ? d && (_.ta(a.A, b) || a.A.push(b), We(a))
          : d && (_.ta(a.A, b) || a.A.push(b));
      };
    Se.prototype.M = function (a, b, c) {
      var d = this;
      b || (this.D = 0);
      var e = $e(this, a);
      this.j = e;
      this.l = this.G ? a : _.wa(e);
      We(this);
      if (0 !== e.length) {
        this.L.push.apply(this.L, e);
        if (0 < Object.keys(this.s).length && !this.C.G) throw Error("H");
        a = (0, _.x)(this.C.H, this.C, _.wa(e), this.g, {
          bi: this.s,
          fi: !!c,
          af: function (f) {
            var g = d.l;
            f = null != f ? f : void 0;
            d.D++;
            d.l = g;
            e.forEach(_.Eb(_.va, d.L), d);
            401 == f
              ? (af(d, new xb.Ua(xb.Ua.g.Of, f)), (d.h.length = 0))
              : 410 == f
              ? (bf(d, new xb.Ua(xb.Ua.g.Mf, f)), cf(d))
              : 3 <= d.D
              ? (bf(d, new xb.Ua(xb.Ua.g.Df, f)), cf(d))
              : d.M(d.l, !0, 8001 == f);
          },
          uj: (0, _.x)(this.da, this),
        });
        (b = 5e3 * Math.pow(this.D, 2)) ? _.q.setTimeout(a, b) : a();
      }
    };
    var $e = function (a, b) {
        b = b.filter(function (e) {
          return a.g[e].g
            ? (_.q.setTimeout(function () {
                return Error("I`" + e);
              }, 0),
              !1)
            : !0;
        });
        for (var c = [], d = 0; d < b.length; d++) c = c.concat(df(a, b[d]));
        Aa(c);
        return !a.G && 1 < c.length
          ? ((b = c.shift()),
            (a.h = c
              .map(function (e) {
                return [e];
              })
              .concat(a.h)),
            [b])
          : c;
      },
      df = function (a, b) {
        var c = Ta(a.L),
          d = [];
        c[b] || d.push(b);
        b = [b];
        for (var e = 0; e < b.length; e++)
          for (var f = a.g[b[e]].h, g = f.length - 1; 0 <= g; g--) {
            var h = f[g];
            a.g[h].g || c[h] || (d.push(h), b.push(h));
          }
        d.reverse();
        Aa(d);
        return d;
      },
      Ue = function (a) {
        a.o == a.F &&
          ((a.o = null),
          a.F.onLoad((0, _.x)(a.hg, a)) && af(a, new xb.Ua(xb.Ua.g.fe)),
          We(a));
      },
      na = function (a) {
        if (a.o) {
          var b = a.o.ib(),
            c = [];
          if (a.s[b]) {
            for (
              var d = _.v(Object.keys(a.s[b])), e = d.next();
              !e.done;
              e = d.next()
            ) {
              e = e.value;
              var f = a.g[e];
              f && !f.g && (a.Vg(b, e), c.push(e));
            }
            Ze(a, c);
          }
          a.Xa() ||
            (a.g[b].onLoad((0, _.x)(a.hg, a)) && af(a, new xb.Ua(xb.Ua.g.fe)),
            _.va(a.A, b),
            _.va(a.j, b),
            0 === a.j.length && cf(a),
            a.ha && b == a.ha && (a.H.g || a.H.callback()),
            We(a),
            (a.o = null));
        }
      },
      Ye = function (a, b) {
        if (_.ta(a.j, b)) return !0;
        for (var c = 0; c < a.h.length; c++) if (_.ta(a.h[c], b)) return !0;
        return !1;
      };
    Se.prototype.load = function (a, b) {
      return Ze(this, [a], b)[a];
    };
    var la = function (a) {
      var b = _.fa;
      b.o &&
        "synthetic_module_overhead" === b.o.ib() &&
        (na(b), delete b.g.synthetic_module_overhead);
      b.g[a] &&
        ef(
          b,
          b.g[a].h || [],
          function (c) {
            c.g = new Ub();
            _.va(b.j, c.ib());
          },
          function (c) {
            return !c.g;
          }
        );
      b.o = b.g[a];
    };
    Se.prototype.da = function () {
      bf(this, new xb.Ua(xb.Ua.g.TIMEOUT));
      cf(this);
    };
    var bf = function (a, b) {
        1 < a.l.length
          ? (a.h = a.l
              .map(function (c) {
                return [c];
              })
              .concat(a.h))
          : af(a, b);
      },
      af = function (a, b) {
        var c = a.l;
        a.j.length = 0;
        for (var d = [], e = 0; e < a.h.length; e++) {
          var f = a.h[e].filter(function (k) {
            var m = df(this, k);
            return _.cc(c, function (n) {
              return _.ta(m, n);
            });
          }, a);
          xa(d, f);
        }
        for (e = 0; e < c.length; e++) _.ua(d, c[e]);
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.h.length; f++) _.va(a.h[f], d[e]);
          _.va(a.A, d[e]);
        }
        var g = a.N.error;
        if (g)
          for (e = 0; e < g.length; e++) {
            var h = g[e];
            for (f = 0; f < d.length; f++) h("error", d[f], b);
          }
        for (e = 0; e < c.length; e++) a.g[c[e]] && a.g[c[e]].af(b);
        a.l.length = 0;
        We(a);
      },
      cf = function (a) {
        for (; a.h.length; ) {
          var b = a.h.shift().filter(function (c) {
            return !this.g[c].g;
          }, a);
          if (0 < b.length) {
            a.M(b);
            return;
          }
        }
        We(a);
      },
      Ve = function (a, b) {
        a = a.N[b];
        for (var c = 0; a && c < a.length; c++) a[c](b);
      },
      ef = function (a, b, c, d, e) {
        d =
          void 0 === d
            ? function () {
                return !0;
              }
            : d;
        e = void 0 === e ? {} : e;
        b = _.v(b);
        for (var f = b.next(); !f.done; f = b.next()) {
          f = f.value;
          var g = a.g[f];
          !e[f] && d(g) && ((e[f] = !0), ef(a, g.h || [], c, d, e), c(g));
        }
      };
    Se.prototype.T = function () {
      ea(_.Qa(this.g), this.F);
      this.g = {};
      this.j = [];
      this.l = [];
      this.A = [];
      this.h = [];
      this.N = {};
      this.S = !0;
    };
    Se.prototype.Xa = function () {
      return this.S;
    };
    _.ha = function () {
      return new Se();
    };
    var ff = function (a, b) {
      this.g = a[_.q.Symbol.iterator]();
      this.h = b;
    };
    ff.prototype[Symbol.iterator] = function () {
      return this;
    };
    ff.prototype.next = function () {
      var a = this.g.next();
      return {
        value: a.done ? void 0 : this.h.call(void 0, a.value),
        done: a.done,
      };
    };
    var gf = function (a, b) {
      return new ff(a, b);
    };
    _.hf = function () {};
    _.hf.prototype.next = function () {
      return _.jf;
    };
    _.jf = { done: !0, value: void 0 };
    _.hf.prototype.Mb = function () {
      return this;
    };
    var nf = function (a) {
        if (a instanceof kf || a instanceof lf || a instanceof mf) return a;
        if ("function" == typeof a.next)
          return new kf(function () {
            return a;
          });
        if ("function" == typeof a[Symbol.iterator])
          return new kf(function () {
            return a[Symbol.iterator]();
          });
        if ("function" == typeof a.Mb)
          return new kf(function () {
            return a.Mb();
          });
        throw Error("J");
      },
      kf = function (a) {
        this.g = a;
      };
    kf.prototype.Mb = function () {
      return new lf(this.g());
    };
    kf.prototype[Symbol.iterator] = function () {
      return new mf(this.g());
    };
    kf.prototype.h = function () {
      return new mf(this.g());
    };
    var lf = function (a) {
      this.g = a;
    };
    _.w(lf, _.hf);
    lf.prototype.next = function () {
      return this.g.next();
    };
    lf.prototype[Symbol.iterator] = function () {
      return new mf(this.g);
    };
    lf.prototype.h = function () {
      return new mf(this.g);
    };
    var mf = function (a) {
      kf.call(this, function () {
        return a;
      });
      this.j = a;
    };
    _.w(mf, kf);
    mf.prototype.next = function () {
      return this.j.next();
    };
    var of = function (a, b) {
      this.h = {};
      this.g = [];
      this.j = this.size = 0;
      var c = arguments.length;
      if (1 < c) {
        if (c % 2) throw Error("z");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
      } else if (a)
        if (a instanceof of)
          for (c = a.dc(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
        else for (d in a) this.set(d, a[d]);
    };
    of.prototype.Za = function () {
      pf(this);
      for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
      return a;
    };
    of.prototype.dc = function () {
      pf(this);
      return this.g.concat();
    };
    _.qf = function (a, b) {
      return a.has(b);
    };
    of.prototype.has = function (a) {
      return rf(this.h, a);
    };
    of.prototype.remove = function (a) {
      rf(this.h, a)
        ? (delete this.h[a],
          --this.size,
          this.j++,
          this.g.length > 2 * this.size && pf(this),
          (a = !0))
        : (a = !1);
      return a;
    };
    var pf = function (a) {
      if (a.size != a.g.length) {
        for (var b = 0, c = 0; b < a.g.length; ) {
          var d = a.g[b];
          rf(a.h, d) && (a.g[c++] = d);
          b++;
        }
        a.g.length = c;
      }
      if (a.size != a.g.length) {
        var e = {};
        for (c = b = 0; b < a.g.length; )
          (d = a.g[b]), rf(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
        a.g.length = c;
      }
    };
    _.l = of.prototype;
    _.l.get = function (a, b) {
      return rf(this.h, a) ? this.h[a] : b;
    };
    _.l.set = function (a, b) {
      rf(this.h, a) || ((this.size += 1), this.g.push(a), this.j++);
      this.h[a] = b;
    };
    _.l.forEach = function (a, b) {
      for (var c = this.dc(), d = 0; d < c.length; d++) {
        var e = c[d],
          f = this.get(e);
        a.call(b, f, e, this);
      }
    };
    _.l.keys = function () {
      return nf(this.Mb(!0)).h();
    };
    _.l.values = function () {
      return nf(this.Mb(!1)).h();
    };
    _.l.entries = function () {
      var a = this;
      return gf(this.keys(), function (b) {
        return [b, a.get(b)];
      });
    };
    _.l.Mb = function (a) {
      pf(this);
      var b = 0,
        c = this.j,
        d = this,
        e = new _.hf();
      e.next = function () {
        if (c != d.j) throw Error("K");
        if (b >= d.g.length) return _.jf;
        var f = d.g[b++];
        return { value: a ? f : d.h[f], done: !1 };
      };
      return e;
    };
    var rf = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };
    _.sf = function () {
      this.g = new of();
      this.size = 0;
    };
    _.tf = function (a) {
      var b = typeof a;
      return ("object" == b && a) || "function" == b
        ? "o" + _.za(a)
        : b.charAt(0) + a;
    };
    _.l = _.sf.prototype;
    _.l.add = function (a) {
      this.g.set(_.tf(a), a);
      this.size = this.g.size;
    };
    _.l.remove = function (a) {
      a = this.g.remove(_.tf(a));
      this.size = this.g.size;
      return a;
    };
    _.l.has = function (a) {
      return _.qf(this.g, _.tf(a));
    };
    _.l.Za = function () {
      return this.g.Za();
    };
    _.l.values = function () {
      return this.g.values();
    };
    _.l.Mb = function () {
      return this.g.Mb(!1);
    };
    _.sf.prototype[Symbol.iterator] = function () {
      return this.values();
    };
    var uf = [],
      vf = function (a) {
        function b(d) {
          d &&
            bc(
              d,
              function (e, f) {
                e[f.id] = !0;
                return e;
              },
              c.Aj
            );
        }
        var c = { Aj: {}, index: uf.length, dm: a };
        b(a.g);
        b(a.j);
        uf.push(c);
        a.g &&
          _.ac(a.g, function (d) {
            var e = d.id;
            e instanceof B && d.module && (e.g = d.module);
          });
      };
    new B("Bgf0ib");
    var wf = new B("MpJwZc", "MpJwZc");
    var xf = new B("UUJqVe", "UUJqVe");
    new B("GHAeAc", "GHAeAc");
    new B("Wt6vjf", "Wt6vjf");
    new B("byfTOb", "byfTOb");
    new B("LEikZe", "LEikZe");
    new B("lsjVmc", "lsjVmc");
    new B("pVbxBc");
    new B("klpyYe");
    new B("OPbIxb");
    new B("pg9hFd");
    new B("IaqD3e");
    new B("Xpw1of");
    new B("v5BQle");
    new B("tdUkaf");
    new B("WSziFf");
    new B("UBSgGf");
    new B("zZa4xc");
    new B("o1bZcd");
    new B("WwG67d");
    new B("z72MOc");
    new B("JccZRe");
    new B("amY3Td");
    new B("ABma3e");
    new B("gSshPb");
    new B("yu4DA");
    new B("vk3Wc");
    new B("IykvEf");
    new B("J5K1Ad");
    new B("IW8Usd");
    new B("jbDgG");
    new B("b8xKu");
    new B("d0RAGb");
    new B("AzG0ke");
    new B("J4QWB");
    new B("TuDsZ");
    new B("hdXIif");
    new B("mITR5c");
    new B("DFElXb");
    new B("FENZqe");
    new B("tLnxq");
    vf({ g: [{ id: $b, td: Zd, multiple: !0 }] });
    var yf = {};
    var zf = new ud(),
      Af = function (a, b) {
        _.vd.call(this, a, b);
        this.node = b;
      };
    _.w(Af, _.vd);
    _.Bf = RegExp(
      "^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)",
      "i"
    );
    _.Cf = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    );
    _.Df = function (a) {
      return a ? decodeURI(a) : a;
    };
    _.Ef = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? _.cd(e) : "");
        }
      }
    };
    _.Ff = function (a, b, c) {
      if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) _.Ff(a, String(b[d]), c);
      else null != b && c.push(a + ("" === b ? "" : "=" + _.bd(b)));
    };
    var Gf =
        "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(
          " "
        ),
      Hf = [
        ["A", new Map([["href", { za: 2 }]])],
        ["AREA", new Map([["href", { za: 2 }]])],
        [
          "LINK",
          new Map([
            [
              "href",
              {
                za: 2,
                conditions: new Map([
                  [
                    "rel",
                    new Set(
                      "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
                        " "
                      )
                    ),
                  ],
                ]),
              },
            ],
          ]),
        ],
        ["SOURCE", new Map([["src", { za: 1 }]])],
        ["IMG", new Map([["src", { za: 1 }]])],
        ["VIDEO", new Map([["src", { za: 1 }]])],
        ["AUDIO", new Map([["src", { za: 1 }]])],
      ],
      If =
        "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(
          " "
        ),
      Jf = [
        [
          "dir",
          {
            za: 3,
            conditions: Va(function () {
              return new Map([["dir", new Set(["auto", "ltr", "rtl"])]]);
            }),
          },
        ],
        [
          "async",
          {
            za: 3,
            conditions: Va(function () {
              return new Map([["async", new Set(["async"])]]);
            }),
          },
        ],
        ["cite", { za: 2 }],
        [
          "loading",
          {
            za: 3,
            conditions: Va(function () {
              return new Map([["loading", new Set(["eager", "lazy"])]]);
            }),
          },
        ],
        ["poster", { za: 2 }],
        [
          "target",
          {
            za: 3,
            conditions: Va(function () {
              return new Map([["target", new Set(["_self", "_blank"])]]);
            }),
          },
        ],
      ],
      Kf = new (function (a, b, c) {
        var d = new Set(["data-", "aria-"]),
          e = new Map(Hf);
        this.j = a;
        this.g = e;
        this.l = b;
        this.o = c;
        this.h = d;
      })(
        new Set(
          Va(function () {
            return Gf.concat(
              "STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" ")
            );
          })
        ),
        new Set(
          Va(function () {
            return If.concat([
              "class",
              "id",
              "tabindex",
              "contenteditable",
              "name",
            ]);
          })
        ),
        new Map(
          Va(function () {
            return Jf.concat([["style", { za: 4 }]]);
          })
        )
      );
    _.Lf = Va(function () {
      try {
        return new URL("s://g"), !0;
      } catch (a) {
        return !1;
      }
    });
    var Mf;
    Mf = function () {
      this.h = Kf;
      this.g = [];
    };
    _.Nf = Va(function () {
      return new Mf();
    });
    _.Wa = function (a) {
      this.Wi = a;
    };
    _.Of = [
      Xa("data"),
      Xa("http"),
      Xa("https"),
      Xa("mailto"),
      Xa("ftp"),
      new _.Wa(function (a) {
        return /^[^:]*([/?#]|$)/.test(a);
      }),
    ];
    _.Pf = function (a, b) {
      b || _.gd();
      this.j = a || null;
    };
    _.Pf.prototype.Ma = function (a) {
      a = a({}, this.j ? this.j.g() : {});
      this.h(
        null,
        "function" == typeof _.Qf && a instanceof _.Qf ? a.Cb : null
      );
    };
    _.Pf.prototype.h = function () {};
    var Rf = function (a) {
      this.h = a;
      this.j = this.h.g(xf);
    };
    Rf.prototype.g = function () {
      this.h.Xa() || (this.j = this.h.g(xf));
      return this.j ? this.j.g() : {};
    };
    var Sf = function (a) {
      var b = new Rf(a);
      _.Pf.call(this, b, a.get($b).h);
      this.l = new _.E();
      this.o = b;
    };
    _.w(Sf, _.Pf);
    Sf.prototype.g = function () {
      return this.o.g();
    };
    Sf.prototype.h = function (a, b) {
      _.Pf.prototype.h.call(this, a, b);
      this.l.dispatchEvent(new Af(zf, a, b));
    };
    ra(wf, Sf);
    vf({ g: [{ id: wf, td: Sf, multiple: !0 }] });
    var Tf = function (a, b) {
      this.defaultValue = a;
      this.type = b;
      this.value = a;
    };
    Tf.prototype.get = function () {
      return this.value;
    };
    Tf.prototype.set = function (a) {
      this.value = a;
    };
    var Uf = function (a) {
      Tf.call(this, a, "b");
    };
    _.w(Uf, Tf);
    Uf.prototype.get = function () {
      return this.value;
    };
    var Vf = function () {
      this.g = {};
      this.h = "";
      this.j = {};
    };
    Vf.prototype.toString = function () {
      if (this.h.endsWith("_/wa/")) var a = this.h + Wf(this, "wk") + ".wasm";
      else {
        a = this.h + Xf(this);
        var b = this.j;
        var c = [],
          d;
        for (d in b) _.Ff(d, b[d], c);
        b = c.join("&");
        c = "";
        "" != b && (c = "?" + b);
        a += c;
      }
      return a;
    };
    var Xf = function (a) {
        var b = [],
          c = (0, _.x)(function (d) {
            void 0 !== this.g[d] && b.push(d + "=" + this.g[d]);
          }, a);
        "1" == Wf(a, "md")
          ? (c("md"), c("k"), c("ck"), c("am"), c("rs"), c("gssmodulesetproto"))
          : (c("sdch"),
            c("k"),
            c("ck"),
            c("am"),
            c("rt"),
            "d" in a.g || Yf(a, "d", "0"),
            c("d"),
            c("exm"),
            c("excm"),
            (a.g.excm || a.g.exm) && b.push("ed=1"),
            c("im"),
            c("dg"),
            c("sm"),
            "1" == Wf(a, "br") && c("br"),
            "" !== Zf(a) && c("wt"),
            c("gssmodulesetproto"),
            c("ujg"),
            c("rs"),
            c("cb"),
            c("ee"),
            c("m"));
        return b.join("/");
      },
      Wf = function (a, b) {
        return a.g[b] ? a.g[b] : null;
      },
      Yf = function (a, b, c) {
        c ? (a.g[b] = c) : delete a.g[b];
      },
      Zf = function (a) {
        switch (Wf(a, "wt")) {
          case "0":
            return "0";
          case "1":
            return "1";
          case "2":
            return "2";
          default:
            return "";
        }
      },
      bg = function (a) {
        var b = void 0 === b ? !0 : b;
        var c = $f(a),
          d = new Vf(),
          e = c.match(_.Cf)[5];
        _.Gc(ag, function (g) {
          var h = e.match("/" + g + "=([^/]+)");
          h && Yf(d, g, h[1]);
        });
        var f =
          -1 != a.indexOf("_/ss/")
            ? "_/ss/"
            : -1 != a.indexOf("_/wa/")
            ? "_/wa/"
            : "_/js/";
        d.h = a.substr(0, a.indexOf(f) + f.length);
        if (d.h.endsWith("_/wa/"))
          return (
            Yf(d, "wk", a.substring(d.h.length, a.lastIndexOf(".wasm"))), d
          );
        if (!b) return d;
        (a = c.match(_.Cf)[6] || null) &&
          _.Ef(a, function (g, h) {
            d.j[g] = h;
          });
        return d;
      },
      $f = function (a) {
        return a.startsWith(
          "https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url="
        )
          ? a.substr(65)
          : a;
      },
      ag = {
        Gk: "k",
        bk: "ck",
        dl: "wk",
        vk: "m",
        jk: "exm",
        hk: "excm",
        Sj: "am",
        Fk: "rt",
        rk: "d",
        ik: "ed",
        Pk: "sv",
        ck: "deob",
        Zj: "cb",
        Mk: "rs",
        Hk: "sdch",
        sk: "im",
        dk: "dg",
        gk: "br",
        el: "wt",
        kk: "ee",
        Ok: "sm",
        uk: "md",
        pk: "gssmodulesetproto",
        bl: "ujg",
      };
    _.cg = function (a) {
      _.A.call(this);
      this.h = a;
      this.g = {};
    };
    _.z(_.cg, _.A);
    var dg = [];
    _.cg.prototype.I = function (a, b, c, d) {
      return eg(this, a, b, c, d);
    };
    var eg = function (a, b, c, d, e, f) {
      Array.isArray(c) || (c && (dg[0] = c.toString()), (c = dg));
      for (var g = 0; g < c.length; g++) {
        var h = _.D(b, c[g], d || a.handleEvent, e || !1, f || a.h || a);
        if (!h) break;
        a.g[h.key] = h;
      }
      return a;
    };
    _.cg.prototype.Rb = function (a, b, c, d) {
      return fg(this, a, b, c, d);
    };
    var fg = function (a, b, c, d, e, f) {
      if (Array.isArray(c))
        for (var g = 0; g < c.length; g++) fg(a, b, c[g], d, e, f);
      else {
        b = _.Md(b, c, d || a.handleEvent, e, f || a.h || a);
        if (!b) return a;
        a.g[b.key] = b;
      }
      return a;
    };
    _.cg.prototype.mb = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) this.mb(a, b[f], c, d, e);
      else
        (c = c || this.handleEvent),
          (d = _.ya(d) ? !!d.capture : !!d),
          (e = e || this.h || this),
          (c = Nd(c)),
          (d = !!d),
          (b = _.Ad(a)
            ? a.Wc(b, c, d, e)
            : a
            ? (a = _.Pd(a))
              ? a.Wc(b, c, d, e)
              : null
            : null),
          b && (_.Ud(b), delete this.g[b.key]);
      return this;
    };
    _.gg = function (a) {
      _.Gc(
        a.g,
        function (b, c) {
          this.g.hasOwnProperty(c) && _.Ud(b);
        },
        a
      );
      a.g = {};
    };
    _.cg.prototype.K = function () {
      _.cg.P.K.call(this);
      _.gg(this);
    };
    _.cg.prototype.handleEvent = function () {
      throw Error("Q");
    };
    var hg = function () {};
    hg.prototype.h = null;
    var ig = function (a) {
      return a.h || (a.h = a.l());
    };
    var jg,
      kg = function () {};
    _.z(kg, hg);
    kg.prototype.g = function () {
      var a = lg(this);
      return a ? new ActiveXObject(a) : new XMLHttpRequest();
    };
    kg.prototype.l = function () {
      var a = {};
      lg(this) && ((a[0] = !0), (a[1] = !0));
      return a;
    };
    var lg = function (a) {
      if (
        !a.j &&
        "undefined" == typeof XMLHttpRequest &&
        "undefined" != typeof ActiveXObject
      ) {
        for (
          var b = [
              "MSXML2.XMLHTTP.6.0",
              "MSXML2.XMLHTTP.3.0",
              "MSXML2.XMLHTTP",
              "Microsoft.XMLHTTP",
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.j = d);
          } catch (e) {}
        }
        throw Error("R");
      }
      return a.j;
    };
    jg = new kg();
    var mg = function () {};
    _.z(mg, hg);
    mg.prototype.g = function () {
      var a = new XMLHttpRequest();
      if ("withCredentials" in a) return a;
      if ("undefined" != typeof XDomainRequest) return new ng();
      throw Error("S");
    };
    mg.prototype.l = function () {
      return {};
    };
    var ng = function () {
      this.g = new XDomainRequest();
      this.readyState = 0;
      this.onreadystatechange = null;
      this.responseType = this.responseText = "";
      this.status = -1;
      this.statusText = "";
      this.g.onload = (0, _.x)(this.oh, this);
      this.g.onerror = (0, _.x)(this.Ff, this);
      this.g.onprogress = (0, _.x)(this.Ji, this);
      this.g.ontimeout = (0, _.x)(this.Li, this);
    };
    _.l = ng.prototype;
    _.l.open = function (a, b, c) {
      if (null != c && !c) throw Error("T");
      this.g.open(a, b);
    };
    _.l.send = function (a) {
      if (a)
        if ("string" == typeof a) this.g.send(a);
        else throw Error("U");
      else this.g.send();
    };
    _.l.abort = function () {
      this.g.abort();
    };
    _.l.setRequestHeader = function () {};
    _.l.getResponseHeader = function (a) {
      return "content-type" == a.toLowerCase() ? this.g.contentType : "";
    };
    _.l.oh = function () {
      this.status = 200;
      this.responseText = this.g.responseText;
      og(this, 4);
    };
    _.l.Ff = function () {
      this.status = 500;
      this.responseText = "";
      og(this, 4);
    };
    _.l.Li = function () {
      this.Ff();
    };
    _.l.Ji = function () {
      this.status = 200;
      og(this, 1);
    };
    var og = function (a, b) {
      a.readyState = b;
      if (a.onreadystatechange) a.onreadystatechange();
    };
    ng.prototype.getAllResponseHeaders = function () {
      return "content-type: " + this.g.contentType;
    };
    _.pg = function (a, b, c) {
      if ("function" === typeof a) c && (a = (0, _.x)(a, c));
      else if (a && "function" == typeof a.handleEvent)
        a = (0, _.x)(a.handleEvent, a);
      else throw Error("W");
      return 2147483647 < Number(b) ? -1 : _.q.setTimeout(a, b || 0);
    };
    var rg, sg;
    _.qg = function (a) {
      _.E.call(this);
      this.headers = new Map();
      this.D = a || null;
      this.h = !1;
      this.F = this.g = null;
      this.o = "";
      this.j = this.L = this.s = this.H = !1;
      this.l = 0;
      this.A = null;
      this.M = "";
      this.G = this.C = !1;
    };
    _.z(_.qg, _.E);
    rg = /^https?$/i;
    sg = ["POST", "PUT"];
    _.tg = [];
    _.qg.prototype.Y = function () {
      this.T();
      _.va(_.tg, this);
    };
    _.qg.prototype.send = function (a, b, c, d) {
      if (this.g) throw Error("X`" + this.o + "`" + a);
      b = b ? b.toUpperCase() : "GET";
      this.o = a;
      this.H = !1;
      this.h = !0;
      this.g = this.D ? this.D.g() : jg.g();
      this.F = this.D ? ig(this.D) : ig(jg);
      this.g.onreadystatechange = (0, _.x)(this.N, this);
      try {
        (this.L = !0), this.g.open(b, String(a), !0), (this.L = !1);
      } catch (g) {
        ug(this);
        return;
      }
      a = c || "";
      c = new Map(this.headers);
      if (d)
        if (Object.getPrototypeOf(d) === Object.prototype)
          for (var e in d) c.set(e, d[e]);
        else if ("function" === typeof d.keys && "function" === typeof d.get) {
          e = _.v(d.keys());
          for (var f = e.next(); !f.done; f = e.next())
            (f = f.value), c.set(f, d.get(f));
        } else throw Error("Y`" + String(d));
      d = Array.from(c.keys()).find(function (g) {
        return "content-type" == g.toLowerCase();
      });
      e = _.q.FormData && a instanceof _.q.FormData;
      !_.ta(sg, b) ||
        d ||
        e ||
        c.set(
          "Content-Type",
          "application/x-www-form-urlencoded;charset=utf-8"
        );
      b = _.v(c);
      for (d = b.next(); !d.done; d = b.next())
        (c = _.v(d.value)),
          (d = c.next().value),
          (c = c.next().value),
          this.g.setRequestHeader(d, c);
      this.M && (this.g.responseType = this.M);
      "withCredentials" in this.g &&
        this.g.withCredentials !== this.C &&
        (this.g.withCredentials = this.C);
      try {
        vg(this),
          0 < this.l &&
            ((this.G = wg(this.g))
              ? ((this.g.timeout = this.l),
                (this.g.ontimeout = (0, _.x)(this.S, this)))
              : (this.A = _.pg(this.S, this.l, this))),
          (this.s = !0),
          this.g.send(a),
          (this.s = !1);
      } catch (g) {
        ug(this);
      }
    };
    var wg = function (a) {
      return _.C && "number" === typeof a.timeout && void 0 !== a.ontimeout;
    };
    _.qg.prototype.S = function () {
      "undefined" != typeof ub &&
        this.g &&
        (this.dispatchEvent("timeout"), this.abort(8));
    };
    var ug = function (a) {
        a.h = !1;
        a.g && ((a.j = !0), a.g.abort(), (a.j = !1));
        xg(a);
        yg(a);
      },
      xg = function (a) {
        a.H ||
          ((a.H = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
      };
    _.qg.prototype.abort = function () {
      this.g &&
        this.h &&
        ((this.h = !1),
        (this.j = !0),
        this.g.abort(),
        (this.j = !1),
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        yg(this));
    };
    _.qg.prototype.K = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        yg(this, !0));
      _.qg.P.K.call(this);
    };
    _.qg.prototype.N = function () {
      this.Xa() || (this.L || this.s || this.j ? zg(this) : this.U());
    };
    _.qg.prototype.U = function () {
      zg(this);
    };
    var zg = function (a) {
        if (
          a.h &&
          "undefined" != typeof ub &&
          (!a.F[1] || 4 != (a.g ? a.g.readyState : 0) || 2 != a.qc())
        )
          if (a.s && 4 == (a.g ? a.g.readyState : 0)) _.pg(a.N, 0, a);
          else if (
            (a.dispatchEvent("readystatechange"),
            4 == (a.g ? a.g.readyState : 0))
          ) {
            a.h = !1;
            try {
              a.Ld()
                ? (a.dispatchEvent("complete"), a.dispatchEvent("success"))
                : xg(a);
            } finally {
              yg(a);
            }
          }
      },
      yg = function (a, b) {
        if (a.g) {
          vg(a);
          var c = a.g,
            d = a.F[0] ? function () {} : null;
          a.g = null;
          a.F = null;
          b || a.dispatchEvent("ready");
          try {
            c.onreadystatechange = d;
          } catch (e) {}
        }
      },
      vg = function (a) {
        a.g && a.G && (a.g.ontimeout = null);
        a.A && (_.q.clearTimeout(a.A), (a.A = null));
      };
    _.qg.prototype.isActive = function () {
      return !!this.g;
    };
    _.qg.prototype.Ld = function () {
      var a = this.qc();
      a: switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
          var b = !0;
          break a;
        default:
          b = !1;
      }
      if (!b) {
        if ((a = 0 === a))
          (a = String(this.o).match(_.Cf)[1] || null),
            !a &&
              _.q.self &&
              _.q.self.location &&
              (a = _.q.self.location.protocol.slice(0, -1)),
            (a = !rg.test(a ? a.toLowerCase() : ""));
        b = a;
      }
      return b;
    };
    _.qg.prototype.qc = function () {
      try {
        return 2 < (this.g ? this.g.readyState : 0) ? this.g.status : -1;
      } catch (a) {
        return -1;
      }
    };
    _.qg.prototype.Xc = function () {
      try {
        return this.g ? this.g.responseText : "";
      } catch (a) {
        return "";
      }
    };
    var Bg = function (a) {
      _.A.call(this);
      this.D = a;
      this.A = bg(a);
      this.l = this.o = null;
      this.G = !0;
      this.h = new _.cg(this);
      this.L = [];
      this.s = new Set();
      this.g = [];
      this.N = new Ag();
      this.j = [];
      this.C = !1;
      a = (0, _.x)(this.F, this);
      yf.version = a;
    };
    _.w(Bg, _.A);
    var Cg = function (a, b) {
      a.g.length && Me(b, a.g[a.g.length - 1]);
      a.g.push(b);
      Je(
        b,
        function () {
          _.va(this.g, b);
        },
        a
      );
    };
    Bg.prototype.H = function (a, b, c) {
      var d = void 0 === c ? {} : c;
      c = d.fi;
      var e = d.af,
        f = d.uj;
      a = Dg(this, a, b, d.bi, c);
      Eg(this, a, e, f, c);
    };
    var Dg = function (a, b, c, d, e) {
        d = void 0 === d ? {} : d;
        var f = [];
        Fg(a, b, c, d, void 0 === e ? !1 : e, function (g) {
          f.push(g.ib());
        });
        return f;
      },
      Fg = function (a, b, c, d, e, f, g) {
        g = void 0 === g ? {} : g;
        b = _.v(b);
        for (var h = b.next(); !h.done; h = b.next()) {
          var k = h.value;
          h = c[k];
          (!e && (a.s.has(k) || h.g)) ||
            g[k] ||
            ((g[k] = !0),
            (k = d[k] ? Object.keys(d[k]) : []),
            Fg(a, h.h.concat(k), c, d, e, f, g),
            f(h));
        }
      },
      Eg = function (a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
          g = new Ce();
        b = [b];
        for (
          var h = function (p, r) {
              for (
                var t = [], y = 0, G = Math.floor(p.length / r) + 1, P = 0;
                P < r;
                P++
              ) {
                var Ca = (P + 1) * G;
                t.push(p.slice(y, Ca));
                y = Ca;
              }
              return t;
            },
            k = b.shift();
          k;

        ) {
          var m = Gg(a, k, !!e, !0);
          if (2e3 >= m.length) {
            if ((k = Hg(a, k, e))) f.push(k), Me(g, k.g);
          } else b = h(k, Math.ceil(m.length / 2e3)).concat(b);
          k = b.shift();
        }
        var n = new Ce();
        Cg(a, n);
        Je(n, function () {
          return Ig(a, f, c, d);
        });
        Ke(
          n,
          function () {
            var p = new Jg();
            p.j = !0;
            p.h = -1;
            Ig(this, [p], c, d);
          },
          a
        );
        Je(g, function () {
          return n.callback();
        });
        g.callback();
      },
      Hg = function (a, b, c) {
        var d = Gg(a, b, !(void 0 === c || !c));
        a.L.push(d);
        b = _.v(b);
        for (c = b.next(); !c.done; c = b.next()) a.s.add(c.value);
        if (a.C)
          (a = _.nd(document, "SCRIPT")),
            _.Za(a, _.bb(d)),
            (a.type = "text/javascript"),
            (a.async = !1),
            document.body.appendChild(a);
        else {
          var e = new Jg(),
            f = new _.qg(0 < a.j.length ? new mg() : void 0);
          a.h.I(f, "success", (0, _.x)(e.A, e, f));
          a.h.I(f, "error", (0, _.x)(e.s, e, f));
          a.h.I(f, "timeout", (0, _.x)(e.C, e));
          eg(a.h, f, "ready", f.T, !1, f);
          f.l = 3e4;
          Kg(a.N, function () {
            f.send(d);
            return e.g;
          });
          return e;
        }
        return null;
      },
      Ig = function (a, b, c, d) {
        for (var e = !1, f, g = !1, h = 0; h < b.length; h++) {
          var k = b[h];
          if (!f && k.j) {
            e = !0;
            f = k.h;
            break;
          } else k.l && (g = !0);
        }
        h = _.wa(a.g);
        (e || g) && -1 != f && (a.g.length = 0);
        if (e) c && c(f);
        else if (g) d && d();
        else
          for (a = 0; a < b.length; a++)
            (d = b[a]), Lg(d.o, d.hb) || (c && c(8001));
        (e || g) &&
          -1 != f &&
          _.ac(h, function (m) {
            m.cancel();
          });
      };
    Bg.prototype.K = function () {
      this.h.T();
      delete yf.version;
      _.A.prototype.K.call(this);
    };
    Bg.prototype.F = function () {
      return Wf(this.A, "k");
    };
    var Gg = function (a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e = _.Df(a.D.match(_.Cf)[3] || null);
        if (
          0 < a.j.length &&
          !_.ta(a.j, e) &&
          null != e &&
          window.location.hostname != e
        )
          throw Error("aa`" + e);
        e = bg(a.A.toString());
        delete e.g.m;
        delete e.g.exm;
        delete e.g.ed;
        Yf(e, "m", b.join(","));
        a.o && (Yf(e, "ck", a.o), a.l && Yf(e, "rs", a.l));
        Yf(e, "d", "0");
        c && ((a = _.dd()), (e.j.zx = a));
        a = e.toString();
        if (d && 0 == a.lastIndexOf("/", 0)) {
          e = document.location.href.match(_.Cf);
          d = e[1];
          b = e[2];
          c = e[3];
          e = e[4];
          var f = "";
          d && (f += d + ":");
          c &&
            ((f += "//"), b && (f += b + "@"), (f += c), e && (f += ":" + e));
          a = f + a;
        }
        return a;
      },
      Lg = function (a, b) {
        var c = "";
        if (1 < a.length && "\n" === a.charAt(a.length - 1)) {
          var d = a.lastIndexOf("\n", a.length - 2);
          0 <= d && (c = a.substring(d + 1, a.length - 1));
        }
        d = c.length - 11;
        if (
          (0 <= d && c.indexOf("Google Inc.", d) == d) ||
          0 == c.lastIndexOf("//# sourceMappingURL=", 0)
        )
          try {
            c = window;
            a = a + "\r\n//# sourceURL=" + b;
            a = _.$a(a);
            var e = _.Qb(a);
            var f = _.Pb(e);
            c.eval(f) === f && c.eval(f.toString());
          } catch (g) {
            return !1;
          }
        else return !1;
        return !0;
      },
      Mg = function (a) {
        var b = _.Df(a.match(_.Cf)[5] || null) || "";
        b = _.Df($f(b).match(_.Cf)[5] || null);
        return (
          null === b
            ? 0
            : RegExp("/_/wa/", "g").test(b)
            ? !/\/k=/.test(b)
            : RegExp("(/_/js/)|(/_/ss/)", "g").test(b) && /\/k=/.test(b)
        )
          ? a
          : null;
      },
      Jg = function () {
        this.g = new Ce();
        this.hb = this.o = "";
        this.j = !1;
        this.h = 0;
        this.l = !1;
      };
    Jg.prototype.A = function (a) {
      this.o = a.Xc();
      this.hb = String(a.o);
      this.g.callback();
    };
    Jg.prototype.s = function (a) {
      this.j = !0;
      this.h = a.qc();
      this.g.callback();
    };
    Jg.prototype.C = function () {
      this.l = !0;
      this.g.callback();
    };
    var Ag = function () {
        this.g = 0;
        this.h = [];
      },
      Kg = function (a, b) {
        a.h.push(b);
        Ng(a);
      },
      Ng = function (a) {
        for (; 5 > a.g && a.h.length; ) Og(a, a.h.shift());
      },
      Og = function (a, b) {
        a.g++;
        Je(
          b(),
          function () {
            this.g--;
            Ng(this);
          },
          a
        );
      };
    var Pg = new Uf(!1),
      Qg = document.location.href;
    vf({
      h: { dml: Pg },
      initialize: function (a) {
        var b = Pg.get(),
          c = "",
          d = "";
        window &&
          window._F_cssRowKey &&
          ((c = window._F_cssRowKey),
          window._F_combinedSignature && (d = window._F_combinedSignature));
        if (c && "function" !== typeof window._F_installCss) throw Error("Z");
        var e,
          f = _.q._F_jsUrl;
        f && (e = Mg(f));
        !e &&
          (f = document.getElementById("base-js")) &&
          ((e = f.src ? f.src : f.getAttribute("href")), (e = Mg(e)));
        e || (e = Mg(Qg));
        e ||
          ((e = document.getElementsByTagName("script")),
          (e = Mg(e[e.length - 1].src)));
        if (!e) throw Error("$");
        e = new Bg(e);
        c && (e.o = c);
        d && (e.l = d);
        e.C = b;
        b = ja();
        b.C = e;
        b.Yg(!0);
        b = ja();
        b.nf(a);
        a.j(b);
      },
    });
    _._ModuleManager_initialize = function (a, b) {
      if (!_.fa) {
        if (!_.ha) return;
        _.ia();
      }
      _.fa.mf(a, b);
    };
    _._ModuleManager_initialize(
      "b/sy0/el_conf:1/el_main_css/sy3/sy2:4/sy4:4/el_main:1,3,5,6/corsproxy/website_error/navigationui:5/_stam:6/n73qwf/MpJwZc",
      ["sy0", "el_conf"]
    );
  } catch (e) {
    _._DumpException(e);
  }
  try {
    _.H = {};
    MSG_TRANSLATE = "Translate";
    _.H[0] = MSG_TRANSLATE;
    MSG_CANCEL = "Cancel";
    _.H[1] = MSG_CANCEL;
    MSG_CLOSE = "Close";
    _.H[2] = MSG_CLOSE;
    MSGFUNC_PAGE_TRANSLATED_TO = function (a) {
      return "Google has automatically translated this page to: " + a;
    };
    _.H[3] = MSGFUNC_PAGE_TRANSLATED_TO;
    MSGFUNC_TRANSLATED_TO = function (a) {
      return "Translated to: " + a;
    };
    _.H[4] = MSGFUNC_TRANSLATED_TO;
    MSG_GENERAL_ERROR =
      "Error: The server could not complete your request. Try again later.";
    _.H[5] = MSG_GENERAL_ERROR;
    MSG_LEARN_MORE = "Learn more";
    _.H[6] = MSG_LEARN_MORE;
    MSGFUNC_POWERED_BY = function (a) {
      return "Powered by " + a;
    };
    _.H[7] = MSGFUNC_POWERED_BY;
    MSG_TRANSLATE_PRODUCT_NAME = "Translate";
    _.H[8] = MSG_TRANSLATE_PRODUCT_NAME;
    MSG_TRANSLATION_IN_PROGRESS = "Translation in progress";
    _.H[9] = MSG_TRANSLATION_IN_PROGRESS;
    MSGFUNC_TRANSLATE_PAGE_TO = function (a) {
      return "Translate this page to: " + a + " using Google Translate?";
    };
    _.H[10] = MSGFUNC_TRANSLATE_PAGE_TO;
    MSGFUNC_VIEW_PAGE_IN = function (a) {
      return "View this page in: " + a;
    };
    _.H[11] = MSGFUNC_VIEW_PAGE_IN;
    MSG_RESTORE = "Show original";
    _.H[12] = MSG_RESTORE;
    MSG_SSL_INFO_LOCAL_FILE =
      "The content of this local file will be sent to Google for translation using a secure connection.";
    _.H[13] = MSG_SSL_INFO_LOCAL_FILE;
    MSG_SSL_INFO_SECURE_PAGE =
      "The content of this secure page will be sent to Google for translation using a secure connection.";
    _.H[14] = MSG_SSL_INFO_SECURE_PAGE;
    MSG_SSL_INFO_INTRANET_PAGE =
      "The content of this intranet page will be sent to Google for translation using a secure connection.";
    _.H[15] = MSG_SSL_INFO_INTRANET_PAGE;
    MSG_SELECT_LANGUAGE = "Select Language";
    _.H[16] = MSG_SELECT_LANGUAGE;
    MSGFUNC_TURN_OFF_TRANSLATION = function (a) {
      return "Turn off " + a + " translation";
    };
    _.H[17] = MSGFUNC_TURN_OFF_TRANSLATION;
    MSGFUNC_TURN_OFF_FOR = function (a) {
      return "Turn off for: " + a;
    };
    _.H[18] = MSGFUNC_TURN_OFF_FOR;
    MSG_ALWAYS_HIDE_AUTO_POPUP_BANNER = "Always hide";
    _.H[19] = MSG_ALWAYS_HIDE_AUTO_POPUP_BANNER;
    MSG_ORIGINAL_TEXT = "Original text:";
    _.H[20] = MSG_ORIGINAL_TEXT;
    MSG_FILL_SUGGESTION = "Contribute a better translation";
    _.H[21] = MSG_FILL_SUGGESTION;
    MSG_SUBMIT_SUGGESTION = "Contribute";
    _.H[22] = MSG_SUBMIT_SUGGESTION;
    MSG_SHOW_TRANSLATE_ALL = "Translate all";
    _.H[23] = MSG_SHOW_TRANSLATE_ALL;
    MSG_SHOW_RESTORE_ALL = "Restore all";
    _.H[24] = MSG_SHOW_RESTORE_ALL;
    MSG_SHOW_CANCEL_ALL = "Cancel all";
    _.H[25] = MSG_SHOW_CANCEL_ALL;
    MSG_TRANSLATE_TO_MY_LANGUAGE = "Translate sections to my language";
    _.H[26] = MSG_TRANSLATE_TO_MY_LANGUAGE;
    MSGFUNC_TRANSLATE_EVERYTHING_TO = function (a) {
      return "Translate everything to " + a;
    };
    _.H[27] = MSGFUNC_TRANSLATE_EVERYTHING_TO;
    MSG_SHOW_ORIGINAL_LANGUAGES = "Show original languages";
    _.H[28] = MSG_SHOW_ORIGINAL_LANGUAGES;
    MSG_OPTIONS = "Options";
    _.H[29] = MSG_OPTIONS;
    MSG_TURN_OFF_TRANSLATION_FOR_THIS_SITE =
      "Turn off translation for this site";
    _.H[30] = MSG_TURN_OFF_TRANSLATION_FOR_THIS_SITE;
    _.H[31] = null;
    MSG_ALT_SUGGESTION = "Show alternative translations";
    _.H[32] = MSG_ALT_SUGGESTION;
    MSG_ALT_ACTIVITY_HELPER_TEXT =
      "Click on words above to get alternative translations";
    _.H[33] = MSG_ALT_ACTIVITY_HELPER_TEXT;
    MSG_USE_ALTERNATIVES = "Use";
    _.H[34] = MSG_USE_ALTERNATIVES;
    MSG_DRAG_TIP = "Drag with shift key to reorder";
    _.H[35] = MSG_DRAG_TIP;
    MSG_CLICK_FOR_ALT = "Click for alternative translations";
    _.H[36] = MSG_CLICK_FOR_ALT;
    MSG_DRAG_INSTUCTIONS =
      "Hold down the shift key, click, and drag the words above to reorder.";
    _.H[37] = MSG_DRAG_INSTUCTIONS;
    MSG_SUGGESTION_SUBMITTED =
      "Thank you for contributing your translation suggestion to Google Translate.";
    _.H[38] = MSG_SUGGESTION_SUBMITTED;
    MSG_MANAGE_TRANSLATION_FOR_THIS_SITE = "Manage translation for this site";
    _.H[39] = MSG_MANAGE_TRANSLATION_FOR_THIS_SITE;
    MSG_ALT_AND_CONTRIBUTE_ACTIVITY_HELPER_TEXT =
      "Click a word for alternative translations, or double-click to edit directly";
    _.H[40] = MSG_ALT_AND_CONTRIBUTE_ACTIVITY_HELPER_TEXT;
    MSG_ORIGINAL_TEXT_NO_COLON = "Original text";
    _.H[41] = MSG_ORIGINAL_TEXT_NO_COLON;
    _.H[42] = "Translate";
    _.H[43] = "Translate";
    _.H[44] = "Your correction has been submitted.";
    MSG_LANGUAGE_UNSUPPORTED =
      "Error: The language of the webpage is not supported.";
    _.H[45] = MSG_LANGUAGE_UNSUPPORTED;
    MSG_LANGUAGE_TRANSLATE_WIDGET = "Language Translate Widget";
    _.H[46] = MSG_LANGUAGE_TRANSLATE_WIDGET;
    MSG_RATE_THIS_TRANSLATION = "Rate this translation";
    _.H[47] = MSG_RATE_THIS_TRANSLATION;
    MSG_FEEDBACK_USAGE_FOR_IMPROVEMENT =
      "Your feedback will be used to help improve Google Translate";
    _.H[48] = MSG_FEEDBACK_USAGE_FOR_IMPROVEMENT;
    MSG_FEEDBACK_SATISFIED_LABEL = "Good translation";
    _.H[49] = MSG_FEEDBACK_SATISFIED_LABEL;
    MSG_FEEDBACK_DISSATISFIED_LABEL = "Poor translation";
    _.H[50] = MSG_FEEDBACK_DISSATISFIED_LABEL;
    MSG_TRANSLATION_NO_COLON = "Translation";
    _.H[51] = MSG_TRANSLATION_NO_COLON;
  } catch (e) {
    _._DumpException(e);
  }
  try {
    _.ma("el_conf");
    var Rg;
    _._exportVersion = function (a) {
      _.Gb("google.translate.v", a);
    };
    _._getCallbackFunction = function (a) {
      return _.yb(a);
    };
    _._exportMessages = function () {
      _.Gb("google.translate.m", _.H);
    };
    Rg = function (a) {
      var b = document.getElementsByTagName("head")[0];
      b ||
        (b = document.body.parentNode.appendChild(
          document.createElement("head")
        ));
      b.appendChild(a);
    };
    _._loadJs = function (a) {
      var b = _.nd(document, "SCRIPT");
      b.type = "text/javascript";
      b.charset = "UTF-8";
      _.Za(b, _.bb(a));
      Rg(b);
    };
    _._loadCss = function (a) {
      var b = document.createElement("link");
      b.type = "text/css";
      b.rel = "stylesheet";
      b.charset = "UTF-8";
      b.href = a;
      Rg(b);
    };
    _._isNS = function (a) {
      a = a.split(".");
      for (var b = window, c = 0; c < a.length; ++c)
        if (!(b = b[a[c]])) return !1;
      return !0;
    };
    _._setupNS = function (a) {
      a = a.split(".");
      for (var b = window, c = 0; c < a.length; ++c)
        b.hasOwnProperty
          ? b.hasOwnProperty(a[c])
            ? (b = b[a[c]])
            : (b = b[a[c]] = {})
          : (b = b[a[c]] || (b[a[c]] = {}));
      return b;
    };
    _.Gb("_exportVersion", _._exportVersion);
    _.Gb("_getCallbackFunction", _._getCallbackFunction);
    _.Gb("_exportMessages", _._exportMessages);
    _.Gb("_loadJs", _._loadJs);
    _.Gb("_loadCss", _._loadCss);
    _.Gb("_isNS", _._isNS);
    _.Gb("_setupNS", _._setupNS);
    window.addEventListener &&
      "undefined" == typeof document.readyState &&
      window.addEventListener(
        "DOMContentLoaded",
        function () {
          document.readyState = "complete";
        },
        !1
      );
    _.pa();
  } catch (e) {
    _._DumpException(e);
  }
}).call(this, this.default_tr);
// Google Inc.

//# sourceURL=/_/translate_http/_/js/k=translate_http.tr.en_US.SwDv7PwBCY4.O/d=1/rs=AN8SPfrKjGtVM5aA9XkVjoMVhcrr9S7t_A/m=el_conf
// Configure Constants
(function () {
  let gtConstEvalStartTime = new Date();
  if (_isNS("google.translate.Element")) {
    return;
  }

  (function () {
    const c = _setupNS("google.translate._const");

    c._cest = gtConstEvalStartTime;
    gtConstEvalStartTime = undefined; // hide this eval start time constant
    c._cl = "en-US";
    c._cuc = "googleTranslateElementInit";
    c._cac = "";
    c._cam = "";
    c._ctkk = "467848.50331435";
    const h = "translate.googleapis.com";
    const oph = "translate-pa.googleapis.com";
    const s = "https" + "://";
    c._pah = h;
    c._pas = s;
    const b = s + "translate.googleapis.com";
    const staticPath = "/translate_static/";
    c._pci = b + staticPath + "img/te_ctrl3.gif";
    c._pmi = b + staticPath + "img/mini_google.png";
    c._pbi = b + staticPath + "img/te_bk.gif";
    c._pli = b + staticPath + "img/loading.gif";
    c._ps =
      "https://www.gstatic.com/_/translate_http/_/ss/k\x3dtranslate_http.tr.69JJaQ5G5xA.L.W.O/d\x3d0/rs\x3dAN8SPfpC36MIoWPngdVwZ4RUzeJYZaC7rg/m\x3del_main_css";
    c._plla = oph + "/v1/supportedLanguages";
    c._puh = "translate.google.com";
    c._cnal = {};
    c._vt = false;
    c._tvt = false;
    _loadCss(c._ps);
    _loadJs(
      "https://translate.googleapis.com/_/translate_http/_/js/k\x3dtranslate_http.tr.en_US.SwDv7PwBCY4.O/d\x3d1/exm\x3del_conf/ed\x3d1/rs\x3dAN8SPfrKjGtVM5aA9XkVjoMVhcrr9S7t_A/m\x3del_main"
    );
    _exportMessages();
    _exportVersion("TE_20230514");
  })();
})();
