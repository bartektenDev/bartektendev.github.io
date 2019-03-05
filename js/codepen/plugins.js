
function launchParticlesJS(e, a) {
    function i() {
        pJS.fn.canvasInit(), pJS.fn.canvasSize(), pJS.fn.canvasPaint(), pJS.fn.particlesCreate(), pJS.fn.particlesDraw(), pJS.fn.densityAuto()
    }

    function t() {
        pJS.fn.particlesDraw(), pJS.fn.requestAnimFrame = requestAnimFrame(t)
    }

    var n = document.querySelector("#" + e + " > canvas");
    if (pJS = {
            canvas: {el: n, w: n.offsetWidth, h: n.offsetHeight},
            particles: {
                color: "#fff",
                color_random: !1,
                shape: "circle",
                opacity: {opacity: 1, anim: {enable: !1, speed: 2, opacity_min: 0, sync: !1}},
                size: 2.5,
                size_random: !0,
                nb: 200,
                line_linked: {
                    enable_auto: !0,
                    distance: 100,
                    color: "#fff",
                    opacity: 1,
                    width: 1,
                    condensed_mode: {enable: !1, rotateX: 3e3, rotateY: 3e3}
                },
                anim: {enable: !0, speed: 2},
                array: []
            },
            interactivity: {
                enable: !0,
                mouse: {distance: 100},
                detect_on: "canvas",
                mode: "grab",
                line_linked: {opacity: 1},
                events: {
                    onclick: {enable: !0, mode: "push", nb: 4},
                    onresize: {enable: !0, mode: "out", density_auto: !1, density_area: 800}
                }
            },
            retina_detect: !1,
            fn: {vendors: {interactivity: {}}}
        }, a) {
        if (a.particles) {
            var c = a.particles;
            if (c.color && (pJS.particles.color = c.color), c.color_random && (pJS.particles.color_random = c.color_random), c.shape && (pJS.particles.shape = c.shape), c.opacity) {
                var s = c.opacity;
                if (pJS.particles.opacity.opacity = "object" == typeof s ? s.opacity : s, s.anim) {
                    var r = s.anim;
                    (0 == r.enable || r.enable) && (pJS.particles.opacity.anim.enable = r.enable), r.speed && (pJS.particles.opacity.anim.speed = r.speed), r.opacity_min && (pJS.particles.opacity.anim.opacity_min = r.opacity_min), (0 == r.sync || r.sync) && (pJS.particles.opacity.anim.sync = r.sync)
                }
            }
            if (c.size && (pJS.particles.size = c.size), 0 == c.size_random && (pJS.particles.size_random = c.size_random), c.nb && (pJS.particles.nb = c.nb), c.line_linked) {
                var p = c.line_linked;
                if (0 == p.enable_auto && (pJS.particles.line_linked.enable_auto = p.enable_auto), p.distance && (pJS.particles.line_linked.distance = p.distance), p.color && (pJS.particles.line_linked.color = p.color), p.opacity && (pJS.particles.line_linked.opacity = p.opacity), p.width && (pJS.particles.line_linked.width = p.width), p.condensed_mode) {
                    var o = p.condensed_mode;
                    0 == o.enable && (pJS.particles.line_linked.condensed_mode.enable = o.enable), o.rotateX && (pJS.particles.line_linked.condensed_mode.rotateX = o.rotateX), o.rotateY && (pJS.particles.line_linked.condensed_mode.rotateY = o.rotateY)
                }
            }
            if (c.anim) {
                var l = c.anim;
                0 == l.enable && (pJS.particles.anim.enable = l.enable), l.speed && (pJS.particles.anim.speed = l.speed)
            }
        }
        if (a.interactivity) {
            var S = a.interactivity;
            if (0 == S.enable && (pJS.interactivity.enable = S.enable), S.mouse && S.mouse.distance && (pJS.interactivity.mouse.distance = S.mouse.distance), S.detect_on && (pJS.interactivity.detect_on = S.detect_on), (0 == S.mode || S.mode) && (pJS.interactivity.mode = S.mode), S.line_linked && S.line_linked.opacity && (pJS.interactivity.line_linked.opacity = S.line_linked.opacity), S.events) {
                var v = S.events;
                if (v.onclick) {
                    var J = v.onclick;
                    0 == J.enable && (pJS.interactivity.events.onclick.enable = !1), "push" != J.mode && (pJS.interactivity.events.onclick.mode = J.mode), J.nb && (pJS.interactivity.events.onclick.nb = J.nb)
                }
                if (v.onresize) {
                    var d = v.onresize;
                    0 == d.enable && (pJS.interactivity.events.onresize.enable = !1), d.mode && (pJS.interactivity.events.onresize.mode = d.mode), (0 == d.density_auto || d.density_auto) && (pJS.interactivity.events.onresize.density_auto = d.density_auto), d.density_area && (pJS.interactivity.events.onresize.density_area = d.density_area)
                }
            }
        }
        pJS.retina_detect = a.retina_detect
    }
    pJS.particles.color_rgb = hexToRgb(pJS.particles.color), pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color), pJS.retina_detect && window.devicePixelRatio > 1 && (pJS.retina = !0, pJS.canvas.pxratio = window.devicePixelRatio, pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio, pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio, pJS.particles.anim.speed = pJS.particles.anim.speed * pJS.canvas.pxratio, pJS.particles.line_linked.distance = pJS.particles.line_linked.distance * pJS.canvas.pxratio, pJS.particles.line_linked.width = pJS.particles.line_linked.width * pJS.canvas.pxratio, pJS.interactivity.mouse.distance = pJS.interactivity.mouse.distance * pJS.canvas.pxratio), pJS.fn.canvasInit = function () {
        pJS.canvas.ctx = pJS.canvas.el.getContext("2d")
    }, pJS.fn.canvasSize = function () {
        pJS.canvas.el.width = pJS.canvas.w, pJS.canvas.el.height = pJS.canvas.h, window.addEventListener("resize", function () {
            pJS && pJS.interactivity.events.onresize.enable && (pJS.canvas.w = pJS.canvas.el.offsetWidth, pJS.canvas.h = pJS.canvas.el.offsetHeight, pJS.retina && (pJS.canvas.w *= pJS.canvas.pxratio, pJS.canvas.h *= pJS.canvas.pxratio), pJS.canvas.el.width = pJS.canvas.w, pJS.canvas.el.height = pJS.canvas.h, pJS.fn.canvasPaint(), pJS.particles.anim.enable || (pJS.fn.particlesRemove(), pJS.fn.canvasRemove(), i()), pJS.fn.densityAuto())
        })
    }, pJS.fn.densityAuto = function () {
        if (pJS.interactivity.events.onresize.density_auto) {
            var e = pJS.canvas.el.width * pJS.canvas.el.height / 1e3;
            pJS.retina && (e /= 2 * pJS.canvas.pxratio);
            var a = e * pJS.particles.nb / pJS.interactivity.events.onresize.density_area, i = pJS.particles.array.length - a;
            0 > i ? pJS.fn.vendors.interactivity.pushParticles(Math.abs(i)) : pJS.fn.vendors.interactivity.removeParticles(i)
        }
    }, pJS.fn.canvasPaint = function () {
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    }, pJS.fn.canvasRemove = function () {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    }, pJS.fn.particle = function (e, a, i) {
        this.x = i ? i.x : Math.random() * pJS.canvas.w, this.y = i ? i.y : Math.random() * pJS.canvas.h, this.radius = (pJS.particles.size_random ? Math.random() : 1) * pJS.particles.size, pJS.retina && (this.radius *= pJS.canvas.pxratio), this.color = pJS.particles.color_random ? {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : e, this.opacity = a, pJS.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = pJS.particles.opacity.anim.speed / 100, pJS.particles.opacity.anim.sync || (this.vo = this.vo * Math.random())), this.vx = -.5 + Math.random(), this.vy = -.5 + Math.random()
    }, pJS.fn.particle.prototype.draw = function () {
        switch (pJS.canvas.ctx.fillStyle = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.opacity + ")", pJS.canvas.ctx.beginPath(), pJS.particles.shape) {
            case"circle":
                pJS.canvas.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1);
                break;
            case"edge":
                pJS.canvas.ctx.rect(this.x, this.y, 2 * this.radius, 2 * this.radius);
                break;
            case"triangle":
                pJS.canvas.ctx.moveTo(this.x, this.y - this.radius), pJS.canvas.ctx.lineTo(this.x + this.radius, this.y + this.radius), pJS.canvas.ctx.lineTo(this.x - this.radius, this.y + this.radius), pJS.canvas.ctx.closePath()
        }
        pJS.canvas.ctx.fill()
    }, pJS.fn.particlesCreate = function () {
        for (var e = 0; e < pJS.particles.nb; e++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb, pJS.particles.opacity.opacity))
    }, pJS.fn.particlesAnimate = function () {
        for (var e = 0; e < pJS.particles.array.length; e++) {
            var a = pJS.particles.array[e];
            switch (a.x += a.vx * (pJS.particles.anim.speed / 2), a.y += a.vy * (pJS.particles.anim.speed / 2), pJS.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= pJS.particles.opacity.opacity && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= pJS.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo)), pJS.interactivity.events.onresize.mode) {
                case"bounce":
                    a.x - a.radius > pJS.canvas.w ? a.vx = -a.vx : a.x + a.radius < 0 && (a.vx = -a.vx), a.y - a.radius > pJS.canvas.h ? a.vy = -a.vy : a.y + a.radius < 0 && (a.vy = -a.vy);
                    break;
                case"out":
                    a.x - a.radius > pJS.canvas.w ? a.x = a.radius : a.x + a.radius < 0 && (a.x = pJS.canvas.w + a.radius), a.y - a.radius > pJS.canvas.h ? a.y = a.radius : a.y + a.radius < 0 && (a.y = pJS.canvas.h + a.radius)
            }
            for (var i = e + 1; i < pJS.particles.array.length; i++) {
                var t = pJS.particles.array[i];
                if (pJS.particles.line_linked.enable_auto && pJS.fn.vendors.distanceParticles(a, t), pJS.interactivity.enable)switch (pJS.interactivity.mode) {
                    case"grab":
                        pJS.fn.vendors.interactivity.grabParticles(a, t)
                }
            }
        }
    }, pJS.fn.particlesDraw = function () {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h), pJS.fn.particlesAnimate();
        for (var e = 0; e < pJS.particles.array.length; e++) {
            var a = pJS.particles.array[e];
            a.draw("rgba(" + a.color.r + "," + a.color.g + "," + a.color.b + "," + a.opacity + ")")
        }
    }, pJS.fn.particlesRemove = function () {
        pJS.particles.array = []
    }, pJS.fn.vendors.distanceParticles = function (e, a) {
        var i = e.x - a.x, t = e.y - a.y, n = Math.sqrt(i * i + t * t);
        if (n <= pJS.particles.line_linked.distance) {
            var c = pJS.particles.line_linked.color_rgb_line;
            if (pJS.canvas.ctx.beginPath(), pJS.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + (pJS.particles.line_linked.opacity - n / pJS.particles.line_linked.distance) + ")", pJS.canvas.ctx.moveTo(e.x, e.y), pJS.canvas.ctx.lineTo(a.x, a.y), pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width, pJS.canvas.ctx.stroke(), pJS.canvas.ctx.closePath(), pJS.particles.line_linked.condensed_mode.enable) {
                var i = e.x - a.x, t = e.y - a.y, s = i / (1e3 * pJS.particles.line_linked.condensed_mode.rotateX), r = t / (1e3 * pJS.particles.line_linked.condensed_mode.rotateY);
                a.vx += s, a.vy += r
            }
        }
    }, pJS.fn.vendors.interactivity.listeners = function () {
        if ("window" == pJS.interactivity.detect_on)var e = window; else var e = pJS.canvas.el;
        if (e.onmousemove = function (a) {
                if (e == window)var i = a.clientX, t = a.clientY; else var i = a.offsetX || a.clientX, t = a.offsetY || a.clientY;
                pJS && (pJS.interactivity.mouse.pos_x = i, pJS.interactivity.mouse.pos_y = t, pJS.retina && (pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio, pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio), pJS.interactivity.status = "mousemove")
            }, e.onmouseleave = function () {
                pJS && (pJS.interactivity.mouse.pos_x = 0, pJS.interactivity.mouse.pos_y = 0, pJS.interactivity.status = "mouseleave")
            }, pJS.interactivity.events.onclick.enable)switch (pJS.interactivity.events.onclick.mode) {
            case"push":
                e.onclick = function () {
                    pJS.fn.vendors.interactivity.pushParticles(pJS.interactivity.events.onclick.nb, pJS.interactivity.mouse)
                };
                break;
            case"remove":
                e.onclick = function () {
                    pJS.fn.vendors.interactivity.removeParticles(pJS.interactivity.events.onclick.nb)
                }
        }
    }, pJS.fn.vendors.interactivity.pushParticles = function (e, a) {
        if (pJS)for (var i = 0; e > i; i++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb, pJS.particles.opacity.opacity, {
            x: a ? a.pos_x : Math.random() * pJS.canvas.w,
            y: a ? a.pos_y : Math.random() * pJS.canvas.h
        }))
    }, pJS.fn.vendors.interactivity.removeParticles = function (e) {
        pJS && pJS.particles.array.splice(0, e)
    }, pJS.fn.vendors.interactivity.grabParticles = function (e, a) {
        var i = e.x - a.x, t = e.y - a.y, n = Math.sqrt(i * i + t * t), c = e.x - pJS.interactivity.mouse.pos_x, s = e.y - pJS.interactivity.mouse.pos_y, r = Math.sqrt(c * c + s * s);
        if (n <= pJS.particles.line_linked.distance && r <= pJS.interactivity.mouse.distance && "mousemove" == pJS.interactivity.status) {
            var p = pJS.particles.line_linked.color_rgb_line;
            pJS.canvas.ctx.beginPath(), pJS.canvas.ctx.strokeStyle = "rgba(" + p.r + "," + p.g + "," + p.b + "," + (pJS.interactivity.line_linked.opacity - r / pJS.interactivity.mouse.distance) + ")", pJS.canvas.ctx.moveTo(e.x, e.y), pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y), pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width, pJS.canvas.ctx.stroke(), pJS.canvas.ctx.closePath()
        }
    }, pJS.fn.vendors.destroy = function () {
        cancelAnimationFrame(pJS.fn.requestAnimFrame), n.remove(), pJS = null
    }, i(), pJS.particles.anim.enable && t(), pJS.interactivity.enable && pJS.fn.vendors.interactivity.listeners()

    $(window).resize(function(){
        delay(function(){

            pJS.fn.vendors.destroy();
            app.ui.particles();
        }, 100);

    });


}
function hexToRgb(e) {
    var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(a, function (e, a, i, t) {
        return a + a + i + i + t + t
    });
    var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return i ? {r: parseInt(i[1], 16), g: parseInt(i[2], 16), b: parseInt(i[3], 16)} : null
}
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    }
}(), window.cancelRequestAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), window.particlesJS = function (e, a) {
    "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
    var i = document.createElement("canvas");
    i.style.width = "100%", i.style.height = "100%";
    var t = document.getElementById(e).appendChild(i);
    null != t && launchParticlesJS(e, a)
};


(function (t) {
    t.fn.circliful = function (i) {
        var e = t.extend({
            startdegree: 0,
            fgcolor: "#556b2f",
            bgcolor: "#eee",
            fill: !1,
            width: 15,
            dimension: 200,
            fontsize: 15,
            percent: 50,
            animationstep: 1,
            iconsize: "20px",
            iconcolor: "#999",
            border: "default",
            complete: null,
            bordersize: 10
        }, i);
        return this.each(function () {
            function a(i, e, a) {
                t("<span></span>").appendTo(i).addClass(e).text(s).prepend(l).css({
                    "line-height": a + "px",
                    "font-size": h.fontsize + "px"
                })
            }

            function n(i, e) {
                t("<span></span>").appendTo(i).addClass("circle-info-half").css("line-height", h.dimension * e + "px").text(r)
            }

            function o(i) {
                t.each(c, function (a, n) {
                    h[n] = void 0 != i.data(n) ? i.data(n) : t(e).attr(n), "fill" == n && void 0 != i.data("fill") && (m = !0)
                })
            }

            function d(e) {
                u.clearRect(0, 0, g.width, g.height), u.beginPath(), u.arc(x, b, w, z, y, !1), u.lineWidth = h.width + 1, u.strokeStyle = h.bgcolor, u.stroke(), m && (u.fillStyle = h.fill, u.fill()), u.beginPath(), u.arc(x, b, w, -k + T, C * e - k + T, !1), "outline" == h.border ? u.lineWidth = h.width + 13 : "inline" == h.border && (u.lineWidth = h.width - 13), u.strokeStyle = h.fgcolor, u.stroke(), p > M && (M += I, requestAnimationFrame(function () {
                    d(Math.min(M, p) / 100)
                }, f)), M == p && S && i !== void 0 && t.isFunction(i.complete) && (i.complete(), S = !1)
            }

            var s, r, c = ["fgcolor", "bgcolor", "fill", "width", "dimension", "fontsize", "animationstep", "endPercent", "icon", "iconcolor", "iconsize", "border", "startdegree", "bordersize"], h = {}, l = "", p = 0, f = t(this), m = !1;
            if (f.addClass("circliful"), o(f), void 0 != f.data("text") && (s = f.data("text"), void 0 != f.data("icon") && (l = t("<i></i>").addClass("fa " + t(this).data("icon")).css({
                    color: h.iconcolor,
                    "font-size": h.iconsize
                })), void 0 != f.data("type") ? (F = t(this).data("type"), "half" == F ? a(f, "circle-text-half", h.dimension / 1.45) : a(f, "circle-text", h.dimension)) : a(f, "circle-text", h.dimension)), void 0 != t(this).data("total") && void 0 != t(this).data("part")) {
                var v = t(this).data("total") / 100;
                percent = (t(this).data("part") / v / 100).toFixed(3), p = (t(this).data("part") / v).toFixed(3)
            } else void 0 != t(this).data("percent") ? (percent = t(this).data("percent") / 100, p = t(this).data("percent")) : percent = e.percent / 100;
            void 0 != t(this).data("info") && (r = t(this).data("info"), void 0 != t(this).data("type") ? (F = t(this).data("type"), "half" == F ? n(f, .9) : n(f, 1.25)) : n(f, 1.25)), t(this).width(h.dimension + "px");
            var g = t("<canvas></canvas>").attr({
                width: h.dimension,
                height: h.dimension
            }).appendTo(t(this)).get(0), u = g.getContext("2d");
            t(g).parent();
            var x = g.width / 2, b = g.height / 2, P = 360 * h.percent;
            P * (Math.PI / 180);
            var w = g.width / 2.5, y = 2.3 * Math.PI, z = 0, M = 0 === h.animationstep ? p : 0, I = Math.max(h.animationstep, 0), C = 2 * Math.PI, k = Math.PI / 2, F = "", S = !0, T = h.startdegree / 180 * Math.PI;
            void 0 != t(this).data("type") && (F = t(this).data("type"), "half" == F && (y = 2 * Math.PI, z = 3.13, C = Math.PI, k = Math.PI / .996)), d(M / 100)
        })
    }
})(jQuery);


/*! alertify - v0.3.11 - 2013-10-08 */
!function (a, b) {
    "use strict";
    var c, d = a.document;
    c = function () {
        var c, e, f, g, h, i, j, k, l, m, n, o, p, q = {}, r = {}, s = !1, t = {ENTER: 13, ESC: 27, SPACE: 32}, u = [];
        return r = {
            buttons: {
                holder: '<nav class="alertify-buttons">{{buttons}}</nav>',
                submit: '<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                ok: '<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                cancel: '<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'
            },
            input: '<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',
            message: '<p class="alertify-message">{{message}}</p>',
            log: '<article class="alertify-log{{class}}">{{message}}</article>'
        }, p = function () {
            var a, c, e = !1, f = d.createElement("fakeelement"), g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            };
            for (a in g)if (f.style[a] !== b) {
                c = g[a], e = !0;
                break
            }
            return {type: c, supported: e}
        }, c = function (a) {
            return d.getElementById(a)
        }, q = {
            labels: {ok: "OK", cancel: "Cancel"},
            delay: 5e3,
            buttonReverse: !1,
            buttonFocus: "ok",
            transition: b,
            addListeners: function (a) {
                var b, c, i, j, k, l = "undefined" != typeof f, m = "undefined" != typeof e, n = "undefined" != typeof o, p = "", q = this;
                b = function (b) {
                    return "undefined" != typeof b.preventDefault && b.preventDefault(), i(b), "undefined" != typeof o && (p = o.value), "function" == typeof a && ("undefined" != typeof o ? a(!0, p) : a(!0)), !1
                }, c = function (b) {
                    return "undefined" != typeof b.preventDefault && b.preventDefault(), i(b), "function" == typeof a && a(!1), !1
                }, i = function () {
                    q.hide(), q.unbind(d.body, "keyup", j), q.unbind(g, "focus", k), l && q.unbind(f, "click", b), m && q.unbind(e, "click", c)
                }, j = function (a) {
                    var d = a.keyCode;
                    (d === t.SPACE && !n || n && d === t.ENTER) && b(a), d === t.ESC && m && c(a)
                }, k = function () {
                    n ? o.focus() : !m || q.buttonReverse ? f.focus() : e.focus()
                }, this.bind(g, "focus", k), this.bind(h, "focus", k), l && this.bind(f, "click", b), m && this.bind(e, "click", c), this.bind(d.body, "keyup", j), this.transition.supported || this.setFocus()
            },
            bind: function (a, b, c) {
                "function" == typeof a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
            },
            handleErrors: function () {
                if ("undefined" != typeof a.onerror) {
                    var b = this;
                    return a.onerror = function (a, c, d) {
                        b.error("[" + a + " on line " + d + " of " + c + "]", 0)
                    }, !0
                }
                return !1
            },
            appendButtons: function (a, b) {
                return this.buttonReverse ? b + a : a + b
            },
            build: function (a) {
                var b = "", c = a.type, d = a.message, e = a.cssClass || "";
                switch (b += '<div class="alertify-dialog">', b += '<a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>', "none" === q.buttonFocus && (b += '<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'), "prompt" === c && (b += '<div id="alertify-form">'), b += '<article class="alertify-inner">', b += r.message.replace("{{message}}", d), "prompt" === c && (b += r.input), b += r.buttons.holder, b += "</article>", "prompt" === c && (b += "</div>"), b += '<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>', b += "</div>", c) {
                    case"confirm":
                        b = b.replace("{{buttons}}", this.appendButtons(r.buttons.cancel, r.buttons.ok)), b = b.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case"prompt":
                        b = b.replace("{{buttons}}", this.appendButtons(r.buttons.cancel, r.buttons.submit)), b = b.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case"alert":
                        b = b.replace("{{buttons}}", r.buttons.ok), b = b.replace("{{ok}}", this.labels.ok)
                }
                return l.className = "alertify alertify-" + c + " " + e, k.className = "alertify-cover", b
            },
            close: function (a, b) {
                var c, d, e = b && !isNaN(b) ? +b : this.delay, f = this;
                this.bind(a, "click", function () {
                    c(a)
                }), d = function (a) {
                    a.stopPropagation(), f.unbind(this, f.transition.type, d), m.removeChild(this), m.hasChildNodes() || (m.className += " alertify-logs-hidden")
                }, c = function (a) {
                    "undefined" != typeof a && a.parentNode === m && (f.transition.supported ? (f.bind(a, f.transition.type, d), a.className += " alertify-log-hide") : (m.removeChild(a), m.hasChildNodes() || (m.className += " alertify-logs-hidden")))
                }, 0 !== b && setTimeout(function () {
                    c(a)
                }, e)
            },
            dialog: function (a, b, c, e, f) {
                j = d.activeElement;
                var g = function () {
                    m && null !== m.scrollTop && k && null !== k.scrollTop || g()
                };
                if ("string" != typeof a)throw new Error("message must be a string");
                if ("string" != typeof b)throw new Error("type must be a string");
                if ("undefined" != typeof c && "function" != typeof c)throw new Error("fn must be a function");
                return this.init(), g(), u.push({
                    type: b,
                    message: a,
                    callback: c,
                    placeholder: e,
                    cssClass: f
                }), s || this.setup(), this
            },
            extend: function (a) {
                if ("string" != typeof a)throw new Error("extend method must have exactly one paramter");
                return function (b, c) {
                    return this.log(b, a, c), this
                }
            },
            hide: function () {
                var a, b = this;
                u.splice(0, 1), u.length > 0 ? this.setup(!0) : (s = !1, a = function (c) {
                    c.stopPropagation(), b.unbind(l, b.transition.type, a)
                }, this.transition.supported ? (this.bind(l, this.transition.type, a), l.className = "alertify alertify-hide alertify-hidden") : l.className = "alertify alertify-hide alertify-hidden alertify-isHidden", k.className = "alertify-cover alertify-cover-hidden", j.focus())
            },
            init: function () {
                d.createElement("nav"), d.createElement("article"), d.createElement("section"), null == c("alertify-cover") && (k = d.createElement("div"), k.setAttribute("id", "alertify-cover"), k.className = "alertify-cover alertify-cover-hidden", d.body.appendChild(k)), null == c("alertify") && (s = !1, u = [], l = d.createElement("section"), l.setAttribute("id", "alertify"), l.className = "alertify alertify-hidden", d.body.appendChild(l)), null == c("alertify-logs") && (m = d.createElement("section"), m.setAttribute("id", "alertify-logs"), m.className = "alertify-logs alertify-logs-hidden", d.body.appendChild(m)), d.body.setAttribute("tabindex", "0"), this.transition = p()
            },
            log: function (a, b, c) {
                var d = function () {
                    m && null !== m.scrollTop || d()
                };
                return this.init(), d(), m.className = "alertify-logs", this.notify(a, b, c), this
            },
            notify: function (a, b, c) {
                var e = d.createElement("article");
                e.className = "alertify-log" + ("string" == typeof b && "" !== b ? " alertify-log-" + b : ""), e.innerHTML = a, m.appendChild(e), setTimeout(function () {
                    e.className = e.className + " alertify-log-show"
                }, 50), this.close(e, c)
            },
            set: function (a) {
                var b;
                if ("object" != typeof a && a instanceof Array)throw new Error("args must be an object");
                for (b in a)a.hasOwnProperty(b) && (this[b] = a[b])
            },
            setFocus: function () {
                o ? (o.focus(), o.select()) : i.focus()
            },
            setup: function (a) {
                var d, j = u[0], k = this;
                s = !0, d = function (a) {
                    a.stopPropagation(), k.setFocus(), k.unbind(l, k.transition.type, d)
                }, this.transition.supported && !a && this.bind(l, this.transition.type, d), l.innerHTML = this.build(j), g = c("alertify-resetFocus"), h = c("alertify-resetFocusBack"), f = c("alertify-ok") || b, e = c("alertify-cancel") || b, i = "cancel" === q.buttonFocus ? e : "none" === q.buttonFocus ? c("alertify-noneFocus") : f, o = c("alertify-text") || b, n = c("alertify-form") || b, "string" == typeof j.placeholder && "" !== j.placeholder && (o.value = j.placeholder), a && this.setFocus(), this.addListeners(j.callback)
            },
            unbind: function (a, b, c) {
                "function" == typeof a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
            }
        }, {
            alert: function (a, b, c) {
                return q.dialog(a, "alert", b, "", c), this
            }, confirm: function (a, b, c) {
                return q.dialog(a, "confirm", b, "", c), this
            }, extend: q.extend, init: q.init, log: function (a, b, c) {
                return q.log(a, b, c), this
            }, prompt: function (a, b, c, d) {
                return q.dialog(a, "prompt", b, c, d), this
            }, success: function (a, b) {
                return q.log(a, "success", b), this
            }, error: function (a, b) {
                return q.log(a, "error", b), this
            }, set: function (a) {
                q.set(a)
            }, labels: q.labels, debug: q.handleErrors
        }
    }, "function" == typeof define ? define([], function () {
        return new c
    }) : "undefined" == typeof a.alertify && (a.alertify = new c)
}(this);
