define(function() {
    return function(t) {
        function e(a) {
            if (i[a]) return i[a].exports;
            var r = i[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return t[a].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var i = {};
        return e.m = t, e.c = i, e.i = function(t) {
            return t
        }, e.d = function(t, i, a) {
            e.o(t, i) || Object.defineProperty(t, i, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        }, e.n = function(t) {
            var i = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(i, "a", i), i
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 85)
    }({
        1: function(t, e, i) {
            "use strict";
            var a = {
                    SCALE_TO_FILL: "fill",
                    SCALE_TO_FIT: "fit",
                    STRETCH: "stretch",
                    ORIGINAL_SIZE: "original_size",
                    TILE: "tile",
                    TILE_HORIZONTAL: "tile_horizontal",
                    TILE_VERTICAL: "tile_vertical",
                    FIT_AND_TILE: "fit_and_tile",
                    LEGACY_STRIP_TILE: "legacy_strip_tile",
                    LEGACY_STRIP_TILE_HORIZONTAL: "legacy_strip_tile_horizontal",
                    LEGACY_STRIP_TILE_VERTICAL: "legacy_strip_tile_vertical",
                    LEGACY_STRIP_SCALE_TO_FILL: "legacy_strip_fill",
                    LEGACY_STRIP_SCALE_TO_FIT: "legacy_strip_fit",
                    LEGACY_STRIP_FIT_AND_TILE: "legacy_strip_fit_and_tile",
                    LEGACY_STRIP_ORIGINAL_SIZE: "legacy_strip_original_size",
                    LEGACY_ORIGINAL_SIZE: "actual_size",
                    LEGACY_FIT_WIDTH: "fitWidth",
                    LEGACY_FIT_HEIGHT: "fitHeight",
                    LEGACY_FULL: "full",
                    LEGACY_BG_FIT_AND_TILE: "legacy_tile",
                    LEGACY_BG_FIT_AND_TILE_HORIZONTAL: "legacy_tile_horizontal",
                    LEGACY_BG_FIT_AND_TILE_VERTICAL: "legacy_tile_vertical",
                    LEGACY_BG_NORMAL: "legacy_normal"
                },
                r = {
                    FIT: "fit",
                    FILL: "fill",
                    CROP: "crop",
                    LEGACY_CROP: "legacy_crop"
                },
                n = {
                    CENTER: "center",
                    TOP: "top",
                    TOP_LEFT: "top_left",
                    TOP_RIGHT: "top_right",
                    BOTTOM: "bottom",
                    BOTTOM_LEFT: "bottom_left",
                    BOTTOM_RIGHT: "bottom_right",
                    LEFT: "left",
                    RIGHT: "right"
                },
                s = {
                    center: "c",
                    top: "t",
                    top_left: "tl",
                    top_right: "tr",
                    bottom: "b",
                    bottom_left: "bl",
                    bottom_right: "br",
                    left: "l",
                    right: "r"
                },
                o = {
                    BG: "bg",
                    IMG: "img",
                    SVG: "svg"
                },
                c = {
                    radius: .66,
                    amount: 1,
                    threshold: .01
                },
                g = {
                    uri: "",
                    css: {
                        img: {},
                        container: {}
                    },
                    attr: {
                        img: {},
                        container: {}
                    }
                },
                h = {
                    HIGH: {
                        size: 196e4,
                        quality: 90,
                        maxUpscale: 1
                    },
                    MEDIUM: {
                        size: 36e4,
                        quality: 85,
                        maxUpscale: 1
                    },
                    LOW: {
                        size: 16e4,
                        quality: 80,
                        maxUpscale: 1.2
                    },
                    TINY: {
                        size: 0,
                        quality: 80,
                        maxUpscale: 1.4
                    }
                },
                p = {
                    HIGH: "HIGH",
                    MEDIUM: "MEDIUM",
                    LOW: "LOW",
                    TINY: "TINY"
                },
                u = {
                    JPG: "jpg",
                    JPEG: "jpeg",
                    PNG: "png",
                    WEBP: "webp",
                    WIX_ICO_MP: "wix_ico_mp",
                    WIX_MP: "wix_mp",
                    GIF: "gif",
                    SVG: "svg"
                },
                T = {
                    LOSSLESS: "lossless",
                    LOSSY: "lossy",
                    ALPHA: "alpha",
                    ANIMATION: "animation"
                };
            t.exports = {
                alignTypes: n,
                alignTypesMap: s,
                transformTypes: r,
                fittingTypes: a,
                htmlTag: o,
                defaultUSM: c,
                emptyData: g,
                imageQuality: p,
                imageQualityMap: h,
                fileType: u,
                webp: T,
                API_VERSION: "v1"
            }
        },
        2: function(t, e, i) {
            "use strict";

            function a(t) {
                var e = {
                        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                    },
                    i = new window.Image;
                i.onload = function() {
                    var e = C.getFeature("isWEBP");
                    e[t] = i.width > 0 && i.height > 0, C.setFeature("isWEBP", e)
                }, i.src = "data:image/webp;base64," + e[t]
            }

            function r() {
                "undefined" != typeof window && (a(k.webp.LOSSY), a(k.webp.ANIMATION), C.setFeature("isObjectFitBrowser", o("objectFit")))
            }

            function n(t) {
                var e = C.getFeature("isWEBP"),
                    i = t === k.fileType.JPG && e[k.webp.LOSSY],
                    a = t === k.fileType.PNG && e[k.webp.LOSSLESS],
                    r = t === k.fileType.PNG && e[k.webp.ALPHA];
                return i || a && r
            }

            function s() {
                return C.getFeature("isObjectFitBrowser")
            }

            function o(t) {
                return t in window.document.documentElement.style
            }

            function c(t) {
                var e = [k.fileType.PNG, k.fileType.JPEG, k.fileType.JPG, k.fileType.WIX_ICO_MP, k.fileType.WIX_MP];
                return M.includes(e, d(t))
            }

            function g(t, e, i) {
                return i && e && !m(e.id) && M.includes(k.fittingTypes, t)
            }

            function h(t) {
                return c(t) && !l(t)
            }

            function p(t) {
                return M.includes(["jpg", "jpeg"], d(t))
            }

            function u(t) {
                return M.includes(["png"], d(t))
            }

            function T(t) {
                return M.includes(["webp"], d(t))
            }

            function l(t) {
                return /(^https?)|(^data)|(^\/\/)/.test(t)
            }

            function m(t) {
                return !t || !t.trim() || "none" === t.toLowerCase()
            }

            function A(t) {
                var e = t,
                    i = /\/(.*?)$/,
                    a = /\.[^.]*$/,
                    r = i.exec(t);
                return r && r[1] && (e = r[1]), e.replace(a, "")
            }

            function _(t) {
                return p(t) ? k.fileType.JPG : u(t) ? k.fileType.PNG : T(t) ? k.fileType.WEBP : void 0
            }

            function d(t) {
                return (/[.]([^.]+)$/.exec(t) && /[.]([^.]+)$/.exec(t)[1] || "").toLowerCase()
            }

            function f(t, e, i, a) {
                return Math.min(i / t, a / e)
            }

            function I(t, e, i, a) {
                return Math.max(i / t, a / e)
            }

            function L(t, e, i, a, r) {
                return r === k.transformTypes.FILL ? I(t, e, i, a) : r === k.transformTypes.FIT ? f(t, e, i, a) : 1
            }

            function E(t, e, i, a) {
                var r = w(i),
                    n = {
                        width: 0,
                        height: 0,
                        scaleFactor: 0,
                        cssUpscaleNeeded: !1
                    },
                    s = L(t, e, i.width * r, i.height * r, a),
                    o = F(t, e);
                if (s > o) {
                    switch (a) {
                        case k.transformTypes.FILL:
                            n.width = i.width * r * (o / s), n.height = i.height * r * (o / s);
                            break;
                        case k.transformTypes.FIT:
                            n.width = t * o, n.height = e * o
                    }
                    n.scaleFactor = o, n.cssUpscaleNeeded = !0
                } else {
                    switch (a) {
                        case k.transformTypes.FILL:
                            n.width = i.width * r, n.height = i.height * r;
                            break;
                        case k.transformTypes.FIT:
                            n.width = t * s, n.height = e * s
                    }
                    n.scaleFactor = s, n.cssUpscaleNeeded = !1
                }
                return n
            }

            function y(t, e, i) {
                var a = void 0,
                    r = void 0;
                switch (i) {
                    case k.alignTypes.CENTER:
                        a = Math.max(0, (t.width - e.width) / 2), r = Math.max(0, (t.height - e.height) / 2);
                        break;
                    case k.alignTypes.TOP:
                        a = Math.max(0, (t.width - e.width) / 2), r = 0;
                        break;
                    case k.alignTypes.TOP_LEFT:
                        a = 0, r = 0;
                        break;
                    case k.alignTypes.TOP_RIGHT:
                        a = Math.max(0, t.width - e.width), r = 0;
                        break;
                    case k.alignTypes.BOTTOM:
                        a = Math.max(0, (t.width - e.width) / 2), r = Math.max(0, t.height - e.height);
                        break;
                    case k.alignTypes.BOTTOM_LEFT:
                        a = 0, r = Math.max(0, t.height - e.height);
                        break;
                    case k.alignTypes.BOTTOM_RIGHT:
                        a = Math.max(0, t.width - e.width), r = Math.max(0, t.height - e.height);
                        break;
                    case k.alignTypes.LEFT:
                        a = 0, r = Math.max(0, (t.height - e.height) / 2);
                        break;
                    case k.alignTypes.RIGHT:
                        a = Math.max(0, t.width - e.width), r = Math.max(0, (t.height - e.height) / 2)
                }
                return {
                    x: t.x ? t.x + a : a,
                    y: t.y ? t.y + r : r,
                    width: Math.min(t.width, e.width),
                    height: Math.min(t.height, e.height)
                }
            }

            function b(t, e) {
                var i = Math.max(0, Math.min(t.width, e.x + e.width) - Math.max(0, e.x)),
                    a = Math.max(0, Math.min(t.height, e.y + e.height) - Math.max(0, e.y));
                return i && a && (t.width !== i || t.height !== a) ? {
                    x: Math.max(0, e.x),
                    y: Math.max(0, e.y),
                    width: i,
                    height: a
                } : null
            }

            function w(t) {
                return t.pixelAspectRatio || 1
            }

            function G(t) {
                return k.alignTypesMap[t.alignment] || k.alignTypesMap[k.alignTypes.CENTER]
            }

            function O(t, e) {
                return k.imageQualityMap[R(t, e)].quality
            }

            function F(t, e) {
                return k.imageQualityMap[R(t, e)].maxUpscale
            }

            function R(t, e) {
                var i = t * e;
                return i > k.imageQualityMap[k.imageQuality.HIGH].size ? k.imageQuality.HIGH : i > k.imageQualityMap[k.imageQuality.MEDIUM].size ? k.imageQuality.MEDIUM : i > k.imageQualityMap[k.imageQuality.LOW].size ? k.imageQuality.LOW : k.imageQuality.TINY
            }

            function S(t, e, i, a, r) {
                var n = L(t, e, i, a, r);
                return {
                    width: Math.round(t * n),
                    height: Math.round(e * n)
                }
            }
            var M = i(3),
                k = i(1),
                C = i(82);
            t.exports = {
                populateGlobalFeatureSupport: r,
                isWEBPBrowserSupport: n,
                isObjectFitBrowserSupport: s,
                isImageTransformApplicable: h,
                isValidRequest: g,
                isImageTypeSupported: c,
                isJPG: p,
                isPNG: u,
                isWEBP: T,
                getFileType: _,
                getFileExtension: d,
                getFileName: A,
                getAlignedRect: y,
                getOverlappingRect: b,
                getFitScaleFactor: f,
                getFillScaleFactor: I,
                getScaleFactor: L,
                getCalculatedTransformedData: E,
                getPixelAspectRatio: w,
                getAlignment: G,
                getPreferredImageQuality: O,
                getPreferredUpscaleFactor: F,
                getDimension: S
            }
        },
        3: function(t, e, i) {
            "use strict";

            function a() {
                for (var t = arguments[0] || {}, e = Array.prototype.slice.call(arguments, 1, arguments.length), i = 0; i < e.length; i++) {
                    var a = e[i];
                    for (var r in a) a.hasOwnProperty(r) && (t[r] = a[r])
                }
                return t
            }

            function r(t, e) {
                return t.indexOf ? t.indexOf(e) > -1 : !(!t || "object" !== (void 0 === t ? "undefined" : o(t))) && Object.keys(t).some(function(i) {
                    return t[i] === e
                })
            }

            function n(t) {
                return function(e) {
                    var i = t;
                    for (var a in e) e.hasOwnProperty(a) && (i = i.replace(new RegExp("\\$\\{" + a + "\\}", "g"), e[a]));
                    return i
                }
            }

            function s(t) {
                return t[t.length - 1]
            }
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            t.exports = {
                assign: a,
                includes: r,
                last: s,
                template: n
            }
        },
        65: function(t, e, i) {
            "use strict";

            function a(t, e) {
                var i = void 0;
                return i = e.htmlTag === r.htmlTag.BG ? s : e.htmlTag === r.htmlTag.SVG ? c : n.isObjectFitBrowserSupport() ? o : g, i.get(t, e)
            }
            var r = i(1),
                n = i(2),
                s = i(79),
                o = i(80),
                c = i(78),
                g = i(81);
            t.exports = {
                getAttributes: a
            }
        },
        66: function(t, e, i) {
            "use strict";

            function a(t) {
                var e = [];
                t.parts.forEach(function(t) {
                    switch (t.transformType) {
                        case n.transformTypes.CROP:
                            e.push(c(t));
                            break;
                        case n.transformTypes.LEGACY_CROP:
                            e.push(g(t));
                            break;
                        case n.transformTypes.FIT:
                            var i = s(t);
                            t.upscale && (i += h(t)), e.push(i);
                            break;
                        case n.transformTypes.FILL:
                            var a = o(t);
                            t.upscale && (a += h(t)), e.push(a)
                    }
                });
                var i = e.join("/");
                return (t.fileType === n.fileType.PNG && t.isWEBPSupport || t.fileType === n.fileType.JPG) && (i += p(t)), t.unsharpMask && (i += u(t.unsharpMask)), t.progressive || (i += T(t)), t.src.id + "/" + n.API_VERSION + "/" + i + "/" + t.fileName + "." + (t.isWEBPSupport ? "webp" : t.fileExtension)
            }
            var r = i(3),
                n = i(1),
                s = r.template("fit/w_${width},h_${height}"),
                o = r.template("fill/w_${width},h_${height},al_${alignment}"),
                c = r.template("crop/x_${x},y_${y},w_${width},h_${height}"),
                g = r.template("crop/w_${width},h_${height},al_${alignment}"),
                h = r.template(",lg_1"),
                p = r.template(",q_${quality}"),
                u = r.template(",usm_${radius}_${amount}_${threshold}"),
                T = r.template(",bl");
            t.exports = {
                getImageURI: a
            }
        },
        67: function(t, e, i) {
            "use strict";

            function a(t, e) {
                e = e || {}, t.quality = n(t, e), t.unsharpMask = s(t, e), t.progressive = r(e)
            }

            function r(t) {
                return !1 !== t.progressive
            }

            function n(t, e) {
                var i = p.last(t.parts),
                    a = T.getPreferredImageQuality(i.width, i.height),
                    r = e.quality && e.quality >= 0 && e.quality <= 100 ? e.quality : a;
                return parseInt(r, 10)
            }

            function s(t, e) {
                var i = void 0;
                return c(e.unsharpMask) ? i = {
                    radius: e.unsharpMask.radius,
                    amount: e.unsharpMask.amount,
                    threshold: e.unsharpMask.threshold
                } : g(e.unsharpMask) || o(t) && (i = u.defaultUSM), i && (i.radius = h(i.radius, 2), i.amount = h(i.amount, 2), i.threshold = h(i.threshold, 2)), i
            }

            function o(t) {
                var e = p.last(t.parts);
                return !(e.scaleFactor >= 1) || e.forceUSM
            }

            function c(t) {
                t = t || {};
                var e = void 0 !== t.radius && t.radius >= .1 && t.radius <= 500,
                    i = void 0 !== t.amount && t.amount >= 0 && t.amount <= 10,
                    a = void 0 !== t.threshold && t.threshold >= 0 && t.threshold <= 255;
                return e && i && a
            }

            function g(t) {
                return t = t || {}, void 0 !== t.radius && 0 === t.radius && void 0 !== t.amount && 0 === t.amount && void 0 !== t.threshold && 0 === t.threshold
            }

            function h(t, e) {
                var i = Math.pow(10, e || 0);
                return (t * i / i).toFixed(parseInt(e, 10))
            }
            var p = i(3),
                u = i(1),
                T = i(2);
            t.exports = {
                setTransformOptions: a
            }
        },
        68: function(t, e, i) {
            "use strict";

            function a(t, e, i) {
                var a = void 0;
                switch (e.crop && (a = T.getOverlappingRect(e, e.crop)) && (t.src.width = a.width, t.src.height = a.height, t.src.cropped = !0, t.parts.push(o(a))), t.fittingType) {
                    case u.fittingTypes.SCALE_TO_FIT:
                    case u.fittingTypes.LEGACY_FIT_WIDTH:
                    case u.fittingTypes.LEGACY_FIT_HEIGHT:
                    case u.fittingTypes.LEGACY_FULL:
                    case u.fittingTypes.FIT_AND_TILE:
                    case u.fittingTypes.LEGACY_BG_FIT_AND_TILE:
                    case u.fittingTypes.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:
                    case u.fittingTypes.LEGACY_BG_FIT_AND_TILE_VERTICAL:
                    case u.fittingTypes.LEGACY_BG_NORMAL:
                        t.parts.push(r(t, i));
                        break;
                    case u.fittingTypes.SCALE_TO_FILL:
                        t.parts.push(n(t, i));
                        break;
                    case u.fittingTypes.STRETCH:
                        t.parts.push(s(t, i));
                        break;
                    case u.fittingTypes.TILE_HORIZONTAL:
                    case u.fittingTypes.TILE_VERTICAL:
                    case u.fittingTypes.TILE:
                    case u.fittingTypes.LEGACY_ORIGINAL_SIZE:
                    case u.fittingTypes.ORIGINAL_SIZE:
                        a = T.getAlignedRect(t.src, i, i.alignment), t.src.isCropped ? (p.assign(t.parts[0], a), t.src.width = a.width, t.src.height = a.height) : t.parts.push(o(a));
                        break;
                    case u.fittingTypes.LEGACY_STRIP_TILE_HORIZONTAL:
                    case u.fittingTypes.LEGACY_STRIP_TILE_VERTICAL:
                    case u.fittingTypes.LEGACY_STRIP_TILE:
                    case u.fittingTypes.LEGACY_STRIP_ORIGINAL_SIZE:
                        t.parts.push(h(i));
                        break;
                    case u.fittingTypes.LEGACY_STRIP_SCALE_TO_FIT:
                    case u.fittingTypes.LEGACY_STRIP_FIT_AND_TILE:
                        t.parts.push(c(i));
                        break;
                    case u.fittingTypes.LEGACY_STRIP_SCALE_TO_FILL:
                        t.parts.push(g(i))
                }
            }

            function r(t, e) {
                var i = T.getCalculatedTransformedData(t.src.width, t.src.height, e, u.transformTypes.FIT);
                return {
                    transformType: u.transformTypes.FILL,
                    width: Math.round(i.width),
                    height: Math.round(i.height),
                    alignment: u.alignTypesMap.center,
                    upscale: i.scaleFactor > 1,
                    forceUSM: !1,
                    scaleFactor: i.scaleFactor,
                    cssUpscaleNeeded: i.cssUpscaleNeeded
                }
            }

            function n(t, e) {
                var i = T.getCalculatedTransformedData(t.src.width, t.src.height, e, u.transformTypes.FILL);
                return {
                    transformType: u.transformTypes.FILL,
                    width: Math.round(i.width),
                    height: Math.round(i.height),
                    alignment: T.getAlignment(e),
                    upscale: i.scaleFactor > 1,
                    forceUSM: !1,
                    scaleFactor: i.scaleFactor,
                    cssUpscaleNeeded: i.cssUpscaleNeeded
                }
            }

            function s(t, e) {
                var i = T.getScaleFactor(t.src.width, t.src.height, e.width, e.height, u.transformTypes.FILL),
                    a = p.assign({}, e);
                return a.width = t.src.width * i, a.height = t.src.height * i, r(t, a)
            }

            function o(t) {
                return {
                    transformType: u.transformTypes.CROP,
                    x: Math.round(t.x),
                    y: Math.round(t.y),
                    width: Math.round(t.width),
                    height: Math.round(t.height),
                    upscale: !1,
                    forceUSM: !1,
                    scaleFactor: 1,
                    cssUpscaleNeeded: !1
                }
            }

            function c(t) {
                return {
                    transformType: u.transformTypes.FIT,
                    width: Math.round(t.width),
                    height: Math.round(t.height),
                    upscale: !1,
                    forceUSM: !0,
                    scaleFactor: 1,
                    cssUpscaleNeeded: !1
                }
            }

            function g(t) {
                return {
                    transformType: u.transformTypes.FILL,
                    width: Math.round(t.width),
                    height: Math.round(t.height),
                    alignment: T.getAlignment(t),
                    upscale: !1,
                    forceUSM: !0,
                    scaleFactor: 1,
                    cssUpscaleNeeded: !1
                }
            }

            function h(t) {
                return {
                    transformType: u.transformTypes.LEGACY_CROP,
                    width: Math.round(t.width),
                    height: Math.round(t.height),
                    alignment: T.getAlignment(t),
                    upscale: !1,
                    forceUSM: !1,
                    scaleFactor: 1,
                    cssUpscaleNeeded: !1
                }
            }
            var p = i(3),
                u = i(1),
                T = i(2);
            t.exports = {
                setTransformParts: a
            }
        },
        78: function(t, e, i) {
            "use strict";

            function a(t, e) {
                var i = {
                        css: {
                            container: {}
                        },
                        attr: {
                            container: {},
                            img: {}
                        }
                    },
                    a = i.css,
                    s = i.attr,
                    o = t.fittingType,
                    c = r.fittingTypes,
                    g = t.src.width,
                    h = t.src.height,
                    p = void 0;
                switch (a.container.position = "relative", o) {
                    case c.ORIGINAL_SIZE:
                    case c.LEGACY_ORIGINAL_SIZE:
                        s.img.width = t.src.width, s.img.height = t.src.height, s.img.x = "50%", s.img.y = "50%", s.img.transform = "translate(" + -t.src.width / 2 + "," + -t.src.height / 2 + ")", s.img.preserveAspectRatio = "xMidYMid slice";
                        break;
                    case c.SCALE_TO_FIT:
                    case c.LEGACY_FIT_WIDTH:
                    case c.LEGACY_FIT_HEIGHT:
                    case c.LEGACY_FULL:
                        p = n.getDimension(g, h, e.width, e.height, r.transformTypes.FIT), s.img.width = "100%", s.img.height = "100%", s.img.transform = "", s.img.preserveAspectRatio = "";
                        break;
                    case c.STRETCH:
                        s.img.width = e.width, s.img.height = e.height, s.img.x = 0, s.img.y = 0, s.img.transform = "", s.img.preserveAspectRatio = "none";
                        break;
                    case c.SCALE_TO_FILL:
                        n.isImageTransformApplicable(t.src.id) ? (s.img.width = e.width, s.img.height = e.height) : (p = n.getDimension(g, h, e.width, e.height, r.transformTypes.FILL), s.img.width = p.width, s.img.height = p.height), s.img.x = 0, s.img.y = 0, s.img.transform = "", s.img.preserveAspectRatio = "xMidYMid slice"
                }
                return s.container.width = e.width, s.container.height = e.height, s.container.viewBox = [0, 0, e.width, e.height].join(" "), i
            }
            var r = i(1),
                n = i(2);
            t.exports = {
                get: a
            }
        },
        79: function(t, e, i) {
            "use strict";

            function a(t, e) {
                var i = {
                        css: {
                            container: {}
                        }
                    },
                    a = i.css,
                    n = r.alignTypes,
                    s = t.fittingType,
                    o = r.fittingTypes;
                switch (s) {
                    case o.ORIGINAL_SIZE:
                    case o.LEGACY_ORIGINAL_SIZE:
                    case o.LEGACY_STRIP_ORIGINAL_SIZE:
                        a.container.backgroundSize = "auto", a.container.backgroundRepeat = "no-repeat";
                        break;
                    case o.SCALE_TO_FIT:
                    case o.LEGACY_STRIP_SCALE_TO_FIT:
                        a.container.backgroundSize = "contain", a.container.backgroundRepeat = "no-repeat";
                        break;
                    case o.STRETCH:
                        a.container.backgroundSize = "100% 100%", a.container.backgroundRepeat = "no-repeat";
                        break;
                    case o.SCALE_TO_FILL:
                    case o.LEGACY_STRIP_SCALE_TO_FILL:
                        a.container.backgroundSize = "cover", a.container.backgroundRepeat = "no-repeat";
                        break;
                    case o.TILE_HORIZONTAL:
                    case o.LEGACY_STRIP_TILE_HORIZONTAL:
                        a.container.backgroundSize = "auto", a.container.backgroundRepeat = "repeat-x";
                        break;
                    case o.TILE_VERTICAL:
                    case o.LEGACY_STRIP_TILE_VERTICAL:
                        a.container.backgroundSize = "auto", a.container.backgroundRepeat = "repeat-y";
                        break;
                    case o.TILE:
                    case o.LEGACY_STRIP_TILE:
                        a.container.backgroundSize = "auto", a.container.backgroundRepeat = "repeat";
                        break;
                    case o.FIT_AND_TILE:
                    case o.LEGACY_STRIP_FIT_AND_TILE:
                        a.container.backgroundSize = "contain", a.container.backgroundRepeat = "repeat";
                        break;
                    case o.LEGACY_BG_FIT_AND_TILE:
                        a.container.backgroundSize = "auto", a.container.backgroundRepeat = "repeat";
                        break;
                    case o.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:
                        a.container.backgroundSize = "auto", a.container.backgroundRepeat = "repeat-x";
                        break;
                    case o.LEGACY_BG_FIT_AND_TILE_VERTICAL:
                        a.container.backgroundSize = "auto", a.container.backgroundRepeat = "repeat-y";
                        break;
                    case o.LEGACY_BG_NORMAL:
                        a.container.backgroundSize = "auto", a.container.backgroundRepeat = "no-repeat"
                }
                switch (e.alignment) {
                    case n.CENTER:
                        a.container.backgroundPosition = "center center";
                        break;
                    case n.LEFT:
                        a.container.backgroundPosition = "left center";
                        break;
                    case n.RIGHT:
                        a.container.backgroundPosition = "right center";
                        break;
                    case n.TOP:
                        a.container.backgroundPosition = "center top";
                        break;
                    case n.BOTTOM:
                        a.container.backgroundPosition = "center bottom";
                        break;
                    case n.TOP_RIGHT:
                        a.container.backgroundPosition = "right top";
                        break;
                    case n.TOP_LEFT:
                        a.container.backgroundPosition = "left top";
                        break;
                    case n.BOTTOM_RIGHT:
                        a.container.backgroundPosition = "right bottom";
                        break;
                    case n.BOTTOM_LEFT:
                        a.container.backgroundPosition = "left bottom"
                }
                return i
            }
            var r = i(1);
            t.exports = {
                get: a
            }
        },
        80: function(t, e, i) {
            "use strict";

            function a(t, e) {
                var i = {
                        css: {
                            container: {},
                            img: {}
                        }
                    },
                    a = i.css,
                    n = t.fittingType,
                    s = e.alignment,
                    o = r.fittingTypes,
                    c = r.alignTypes;
                switch (a.container.position = "relative", n) {
                    case o.ORIGINAL_SIZE:
                    case o.LEGACY_ORIGINAL_SIZE:
                        t.parts && t.parts.length ? (a.img.width = t.parts[0].width, a.img.height = t.parts[0].height) : (a.img.width = t.src.width, a.img.height = t.src.height);
                        break;
                    case o.SCALE_TO_FIT:
                    case o.LEGACY_FIT_WIDTH:
                    case o.LEGACY_FIT_HEIGHT:
                    case o.LEGACY_FULL:
                        a.img.width = e.width, a.img.height = e.height, a.img.objectFit = "contain";
                        break;
                    case o.STRETCH:
                        a.img.width = e.width, a.img.height = e.height, a.img.objectFit = "fill";
                        break;
                    case o.SCALE_TO_FILL:
                        a.img.width = e.width, a.img.height = e.height, a.img.objectFit = "cover"
                }
                if (a.img.width !== e.width || a.img.height !== e.height) {
                    var g = Math.round((e.height - a.img.height) / 2),
                        h = Math.round((e.width - a.img.width) / 2);
                    switch (a.img.position = "absolute", a.img.top = "auto", a.img.right = "auto", a.img.bottom = "auto", a.img.left = "auto", s) {
                        default:
                            case c.CENTER:
                            a.img.width = e.width,
                        a.img.height = e.height,
                        a.img.objectFit = "none";
                        break;
                        case c.LEFT:
                                a.img.left = 0,
                            a.img.top = g;
                            break;
                        case c.RIGHT:
                                a.img.right = 0,
                            a.img.top = g;
                            break;
                        case c.TOP:
                                a.img.left = h,
                            a.img.top = 0;
                            break;
                        case c.BOTTOM:
                                a.img.left = h,
                            a.img.bottom = 0;
                            break;
                        case c.TOP_RIGHT:
                                a.img.right = 0,
                            a.img.top = 0;
                            break;
                        case c.TOP_LEFT:
                                a.img.left = 0,
                            a.img.top = 0;
                            break;
                        case c.BOTTOM_RIGHT:
                                a.img.right = 0,
                            a.img.bottom = 0;
                            break;
                        case c.BOTTOM_LEFT:
                                a.img.left = 0,
                            a.img.bottom = 0
                    }
                }
                return i
            }
            var r = i(1);
            t.exports = {
                get: a
            }
        },
        81: function(t, e, i) {
            "use strict";

            function a(t, e) {
                var i = {
                        css: {
                            container: {},
                            img: {}
                        }
                    },
                    a = i.css,
                    o = t.fittingType,
                    c = n.fittingTypes,
                    g = e.alignment,
                    h = n.alignTypes,
                    p = void 0,
                    u = void 0;
                t.parts && t.parts.length ? (p = t.parts[0].width, u = t.parts[0].height) : (p = t.src.width, u = t.src.height);
                var T = void 0;
                switch (a.img.display = "block", a.container.position = "relative", a.img.position = "absolute", a.img.top = "auto", a.img.right = "auto", a.img.bottom = "auto", a.img.left = "auto", o) {
                    case c.ORIGINAL_SIZE:
                    case c.LEGACY_ORIGINAL_SIZE:
                        a.img.width = p, a.img.height = u;
                        break;
                    case c.SCALE_TO_FIT:
                    case c.LEGACY_FIT_WIDTH:
                    case c.LEGACY_FIT_HEIGHT:
                    case c.LEGACY_FULL:
                        T = s.getDimension(p, u, e.width, e.height, n.transformTypes.FIT), r.assign(a.img, T);
                        break;
                    case c.STRETCH:
                        a.img.width = e.width, a.img.height = e.height;
                        break;
                    case c.SCALE_TO_FILL:
                        s.isImageTransformApplicable(t.src.id) ? (a.img.width = e.width, a.img.height = e.height) : (T = s.getDimension(p, u, e.width, e.height, n.transformTypes.FILL), r.assign(a.img, T), a.container.overflow = "hidden")
                }
                if (a.img.width !== e.width || a.img.height !== e.height) {
                    var l = Math.round((e.height - a.img.height) / 2),
                        m = Math.round((e.width - a.img.width) / 2);
                    switch (g) {
                        default:
                            case h.CENTER:
                            a.img.top = l,
                        a.img.left = m;
                        break;
                        case h.LEFT:
                                a.img.left = 0,
                            a.img.top = l;
                            break;
                        case h.RIGHT:
                                a.img.right = 0,
                            a.img.top = l;
                            break;
                        case h.TOP:
                                a.img.left = m,
                            a.img.top = 0;
                            break;
                        case h.BOTTOM:
                                a.img.left = m,
                            a.img.bottom = 0;
                            break;
                        case h.TOP_RIGHT:
                                a.img.right = 0,
                            a.img.top = 0;
                            break;
                        case h.TOP_LEFT:
                                a.img.left = 0,
                            a.img.top = 0;
                            break;
                        case h.BOTTOM_RIGHT:
                                a.img.right = 0,
                            a.img.bottom = 0;
                            break;
                        case h.BOTTOM_LEFT:
                                a.img.left = 0,
                            a.img.bottom = 0
                    }
                }
                return i
            }
            var r = i(3),
                n = i(1),
                s = i(2);
            t.exports = {
                get: a
            }
        },
        82: function(t, e, i) {
            "use strict";
            var a = {
                isWEBP: {
                    lossless: !1,
                    lossy: !1,
                    alpha: !1,
                    animation: !1
                },
                isObjectFitBrowser: !1
            };
            t.exports = {
                getFeature: function(t) {
                    return a[t]
                },
                setFeature: function(t, e) {
                    a[t] = e
                }
            }
        },
        85: function(t, e, i) {
            "use strict";

            function a(t, e, i, a) {
                var p = {},
                    u = s.getFileType(e.id),
                    T = s.getFileName(e.id),
                    l = s.getFileExtension(e.id),
                    m = s.isWEBPBrowserSupport(u),
                    A = {
                        fileName: T,
                        fileExtension: l,
                        fileType: u,
                        isWEBPSupport: m,
                        fittingType: t,
                        src: {
                            id: e.id,
                            width: e.width,
                            height: e.height,
                            isCropped: !1
                        },
                        quality: 0,
                        progressive: !0,
                        unsharpMask: {},
                        parts: []
                    };
                return s.isValidRequest(t, e, i) ? (s.isImageTransformApplicable(e.id) ? (o.setTransformParts(A, e, i), c.setTransformOptions(A, a), p.uri = g.getImageURI(A)) : p.uri = e.id, r.assign(p, h.getAttributes(A, i))) : p = n.emptyData, p
            }
            var r = i(3),
                n = i(1),
                s = i(2),
                o = i(68),
                c = i(67),
                g = i(66),
                h = i(65);
            t.exports = {
                populateGlobalFeatureSupport: s.populateGlobalFeatureSupport,
                getData: a,
                fittingTypes: n.fittingTypes,
                alignTypes: n.alignTypes,
                htmlTag: n.htmlTag
            }
        }
    })
});
//# sourceMappingURL=imageClientApi.js.map