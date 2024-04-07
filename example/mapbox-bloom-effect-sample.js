/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ur = "158";
const Ot = "", dt = "srgb", rn = "srgb-linear", Ir = "display-p3", qi = "display-p3-linear", Hi = "linear", $e = "srgb", Vi = "rec709", ki = "p3";
const jr = "300 es";
class Xn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const pt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Zr = 1234567;
const ri = Math.PI / 180, oi = 180 / Math.PI;
function nn() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (pt[i & 255] + pt[i >> 8 & 255] + pt[i >> 16 & 255] + pt[i >> 24 & 255] + "-" + pt[e & 255] + pt[e >> 8 & 255] + "-" + pt[e >> 16 & 15 | 64] + pt[e >> 24 & 255] + "-" + pt[t & 63 | 128] + pt[t >> 8 & 255] + "-" + pt[t >> 16 & 255] + pt[t >> 24 & 255] + pt[n & 255] + pt[n >> 8 & 255] + pt[n >> 16 & 255] + pt[n >> 24 & 255]).toLowerCase();
}
function gt(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Fr(i, e) {
  return (i % e + e) % e;
}
function Aa(i, e, t, n, r) {
  return n + (i - e) * (r - n) / (t - e);
}
function ba(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function si(i, e, t) {
  return (1 - t) * i + t * e;
}
function wa(i, e, t, n) {
  return si(i, e, 1 - Math.exp(-t * n));
}
function Ra(i, e = 1) {
  return e - Math.abs(Fr(i, e * 2) - e);
}
function Ca(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i));
}
function La(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10));
}
function Pa(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function Da(i, e) {
  return i + Math.random() * (e - i);
}
function Ua(i) {
  return i * (0.5 - Math.random());
}
function Ia(i) {
  i !== void 0 && (Zr = i);
  let e = Zr += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Fa(i) {
  return i * ri;
}
function Na(i) {
  return i * oi;
}
function wr(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function Oa(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function Wi(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Ba(i, e, t, n, r) {
  const s = Math.cos, o = Math.sin, a = s(t / 2), l = o(t / 2), c = s((e + n) / 2), h = o((e + n) / 2), f = s((e - n) / 2), u = o((e - n) / 2), m = s((n - e) / 2), g = o((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(a * h, l * f, l * u, a * c);
      break;
    case "YZY":
      i.set(l * u, a * h, l * f, a * c);
      break;
    case "ZXZ":
      i.set(l * f, l * u, a * h, a * c);
      break;
    case "XZX":
      i.set(a * h, l * g, l * m, a * c);
      break;
    case "YXY":
      i.set(l * m, a * h, l * g, a * c);
      break;
    case "ZYZ":
      i.set(l * g, l * m, a * h, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function Yt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Xe(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const za = {
  DEG2RAD: ri,
  RAD2DEG: oi,
  generateUUID: nn,
  clamp: gt,
  euclideanModulo: Fr,
  mapLinear: Aa,
  inverseLerp: ba,
  lerp: si,
  damp: wa,
  pingpong: Ra,
  smoothstep: Ca,
  smootherstep: La,
  randInt: Pa,
  randFloat: Da,
  randFloatSpread: Ua,
  seededRandom: Ia,
  degToRad: Fa,
  radToDeg: Na,
  isPowerOfTwo: wr,
  ceilPowerOfTwo: Oa,
  floorPowerOfTwo: Wi,
  setQuaternionFromProperEuler: Ba,
  normalize: Xe,
  denormalize: Yt
};
class Pe {
  constructor(e = 0, t = 0) {
    Pe.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(gt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * r + e.x, this.y = s * r + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ne {
  constructor(e, t, n, r, s, o, a, l, c) {
    Ne.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c);
  }
  set(e, t, n, r, s, o, a, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = a, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], f = n[7], u = n[2], m = n[5], g = n[8], v = r[0], p = r[3], d = r[6], A = r[1], S = r[4], y = r[7], b = r[2], L = r[5], w = r[8];
    return s[0] = o * v + a * A + l * b, s[3] = o * p + a * S + l * L, s[6] = o * d + a * y + l * w, s[1] = c * v + h * A + f * b, s[4] = c * p + h * S + f * L, s[7] = c * d + h * y + f * w, s[2] = u * v + m * A + g * b, s[5] = u * p + m * S + g * L, s[8] = u * d + m * y + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8];
    return t * o * h - t * a * c - n * s * h + n * a * l + r * s * c - r * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], f = h * o - a * c, u = a * l - h * s, m = c * s - o * l, g = t * f + n * u + r * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return e[0] = f * v, e[1] = (r * c - h * n) * v, e[2] = (a * n - r * o) * v, e[3] = u * v, e[4] = (h * t - r * l) * v, e[5] = (r * s - a * t) * v, e[6] = m * v, e[7] = (n * l - c * t) * v, e[8] = (o * t - n * s) * v, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * a) + o + e,
      -r * c,
      r * l,
      -r * (-c * o + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(er.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(er.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(er.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const er = /* @__PURE__ */ new Ne();
function Js(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535)
      return !0;
  return !1;
}
function Xi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Ga() {
  const i = Xi("canvas");
  return i.style.display = "block", i;
}
const Kr = {};
function ai(i) {
  i in Kr || (Kr[i] = !0, console.warn(i));
}
const Jr = /* @__PURE__ */ new Ne().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Qr = /* @__PURE__ */ new Ne().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), di = {
  [rn]: {
    transfer: Hi,
    primaries: Vi,
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [dt]: {
    transfer: $e,
    primaries: Vi,
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [qi]: {
    transfer: Hi,
    primaries: ki,
    toReference: (i) => i.applyMatrix3(Qr),
    fromReference: (i) => i.applyMatrix3(Jr)
  },
  [Ir]: {
    transfer: $e,
    primaries: ki,
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(Qr),
    fromReference: (i) => i.applyMatrix3(Jr).convertLinearToSRGB()
  }
}, Ha = /* @__PURE__ */ new Set([rn, qi]), ke = {
  enabled: !0,
  _workingColorSpace: rn,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(i) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !i;
  },
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!Ha.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = di[e].toReference, r = di[t].fromReference;
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return di[i].primaries;
  },
  getTransfer: function(i) {
    return i === Ot ? Hi : di[i].transfer;
  }
};
function Vn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function tr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Tn;
class Qs {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Tn === void 0 && (Tn = Xi("canvas")), Tn.width = e.width, Tn.height = e.height;
      const n = Tn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Tn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Xi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = Vn(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Vn(t[n] / 255) * 255) : t[n] = Vn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Va = 0;
class ea {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Va++ }), this.uuid = nn(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(nr(r[o].image)) : s.push(nr(r[o]));
      } else
        s = nr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function nr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Qs.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ka = 0;
class Lt extends Xn {
  constructor(e = Lt.DEFAULT_IMAGE, t = Lt.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, o = 1008, a = 1023, l = 1009, c = Lt.DEFAULT_ANISOTROPY, h = Ot) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: ka++ }), this.uuid = nn(), this.name = "", this.source = new ea(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Pe(0, 0), this.repeat = new Pe(1, 1), this.center = new Pe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ne(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === 3001 ? dt : Ot), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === dt ? 3001 : 3e3;
  }
  set encoding(e) {
    ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === 3001 ? dt : Ot;
  }
}
Lt.DEFAULT_IMAGE = null;
Lt.DEFAULT_MAPPING = 300;
Lt.DEFAULT_ANISOTROPY = 1;
class et {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    et.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], h = l[4], f = l[8], u = l[1], m = l[5], g = l[9], v = l[2], p = l[6], d = l[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(f - v) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(f + v) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + d - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const S = (c + 1) / 2, y = (m + 1) / 2, b = (d + 1) / 2, L = (h + u) / 4, w = (f + v) / 4, W = (g + p) / 4;
      return S > y && S > b ? S < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(S), r = L / n, s = w / n) : y > b ? y < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(y), n = L / r, s = W / r) : b < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(b), n = w / s, r = W / s), this.set(n, r, s, t), this;
    }
    let A = Math.sqrt((p - g) * (p - g) + (f - v) * (f - v) + (u - h) * (u - h));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (p - g) / A, this.y = (f - v) / A, this.z = (u - h) / A, this.w = Math.acos((c + m + d - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Wa extends Xn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new et(0, 0, e, t), this.scissorTest = !1, this.viewport = new et(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (ai("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === 3001 ? dt : Ot), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new Lt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new ea(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class kt extends Wa {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class ta extends Lt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Xa extends Lt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class qn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let l = n[r + 0], c = n[r + 1], h = n[r + 2], f = n[r + 3];
    const u = s[o + 0], m = s[o + 1], g = s[o + 2], v = s[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
      return;
    }
    if (a === 1) {
      e[t + 0] = u, e[t + 1] = m, e[t + 2] = g, e[t + 3] = v;
      return;
    }
    if (f !== v || l !== u || c !== m || h !== g) {
      let p = 1 - a;
      const d = l * u + c * m + h * g + f * v, A = d >= 0 ? 1 : -1, S = 1 - d * d;
      if (S > Number.EPSILON) {
        const b = Math.sqrt(S), L = Math.atan2(b, d * A);
        p = Math.sin(p * L) / b, a = Math.sin(a * L) / b;
      }
      const y = a * A;
      if (l = l * p + u * y, c = c * p + m * y, h = h * p + g * y, f = f * p + v * y, p === 1 - a) {
        const b = 1 / Math.sqrt(l * l + c * c + h * h + f * f);
        l *= b, c *= b, h *= b, f *= b;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r], l = n[r + 1], c = n[r + 2], h = n[r + 3], f = s[o], u = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = a * g + h * f + l * m - c * u, e[t + 1] = l * g + h * u + c * f - a * m, e[t + 2] = c * g + h * m + a * u - l * f, e[t + 3] = h * g - a * f - l * u - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(r / 2), f = a(s / 2), u = l(n / 2), m = l(r / 2), g = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = u * h * f + c * m * g, this._y = c * m * f - u * h * g, this._z = c * h * g + u * m * f, this._w = c * h * f - u * m * g;
        break;
      case "YXZ":
        this._x = u * h * f + c * m * g, this._y = c * m * f - u * h * g, this._z = c * h * g - u * m * f, this._w = c * h * f + u * m * g;
        break;
      case "ZXY":
        this._x = u * h * f - c * m * g, this._y = c * m * f + u * h * g, this._z = c * h * g + u * m * f, this._w = c * h * f - u * m * g;
        break;
      case "ZYX":
        this._x = u * h * f - c * m * g, this._y = c * m * f + u * h * g, this._z = c * h * g - u * m * f, this._w = c * h * f + u * m * g;
        break;
      case "YZX":
        this._x = u * h * f + c * m * g, this._y = c * m * f + u * h * g, this._z = c * h * g - u * m * f, this._w = c * h * f - u * m * g;
        break;
      case "XZY":
        this._x = u * h * f - c * m * g, this._y = c * m * f - u * h * g, this._z = c * h * g + u * m * f, this._w = c * h * f + u * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], f = t[10], u = n + a + f;
    if (u > 0) {
      const m = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (s - c) * m, this._z = (o - r) * m;
    } else if (n > a && n > f) {
      const m = 2 * Math.sqrt(1 + n - a - f);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (r + o) / m, this._z = (s + c) / m;
    } else if (a > f) {
      const m = 2 * Math.sqrt(1 + a - n - f);
      this._w = (s - c) / m, this._x = (r + o) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + f - n - a);
      this._w = (o - r) / m, this._x = (s + c) / m, this._y = (l + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(gt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + o * a + r * c - s * l, this._y = r * h + o * l + s * a - n * c, this._z = s * h + o * c + n * l - r * a, this._w = o * h - n * a - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, r = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), f = Math.sin((1 - t) * h) / c, u = Math.sin(t * h) / c;
    return this._w = o * f + this._w * u, this._x = n * f + this._x * u, this._y = r * f + this._y * u, this._z = s * f + this._z * u, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), r = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(r)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class D {
  constructor(e = 0, t = 0, n = 0) {
    D.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(es.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(es.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * r - a * n), h = 2 * (a * t - s * r), f = 2 * (s * n - o * t);
    return this.x = t + l * c + o * f - a * h, this.y = n + l * h + a * c - s * f, this.z = r + l * f + s * h - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = r * l - s * a, this.y = s * o - n * l, this.z = n * a - r * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return ir.copy(this).projectOnVector(e), this.sub(ir);
  }
  reflect(e) {
    return this.sub(ir.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(gt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ir = /* @__PURE__ */ new D(), es = /* @__PURE__ */ new qn();
class un {
  constructor(e = new D(1 / 0, 1 / 0, 1 / 0), t = new D(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(zt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(zt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = zt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, a = s.count; o < a; o++)
          e.isMesh === !0 ? e.getVertexPosition(o, zt) : zt.fromBufferAttribute(s, o), zt.applyMatrix4(e.matrixWorld), this.expandByPoint(zt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), fi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), fi.copy(n.boundingBox)), fi.applyMatrix4(e.matrixWorld), this.union(fi);
    }
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, zt), zt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Qn), pi.subVectors(this.max, Qn), An.subVectors(e.a, Qn), bn.subVectors(e.b, Qn), wn.subVectors(e.c, Qn), sn.subVectors(bn, An), an.subVectors(wn, bn), pn.subVectors(An, wn);
    let t = [
      0,
      -sn.z,
      sn.y,
      0,
      -an.z,
      an.y,
      0,
      -pn.z,
      pn.y,
      sn.z,
      0,
      -sn.x,
      an.z,
      0,
      -an.x,
      pn.z,
      0,
      -pn.x,
      -sn.y,
      sn.x,
      0,
      -an.y,
      an.x,
      0,
      -pn.y,
      pn.x,
      0
    ];
    return !rr(t, An, bn, wn, pi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !rr(t, An, bn, wn, pi)) ? !1 : (mi.crossVectors(sn, an), t = [mi.x, mi.y, mi.z], rr(t, An, bn, wn, pi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, zt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(zt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Kt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Kt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Kt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Kt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Kt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Kt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Kt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Kt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Kt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Kt = [
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D()
], zt = /* @__PURE__ */ new D(), fi = /* @__PURE__ */ new un(), An = /* @__PURE__ */ new D(), bn = /* @__PURE__ */ new D(), wn = /* @__PURE__ */ new D(), sn = /* @__PURE__ */ new D(), an = /* @__PURE__ */ new D(), pn = /* @__PURE__ */ new D(), Qn = /* @__PURE__ */ new D(), pi = /* @__PURE__ */ new D(), mi = /* @__PURE__ */ new D(), mn = /* @__PURE__ */ new D();
function rr(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    mn.fromArray(i, s);
    const a = r.x * Math.abs(mn.x) + r.y * Math.abs(mn.y) + r.z * Math.abs(mn.z), l = e.dot(mn), c = t.dot(mn), h = n.dot(mn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a)
      return !1;
  }
  return !0;
}
const qa = /* @__PURE__ */ new un(), ei = /* @__PURE__ */ new D(), sr = /* @__PURE__ */ new D();
class Yn {
  constructor(e = new D(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : qa.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    ei.subVectors(e, this.center);
    const t = ei.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ei, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (sr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ei.copy(e.center).add(sr)), this.expandByPoint(ei.copy(e.center).sub(sr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Jt = /* @__PURE__ */ new D(), ar = /* @__PURE__ */ new D(), gi = /* @__PURE__ */ new D(), on = /* @__PURE__ */ new D(), or = /* @__PURE__ */ new D(), _i = /* @__PURE__ */ new D(), lr = /* @__PURE__ */ new D();
class Nr {
  constructor(e = new D(), t = new D(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Jt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Jt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Jt.copy(this.origin).addScaledVector(this.direction, t), Jt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    ar.copy(e).add(t).multiplyScalar(0.5), gi.copy(t).sub(e).normalize(), on.copy(this.origin).sub(ar);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(gi), a = on.dot(this.direction), l = -on.dot(gi), c = on.lengthSq(), h = Math.abs(1 - o * o);
    let f, u, m, g;
    if (h > 0)
      if (f = o * l - a, u = o * a - l, g = s * h, f >= 0)
        if (u >= -g)
          if (u <= g) {
            const v = 1 / h;
            f *= v, u *= v, m = f * (f + o * u + 2 * a) + u * (o * f + u + 2 * l) + c;
          } else
            u = s, f = Math.max(0, -(o * u + a)), m = -f * f + u * (u + 2 * l) + c;
        else
          u = -s, f = Math.max(0, -(o * u + a)), m = -f * f + u * (u + 2 * l) + c;
      else
        u <= -g ? (f = Math.max(0, -(-o * s + a)), u = f > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -f * f + u * (u + 2 * l) + c) : u <= g ? (f = 0, u = Math.min(Math.max(-s, -l), s), m = u * (u + 2 * l) + c) : (f = Math.max(0, -(o * s + a)), u = f > 0 ? s : Math.min(Math.max(-s, -l), s), m = -f * f + u * (u + 2 * l) + c);
    else
      u = o > 0 ? -s : s, f = Math.max(0, -(o * u + a)), m = -f * f + u * (u + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(ar).addScaledVector(gi, u), m;
  }
  intersectSphere(e, t) {
    Jt.subVectors(e.center, this.origin);
    const n = Jt.dot(this.direction), r = Jt.dot(Jt) - n * n, s = e.radius * e.radius;
    if (r > s)
      return null;
    const o = Math.sqrt(s - r), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, f = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (n = (e.min.x - u.x) * c, r = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c, r = (e.min.x - u.x) * c), h >= 0 ? (s = (e.min.y - u.y) * h, o = (e.max.y - u.y) * h) : (s = (e.max.y - u.y) * h, o = (e.min.y - u.y) * h), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), f >= 0 ? (a = (e.min.z - u.z) * f, l = (e.max.z - u.z) * f) : (a = (e.max.z - u.z) * f, l = (e.min.z - u.z) * f), n > l || a > r) || ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Jt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    or.subVectors(t, e), _i.subVectors(n, e), lr.crossVectors(or, _i);
    let o = this.direction.dot(lr), a;
    if (o > 0) {
      if (r)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    on.subVectors(this.origin, e);
    const l = a * this.direction.dot(_i.crossVectors(on, _i));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(or.cross(on));
    if (c < 0 || l + c > o)
      return null;
    const h = -a * on.dot(lr);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ge {
  constructor(e, t, n, r, s, o, a, l, c, h, f, u, m, g, v, p) {
    Ge.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, h, f, u, m, g, v, p);
  }
  set(e, t, n, r, s, o, a, l, c, h, f, u, m, g, v, p) {
    const d = this.elements;
    return d[0] = e, d[4] = t, d[8] = n, d[12] = r, d[1] = s, d[5] = o, d[9] = a, d[13] = l, d[2] = c, d[6] = h, d[10] = f, d[14] = u, d[3] = m, d[7] = g, d[11] = v, d[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ge().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / Rn.setFromMatrixColumn(e, 0).length(), s = 1 / Rn.setFromMatrixColumn(e, 1).length(), o = 1 / Rn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(r), c = Math.sin(r), h = Math.cos(s), f = Math.sin(s);
    if (e.order === "XYZ") {
      const u = o * h, m = o * f, g = a * h, v = a * f;
      t[0] = l * h, t[4] = -l * f, t[8] = c, t[1] = m + g * c, t[5] = u - v * c, t[9] = -a * l, t[2] = v - u * c, t[6] = g + m * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const u = l * h, m = l * f, g = c * h, v = c * f;
      t[0] = u + v * a, t[4] = g * a - m, t[8] = o * c, t[1] = o * f, t[5] = o * h, t[9] = -a, t[2] = m * a - g, t[6] = v + u * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const u = l * h, m = l * f, g = c * h, v = c * f;
      t[0] = u - v * a, t[4] = -o * f, t[8] = g + m * a, t[1] = m + g * a, t[5] = o * h, t[9] = v - u * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const u = o * h, m = o * f, g = a * h, v = a * f;
      t[0] = l * h, t[4] = g * c - m, t[8] = u * c + v, t[1] = l * f, t[5] = v * c + u, t[9] = m * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const u = o * l, m = o * c, g = a * l, v = a * c;
      t[0] = l * h, t[4] = v - u * f, t[8] = g * f + m, t[1] = f, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = m * f + g, t[10] = u - v * f;
    } else if (e.order === "XZY") {
      const u = o * l, m = o * c, g = a * l, v = a * c;
      t[0] = l * h, t[4] = -f, t[8] = c * h, t[1] = u * f + v, t[5] = o * h, t[9] = m * f - g, t[2] = g * f - m, t[6] = a * h, t[10] = v * f + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ya, e, $a);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return Rt.subVectors(e, t), Rt.lengthSq() === 0 && (Rt.z = 1), Rt.normalize(), ln.crossVectors(n, Rt), ln.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Rt.x += 1e-4 : Rt.z += 1e-4, Rt.normalize(), ln.crossVectors(n, Rt)), ln.normalize(), vi.crossVectors(Rt, ln), r[0] = ln.x, r[4] = vi.x, r[8] = Rt.x, r[1] = ln.y, r[5] = vi.y, r[9] = Rt.y, r[2] = ln.z, r[6] = vi.z, r[10] = Rt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], f = n[5], u = n[9], m = n[13], g = n[2], v = n[6], p = n[10], d = n[14], A = n[3], S = n[7], y = n[11], b = n[15], L = r[0], w = r[4], W = r[8], M = r[12], T = r[1], C = r[5], B = r[9], $ = r[13], P = r[2], H = r[6], q = r[10], k = r[14], K = r[3], j = r[7], Y = r[11], U = r[15];
    return s[0] = o * L + a * T + l * P + c * K, s[4] = o * w + a * C + l * H + c * j, s[8] = o * W + a * B + l * q + c * Y, s[12] = o * M + a * $ + l * k + c * U, s[1] = h * L + f * T + u * P + m * K, s[5] = h * w + f * C + u * H + m * j, s[9] = h * W + f * B + u * q + m * Y, s[13] = h * M + f * $ + u * k + m * U, s[2] = g * L + v * T + p * P + d * K, s[6] = g * w + v * C + p * H + d * j, s[10] = g * W + v * B + p * q + d * Y, s[14] = g * M + v * $ + p * k + d * U, s[3] = A * L + S * T + y * P + b * K, s[7] = A * w + S * C + y * H + b * j, s[11] = A * W + S * B + y * q + b * Y, s[15] = A * M + S * $ + y * k + b * U, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], f = e[6], u = e[10], m = e[14], g = e[3], v = e[7], p = e[11], d = e[15];
    return g * (+s * l * f - r * c * f - s * a * u + n * c * u + r * a * m - n * l * m) + v * (+t * l * m - t * c * u + s * o * u - r * o * m + r * c * h - s * l * h) + p * (+t * c * f - t * a * m - s * o * f + n * o * m + s * a * h - n * c * h) + d * (-r * a * h - t * l * f + t * a * u + r * o * f - n * o * u + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], f = e[9], u = e[10], m = e[11], g = e[12], v = e[13], p = e[14], d = e[15], A = f * p * c - v * u * c + v * l * m - a * p * m - f * l * d + a * u * d, S = g * u * c - h * p * c - g * l * m + o * p * m + h * l * d - o * u * d, y = h * v * c - g * f * c + g * a * m - o * v * m - h * a * d + o * f * d, b = g * f * l - h * v * l - g * a * u + o * v * u + h * a * p - o * f * p, L = t * A + n * S + r * y + s * b;
    if (L === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / L;
    return e[0] = A * w, e[1] = (v * u * s - f * p * s - v * r * m + n * p * m + f * r * d - n * u * d) * w, e[2] = (a * p * s - v * l * s + v * r * c - n * p * c - a * r * d + n * l * d) * w, e[3] = (f * l * s - a * u * s - f * r * c + n * u * c + a * r * m - n * l * m) * w, e[4] = S * w, e[5] = (h * p * s - g * u * s + g * r * m - t * p * m - h * r * d + t * u * d) * w, e[6] = (g * l * s - o * p * s - g * r * c + t * p * c + o * r * d - t * l * d) * w, e[7] = (o * u * s - h * l * s + h * r * c - t * u * c - o * r * m + t * l * m) * w, e[8] = y * w, e[9] = (g * f * s - h * v * s - g * n * m + t * v * m + h * n * d - t * f * d) * w, e[10] = (o * v * s - g * a * s + g * n * c - t * v * c - o * n * d + t * a * d) * w, e[11] = (h * a * s - o * f * s - h * n * c + t * f * c + o * n * m - t * a * m) * w, e[12] = b * w, e[13] = (h * v * r - g * f * r + g * n * u - t * v * u - h * n * p + t * f * p) * w, e[14] = (g * a * r - o * v * r - g * n * l + t * v * l + o * n * p - t * a * p) * w, e[15] = (o * f * r - h * a * r + h * n * l - t * f * l - o * n * u + t * a * u) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, l = e.z, c = s * o, h = s * a;
    return this.set(
      c * o + n,
      c * a - r * l,
      c * l + r * a,
      0,
      c * a + r * l,
      h * a + n,
      h * l - r * o,
      0,
      c * l - r * a,
      h * l + r * o,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, r, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, h = o + o, f = a + a, u = s * c, m = s * h, g = s * f, v = o * h, p = o * f, d = a * f, A = l * c, S = l * h, y = l * f, b = n.x, L = n.y, w = n.z;
    return r[0] = (1 - (v + d)) * b, r[1] = (m + y) * b, r[2] = (g - S) * b, r[3] = 0, r[4] = (m - y) * L, r[5] = (1 - (u + d)) * L, r[6] = (p + A) * L, r[7] = 0, r[8] = (g + S) * w, r[9] = (p - A) * w, r[10] = (1 - (u + v)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Rn.set(r[0], r[1], r[2]).length();
    const o = Rn.set(r[4], r[5], r[6]).length(), a = Rn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Gt.copy(this);
    const c = 1 / s, h = 1 / o, f = 1 / a;
    return Gt.elements[0] *= c, Gt.elements[1] *= c, Gt.elements[2] *= c, Gt.elements[4] *= h, Gt.elements[5] *= h, Gt.elements[6] *= h, Gt.elements[8] *= f, Gt.elements[9] *= f, Gt.elements[10] *= f, t.setFromRotationMatrix(Gt), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, r, s, o, a = 2e3) {
    const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - r), f = (t + e) / (t - e), u = (n + r) / (n - r);
    let m, g;
    if (a === 2e3)
      m = -(o + s) / (o - s), g = -2 * o * s / (o - s);
    else if (a === 2001)
      m = -o / (o - s), g = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = h, l[9] = u, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, o, a = 2e3) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - r), f = 1 / (o - s), u = (t + e) * c, m = (n + r) * h;
    let g, v;
    if (a === 2e3)
      g = (o + s) * f, v = -2 * f;
    else if (a === 2001)
      g = s * f, v = -1 * f;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -u, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Rn = /* @__PURE__ */ new D(), Gt = /* @__PURE__ */ new Ge(), Ya = /* @__PURE__ */ new D(0, 0, 0), $a = /* @__PURE__ */ new D(1, 1, 1), ln = /* @__PURE__ */ new D(), vi = /* @__PURE__ */ new D(), Rt = /* @__PURE__ */ new D(), ts = /* @__PURE__ */ new Ge(), ns = /* @__PURE__ */ new qn();
class Yi {
  constructor(e = 0, t = 0, n = 0, r = Yi.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], h = r[9], f = r[2], u = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(gt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-gt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(gt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-f, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-gt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(u, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(gt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-gt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ts.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ts, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ns.setFromEuler(this), this.setFromQuaternion(ns, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Yi.DEFAULT_ORDER = "XYZ";
class $i {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let ja = 0;
const is = /* @__PURE__ */ new D(), Cn = /* @__PURE__ */ new qn(), Qt = /* @__PURE__ */ new Ge(), xi = /* @__PURE__ */ new D(), ti = /* @__PURE__ */ new D(), Za = /* @__PURE__ */ new D(), Ka = /* @__PURE__ */ new qn(), rs = /* @__PURE__ */ new D(1, 0, 0), ss = /* @__PURE__ */ new D(0, 1, 0), as = /* @__PURE__ */ new D(0, 0, 1), Ja = { type: "added" }, Qa = { type: "removed" };
class Et extends Xn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ja++ }), this.uuid = nn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Et.DEFAULT_UP.clone();
    const e = new D(), t = new Yi(), n = new qn(), r = new D(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new Ge()
      },
      normalMatrix: {
        value: new Ne()
      }
    }), this.matrix = new Ge(), this.matrixWorld = new Ge(), this.matrixAutoUpdate = Et.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new $i(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Cn.setFromAxisAngle(e, t), this.quaternion.multiply(Cn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Cn.setFromAxisAngle(e, t), this.quaternion.premultiply(Cn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(rs, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(ss, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(as, e);
  }
  translateOnAxis(e, t) {
    return is.copy(e).applyQuaternion(this.quaternion), this.position.add(is.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(rs, e);
  }
  translateY(e) {
    return this.translateOnAxis(ss, e);
  }
  translateZ(e) {
    return this.translateOnAxis(as, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Qt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? xi.copy(e) : xi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), ti.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Qt.lookAt(ti, xi, this.up) : Qt.lookAt(xi, ti, this.up), this.quaternion.setFromRotationMatrix(Qt), r && (Qt.extractRotation(r.matrixWorld), Cn.setFromRotationMatrix(Qt), this.quaternion.premultiply(Cn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Ja)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Qa)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Qt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Qt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Qt), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let r = 0, s = this.children.length; r < s; r++) {
      const o = this.children[r].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ti, e, Za), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ti, Ka, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        r.material = a;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), f = o(e.shapes), u = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), f.length > 0 && (n.shapes = f), u.length > 0 && (n.skeletons = u), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
Et.DEFAULT_UP = /* @__PURE__ */ new D(0, 1, 0);
Et.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ht = /* @__PURE__ */ new D(), en = /* @__PURE__ */ new D(), cr = /* @__PURE__ */ new D(), tn = /* @__PURE__ */ new D(), Ln = /* @__PURE__ */ new D(), Pn = /* @__PURE__ */ new D(), os = /* @__PURE__ */ new D(), hr = /* @__PURE__ */ new D(), ur = /* @__PURE__ */ new D(), dr = /* @__PURE__ */ new D();
let Si = !1;
class Vt {
  constructor(e = new D(), t = new D(), n = new D()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ht.subVectors(e, t), r.cross(Ht);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    Ht.subVectors(r, t), en.subVectors(n, t), cr.subVectors(e, t);
    const o = Ht.dot(Ht), a = Ht.dot(en), l = Ht.dot(cr), c = en.dot(en), h = en.dot(cr), f = o * c - a * a;
    if (f === 0)
      return s.set(-2, -1, -1);
    const u = 1 / f, m = (c * l - a * h) * u, g = (o * h - a * l) * u;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, tn), tn.x >= 0 && tn.y >= 0 && tn.x + tn.y <= 1;
  }
  static getUV(e, t, n, r, s, o, a, l) {
    return Si === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Si = !0), this.getInterpolation(e, t, n, r, s, o, a, l);
  }
  static getInterpolation(e, t, n, r, s, o, a, l) {
    return this.getBarycoord(e, t, n, r, tn), l.setScalar(0), l.addScaledVector(s, tn.x), l.addScaledVector(o, tn.y), l.addScaledVector(a, tn.z), l;
  }
  static isFrontFacing(e, t, n, r) {
    return Ht.subVectors(n, t), en.subVectors(e, t), Ht.cross(en).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ht.subVectors(this.c, this.b), en.subVectors(this.a, this.b), Ht.cross(en).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Vt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Vt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return Si === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Si = !0), Vt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  getInterpolation(e, t, n, r, s) {
    return Vt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Vt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Vt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let o, a;
    Ln.subVectors(r, n), Pn.subVectors(s, n), hr.subVectors(e, n);
    const l = Ln.dot(hr), c = Pn.dot(hr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    ur.subVectors(e, r);
    const h = Ln.dot(ur), f = Pn.dot(ur);
    if (h >= 0 && f <= h)
      return t.copy(r);
    const u = l * f - h * c;
    if (u <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), t.copy(n).addScaledVector(Ln, o);
    dr.subVectors(e, s);
    const m = Ln.dot(dr), g = Pn.dot(dr);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const v = m * c - l * g;
    if (v <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(Pn, a);
    const p = h * g - m * f;
    if (p <= 0 && f - h >= 0 && m - g >= 0)
      return os.subVectors(s, r), a = (f - h) / (f - h + (m - g)), t.copy(r).addScaledVector(os, a);
    const d = 1 / (p + v + u);
    return o = v * d, a = u * d, t.copy(n).addScaledVector(Ln, o).addScaledVector(Pn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const na = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, cn = { h: 0, s: 0, l: 0 }, Mi = { h: 0, s: 0, l: 0 };
function fr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class ze {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = dt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ke.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = ke.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, ke.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = ke.workingColorSpace) {
    if (e = Fr(e, 1), t = gt(t, 0, 1), n = gt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = fr(o, s, e + 1 / 3), this.g = fr(o, s, e), this.b = fr(o, s, e - 1 / 3);
    }
    return ke.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = dt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = r[1], a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = dt) {
    const n = na[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Vn(e.r), this.g = Vn(e.g), this.b = Vn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = tr(e.r), this.g = tr(e.g), this.b = tr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = dt) {
    return ke.fromWorkingColorSpace(mt.copy(this), e), Math.round(gt(mt.r * 255, 0, 255)) * 65536 + Math.round(gt(mt.g * 255, 0, 255)) * 256 + Math.round(gt(mt.b * 255, 0, 255));
  }
  getHexString(e = dt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ke.workingColorSpace) {
    ke.fromWorkingColorSpace(mt.copy(this), t);
    const n = mt.r, r = mt.g, s = mt.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let l, c;
    const h = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const f = o - a;
      switch (c = h <= 0.5 ? f / (o + a) : f / (2 - o - a), o) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = ke.workingColorSpace) {
    return ke.fromWorkingColorSpace(mt.copy(this), t), e.r = mt.r, e.g = mt.g, e.b = mt.b, e;
  }
  getStyle(e = dt) {
    ke.fromWorkingColorSpace(mt.copy(this), e);
    const t = mt.r, n = mt.g, r = mt.b;
    return e !== dt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(cn), this.setHSL(cn.h + e, cn.s + t, cn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(cn), e.getHSL(Mi);
    const n = si(cn.h, Mi.h, t), r = si(cn.s, Mi.s, t), s = si(cn.l, Mi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const mt = /* @__PURE__ */ new ze();
ze.NAMES = na;
let eo = 0;
class ci extends Xn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: eo++ }), this.uuid = nn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ze(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures), o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class $n extends ci {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ze(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const it = /* @__PURE__ */ new D(), Ei = /* @__PURE__ */ new Pe();
class Pt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.gpuType = 1015, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ei.fromBufferAttribute(this, t), Ei.applyMatrix3(e), this.setXY(t, Ei.x, Ei.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        it.fromBufferAttribute(this, t), it.applyMatrix3(e), this.setXYZ(t, it.x, it.y, it.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      it.fromBufferAttribute(this, t), it.applyMatrix4(e), this.setXYZ(t, it.x, it.y, it.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      it.fromBufferAttribute(this, t), it.applyNormalMatrix(e), this.setXYZ(t, it.x, it.y, it.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      it.fromBufferAttribute(this, t), it.transformDirection(e), this.setXYZ(t, it.x, it.y, it.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Yt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Xe(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), r = Xe(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), r = Xe(r, this.array), s = Xe(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class ia extends Pt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ra extends Pt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Dt extends Pt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let to = 0;
const Ft = /* @__PURE__ */ new Ge(), pr = /* @__PURE__ */ new Et(), Dn = /* @__PURE__ */ new D(), Ct = /* @__PURE__ */ new un(), ni = /* @__PURE__ */ new un(), lt = /* @__PURE__ */ new D();
class Tt extends Xn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: to++ }), this.uuid = nn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Js(e) ? ra : ia)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ne().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Ft.makeRotationFromQuaternion(e), this.applyMatrix4(Ft), this;
  }
  rotateX(e) {
    return Ft.makeRotationX(e), this.applyMatrix4(Ft), this;
  }
  rotateY(e) {
    return Ft.makeRotationY(e), this.applyMatrix4(Ft), this;
  }
  rotateZ(e) {
    return Ft.makeRotationZ(e), this.applyMatrix4(Ft), this;
  }
  translate(e, t, n) {
    return Ft.makeTranslation(e, t, n), this.applyMatrix4(Ft), this;
  }
  scale(e, t, n) {
    return Ft.makeScale(e, t, n), this.applyMatrix4(Ft), this;
  }
  lookAt(e) {
    return pr.lookAt(e), pr.updateMatrix(), this.applyMatrix4(pr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Dn).negate(), this.translate(Dn.x, Dn.y, Dn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Dt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new un());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new D(-1 / 0, -1 / 0, -1 / 0),
        new D(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Ct.setFromBufferAttribute(s), this.morphTargetsRelative ? (lt.addVectors(this.boundingBox.min, Ct.min), this.boundingBox.expandByPoint(lt), lt.addVectors(this.boundingBox.max, Ct.max), this.boundingBox.expandByPoint(lt)) : (this.boundingBox.expandByPoint(Ct.min), this.boundingBox.expandByPoint(Ct.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Yn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Ct.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          ni.setFromBufferAttribute(a), this.morphTargetsRelative ? (lt.addVectors(Ct.min, ni.min), Ct.expandByPoint(lt), lt.addVectors(Ct.max, ni.max), Ct.expandByPoint(lt)) : (Ct.expandByPoint(ni.min), Ct.expandByPoint(ni.max));
        }
      Ct.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        lt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(lt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++)
            lt.fromBufferAttribute(a, c), l && (Dn.fromBufferAttribute(e, c), lt.add(Dn)), r = Math.max(r, n.distanceToSquared(lt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, r = t.position.array, s = t.normal.array, o = t.uv.array, a = r.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Pt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], h = [];
    for (let T = 0; T < a; T++)
      c[T] = new D(), h[T] = new D();
    const f = new D(), u = new D(), m = new D(), g = new Pe(), v = new Pe(), p = new Pe(), d = new D(), A = new D();
    function S(T, C, B) {
      f.fromArray(r, T * 3), u.fromArray(r, C * 3), m.fromArray(r, B * 3), g.fromArray(o, T * 2), v.fromArray(o, C * 2), p.fromArray(o, B * 2), u.sub(f), m.sub(f), v.sub(g), p.sub(g);
      const $ = 1 / (v.x * p.y - p.x * v.y);
      isFinite($) && (d.copy(u).multiplyScalar(p.y).addScaledVector(m, -v.y).multiplyScalar($), A.copy(m).multiplyScalar(v.x).addScaledVector(u, -p.x).multiplyScalar($), c[T].add(d), c[C].add(d), c[B].add(d), h[T].add(A), h[C].add(A), h[B].add(A));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: n.length
    }]);
    for (let T = 0, C = y.length; T < C; ++T) {
      const B = y[T], $ = B.start, P = B.count;
      for (let H = $, q = $ + P; H < q; H += 3)
        S(
          n[H + 0],
          n[H + 1],
          n[H + 2]
        );
    }
    const b = new D(), L = new D(), w = new D(), W = new D();
    function M(T) {
      w.fromArray(s, T * 3), W.copy(w);
      const C = c[T];
      b.copy(C), b.sub(w.multiplyScalar(w.dot(C))).normalize(), L.crossVectors(W, C);
      const $ = L.dot(h[T]) < 0 ? -1 : 1;
      l[T * 4] = b.x, l[T * 4 + 1] = b.y, l[T * 4 + 2] = b.z, l[T * 4 + 3] = $;
    }
    for (let T = 0, C = y.length; T < C; ++T) {
      const B = y[T], $ = B.start, P = B.count;
      for (let H = $, q = $ + P; H < q; H += 3)
        M(n[H + 0]), M(n[H + 1]), M(n[H + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Pt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, m = n.count; u < m; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new D(), s = new D(), o = new D(), a = new D(), l = new D(), c = new D(), h = new D(), f = new D();
      if (e)
        for (let u = 0, m = e.count; u < m; u += 3) {
          const g = e.getX(u + 0), v = e.getX(u + 1), p = e.getX(u + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, v), o.fromBufferAttribute(t, p), h.subVectors(o, s), f.subVectors(r, s), h.cross(f), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, p), a.add(h), l.add(h), c.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let u = 0, m = t.count; u < m; u += 3)
          r.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), o.fromBufferAttribute(t, u + 2), h.subVectors(o, s), f.subVectors(r, s), h.cross(f), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      lt.fromBufferAttribute(e, t), lt.normalize(), e.setXYZ(t, lt.x, lt.y, lt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, h = a.itemSize, f = a.normalized, u = new c.constructor(l.length * h);
      let m = 0, g = 0;
      for (let v = 0, p = l.length; v < p; v++) {
        a.isInterleavedBufferAttribute ? m = l[v] * a.data.stride + a.offset : m = l[v] * h;
        for (let d = 0; d < h; d++)
          u[g++] = c[m++];
      }
      return new Pt(u, h, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Tt(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const l = r[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let h = 0, f = c.length; h < f; h++) {
        const u = c[h], m = e(u, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let f = 0, u = c.length; f < u; f++) {
        const m = c[f];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (r[l] = h, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], f = s[c];
      for (let u = 0, m = f.length; u < m; u++)
        h.push(f[u].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const f = o[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ls = /* @__PURE__ */ new Ge(), gn = /* @__PURE__ */ new Nr(), yi = /* @__PURE__ */ new Yn(), cs = /* @__PURE__ */ new D(), Un = /* @__PURE__ */ new D(), In = /* @__PURE__ */ new D(), Fn = /* @__PURE__ */ new D(), mr = /* @__PURE__ */ new D(), Ti = /* @__PURE__ */ new D(), Ai = /* @__PURE__ */ new Pe(), bi = /* @__PURE__ */ new Pe(), wi = /* @__PURE__ */ new Pe(), hs = /* @__PURE__ */ new D(), us = /* @__PURE__ */ new D(), ds = /* @__PURE__ */ new D(), Ri = /* @__PURE__ */ new D(), Ci = /* @__PURE__ */ new D();
class Bt extends Et {
  constructor(e = new Tt(), t = new $n()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Ti.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = a[l], f = s[l];
        h !== 0 && (mr.fromBufferAttribute(f, e), o ? Ti.addScaledVector(mr, h) : Ti.addScaledVector(mr.sub(t), h));
      }
      t.add(Ti);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), yi.copy(n.boundingSphere), yi.applyMatrix4(s), gn.copy(e.ray).recast(e.near), !(yi.containsPoint(gn.origin) === !1 && (gn.intersectSphere(yi, cs) === null || gn.origin.distanceToSquared(cs) > (e.far - e.near) ** 2)) && (ls.copy(s).invert(), gn.copy(e.ray).applyMatrix4(ls), !(n.boundingBox !== null && gn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, gn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, f = s.attributes.normal, u = s.groups, m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, v = u.length; g < v; g++) {
          const p = u[g], d = o[p.materialIndex], A = Math.max(p.start, m.start), S = Math.min(a.count, Math.min(p.start + p.count, m.start + m.count));
          for (let y = A, b = S; y < b; y += 3) {
            const L = a.getX(y), w = a.getX(y + 1), W = a.getX(y + 2);
            r = Li(this, d, e, n, c, h, f, L, w, W), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(a.count, m.start + m.count);
        for (let p = g, d = v; p < d; p += 3) {
          const A = a.getX(p), S = a.getX(p + 1), y = a.getX(p + 2);
          r = Li(this, o, e, n, c, h, f, A, S, y), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, v = u.length; g < v; g++) {
          const p = u[g], d = o[p.materialIndex], A = Math.max(p.start, m.start), S = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
          for (let y = A, b = S; y < b; y += 3) {
            const L = y, w = y + 1, W = y + 2;
            r = Li(this, d, e, n, c, h, f, L, w, W), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(l.count, m.start + m.count);
        for (let p = g, d = v; p < d; p += 3) {
          const A = p, S = p + 1, y = p + 2;
          r = Li(this, o, e, n, c, h, f, A, S, y), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function no(i, e, t, n, r, s, o, a) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(o, s, r, !0, a) : l = n.intersectTriangle(r, s, o, e.side === 0, a), l === null)
    return null;
  Ci.copy(a), Ci.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Ci);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Ci.clone(),
    object: i
  };
}
function Li(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, Un), i.getVertexPosition(l, In), i.getVertexPosition(c, Fn);
  const h = no(i, e, t, n, Un, In, Fn, Ri);
  if (h) {
    r && (Ai.fromBufferAttribute(r, a), bi.fromBufferAttribute(r, l), wi.fromBufferAttribute(r, c), h.uv = Vt.getInterpolation(Ri, Un, In, Fn, Ai, bi, wi, new Pe())), s && (Ai.fromBufferAttribute(s, a), bi.fromBufferAttribute(s, l), wi.fromBufferAttribute(s, c), h.uv1 = Vt.getInterpolation(Ri, Un, In, Fn, Ai, bi, wi, new Pe()), h.uv2 = h.uv1), o && (hs.fromBufferAttribute(o, a), us.fromBufferAttribute(o, l), ds.fromBufferAttribute(o, c), h.normal = Vt.getInterpolation(Ri, Un, In, Fn, hs, us, ds, new D()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = {
      a,
      b: l,
      c,
      normal: new D(),
      materialIndex: 0
    };
    Vt.getNormal(Un, In, Fn, f.normal), h.face = f;
  }
  return h;
}
class jn extends Tt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
    const l = [], c = [], h = [], f = [];
    let u = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, o, 2), g("x", "z", "y", 1, -1, e, n, -t, r, o, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new Dt(c, 3)), this.setAttribute("normal", new Dt(h, 3)), this.setAttribute("uv", new Dt(f, 2));
    function g(v, p, d, A, S, y, b, L, w, W, M) {
      const T = y / w, C = b / W, B = y / 2, $ = b / 2, P = L / 2, H = w + 1, q = W + 1;
      let k = 0, K = 0;
      const j = new D();
      for (let Y = 0; Y < q; Y++) {
        const U = Y * C - $;
        for (let V = 0; V < H; V++) {
          const se = V * T - B;
          j[v] = se * A, j[p] = U * S, j[d] = P, c.push(j.x, j.y, j.z), j[v] = 0, j[p] = 0, j[d] = L > 0 ? 1 : -1, h.push(j.x, j.y, j.z), f.push(V / w), f.push(1 - Y / W), k += 1;
        }
      }
      for (let Y = 0; Y < W; Y++)
        for (let U = 0; U < w; U++) {
          const V = u + U + H * Y, se = u + U + H * (Y + 1), le = u + (U + 1) + H * (Y + 1), oe = u + (U + 1) + H * Y;
          l.push(V, se, oe), l.push(se, le, oe), K += 6;
        }
      a.addGroup(m, K, M), m += K, u += k;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new jn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function kn(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function Mt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = kn(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function io(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function sa(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : ke.workingColorSpace;
}
const yn = { clone: kn, merge: Mt };
var ro = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, so = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class _t extends ci {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ro, this.fragmentShader = so, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = kn(e.uniforms), this.uniformsGroups = io(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ? t.uniforms[r] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[r] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[r] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class aa extends Et {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ge(), this.projectionMatrix = new Ge(), this.projectionMatrixInverse = new Ge(), this.coordinateSystem = 2e3;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Nt extends aa {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = oi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(ri * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return oi * 2 * Math.atan(
      Math.tan(ri * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, r, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(ri * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      s += o.offsetX * r / l, t -= o.offsetY * n / c, r *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Nn = -90, On = 1;
class ao extends Et {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Nt(Nn, On, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Nt(Nn, On, e, t);
    s.layers = this.layers, this.add(s);
    const o = new Nt(Nn, On, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Nt(Nn, On, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Nt(Nn, On, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Nt(Nn, On, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, o, a, l] = t;
    for (const c of t)
      this.remove(c);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, o, a, l, c, h] = this.children, f = e.getRenderTarget(), u = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = v, e.setRenderTarget(n, 5, r), e.render(t, h), e.setRenderTarget(f, u, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class oa extends Lt {
  constructor(e, t, n, r, s, o, a, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, r, s, o, a, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class oo extends kt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    t.encoding !== void 0 && (ai("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === 3001 ? dt : Ot), this.texture = new oa(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new jn(5, 5, 5), s = new _t({
      name: "CubemapFromEquirect",
      uniforms: kn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const o = new Bt(r, s), a = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new ao(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const gr = /* @__PURE__ */ new D(), lo = /* @__PURE__ */ new D(), co = /* @__PURE__ */ new Ne();
class xn {
  constructor(e = new D(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = gr.subVectors(n, t).cross(lo.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(gr), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || co.getNormalMatrix(e), r = this.coplanarPoint(gr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _n = /* @__PURE__ */ new Yn(), Pi = /* @__PURE__ */ new D();
class la {
  constructor(e = new xn(), t = new xn(), n = new xn(), r = new xn(), s = new xn(), o = new xn()) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3) {
    const n = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], h = r[5], f = r[6], u = r[7], m = r[8], g = r[9], v = r[10], p = r[11], d = r[12], A = r[13], S = r[14], y = r[15];
    if (n[0].setComponents(l - s, u - c, p - m, y - d).normalize(), n[1].setComponents(l + s, u + c, p + m, y + d).normalize(), n[2].setComponents(l + o, u + h, p + g, y + A).normalize(), n[3].setComponents(l - o, u - h, p - g, y - A).normalize(), n[4].setComponents(l - a, u - f, p - v, y - S).normalize(), t === 2e3)
      n[5].setComponents(l + a, u + f, p + v, y + S).normalize();
    else if (t === 2001)
      n[5].setComponents(a, f, v, S).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), _n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), _n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(_n);
  }
  intersectsSprite(e) {
    return _n.center.set(0, 0, 0), _n.radius = 0.7071067811865476, _n.applyMatrix4(e.matrixWorld), this.intersectsSphere(_n);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (Pi.x = r.normal.x > 0 ? e.max.x : e.min.x, Pi.y = r.normal.y > 0 ? e.max.y : e.min.y, Pi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Pi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function ca() {
  let i = null, e = !1, t = null, n = null;
  function r(s, o) {
    t(s, o), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function ho(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function r(c, h) {
    const f = c.array, u = c.usage, m = i.createBuffer();
    i.bindBuffer(h, m), i.bufferData(h, f, u), c.onUploadCallback();
    let g;
    if (f instanceof Float32Array)
      g = i.FLOAT;
    else if (f instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          g = i.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = i.UNSIGNED_SHORT;
    else if (f instanceof Int16Array)
      g = i.SHORT;
    else if (f instanceof Uint32Array)
      g = i.UNSIGNED_INT;
    else if (f instanceof Int32Array)
      g = i.INT;
    else if (f instanceof Int8Array)
      g = i.BYTE;
    else if (f instanceof Uint8Array)
      g = i.UNSIGNED_BYTE;
    else if (f instanceof Uint8ClampedArray)
      g = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + f);
    return {
      buffer: m,
      type: g,
      bytesPerElement: f.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function s(c, h, f) {
    const u = h.array, m = h.updateRange;
    i.bindBuffer(f, c), m.count === -1 ? i.bufferSubData(f, 0, u) : (t ? i.bufferSubData(
      f,
      m.offset * u.BYTES_PER_ELEMENT,
      u,
      m.offset,
      m.count
    ) : i.bufferSubData(
      f,
      m.offset * u.BYTES_PER_ELEMENT,
      u.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), h.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (i.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const u = n.get(c);
      (!u || u.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const f = n.get(c);
    f === void 0 ? n.set(c, r(c, h)) : f.version < c.version && (s(f.buffer, c, h), f.version = c.version);
  }
  return {
    get: o,
    remove: a,
    update: l
  };
}
class Or extends Tt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(r), c = a + 1, h = l + 1, f = e / a, u = t / l, m = [], g = [], v = [], p = [];
    for (let d = 0; d < h; d++) {
      const A = d * u - o;
      for (let S = 0; S < c; S++) {
        const y = S * f - s;
        g.push(y, -A, 0), v.push(0, 0, 1), p.push(S / a), p.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++)
      for (let A = 0; A < a; A++) {
        const S = A + c * d, y = A + c * (d + 1), b = A + 1 + c * (d + 1), L = A + 1 + c * d;
        m.push(S, y, L), m.push(y, b, L);
      }
    this.setIndex(m), this.setAttribute("position", new Dt(g, 3)), this.setAttribute("normal", new Dt(v, 3)), this.setAttribute("uv", new Dt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Or(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var uo = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, fo = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, po = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, mo = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, go = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, _o = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, vo = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, xo = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, So = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Mo = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Eo = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, yo = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, To = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ao = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, bo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, wo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ro = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Co = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Lo = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Po = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Do = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Uo = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Io = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Fo = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, No = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Oo = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Bo = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, zo = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Go = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Ho = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Vo = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, ko = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Wo = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Xo = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, qo = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Yo = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, $o = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, jo = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Zo = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Ko = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Jo = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Qo = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, el = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, tl = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, nl = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, il = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, rl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, sl = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, al = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, ol = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, ll = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`, cl = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, hl = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, ul = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, dl = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, fl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, pl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ml = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, gl = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, _l = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, vl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, xl = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Sl = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ml = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, El = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, yl = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Tl = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Al = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, bl = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, wl = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Rl = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Cl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ll = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Pl = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Dl = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Ul = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Il = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Fl = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Nl = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ol = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Bl = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, zl = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Gl = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Hl = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Vl = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, kl = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Wl = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Xl = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, ql = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Yl = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, $l = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, jl = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Zl = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, Kl = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Jl = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Ql = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ec = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, tc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, nc = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, ic = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, rc = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, sc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ac = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, oc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, lc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const cc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, hc = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, uc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, dc = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, fc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, pc = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, mc = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, gc = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, _c = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, vc = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, xc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Sc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Mc = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Ec = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, yc = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Tc = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ac = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, bc = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wc = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Rc = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Cc = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Lc = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Pc = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Dc = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Uc = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Ic = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Fc = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nc = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Oc = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Bc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, zc = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Gc = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Hc = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Vc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Le = {
  alphahash_fragment: uo,
  alphahash_pars_fragment: fo,
  alphamap_fragment: po,
  alphamap_pars_fragment: mo,
  alphatest_fragment: go,
  alphatest_pars_fragment: _o,
  aomap_fragment: vo,
  aomap_pars_fragment: xo,
  begin_vertex: So,
  beginnormal_vertex: Mo,
  bsdfs: Eo,
  iridescence_fragment: yo,
  bumpmap_pars_fragment: To,
  clipping_planes_fragment: Ao,
  clipping_planes_pars_fragment: bo,
  clipping_planes_pars_vertex: wo,
  clipping_planes_vertex: Ro,
  color_fragment: Co,
  color_pars_fragment: Lo,
  color_pars_vertex: Po,
  color_vertex: Do,
  common: Uo,
  cube_uv_reflection_fragment: Io,
  defaultnormal_vertex: Fo,
  displacementmap_pars_vertex: No,
  displacementmap_vertex: Oo,
  emissivemap_fragment: Bo,
  emissivemap_pars_fragment: zo,
  colorspace_fragment: Go,
  colorspace_pars_fragment: Ho,
  envmap_fragment: Vo,
  envmap_common_pars_fragment: ko,
  envmap_pars_fragment: Wo,
  envmap_pars_vertex: Xo,
  envmap_physical_pars_fragment: il,
  envmap_vertex: qo,
  fog_vertex: Yo,
  fog_pars_vertex: $o,
  fog_fragment: jo,
  fog_pars_fragment: Zo,
  gradientmap_pars_fragment: Ko,
  lightmap_fragment: Jo,
  lightmap_pars_fragment: Qo,
  lights_lambert_fragment: el,
  lights_lambert_pars_fragment: tl,
  lights_pars_begin: nl,
  lights_toon_fragment: rl,
  lights_toon_pars_fragment: sl,
  lights_phong_fragment: al,
  lights_phong_pars_fragment: ol,
  lights_physical_fragment: ll,
  lights_physical_pars_fragment: cl,
  lights_fragment_begin: hl,
  lights_fragment_maps: ul,
  lights_fragment_end: dl,
  logdepthbuf_fragment: fl,
  logdepthbuf_pars_fragment: pl,
  logdepthbuf_pars_vertex: ml,
  logdepthbuf_vertex: gl,
  map_fragment: _l,
  map_pars_fragment: vl,
  map_particle_fragment: xl,
  map_particle_pars_fragment: Sl,
  metalnessmap_fragment: Ml,
  metalnessmap_pars_fragment: El,
  morphcolor_vertex: yl,
  morphnormal_vertex: Tl,
  morphtarget_pars_vertex: Al,
  morphtarget_vertex: bl,
  normal_fragment_begin: wl,
  normal_fragment_maps: Rl,
  normal_pars_fragment: Cl,
  normal_pars_vertex: Ll,
  normal_vertex: Pl,
  normalmap_pars_fragment: Dl,
  clearcoat_normal_fragment_begin: Ul,
  clearcoat_normal_fragment_maps: Il,
  clearcoat_pars_fragment: Fl,
  iridescence_pars_fragment: Nl,
  opaque_fragment: Ol,
  packing: Bl,
  premultiplied_alpha_fragment: zl,
  project_vertex: Gl,
  dithering_fragment: Hl,
  dithering_pars_fragment: Vl,
  roughnessmap_fragment: kl,
  roughnessmap_pars_fragment: Wl,
  shadowmap_pars_fragment: Xl,
  shadowmap_pars_vertex: ql,
  shadowmap_vertex: Yl,
  shadowmask_pars_fragment: $l,
  skinbase_vertex: jl,
  skinning_pars_vertex: Zl,
  skinning_vertex: Kl,
  skinnormal_vertex: Jl,
  specularmap_fragment: Ql,
  specularmap_pars_fragment: ec,
  tonemapping_fragment: tc,
  tonemapping_pars_fragment: nc,
  transmission_fragment: ic,
  transmission_pars_fragment: rc,
  uv_pars_fragment: sc,
  uv_pars_vertex: ac,
  uv_vertex: oc,
  worldpos_vertex: lc,
  background_vert: cc,
  background_frag: hc,
  backgroundCube_vert: uc,
  backgroundCube_frag: dc,
  cube_vert: fc,
  cube_frag: pc,
  depth_vert: mc,
  depth_frag: gc,
  distanceRGBA_vert: _c,
  distanceRGBA_frag: vc,
  equirect_vert: xc,
  equirect_frag: Sc,
  linedashed_vert: Mc,
  linedashed_frag: Ec,
  meshbasic_vert: yc,
  meshbasic_frag: Tc,
  meshlambert_vert: Ac,
  meshlambert_frag: bc,
  meshmatcap_vert: wc,
  meshmatcap_frag: Rc,
  meshnormal_vert: Cc,
  meshnormal_frag: Lc,
  meshphong_vert: Pc,
  meshphong_frag: Dc,
  meshphysical_vert: Uc,
  meshphysical_frag: Ic,
  meshtoon_vert: Fc,
  meshtoon_frag: Nc,
  points_vert: Oc,
  points_frag: Bc,
  shadow_vert: zc,
  shadow_frag: Gc,
  sprite_vert: Hc,
  sprite_frag: Vc
}, ne = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ze(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ne() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ne() },
    normalScale: { value: /* @__PURE__ */ new Pe(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ne() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ze(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new ze(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ne() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ze(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Pe(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaTest: { value: 0 }
  }
}, yt = {
  basic: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.fog
    ]),
    vertexShader: Le.meshbasic_vert,
    fragmentShader: Le.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new ze(0) }
      }
    ]),
    vertexShader: Le.meshlambert_vert,
    fragmentShader: Le.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new ze(0) },
        specular: { value: /* @__PURE__ */ new ze(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Le.meshphong_vert,
    fragmentShader: Le.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.roughnessmap,
      ne.metalnessmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new ze(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Le.meshphysical_vert,
    fragmentShader: Le.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.gradientmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new ze(0) }
      }
    ]),
    vertexShader: Le.meshtoon_vert,
    fragmentShader: Le.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Le.meshmatcap_vert,
    fragmentShader: Le.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Mt([
      ne.points,
      ne.fog
    ]),
    vertexShader: Le.points_vert,
    fragmentShader: Le.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Le.linedashed_vert,
    fragmentShader: Le.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.displacementmap
    ]),
    vertexShader: Le.depth_vert,
    fragmentShader: Le.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Le.meshnormal_vert,
    fragmentShader: Le.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Mt([
      ne.sprite,
      ne.fog
    ]),
    vertexShader: Le.sprite_vert,
    fragmentShader: Le.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ne() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Le.background_vert,
    fragmentShader: Le.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Le.backgroundCube_vert,
    fragmentShader: Le.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Le.cube_vert,
    fragmentShader: Le.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Le.equirect_vert,
    fragmentShader: Le.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new D() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Le.distanceRGBA_vert,
    fragmentShader: Le.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Mt([
      ne.lights,
      ne.fog,
      {
        color: { value: /* @__PURE__ */ new ze(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Le.shadow_vert,
    fragmentShader: Le.shadow_frag
  }
};
yt.physical = {
  uniforms: /* @__PURE__ */ Mt([
    yt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ne() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ne() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Pe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ne() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ne() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ne() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ze(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ne() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ne() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ne() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Pe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ne() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ze(0) },
      specularColor: { value: /* @__PURE__ */ new ze(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ne() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ne() },
      anisotropyVector: { value: /* @__PURE__ */ new Pe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ne() }
    }
  ]),
  vertexShader: Le.meshphysical_vert,
  fragmentShader: Le.meshphysical_frag
};
const Di = { r: 0, b: 0, g: 0 };
function kc(i, e, t, n, r, s, o) {
  const a = new ze(0);
  let l = s === !0 ? 0 : 1, c, h, f = null, u = 0, m = null;
  function g(p, d) {
    let A = !1, S = d.isScene === !0 ? d.background : null;
    S && S.isTexture && (S = (d.backgroundBlurriness > 0 ? t : e).get(S)), S === null ? v(a, l) : S && S.isColor && (v(S, 1), A = !0);
    const y = i.xr.getEnvironmentBlendMode();
    y === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : y === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || A) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), S && (S.isCubeTexture || S.mapping === 306) ? (h === void 0 && (h = new Bt(
      new jn(1, 1, 1),
      new _t({
        name: "BackgroundCubeMaterial",
        uniforms: kn(yt.backgroundCube.uniforms),
        vertexShader: yt.backgroundCube.vertexShader,
        fragmentShader: yt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(b, L, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), h.material.uniforms.envMap.value = S, h.material.uniforms.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = d.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = d.backgroundIntensity, h.material.toneMapped = ke.getTransfer(S.colorSpace) !== $e, (f !== S || u !== S.version || m !== i.toneMapping) && (h.material.needsUpdate = !0, f = S, u = S.version, m = i.toneMapping), h.layers.enableAll(), p.unshift(h, h.geometry, h.material, 0, 0, null)) : S && S.isTexture && (c === void 0 && (c = new Bt(
      new Or(2, 2),
      new _t({
        name: "BackgroundMaterial",
        uniforms: kn(yt.background.uniforms),
        vertexShader: yt.background.vertexShader,
        fragmentShader: yt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = S, c.material.uniforms.backgroundIntensity.value = d.backgroundIntensity, c.material.toneMapped = ke.getTransfer(S.colorSpace) !== $e, S.matrixAutoUpdate === !0 && S.updateMatrix(), c.material.uniforms.uvTransform.value.copy(S.matrix), (f !== S || u !== S.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, f = S, u = S.version, m = i.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function v(p, d) {
    p.getRGB(Di, sa(i)), n.buffers.color.setClear(Di.r, Di.g, Di.b, d, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(p, d = 1) {
      a.set(p), l = d, v(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(p) {
      l = p, v(a, l);
    },
    render: g
  };
}
function Wc(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, l = p(null);
  let c = l, h = !1;
  function f(P, H, q, k, K) {
    let j = !1;
    if (o) {
      const Y = v(k, q, H);
      c !== Y && (c = Y, m(c.object)), j = d(P, k, q, K), j && A(P, k, q, K);
    } else {
      const Y = H.wireframe === !0;
      (c.geometry !== k.id || c.program !== q.id || c.wireframe !== Y) && (c.geometry = k.id, c.program = q.id, c.wireframe = Y, j = !0);
    }
    K !== null && t.update(K, i.ELEMENT_ARRAY_BUFFER), (j || h) && (h = !1, W(P, H, q, k), K !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(K).buffer));
  }
  function u() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function m(P) {
    return n.isWebGL2 ? i.bindVertexArray(P) : s.bindVertexArrayOES(P);
  }
  function g(P) {
    return n.isWebGL2 ? i.deleteVertexArray(P) : s.deleteVertexArrayOES(P);
  }
  function v(P, H, q) {
    const k = q.wireframe === !0;
    let K = a[P.id];
    K === void 0 && (K = {}, a[P.id] = K);
    let j = K[H.id];
    j === void 0 && (j = {}, K[H.id] = j);
    let Y = j[k];
    return Y === void 0 && (Y = p(u()), j[k] = Y), Y;
  }
  function p(P) {
    const H = [], q = [], k = [];
    for (let K = 0; K < r; K++)
      H[K] = 0, q[K] = 0, k[K] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: H,
      enabledAttributes: q,
      attributeDivisors: k,
      object: P,
      attributes: {},
      index: null
    };
  }
  function d(P, H, q, k) {
    const K = c.attributes, j = H.attributes;
    let Y = 0;
    const U = q.getAttributes();
    for (const V in U)
      if (U[V].location >= 0) {
        const le = K[V];
        let oe = j[V];
        if (oe === void 0 && (V === "instanceMatrix" && P.instanceMatrix && (oe = P.instanceMatrix), V === "instanceColor" && P.instanceColor && (oe = P.instanceColor)), le === void 0 || le.attribute !== oe || oe && le.data !== oe.data)
          return !0;
        Y++;
      }
    return c.attributesNum !== Y || c.index !== k;
  }
  function A(P, H, q, k) {
    const K = {}, j = H.attributes;
    let Y = 0;
    const U = q.getAttributes();
    for (const V in U)
      if (U[V].location >= 0) {
        let le = j[V];
        le === void 0 && (V === "instanceMatrix" && P.instanceMatrix && (le = P.instanceMatrix), V === "instanceColor" && P.instanceColor && (le = P.instanceColor));
        const oe = {};
        oe.attribute = le, le && le.data && (oe.data = le.data), K[V] = oe, Y++;
      }
    c.attributes = K, c.attributesNum = Y, c.index = k;
  }
  function S() {
    const P = c.newAttributes;
    for (let H = 0, q = P.length; H < q; H++)
      P[H] = 0;
  }
  function y(P) {
    b(P, 0);
  }
  function b(P, H) {
    const q = c.newAttributes, k = c.enabledAttributes, K = c.attributeDivisors;
    q[P] = 1, k[P] === 0 && (i.enableVertexAttribArray(P), k[P] = 1), K[P] !== H && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](P, H), K[P] = H);
  }
  function L() {
    const P = c.newAttributes, H = c.enabledAttributes;
    for (let q = 0, k = H.length; q < k; q++)
      H[q] !== P[q] && (i.disableVertexAttribArray(q), H[q] = 0);
  }
  function w(P, H, q, k, K, j, Y) {
    Y === !0 ? i.vertexAttribIPointer(P, H, q, K, j) : i.vertexAttribPointer(P, H, q, k, K, j);
  }
  function W(P, H, q, k) {
    if (n.isWebGL2 === !1 && (P.isInstancedMesh || k.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    S();
    const K = k.attributes, j = q.getAttributes(), Y = H.defaultAttributeValues;
    for (const U in j) {
      const V = j[U];
      if (V.location >= 0) {
        let se = K[U];
        if (se === void 0 && (U === "instanceMatrix" && P.instanceMatrix && (se = P.instanceMatrix), U === "instanceColor" && P.instanceColor && (se = P.instanceColor)), se !== void 0) {
          const le = se.normalized, oe = se.itemSize, pe = t.get(se);
          if (pe === void 0)
            continue;
          const Re = pe.buffer, _e = pe.type, Ce = pe.bytesPerElement, Ze = n.isWebGL2 === !0 && (_e === i.INT || _e === i.UNSIGNED_INT || se.gpuType === 1013);
          if (se.isInterleavedBufferAttribute) {
            const Ue = se.data, F = Ue.stride, At = se.offset;
            if (Ue.isInstancedInterleavedBuffer) {
              for (let me = 0; me < V.locationSize; me++)
                b(V.location + me, Ue.meshPerAttribute);
              P.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = Ue.meshPerAttribute * Ue.count);
            } else
              for (let me = 0; me < V.locationSize; me++)
                y(V.location + me);
            i.bindBuffer(i.ARRAY_BUFFER, Re);
            for (let me = 0; me < V.locationSize; me++)
              w(
                V.location + me,
                oe / V.locationSize,
                _e,
                le,
                F * Ce,
                (At + oe / V.locationSize * me) * Ce,
                Ze
              );
          } else {
            if (se.isInstancedBufferAttribute) {
              for (let Ue = 0; Ue < V.locationSize; Ue++)
                b(V.location + Ue, se.meshPerAttribute);
              P.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let Ue = 0; Ue < V.locationSize; Ue++)
                y(V.location + Ue);
            i.bindBuffer(i.ARRAY_BUFFER, Re);
            for (let Ue = 0; Ue < V.locationSize; Ue++)
              w(
                V.location + Ue,
                oe / V.locationSize,
                _e,
                le,
                oe * Ce,
                oe / V.locationSize * Ue * Ce,
                Ze
              );
          }
        } else if (Y !== void 0) {
          const le = Y[U];
          if (le !== void 0)
            switch (le.length) {
              case 2:
                i.vertexAttrib2fv(V.location, le);
                break;
              case 3:
                i.vertexAttrib3fv(V.location, le);
                break;
              case 4:
                i.vertexAttrib4fv(V.location, le);
                break;
              default:
                i.vertexAttrib1fv(V.location, le);
            }
        }
      }
    }
    L();
  }
  function M() {
    B();
    for (const P in a) {
      const H = a[P];
      for (const q in H) {
        const k = H[q];
        for (const K in k)
          g(k[K].object), delete k[K];
        delete H[q];
      }
      delete a[P];
    }
  }
  function T(P) {
    if (a[P.id] === void 0)
      return;
    const H = a[P.id];
    for (const q in H) {
      const k = H[q];
      for (const K in k)
        g(k[K].object), delete k[K];
      delete H[q];
    }
    delete a[P.id];
  }
  function C(P) {
    for (const H in a) {
      const q = a[H];
      if (q[P.id] === void 0)
        continue;
      const k = q[P.id];
      for (const K in k)
        g(k[K].object), delete k[K];
      delete q[P.id];
    }
  }
  function B() {
    $(), h = !0, c !== l && (c = l, m(c.object));
  }
  function $() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: f,
    reset: B,
    resetDefaultState: $,
    dispose: M,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: C,
    initAttributes: S,
    enableAttribute: y,
    disableUnusedAttributes: L
  };
}
function Xc(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, h) {
    i.drawArrays(s, c, h), t.update(h, s, 1);
  }
  function l(c, h, f) {
    if (f === 0)
      return;
    let u, m;
    if (r)
      u = i, m = "drawArraysInstanced";
    else if (u = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", u === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    u[m](s, c, h, f), t.update(h, s, f);
  }
  this.setMode = o, this.render = a, this.renderInstances = l;
}
function qc(i, e, t) {
  let n;
  function r() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), u = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), v = i.getParameter(i.MAX_VERTEX_ATTRIBS), p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), d = i.getParameter(i.MAX_VARYING_VECTORS), A = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), S = u > 0, y = o || e.has("OES_texture_float"), b = S && y, L = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: f,
    maxVertexTextures: u,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: v,
    maxVertexUniforms: p,
    maxVaryings: d,
    maxFragmentUniforms: A,
    vertexTextures: S,
    floatFragmentTextures: y,
    floatVertexTextures: b,
    maxSamples: L
  };
}
function Yc(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new xn(), a = new Ne(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, u) {
    const m = f.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = u, n = f.length, m;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(f, u) {
    t = h(f, u, 0);
  }, this.setState = function(f, u, m) {
    const g = f.clippingPlanes, v = f.clipIntersection, p = f.clipShadows, d = i.get(f);
    if (!r || g === null || g.length === 0 || s && !p)
      s ? h(null) : c();
    else {
      const A = s ? 0 : n, S = A * 4;
      let y = d.clippingState || null;
      l.value = y, y = h(g, u, S, m);
      for (let b = 0; b !== S; ++b)
        y[b] = t[b];
      d.clippingState = y, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(f, u, m, g) {
    const v = f !== null ? f.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const d = m + v * 4, A = u.matrixWorldInverse;
        a.getNormalMatrix(A), (p === null || p.length < d) && (p = new Float32Array(d));
        for (let S = 0, y = m; S !== v; ++S, y += 4)
          o.copy(f[S]).applyMatrix4(A, a), o.normal.toArray(p, y), p[y + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = v, e.numIntersection = 0, p;
  }
}
function $c(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === 303 ? o.mapping = 301 : a === 304 && (o.mapping = 302), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === 303 || a === 304)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new oo(l.height / 2);
            return c.fromEquirectangularTexture(i, o), e.set(o, c), o.addEventListener("dispose", r), t(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Br extends aa {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, o = s + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Gn = 4, fs = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Mn = 20, _r = /* @__PURE__ */ new Br(), ps = /* @__PURE__ */ new ze();
let vr = null, xr = 0, Sr = 0;
const Sn = (1 + Math.sqrt(5)) / 2, Bn = 1 / Sn, ms = [
  /* @__PURE__ */ new D(1, 1, 1),
  /* @__PURE__ */ new D(-1, 1, 1),
  /* @__PURE__ */ new D(1, 1, -1),
  /* @__PURE__ */ new D(-1, 1, -1),
  /* @__PURE__ */ new D(0, Sn, Bn),
  /* @__PURE__ */ new D(0, Sn, -Bn),
  /* @__PURE__ */ new D(Bn, 0, Sn),
  /* @__PURE__ */ new D(-Bn, 0, Sn),
  /* @__PURE__ */ new D(Sn, Bn, 0),
  /* @__PURE__ */ new D(-Sn, Bn, 0)
];
class gs {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, r = 100) {
    vr = this._renderer.getRenderTarget(), xr = this._renderer.getActiveCubeFace(), Sr = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = xs(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = vs(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(vr, xr, Sr), e.scissorTest = !1, Ui(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), vr = this._renderer.getRenderTarget(), xr = this._renderer.getActiveCubeFace(), Sr = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: rn,
      depthBuffer: !1
    }, r = _s(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = _s(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = jc(s)), this._blurMaterial = Zc(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Bt(this._lodPlanes[0], e);
    this._renderer.compile(t, _r);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new Nt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, f = h.autoClear, u = h.toneMapping;
    h.getClearColor(ps), h.toneMapping = 0, h.autoClear = !1;
    const m = new $n({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new Bt(new jn(), m);
    let v = !1;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, v = !0) : (m.color.copy(ps), v = !0);
    for (let d = 0; d < 6; d++) {
      const A = d % 3;
      A === 0 ? (a.up.set(0, l[d], 0), a.lookAt(c[d], 0, 0)) : A === 1 ? (a.up.set(0, 0, l[d]), a.lookAt(0, c[d], 0)) : (a.up.set(0, l[d], 0), a.lookAt(0, 0, c[d]));
      const S = this._cubeSize;
      Ui(r, A * S, d > 2 ? S : 0, S, S), h.setRenderTarget(r), v && h.render(g, a), h.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = u, h.autoClear = f, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = xs()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = vs());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Bt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Ui(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, _r);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = ms[(r - 1) % ms.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, f = new Bt(this._lodPlanes[r], c), u = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Mn - 1), v = s / g, p = isFinite(s) ? 1 + Math.floor(h * v) : Mn;
    p > Mn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mn}`);
    const d = [];
    let A = 0;
    for (let w = 0; w < Mn; ++w) {
      const W = w / v, M = Math.exp(-W * W / 2);
      d.push(M), w === 0 ? A += M : w < p && (A += 2 * M);
    }
    for (let w = 0; w < d.length; w++)
      d[w] = d[w] / A;
    u.envMap.value = e.texture, u.samples.value = p, u.weights.value = d, u.latitudinal.value = o === "latitudinal", a && (u.poleAxis.value = a);
    const { _lodMax: S } = this;
    u.dTheta.value = g, u.mipInt.value = S - n;
    const y = this._sizeLods[r], b = 3 * y * (r > S - Gn ? r - S + Gn : 0), L = 4 * (this._cubeSize - y);
    Ui(t, b, L, 3 * y, 2 * y), l.setRenderTarget(t), l.render(f, _r);
  }
}
function jc(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Gn + 1 + fs.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - Gn ? l = fs[o - i + Gn - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), h = -c, f = 1 + c, u = [h, h, f, h, f, f, h, h, f, f, h, f], m = 6, g = 6, v = 3, p = 2, d = 1, A = new Float32Array(v * g * m), S = new Float32Array(p * g * m), y = new Float32Array(d * g * m);
    for (let L = 0; L < m; L++) {
      const w = L % 3 * 2 / 3 - 1, W = L > 2 ? 0 : -1, M = [
        w,
        W,
        0,
        w + 2 / 3,
        W,
        0,
        w + 2 / 3,
        W + 1,
        0,
        w,
        W,
        0,
        w + 2 / 3,
        W + 1,
        0,
        w,
        W + 1,
        0
      ];
      A.set(M, v * g * L), S.set(u, p * g * L);
      const T = [L, L, L, L, L, L];
      y.set(T, d * g * L);
    }
    const b = new Tt();
    b.setAttribute("position", new Pt(A, v)), b.setAttribute("uv", new Pt(S, p)), b.setAttribute("faceIndex", new Pt(y, d)), e.push(b), r > Gn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function _s(i, e, t) {
  const n = new kt(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Ui(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Zc(i, e, t) {
  const n = new Float32Array(Mn), r = new D(0, 1, 0);
  return new _t({
    name: "SphericalGaussianBlur",
    defines: {
      n: Mn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: zr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function vs() {
  return new _t({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: zr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function xs() {
  return new _t({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: zr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function zr() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Kc(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === 303 || l === 304, h = l === 301 || l === 302;
      if (c || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let f = e.get(a);
          return t === null && (t = new gs(i)), f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f), e.set(a, f), f.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const f = a.image;
            if (c && f && f.height > 0 || h && f && r(f)) {
              t === null && (t = new gs(i));
              const u = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, u), a.addEventListener("dispose", s), u.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      a[h] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function Jc(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const r = t(n);
      return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Qc(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(f) {
    const u = f.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes)
      e.remove(u.attributes[g]);
    for (const g in u.morphAttributes) {
      const v = u.morphAttributes[g];
      for (let p = 0, d = v.length; p < d; p++)
        e.remove(v[p]);
    }
    u.removeEventListener("dispose", o), delete r[u.id];
    const m = s.get(u);
    m && (e.remove(m), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function a(f, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", o), r[u.id] = !0, t.memory.geometries++), u;
  }
  function l(f) {
    const u = f.attributes;
    for (const g in u)
      e.update(u[g], i.ARRAY_BUFFER);
    const m = f.morphAttributes;
    for (const g in m) {
      const v = m[g];
      for (let p = 0, d = v.length; p < d; p++)
        e.update(v[p], i.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const u = [], m = f.index, g = f.attributes.position;
    let v = 0;
    if (m !== null) {
      const A = m.array;
      v = m.version;
      for (let S = 0, y = A.length; S < y; S += 3) {
        const b = A[S + 0], L = A[S + 1], w = A[S + 2];
        u.push(b, L, L, w, w, b);
      }
    } else if (g !== void 0) {
      const A = g.array;
      v = g.version;
      for (let S = 0, y = A.length / 3 - 1; S < y; S += 3) {
        const b = S + 0, L = S + 1, w = S + 2;
        u.push(b, L, L, w, w, b);
      }
    } else
      return;
    const p = new (Js(u) ? ra : ia)(u, 1);
    p.version = v;
    const d = s.get(f);
    d && e.remove(d), s.set(f, p);
  }
  function h(f) {
    const u = s.get(f);
    if (u) {
      const m = f.index;
      m !== null && u.version < m.version && c(f);
    } else
      c(f);
    return s.get(f);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: h
  };
}
function eh(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(u) {
    s = u;
  }
  let a, l;
  function c(u) {
    a = u.type, l = u.bytesPerElement;
  }
  function h(u, m) {
    i.drawElements(s, m, a, u * l), t.update(m, s, 1);
  }
  function f(u, m, g) {
    if (g === 0)
      return;
    let v, p;
    if (r)
      v = i, p = "drawElementsInstanced";
    else if (v = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", v === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    v[p](s, m, a, u * l, g), t.update(m, s, g);
  }
  this.setMode = o, this.setIndex = c, this.render = h, this.renderInstances = f;
}
function th(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (t.calls++, o) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function nh(i, e) {
  return i[0] - e[0];
}
function ih(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function rh(i, e, t) {
  const n = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new et(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, h, f) {
    const u = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, v = g !== void 0 ? g.length : 0;
      let p = s.get(h);
      if (p === void 0 || p.count !== v) {
        let H = function() {
          $.dispose(), s.delete(h), h.removeEventListener("dispose", H);
        };
        var m = H;
        p !== void 0 && p.texture.dispose();
        const S = h.morphAttributes.position !== void 0, y = h.morphAttributes.normal !== void 0, b = h.morphAttributes.color !== void 0, L = h.morphAttributes.position || [], w = h.morphAttributes.normal || [], W = h.morphAttributes.color || [];
        let M = 0;
        S === !0 && (M = 1), y === !0 && (M = 2), b === !0 && (M = 3);
        let T = h.attributes.position.count * M, C = 1;
        T > e.maxTextureSize && (C = Math.ceil(T / e.maxTextureSize), T = e.maxTextureSize);
        const B = new Float32Array(T * C * 4 * v), $ = new ta(B, T, C, v);
        $.type = 1015, $.needsUpdate = !0;
        const P = M * 4;
        for (let q = 0; q < v; q++) {
          const k = L[q], K = w[q], j = W[q], Y = T * C * 4 * q;
          for (let U = 0; U < k.count; U++) {
            const V = U * P;
            S === !0 && (o.fromBufferAttribute(k, U), B[Y + V + 0] = o.x, B[Y + V + 1] = o.y, B[Y + V + 2] = o.z, B[Y + V + 3] = 0), y === !0 && (o.fromBufferAttribute(K, U), B[Y + V + 4] = o.x, B[Y + V + 5] = o.y, B[Y + V + 6] = o.z, B[Y + V + 7] = 0), b === !0 && (o.fromBufferAttribute(j, U), B[Y + V + 8] = o.x, B[Y + V + 9] = o.y, B[Y + V + 10] = o.z, B[Y + V + 11] = j.itemSize === 4 ? o.w : 1);
          }
        }
        p = {
          count: v,
          texture: $,
          size: new Pe(T, C)
        }, s.set(h, p), h.addEventListener("dispose", H);
      }
      let d = 0;
      for (let S = 0; S < u.length; S++)
        d += u[S];
      const A = h.morphTargetsRelative ? 1 : 1 - d;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", A), f.getUniforms().setValue(i, "morphTargetInfluences", u), f.getUniforms().setValue(i, "morphTargetsTexture", p.texture, t), f.getUniforms().setValue(i, "morphTargetsTextureSize", p.size);
    } else {
      const g = u === void 0 ? 0 : u.length;
      let v = n[h.id];
      if (v === void 0 || v.length !== g) {
        v = [];
        for (let y = 0; y < g; y++)
          v[y] = [y, 0];
        n[h.id] = v;
      }
      for (let y = 0; y < g; y++) {
        const b = v[y];
        b[0] = y, b[1] = u[y];
      }
      v.sort(ih);
      for (let y = 0; y < 8; y++)
        y < g && v[y][1] ? (a[y][0] = v[y][0], a[y][1] = v[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0);
      a.sort(nh);
      const p = h.morphAttributes.position, d = h.morphAttributes.normal;
      let A = 0;
      for (let y = 0; y < 8; y++) {
        const b = a[y], L = b[0], w = b[1];
        L !== Number.MAX_SAFE_INTEGER && w ? (p && h.getAttribute("morphTarget" + y) !== p[L] && h.setAttribute("morphTarget" + y, p[L]), d && h.getAttribute("morphNormal" + y) !== d[L] && h.setAttribute("morphNormal" + y, d[L]), r[y] = w, A += w) : (p && h.hasAttribute("morphTarget" + y) === !0 && h.deleteAttribute("morphTarget" + y), d && h.hasAttribute("morphNormal" + y) === !0 && h.deleteAttribute("morphNormal" + y), r[y] = 0);
      }
      const S = h.morphTargetsRelative ? 1 : 1 - A;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", S), f.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return {
    update: l
  };
}
function sh(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, f = e.get(l, h);
    if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const u = l.skeleton;
      r.get(u) !== c && (u.update(), r.set(u, c));
    }
    return f;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const ha = /* @__PURE__ */ new Lt(), ua = /* @__PURE__ */ new ta(), da = /* @__PURE__ */ new Xa(), fa = /* @__PURE__ */ new oa(), Ss = [], Ms = [], Es = new Float32Array(16), ys = new Float32Array(9), Ts = new Float32Array(4);
function Zn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0)
    return i;
  const r = e * t;
  let s = Ss[r];
  if (s === void 0 && (s = new Float32Array(r), Ss[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(s, a);
  }
  return s;
}
function rt(i, e) {
  if (i.length !== e.length)
    return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t])
      return !1;
  return !0;
}
function st(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function ji(i, e) {
  let t = Ms[e];
  t === void 0 && (t = new Int32Array(e), Ms[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function ah(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function oh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e))
      return;
    i.uniform2fv(this.addr, e), st(t, e);
  }
}
function lh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (rt(t, e))
      return;
    i.uniform3fv(this.addr, e), st(t, e);
  }
}
function ch(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e))
      return;
    i.uniform4fv(this.addr, e), st(t, e);
  }
}
function hh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e))
      return;
    i.uniformMatrix2fv(this.addr, !1, e), st(t, e);
  } else {
    if (rt(t, n))
      return;
    Ts.set(n), i.uniformMatrix2fv(this.addr, !1, Ts), st(t, n);
  }
}
function uh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e))
      return;
    i.uniformMatrix3fv(this.addr, !1, e), st(t, e);
  } else {
    if (rt(t, n))
      return;
    ys.set(n), i.uniformMatrix3fv(this.addr, !1, ys), st(t, n);
  }
}
function dh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e))
      return;
    i.uniformMatrix4fv(this.addr, !1, e), st(t, e);
  } else {
    if (rt(t, n))
      return;
    Es.set(n), i.uniformMatrix4fv(this.addr, !1, Es), st(t, n);
  }
}
function fh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function ph(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e))
      return;
    i.uniform2iv(this.addr, e), st(t, e);
  }
}
function mh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (rt(t, e))
      return;
    i.uniform3iv(this.addr, e), st(t, e);
  }
}
function gh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e))
      return;
    i.uniform4iv(this.addr, e), st(t, e);
  }
}
function _h(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function vh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e))
      return;
    i.uniform2uiv(this.addr, e), st(t, e);
  }
}
function xh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (rt(t, e))
      return;
    i.uniform3uiv(this.addr, e), st(t, e);
  }
}
function Sh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e))
      return;
    i.uniform4uiv(this.addr, e), st(t, e);
  }
}
function Mh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2D(e || ha, r);
}
function Eh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || da, r);
}
function yh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || fa, r);
}
function Th(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || ua, r);
}
function Ah(i) {
  switch (i) {
    case 5126:
      return ah;
    case 35664:
      return oh;
    case 35665:
      return lh;
    case 35666:
      return ch;
    case 35674:
      return hh;
    case 35675:
      return uh;
    case 35676:
      return dh;
    case 5124:
    case 35670:
      return fh;
    case 35667:
    case 35671:
      return ph;
    case 35668:
    case 35672:
      return mh;
    case 35669:
    case 35673:
      return gh;
    case 5125:
      return _h;
    case 36294:
      return vh;
    case 36295:
      return xh;
    case 36296:
      return Sh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Mh;
    case 35679:
    case 36299:
    case 36307:
      return Eh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return yh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Th;
  }
}
function bh(i, e) {
  i.uniform1fv(this.addr, e);
}
function wh(i, e) {
  const t = Zn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Rh(i, e) {
  const t = Zn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Ch(i, e) {
  const t = Zn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Lh(i, e) {
  const t = Zn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Ph(i, e) {
  const t = Zn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Dh(i, e) {
  const t = Zn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Uh(i, e) {
  i.uniform1iv(this.addr, e);
}
function Ih(i, e) {
  i.uniform2iv(this.addr, e);
}
function Fh(i, e) {
  i.uniform3iv(this.addr, e);
}
function Nh(i, e) {
  i.uniform4iv(this.addr, e);
}
function Oh(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Bh(i, e) {
  i.uniform2uiv(this.addr, e);
}
function zh(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Gh(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Hh(i, e, t) {
  const n = this.cache, r = e.length, s = ji(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || ha, s[o]);
}
function Vh(i, e, t) {
  const n = this.cache, r = e.length, s = ji(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || da, s[o]);
}
function kh(i, e, t) {
  const n = this.cache, r = e.length, s = ji(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || fa, s[o]);
}
function Wh(i, e, t) {
  const n = this.cache, r = e.length, s = ji(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || ua, s[o]);
}
function Xh(i) {
  switch (i) {
    case 5126:
      return bh;
    case 35664:
      return wh;
    case 35665:
      return Rh;
    case 35666:
      return Ch;
    case 35674:
      return Lh;
    case 35675:
      return Ph;
    case 35676:
      return Dh;
    case 5124:
    case 35670:
      return Uh;
    case 35667:
    case 35671:
      return Ih;
    case 35668:
    case 35672:
      return Fh;
    case 35669:
    case 35673:
      return Nh;
    case 5125:
      return Oh;
    case 36294:
      return Bh;
    case 36295:
      return zh;
    case 36296:
      return Gh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Hh;
    case 35679:
    case 36299:
    case 36307:
      return Vh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return kh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Wh;
  }
}
class qh {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Ah(t.type);
  }
}
class Yh {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Xh(t.type);
  }
}
class $h {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Mr = /(\w+)(\])?(\[|\.)?/g;
function As(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function jh(i, e, t) {
  const n = i.name, r = n.length;
  for (Mr.lastIndex = 0; ; ) {
    const s = Mr.exec(n), o = Mr.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) {
      As(t, c === void 0 ? new qh(a, i, e) : new Yh(a, i, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && (f = new $h(a), As(t, f)), t = f;
    }
  }
}
class Gi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      jh(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function bs(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Zh = 37297;
let Kh = 0;
function Jh(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Qh(i) {
  const e = ke.getPrimaries(ke.workingColorSpace), t = ke.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === ki && t === Vi ? n = "LinearDisplayP3ToLinearSRGB" : e === Vi && t === ki && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case rn:
    case qi:
      return [n, "LinearTransferOETF"];
    case dt:
    case Ir:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function ws(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + Jh(i.getShaderSource(e), o);
  } else
    return r;
}
function eu(i, e) {
  const t = Qh(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function tu(i, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "OptimizedCineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function nu(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(ii).join(`
`);
}
function iu(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function ru(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), o = s.name;
    let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i.FLOAT_MAT4 && (a = 4), t[o] = {
      type: s.type,
      location: i.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function ii(i) {
  return i !== "";
}
function Rs(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Cs(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const su = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Rr(i) {
  return i.replace(su, ou);
}
const au = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function ou(i, e) {
  let t = Le[e];
  if (t === void 0) {
    const n = au.get(e);
    if (n !== void 0)
      t = Le[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Rr(t);
}
const lu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ls(i) {
  return i.replace(lu, cu);
}
function cu(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ps(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function hu(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function uu(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function du(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function fu(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function pu(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function mu(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = hu(t), c = uu(t), h = du(t), f = fu(t), u = pu(t), m = t.isWebGL2 ? "" : nu(t), g = iu(s), v = r.createProgram();
  let p, d, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ii).join(`
`), p.length > 0 && (p += `
`), d = [
    m,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ii).join(`
`), d.length > 0 && (d += `
`)) : (p = [
    Ps(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(ii).join(`
`), d = [
    m,
    Ps(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + f : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Le.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? tu("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Le.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    eu("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ii).join(`
`)), o = Rr(o), o = Rs(o, t), o = Cs(o, t), a = Rr(a), a = Rs(a, t), a = Cs(a, t), o = Ls(o), a = Ls(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, p = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, d = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === jr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === jr ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + d);
  const S = A + p + o, y = A + d + a, b = bs(r, r.VERTEX_SHADER, S), L = bs(r, r.FRAGMENT_SHADER, y);
  r.attachShader(v, b), r.attachShader(v, L), t.index0AttributeName !== void 0 ? r.bindAttribLocation(v, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(v, 0, "position"), r.linkProgram(v);
  function w(C) {
    if (i.debug.checkShaderErrors) {
      const B = r.getProgramInfoLog(v).trim(), $ = r.getShaderInfoLog(b).trim(), P = r.getShaderInfoLog(L).trim();
      let H = !0, q = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (H = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, v, b, L);
        else {
          const k = ws(r, b, "vertex"), K = ws(r, L, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(v, r.VALIDATE_STATUS) + `

Program Info Log: ` + B + `
` + k + `
` + K
          );
        }
      else
        B !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", B) : ($ === "" || P === "") && (q = !1);
      q && (C.diagnostics = {
        runnable: H,
        programLog: B,
        vertexShader: {
          log: $,
          prefix: p
        },
        fragmentShader: {
          log: P,
          prefix: d
        }
      });
    }
    r.deleteShader(b), r.deleteShader(L), W = new Gi(r, v), M = ru(r, v);
  }
  let W;
  this.getUniforms = function() {
    return W === void 0 && w(this), W;
  };
  let M;
  this.getAttributes = function() {
    return M === void 0 && w(this), M;
  };
  let T = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return T === !1 && (T = r.getProgramParameter(v, Zh)), T;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(v), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Kh++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = b, this.fragmentShader = L, this;
}
let gu = 0;
class _u {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new vu(e), t.set(e, n)), n;
  }
}
class vu {
  constructor(e) {
    this.id = gu++, this.code = e, this.usedTimes = 0;
  }
}
function xu(i, e, t, n, r, s, o) {
  const a = new $i(), l = new _u(), c = [], h = r.isWebGL2, f = r.logarithmicDepthBuffer, u = r.vertexTextures;
  let m = r.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function v(M) {
    return M === 0 ? "uv" : `uv${M}`;
  }
  function p(M, T, C, B, $) {
    const P = B.fog, H = $.geometry, q = M.isMeshStandardMaterial ? B.environment : null, k = (M.isMeshStandardMaterial ? t : e).get(M.envMap || q), K = k && k.mapping === 306 ? k.image.height : null, j = g[M.type];
    M.precision !== null && (m = r.getMaxPrecision(M.precision), m !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", m, "instead."));
    const Y = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color, U = Y !== void 0 ? Y.length : 0;
    let V = 0;
    H.morphAttributes.position !== void 0 && (V = 1), H.morphAttributes.normal !== void 0 && (V = 2), H.morphAttributes.color !== void 0 && (V = 3);
    let se, le, oe, pe;
    if (j) {
      const tt = yt[j];
      se = tt.vertexShader, le = tt.fragmentShader;
    } else
      se = M.vertexShader, le = M.fragmentShader, l.update(M), oe = l.getVertexShaderID(M), pe = l.getFragmentShaderID(M);
    const Re = i.getRenderTarget(), _e = $.isInstancedMesh === !0, Ce = !!M.map, Ze = !!M.matcap, Ue = !!k, F = !!M.aoMap, At = !!M.lightMap, me = !!M.bumpMap, Te = !!M.normalMap, ye = !!M.displacementMap, Ke = !!M.emissiveMap, Ie = !!M.metalnessMap, Fe = !!M.roughnessMap, qe = M.anisotropy > 0, at = M.clearcoat > 0, ft = M.iridescence > 0, E = M.sheen > 0, _ = M.transmission > 0, N = qe && !!M.anisotropyMap, Q = at && !!M.clearcoatMap, Z = at && !!M.clearcoatNormalMap, ee = at && !!M.clearcoatRoughnessMap, de = ft && !!M.iridescenceMap, re = ft && !!M.iridescenceThicknessMap, ce = E && !!M.sheenColorMap, Se = E && !!M.sheenRoughnessMap, He = !!M.specularMap, J = !!M.specularColorMap, We = !!M.specularIntensityMap, Ae = _ && !!M.transmissionMap, Me = _ && !!M.thicknessMap, ge = !!M.gradientMap, ue = !!M.alphaMap, Be = M.alphaTest > 0, R = !!M.alphaHash, ae = !!M.extensions, te = !!H.attributes.uv1, X = !!H.attributes.uv2, ie = !!H.attributes.uv3;
    let ve = 0;
    return M.toneMapped && (Re === null || Re.isXRRenderTarget === !0) && (ve = i.toneMapping), {
      isWebGL2: h,
      shaderID: j,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: se,
      fragmentShader: le,
      defines: M.defines,
      customVertexShaderID: oe,
      customFragmentShaderID: pe,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: m,
      instancing: _e,
      instancingColor: _e && $.instanceColor !== null,
      supportsVertexTextures: u,
      outputColorSpace: Re === null ? i.outputColorSpace : Re.isXRRenderTarget === !0 ? Re.texture.colorSpace : rn,
      map: Ce,
      matcap: Ze,
      envMap: Ue,
      envMapMode: Ue && k.mapping,
      envMapCubeUVHeight: K,
      aoMap: F,
      lightMap: At,
      bumpMap: me,
      normalMap: Te,
      displacementMap: u && ye,
      emissiveMap: Ke,
      normalMapObjectSpace: Te && M.normalMapType === 1,
      normalMapTangentSpace: Te && M.normalMapType === 0,
      metalnessMap: Ie,
      roughnessMap: Fe,
      anisotropy: qe,
      anisotropyMap: N,
      clearcoat: at,
      clearcoatMap: Q,
      clearcoatNormalMap: Z,
      clearcoatRoughnessMap: ee,
      iridescence: ft,
      iridescenceMap: de,
      iridescenceThicknessMap: re,
      sheen: E,
      sheenColorMap: ce,
      sheenRoughnessMap: Se,
      specularMap: He,
      specularColorMap: J,
      specularIntensityMap: We,
      transmission: _,
      transmissionMap: Ae,
      thicknessMap: Me,
      gradientMap: ge,
      opaque: M.transparent === !1 && M.blending === 1,
      alphaMap: ue,
      alphaTest: Be,
      alphaHash: R,
      combine: M.combine,
      //
      mapUv: Ce && v(M.map.channel),
      aoMapUv: F && v(M.aoMap.channel),
      lightMapUv: At && v(M.lightMap.channel),
      bumpMapUv: me && v(M.bumpMap.channel),
      normalMapUv: Te && v(M.normalMap.channel),
      displacementMapUv: ye && v(M.displacementMap.channel),
      emissiveMapUv: Ke && v(M.emissiveMap.channel),
      metalnessMapUv: Ie && v(M.metalnessMap.channel),
      roughnessMapUv: Fe && v(M.roughnessMap.channel),
      anisotropyMapUv: N && v(M.anisotropyMap.channel),
      clearcoatMapUv: Q && v(M.clearcoatMap.channel),
      clearcoatNormalMapUv: Z && v(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ee && v(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: de && v(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: re && v(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: ce && v(M.sheenColorMap.channel),
      sheenRoughnessMapUv: Se && v(M.sheenRoughnessMap.channel),
      specularMapUv: He && v(M.specularMap.channel),
      specularColorMapUv: J && v(M.specularColorMap.channel),
      specularIntensityMapUv: We && v(M.specularIntensityMap.channel),
      transmissionMapUv: Ae && v(M.transmissionMap.channel),
      thicknessMapUv: Me && v(M.thicknessMap.channel),
      alphaMapUv: ue && v(M.alphaMap.channel),
      //
      vertexTangents: !!H.attributes.tangent && (Te || qe),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4,
      vertexUv1s: te,
      vertexUv2s: X,
      vertexUv3s: ie,
      pointsUvs: $.isPoints === !0 && !!H.attributes.uv && (Ce || ue),
      fog: !!P,
      useFog: M.fog === !0,
      fogExp2: P && P.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      skinning: $.isSkinnedMesh === !0,
      morphTargets: H.morphAttributes.position !== void 0,
      morphNormals: H.morphAttributes.normal !== void 0,
      morphColors: H.morphAttributes.color !== void 0,
      morphTargetsCount: U,
      morphTextureStride: V,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: i.shadowMap.enabled && C.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: ve,
      useLegacyLights: i._useLegacyLights,
      decodeVideoTexture: Ce && M.map.isVideoTexture === !0 && ke.getTransfer(M.map.colorSpace) === $e,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === 2,
      flipSided: M.side === 1,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: ae && M.extensions.derivatives === !0,
      extensionFragDepth: ae && M.extensions.fragDepth === !0,
      extensionDrawBuffers: ae && M.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ae && M.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
  }
  function d(M) {
    const T = [];
    if (M.shaderID ? T.push(M.shaderID) : (T.push(M.customVertexShaderID), T.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const C in M.defines)
        T.push(C), T.push(M.defines[C]);
    return M.isRawShaderMaterial === !1 && (A(T, M), S(T, M), T.push(i.outputColorSpace)), T.push(M.customProgramCacheKey), T.join();
  }
  function A(M, T) {
    M.push(T.precision), M.push(T.outputColorSpace), M.push(T.envMapMode), M.push(T.envMapCubeUVHeight), M.push(T.mapUv), M.push(T.alphaMapUv), M.push(T.lightMapUv), M.push(T.aoMapUv), M.push(T.bumpMapUv), M.push(T.normalMapUv), M.push(T.displacementMapUv), M.push(T.emissiveMapUv), M.push(T.metalnessMapUv), M.push(T.roughnessMapUv), M.push(T.anisotropyMapUv), M.push(T.clearcoatMapUv), M.push(T.clearcoatNormalMapUv), M.push(T.clearcoatRoughnessMapUv), M.push(T.iridescenceMapUv), M.push(T.iridescenceThicknessMapUv), M.push(T.sheenColorMapUv), M.push(T.sheenRoughnessMapUv), M.push(T.specularMapUv), M.push(T.specularColorMapUv), M.push(T.specularIntensityMapUv), M.push(T.transmissionMapUv), M.push(T.thicknessMapUv), M.push(T.combine), M.push(T.fogExp2), M.push(T.sizeAttenuation), M.push(T.morphTargetsCount), M.push(T.morphAttributeCount), M.push(T.numDirLights), M.push(T.numPointLights), M.push(T.numSpotLights), M.push(T.numSpotLightMaps), M.push(T.numHemiLights), M.push(T.numRectAreaLights), M.push(T.numDirLightShadows), M.push(T.numPointLightShadows), M.push(T.numSpotLightShadows), M.push(T.numSpotLightShadowsWithMaps), M.push(T.numLightProbes), M.push(T.shadowMapType), M.push(T.toneMapping), M.push(T.numClippingPlanes), M.push(T.numClipIntersection), M.push(T.depthPacking);
  }
  function S(M, T) {
    a.disableAll(), T.isWebGL2 && a.enable(0), T.supportsVertexTextures && a.enable(1), T.instancing && a.enable(2), T.instancingColor && a.enable(3), T.matcap && a.enable(4), T.envMap && a.enable(5), T.normalMapObjectSpace && a.enable(6), T.normalMapTangentSpace && a.enable(7), T.clearcoat && a.enable(8), T.iridescence && a.enable(9), T.alphaTest && a.enable(10), T.vertexColors && a.enable(11), T.vertexAlphas && a.enable(12), T.vertexUv1s && a.enable(13), T.vertexUv2s && a.enable(14), T.vertexUv3s && a.enable(15), T.vertexTangents && a.enable(16), T.anisotropy && a.enable(17), T.alphaHash && a.enable(18), M.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.skinning && a.enable(4), T.morphTargets && a.enable(5), T.morphNormals && a.enable(6), T.morphColors && a.enable(7), T.premultipliedAlpha && a.enable(8), T.shadowMapEnabled && a.enable(9), T.useLegacyLights && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), M.push(a.mask);
  }
  function y(M) {
    const T = g[M.type];
    let C;
    if (T) {
      const B = yt[T];
      C = yn.clone(B.uniforms);
    } else
      C = M.uniforms;
    return C;
  }
  function b(M, T) {
    let C;
    for (let B = 0, $ = c.length; B < $; B++) {
      const P = c[B];
      if (P.cacheKey === T) {
        C = P, ++C.usedTimes;
        break;
      }
    }
    return C === void 0 && (C = new mu(i, T, M, s), c.push(C)), C;
  }
  function L(M) {
    if (--M.usedTimes === 0) {
      const T = c.indexOf(M);
      c[T] = c[c.length - 1], c.pop(), M.destroy();
    }
  }
  function w(M) {
    l.remove(M);
  }
  function W() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: d,
    getUniforms: y,
    acquireProgram: b,
    releaseProgram: L,
    releaseShaderCache: w,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: W
  };
}
function Su() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && (o = {}, i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: r
  };
}
function Mu(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Ds(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Us() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(f, u, m, g, v, p) {
    let d = i[e];
    return d === void 0 ? (d = {
      id: f.id,
      object: f,
      geometry: u,
      material: m,
      groupOrder: g,
      renderOrder: f.renderOrder,
      z: v,
      group: p
    }, i[e] = d) : (d.id = f.id, d.object = f, d.geometry = u, d.material = m, d.groupOrder = g, d.renderOrder = f.renderOrder, d.z = v, d.group = p), e++, d;
  }
  function a(f, u, m, g, v, p) {
    const d = o(f, u, m, g, v, p);
    m.transmission > 0 ? n.push(d) : m.transparent === !0 ? r.push(d) : t.push(d);
  }
  function l(f, u, m, g, v, p) {
    const d = o(f, u, m, g, v, p);
    m.transmission > 0 ? n.unshift(d) : m.transparent === !0 ? r.unshift(d) : t.unshift(d);
  }
  function c(f, u) {
    t.length > 1 && t.sort(f || Mu), n.length > 1 && n.sort(u || Ds), r.length > 1 && r.sort(u || Ds);
  }
  function h() {
    for (let f = e, u = i.length; f < u; f++) {
      const m = i[f];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: h,
    sort: c
  };
}
function Eu() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new Us(), i.set(n, [o])) : r >= s.length ? (o = new Us(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function yu() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new D(),
            color: new ze()
          };
          break;
        case "SpotLight":
          t = {
            position: new D(),
            direction: new D(),
            color: new ze(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new D(),
            color: new ze(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new D(),
            skyColor: new ze(),
            groundColor: new ze()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ze(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Tu() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Pe()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Pe()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Pe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Au = 0;
function bu(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function wu(i, e) {
  const t = new yu(), n = Tu(), r = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let h = 0; h < 9; h++)
    r.probe.push(new D());
  const s = new D(), o = new Ge(), a = new Ge();
  function l(h, f) {
    let u = 0, m = 0, g = 0;
    for (let B = 0; B < 9; B++)
      r.probe[B].set(0, 0, 0);
    let v = 0, p = 0, d = 0, A = 0, S = 0, y = 0, b = 0, L = 0, w = 0, W = 0, M = 0;
    h.sort(bu);
    const T = f === !0 ? Math.PI : 1;
    for (let B = 0, $ = h.length; B < $; B++) {
      const P = h[B], H = P.color, q = P.intensity, k = P.distance, K = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        u += H.r * q * T, m += H.g * q * T, g += H.b * q * T;
      else if (P.isLightProbe) {
        for (let j = 0; j < 9; j++)
          r.probe[j].addScaledVector(P.sh.coefficients[j], q);
        M++;
      } else if (P.isDirectionalLight) {
        const j = t.get(P);
        if (j.color.copy(P.color).multiplyScalar(P.intensity * T), P.castShadow) {
          const Y = P.shadow, U = n.get(P);
          U.shadowBias = Y.bias, U.shadowNormalBias = Y.normalBias, U.shadowRadius = Y.radius, U.shadowMapSize = Y.mapSize, r.directionalShadow[v] = U, r.directionalShadowMap[v] = K, r.directionalShadowMatrix[v] = P.shadow.matrix, y++;
        }
        r.directional[v] = j, v++;
      } else if (P.isSpotLight) {
        const j = t.get(P);
        j.position.setFromMatrixPosition(P.matrixWorld), j.color.copy(H).multiplyScalar(q * T), j.distance = k, j.coneCos = Math.cos(P.angle), j.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), j.decay = P.decay, r.spot[d] = j;
        const Y = P.shadow;
        if (P.map && (r.spotLightMap[w] = P.map, w++, Y.updateMatrices(P), P.castShadow && W++), r.spotLightMatrix[d] = Y.matrix, P.castShadow) {
          const U = n.get(P);
          U.shadowBias = Y.bias, U.shadowNormalBias = Y.normalBias, U.shadowRadius = Y.radius, U.shadowMapSize = Y.mapSize, r.spotShadow[d] = U, r.spotShadowMap[d] = K, L++;
        }
        d++;
      } else if (P.isRectAreaLight) {
        const j = t.get(P);
        j.color.copy(H).multiplyScalar(q), j.halfWidth.set(P.width * 0.5, 0, 0), j.halfHeight.set(0, P.height * 0.5, 0), r.rectArea[A] = j, A++;
      } else if (P.isPointLight) {
        const j = t.get(P);
        if (j.color.copy(P.color).multiplyScalar(P.intensity * T), j.distance = P.distance, j.decay = P.decay, P.castShadow) {
          const Y = P.shadow, U = n.get(P);
          U.shadowBias = Y.bias, U.shadowNormalBias = Y.normalBias, U.shadowRadius = Y.radius, U.shadowMapSize = Y.mapSize, U.shadowCameraNear = Y.camera.near, U.shadowCameraFar = Y.camera.far, r.pointShadow[p] = U, r.pointShadowMap[p] = K, r.pointShadowMatrix[p] = P.shadow.matrix, b++;
        }
        r.point[p] = j, p++;
      } else if (P.isHemisphereLight) {
        const j = t.get(P);
        j.skyColor.copy(P.color).multiplyScalar(q * T), j.groundColor.copy(P.groundColor).multiplyScalar(q * T), r.hemi[S] = j, S++;
      }
    }
    A > 0 && (e.isWebGL2 || i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = ne.LTC_FLOAT_1, r.rectAreaLTC2 = ne.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = ne.LTC_HALF_1, r.rectAreaLTC2 = ne.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = u, r.ambient[1] = m, r.ambient[2] = g;
    const C = r.hash;
    (C.directionalLength !== v || C.pointLength !== p || C.spotLength !== d || C.rectAreaLength !== A || C.hemiLength !== S || C.numDirectionalShadows !== y || C.numPointShadows !== b || C.numSpotShadows !== L || C.numSpotMaps !== w || C.numLightProbes !== M) && (r.directional.length = v, r.spot.length = d, r.rectArea.length = A, r.point.length = p, r.hemi.length = S, r.directionalShadow.length = y, r.directionalShadowMap.length = y, r.pointShadow.length = b, r.pointShadowMap.length = b, r.spotShadow.length = L, r.spotShadowMap.length = L, r.directionalShadowMatrix.length = y, r.pointShadowMatrix.length = b, r.spotLightMatrix.length = L + w - W, r.spotLightMap.length = w, r.numSpotLightShadowsWithMaps = W, r.numLightProbes = M, C.directionalLength = v, C.pointLength = p, C.spotLength = d, C.rectAreaLength = A, C.hemiLength = S, C.numDirectionalShadows = y, C.numPointShadows = b, C.numSpotShadows = L, C.numSpotMaps = w, C.numLightProbes = M, r.version = Au++);
  }
  function c(h, f) {
    let u = 0, m = 0, g = 0, v = 0, p = 0;
    const d = f.matrixWorldInverse;
    for (let A = 0, S = h.length; A < S; A++) {
      const y = h[A];
      if (y.isDirectionalLight) {
        const b = r.directional[u];
        b.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(d), u++;
      } else if (y.isSpotLight) {
        const b = r.spot[g];
        b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(d), b.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(d), g++;
      } else if (y.isRectAreaLight) {
        const b = r.rectArea[v];
        b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(d), a.identity(), o.copy(y.matrixWorld), o.premultiply(d), a.extractRotation(o), b.halfWidth.set(y.width * 0.5, 0, 0), b.halfHeight.set(0, y.height * 0.5, 0), b.halfWidth.applyMatrix4(a), b.halfHeight.applyMatrix4(a), v++;
      } else if (y.isPointLight) {
        const b = r.point[m];
        b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(d), m++;
      } else if (y.isHemisphereLight) {
        const b = r.hemi[p];
        b.direction.setFromMatrixPosition(y.matrixWorld), b.direction.transformDirection(d), p++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: r
  };
}
function Is(i, e) {
  const t = new wu(i, e), n = [], r = [];
  function s() {
    n.length = 0, r.length = 0;
  }
  function o(f) {
    n.push(f);
  }
  function a(f) {
    r.push(f);
  }
  function l(f) {
    t.setup(n, f);
  }
  function c(f) {
    t.setupView(n, f);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: r,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a
  };
}
function Ru(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return a === void 0 ? (l = new Is(i, e), t.set(s, [l])) : o >= a.length ? (l = new Is(i, e), a.push(l)) : l = a[o], l;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class Cu extends ci {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Lu extends ci {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Pu = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Du = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Uu(i, e, t) {
  let n = new la();
  const r = new Pe(), s = new Pe(), o = new et(), a = new Cu({ depthPacking: 3201 }), l = new Lu(), c = {}, h = t.maxTextureSize, f = { 0: 1, 1: 0, 2: 2 }, u = new _t({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Pe() },
      radius: { value: 4 }
    },
    vertexShader: Pu,
    fragmentShader: Du
  }), m = u.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Tt();
  g.setAttribute(
    "position",
    new Pt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new Bt(g, u), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let d = this.type;
  this.render = function(b, L, w) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || b.length === 0)
      return;
    const W = i.getRenderTarget(), M = i.getActiveCubeFace(), T = i.getActiveMipmapLevel(), C = i.state;
    C.setBlending(0), C.buffers.color.setClear(1, 1, 1, 1), C.buffers.depth.setTest(!0), C.setScissorTest(!1);
    const B = d !== 3 && this.type === 3, $ = d === 3 && this.type !== 3;
    for (let P = 0, H = b.length; P < H; P++) {
      const q = b[P], k = q.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", q, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1)
        continue;
      r.copy(k.mapSize);
      const K = k.getFrameExtents();
      if (r.multiply(K), s.copy(k.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / K.x), r.x = s.x * K.x, k.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / K.y), r.y = s.y * K.y, k.mapSize.y = s.y)), k.map === null || B === !0 || $ === !0) {
        const Y = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        k.map !== null && k.map.dispose(), k.map = new kt(r.x, r.y, Y), k.map.texture.name = q.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const j = k.getViewportCount();
      for (let Y = 0; Y < j; Y++) {
        const U = k.getViewport(Y);
        o.set(
          s.x * U.x,
          s.y * U.y,
          s.x * U.z,
          s.y * U.w
        ), C.viewport(o), k.updateMatrices(q, Y), n = k.getFrustum(), y(L, w, k.camera, q, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === 3 && A(k, w), k.needsUpdate = !1;
    }
    d = this.type, p.needsUpdate = !1, i.setRenderTarget(W, M, T);
  };
  function A(b, L) {
    const w = e.update(v);
    u.defines.VSM_SAMPLES !== b.blurSamples && (u.defines.VSM_SAMPLES = b.blurSamples, m.defines.VSM_SAMPLES = b.blurSamples, u.needsUpdate = !0, m.needsUpdate = !0), b.mapPass === null && (b.mapPass = new kt(r.x, r.y)), u.uniforms.shadow_pass.value = b.map.texture, u.uniforms.resolution.value = b.mapSize, u.uniforms.radius.value = b.radius, i.setRenderTarget(b.mapPass), i.clear(), i.renderBufferDirect(L, null, w, u, v, null), m.uniforms.shadow_pass.value = b.mapPass.texture, m.uniforms.resolution.value = b.mapSize, m.uniforms.radius.value = b.radius, i.setRenderTarget(b.map), i.clear(), i.renderBufferDirect(L, null, w, m, v, null);
  }
  function S(b, L, w, W) {
    let M = null;
    const T = w.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (T !== void 0)
      M = T;
    else if (M = w.isPointLight === !0 ? l : a, i.localClippingEnabled && L.clipShadows === !0 && Array.isArray(L.clippingPlanes) && L.clippingPlanes.length !== 0 || L.displacementMap && L.displacementScale !== 0 || L.alphaMap && L.alphaTest > 0 || L.map && L.alphaTest > 0) {
      const C = M.uuid, B = L.uuid;
      let $ = c[C];
      $ === void 0 && ($ = {}, c[C] = $);
      let P = $[B];
      P === void 0 && (P = M.clone(), $[B] = P), M = P;
    }
    if (M.visible = L.visible, M.wireframe = L.wireframe, W === 3 ? M.side = L.shadowSide !== null ? L.shadowSide : L.side : M.side = L.shadowSide !== null ? L.shadowSide : f[L.side], M.alphaMap = L.alphaMap, M.alphaTest = L.alphaTest, M.map = L.map, M.clipShadows = L.clipShadows, M.clippingPlanes = L.clippingPlanes, M.clipIntersection = L.clipIntersection, M.displacementMap = L.displacementMap, M.displacementScale = L.displacementScale, M.displacementBias = L.displacementBias, M.wireframeLinewidth = L.wireframeLinewidth, M.linewidth = L.linewidth, w.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const C = i.properties.get(M);
      C.light = w;
    }
    return M;
  }
  function y(b, L, w, W, M) {
    if (b.visible === !1)
      return;
    if (b.layers.test(L.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && M === 3) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse, b.matrixWorld);
      const B = e.update(b), $ = b.material;
      if (Array.isArray($)) {
        const P = B.groups;
        for (let H = 0, q = P.length; H < q; H++) {
          const k = P[H], K = $[k.materialIndex];
          if (K && K.visible) {
            const j = S(b, K, W, M);
            i.renderBufferDirect(w, null, B, j, b, k);
          }
        }
      } else if ($.visible) {
        const P = S(b, $, W, M);
        i.renderBufferDirect(w, null, B, P, b, null);
      }
    }
    const C = b.children;
    for (let B = 0, $ = C.length; B < $; B++)
      y(C[B], L, w, W, M);
  }
}
function Iu(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let R = !1;
    const ae = new et();
    let te = null;
    const X = new et(0, 0, 0, 0);
    return {
      setMask: function(ie) {
        te !== ie && !R && (i.colorMask(ie, ie, ie, ie), te = ie);
      },
      setLocked: function(ie) {
        R = ie;
      },
      setClear: function(ie, ve, Ve, tt, It) {
        It === !0 && (ie *= tt, ve *= tt, Ve *= tt), ae.set(ie, ve, Ve, tt), X.equals(ae) === !1 && (i.clearColor(ie, ve, Ve, tt), X.copy(ae));
      },
      reset: function() {
        R = !1, te = null, X.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let R = !1, ae = null, te = null, X = null;
    return {
      setTest: function(ie) {
        ie ? Ce(i.DEPTH_TEST) : Ze(i.DEPTH_TEST);
      },
      setMask: function(ie) {
        ae !== ie && !R && (i.depthMask(ie), ae = ie);
      },
      setFunc: function(ie) {
        if (te !== ie) {
          switch (ie) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          te = ie;
        }
      },
      setLocked: function(ie) {
        R = ie;
      },
      setClear: function(ie) {
        X !== ie && (i.clearDepth(ie), X = ie);
      },
      reset: function() {
        R = !1, ae = null, te = null, X = null;
      }
    };
  }
  function o() {
    let R = !1, ae = null, te = null, X = null, ie = null, ve = null, Ve = null, tt = null, It = null;
    return {
      setTest: function(Ye) {
        R || (Ye ? Ce(i.STENCIL_TEST) : Ze(i.STENCIL_TEST));
      },
      setMask: function(Ye) {
        ae !== Ye && !R && (i.stencilMask(Ye), ae = Ye);
      },
      setFunc: function(Ye, vt, Wt) {
        (te !== Ye || X !== vt || ie !== Wt) && (i.stencilFunc(Ye, vt, Wt), te = Ye, X = vt, ie = Wt);
      },
      setOp: function(Ye, vt, Wt) {
        (ve !== Ye || Ve !== vt || tt !== Wt) && (i.stencilOp(Ye, vt, Wt), ve = Ye, Ve = vt, tt = Wt);
      },
      setLocked: function(Ye) {
        R = Ye;
      },
      setClear: function(Ye) {
        It !== Ye && (i.clearStencil(Ye), It = Ye);
      },
      reset: function() {
        R = !1, ae = null, te = null, X = null, ie = null, ve = null, Ve = null, tt = null, It = null;
      }
    };
  }
  const a = new r(), l = new s(), c = new o(), h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
  let u = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), v = [], p = null, d = !1, A = null, S = null, y = null, b = null, L = null, w = null, W = null, M = new ze(0, 0, 0), T = 0, C = !1, B = null, $ = null, P = null, H = null, q = null;
  const k = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = !1, j = 0;
  const Y = i.getParameter(i.VERSION);
  Y.indexOf("WebGL") !== -1 ? (j = parseFloat(/^WebGL (\d)/.exec(Y)[1]), K = j >= 1) : Y.indexOf("OpenGL ES") !== -1 && (j = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), K = j >= 2);
  let U = null, V = {};
  const se = i.getParameter(i.SCISSOR_BOX), le = i.getParameter(i.VIEWPORT), oe = new et().fromArray(se), pe = new et().fromArray(le);
  function Re(R, ae, te, X) {
    const ie = new Uint8Array(4), ve = i.createTexture();
    i.bindTexture(R, ve), i.texParameteri(R, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(R, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ve = 0; Ve < te; Ve++)
      n && (R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY) ? i.texImage3D(ae, 0, i.RGBA, 1, 1, X, 0, i.RGBA, i.UNSIGNED_BYTE, ie) : i.texImage2D(ae + Ve, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ie);
    return ve;
  }
  const _e = {};
  _e[i.TEXTURE_2D] = Re(i.TEXTURE_2D, i.TEXTURE_2D, 1), _e[i.TEXTURE_CUBE_MAP] = Re(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (_e[i.TEXTURE_2D_ARRAY] = Re(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), _e[i.TEXTURE_3D] = Re(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Ce(i.DEPTH_TEST), l.setFunc(3), Ie(!1), Fe(1), Ce(i.CULL_FACE), ye(0);
  function Ce(R) {
    u[R] !== !0 && (i.enable(R), u[R] = !0);
  }
  function Ze(R) {
    u[R] !== !1 && (i.disable(R), u[R] = !1);
  }
  function Ue(R, ae) {
    return m[R] !== ae ? (i.bindFramebuffer(R, ae), m[R] = ae, n && (R === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = ae), R === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = ae)), !0) : !1;
  }
  function F(R, ae) {
    let te = v, X = !1;
    if (R)
      if (te = g.get(ae), te === void 0 && (te = [], g.set(ae, te)), R.isWebGLMultipleRenderTargets) {
        const ie = R.texture;
        if (te.length !== ie.length || te[0] !== i.COLOR_ATTACHMENT0) {
          for (let ve = 0, Ve = ie.length; ve < Ve; ve++)
            te[ve] = i.COLOR_ATTACHMENT0 + ve;
          te.length = ie.length, X = !0;
        }
      } else
        te[0] !== i.COLOR_ATTACHMENT0 && (te[0] = i.COLOR_ATTACHMENT0, X = !0);
    else
      te[0] !== i.BACK && (te[0] = i.BACK, X = !0);
    X && (t.isWebGL2 ? i.drawBuffers(te) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te));
  }
  function At(R) {
    return p !== R ? (i.useProgram(R), p = R, !0) : !1;
  }
  const me = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    me[103] = i.MIN, me[104] = i.MAX;
  else {
    const R = e.get("EXT_blend_minmax");
    R !== null && (me[103] = R.MIN_EXT, me[104] = R.MAX_EXT);
  }
  const Te = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function ye(R, ae, te, X, ie, ve, Ve, tt, It, Ye) {
    if (R === 0) {
      d === !0 && (Ze(i.BLEND), d = !1);
      return;
    }
    if (d === !1 && (Ce(i.BLEND), d = !0), R !== 5) {
      if (R !== A || Ye !== C) {
        if ((S !== 100 || L !== 100) && (i.blendEquation(i.FUNC_ADD), S = 100, L = 100), Ye)
          switch (R) {
            case 1:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        else
          switch (R) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        y = null, b = null, w = null, W = null, M.set(0, 0, 0), T = 0, A = R, C = Ye;
      }
      return;
    }
    ie = ie || ae, ve = ve || te, Ve = Ve || X, (ae !== S || ie !== L) && (i.blendEquationSeparate(me[ae], me[ie]), S = ae, L = ie), (te !== y || X !== b || ve !== w || Ve !== W) && (i.blendFuncSeparate(Te[te], Te[X], Te[ve], Te[Ve]), y = te, b = X, w = ve, W = Ve), (tt.equals(M) === !1 || It !== T) && (i.blendColor(tt.r, tt.g, tt.b, It), M.copy(tt), T = It), A = R, C = !1;
  }
  function Ke(R, ae) {
    R.side === 2 ? Ze(i.CULL_FACE) : Ce(i.CULL_FACE);
    let te = R.side === 1;
    ae && (te = !te), Ie(te), R.blending === 1 && R.transparent === !1 ? ye(0) : ye(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.blendColor, R.blendAlpha, R.premultipliedAlpha), l.setFunc(R.depthFunc), l.setTest(R.depthTest), l.setMask(R.depthWrite), a.setMask(R.colorWrite);
    const X = R.stencilWrite;
    c.setTest(X), X && (c.setMask(R.stencilWriteMask), c.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), c.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), at(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits), R.alphaToCoverage === !0 ? Ce(i.SAMPLE_ALPHA_TO_COVERAGE) : Ze(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ie(R) {
    B !== R && (R ? i.frontFace(i.CW) : i.frontFace(i.CCW), B = R);
  }
  function Fe(R) {
    R !== 0 ? (Ce(i.CULL_FACE), R !== $ && (R === 1 ? i.cullFace(i.BACK) : R === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Ze(i.CULL_FACE), $ = R;
  }
  function qe(R) {
    R !== P && (K && i.lineWidth(R), P = R);
  }
  function at(R, ae, te) {
    R ? (Ce(i.POLYGON_OFFSET_FILL), (H !== ae || q !== te) && (i.polygonOffset(ae, te), H = ae, q = te)) : Ze(i.POLYGON_OFFSET_FILL);
  }
  function ft(R) {
    R ? Ce(i.SCISSOR_TEST) : Ze(i.SCISSOR_TEST);
  }
  function E(R) {
    R === void 0 && (R = i.TEXTURE0 + k - 1), U !== R && (i.activeTexture(R), U = R);
  }
  function _(R, ae, te) {
    te === void 0 && (U === null ? te = i.TEXTURE0 + k - 1 : te = U);
    let X = V[te];
    X === void 0 && (X = { type: void 0, texture: void 0 }, V[te] = X), (X.type !== R || X.texture !== ae) && (U !== te && (i.activeTexture(te), U = te), i.bindTexture(R, ae || _e[R]), X.type = R, X.texture = ae);
  }
  function N() {
    const R = V[U];
    R !== void 0 && R.type !== void 0 && (i.bindTexture(R.type, null), R.type = void 0, R.texture = void 0);
  }
  function Q() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ee() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function de() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function re() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ce() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Se() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function He() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function J() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function We() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Ae(R) {
    oe.equals(R) === !1 && (i.scissor(R.x, R.y, R.z, R.w), oe.copy(R));
  }
  function Me(R) {
    pe.equals(R) === !1 && (i.viewport(R.x, R.y, R.z, R.w), pe.copy(R));
  }
  function ge(R, ae) {
    let te = f.get(ae);
    te === void 0 && (te = /* @__PURE__ */ new WeakMap(), f.set(ae, te));
    let X = te.get(R);
    X === void 0 && (X = i.getUniformBlockIndex(ae, R.name), te.set(R, X));
  }
  function ue(R, ae) {
    const X = f.get(ae).get(R);
    h.get(ae) !== X && (i.uniformBlockBinding(ae, X, R.__bindingPointIndex), h.set(ae, X));
  }
  function Be() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, U = null, V = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), v = [], p = null, d = !1, A = null, S = null, y = null, b = null, L = null, w = null, W = null, M = new ze(0, 0, 0), T = 0, C = !1, B = null, $ = null, P = null, H = null, q = null, oe.set(0, 0, i.canvas.width, i.canvas.height), pe.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: Ce,
    disable: Ze,
    bindFramebuffer: Ue,
    drawBuffers: F,
    useProgram: At,
    setBlending: ye,
    setMaterial: Ke,
    setFlipSided: Ie,
    setCullFace: Fe,
    setLineWidth: qe,
    setPolygonOffset: at,
    setScissorTest: ft,
    activeTexture: E,
    bindTexture: _,
    unbindTexture: N,
    compressedTexImage2D: Q,
    compressedTexImage3D: Z,
    texImage2D: J,
    texImage3D: We,
    updateUBOMapping: ge,
    uniformBlockBinding: ue,
    texStorage2D: Se,
    texStorage3D: He,
    texSubImage2D: ee,
    texSubImage3D: de,
    compressedTexSubImage2D: re,
    compressedTexSubImage3D: ce,
    scissor: Ae,
    viewport: Me,
    reset: Be
  };
}
function Fu(i, e, t, n, r, s, o) {
  const a = r.isWebGL2, l = r.maxTextures, c = r.maxCubemapSize, h = r.maxTextureSize, f = r.maxSamples, u = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let v;
  const p = /* @__PURE__ */ new WeakMap();
  let d = !1;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function A(E, _) {
    return d ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, _)
    ) : Xi("canvas");
  }
  function S(E, _, N, Q) {
    let Z = 1;
    if ((E.width > Q || E.height > Q) && (Z = Q / Math.max(E.width, E.height)), Z < 1 || _ === !0)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
        const ee = _ ? Wi : Math.floor, de = ee(Z * E.width), re = ee(Z * E.height);
        v === void 0 && (v = A(de, re));
        const ce = N ? A(de, re) : v;
        return ce.width = de, ce.height = re, ce.getContext("2d").drawImage(E, 0, 0, de, re), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + de + "x" + re + ")."), ce;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
    return E;
  }
  function y(E) {
    return wr(E.width) && wr(E.height);
  }
  function b(E) {
    return a ? !1 : E.wrapS !== 1001 || E.wrapT !== 1001 || E.minFilter !== 1003 && E.minFilter !== 1006;
  }
  function L(E, _) {
    return E.generateMipmaps && _ && E.minFilter !== 1003 && E.minFilter !== 1006;
  }
  function w(E) {
    i.generateMipmap(E);
  }
  function W(E, _, N, Q, Z = !1) {
    if (a === !1)
      return _;
    if (E !== null) {
      if (i[E] !== void 0)
        return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let ee = _;
    if (_ === i.RED && (N === i.FLOAT && (ee = i.R32F), N === i.HALF_FLOAT && (ee = i.R16F), N === i.UNSIGNED_BYTE && (ee = i.R8)), _ === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (ee = i.R8UI), N === i.UNSIGNED_SHORT && (ee = i.R16UI), N === i.UNSIGNED_INT && (ee = i.R32UI), N === i.BYTE && (ee = i.R8I), N === i.SHORT && (ee = i.R16I), N === i.INT && (ee = i.R32I)), _ === i.RG && (N === i.FLOAT && (ee = i.RG32F), N === i.HALF_FLOAT && (ee = i.RG16F), N === i.UNSIGNED_BYTE && (ee = i.RG8)), _ === i.RGBA) {
      const de = Z ? Hi : ke.getTransfer(Q);
      N === i.FLOAT && (ee = i.RGBA32F), N === i.HALF_FLOAT && (ee = i.RGBA16F), N === i.UNSIGNED_BYTE && (ee = de === $e ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (ee = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (ee = i.RGB5_A1);
    }
    return (ee === i.R16F || ee === i.R32F || ee === i.RG16F || ee === i.RG32F || ee === i.RGBA16F || ee === i.RGBA32F) && e.get("EXT_color_buffer_float"), ee;
  }
  function M(E, _, N) {
    return L(E, N) === !0 || E.isFramebufferTexture && E.minFilter !== 1003 && E.minFilter !== 1006 ? Math.log2(Math.max(_.width, _.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? _.mipmaps.length : 1;
  }
  function T(E) {
    return E === 1003 || E === 1004 || E === 1005 ? i.NEAREST : i.LINEAR;
  }
  function C(E) {
    const _ = E.target;
    _.removeEventListener("dispose", C), $(_), _.isVideoTexture && g.delete(_);
  }
  function B(E) {
    const _ = E.target;
    _.removeEventListener("dispose", B), H(_);
  }
  function $(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0)
      return;
    const N = E.source, Q = p.get(N);
    if (Q) {
      const Z = Q[_.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && P(E), Object.keys(Q).length === 0 && p.delete(N);
    }
    n.remove(E);
  }
  function P(E) {
    const _ = n.get(E);
    i.deleteTexture(_.__webglTexture);
    const N = E.source, Q = p.get(N);
    delete Q[_.__cacheKey], o.memory.textures--;
  }
  function H(E) {
    const _ = E.texture, N = n.get(E), Q = n.get(_);
    if (Q.__webglTexture !== void 0 && (i.deleteTexture(Q.__webglTexture), o.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
      for (let Z = 0; Z < 6; Z++) {
        if (Array.isArray(N.__webglFramebuffer[Z]))
          for (let ee = 0; ee < N.__webglFramebuffer[Z].length; ee++)
            i.deleteFramebuffer(N.__webglFramebuffer[Z][ee]);
        else
          i.deleteFramebuffer(N.__webglFramebuffer[Z]);
        N.__webglDepthbuffer && i.deleteRenderbuffer(N.__webglDepthbuffer[Z]);
      }
    else {
      if (Array.isArray(N.__webglFramebuffer))
        for (let Z = 0; Z < N.__webglFramebuffer.length; Z++)
          i.deleteFramebuffer(N.__webglFramebuffer[Z]);
      else
        i.deleteFramebuffer(N.__webglFramebuffer);
      if (N.__webglDepthbuffer && i.deleteRenderbuffer(N.__webglDepthbuffer), N.__webglMultisampledFramebuffer && i.deleteFramebuffer(N.__webglMultisampledFramebuffer), N.__webglColorRenderbuffer)
        for (let Z = 0; Z < N.__webglColorRenderbuffer.length; Z++)
          N.__webglColorRenderbuffer[Z] && i.deleteRenderbuffer(N.__webglColorRenderbuffer[Z]);
      N.__webglDepthRenderbuffer && i.deleteRenderbuffer(N.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let Z = 0, ee = _.length; Z < ee; Z++) {
        const de = n.get(_[Z]);
        de.__webglTexture && (i.deleteTexture(de.__webglTexture), o.memory.textures--), n.remove(_[Z]);
      }
    n.remove(_), n.remove(E);
  }
  let q = 0;
  function k() {
    q = 0;
  }
  function K() {
    const E = q;
    return E >= l && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + l), q += 1, E;
  }
  function j(E) {
    const _ = [];
    return _.push(E.wrapS), _.push(E.wrapT), _.push(E.wrapR || 0), _.push(E.magFilter), _.push(E.minFilter), _.push(E.anisotropy), _.push(E.internalFormat), _.push(E.format), _.push(E.type), _.push(E.generateMipmaps), _.push(E.premultiplyAlpha), _.push(E.flipY), _.push(E.unpackAlignment), _.push(E.colorSpace), _.join();
  }
  function Y(E, _) {
    const N = n.get(E);
    if (E.isVideoTexture && at(E), E.isRenderTargetTexture === !1 && E.version > 0 && N.__version !== E.version) {
      const Q = E.image;
      if (Q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ce(N, E, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function U(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      Ce(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + _);
  }
  function V(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      Ce(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function se(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      Ze(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + _);
  }
  const le = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, oe = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, pe = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function Re(E, _, N) {
    if (N ? (i.texParameteri(E, i.TEXTURE_WRAP_S, le[_.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, le[_.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, le[_.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, oe[_.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, oe[_.minFilter])) : (i.texParameteri(E, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(E, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (_.wrapS !== 1001 || _.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(E, i.TEXTURE_MAG_FILTER, T(_.magFilter)), i.texParameteri(E, i.TEXTURE_MIN_FILTER, T(_.minFilter)), _.minFilter !== 1003 && _.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), _.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, pe[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (_.magFilter === 1003 || _.minFilter !== 1005 && _.minFilter !== 1008 || _.type === 1015 && e.has("OES_texture_float_linear") === !1 || a === !1 && _.type === 1016 && e.has("OES_texture_half_float_linear") === !1)
        return;
      (_.anisotropy > 1 || n.get(_).__currentAnisotropy) && (i.texParameterf(E, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy);
    }
  }
  function _e(E, _) {
    let N = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, _.addEventListener("dispose", C));
    const Q = _.source;
    let Z = p.get(Q);
    Z === void 0 && (Z = {}, p.set(Q, Z));
    const ee = j(_);
    if (ee !== E.__cacheKey) {
      Z[ee] === void 0 && (Z[ee] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, N = !0), Z[ee].usedTimes++;
      const de = Z[E.__cacheKey];
      de !== void 0 && (Z[E.__cacheKey].usedTimes--, de.usedTimes === 0 && P(_)), E.__cacheKey = ee, E.__webglTexture = Z[ee].texture;
    }
    return N;
  }
  function Ce(E, _, N) {
    let Q = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (Q = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (Q = i.TEXTURE_3D);
    const Z = _e(E, _), ee = _.source;
    t.bindTexture(Q, E.__webglTexture, i.TEXTURE0 + N);
    const de = n.get(ee);
    if (ee.version !== de.__version || Z === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const re = ke.getPrimaries(ke.workingColorSpace), ce = _.colorSpace === Ot ? null : ke.getPrimaries(_.colorSpace), Se = _.colorSpace === Ot || re === ce ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Se);
      const He = b(_) && y(_.image) === !1;
      let J = S(_.image, He, !1, h);
      J = ft(_, J);
      const We = y(J) || a, Ae = s.convert(_.format, _.colorSpace);
      let Me = s.convert(_.type), ge = W(_.internalFormat, Ae, Me, _.colorSpace, _.isVideoTexture);
      Re(Q, _, We);
      let ue;
      const Be = _.mipmaps, R = a && _.isVideoTexture !== !0, ae = de.__version === void 0 || Z === !0, te = M(_, J, We);
      if (_.isDepthTexture)
        ge = i.DEPTH_COMPONENT, a ? _.type === 1015 ? ge = i.DEPTH_COMPONENT32F : _.type === 1014 ? ge = i.DEPTH_COMPONENT24 : _.type === 1020 ? ge = i.DEPTH24_STENCIL8 : ge = i.DEPTH_COMPONENT16 : _.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), _.format === 1026 && ge === i.DEPTH_COMPONENT && _.type !== 1012 && _.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), _.type = 1014, Me = s.convert(_.type)), _.format === 1027 && ge === i.DEPTH_COMPONENT && (ge = i.DEPTH_STENCIL, _.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), _.type = 1020, Me = s.convert(_.type))), ae && (R ? t.texStorage2D(i.TEXTURE_2D, 1, ge, J.width, J.height) : t.texImage2D(i.TEXTURE_2D, 0, ge, J.width, J.height, 0, Ae, Me, null));
      else if (_.isDataTexture)
        if (Be.length > 0 && We) {
          R && ae && t.texStorage2D(i.TEXTURE_2D, te, ge, Be[0].width, Be[0].height);
          for (let X = 0, ie = Be.length; X < ie; X++)
            ue = Be[X], R ? t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, ue.width, ue.height, Ae, Me, ue.data) : t.texImage2D(i.TEXTURE_2D, X, ge, ue.width, ue.height, 0, Ae, Me, ue.data);
          _.generateMipmaps = !1;
        } else
          R ? (ae && t.texStorage2D(i.TEXTURE_2D, te, ge, J.width, J.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, J.width, J.height, Ae, Me, J.data)) : t.texImage2D(i.TEXTURE_2D, 0, ge, J.width, J.height, 0, Ae, Me, J.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          R && ae && t.texStorage3D(i.TEXTURE_2D_ARRAY, te, ge, Be[0].width, Be[0].height, J.depth);
          for (let X = 0, ie = Be.length; X < ie; X++)
            ue = Be[X], _.format !== 1023 ? Ae !== null ? R ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, ue.width, ue.height, J.depth, Ae, ue.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, X, ge, ue.width, ue.height, J.depth, 0, ue.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, ue.width, ue.height, J.depth, Ae, Me, ue.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, X, ge, ue.width, ue.height, J.depth, 0, Ae, Me, ue.data);
        } else {
          R && ae && t.texStorage2D(i.TEXTURE_2D, te, ge, Be[0].width, Be[0].height);
          for (let X = 0, ie = Be.length; X < ie; X++)
            ue = Be[X], _.format !== 1023 ? Ae !== null ? R ? t.compressedTexSubImage2D(i.TEXTURE_2D, X, 0, 0, ue.width, ue.height, Ae, ue.data) : t.compressedTexImage2D(i.TEXTURE_2D, X, ge, ue.width, ue.height, 0, ue.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, ue.width, ue.height, Ae, Me, ue.data) : t.texImage2D(i.TEXTURE_2D, X, ge, ue.width, ue.height, 0, Ae, Me, ue.data);
        }
      else if (_.isDataArrayTexture)
        R ? (ae && t.texStorage3D(i.TEXTURE_2D_ARRAY, te, ge, J.width, J.height, J.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, Ae, Me, J.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ge, J.width, J.height, J.depth, 0, Ae, Me, J.data);
      else if (_.isData3DTexture)
        R ? (ae && t.texStorage3D(i.TEXTURE_3D, te, ge, J.width, J.height, J.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, Ae, Me, J.data)) : t.texImage3D(i.TEXTURE_3D, 0, ge, J.width, J.height, J.depth, 0, Ae, Me, J.data);
      else if (_.isFramebufferTexture) {
        if (ae)
          if (R)
            t.texStorage2D(i.TEXTURE_2D, te, ge, J.width, J.height);
          else {
            let X = J.width, ie = J.height;
            for (let ve = 0; ve < te; ve++)
              t.texImage2D(i.TEXTURE_2D, ve, ge, X, ie, 0, Ae, Me, null), X >>= 1, ie >>= 1;
          }
      } else if (Be.length > 0 && We) {
        R && ae && t.texStorage2D(i.TEXTURE_2D, te, ge, Be[0].width, Be[0].height);
        for (let X = 0, ie = Be.length; X < ie; X++)
          ue = Be[X], R ? t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, Ae, Me, ue) : t.texImage2D(i.TEXTURE_2D, X, ge, Ae, Me, ue);
        _.generateMipmaps = !1;
      } else
        R ? (ae && t.texStorage2D(i.TEXTURE_2D, te, ge, J.width, J.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Ae, Me, J)) : t.texImage2D(i.TEXTURE_2D, 0, ge, Ae, Me, J);
      L(_, We) && w(Q), de.__version = ee.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function Ze(E, _, N) {
    if (_.image.length !== 6)
      return;
    const Q = _e(E, _), Z = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + N);
    const ee = n.get(Z);
    if (Z.version !== ee.__version || Q === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const de = ke.getPrimaries(ke.workingColorSpace), re = _.colorSpace === Ot ? null : ke.getPrimaries(_.colorSpace), ce = _.colorSpace === Ot || de === re ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const Se = _.isCompressedTexture || _.image[0].isCompressedTexture, He = _.image[0] && _.image[0].isDataTexture, J = [];
      for (let X = 0; X < 6; X++)
        !Se && !He ? J[X] = S(_.image[X], !1, !0, c) : J[X] = He ? _.image[X].image : _.image[X], J[X] = ft(_, J[X]);
      const We = J[0], Ae = y(We) || a, Me = s.convert(_.format, _.colorSpace), ge = s.convert(_.type), ue = W(_.internalFormat, Me, ge, _.colorSpace), Be = a && _.isVideoTexture !== !0, R = ee.__version === void 0 || Q === !0;
      let ae = M(_, We, Ae);
      Re(i.TEXTURE_CUBE_MAP, _, Ae);
      let te;
      if (Se) {
        Be && R && t.texStorage2D(i.TEXTURE_CUBE_MAP, ae, ue, We.width, We.height);
        for (let X = 0; X < 6; X++) {
          te = J[X].mipmaps;
          for (let ie = 0; ie < te.length; ie++) {
            const ve = te[ie];
            _.format !== 1023 ? Me !== null ? Be ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ie, 0, 0, ve.width, ve.height, Me, ve.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ie, ue, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ie, 0, 0, ve.width, ve.height, Me, ge, ve.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ie, ue, ve.width, ve.height, 0, Me, ge, ve.data);
          }
        }
      } else {
        te = _.mipmaps, Be && R && (te.length > 0 && ae++, t.texStorage2D(i.TEXTURE_CUBE_MAP, ae, ue, J[0].width, J[0].height));
        for (let X = 0; X < 6; X++)
          if (He) {
            Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, J[X].width, J[X].height, Me, ge, J[X].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, ue, J[X].width, J[X].height, 0, Me, ge, J[X].data);
            for (let ie = 0; ie < te.length; ie++) {
              const Ve = te[ie].image[X].image;
              Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ie + 1, 0, 0, Ve.width, Ve.height, Me, ge, Ve.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ie + 1, ue, Ve.width, Ve.height, 0, Me, ge, Ve.data);
            }
          } else {
            Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, Me, ge, J[X]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, ue, Me, ge, J[X]);
            for (let ie = 0; ie < te.length; ie++) {
              const ve = te[ie];
              Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ie + 1, 0, 0, Me, ge, ve.image[X]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + X, ie + 1, ue, Me, ge, ve.image[X]);
            }
          }
      }
      L(_, Ae) && w(i.TEXTURE_CUBE_MAP), ee.__version = Z.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function Ue(E, _, N, Q, Z, ee) {
    const de = s.convert(N.format, N.colorSpace), re = s.convert(N.type), ce = W(N.internalFormat, de, re, N.colorSpace);
    if (!n.get(_).__hasExternalTextures) {
      const He = Math.max(1, _.width >> ee), J = Math.max(1, _.height >> ee);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, ee, ce, He, J, _.depth, 0, de, re, null) : t.texImage2D(Z, ee, ce, He, J, 0, de, re, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E), qe(_) ? u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Q, Z, n.get(N).__webglTexture, 0, Fe(_)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Q, Z, n.get(N).__webglTexture, ee), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function F(E, _, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer && !_.stencilBuffer) {
      let Q = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
      if (N || qe(_)) {
        const Z = _.depthTexture;
        Z && Z.isDepthTexture && (Z.type === 1015 ? Q = i.DEPTH_COMPONENT32F : Z.type === 1014 && (Q = i.DEPTH_COMPONENT24));
        const ee = Fe(_);
        qe(_) ? u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ee, Q, _.width, _.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, ee, Q, _.width, _.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, Q, _.width, _.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, E);
    } else if (_.depthBuffer && _.stencilBuffer) {
      const Q = Fe(_);
      N && qe(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Q, i.DEPTH24_STENCIL8, _.width, _.height) : qe(_) ? u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Q, i.DEPTH24_STENCIL8, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, E);
    } else {
      const Q = _.isWebGLMultipleRenderTargets === !0 ? _.texture : [_.texture];
      for (let Z = 0; Z < Q.length; Z++) {
        const ee = Q[Z], de = s.convert(ee.format, ee.colorSpace), re = s.convert(ee.type), ce = W(ee.internalFormat, de, re, ee.colorSpace), Se = Fe(_);
        N && qe(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Se, ce, _.width, _.height) : qe(_) ? u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Se, ce, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, ce, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function At(E, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(_.depthTexture).__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), Y(_.depthTexture, 0);
    const Q = n.get(_.depthTexture).__webglTexture, Z = Fe(_);
    if (_.depthTexture.format === 1026)
      qe(_) ? u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Q, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Q, 0);
    else if (_.depthTexture.format === 1027)
      qe(_) ? u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Q, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function me(E) {
    const _ = n.get(E), N = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (N)
        throw new Error("target.depthTexture not supported in Cube render targets");
      At(_.__webglFramebuffer, E);
    } else if (N) {
      _.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[Q]), _.__webglDepthbuffer[Q] = i.createRenderbuffer(), F(_.__webglDepthbuffer[Q], E, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer = i.createRenderbuffer(), F(_.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Te(E, _, N) {
    const Q = n.get(E);
    _ !== void 0 && Ue(Q.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && me(E);
  }
  function ye(E) {
    const _ = E.texture, N = n.get(E), Q = n.get(_);
    E.addEventListener("dispose", B), E.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = i.createTexture()), Q.__version = _.version, o.memory.textures++);
    const Z = E.isWebGLCubeRenderTarget === !0, ee = E.isWebGLMultipleRenderTargets === !0, de = y(E) || a;
    if (Z) {
      N.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (a && _.mipmaps && _.mipmaps.length > 0) {
          N.__webglFramebuffer[re] = [];
          for (let ce = 0; ce < _.mipmaps.length; ce++)
            N.__webglFramebuffer[re][ce] = i.createFramebuffer();
        } else
          N.__webglFramebuffer[re] = i.createFramebuffer();
    } else {
      if (a && _.mipmaps && _.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let re = 0; re < _.mipmaps.length; re++)
          N.__webglFramebuffer[re] = i.createFramebuffer();
      } else
        N.__webglFramebuffer = i.createFramebuffer();
      if (ee)
        if (r.drawBuffers) {
          const re = E.texture;
          for (let ce = 0, Se = re.length; ce < Se; ce++) {
            const He = n.get(re[ce]);
            He.__webglTexture === void 0 && (He.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && E.samples > 0 && qe(E) === !1) {
        const re = ee ? _ : [_];
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let ce = 0; ce < re.length; ce++) {
          const Se = re[ce];
          N.__webglColorRenderbuffer[ce] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[ce]);
          const He = s.convert(Se.format, Se.colorSpace), J = s.convert(Se.type), We = W(Se.internalFormat, He, J, Se.colorSpace, E.isXRRenderTarget === !0), Ae = Fe(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ae, We, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ce, i.RENDERBUFFER, N.__webglColorRenderbuffer[ce]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), F(N.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Q.__webglTexture), Re(i.TEXTURE_CUBE_MAP, _, de);
      for (let re = 0; re < 6; re++)
        if (a && _.mipmaps && _.mipmaps.length > 0)
          for (let ce = 0; ce < _.mipmaps.length; ce++)
            Ue(N.__webglFramebuffer[re][ce], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + re, ce);
        else
          Ue(N.__webglFramebuffer[re], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      L(_, de) && w(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ee) {
      const re = E.texture;
      for (let ce = 0, Se = re.length; ce < Se; ce++) {
        const He = re[ce], J = n.get(He);
        t.bindTexture(i.TEXTURE_2D, J.__webglTexture), Re(i.TEXTURE_2D, He, de), Ue(N.__webglFramebuffer, E, He, i.COLOR_ATTACHMENT0 + ce, i.TEXTURE_2D, 0), L(He, de) && w(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (a ? re = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(re, Q.__webglTexture), Re(re, _, de), a && _.mipmaps && _.mipmaps.length > 0)
        for (let ce = 0; ce < _.mipmaps.length; ce++)
          Ue(N.__webglFramebuffer[ce], E, _, i.COLOR_ATTACHMENT0, re, ce);
      else
        Ue(N.__webglFramebuffer, E, _, i.COLOR_ATTACHMENT0, re, 0);
      L(_, de) && w(re), t.unbindTexture();
    }
    E.depthBuffer && me(E);
  }
  function Ke(E) {
    const _ = y(E) || a, N = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let Q = 0, Z = N.length; Q < Z; Q++) {
      const ee = N[Q];
      if (L(ee, _)) {
        const de = E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, re = n.get(ee).__webglTexture;
        t.bindTexture(de, re), w(de), t.unbindTexture();
      }
    }
  }
  function Ie(E) {
    if (a && E.samples > 0 && qe(E) === !1) {
      const _ = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture], N = E.width, Q = E.height;
      let Z = i.COLOR_BUFFER_BIT;
      const ee = [], de = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, re = n.get(E), ce = E.isWebGLMultipleRenderTargets === !0;
      if (ce)
        for (let Se = 0; Se < _.length; Se++)
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Se, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Se, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, re.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglFramebuffer);
      for (let Se = 0; Se < _.length; Se++) {
        ee.push(i.COLOR_ATTACHMENT0 + Se), E.depthBuffer && ee.push(de);
        const He = re.__ignoreDepthValues !== void 0 ? re.__ignoreDepthValues : !1;
        if (He === !1 && (E.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), ce && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, re.__webglColorRenderbuffer[Se]), He === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [de]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [de])), ce) {
          const J = n.get(_[Se]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, J, 0);
        }
        i.blitFramebuffer(0, 0, N, Q, 0, 0, N, Q, Z, i.NEAREST), m && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ee);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ce)
        for (let Se = 0; Se < _.length; Se++) {
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Se, i.RENDERBUFFER, re.__webglColorRenderbuffer[Se]);
          const He = n.get(_[Se]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Se, i.TEXTURE_2D, He, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglMultisampledFramebuffer);
    }
  }
  function Fe(E) {
    return Math.min(f, E.samples);
  }
  function qe(E) {
    const _ = n.get(E);
    return a && E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function at(E) {
    const _ = o.render.frame;
    g.get(E) !== _ && (g.set(E, _), E.update());
  }
  function ft(E, _) {
    const N = E.colorSpace, Q = E.format, Z = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || E.format === 1035 || N !== rn && N !== Ot && (ke.getTransfer(N) === $e ? a === !1 ? e.has("EXT_sRGB") === !0 && Q === 1023 ? (E.format = 1035, E.minFilter = 1006, E.generateMipmaps = !1) : _ = Qs.sRGBToLinear(_) : (Q !== 1023 || Z !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), _;
  }
  this.allocateTextureUnit = K, this.resetTextureUnits = k, this.setTexture2D = Y, this.setTexture2DArray = U, this.setTexture3D = V, this.setTextureCube = se, this.rebindTextures = Te, this.setupRenderTarget = ye, this.updateRenderTargetMipmap = Ke, this.updateMultisampleRenderTarget = Ie, this.setupDepthRenderbuffer = me, this.setupFrameBufferTexture = Ue, this.useMultisampledRTT = qe;
}
function Nu(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = Ot) {
    let a;
    const l = ke.getTransfer(o);
    if (s === 1009)
      return i.UNSIGNED_BYTE;
    if (s === 1017)
      return i.UNSIGNED_SHORT_4_4_4_4;
    if (s === 1018)
      return i.UNSIGNED_SHORT_5_5_5_1;
    if (s === 1010)
      return i.BYTE;
    if (s === 1011)
      return i.SHORT;
    if (s === 1012)
      return i.UNSIGNED_SHORT;
    if (s === 1013)
      return i.INT;
    if (s === 1014)
      return i.UNSIGNED_INT;
    if (s === 1015)
      return i.FLOAT;
    if (s === 1016)
      return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === 1021)
      return i.ALPHA;
    if (s === 1023)
      return i.RGBA;
    if (s === 1024)
      return i.LUMINANCE;
    if (s === 1025)
      return i.LUMINANCE_ALPHA;
    if (s === 1026)
      return i.DEPTH_COMPONENT;
    if (s === 1027)
      return i.DEPTH_STENCIL;
    if (s === 1035)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === 1028)
      return i.RED;
    if (s === 1029)
      return i.RED_INTEGER;
    if (s === 1030)
      return i.RG;
    if (s === 1031)
      return i.RG_INTEGER;
    if (s === 1033)
      return i.RGBA_INTEGER;
    if (s === 33776 || s === 33777 || s === 33778 || s === 33779)
      if (l === $e)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === 33776)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === 33777)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === 33778)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === 33779)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === 33776)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === 33777)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === 33778)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === 33779)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === 35840 || s === 35841 || s === 35842 || s === 35843)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === 35840)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === 35841)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === 35842)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === 35843)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === 36196)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === 37492 || s === 37496)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === 37492)
          return l === $e ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === 37496)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === 37808 || s === 37809 || s === 37810 || s === 37811 || s === 37812 || s === 37813 || s === 37814 || s === 37815 || s === 37816 || s === 37817 || s === 37818 || s === 37819 || s === 37820 || s === 37821)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === 37808)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === 37809)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === 37810)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === 37811)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === 37812)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === 37813)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === 37814)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === 37815)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === 37816)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === 37817)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === 37818)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === 37819)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === 37820)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === 37821)
          return l === $e ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === 36492 || s === 36494 || s === 36495)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === 36492)
          return l === $e ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === 36494)
          return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === 36495)
          return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (s === 36283 || s === 36284 || s === 36285 || s === 36286)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (s === 36492)
          return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === 36284)
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === 36285)
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === 36286)
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === 1020 ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] : null;
  }
  return { convert: r };
}
class Ou extends Nt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Hn extends Et {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Bu = { type: "move" };
class Er {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Hn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Hn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new D()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Hn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new D()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let r = null, s = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const v of e.hand.values()) {
          const p = t.getJointPose(v, n), d = this._getHandJoint(c, v);
          p !== null && (d.matrix.fromArray(p.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, d.jointRadius = p.radius), d.visible = p !== null;
        }
        const h = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], u = h.position.distanceTo(f.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && u > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && u <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Bu)));
    }
    return a !== null && (a.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Hn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class zu extends Lt {
  constructor(e, t, n, r, s, o, a, l, c, h) {
    if (h = h !== void 0 ? h : 1026, h !== 1026 && h !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === 1026 && (n = 1014), n === void 0 && h === 1027 && (n = 1020), super(null, r, s, o, a, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Gu extends Xn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, h = null, f = null, u = null, m = null, g = null;
    const v = t.getContextAttributes();
    let p = null, d = null;
    const A = [], S = [], y = new Nt();
    y.layers.enable(1), y.viewport = new et();
    const b = new Nt();
    b.layers.enable(2), b.viewport = new et();
    const L = [y, b], w = new Ou();
    w.layers.enable(1), w.layers.enable(2);
    let W = null, M = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(U) {
      let V = A[U];
      return V === void 0 && (V = new Er(), A[U] = V), V.getTargetRaySpace();
    }, this.getControllerGrip = function(U) {
      let V = A[U];
      return V === void 0 && (V = new Er(), A[U] = V), V.getGripSpace();
    }, this.getHand = function(U) {
      let V = A[U];
      return V === void 0 && (V = new Er(), A[U] = V), V.getHandSpace();
    };
    function T(U) {
      const V = S.indexOf(U.inputSource);
      if (V === -1)
        return;
      const se = A[V];
      se !== void 0 && (se.update(U.inputSource, U.frame, c || o), se.dispatchEvent({ type: U.type, data: U.inputSource }));
    }
    function C() {
      r.removeEventListener("select", T), r.removeEventListener("selectstart", T), r.removeEventListener("selectend", T), r.removeEventListener("squeeze", T), r.removeEventListener("squeezestart", T), r.removeEventListener("squeezeend", T), r.removeEventListener("end", C), r.removeEventListener("inputsourceschange", B);
      for (let U = 0; U < A.length; U++) {
        const V = S[U];
        V !== null && (S[U] = null, A[U].disconnect(V));
      }
      W = null, M = null, e.setRenderTarget(p), m = null, u = null, f = null, r = null, d = null, Y.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(U) {
      s = U, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(U) {
      a = U, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(U) {
      c = U;
    }, this.getBaseLayer = function() {
      return u !== null ? u : m;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(U) {
      if (r = U, r !== null) {
        if (p = e.getRenderTarget(), r.addEventListener("select", T), r.addEventListener("selectstart", T), r.addEventListener("selectend", T), r.addEventListener("squeeze", T), r.addEventListener("squeezestart", T), r.addEventListener("squeezeend", T), r.addEventListener("end", C), r.addEventListener("inputsourceschange", B), v.xrCompatible !== !0 && await t.makeXRCompatible(), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const V = {
            antialias: r.renderState.layers === void 0 ? v.antialias : !0,
            alpha: !0,
            depth: v.depth,
            stencil: v.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, V), r.updateRenderState({ baseLayer: m }), d = new kt(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: v.stencil
            }
          );
        } else {
          let V = null, se = null, le = null;
          v.depth && (le = v.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, V = v.stencil ? 1027 : 1026, se = v.stencil ? 1020 : 1014);
          const oe = {
            colorFormat: t.RGBA8,
            depthFormat: le,
            scaleFactor: s
          };
          f = new XRWebGLBinding(r, t), u = f.createProjectionLayer(oe), r.updateRenderState({ layers: [u] }), d = new kt(
            u.textureWidth,
            u.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new zu(u.textureWidth, u.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, V),
              stencilBuffer: v.stencil,
              colorSpace: e.outputColorSpace,
              samples: v.antialias ? 4 : 0
            }
          );
          const pe = e.properties.get(d);
          pe.__ignoreDepthValues = u.ignoreDepthValues;
        }
        d.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), Y.setContext(r), Y.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    };
    function B(U) {
      for (let V = 0; V < U.removed.length; V++) {
        const se = U.removed[V], le = S.indexOf(se);
        le >= 0 && (S[le] = null, A[le].disconnect(se));
      }
      for (let V = 0; V < U.added.length; V++) {
        const se = U.added[V];
        let le = S.indexOf(se);
        if (le === -1) {
          for (let pe = 0; pe < A.length; pe++)
            if (pe >= S.length) {
              S.push(se), le = pe;
              break;
            } else if (S[pe] === null) {
              S[pe] = se, le = pe;
              break;
            }
          if (le === -1)
            break;
        }
        const oe = A[le];
        oe && oe.connect(se);
      }
    }
    const $ = new D(), P = new D();
    function H(U, V, se) {
      $.setFromMatrixPosition(V.matrixWorld), P.setFromMatrixPosition(se.matrixWorld);
      const le = $.distanceTo(P), oe = V.projectionMatrix.elements, pe = se.projectionMatrix.elements, Re = oe[14] / (oe[10] - 1), _e = oe[14] / (oe[10] + 1), Ce = (oe[9] + 1) / oe[5], Ze = (oe[9] - 1) / oe[5], Ue = (oe[8] - 1) / oe[0], F = (pe[8] + 1) / pe[0], At = Re * Ue, me = Re * F, Te = le / (-Ue + F), ye = Te * -Ue;
      V.matrixWorld.decompose(U.position, U.quaternion, U.scale), U.translateX(ye), U.translateZ(Te), U.matrixWorld.compose(U.position, U.quaternion, U.scale), U.matrixWorldInverse.copy(U.matrixWorld).invert();
      const Ke = Re + Te, Ie = _e + Te, Fe = At - ye, qe = me + (le - ye), at = Ce * _e / Ie * Ke, ft = Ze * _e / Ie * Ke;
      U.projectionMatrix.makePerspective(Fe, qe, at, ft, Ke, Ie), U.projectionMatrixInverse.copy(U.projectionMatrix).invert();
    }
    function q(U, V) {
      V === null ? U.matrixWorld.copy(U.matrix) : U.matrixWorld.multiplyMatrices(V.matrixWorld, U.matrix), U.matrixWorldInverse.copy(U.matrixWorld).invert();
    }
    this.updateCamera = function(U) {
      if (r === null)
        return;
      w.near = b.near = y.near = U.near, w.far = b.far = y.far = U.far, (W !== w.near || M !== w.far) && (r.updateRenderState({
        depthNear: w.near,
        depthFar: w.far
      }), W = w.near, M = w.far);
      const V = U.parent, se = w.cameras;
      q(w, V);
      for (let le = 0; le < se.length; le++)
        q(se[le], V);
      se.length === 2 ? H(w, y, b) : w.projectionMatrix.copy(y.projectionMatrix), k(U, w, V);
    };
    function k(U, V, se) {
      se === null ? U.matrix.copy(V.matrixWorld) : (U.matrix.copy(se.matrixWorld), U.matrix.invert(), U.matrix.multiply(V.matrixWorld)), U.matrix.decompose(U.position, U.quaternion, U.scale), U.updateMatrixWorld(!0), U.projectionMatrix.copy(V.projectionMatrix), U.projectionMatrixInverse.copy(V.projectionMatrixInverse), U.isPerspectiveCamera && (U.fov = oi * 2 * Math.atan(1 / U.projectionMatrix.elements[5]), U.zoom = 1);
    }
    this.getCamera = function() {
      return w;
    }, this.getFoveation = function() {
      if (!(u === null && m === null))
        return l;
    }, this.setFoveation = function(U) {
      l = U, u !== null && (u.fixedFoveation = U), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = U);
    };
    let K = null;
    function j(U, V) {
      if (h = V.getViewerPose(c || o), g = V, h !== null) {
        const se = h.views;
        m !== null && (e.setRenderTargetFramebuffer(d, m.framebuffer), e.setRenderTarget(d));
        let le = !1;
        se.length !== w.cameras.length && (w.cameras.length = 0, le = !0);
        for (let oe = 0; oe < se.length; oe++) {
          const pe = se[oe];
          let Re = null;
          if (m !== null)
            Re = m.getViewport(pe);
          else {
            const Ce = f.getViewSubImage(u, pe);
            Re = Ce.viewport, oe === 0 && (e.setRenderTargetTextures(
              d,
              Ce.colorTexture,
              u.ignoreDepthValues ? void 0 : Ce.depthStencilTexture
            ), e.setRenderTarget(d));
          }
          let _e = L[oe];
          _e === void 0 && (_e = new Nt(), _e.layers.enable(oe), _e.viewport = new et(), L[oe] = _e), _e.matrix.fromArray(pe.transform.matrix), _e.matrix.decompose(_e.position, _e.quaternion, _e.scale), _e.projectionMatrix.fromArray(pe.projectionMatrix), _e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(), _e.viewport.set(Re.x, Re.y, Re.width, Re.height), oe === 0 && (w.matrix.copy(_e.matrix), w.matrix.decompose(w.position, w.quaternion, w.scale)), le === !0 && w.cameras.push(_e);
        }
      }
      for (let se = 0; se < A.length; se++) {
        const le = S[se], oe = A[se];
        le !== null && oe !== void 0 && oe.update(le, V, c || o);
      }
      K && K(U, V), V.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: V }), g = null;
    }
    const Y = new ca();
    Y.setAnimationLoop(j), this.setAnimationLoop = function(U) {
      K = U;
    }, this.dispose = function() {
    };
  }
}
function Hu(i, e) {
  function t(p, d) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), d.value.copy(p.matrix);
  }
  function n(p, d) {
    d.color.getRGB(p.fogColor.value, sa(i)), d.isFog ? (p.fogNear.value = d.near, p.fogFar.value = d.far) : d.isFogExp2 && (p.fogDensity.value = d.density);
  }
  function r(p, d, A, S, y) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial ? s(p, d) : d.isMeshToonMaterial ? (s(p, d), f(p, d)) : d.isMeshPhongMaterial ? (s(p, d), h(p, d)) : d.isMeshStandardMaterial ? (s(p, d), u(p, d), d.isMeshPhysicalMaterial && m(p, d, y)) : d.isMeshMatcapMaterial ? (s(p, d), g(p, d)) : d.isMeshDepthMaterial ? s(p, d) : d.isMeshDistanceMaterial ? (s(p, d), v(p, d)) : d.isMeshNormalMaterial ? s(p, d) : d.isLineBasicMaterial ? (o(p, d), d.isLineDashedMaterial && a(p, d)) : d.isPointsMaterial ? l(p, d, A, S) : d.isSpriteMaterial ? c(p, d) : d.isShadowMaterial ? (p.color.value.copy(d.color), p.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function s(p, d) {
    p.opacity.value = d.opacity, d.color && p.diffuse.value.copy(d.color), d.emissive && p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (p.map.value = d.map, t(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.bumpMap && (p.bumpMap.value = d.bumpMap, t(d.bumpMap, p.bumpMapTransform), p.bumpScale.value = d.bumpScale, d.side === 1 && (p.bumpScale.value *= -1)), d.normalMap && (p.normalMap.value = d.normalMap, t(d.normalMap, p.normalMapTransform), p.normalScale.value.copy(d.normalScale), d.side === 1 && p.normalScale.value.negate()), d.displacementMap && (p.displacementMap.value = d.displacementMap, t(d.displacementMap, p.displacementMapTransform), p.displacementScale.value = d.displacementScale, p.displacementBias.value = d.displacementBias), d.emissiveMap && (p.emissiveMap.value = d.emissiveMap, t(d.emissiveMap, p.emissiveMapTransform)), d.specularMap && (p.specularMap.value = d.specularMap, t(d.specularMap, p.specularMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    const A = e.get(d).envMap;
    if (A && (p.envMap.value = A, p.flipEnvMap.value = A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = d.reflectivity, p.ior.value = d.ior, p.refractionRatio.value = d.refractionRatio), d.lightMap) {
      p.lightMap.value = d.lightMap;
      const S = i._useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = d.lightMapIntensity * S, t(d.lightMap, p.lightMapTransform);
    }
    d.aoMap && (p.aoMap.value = d.aoMap, p.aoMapIntensity.value = d.aoMapIntensity, t(d.aoMap, p.aoMapTransform));
  }
  function o(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, d.map && (p.map.value = d.map, t(d.map, p.mapTransform));
  }
  function a(p, d) {
    p.dashSize.value = d.dashSize, p.totalSize.value = d.dashSize + d.gapSize, p.scale.value = d.scale;
  }
  function l(p, d, A, S) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.size.value = d.size * A, p.scale.value = S * 0.5, d.map && (p.map.value = d.map, t(d.map, p.uvTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function c(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.rotation.value = d.rotation, d.map && (p.map.value = d.map, t(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function h(p, d) {
    p.specular.value.copy(d.specular), p.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function f(p, d) {
    d.gradientMap && (p.gradientMap.value = d.gradientMap);
  }
  function u(p, d) {
    p.metalness.value = d.metalness, d.metalnessMap && (p.metalnessMap.value = d.metalnessMap, t(d.metalnessMap, p.metalnessMapTransform)), p.roughness.value = d.roughness, d.roughnessMap && (p.roughnessMap.value = d.roughnessMap, t(d.roughnessMap, p.roughnessMapTransform)), e.get(d).envMap && (p.envMapIntensity.value = d.envMapIntensity);
  }
  function m(p, d, A) {
    p.ior.value = d.ior, d.sheen > 0 && (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), p.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (p.sheenColorMap.value = d.sheenColorMap, t(d.sheenColorMap, p.sheenColorMapTransform)), d.sheenRoughnessMap && (p.sheenRoughnessMap.value = d.sheenRoughnessMap, t(d.sheenRoughnessMap, p.sheenRoughnessMapTransform))), d.clearcoat > 0 && (p.clearcoat.value = d.clearcoat, p.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (p.clearcoatMap.value = d.clearcoatMap, t(d.clearcoatMap, p.clearcoatMapTransform)), d.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, t(d.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (p.clearcoatNormalMap.value = d.clearcoatNormalMap, t(d.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === 1 && p.clearcoatNormalScale.value.negate())), d.iridescence > 0 && (p.iridescence.value = d.iridescence, p.iridescenceIOR.value = d.iridescenceIOR, p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (p.iridescenceMap.value = d.iridescenceMap, t(d.iridescenceMap, p.iridescenceMapTransform)), d.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = d.iridescenceThicknessMap, t(d.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), d.transmission > 0 && (p.transmission.value = d.transmission, p.transmissionSamplerMap.value = A.texture, p.transmissionSamplerSize.value.set(A.width, A.height), d.transmissionMap && (p.transmissionMap.value = d.transmissionMap, t(d.transmissionMap, p.transmissionMapTransform)), p.thickness.value = d.thickness, d.thicknessMap && (p.thicknessMap.value = d.thicknessMap, t(d.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = d.attenuationDistance, p.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (p.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (p.anisotropyMap.value = d.anisotropyMap, t(d.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = d.specularIntensity, p.specularColor.value.copy(d.specularColor), d.specularColorMap && (p.specularColorMap.value = d.specularColorMap, t(d.specularColorMap, p.specularColorMapTransform)), d.specularIntensityMap && (p.specularIntensityMap.value = d.specularIntensityMap, t(d.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, d) {
    d.matcap && (p.matcap.value = d.matcap);
  }
  function v(p, d) {
    const A = e.get(d).light;
    p.referencePosition.value.setFromMatrixPosition(A.matrixWorld), p.nearDistance.value = A.shadow.camera.near, p.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Vu(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(A, S) {
    const y = S.program;
    n.uniformBlockBinding(A, y);
  }
  function c(A, S) {
    let y = r[A.id];
    y === void 0 && (g(A), y = h(A), r[A.id] = y, A.addEventListener("dispose", p));
    const b = S.program;
    n.updateUBOMapping(A, b);
    const L = e.render.frame;
    s[A.id] !== L && (u(A), s[A.id] = L);
  }
  function h(A) {
    const S = f();
    A.__bindingPointIndex = S;
    const y = i.createBuffer(), b = A.__size, L = A.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, y), i.bufferData(i.UNIFORM_BUFFER, b, L), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, S, y), y;
  }
  function f() {
    for (let A = 0; A < a; A++)
      if (o.indexOf(A) === -1)
        return o.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(A) {
    const S = r[A.id], y = A.uniforms, b = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, S);
    for (let L = 0, w = y.length; L < w; L++) {
      const W = y[L];
      if (m(W, L, b) === !0) {
        const M = W.__offset, T = Array.isArray(W.value) ? W.value : [W.value];
        let C = 0;
        for (let B = 0; B < T.length; B++) {
          const $ = T[B], P = v($);
          typeof $ == "number" ? (W.__data[0] = $, i.bufferSubData(i.UNIFORM_BUFFER, M + C, W.__data)) : $.isMatrix3 ? (W.__data[0] = $.elements[0], W.__data[1] = $.elements[1], W.__data[2] = $.elements[2], W.__data[3] = $.elements[0], W.__data[4] = $.elements[3], W.__data[5] = $.elements[4], W.__data[6] = $.elements[5], W.__data[7] = $.elements[0], W.__data[8] = $.elements[6], W.__data[9] = $.elements[7], W.__data[10] = $.elements[8], W.__data[11] = $.elements[0]) : ($.toArray(W.__data, C), C += P.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        i.bufferSubData(i.UNIFORM_BUFFER, M, W.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(A, S, y) {
    const b = A.value;
    if (y[S] === void 0) {
      if (typeof b == "number")
        y[S] = b;
      else {
        const L = Array.isArray(b) ? b : [b], w = [];
        for (let W = 0; W < L.length; W++)
          w.push(L[W].clone());
        y[S] = w;
      }
      return !0;
    } else if (typeof b == "number") {
      if (y[S] !== b)
        return y[S] = b, !0;
    } else {
      const L = Array.isArray(y[S]) ? y[S] : [y[S]], w = Array.isArray(b) ? b : [b];
      for (let W = 0; W < L.length; W++) {
        const M = L[W];
        if (M.equals(w[W]) === !1)
          return M.copy(w[W]), !0;
      }
    }
    return !1;
  }
  function g(A) {
    const S = A.uniforms;
    let y = 0;
    const b = 16;
    let L = 0;
    for (let w = 0, W = S.length; w < W; w++) {
      const M = S[w], T = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, C = Array.isArray(M.value) ? M.value : [M.value];
      for (let B = 0, $ = C.length; B < $; B++) {
        const P = C[B], H = v(P);
        T.boundary += H.boundary, T.storage += H.storage;
      }
      if (M.__data = new Float32Array(T.storage / Float32Array.BYTES_PER_ELEMENT), M.__offset = y, w > 0) {
        L = y % b;
        const B = b - L;
        L !== 0 && B - T.boundary < 0 && (y += b - L, M.__offset = y);
      }
      y += T.storage;
    }
    return L = y % b, L > 0 && (y += b - L), A.__size = y, A.__cache = {}, this;
  }
  function v(A) {
    const S = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof A == "number" ? (S.boundary = 4, S.storage = 4) : A.isVector2 ? (S.boundary = 8, S.storage = 8) : A.isVector3 || A.isColor ? (S.boundary = 16, S.storage = 12) : A.isVector4 ? (S.boundary = 16, S.storage = 16) : A.isMatrix3 ? (S.boundary = 48, S.storage = 48) : A.isMatrix4 ? (S.boundary = 64, S.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), S;
  }
  function p(A) {
    const S = A.target;
    S.removeEventListener("dispose", p);
    const y = o.indexOf(S.__bindingPointIndex);
    o.splice(y, 1), i.deleteBuffer(r[S.id]), delete r[S.id], delete s[S.id];
  }
  function d() {
    for (const A in r)
      i.deleteBuffer(r[A]);
    o = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: d
  };
}
class pa {
  constructor(e = {}) {
    const {
      canvas: t = Ga(),
      context: n = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let u;
    n !== null ? u = n.getContextAttributes().alpha : u = o;
    const m = new Uint32Array(4), g = new Int32Array(4);
    let v = null, p = null;
    const d = [], A = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = dt, this._useLegacyLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
    const S = this;
    let y = !1, b = 0, L = 0, w = null, W = -1, M = null;
    const T = new et(), C = new et();
    let B = null;
    const $ = new ze(0);
    let P = 0, H = t.width, q = t.height, k = 1, K = null, j = null;
    const Y = new et(0, 0, H, q), U = new et(0, 0, H, q);
    let V = !1;
    const se = new la();
    let le = !1, oe = !1, pe = null;
    const Re = new Ge(), _e = new Pe(), Ce = new D(), Ze = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ue() {
      return w === null ? k : 1;
    }
    let F = n;
    function At(x, I) {
      for (let O = 0; O < x.length; O++) {
        const z = x[O], G = t.getContext(z, I);
        if (G !== null)
          return G;
      }
      return null;
    }
    try {
      const x = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: f
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ur}`), t.addEventListener("webglcontextlost", Be, !1), t.addEventListener("webglcontextrestored", R, !1), t.addEventListener("webglcontextcreationerror", ae, !1), F === null) {
        const I = ["webgl2", "webgl", "experimental-webgl"];
        if (S.isWebGL1Renderer === !0 && I.shift(), F = At(I, x), F === null)
          throw At(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && F instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), F.getShaderPrecisionFormat === void 0 && (F.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let me, Te, ye, Ke, Ie, Fe, qe, at, ft, E, _, N, Q, Z, ee, de, re, ce, Se, He, J, We, Ae, Me;
    function ge() {
      me = new Jc(F), Te = new qc(F, me, e), me.init(Te), We = new Nu(F, me, Te), ye = new Iu(F, me, Te), Ke = new th(F), Ie = new Su(), Fe = new Fu(F, me, ye, Ie, Te, We, Ke), qe = new $c(S), at = new Kc(S), ft = new ho(F, Te), Ae = new Wc(F, me, ft, Te), E = new Qc(F, ft, Ke, Ae), _ = new sh(F, E, ft, Ke), Se = new rh(F, Te, Fe), de = new Yc(Ie), N = new xu(S, qe, at, me, Te, Ae, de), Q = new Hu(S, Ie), Z = new Eu(), ee = new Ru(me, Te), ce = new kc(S, qe, at, ye, _, u, l), re = new Uu(S, _, Te), Me = new Vu(F, Ke, Te, ye), He = new Xc(F, me, Ke, Te), J = new eh(F, me, Ke, Te), Ke.programs = N.programs, S.capabilities = Te, S.extensions = me, S.properties = Ie, S.renderLists = Z, S.shadowMap = re, S.state = ye, S.info = Ke;
    }
    ge();
    const ue = new Gu(S, F);
    this.xr = ue, this.getContext = function() {
      return F;
    }, this.getContextAttributes = function() {
      return F.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = me.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = me.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (k = x, this.setSize(H, q, !1));
    }, this.getSize = function(x) {
      return x.set(H, q);
    }, this.setSize = function(x, I, O = !0) {
      if (ue.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      H = x, q = I, t.width = Math.floor(x * k), t.height = Math.floor(I * k), O === !0 && (t.style.width = x + "px", t.style.height = I + "px"), this.setViewport(0, 0, x, I);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(H * k, q * k).floor();
    }, this.setDrawingBufferSize = function(x, I, O) {
      H = x, q = I, k = O, t.width = Math.floor(x * O), t.height = Math.floor(I * O), this.setViewport(0, 0, x, I);
    }, this.getCurrentViewport = function(x) {
      return x.copy(T);
    }, this.getViewport = function(x) {
      return x.copy(Y);
    }, this.setViewport = function(x, I, O, z) {
      x.isVector4 ? Y.set(x.x, x.y, x.z, x.w) : Y.set(x, I, O, z), ye.viewport(T.copy(Y).multiplyScalar(k).floor());
    }, this.getScissor = function(x) {
      return x.copy(U);
    }, this.setScissor = function(x, I, O, z) {
      x.isVector4 ? U.set(x.x, x.y, x.z, x.w) : U.set(x, I, O, z), ye.scissor(C.copy(U).multiplyScalar(k).floor());
    }, this.getScissorTest = function() {
      return V;
    }, this.setScissorTest = function(x) {
      ye.setScissorTest(V = x);
    }, this.setOpaqueSort = function(x) {
      K = x;
    }, this.setTransparentSort = function(x) {
      j = x;
    }, this.getClearColor = function(x) {
      return x.copy(ce.getClearColor());
    }, this.setClearColor = function() {
      ce.setClearColor.apply(ce, arguments);
    }, this.getClearAlpha = function() {
      return ce.getClearAlpha();
    }, this.setClearAlpha = function() {
      ce.setClearAlpha.apply(ce, arguments);
    }, this.clear = function(x = !0, I = !0, O = !0) {
      let z = 0;
      if (x) {
        let G = !1;
        if (w !== null) {
          const he = w.texture.format;
          G = he === 1033 || he === 1031 || he === 1029;
        }
        if (G) {
          const he = w.texture.type, fe = he === 1009 || he === 1014 || he === 1012 || he === 1020 || he === 1017 || he === 1018, xe = ce.getClearColor(), Ee = ce.getClearAlpha(), De = xe.r, be = xe.g, we = xe.b;
          fe ? (m[0] = De, m[1] = be, m[2] = we, m[3] = Ee, F.clearBufferuiv(F.COLOR, 0, m)) : (g[0] = De, g[1] = be, g[2] = we, g[3] = Ee, F.clearBufferiv(F.COLOR, 0, g));
        } else
          z |= F.COLOR_BUFFER_BIT;
      }
      I && (z |= F.DEPTH_BUFFER_BIT), O && (z |= F.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), F.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Be, !1), t.removeEventListener("webglcontextrestored", R, !1), t.removeEventListener("webglcontextcreationerror", ae, !1), Z.dispose(), ee.dispose(), Ie.dispose(), qe.dispose(), at.dispose(), _.dispose(), Ae.dispose(), Me.dispose(), N.dispose(), ue.dispose(), ue.removeEventListener("sessionstart", It), ue.removeEventListener("sessionend", Ye), pe && (pe.dispose(), pe = null), vt.stop();
    };
    function Be(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function R() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const x = Ke.autoReset, I = re.enabled, O = re.autoUpdate, z = re.needsUpdate, G = re.type;
      ge(), Ke.autoReset = x, re.enabled = I, re.autoUpdate = O, re.needsUpdate = z, re.type = G;
    }
    function ae(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function te(x) {
      const I = x.target;
      I.removeEventListener("dispose", te), X(I);
    }
    function X(x) {
      ie(x), Ie.remove(x);
    }
    function ie(x) {
      const I = Ie.get(x).programs;
      I !== void 0 && (I.forEach(function(O) {
        N.releaseProgram(O);
      }), x.isShaderMaterial && N.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, I, O, z, G, he) {
      I === null && (I = Ze);
      const fe = G.isMesh && G.matrixWorld.determinant() < 0, xe = Ma(x, I, O, z, G);
      ye.setMaterial(z, fe);
      let Ee = O.index, De = 1;
      if (z.wireframe === !0) {
        if (Ee = E.getWireframeAttribute(O), Ee === void 0)
          return;
        De = 2;
      }
      const be = O.drawRange, we = O.attributes.position;
      let Qe = be.start * De, bt = (be.start + be.count) * De;
      he !== null && (Qe = Math.max(Qe, he.start * De), bt = Math.min(bt, (he.start + he.count) * De)), Ee !== null ? (Qe = Math.max(Qe, 0), bt = Math.min(bt, Ee.count)) : we != null && (Qe = Math.max(Qe, 0), bt = Math.min(bt, we.count));
      const ot = bt - Qe;
      if (ot < 0 || ot === 1 / 0)
        return;
      Ae.setup(G, z, xe, O, Ee);
      let Zt, Je = He;
      if (Ee !== null && (Zt = ft.get(Ee), Je = J, Je.setIndex(Zt)), G.isMesh)
        z.wireframe === !0 ? (ye.setLineWidth(z.wireframeLinewidth * Ue()), Je.setMode(F.LINES)) : Je.setMode(F.TRIANGLES);
      else if (G.isLine) {
        let Oe = z.linewidth;
        Oe === void 0 && (Oe = 1), ye.setLineWidth(Oe * Ue()), G.isLineSegments ? Je.setMode(F.LINES) : G.isLineLoop ? Je.setMode(F.LINE_LOOP) : Je.setMode(F.LINE_STRIP);
      } else
        G.isPoints ? Je.setMode(F.POINTS) : G.isSprite && Je.setMode(F.TRIANGLES);
      if (G.isInstancedMesh)
        Je.renderInstances(Qe, ot, G.count);
      else if (O.isInstancedBufferGeometry) {
        const Oe = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, Zi = Math.min(O.instanceCount, Oe);
        Je.renderInstances(Qe, ot, Zi);
      } else
        Je.render(Qe, ot);
    };
    function ve(x, I, O) {
      x.transparent === !0 && x.side === 2 && x.forceSinglePass === !1 ? (x.side = 1, x.needsUpdate = !0, ui(x, I, O), x.side = 0, x.needsUpdate = !0, ui(x, I, O), x.side = 2) : ui(x, I, O);
    }
    this.compile = function(x, I, O = null) {
      O === null && (O = x), p = ee.get(O), p.init(), A.push(p), O.traverseVisible(function(G) {
        G.isLight && G.layers.test(I.layers) && (p.pushLight(G), G.castShadow && p.pushShadow(G));
      }), x !== O && x.traverseVisible(function(G) {
        G.isLight && G.layers.test(I.layers) && (p.pushLight(G), G.castShadow && p.pushShadow(G));
      }), p.setupLights(S._useLegacyLights);
      const z = /* @__PURE__ */ new Set();
      return x.traverse(function(G) {
        const he = G.material;
        if (he)
          if (Array.isArray(he))
            for (let fe = 0; fe < he.length; fe++) {
              const xe = he[fe];
              ve(xe, O, G), z.add(xe);
            }
          else
            ve(he, O, G), z.add(he);
      }), A.pop(), p = null, z;
    }, this.compileAsync = function(x, I, O = null) {
      const z = this.compile(x, I, O);
      return new Promise((G) => {
        function he() {
          if (z.forEach(function(fe) {
            Ie.get(fe).currentProgram.isReady() && z.delete(fe);
          }), z.size === 0) {
            G(x);
            return;
          }
          setTimeout(he, 10);
        }
        me.get("KHR_parallel_shader_compile") !== null ? he() : setTimeout(he, 10);
      });
    };
    let Ve = null;
    function tt(x) {
      Ve && Ve(x);
    }
    function It() {
      vt.stop();
    }
    function Ye() {
      vt.start();
    }
    const vt = new ca();
    vt.setAnimationLoop(tt), typeof self < "u" && vt.setContext(self), this.setAnimationLoop = function(x) {
      Ve = x, ue.setAnimationLoop(x), x === null ? vt.stop() : vt.start();
    }, ue.addEventListener("sessionstart", It), ue.addEventListener("sessionend", Ye), this.render = function(x, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0)
        return;
      x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), ue.enabled === !0 && ue.isPresenting === !0 && (ue.cameraAutoUpdate === !0 && ue.updateCamera(I), I = ue.getCamera()), x.isScene === !0 && x.onBeforeRender(S, x, I, w), p = ee.get(x, A.length), p.init(), A.push(p), Re.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), se.setFromProjectionMatrix(Re), oe = this.localClippingEnabled, le = de.init(this.clippingPlanes, oe), v = Z.get(x, d.length), v.init(), d.push(v), Wt(x, I, 0, S.sortObjects), v.finish(), S.sortObjects === !0 && v.sort(K, j), this.info.render.frame++, le === !0 && de.beginShadows();
      const O = p.state.shadowsArray;
      if (re.render(O, x, I), le === !0 && de.endShadows(), this.info.autoReset === !0 && this.info.reset(), ce.render(v, x), p.setupLights(S._useLegacyLights), I.isArrayCamera) {
        const z = I.cameras;
        for (let G = 0, he = z.length; G < he; G++) {
          const fe = z[G];
          kr(v, x, fe, fe.viewport);
        }
      } else
        kr(v, x, I);
      w !== null && (Fe.updateMultisampleRenderTarget(w), Fe.updateRenderTargetMipmap(w)), x.isScene === !0 && x.onAfterRender(S, x, I), Ae.resetDefaultState(), W = -1, M = null, A.pop(), A.length > 0 ? p = A[A.length - 1] : p = null, d.pop(), d.length > 0 ? v = d[d.length - 1] : v = null;
    };
    function Wt(x, I, O, z) {
      if (x.visible === !1)
        return;
      if (x.layers.test(I.layers)) {
        if (x.isGroup)
          O = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(I);
        else if (x.isLight)
          p.pushLight(x), x.castShadow && p.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || se.intersectsSprite(x)) {
            z && Ce.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Re);
            const fe = _.update(x), xe = x.material;
            xe.visible && v.push(x, fe, xe, O, Ce.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || se.intersectsObject(x))) {
          const fe = _.update(x), xe = x.material;
          if (z && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Ce.copy(x.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), Ce.copy(fe.boundingSphere.center)), Ce.applyMatrix4(x.matrixWorld).applyMatrix4(Re)), Array.isArray(xe)) {
            const Ee = fe.groups;
            for (let De = 0, be = Ee.length; De < be; De++) {
              const we = Ee[De], Qe = xe[we.materialIndex];
              Qe && Qe.visible && v.push(x, fe, Qe, O, Ce.z, we);
            }
          } else
            xe.visible && v.push(x, fe, xe, O, Ce.z, null);
        }
      }
      const he = x.children;
      for (let fe = 0, xe = he.length; fe < xe; fe++)
        Wt(he[fe], I, O, z);
    }
    function kr(x, I, O, z) {
      const G = x.opaque, he = x.transmissive, fe = x.transparent;
      p.setupLightsView(O), le === !0 && de.setGlobalState(S.clippingPlanes, O), he.length > 0 && Sa(G, he, I, O), z && ye.viewport(T.copy(z)), G.length > 0 && hi(G, I, O), he.length > 0 && hi(he, I, O), fe.length > 0 && hi(fe, I, O), ye.buffers.depth.setTest(!0), ye.buffers.depth.setMask(!0), ye.buffers.color.setMask(!0), ye.setPolygonOffset(!1);
    }
    function Sa(x, I, O, z) {
      if ((O.isScene === !0 ? O.overrideMaterial : null) !== null)
        return;
      const he = Te.isWebGL2;
      pe === null && (pe = new kt(1, 1, {
        generateMipmaps: !0,
        type: me.has("EXT_color_buffer_half_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: he ? 4 : 0
      })), S.getDrawingBufferSize(_e), he ? pe.setSize(_e.x, _e.y) : pe.setSize(Wi(_e.x), Wi(_e.y));
      const fe = S.getRenderTarget();
      S.setRenderTarget(pe), S.getClearColor($), P = S.getClearAlpha(), P < 1 && S.setClearColor(16777215, 0.5), S.clear();
      const xe = S.toneMapping;
      S.toneMapping = 0, hi(x, O, z), Fe.updateMultisampleRenderTarget(pe), Fe.updateRenderTargetMipmap(pe);
      let Ee = !1;
      for (let De = 0, be = I.length; De < be; De++) {
        const we = I[De], Qe = we.object, bt = we.geometry, ot = we.material, Zt = we.group;
        if (ot.side === 2 && Qe.layers.test(z.layers)) {
          const Je = ot.side;
          ot.side = 1, ot.needsUpdate = !0, Wr(Qe, O, z, bt, ot, Zt), ot.side = Je, ot.needsUpdate = !0, Ee = !0;
        }
      }
      Ee === !0 && (Fe.updateMultisampleRenderTarget(pe), Fe.updateRenderTargetMipmap(pe)), S.setRenderTarget(fe), S.setClearColor($, P), S.toneMapping = xe;
    }
    function hi(x, I, O) {
      const z = I.isScene === !0 ? I.overrideMaterial : null;
      for (let G = 0, he = x.length; G < he; G++) {
        const fe = x[G], xe = fe.object, Ee = fe.geometry, De = z === null ? fe.material : z, be = fe.group;
        xe.layers.test(O.layers) && Wr(xe, I, O, Ee, De, be);
      }
    }
    function Wr(x, I, O, z, G, he) {
      x.onBeforeRender(S, I, O, z, G, he), x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), G.onBeforeRender(S, I, O, z, x, he), G.transparent === !0 && G.side === 2 && G.forceSinglePass === !1 ? (G.side = 1, G.needsUpdate = !0, S.renderBufferDirect(O, I, z, G, x, he), G.side = 0, G.needsUpdate = !0, S.renderBufferDirect(O, I, z, G, x, he), G.side = 2) : S.renderBufferDirect(O, I, z, G, x, he), x.onAfterRender(S, I, O, z, G, he);
    }
    function ui(x, I, O) {
      I.isScene !== !0 && (I = Ze);
      const z = Ie.get(x), G = p.state.lights, he = p.state.shadowsArray, fe = G.state.version, xe = N.getParameters(x, G.state, he, I, O), Ee = N.getProgramCacheKey(xe);
      let De = z.programs;
      z.environment = x.isMeshStandardMaterial ? I.environment : null, z.fog = I.fog, z.envMap = (x.isMeshStandardMaterial ? at : qe).get(x.envMap || z.environment), De === void 0 && (x.addEventListener("dispose", te), De = /* @__PURE__ */ new Map(), z.programs = De);
      let be = De.get(Ee);
      if (be !== void 0) {
        if (z.currentProgram === be && z.lightsStateVersion === fe)
          return qr(x, xe), be;
      } else
        xe.uniforms = N.getUniforms(x), x.onBuild(O, xe, S), x.onBeforeCompile(xe, S), be = N.acquireProgram(xe, Ee), De.set(Ee, be), z.uniforms = xe.uniforms;
      const we = z.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (we.clippingPlanes = de.uniform), qr(x, xe), z.needsLights = ya(x), z.lightsStateVersion = fe, z.needsLights && (we.ambientLightColor.value = G.state.ambient, we.lightProbe.value = G.state.probe, we.directionalLights.value = G.state.directional, we.directionalLightShadows.value = G.state.directionalShadow, we.spotLights.value = G.state.spot, we.spotLightShadows.value = G.state.spotShadow, we.rectAreaLights.value = G.state.rectArea, we.ltc_1.value = G.state.rectAreaLTC1, we.ltc_2.value = G.state.rectAreaLTC2, we.pointLights.value = G.state.point, we.pointLightShadows.value = G.state.pointShadow, we.hemisphereLights.value = G.state.hemi, we.directionalShadowMap.value = G.state.directionalShadowMap, we.directionalShadowMatrix.value = G.state.directionalShadowMatrix, we.spotShadowMap.value = G.state.spotShadowMap, we.spotLightMatrix.value = G.state.spotLightMatrix, we.spotLightMap.value = G.state.spotLightMap, we.pointShadowMap.value = G.state.pointShadowMap, we.pointShadowMatrix.value = G.state.pointShadowMatrix), z.currentProgram = be, z.uniformsList = null, be;
    }
    function Xr(x) {
      if (x.uniformsList === null) {
        const I = x.currentProgram.getUniforms();
        x.uniformsList = Gi.seqWithValue(I.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function qr(x, I) {
      const O = Ie.get(x);
      O.outputColorSpace = I.outputColorSpace, O.instancing = I.instancing, O.instancingColor = I.instancingColor, O.skinning = I.skinning, O.morphTargets = I.morphTargets, O.morphNormals = I.morphNormals, O.morphColors = I.morphColors, O.morphTargetsCount = I.morphTargetsCount, O.numClippingPlanes = I.numClippingPlanes, O.numIntersection = I.numClipIntersection, O.vertexAlphas = I.vertexAlphas, O.vertexTangents = I.vertexTangents, O.toneMapping = I.toneMapping;
    }
    function Ma(x, I, O, z, G) {
      I.isScene !== !0 && (I = Ze), Fe.resetTextureUnits();
      const he = I.fog, fe = z.isMeshStandardMaterial ? I.environment : null, xe = w === null ? S.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : rn, Ee = (z.isMeshStandardMaterial ? at : qe).get(z.envMap || fe), De = z.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4, be = !!O.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), we = !!O.morphAttributes.position, Qe = !!O.morphAttributes.normal, bt = !!O.morphAttributes.color;
      let ot = 0;
      z.toneMapped && (w === null || w.isXRRenderTarget === !0) && (ot = S.toneMapping);
      const Zt = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Je = Zt !== void 0 ? Zt.length : 0, Oe = Ie.get(z), Zi = p.state.lights;
      if (le === !0 && (oe === !0 || x !== M)) {
        const wt = x === M && z.id === W;
        de.setState(z, x, wt);
      }
      let nt = !1;
      z.version === Oe.__version ? (Oe.needsLights && Oe.lightsStateVersion !== Zi.state.version || Oe.outputColorSpace !== xe || G.isInstancedMesh && Oe.instancing === !1 || !G.isInstancedMesh && Oe.instancing === !0 || G.isSkinnedMesh && Oe.skinning === !1 || !G.isSkinnedMesh && Oe.skinning === !0 || G.isInstancedMesh && Oe.instancingColor === !0 && G.instanceColor === null || G.isInstancedMesh && Oe.instancingColor === !1 && G.instanceColor !== null || Oe.envMap !== Ee || z.fog === !0 && Oe.fog !== he || Oe.numClippingPlanes !== void 0 && (Oe.numClippingPlanes !== de.numPlanes || Oe.numIntersection !== de.numIntersection) || Oe.vertexAlphas !== De || Oe.vertexTangents !== be || Oe.morphTargets !== we || Oe.morphNormals !== Qe || Oe.morphColors !== bt || Oe.toneMapping !== ot || Te.isWebGL2 === !0 && Oe.morphTargetsCount !== Je) && (nt = !0) : (nt = !0, Oe.__version = z.version);
      let dn = Oe.currentProgram;
      nt === !0 && (dn = ui(z, I, G));
      let Yr = !1, Jn = !1, Ki = !1;
      const xt = dn.getUniforms(), fn = Oe.uniforms;
      if (ye.useProgram(dn.program) && (Yr = !0, Jn = !0, Ki = !0), z.id !== W && (W = z.id, Jn = !0), Yr || M !== x) {
        xt.setValue(F, "projectionMatrix", x.projectionMatrix), xt.setValue(F, "viewMatrix", x.matrixWorldInverse);
        const wt = xt.map.cameraPosition;
        wt !== void 0 && wt.setValue(F, Ce.setFromMatrixPosition(x.matrixWorld)), Te.logarithmicDepthBuffer && xt.setValue(
          F,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && xt.setValue(F, "isOrthographic", x.isOrthographicCamera === !0), M !== x && (M = x, Jn = !0, Ki = !0);
      }
      if (G.isSkinnedMesh) {
        xt.setOptional(F, G, "bindMatrix"), xt.setOptional(F, G, "bindMatrixInverse");
        const wt = G.skeleton;
        wt && (Te.floatVertexTextures ? (wt.boneTexture === null && wt.computeBoneTexture(), xt.setValue(F, "boneTexture", wt.boneTexture, Fe), xt.setValue(F, "boneTextureSize", wt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const Ji = O.morphAttributes;
      if ((Ji.position !== void 0 || Ji.normal !== void 0 || Ji.color !== void 0 && Te.isWebGL2 === !0) && Se.update(G, O, dn), (Jn || Oe.receiveShadow !== G.receiveShadow) && (Oe.receiveShadow = G.receiveShadow, xt.setValue(F, "receiveShadow", G.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (fn.envMap.value = Ee, fn.flipEnvMap.value = Ee.isCubeTexture && Ee.isRenderTargetTexture === !1 ? -1 : 1), Jn && (xt.setValue(F, "toneMappingExposure", S.toneMappingExposure), Oe.needsLights && Ea(fn, Ki), he && z.fog === !0 && Q.refreshFogUniforms(fn, he), Q.refreshMaterialUniforms(fn, z, k, q, pe), Gi.upload(F, Xr(Oe), fn, Fe)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (Gi.upload(F, Xr(Oe), fn, Fe), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && xt.setValue(F, "center", G.center), xt.setValue(F, "modelViewMatrix", G.modelViewMatrix), xt.setValue(F, "normalMatrix", G.normalMatrix), xt.setValue(F, "modelMatrix", G.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const wt = z.uniformsGroups;
        for (let Qi = 0, Ta = wt.length; Qi < Ta; Qi++)
          if (Te.isWebGL2) {
            const $r = wt[Qi];
            Me.update($r, dn), Me.bind($r, dn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return dn;
    }
    function Ea(x, I) {
      x.ambientLightColor.needsUpdate = I, x.lightProbe.needsUpdate = I, x.directionalLights.needsUpdate = I, x.directionalLightShadows.needsUpdate = I, x.pointLights.needsUpdate = I, x.pointLightShadows.needsUpdate = I, x.spotLights.needsUpdate = I, x.spotLightShadows.needsUpdate = I, x.rectAreaLights.needsUpdate = I, x.hemisphereLights.needsUpdate = I;
    }
    function ya(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return b;
    }, this.getActiveMipmapLevel = function() {
      return L;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(x, I, O) {
      Ie.get(x.texture).__webglTexture = I, Ie.get(x.depthTexture).__webglTexture = O;
      const z = Ie.get(x);
      z.__hasExternalTextures = !0, z.__hasExternalTextures && (z.__autoAllocateDepthBuffer = O === void 0, z.__autoAllocateDepthBuffer || me.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(x, I) {
      const O = Ie.get(x);
      O.__webglFramebuffer = I, O.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(x, I = 0, O = 0) {
      w = x, b = I, L = O;
      let z = !0, G = null, he = !1, fe = !1;
      if (x) {
        const Ee = Ie.get(x);
        Ee.__useDefaultFramebuffer !== void 0 ? (ye.bindFramebuffer(F.FRAMEBUFFER, null), z = !1) : Ee.__webglFramebuffer === void 0 ? Fe.setupRenderTarget(x) : Ee.__hasExternalTextures && Fe.rebindTextures(x, Ie.get(x.texture).__webglTexture, Ie.get(x.depthTexture).__webglTexture);
        const De = x.texture;
        (De.isData3DTexture || De.isDataArrayTexture || De.isCompressedArrayTexture) && (fe = !0);
        const be = Ie.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(be[I]) ? G = be[I][O] : G = be[I], he = !0) : Te.isWebGL2 && x.samples > 0 && Fe.useMultisampledRTT(x) === !1 ? G = Ie.get(x).__webglMultisampledFramebuffer : Array.isArray(be) ? G = be[O] : G = be, T.copy(x.viewport), C.copy(x.scissor), B = x.scissorTest;
      } else
        T.copy(Y).multiplyScalar(k).floor(), C.copy(U).multiplyScalar(k).floor(), B = V;
      if (ye.bindFramebuffer(F.FRAMEBUFFER, G) && Te.drawBuffers && z && ye.drawBuffers(x, G), ye.viewport(T), ye.scissor(C), ye.setScissorTest(B), he) {
        const Ee = Ie.get(x.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_CUBE_MAP_POSITIVE_X + I, Ee.__webglTexture, O);
      } else if (fe) {
        const Ee = Ie.get(x.texture), De = I || 0;
        F.framebufferTextureLayer(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, Ee.__webglTexture, O || 0, De);
      }
      W = -1;
    }, this.readRenderTargetPixels = function(x, I, O, z, G, he, fe) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let xe = Ie.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && fe !== void 0 && (xe = xe[fe]), xe) {
        ye.bindFramebuffer(F.FRAMEBUFFER, xe);
        try {
          const Ee = x.texture, De = Ee.format, be = Ee.type;
          if (De !== 1023 && We.convert(De) !== F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const we = be === 1016 && (me.has("EXT_color_buffer_half_float") || Te.isWebGL2 && me.has("EXT_color_buffer_float"));
          if (be !== 1009 && We.convert(be) !== F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(be === 1015 && (Te.isWebGL2 || me.has("OES_texture_float") || me.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !we) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= x.width - z && O >= 0 && O <= x.height - G && F.readPixels(I, O, z, G, We.convert(De), We.convert(be), he);
        } finally {
          const Ee = w !== null ? Ie.get(w).__webglFramebuffer : null;
          ye.bindFramebuffer(F.FRAMEBUFFER, Ee);
        }
      }
    }, this.copyFramebufferToTexture = function(x, I, O = 0) {
      const z = Math.pow(2, -O), G = Math.floor(I.image.width * z), he = Math.floor(I.image.height * z);
      Fe.setTexture2D(I, 0), F.copyTexSubImage2D(F.TEXTURE_2D, O, 0, 0, x.x, x.y, G, he), ye.unbindTexture();
    }, this.copyTextureToTexture = function(x, I, O, z = 0) {
      const G = I.image.width, he = I.image.height, fe = We.convert(O.format), xe = We.convert(O.type);
      Fe.setTexture2D(O, 0), F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, O.flipY), F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), F.pixelStorei(F.UNPACK_ALIGNMENT, O.unpackAlignment), I.isDataTexture ? F.texSubImage2D(F.TEXTURE_2D, z, x.x, x.y, G, he, fe, xe, I.image.data) : I.isCompressedTexture ? F.compressedTexSubImage2D(F.TEXTURE_2D, z, x.x, x.y, I.mipmaps[0].width, I.mipmaps[0].height, fe, I.mipmaps[0].data) : F.texSubImage2D(F.TEXTURE_2D, z, x.x, x.y, fe, xe, I.image), z === 0 && O.generateMipmaps && F.generateMipmap(F.TEXTURE_2D), ye.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, I, O, z, G = 0) {
      if (S.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const he = x.max.x - x.min.x + 1, fe = x.max.y - x.min.y + 1, xe = x.max.z - x.min.z + 1, Ee = We.convert(z.format), De = We.convert(z.type);
      let be;
      if (z.isData3DTexture)
        Fe.setTexture3D(z, 0), be = F.TEXTURE_3D;
      else if (z.isDataArrayTexture)
        Fe.setTexture2DArray(z, 0), be = F.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, z.flipY), F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha), F.pixelStorei(F.UNPACK_ALIGNMENT, z.unpackAlignment);
      const we = F.getParameter(F.UNPACK_ROW_LENGTH), Qe = F.getParameter(F.UNPACK_IMAGE_HEIGHT), bt = F.getParameter(F.UNPACK_SKIP_PIXELS), ot = F.getParameter(F.UNPACK_SKIP_ROWS), Zt = F.getParameter(F.UNPACK_SKIP_IMAGES), Je = O.isCompressedTexture ? O.mipmaps[0] : O.image;
      F.pixelStorei(F.UNPACK_ROW_LENGTH, Je.width), F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, Je.height), F.pixelStorei(F.UNPACK_SKIP_PIXELS, x.min.x), F.pixelStorei(F.UNPACK_SKIP_ROWS, x.min.y), F.pixelStorei(F.UNPACK_SKIP_IMAGES, x.min.z), O.isDataTexture || O.isData3DTexture ? F.texSubImage3D(be, G, I.x, I.y, I.z, he, fe, xe, Ee, De, Je.data) : O.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), F.compressedTexSubImage3D(be, G, I.x, I.y, I.z, he, fe, xe, Ee, Je.data)) : F.texSubImage3D(be, G, I.x, I.y, I.z, he, fe, xe, Ee, De, Je), F.pixelStorei(F.UNPACK_ROW_LENGTH, we), F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, Qe), F.pixelStorei(F.UNPACK_SKIP_PIXELS, bt), F.pixelStorei(F.UNPACK_SKIP_ROWS, ot), F.pixelStorei(F.UNPACK_SKIP_IMAGES, Zt), G === 0 && z.generateMipmaps && F.generateMipmap(be), ye.unbindTexture();
    }, this.initTexture = function(x) {
      x.isCubeTexture ? Fe.setTextureCube(x, 0) : x.isData3DTexture ? Fe.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? Fe.setTexture2DArray(x, 0) : Fe.setTexture2D(x, 0), ye.unbindTexture();
    }, this.resetState = function() {
      b = 0, L = 0, w = null, ye.reset(), Ae.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Ir ? "display-p3" : "srgb", t.unpackColorSpace = ke.workingColorSpace === qi ? "display-p3" : "srgb";
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === dt ? 3001 : 3e3;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === 3001 ? dt : rn;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class ku extends pa {
}
ku.prototype.isWebGL1Renderer = !0;
class Wu extends Et {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class Xu {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = nn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = nn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = nn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const St = /* @__PURE__ */ new D();
class hn {
  constructor(e, t, n, r = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.applyMatrix4(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.applyNormalMatrix(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.transformDirection(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), r = Xe(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), r = Xe(r, this.array), s = Xe(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
      }
      return new Pt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new hn(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class ma extends ci {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ze(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Fs = /* @__PURE__ */ new D(), Ns = /* @__PURE__ */ new D(), Os = /* @__PURE__ */ new Ge(), yr = /* @__PURE__ */ new Nr(), Ii = /* @__PURE__ */ new Yn();
class qu extends Et {
  constructor(e = new Tt(), t = new ma()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        Fs.fromBufferAttribute(t, r - 1), Ns.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Fs.distanceTo(Ns);
      e.setAttribute("lineDistance", new Dt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ii.copy(n.boundingSphere), Ii.applyMatrix4(r), Ii.radius += s, e.ray.intersectsSphere(Ii) === !1)
      return;
    Os.copy(r).invert(), yr.copy(e.ray).applyMatrix4(Os);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new D(), h = new D(), f = new D(), u = new D(), m = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position;
    if (g !== null) {
      const d = Math.max(0, o.start), A = Math.min(g.count, o.start + o.count);
      for (let S = d, y = A - 1; S < y; S += m) {
        const b = g.getX(S), L = g.getX(S + 1);
        if (c.fromBufferAttribute(p, b), h.fromBufferAttribute(p, L), yr.distanceSqToSegment(c, h, u, f) > l)
          continue;
        u.applyMatrix4(this.matrixWorld);
        const W = e.ray.origin.distanceTo(u);
        W < e.near || W > e.far || t.push({
          distance: W,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: f.clone().applyMatrix4(this.matrixWorld),
          index: S,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const d = Math.max(0, o.start), A = Math.min(p.count, o.start + o.count);
      for (let S = d, y = A - 1; S < y; S += m) {
        if (c.fromBufferAttribute(p, S), h.fromBufferAttribute(p, S + 1), yr.distanceSqToSegment(c, h, u, f) > l)
          continue;
        u.applyMatrix4(this.matrixWorld);
        const L = e.ray.origin.distanceTo(u);
        L < e.near || L > e.far || t.push({
          distance: L,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: f.clone().applyMatrix4(this.matrixWorld),
          index: S,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
class Yu extends Tt {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: e
    }, e !== null) {
      const t = [], n = /* @__PURE__ */ new Set(), r = new D(), s = new D();
      if (e.index !== null) {
        const o = e.attributes.position, a = e.index;
        let l = e.groups;
        l.length === 0 && (l = [{ start: 0, count: a.count, materialIndex: 0 }]);
        for (let c = 0, h = l.length; c < h; ++c) {
          const f = l[c], u = f.start, m = f.count;
          for (let g = u, v = u + m; g < v; g += 3)
            for (let p = 0; p < 3; p++) {
              const d = a.getX(g + p), A = a.getX(g + (p + 1) % 3);
              r.fromBufferAttribute(o, d), s.fromBufferAttribute(o, A), Bs(r, s, n) === !0 && (t.push(r.x, r.y, r.z), t.push(s.x, s.y, s.z));
            }
        }
      } else {
        const o = e.attributes.position;
        for (let a = 0, l = o.count / 3; a < l; a++)
          for (let c = 0; c < 3; c++) {
            const h = 3 * a + c, f = 3 * a + (c + 1) % 3;
            r.fromBufferAttribute(o, h), s.fromBufferAttribute(o, f), Bs(r, s, n) === !0 && (t.push(r.x, r.y, r.z), t.push(s.x, s.y, s.z));
          }
      }
      this.setAttribute("position", new Dt(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function Bs(i, e, t) {
  const n = `${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;
  return t.has(n) === !0 || t.has(r) === !0 ? !1 : (t.add(n), t.add(r), !0);
}
class $u extends _t {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class ju extends Et {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new ze(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class Zu extends ju {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Ku extends Tt {
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
}
class Ju {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = zs(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = zs();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function zs() {
  return (typeof performance > "u" ? Date : performance).now();
}
class Cr extends Xu {
  constructor(e, t, n = 1) {
    super(e, t), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  clone(e) {
    const t = super.clone(e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
  }
}
class Qu {
  constructor(e, t, n = 0, r = 1 / 0) {
    this.ray = new Nr(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new $i(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return Lr(e, this, n, t), n.sort(Gs), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let r = 0, s = e.length; r < s; r++)
      Lr(e[r], this, n, t);
    return n.sort(Gs), n;
  }
}
function Gs(i, e) {
  return i.distance - e.distance;
}
function Lr(i, e, t, n) {
  if (i.layers.test(e.layers) && i.raycast(e, t), n === !0) {
    const r = i.children;
    for (let s = 0, o = r.length; s < o; s++)
      Lr(r[s], e, t, !0);
  }
}
const Hs = /* @__PURE__ */ new D(), Fi = /* @__PURE__ */ new D();
class ed {
  constructor(e = new D(), t = new D()) {
    this.start = e, this.end = t;
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return e.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(e) {
    return e.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.start);
  }
  closestPointToPointParameter(e, t) {
    Hs.subVectors(e, this.start), Fi.subVectors(this.end, this.start);
    const n = Fi.dot(Fi);
    let s = Fi.dot(Hs) / n;
    return t && (s = gt(s, 0, 1)), s;
  }
  closestPointToPoint(e, t, n) {
    const r = this.closestPointToPointParameter(e, t);
    return this.delta(n).multiplyScalar(r).add(this.start);
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ur
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ur);
const Vs = 1024e3, td = 0.1 / 180 * Math.PI, ks = Math.atan(3 / 4), Ni = 63710088e-1, nd = 40075017, je = {
  WORLD_SIZE: Vs,
  PROJECTION_WORLD_SIZE: Vs / (Ni * Math.PI * 2),
  MERCATOR_A: Ni,
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  EARTH_RADIUS: Ni,
  EARTH_CIRCUMFERENCE: 2 * Math.PI * Ni,
  //40075000, // In meters
  EARTH_CIRCUMFERENCE_EQUATOR: nd,
  FOV_ORTHO: td,
  // closest to 0
  FOV: ks,
  // Math.atan(3/4) radians. If this value is changed, FOV_DEGREES must be calculated
  FOV_DEGREES: ks * 180 / Math.PI,
  // Math.atan(3/4) in degrees
  TILE_SIZE: 512
};
var Ut = {
  prettyPrintMatrix: function(i) {
    for (var e = 0; e < 4; e++) {
      var t = [
        i[e],
        i[e + 4],
        i[e + 8],
        i[e + 12]
      ];
      console.log(
        t.map(function(n) {
          return n.toFixed(4);
        })
      );
    }
  },
  makePerspectiveMatrix: function(i, e, t, n) {
    var r = new Ge(), s = 1 / Math.tan(i / 2), o = 1 / (t - n), a = [
      s / e,
      0,
      0,
      0,
      0,
      s,
      0,
      0,
      0,
      0,
      (n + t) * o,
      -1,
      0,
      0,
      2 * n * t * o,
      0
    ];
    return r.elements = a, r;
  },
  //[jscastro] new orthographic matrix calculations https://en.wikipedia.org/wiki/Orthographic_projection and validated with https://bit.ly/3rPvB9Y
  makeOrthographicMatrix: function(i, e, t, n, r, s) {
    var o = new Ge();
    const a = 1 / (e - i), l = 1 / (t - n), c = 1 / (s - r), h = (e + i) * a, f = (t + n) * l, u = r * c;
    var m = [
      2 * a,
      0,
      0,
      0,
      0,
      2 * l,
      0,
      0,
      0,
      0,
      -1 * c,
      0,
      -h,
      -f,
      -u,
      1
    ];
    return o.elements = m, o;
  },
  //gimme radians
  radify: function(i) {
    function e(t) {
      return t = t || 0, Math.PI * 2 * t / 360;
    }
    return typeof i == "object" ? i.length > 0 ? i.map(function(t) {
      return e(t);
    }) : [e(i.x), e(i.y), e(i.z)] : e(i);
  },
  //gimme degrees
  degreeify: function(i) {
    function e(t) {
      return t = t || 0, t * 360 / (Math.PI * 2);
    }
    return typeof i == "object" ? [e(i.x), e(i.y), e(i.z)] : e(i);
  },
  projectToWorld: function(i) {
    var e = [
      -je.MERCATOR_A * je.DEG2RAD * i[0] * je.PROJECTION_WORLD_SIZE,
      -je.MERCATOR_A * Math.log(
        Math.tan(
          Math.PI * 0.25 + 0.5 * je.DEG2RAD * i[1]
        )
      ) * je.PROJECTION_WORLD_SIZE
    ];
    if (!i[2])
      e.push(0);
    else {
      var t = this.projectedUnitsPerMeter(i[1]);
      e.push(i[2] * t);
    }
    var n = new D(
      e[0],
      e[1],
      e[2]
    );
    return n;
  },
  projectedUnitsPerMeter: function(i) {
    return Math.abs(
      je.WORLD_SIZE / Math.cos(je.DEG2RAD * i) / je.EARTH_CIRCUMFERENCE
    );
  },
  _circumferenceAtLatitude: function(i) {
    return je.EARTH_CIRCUMFERENCE * Math.cos(i * Math.PI / 180);
  },
  mercatorZfromAltitude: function(i, e) {
    return i / this._circumferenceAtLatitude(e);
  },
  _scaleVerticesToMeters: function(i, e) {
    var t = this.projectedUnitsPerMeter(i[1]);
    this.projectToWorld(i);
    for (var n = 0; n < e.length; n++)
      e[n].multiplyScalar(t);
    return e;
  },
  projectToScreen: function(i) {
    console.log(
      "WARNING: Projecting to screen coordinates is not yet implemented"
    );
  },
  unprojectFromScreen: function(i) {
    console.log("WARNING: unproject is not yet implemented");
  },
  //world units to lnglat
  unprojectFromWorld: function(i) {
    var e = [
      -i.x / (je.MERCATOR_A * je.DEG2RAD * je.PROJECTION_WORLD_SIZE),
      2 * (Math.atan(
        Math.exp(
          i.y / (je.PROJECTION_WORLD_SIZE * -je.MERCATOR_A)
        )
      ) - Math.PI / 4) / je.DEG2RAD
    ], t = this.projectedUnitsPerMeter(e[1]), n = i.z || 0;
    return e.push(n / t), e;
  },
  toScreenPosition: function(i, e) {
    var t = new D(), n = 0.5 * renderer.context.canvas.width, r = 0.5 * renderer.context.canvas.height;
    return i.updateMatrixWorld(), t.setFromMatrixPosition(i.matrixWorld), t.project(e), t.x = t.x * n + n, t.y = -(t.y * r) + r, {
      x: t.x,
      y: t.y
    };
  },
  //get the center point of a feature
  getFeatureCenter: function(e, t, n) {
    let r = [], s = 0, o = 0, a = 0, l = [...e.geometry.coordinates[0]];
    return e.geometry.type === "Point" ? r = [...l[0]] : (e.geometry.type === "MultiPolygon" && (l = l[0]), l.splice(-1, 1), l.forEach(function(c) {
      s += c[0], o += c[1];
    }), r = [
      s / l.length,
      o / l.length
    ]), a = this.getObjectHeightOnFloor(e, t, n), r.length < 3 ? r.push(a) : r[2] = a, r;
  },
  getObjectHeightOnFloor: function(i, e, t = i.properties.level || 0) {
    let n = t * (i.properties.levelHeight || 0), r = i.properties.base_height || i.properties.min_height || 0, o = (e && e.model ? 0 : i.properties.height - r) + r;
    return n + o;
  },
  _flipMaterialSides: function(i) {
  },
  // to improve precision, normalize a series of vector3's to their collective center, and move the resultant mesh to that center
  normalizeVertices(i) {
    let e = new Tt(), t = [];
    for (var n = 0; n < i.length; n++) {
      let o = i[n];
      t.push(o.x, o.y, o.z), t.push(o.x, o.y, o.z);
    }
    e.setAttribute(
      "position",
      new Pt(new Float32Array(t), 3)
    ), e.computeBoundingSphere();
    var r = e.boundingSphere.center, s = i.map(function(o) {
      var a = o.sub(r);
      return a;
    });
    return { vertices: s, position: r };
  },
  //flatten an array of Vector3's into a shallow array of values in x-y-z order, for bufferGeometry
  flattenVectors(i) {
    var e = [];
    for (let t of i)
      e.push(t.x, t.y, t.z);
    return e;
  },
  //convert a line/polygon to Vector3's
  lnglatsToWorld: function(i) {
    var e = i.map(function(t) {
      var n = Ut.projectToWorld(t), r = new D(n.x, n.y, n.z);
      return r;
    });
    return e;
  },
  extend: function(i, e) {
    for (let t in e)
      i[t] = e[t];
  },
  clone: function(i) {
    var e = {};
    for (let t in i)
      e[t] = i[t];
    return e;
  },
  clamp: function(i, e, t) {
    return Math.min(t, Math.max(e, i));
  },
  // retrieve object parameters from an options object
  types: {
    rotation: function(i, e) {
      i || (i = 0), typeof i == "number" && (i = { z: i });
      var t = this.applyDefault([i.x, i.y, i.z], e), n = Ut.radify(t);
      return n;
    },
    scale: function(i, e) {
      return i || (i = 1), typeof i == "number" ? i = [i, i, i] : this.applyDefault([i.x, i.y, i.z], e);
    },
    applyDefault: function(i, e) {
      var t = i.map(function(n, r) {
        return n = n || e[r], n;
      });
      return t;
    }
  },
  toDecimal: function(i, e) {
    return Number(i.toFixed(e));
  },
  equal: function(i, e) {
    const t = Object.keys(i), n = Object.keys(e);
    if (t.length !== n.length || t.length == 0 && n.length == 0 && t !== n)
      return !1;
    for (const r of t) {
      const s = i[r], o = e[r], a = this.isObject(s) && this.isObject(o);
      if (a && !equal(s, o) || !a && s !== o)
        return !1;
    }
    return !0;
  },
  isObject: function(i) {
    return i != null && typeof i == "object";
  },
  curveToLine: (i, e) => {
    let { width: t, color: n } = e, r = new Tt().setFromPoints(
      i.getPoints(100)
    ), s = new ma({
      color: n,
      linewidth: t
    });
    return new qu(r, s);
  },
  curvesToLines: (i) => {
    var e = [16711680, 2031360, 2490623], t = i.map((n, r) => {
      let s = {
        width: 3,
        color: e[r] || "purple"
      };
      return curveToLine(n, s);
    });
    return t;
  },
  _validate: function(i, e) {
    i = i || {};
    var t = {};
    Ut.extend(t, i);
    for (let n of Object.keys(e))
      if (i[n] === void 0)
        if (e[n] === null) {
          console.error(n + " is required");
          return;
        } else
          t[n] = e[n];
      else
        t[n] = i[n];
    return t;
  },
  // Validator: new validate(),
  exposedMethods: [
    "projectToWorld",
    "projectedUnitsPerMeter",
    "extend",
    "unprojectFromWorld"
  ]
};
function Pr(i, e, t) {
  this.map = i, this.camera = e, this.active = !0, this.camera.matrixAutoUpdate = !1, this.world = t || new Hn(), this.world.position.x = this.world.position.y = je.WORLD_SIZE / 2, this.world.matrixAutoUpdate = !1, this.state = {
    translateCenter: new Ge().makeTranslation(
      je.WORLD_SIZE / 2,
      -je.WORLD_SIZE / 2,
      0
    ),
    worldSizeRatio: je.TILE_SIZE / je.WORLD_SIZE,
    worldSize: je.TILE_SIZE * this.map.transform.scale
  };
  let n = this;
  this.map.on("move", function() {
    n.updateCamera();
  }).on("resize", function() {
    n.setupCamera();
  }), this.setupCamera();
}
Pr.prototype = {
  setupCamera: function() {
    const i = this.map.transform;
    this.camera.aspect = i.width / i.height, this.halfFov = i._fov / 2, this.cameraToCenterDistance = 0.5 / Math.tan(this.halfFov) * i.height;
    const e = i._maxPitch * Math.PI / 180;
    this.acuteAngle = Math.PI / 2 - e, this.updateCamera();
  },
  updateCamera: function(i) {
    if (!this.camera) {
      console.log("nocamera");
      return;
    }
    const e = this.map.transform;
    this.camera.aspect = e.width / e.height;
    const t = e.centerOffset || new D();
    let n = 0, r = 0;
    this.halfFov = e._fov / 2;
    const s = Math.PI / 2 + e._pitch, o = Math.cos(Math.PI / 2 - e._pitch);
    this.cameraToCenterDistance = 0.5 / Math.tan(this.halfFov) * e.height;
    let a = 1;
    const l = this.worldSize();
    var c = this.map.version.split("."), h = parseInt(c[0]);
    if (h >= 2) {
      a = this.mercatorZfromAltitude(1, e.center.lat) * l;
      const L = e._fov * (0.5 + e.centerOffset.y / e.height), w = e.elevation ? e.elevation.getMinElevationBelowMSL() * a : 0, W = (e._camera.position[2] * l - w) / Math.cos(e._pitch), M = Math.sin(L) * W / Math.sin(Ut.clamp(Math.PI - s - L, 0.01, Math.PI - 0.01));
      r = o * M + W;
      const T = W * (1 / e._horizonShift);
      n = Math.min(r * 1.01, T);
    } else {
      const L = Math.sin(this.halfFov) * this.cameraToCenterDistance / Math.sin(Math.PI - s - this.halfFov);
      r = o * L + this.cameraToCenterDistance, n = r * 1.01;
    }
    this.cameraTranslateZ = new Ge().makeTranslation(0, 0, this.cameraToCenterDistance);
    const f = e.height / 50, u = Math.max(f * o, f), m = e.height, g = e.width;
    this.camera instanceof Br ? this.camera.projectionMatrix = Ut.makeOrthographicMatrix(g / -2, g / 2, m / 2, m / -2, u, n) : this.camera.projectionMatrix = Ut.makePerspectiveMatrix(e._fov, g / m, u, n), this.camera.projectionMatrix.elements[8] = -t.x * 2 / e.width, this.camera.projectionMatrix.elements[9] = t.y * 2 / e.height;
    let v = this.calcCameraMatrix(e._pitch, e.angle);
    e.elevation && (v.elements[14] = e._camera.position[2] * l), this.camera.matrixWorld.copy(v);
    let p = e.scale * this.state.worldSizeRatio, d = new Ge(), A = new Ge(), S = new Ge();
    d.makeScale(p, p, p);
    let y = e.x || e.point.x, b = e.y || e.point.y;
    A.makeTranslation(-y, b, 0), S.makeRotationZ(Math.PI), this.world.matrix = new Ge().premultiply(S).premultiply(this.state.translateCenter).premultiply(d).premultiply(A), this.map.fire("CameraSynced", {
      detail: {
        nearZ: u,
        farZ: n,
        pitch: e._pitch,
        angle: e.angle,
        furthestDistance: r,
        cameraToCenterDistance: this.cameraToCenterDistance,
        t: this.map.transform,
        tbProjMatrix: this.camera.projectionMatrix.elements,
        tbWorldMatrix: this.world.matrix.elements,
        cameraSyn: Pr
      }
    });
  },
  worldSize() {
    let i = this.map.transform;
    return i.tileSize * i.scale;
  },
  worldSizeFromZoom() {
    let i = this.map.transform;
    return Math.pow(2, i.zoom) * i.tileSize;
  },
  mercatorZfromAltitude(i, e) {
    return i / this.circumferenceAtLatitude(e);
  },
  mercatorZfromZoom() {
    return this.cameraToCenterDistance / this.worldSizeFromZoom();
  },
  circumferenceAtLatitude(i) {
    return je.EARTH_CIRCUMFERENCE * Math.cos(i * Math.PI / 180);
  },
  calcCameraMatrix(i, e, t) {
    const n = this.map.transform, r = i === void 0 ? n._pitch : i, s = e === void 0 ? n.angle : e, o = t === void 0 ? this.cameraTranslateZ : t;
    return new Ge().premultiply(o).premultiply(new Ge().makeRotationX(r)).premultiply(new Ge().makeRotationZ(s));
  },
  updateCameraState() {
    let i = this.map.transform;
    if (!i.height)
      return;
    const e = i._camera.forward(), t = i.cameraToCenterDistance, n = i.point;
    i._cameraZoom ? i._cameraZoom : i._zoom;
    const s = this.mercatorZfromZoom(i) - this.mercatorZfromAltitude(i._centerAltitude, i.center.lat), o = i.cameraToCenterDistance / s;
    return [
      n.x / this.worldSize() - e[0] * t / o,
      n.y / this.worldSize() - e[1] * t / o,
      this.mercatorZfromAltitude(i._centerAltitude, i._center.lat) + -e[2] * t / o
    ];
  },
  getWorldToCamera(i, e) {
    let t = this.map.transform;
    const n = new Ge(), r = new Ge(), s = t._camera._orientation, o = t._camera.position, a = new D(o[0], o[1], o[2]), l = new qn();
    l.set(s[0], s[1], s[2], s[3]);
    const c = l.conjugate();
    return a.multiplyScalar(-i), r.makeTranslation(a.x, a.y, a.z), n.makeRotationFromQuaternion(c).premultiply(r), n.elements[1] *= -1, n.elements[5] *= -1, n.elements[9] *= -1, n.elements[13] *= -1, n.elements[8] *= e, n.elements[9] *= e, n.elements[10] *= e, n.elements[11] *= e, n;
  },
  translate(i, e, t) {
    let n = t[0] || t.x, r = t[1] || t.y, s = t[2] || t.z, o, a, l, c, h, f, u, m, g, v, p, d;
    return e === i ? (i[12] = e[0] * n + e[4] * r + e[8] * s + e[12], i[13] = e[1] * n + e[5] * r + e[9] * s + e[13], i[14] = e[2] * n + e[6] * r + e[10] * s + e[14], i[15] = e[3] * n + e[7] * r + e[11] * s + e[15]) : (o = e[0], a = e[1], l = e[2], c = e[3], h = e[4], f = e[5], u = e[6], m = e[7], g = e[8], v = e[9], p = e[10], d = e[11], i[0] = o, i[1] = a, i[2] = l, i[3] = c, i[4] = h, i[5] = f, i[6] = u, i[7] = m, i[8] = g, i[9] = v, i[10] = p, i[11] = d, i[12] = o * n + h * r + g * s + e[12], i[13] = a * n + f * r + v * s + e[13], i[14] = l * n + u * r + p * s + e[14], i[15] = c * n + m * r + d * s + e[15]), i;
  }
};
const Ws = new un(), Oi = new D();
class ga extends Ku {
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const e = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], t = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(n), this.setAttribute("position", new Dt(e, 3)), this.setAttribute("uv", new Dt(t, 2));
  }
  applyMatrix4(e) {
    const t = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return t !== void 0 && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new Cr(t, 6, 1);
    return this.setAttribute("instanceStart", new hn(n, 3, 0)), this.setAttribute("instanceEnd", new hn(n, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new Cr(t, 6, 1);
    return this.setAttribute("instanceColorStart", new hn(n, 3, 0)), this.setAttribute("instanceColorEnd", new hn(n, 3, 3)), this;
  }
  fromWireframeGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromEdgesGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromMesh(e) {
    return this.fromWireframeGeometry(new Yu(e.geometry)), this;
  }
  fromLineSegments(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new un());
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), Ws.setFromBufferAttribute(t), this.boundingBox.union(Ws));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Yn()), this.boundingBox === null && this.computeBoundingBox();
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    if (e !== void 0 && t !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        Oi.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(Oi)), Oi.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(Oi));
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
  applyMatrix(e) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(e);
  }
}
ne.line = {
  worldUnits: { value: 1 },
  linewidth: { value: 1 },
  resolution: { value: new Pe(1, 1) },
  dashOffset: { value: 0 },
  dashScale: { value: 1 },
  dashSize: { value: 1 },
  gapSize: { value: 1 }
  // todo FIX - maybe change to totalSize
};
yt.line = {
  uniforms: yn.merge([
    ne.common,
    ne.fog,
    ne.line
  ]),
  vertexShader: (
    /* glsl */
    `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
  )
};
class Gr extends _t {
  constructor(e) {
    super({
      type: "LineMaterial",
      uniforms: yn.clone(yt.line.uniforms),
      vertexShader: yt.line.vertexShader,
      fragmentShader: yt.line.fragmentShader,
      clipping: !0
      // required for clipping support
    }), this.isLineMaterial = !0, this.setValues(e);
  }
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(e) {
    this.uniforms.diffuse.value = e;
  }
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(e) {
    e === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(e) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = e);
  }
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(e) {
    e === !0 !== this.dashed && (this.needsUpdate = !0), e === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(e) {
    this.uniforms.dashScale.value = e;
  }
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(e) {
    this.uniforms.dashSize.value = e;
  }
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(e) {
    this.uniforms.dashOffset.value = e;
  }
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(e) {
    this.uniforms.gapSize.value = e;
  }
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(e) {
    this.uniforms && (this.uniforms.opacity.value = e);
  }
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(e) {
    this.uniforms.resolution.value.copy(e);
  }
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(e) {
    this.defines && (e === !0 !== this.alphaToCoverage && (this.needsUpdate = !0), e === !0 ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = !0) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = !1));
  }
}
const Xs = new D(), qs = new D(), ct = new et(), ht = new et(), Xt = new et(), Tr = new D(), Ar = new Ge(), ut = new ed(), Ys = new D(), Bi = new un(), zi = new Yn(), qt = new et();
let $t, En;
function $s(i, e, t) {
  return qt.set(0, 0, -e, 1).applyMatrix4(i.projectionMatrix), qt.multiplyScalar(1 / qt.w), qt.x = En / t.width, qt.y = En / t.height, qt.applyMatrix4(i.projectionMatrixInverse), qt.multiplyScalar(1 / qt.w), Math.abs(Math.max(qt.x, qt.y));
}
function id(i, e) {
  const t = i.matrixWorld, n = i.geometry, r = n.attributes.instanceStart, s = n.attributes.instanceEnd, o = Math.min(n.instanceCount, r.count);
  for (let a = 0, l = o; a < l; a++) {
    ut.start.fromBufferAttribute(r, a), ut.end.fromBufferAttribute(s, a), ut.applyMatrix4(t);
    const c = new D(), h = new D();
    $t.distanceSqToSegment(ut.start, ut.end, h, c), h.distanceTo(c) < En * 0.5 && e.push({
      point: h,
      pointOnLine: c,
      distance: $t.origin.distanceTo(h),
      object: i,
      face: null,
      faceIndex: a,
      uv: null,
      uv1: null
    });
  }
}
function rd(i, e, t) {
  const n = e.projectionMatrix, s = i.material.resolution, o = i.matrixWorld, a = i.geometry, l = a.attributes.instanceStart, c = a.attributes.instanceEnd, h = Math.min(a.instanceCount, l.count), f = -e.near;
  $t.at(1, Xt), Xt.w = 1, Xt.applyMatrix4(e.matrixWorldInverse), Xt.applyMatrix4(n), Xt.multiplyScalar(1 / Xt.w), Xt.x *= s.x / 2, Xt.y *= s.y / 2, Xt.z = 0, Tr.copy(Xt), Ar.multiplyMatrices(e.matrixWorldInverse, o);
  for (let u = 0, m = h; u < m; u++) {
    if (ct.fromBufferAttribute(l, u), ht.fromBufferAttribute(c, u), ct.w = 1, ht.w = 1, ct.applyMatrix4(Ar), ht.applyMatrix4(Ar), ct.z > f && ht.z > f)
      continue;
    if (ct.z > f) {
      const S = ct.z - ht.z, y = (ct.z - f) / S;
      ct.lerp(ht, y);
    } else if (ht.z > f) {
      const S = ht.z - ct.z, y = (ht.z - f) / S;
      ht.lerp(ct, y);
    }
    ct.applyMatrix4(n), ht.applyMatrix4(n), ct.multiplyScalar(1 / ct.w), ht.multiplyScalar(1 / ht.w), ct.x *= s.x / 2, ct.y *= s.y / 2, ht.x *= s.x / 2, ht.y *= s.y / 2, ut.start.copy(ct), ut.start.z = 0, ut.end.copy(ht), ut.end.z = 0;
    const v = ut.closestPointToPointParameter(Tr, !0);
    ut.at(v, Ys);
    const p = za.lerp(ct.z, ht.z, v), d = p >= -1 && p <= 1, A = Tr.distanceTo(Ys) < En * 0.5;
    if (d && A) {
      ut.start.fromBufferAttribute(l, u), ut.end.fromBufferAttribute(c, u), ut.start.applyMatrix4(o), ut.end.applyMatrix4(o);
      const S = new D(), y = new D();
      $t.distanceSqToSegment(ut.start, ut.end, y, S), t.push({
        point: y,
        pointOnLine: S,
        distance: $t.origin.distanceTo(y),
        object: i,
        face: null,
        faceIndex: u,
        uv: null,
        uv1: null
      });
    }
  }
}
class sd extends Bt {
  constructor(e = new ga(), t = new Gr({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, r = new Float32Array(2 * t.count);
    for (let o = 0, a = 0, l = t.count; o < l; o++, a += 2)
      Xs.fromBufferAttribute(t, o), qs.fromBufferAttribute(n, o), r[a] = a === 0 ? 0 : r[a - 1], r[a + 1] = r[a] + Xs.distanceTo(qs);
    const s = new Cr(r, 2, 1);
    return e.setAttribute("instanceDistanceStart", new hn(s, 1, 0)), e.setAttribute("instanceDistanceEnd", new hn(s, 1, 1)), this;
  }
  raycast(e, t) {
    const n = this.material.worldUnits, r = e.camera;
    r === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const s = e.params.Line2 !== void 0 && e.params.Line2.threshold || 0;
    $t = e.ray;
    const o = this.matrixWorld, a = this.geometry, l = this.material;
    En = l.linewidth + s, a.boundingSphere === null && a.computeBoundingSphere(), zi.copy(a.boundingSphere).applyMatrix4(o);
    let c;
    if (n)
      c = En * 0.5;
    else {
      const f = Math.max(r.near, zi.distanceToPoint($t.origin));
      c = $s(r, f, l.resolution);
    }
    if (zi.radius += c, $t.intersectsSphere(zi) === !1)
      return;
    a.boundingBox === null && a.computeBoundingBox(), Bi.copy(a.boundingBox).applyMatrix4(o);
    let h;
    if (n)
      h = En * 0.5;
    else {
      const f = Math.max(r.near, Bi.distanceToPoint($t.origin));
      h = $s(r, f, l.resolution);
    }
    Bi.expandByScalar(h), $t.intersectsBox(Bi) !== !1 && (n ? id(this, t) : rd(this, r, t));
  }
}
class _a extends ga {
  constructor() {
    super(), this.isLineGeometry = !0, this.type = "LineGeometry";
  }
  setPositions(e) {
    const t = e.length - 3, n = new Float32Array(2 * t);
    for (let r = 0; r < t; r += 3)
      n[2 * r] = e[r], n[2 * r + 1] = e[r + 1], n[2 * r + 2] = e[r + 2], n[2 * r + 3] = e[r + 3], n[2 * r + 4] = e[r + 4], n[2 * r + 5] = e[r + 5];
    return super.setPositions(n), this;
  }
  setColors(e) {
    const t = e.length - 3, n = new Float32Array(2 * t);
    for (let r = 0; r < t; r += 3)
      n[2 * r] = e[r], n[2 * r + 1] = e[r + 1], n[2 * r + 2] = e[r + 2], n[2 * r + 3] = e[r + 3], n[2 * r + 4] = e[r + 4], n[2 * r + 5] = e[r + 5];
    return super.setColors(n), this;
  }
  fromLine(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
}
class ad extends sd {
  constructor(e = new _a(), t = new Gr({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLine2 = !0, this.type = "Line2";
  }
}
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */
class jt {
  constructor(e, t, n, r, s = "div") {
    this.parent = e, this.object = t, this.property = n, this._disabled = !1, this._hidden = !1, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(r), this.$name = document.createElement("div"), this.$name.classList.add("name"), jt.nextNameID = jt.nextNameID || 0, this.$name.id = "lil-gui-name-" + ++jt.nextNameID, this.$widget = document.createElement(s), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(n);
  }
  name(e) {
    return this._name = e, this.$name.innerHTML = e, this;
  }
  onChange(e) {
    return this._onChange = e, this;
  }
  _callOnChange() {
    this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = !0;
  }
  onFinishChange(e) {
    return this._onFinishChange = e, this;
  }
  _callOnFinishChange() {
    this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = !1;
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(e = !0) {
    return this.disable(!e);
  }
  disable(e = !0) {
    return e === this._disabled || (this._disabled = e, this.domElement.classList.toggle("disabled", e), this.$disable.toggleAttribute("disabled", e)), this;
  }
  show(e = !0) {
    return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(!1);
  }
  options(e) {
    const t = this.parent.add(this.object, this.property, e);
    return t.name(this._name), this.destroy(), t;
  }
  min(e) {
    return this;
  }
  max(e) {
    return this;
  }
  step(e) {
    return this;
  }
  decimals(e) {
    return this;
  }
  listen(e = !0) {
    return this._listening = e, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const e = this.save();
    e !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = e;
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(e) {
    return this.object[this.property] = e, this._callOnChange(), this.updateDisplay(), this;
  }
  updateDisplay() {
    return this;
  }
  load(e) {
    return this.setValue(e), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(!1), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
  }
}
class od extends jt {
  constructor(e, t, n) {
    super(e, t, n, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function Dr(i) {
  let e, t;
  return (e = i.match(/(#|0x)?([a-f0-9]{6})/i)) ? t = e[2] : (e = i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? t = parseInt(e[1]).toString(16).padStart(2, 0) + parseInt(e[2]).toString(16).padStart(2, 0) + parseInt(e[3]).toString(16).padStart(2, 0) : (e = i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (t = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]), !!t && "#" + t;
}
const ld = { isPrimitive: !0, match: (i) => typeof i == "string", fromHexString: Dr, toHexString: Dr }, li = { isPrimitive: !0, match: (i) => typeof i == "number", fromHexString: (i) => parseInt(i.substring(1), 16), toHexString: (i) => "#" + i.toString(16).padStart(6, 0) }, cd = { isPrimitive: !1, match: Array.isArray, fromHexString(i, e, t = 1) {
  const n = li.fromHexString(i);
  e[0] = (n >> 16 & 255) / 255 * t, e[1] = (n >> 8 & 255) / 255 * t, e[2] = (255 & n) / 255 * t;
}, toHexString: ([i, e, t], n = 1) => li.toHexString(i * (n = 255 / n) << 16 ^ e * n << 8 ^ t * n << 0) }, hd = { isPrimitive: !1, match: (i) => Object(i) === i, fromHexString(i, e, t = 1) {
  const n = li.fromHexString(i);
  e.r = (n >> 16 & 255) / 255 * t, e.g = (n >> 8 & 255) / 255 * t, e.b = (255 & n) / 255 * t;
}, toHexString: ({ r: i, g: e, b: t }, n = 1) => li.toHexString(i * (n = 255 / n) << 16 ^ e * n << 8 ^ t * n << 0) }, ud = [ld, li, cd, hd];
class dd extends jt {
  constructor(e, t, n, r) {
    var s;
    super(e, t, n, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = (s = this.initialValue, ud.find((o) => o.match(s))), this._rgbScale = r, this._initialValueHexString = this.save(), this._textFocused = !1, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const o = Dr(this.$text.value);
      o && this._setValueFromHexString(o);
    }), this.$text.addEventListener("focus", () => {
      this._textFocused = !0, this.$text.select();
    }), this.$text.addEventListener("blur", () => {
      this._textFocused = !1, this.updateDisplay(), this._callOnFinishChange();
    }), this.$disable = this.$text, this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(e) {
    if (this._format.isPrimitive) {
      const t = this._format.fromHexString(e);
      this.setValue(t);
    } else
      this._format.fromHexString(e, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(e) {
    return this._setValueFromHexString(e), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
}
class br extends jt {
  constructor(e, t, n) {
    super(e, t, n, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (r) => {
      r.preventDefault(), this.getValue().call(this.object);
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: !0 }), this.$disable = this.$button;
  }
}
class fd extends jt {
  constructor(e, t, n, r, s, o) {
    super(e, t, n, "number"), this._initInput(), this.min(r), this.max(s);
    const a = o !== void 0;
    this.step(a ? o : this._getImplicitStep(), a), this.updateDisplay();
  }
  decimals(e) {
    return this._decimals = e, this.updateDisplay(), this;
  }
  min(e) {
    return this._min = e, this._onUpdateMinMax(), this;
  }
  max(e) {
    return this._max = e, this._onUpdateMinMax(), this;
  }
  step(e, t = !0) {
    return this._step = e, this._stepExplicit = t, this;
  }
  updateDisplay() {
    const e = this.getValue();
    if (this._hasSlider) {
      let t = (e - this._min) / (this._max - this._min);
      t = Math.max(0, Math.min(t, 1)), this.$fill.style.width = 100 * t + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? e : e.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    const e = (h) => {
      const f = parseFloat(this.$input.value);
      isNaN(f) || (this._snapClampSetValue(f + h), this.$input.value = this.getValue());
    };
    let t, n, r, s, o, a = !1;
    const l = (h) => {
      if (a) {
        const f = h.clientX - t, u = h.clientY - n;
        Math.abs(u) > 5 ? (h.preventDefault(), this.$input.blur(), a = !1, this._setDraggingStyle(!0, "vertical")) : Math.abs(f) > 5 && c();
      }
      if (!a) {
        const f = h.clientY - r;
        o -= f * this._step * this._arrowKeyMultiplier(h), s + o > this._max ? o = this._max - s : s + o < this._min && (o = this._min - s), this._snapClampSetValue(s + o);
      }
      r = h.clientY;
    }, c = () => {
      this._setDraggingStyle(!1, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", c);
    };
    this.$input.addEventListener("input", () => {
      let h = parseFloat(this.$input.value);
      isNaN(h) || (this._stepExplicit && (h = this._snap(h)), this.setValue(this._clamp(h)));
    }), this.$input.addEventListener("keydown", (h) => {
      h.code === "Enter" && this.$input.blur(), h.code === "ArrowUp" && (h.preventDefault(), e(this._step * this._arrowKeyMultiplier(h))), h.code === "ArrowDown" && (h.preventDefault(), e(this._step * this._arrowKeyMultiplier(h) * -1));
    }), this.$input.addEventListener("wheel", (h) => {
      this._inputFocused && (h.preventDefault(), e(this._step * this._normalizeMouseWheel(h)));
    }, { passive: !1 }), this.$input.addEventListener("mousedown", (h) => {
      t = h.clientX, n = r = h.clientY, a = !0, s = this.getValue(), o = 0, window.addEventListener("mousemove", l), window.addEventListener("mouseup", c);
    }), this.$input.addEventListener("focus", () => {
      this._inputFocused = !0;
    }), this.$input.addEventListener("blur", () => {
      this._inputFocused = !1, this.updateDisplay(), this._callOnFinishChange();
    });
  }
  _initSlider() {
    this._hasSlider = !0, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
    const e = (u) => {
      const m = this.$slider.getBoundingClientRect();
      let g = (v = u, p = m.left, d = m.right, A = this._min, S = this._max, (v - p) / (d - p) * (S - A) + A);
      var v, p, d, A, S;
      this._snapClampSetValue(g);
    }, t = (u) => {
      e(u.clientX);
    }, n = () => {
      this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("mousemove", t), window.removeEventListener("mouseup", n);
    };
    let r, s, o = !1;
    const a = (u) => {
      u.preventDefault(), this._setDraggingStyle(!0), e(u.touches[0].clientX), o = !1;
    }, l = (u) => {
      if (o) {
        const m = u.touches[0].clientX - r, g = u.touches[0].clientY - s;
        Math.abs(m) > Math.abs(g) ? a(u) : (window.removeEventListener("touchmove", l), window.removeEventListener("touchend", c));
      } else
        u.preventDefault(), e(u.touches[0].clientX);
    }, c = () => {
      this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("touchmove", l), window.removeEventListener("touchend", c);
    }, h = this._callOnFinishChange.bind(this);
    let f;
    this.$slider.addEventListener("mousedown", (u) => {
      this._setDraggingStyle(!0), e(u.clientX), window.addEventListener("mousemove", t), window.addEventListener("mouseup", n);
    }), this.$slider.addEventListener("touchstart", (u) => {
      u.touches.length > 1 || (this._hasScrollBar ? (r = u.touches[0].clientX, s = u.touches[0].clientY, o = !0) : a(u), window.addEventListener("touchmove", l, { passive: !1 }), window.addEventListener("touchend", c));
    }, { passive: !1 }), this.$slider.addEventListener("wheel", (u) => {
      if (Math.abs(u.deltaX) < Math.abs(u.deltaY) && this._hasScrollBar)
        return;
      u.preventDefault();
      const m = this._normalizeMouseWheel(u) * this._step;
      this._snapClampSetValue(this.getValue() + m), this.$input.value = this.getValue(), clearTimeout(f), f = setTimeout(h, 400);
    }, { passive: !1 });
  }
  _setDraggingStyle(e, t = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", e), document.body.classList.toggle("lil-gui-dragging", e), document.body.classList.toggle("lil-gui-" + t, e);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(e) {
    let { deltaX: t, deltaY: n } = e;
    return Math.floor(e.deltaY) !== e.deltaY && e.wheelDelta && (t = 0, n = -e.wheelDelta / 120, n *= this._stepExplicit ? 1 : 10), t + -n;
  }
  _arrowKeyMultiplier(e) {
    let t = this._stepExplicit ? 1 : 10;
    return e.shiftKey ? t *= 10 : e.altKey && (t /= 10), t;
  }
  _snap(e) {
    const t = Math.round(e / this._step) * this._step;
    return parseFloat(t.toPrecision(15));
  }
  _clamp(e) {
    return e < this._min && (e = this._min), e > this._max && (e = this._max), e;
  }
  _snapClampSetValue(e) {
    this.setValue(this._clamp(this._snap(e)));
  }
  get _hasScrollBar() {
    const e = this.parent.root.$children;
    return e.scrollHeight > e.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class pd extends jt {
  constructor(e, t, n, r) {
    super(e, t, n, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this._values = Array.isArray(r) ? r : Object.values(r), this._names = Array.isArray(r) ? r : Object.keys(r), this._names.forEach((s) => {
      const o = document.createElement("option");
      o.innerHTML = s, this.$select.appendChild(o);
    }), this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
    }), this.$select.addEventListener("focus", () => {
      this.$display.classList.add("focus");
    }), this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("focus");
    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.updateDisplay();
  }
  updateDisplay() {
    const e = this.getValue(), t = this._values.indexOf(e);
    return this.$select.selectedIndex = t, this.$display.innerHTML = t === -1 ? e : this._names[t], this;
  }
}
class md extends jt {
  constructor(e, t, n) {
    super(e, t, n, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    }), this.$input.addEventListener("keydown", (r) => {
      r.code === "Enter" && this.$input.blur();
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.value = this.getValue(), this;
  }
}
let js = !1;
class Hr {
  constructor({ parent: e, autoPlace: t = e === void 0, container: n, width: r, title: s = "Controls", injectStyles: o = !0, touchStyles: a = !0 } = {}) {
    if (this.parent = e, this.root = e ? e.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = !1, this._hidden = !1, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", !0), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (l) => {
      l.code !== "Enter" && l.code !== "Space" || (l.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: !0 }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(s), a && this.domElement.classList.add("allow-touch-styles"), this.parent)
      return this.parent.children.push(this), this.parent.folders.push(this), void this.parent.$children.appendChild(this.domElement);
    this.domElement.classList.add("root"), !js && o && (function(l) {
      const c = document.createElement("style");
      c.innerHTML = l;
      const h = document.querySelector("head link[rel=stylesheet], head style");
      h ? document.head.insertBefore(c, h) : document.head.appendChild(c);
    }('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'), js = !0), n ? n.appendChild(this.domElement) : t && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), r && this.domElement.style.setProperty("--width", r + "px"), this.domElement.addEventListener("keydown", (l) => l.stopPropagation()), this.domElement.addEventListener("keyup", (l) => l.stopPropagation());
  }
  add(e, t, n, r, s) {
    if (Object(n) === n)
      return new pd(this, e, t, n);
    const o = e[t];
    switch (typeof o) {
      case "number":
        return new fd(this, e, t, n, r, s);
      case "boolean":
        return new od(this, e, t);
      case "string":
        return new md(this, e, t);
      case "function":
        return new br(this, e, t);
    }
    console.error(`gui.add failed
	property:`, t, `
	object:`, e, `
	value:`, o);
  }
  addColor(e, t, n = 1) {
    return new dd(this, e, t, n);
  }
  addFolder(e) {
    return new Hr({ parent: this, title: e });
  }
  load(e, t = !0) {
    return e.controllers && this.controllers.forEach((n) => {
      n instanceof br || n._name in e.controllers && n.load(e.controllers[n._name]);
    }), t && e.folders && this.folders.forEach((n) => {
      n._title in e.folders && n.load(e.folders[n._title]);
    }), this;
  }
  save(e = !0) {
    const t = { controllers: {}, folders: {} };
    return this.controllers.forEach((n) => {
      if (!(n instanceof br)) {
        if (n._name in t.controllers)
          throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);
        t.controllers[n._name] = n.save();
      }
    }), e && this.folders.forEach((n) => {
      if (n._title in t.folders)
        throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);
      t.folders[n._title] = n.save();
    }), t;
  }
  open(e = !0) {
    return this._closed = !e, this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
  }
  close() {
    return this.open(!1);
  }
  show(e = !0) {
    return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(!1);
  }
  openAnimated(e = !0) {
    return this._closed = !e, this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      const t = this.$children.clientHeight;
      this.$children.style.height = t + "px", this.domElement.classList.add("transition");
      const n = (s) => {
        s.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", n));
      };
      this.$children.addEventListener("transitionend", n);
      const r = e ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("closed", !e), requestAnimationFrame(() => {
        this.$children.style.height = r + "px";
      });
    }), this;
  }
  title(e) {
    return this._title = e, this.$title.innerHTML = e, this;
  }
  reset(e = !0) {
    return (e ? this.controllersRecursive() : this.controllers).forEach((t) => t.reset()), this;
  }
  onChange(e) {
    return this._onChange = e, this;
  }
  _callOnChange(e) {
    this.parent && this.parent._callOnChange(e), this._onChange !== void 0 && this._onChange.call(this, { object: e.object, property: e.property, value: e.getValue(), controller: e });
  }
  onFinishChange(e) {
    return this._onFinishChange = e, this;
  }
  _callOnFinishChange(e) {
    this.parent && this.parent._callOnFinishChange(e), this._onFinishChange !== void 0 && this._onFinishChange.call(this, { object: e.object, property: e.property, value: e.getValue(), controller: e });
  }
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((e) => e.destroy());
  }
  controllersRecursive() {
    let e = Array.from(this.controllers);
    return this.folders.forEach((t) => {
      e = e.concat(t.controllersRecursive());
    }), e;
  }
  foldersRecursive() {
    let e = Array.from(this.folders);
    return this.folders.forEach((t) => {
      e = e.concat(t.foldersRecursive());
    }), e;
  }
}
const va = {
  name: "CopyShader",
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
  )
};
class Kn {
  constructor() {
    this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const gd = new Br(-1, 1, 1, -1, 0, 1);
class _d extends Tt {
  constructor() {
    super(), this.setAttribute("position", new Dt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Dt([0, 2, 0, 0, 2, 0], 2));
  }
}
const vd = new _d();
class Vr {
  constructor(e) {
    this._mesh = new Bt(vd, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, gd);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class xa extends Kn {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof _t ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = yn.clone(e.uniforms), this.material = new _t({
      name: e.name !== void 0 ? e.name : "unspecified",
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new Vr(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class Zs extends Kn {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(e, t, n) {
    const r = e.getContext(), s = e.state;
    s.buffers.color.setMask(!1), s.buffers.depth.setMask(!1), s.buffers.color.setLocked(!0), s.buffers.depth.setLocked(!0);
    let o, a;
    this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), s.buffers.stencil.setTest(!0), s.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), s.buffers.stencil.setFunc(r.ALWAYS, o, 4294967295), s.buffers.stencil.setClear(a), s.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s.buffers.color.setLocked(!1), s.buffers.depth.setLocked(!1), s.buffers.color.setMask(!0), s.buffers.depth.setMask(!0), s.buffers.stencil.setLocked(!1), s.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), s.buffers.stencil.setLocked(!0);
  }
}
class xd extends Kn {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class Ks {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new Pe());
      this._width = n.width, this._height = n.height, t = new kt(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: 1016 }), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new xa(va), this.copyPass.material.blending = 0, this.clock = new Ju();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled)
        return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let r = 0, s = this.passes.length; r < s; r++) {
      const o = this.passes[r];
      if (o.enabled !== !1) {
        if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(r), o.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), o.needsSwap) {
          if (n) {
            const a = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(a.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        Zs !== void 0 && (o instanceof Zs ? n = !0 : o instanceof xd && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new Pe());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const n = this._width * this._pixelRatio, r = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r);
    for (let s = 0; s < this.passes.length; s++)
      this.passes[s].setSize(n, r);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class Sd extends Kn {
  constructor(e, t, n = null, r = null, s = null) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = r, this.clearAlpha = s, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new ze();
  }
  render(e, t, n) {
    const r = e.autoClear;
    e.autoClear = !1;
    let s, o;
    this.overrideMaterial !== null && (o = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor)), this.clearAlpha !== null && (s = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == !0 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(s), this.overrideMaterial !== null && (this.scene.overrideMaterial = o), e.autoClear = r;
  }
}
const Md = {
  name: "LuminosityHighPassShader",
  shaderID: "luminosityHighPass",
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new ze(0) },
    defaultOpacity: { value: 0 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
  )
};
class Wn extends Kn {
  constructor(e, t, n, r) {
    super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = r, this.resolution = e !== void 0 ? new Pe(e.x, e.y) : new Pe(256, 256), this.clearColor = new ze(1, 1, 1), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new kt(s, o, { type: 1016 }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
    for (let f = 0; f < this.nMips; f++) {
      const u = new kt(s, o, { type: 1016 });
      u.texture.name = "UnrealBloomPass.h" + f, u.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(u);
      const m = new kt(s, o, { type: 1016 });
      m.texture.name = "UnrealBloomPass.v" + f, m.texture.generateMipmaps = !1, this.renderTargetsVertical.push(m), s = Math.round(s / 2), o = Math.round(o / 2);
    }
    const a = Md;
    this.highPassUniforms = yn.clone(a.uniforms), this.highPassUniforms.luminosityThreshold.value = r, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new _t({
      uniforms: this.highPassUniforms,
      vertexShader: a.vertexShader,
      fragmentShader: a.fragmentShader
    }), this.separableBlurMaterials = [];
    const l = [3, 5, 7, 9, 11];
    s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    for (let f = 0; f < this.nMips; f++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])), this.separableBlurMaterials[f].uniforms.invSize.value = new Pe(1 / s, 1 / o), s = Math.round(s / 2), o = Math.round(o / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [new D(1, 1, 1), new D(1, 1, 1), new D(1, 1, 1), new D(1, 1, 1), new D(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    const h = va;
    this.copyUniforms = yn.clone(h.uniforms), this.blendMaterial = new _t({
      uniforms: this.copyUniforms,
      vertexShader: h.vertexShader,
      fragmentShader: h.fragmentShader,
      blending: 2,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), this.enabled = !0, this.needsSwap = !1, this._oldClearColor = new ze(), this.oldClearAlpha = 1, this.basic = new $n(), this.fsQuad = new Vr(null);
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
      this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++)
      this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
    for (let e = 0; e < this.separableBlurMaterials.length; e++)
      this.separableBlurMaterials[e].dispose();
    this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this.basic.dispose(), this.fsQuad.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2), r = Math.round(t / 2);
    this.renderTargetBright.setSize(n, r);
    for (let s = 0; s < this.nMips; s++)
      this.renderTargetsHorizontal[s].setSize(n, r), this.renderTargetsVertical[s].setSize(n, r), this.separableBlurMaterials[s].uniforms.invSize.value = new Pe(1 / n, 1 / r), n = Math.round(n / 2), r = Math.round(r / 2);
  }
  render(e, t, n, r, s) {
    e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
    const o = e.autoClear;
    e.autoClear = !1, e.setClearColor(this.clearColor, 0), s && e.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
    let a = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++)
      this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = a.texture, this.separableBlurMaterials[l].uniforms.direction.value = Wn.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = Wn.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), a = this.renderTargetsVertical[l];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, s && e.state.buffers.stencil.setTest(!0), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = o;
  }
  getSeperableBlurMaterial(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(0.39894 * Math.exp(-0.5 * n * n / (e * e)) / e);
    return new _t({
      defines: {
        KERNEL_RADIUS: e
      },
      uniforms: {
        colorTexture: { value: null },
        invSize: { value: new Pe(0.5, 0.5) },
        // inverse texture size
        direction: { value: new Pe(0.5, 0.5) },
        gaussianCoefficients: { value: t }
        // precomputed Gaussian coefficients
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset );
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset );
						diffuseSum += (sample1.rgb + sample2.rgb) * w;
						weightSum += 2.0 * w;
					}
				
					gl_FragColor = vec4(diffuseSum / weightSum, 1.0);
				}`
    });
  }
  getCompositeMaterial(e) {
    return new _t({
      defines: {
        NUM_MIPS: e
      },
      uniforms: {
        blurTexture1: { value: null },
        blurTexture2: { value: null },
        blurTexture3: { value: null },
        blurTexture4: { value: null },
        blurTexture5: { value: null },
        bloomStrength: { value: 1 },
        bloomFactors: { value: null },
        bloomTintColors: { value: null },
        bloomRadius: { value: 0 }
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`
    });
  }
}
Wn.BlurDirectionX = new Pe(1, 0);
Wn.BlurDirectionY = new Pe(0, 1);
const Ed = {
  name: "OutputShader",
  uniforms: {
    tDiffuse: { value: null },
    toneMappingExposure: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`
  )
};
class yd extends Kn {
  constructor() {
    super();
    const e = Ed;
    this.uniforms = yn.clone(e.uniforms), this.material = new $u({
      name: e.name,
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    }), this.fsQuad = new Vr(this.material), this._outputColorSpace = null, this._toneMapping = null;
  }
  render(e, t, n) {
    this.uniforms.tDiffuse.value = n.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, ke.getTransfer(this._outputColorSpace) === $e && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === 1 ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === 2 ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === 3 ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === 4 && (this.material.defines.ACES_FILMIC_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
const Td = "pk.eyJ1IjoienRvcCIsImEiOiJjbHU5bWF3czAwN3E4MnNudHZjbHN2cmplIn0.LDBbkevH-f8pFktEZynTSA";
mapboxgl.accessToken = Td;
var zn = new mapboxgl.Map({
  container: "container",
  style: "mapbox://styles/mapbox/dark-v9",
  zoom: 10,
  pitch: 0,
  center: [121.45485566448343, 31.16]
});
const vn = {
  threshold: 0,
  strength: 0.3,
  radius: 0,
  exposure: 1
};
zn.on("style.load", function() {
  let i, e, t, n, r, s, o, a, l, c, h, f, u, m, g, v = new Hn();
  const p = 1, d = new $i();
  d.set(p);
  const A = new $n({ color: "black" }), S = {};
  zn.addLayer({
    id: "custom_layer",
    type: "custom",
    onAdd: function(C, B) {
      o = C.getCanvas();
      const $ = o.clientWidth, P = o.clientHeight;
      g = C.getContainer().querySelector("#_THREE_EFFECTS_CONTAINER_"), g || (g = document.createElement("canvas"), g.id = "_THREE_EFFECTS_CONTAINER_", g.style.position = "absolute", g.style.zIndex = "99999", g.style.pointerEvents = "none", g.style.width = "100%", g.style.height = "100%", g.width = $, g.height = P), t = new pa({
        alpha: !0,
        antialias: !0,
        canvas: g
      }), t.setPixelRatio(window.devicePixelRatio), t.shadowMap.enabled = !0, t.autoClear = !1, t.toneMapping = 2, i = new Nt(C.transform.fov, $ / P, 0.1, 1e21), e = new Wu(), e.add(v), e.add(new Zu(13421772)), t.setClearAlpha(0), new Pr(C, i, v), r = Ad({
        color: 49151,
        width: 4,
        opacity: 1,
        containerWidth: $,
        containerHeight: P
      }), v.add(r);
      const q = bd();
      v.add(q);
      const k = wd();
      v.add(k), q.layers.enable(p), r.layers.enable(p), k.layers.enable(p);
      function K() {
        const Re = o.width / window.devicePixelRatio, _e = o.height / window.devicePixelRatio;
        t.setSize(Re, _e), s.setSize(Re, _e), n.setSize(Re, _e), r.material.resolution.set(Re, _e);
      }
      const j = new Sd(e, i), Y = new Wn(new Pe($, P), vn.strength, vn.radius, vn.threshold);
      s = new Ks(t), s.renderToScreen = !1, s.addPass(j), s.addPass(Y);
      const U = new xa(
        new _t({
          uniforms: {
            baseTexture: { value: null },
            bloomTexture: { value: s.renderTarget2.texture }
          },
          // @ts-ignore
          vertexShader: document.getElementById("vertexshader").textContent,
          // @ts-ignore
          fragmentShader: document.getElementById("fragmentshader").textContent,
          defines: {}
        }),
        "baseTexture"
      );
      U.needsSwap = !0;
      const V = new yd();
      n = new Ks(t), n.addPass(j), n.addPass(U), n.addPass(V), window.addEventListener("resize", K), K();
      const se = `
          attribute vec2 a_position;
          attribute vec2 a_texCoord;
          uniform vec2 u_resolution;
          varying vec2 v_texCoord;
          void main() {
              vec2 zeroToOne = a_position / u_resolution;
              vec2 zeroToTwo = zeroToOne * 2.0;
              vec2 clipSpace = zeroToTwo - 1.0;
              gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
              v_texCoord = a_texCoord;
          }
      `, le = `
          #ifdef GL_ES
          precision mediump float;
          #endif
          uniform sampler2D u_image;
          varying vec2 v_texCoord;
          void main() {
              gl_FragColor = texture2D(u_image, v_texCoord);
          }
      `, oe = B.createShader(B.VERTEX_SHADER);
      if (B.shaderSource(oe, se), B.compileShader(oe), !B.getShaderParameter(oe, B.COMPILE_STATUS)) {
        console.error(B.getShaderInfoLog(oe)), B.deleteShader(oe);
        return;
      }
      const pe = B.createShader(B.FRAGMENT_SHADER);
      if (B.shaderSource(pe, le), B.compileShader(pe), !B.getShaderParameter(pe, B.COMPILE_STATUS)) {
        console.error(B.getShaderInfoLog(pe)), B.deleteShader(pe);
        return;
      }
      if (a = B.createProgram(), B.attachShader(a, oe), B.attachShader(a, pe), B.linkProgram(a), !B.getProgramParameter(a, B.LINK_STATUS)) {
        console.error(B.getProgramInfoLog(a)), B.deleteProgram(a);
        return;
      }
      l = B.getAttribLocation(a, "a_position"), c = B.getAttribLocation(a, "a_texCoord"), h = B.getUniformLocation(a, "u_resolution"), f = B.createBuffer(), u = B.createBuffer(), m = B.createTexture(), y(Y);
    },
    render: function(C, B) {
      e.traverse(L), s.render(), e.traverse(w), n.render(), t.resetState(), t.render(e, i), C.useProgram(a), C.bindBuffer(C.ARRAY_BUFFER, f), b(C, 0, 0, o.width, o.height), C.bindBuffer(C.ARRAY_BUFFER, u), C.bufferData(
        C.ARRAY_BUFFER,
        new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
        C.STATIC_DRAW
      ), C.bindTexture(C.TEXTURE_2D, m), C.texParameteri(C.TEXTURE_2D, C.TEXTURE_WRAP_S, C.CLAMP_TO_EDGE), C.texParameteri(C.TEXTURE_2D, C.TEXTURE_WRAP_T, C.CLAMP_TO_EDGE), C.texParameteri(C.TEXTURE_2D, C.TEXTURE_MIN_FILTER, C.NEAREST), C.texParameteri(C.TEXTURE_2D, C.TEXTURE_MAG_FILTER, C.NEAREST), C.texImage2D(C.TEXTURE_2D, 0, C.RGBA, C.RGBA, C.UNSIGNED_BYTE, g), C.enableVertexAttribArray(l), C.bindBuffer(C.ARRAY_BUFFER, f), C.vertexAttribPointer(l, 2, C.FLOAT, !1, 0, 0), C.enableVertexAttribArray(c), C.bindBuffer(C.ARRAY_BUFFER, u), C.vertexAttribPointer(c, 2, C.FLOAT, !1, 0, 0), C.uniform2f(h, C.canvas.width, C.canvas.height), C.enable(C.BLEND), C.blendFunc(C.ONE, C.ONE), C.drawArrays(C.TRIANGLES, 0, 6);
    }
  });
  function y(C) {
    const B = new Hr(), $ = B.addFolder("bloom");
    $.add(vn, "threshold", 0, 1).onChange(function(H) {
      C.threshold = Number(H), zn.triggerRepaint();
    }), $.add(vn, "strength", 0, 3).onChange(function(H) {
      C.strength = Number(H), zn.triggerRepaint();
    }), $.add(vn, "radius", 0, 1).step(0.01).onChange(function(H) {
      C.radius = Number(H), zn.triggerRepaint();
    }), B.addFolder("tone mapping").add(vn, "exposure", 0.1, 2).onChange(function(H) {
      t.toneMappingExposure = Math.pow(H, 4), zn.triggerRepaint();
    });
  }
  function b(C, B, $, P, H) {
    const q = B, k = B + P, K = $, j = $ + H;
    C.bufferData(C.ARRAY_BUFFER, new Float32Array([q, K, k, K, q, j, q, j, k, K, k, j]), C.STATIC_DRAW);
  }
  function L(C) {
    C.isMesh && d.test(C.layers) === !1 && (S[C.uuid] = C.material, C.material = A);
  }
  function w(C) {
    S[C.uuid] && (C.material = S[C.uuid], delete S[C.uuid]);
  }
  var W = new Qu(), M = new Pe();
  function T(C) {
    const B = o.width / window.devicePixelRatio, $ = o.height / window.devicePixelRatio;
    M.x = C.clientX / B * 2 - 1, M.y = -(C.clientY / $) * 2 + 1, W.setFromCamera(M, i);
    var P = W.intersectObjects(e.children, !0);
    P.length > 0 && (console.log("Object clicked!"), P[0].object.material.color.set(16711680));
  }
  window.addEventListener("click", T, !1);
});
function Ad(i) {
  i.geometry = [
    [121.45485566448343, 31.303623092438414],
    [121.45939232455689, 31.303527856342946],
    [121.46391802798969, 31.3032423780654],
    [121.46842184480208, 31.302767347072614],
    [121.47289289826932, 31.302103910611752],
    [121.47732039138224, 31.301253670918765],
    [121.4816936331083, 31.300218681320175],
    [121.4860020643872, 31.29900144123772],
    [121.4902352837959, 31.297604890108545],
    [121.49438307281976, 31.29603240023603],
    [121.4984354206659, 31.294287768589303],
    [121.50238254855769, 31.292375207571684],
    [121.50621493345018, 31.29029933478143],
    [121.50992333110725, 31.288065161790037],
    [121.51349879848435, 31.28567808196628],
    [121.51693271536115, 31.28314385737633],
    [121.52021680517153, 31.280468604792315],
    [121.5233431549801, 31.277658780844423],
    [121.52630423455645, 31.274721166353135],
    [121.52909291450176, 31.27166284988064],
    [121.53170248338338, 31.268491210541946],
    [121.53412666383736, 31.265213900118333],
    [121.53635962760018, 31.26183882451731],
    [121.53839600943475, 31.258374124624563],
    [121.54023091991796, 31.254828156595337],
    [121.54185995706065, 31.251209471633295],
    [121.5432792167334, 31.24752679530675],
    [121.54448530187452, 31.243789006452655],
    [121.54547533046065, 31.240005115720166],
    [121.54624694222198, 31.236184243805717],
    [121.54679830408904, 31.232335599432993],
    [121.5471281143593, 31.22846845713109],
    [121.54723560557686, 31.22459213486466],
    [121.5471205461202, 31.22071597157043],
    [121.54678324049678, 31.21684930465416],
    [121.5462245283465, 31.213001447502325],
    [121.54544578215875, 31.20918166706268],
    [121.54444890371123, 31.20539916154749],
    [121.5432363192414, 31.201663038312876],
    [121.54181097336456, 31.19798229196724],
    [121.54017632175574, 31.194365782760897],
    [121.53833632261474, 31.190822215308536],
    [121.53629542693726, 31.187360117695054],
    [121.53405856761732, 31.183987821014423],
    [121.53163114740852, 31.18071343938992],
    [121.52901902577523, 31.177544850523187],
    [121.52622850466607, 31.174489676817867],
    [121.52326631324536, 31.171555267122443],
    [121.52013959162004, 31.168748679135202],
    [121.51685587360156, 31.16607666251257],
    [121.5134230685452, 31.163545642720646],
    [121.50984944230996, 31.161161705667567],
    [121.50614359738528, 31.158930583152856],
    [121.50231445223179, 31.15685763916746],
    [121.49837121988533, 31.15494785707681],
    [121.49432338587486, 31.15320582771645],
    [121.49018068550637, 31.151635738428208],
    [121.48595308056623, 31.150241363062126],
    [121.4816507354987, 31.14902605296771],
    [121.47728399311309, 31.147992728995156],
    [121.47286334987737, 31.147143874525224],
    [121.46839943085583, 31.14648152954388],
    [121.46390296434869, 31.146007285775486],
    [121.45938475629296, 31.14572228288574],
    [121.45485566448343, 31.14562720576321],
    [121.4503265726739, 31.14572228288574],
    [121.44580836461817, 31.146007285775486],
    [121.44131189811104, 31.14648152954388],
    [121.43684797908949, 31.147143874525224],
    [121.43242733585379, 31.147992728995156],
    [121.42806059346816, 31.14902605296771],
    [121.42375824840065, 31.150241363062126],
    [121.41953064346049, 31.151635738428208],
    [121.415387943092, 31.15320582771645],
    [121.41134010908154, 31.15494785707681],
    [121.40739687673506, 31.15685763916746],
    [121.40356773158157, 31.158930583152856],
    [121.39986188665691, 31.161161705667567],
    [121.39628826042167, 31.163545642720646],
    [121.39285545536531, 31.16607666251257],
    [121.38957173734684, 31.168748679135202],
    [121.3864450157215, 31.171555267122443],
    [121.38348282430081, 31.174489676817867],
    [121.38069230319165, 31.177544850523187],
    [121.37808018155836, 31.18071343938992],
    [121.37565276134954, 31.183987821014423],
    [121.3734159020296, 31.187360117695054],
    [121.37137500635212, 31.190822215308536],
    [121.36953500721114, 31.194365782760897],
    [121.36790035560229, 31.19798229196724],
    [121.36647500972546, 31.201663038312876],
    [121.36526242525564, 31.20539916154749],
    [121.36426554680811, 31.20918166706268],
    [121.36348680062038, 31.213001447502325],
    [121.36292808847008, 31.21684930465416],
    [121.36259078284665, 31.22071597157043],
    [121.36247572339002, 31.22459213486466],
    [121.36258321460757, 31.22846845713109],
    [121.36291302487781, 31.232335599432993],
    [121.36346438674488, 31.236184243805717],
    [121.36423599850623, 31.240005115720166],
    [121.36522602709236, 31.243789006452655],
    [121.36643211223348, 31.24752679530675],
    [121.36785137190621, 31.251209471633295],
    [121.36948040904892, 31.254828156595337],
    [121.37131531953213, 31.258374124624563],
    [121.37335170136669, 31.26183882451731],
    [121.3755846651295, 31.265213900118333],
    [121.37800884558348, 31.268491210541946],
    [121.38061841446512, 31.27166284988064],
    [121.3834070944104, 31.274721166353135],
    [121.38636817398677, 31.277658780844423],
    [121.38949452379534, 31.280468604792315],
    [121.39277861360571, 31.28314385737633],
    [121.39621253048253, 31.28567808196628],
    [121.39978799785962, 31.288065161790037],
    [121.4034963955167, 31.29029933478143],
    [121.40732878040916, 31.292375207571684],
    [121.41127590830095, 31.294287768589303],
    [121.41532825614709, 31.29603240023603],
    [121.41947604517097, 31.297604890108545],
    [121.42370926457967, 31.29900144123772],
    [121.42801769585854, 31.300218681320175],
    [121.43239093758464, 31.301253670918765],
    [121.43681843069756, 31.302103910611752],
    [121.44128948416478, 31.302767347072614],
    [121.44579330097717, 31.3032423780654],
    [121.45031900440996, 31.303527856342946],
    [121.45485566448343, 31.303623092438414]
  ];
  var e = Ut.lnglatsToWorld(i.geometry), t = Ut.normalizeVertices(e), n = Ut.flattenVectors(t.vertices), r = new _a();
  r.setPositions(n);
  let s = new Gr({
    color: i.color,
    linewidth: i.width,
    dashed: !1,
    opacity: i.opacity
  });
  s.resolution.set(i.containerWidth, i.containerHeight), s.isMaterial = !0, s.transparent = !0, s.depthWrite = !1;
  let o = new ad(r, s);
  return o.position.copy(t.position), o;
}
function bd() {
  const i = [
    [121.47540519609203, 31.068403408422398],
    [121.40293459353683, 30.980240693209183],
    [121.57515884902091, 30.979997036822525]
  ];
  var e = Ut.lnglatsToWorld(i), t = Ut.normalizeVertices(e), n = Ut.flattenVectors(t.vertices);
  const r = new Float32Array(n), s = new Tt();
  s.setAttribute("position", new Pt(r, 3));
  const o = new $n({ color: 65280 }), a = new Bt(s, o);
  return a.position.set(t.position.x, t.position.y, t.position.z), a;
}
function wd() {
  const i = [121.10987446056618, 31.18596578115384];
  var e = Ut.projectToWorld(i), t = new jn(200, 200, 200), n = new $n({ color: 16776960 }), r = new Bt(t, n);
  return r.position.set(e.x, e.y, e.z), r;
}
