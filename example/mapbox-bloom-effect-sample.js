/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Cr = "158";
const Ot = "", dt = "srgb", nn = "srgb-linear", Pr = "display-p3", ki = "display-p3-linear", Bi = "linear", je = "srgb", zi = "rec709", Gi = "p3";
const Wr = "300 es";
class Vn {
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
let Xr = 1234567;
const ti = Math.PI / 180, ri = 180 / Math.PI;
function tn() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (pt[i & 255] + pt[i >> 8 & 255] + pt[i >> 16 & 255] + pt[i >> 24 & 255] + "-" + pt[e & 255] + pt[e >> 8 & 255] + "-" + pt[e >> 16 & 15 | 64] + pt[e >> 24 & 255] + "-" + pt[t & 63 | 128] + pt[t >> 8 & 255] + "-" + pt[t >> 16 & 255] + pt[t >> 24 & 255] + pt[n & 255] + pt[n >> 8 & 255] + pt[n >> 16 & 255] + pt[n >> 24 & 255]).toLowerCase();
}
function _t(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Lr(i, e) {
  return (i % e + e) % e;
}
function xa(i, e, t, n, r) {
  return n + (i - e) * (r - n) / (t - e);
}
function Sa(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function ni(i, e, t) {
  return (1 - t) * i + t * e;
}
function Ma(i, e, t, n) {
  return ni(i, e, 1 - Math.exp(-t * n));
}
function Ea(i, e = 1) {
  return e - Math.abs(Lr(i, e * 2) - e);
}
function ya(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i));
}
function Ta(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10));
}
function Aa(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function ba(i, e) {
  return i + Math.random() * (e - i);
}
function Ra(i) {
  return i * (0.5 - Math.random());
}
function wa(i) {
  i !== void 0 && (Xr = i);
  let e = Xr += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Ca(i) {
  return i * ti;
}
function Pa(i) {
  return i * ri;
}
function Tr(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function La(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function Hi(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Da(i, e, t, n, r) {
  const s = Math.cos, o = Math.sin, a = s(t / 2), l = o(t / 2), c = s((e + n) / 2), u = o((e + n) / 2), d = s((e - n) / 2), f = o((e - n) / 2), m = s((n - e) / 2), g = o((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(a * u, l * d, l * f, a * c);
      break;
    case "YZY":
      i.set(l * f, a * u, l * d, a * c);
      break;
    case "ZXZ":
      i.set(l * d, l * f, a * u, a * c);
      break;
    case "XZX":
      i.set(a * u, l * g, l * m, a * c);
      break;
    case "YXY":
      i.set(l * m, a * u, l * g, a * c);
      break;
    case "ZYZ":
      i.set(l * g, l * m, a * u, a * c);
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
const Ua = {
  DEG2RAD: ti,
  RAD2DEG: ri,
  generateUUID: tn,
  clamp: _t,
  euclideanModulo: Lr,
  mapLinear: xa,
  inverseLerp: Sa,
  lerp: ni,
  damp: Ma,
  pingpong: Ea,
  smoothstep: ya,
  smootherstep: Ta,
  randInt: Aa,
  randFloat: ba,
  randFloatSpread: Ra,
  seededRandom: wa,
  degToRad: Ca,
  radToDeg: Pa,
  isPowerOfTwo: Tr,
  ceilPowerOfTwo: La,
  floorPowerOfTwo: Hi,
  setQuaternionFromProperEuler: Da,
  normalize: Xe,
  denormalize: Yt
};
class Le {
  constructor(e = 0, t = 0) {
    Le.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    return Math.acos(_t(n, -1, 1));
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
    const u = this.elements;
    return u[0] = e, u[1] = r, u[2] = a, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = o, u[8] = c, this;
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
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], d = n[7], f = n[2], m = n[5], g = n[8], v = r[0], p = r[3], h = r[6], A = r[1], M = r[4], T = r[7], b = r[2], C = r[5], R = r[8];
    return s[0] = o * v + a * A + l * b, s[3] = o * p + a * M + l * C, s[6] = o * h + a * T + l * R, s[1] = c * v + u * A + d * b, s[4] = c * p + u * M + d * C, s[7] = c * h + u * T + d * R, s[2] = f * v + m * A + g * b, s[5] = f * p + m * M + g * C, s[8] = f * h + m * T + g * R, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * o * u - t * a * c - n * s * u + n * a * l + r * s * c - r * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], d = u * o - a * c, f = a * l - u * s, m = c * s - o * l, g = t * d + n * f + r * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return e[0] = d * v, e[1] = (r * c - u * n) * v, e[2] = (a * n - r * o) * v, e[3] = f * v, e[4] = (u * t - r * l) * v, e[5] = (r * s - a * t) * v, e[6] = m * v, e[7] = (n * l - c * t) * v, e[8] = (o * t - n * s) * v, this;
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
    return this.premultiply($i.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply($i.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply($i.makeTranslation(e, t)), this;
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
const $i = /* @__PURE__ */ new Ne();
function qs(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535)
      return !0;
  return !1;
}
function Vi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Ia() {
  const i = Vi("canvas");
  return i.style.display = "block", i;
}
const qr = {};
function ii(i) {
  i in qr || (qr[i] = !0, console.warn(i));
}
const Yr = /* @__PURE__ */ new Ne().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), jr = /* @__PURE__ */ new Ne().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), li = {
  [nn]: {
    transfer: Bi,
    primaries: zi,
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [dt]: {
    transfer: je,
    primaries: zi,
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [ki]: {
    transfer: Bi,
    primaries: Gi,
    toReference: (i) => i.applyMatrix3(jr),
    fromReference: (i) => i.applyMatrix3(Yr)
  },
  [Pr]: {
    transfer: je,
    primaries: Gi,
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(jr),
    fromReference: (i) => i.applyMatrix3(Yr).convertLinearToSRGB()
  }
}, Fa = /* @__PURE__ */ new Set([nn, ki]), ke = {
  enabled: !0,
  _workingColorSpace: nn,
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
    if (!Fa.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = li[e].toReference, r = li[t].fromReference;
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return li[i].primaries;
  },
  getTransfer: function(i) {
    return i === Ot ? Bi : li[i].transfer;
  }
};
function zn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Ji(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let En;
class Ys {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      En === void 0 && (En = Vi("canvas")), En.width = e.width, En.height = e.height;
      const n = En.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = En;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Vi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = zn(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(zn(t[n] / 255) * 255) : t[n] = zn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Na = 0;
class js {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Na++ }), this.uuid = tn(), this.data = e, this.version = 0;
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
          r[o].isDataTexture ? s.push(Qi(r[o].image)) : s.push(Qi(r[o]));
      } else
        s = Qi(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Qi(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Ys.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Oa = 0;
class Pt extends Vn {
  constructor(e = Pt.DEFAULT_IMAGE, t = Pt.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, o = 1008, a = 1023, l = 1009, c = Pt.DEFAULT_ANISOTROPY, u = Ot) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Oa++ }), this.uuid = tn(), this.name = "", this.source = new js(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Le(0, 0), this.repeat = new Le(1, 1), this.center = new Le(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ne(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === 3001 ? dt : Ot), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    return ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === dt ? 3001 : 3e3;
  }
  set encoding(e) {
    ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === 3001 ? dt : Ot;
  }
}
Pt.DEFAULT_IMAGE = null;
Pt.DEFAULT_MAPPING = 300;
Pt.DEFAULT_ANISOTROPY = 1;
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
    const l = e.elements, c = l[0], u = l[4], d = l[8], f = l[1], m = l[5], g = l[9], v = l[2], p = l[6], h = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(d - v) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(d + v) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (c + 1) / 2, T = (m + 1) / 2, b = (h + 1) / 2, C = (u + f) / 4, R = (d + v) / 4, V = (g + p) / 4;
      return M > T && M > b ? M < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(M), r = C / n, s = R / n) : T > b ? T < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(T), n = C / r, s = V / r) : b < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(b), n = R / s, r = V / s), this.set(n, r, s, t), this;
    }
    let A = Math.sqrt((p - g) * (p - g) + (d - v) * (d - v) + (f - u) * (f - u));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (p - g) / A, this.y = (d - v) / A, this.z = (f - u) / A, this.w = Math.acos((c + m + h - 1) / 2), this;
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
class Ba extends Vn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new et(0, 0, e, t), this.scissorTest = !1, this.viewport = new et(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (ii("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === 3001 ? dt : Ot), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new Pt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
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
    return this.texture.source = new js(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class kt extends Ba {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Zs extends Pt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class za extends Pt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class kn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let l = n[r + 0], c = n[r + 1], u = n[r + 2], d = n[r + 3];
    const f = s[o + 0], m = s[o + 1], g = s[o + 2], v = s[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = d;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = g, e[t + 3] = v;
      return;
    }
    if (d !== v || l !== f || c !== m || u !== g) {
      let p = 1 - a;
      const h = l * f + c * m + u * g + d * v, A = h >= 0 ? 1 : -1, M = 1 - h * h;
      if (M > Number.EPSILON) {
        const b = Math.sqrt(M), C = Math.atan2(b, h * A);
        p = Math.sin(p * C) / b, a = Math.sin(a * C) / b;
      }
      const T = a * A;
      if (l = l * p + f * T, c = c * p + m * T, u = u * p + g * T, d = d * p + v * T, p === 1 - a) {
        const b = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        l *= b, c *= b, u *= b, d *= b;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r], l = n[r + 1], c = n[r + 2], u = n[r + 3], d = s[o], f = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = a * g + u * d + l * m - c * f, e[t + 1] = l * g + u * f + c * d - a * m, e[t + 2] = c * g + u * m + a * f - l * d, e[t + 3] = u * g - a * d - l * f - c * m, e;
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
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(r / 2), d = a(s / 2), f = l(n / 2), m = l(r / 2), g = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = f * u * d + c * m * g, this._y = c * m * d - f * u * g, this._z = c * u * g + f * m * d, this._w = c * u * d - f * m * g;
        break;
      case "YXZ":
        this._x = f * u * d + c * m * g, this._y = c * m * d - f * u * g, this._z = c * u * g - f * m * d, this._w = c * u * d + f * m * g;
        break;
      case "ZXY":
        this._x = f * u * d - c * m * g, this._y = c * m * d + f * u * g, this._z = c * u * g + f * m * d, this._w = c * u * d - f * m * g;
        break;
      case "ZYX":
        this._x = f * u * d - c * m * g, this._y = c * m * d + f * u * g, this._z = c * u * g - f * m * d, this._w = c * u * d + f * m * g;
        break;
      case "YZX":
        this._x = f * u * d + c * m * g, this._y = c * m * d + f * u * g, this._z = c * u * g - f * m * d, this._w = c * u * d - f * m * g;
        break;
      case "XZY":
        this._x = f * u * d - c * m * g, this._y = c * m * d - f * u * g, this._z = c * u * g + f * m * d, this._w = c * u * d + f * m * g;
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
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], d = t[10], f = n + a + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (o - r) * m;
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (r + o) / m, this._z = (s + c) / m;
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      this._w = (s - c) / m, this._x = (r + o) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      this._w = (o - r) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(_t(this.dot(e), -1, 1)));
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
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + o * a + r * c - s * l, this._y = r * u + o * l + s * a - n * c, this._z = s * u + o * c + n * l - r * a, this._w = o * u - n * a - r * l - s * c, this._onChangeCallback(), this;
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
    const c = Math.sqrt(l), u = Math.atan2(c, a), d = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c;
    return this._w = o * d + this._w * f, this._x = n * d + this._x * f, this._y = r * d + this._y * f, this._z = s * d + this._z * f, this._onChangeCallback(), this;
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
class L {
  constructor(e = 0, t = 0, n = 0) {
    L.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(Zr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Zr.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * r - a * n), u = 2 * (a * t - s * r), d = 2 * (s * n - o * t);
    return this.x = t + l * c + o * d - a * u, this.y = n + l * u + a * c - s * d, this.z = r + l * d + s * u - o * c, this;
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
    return er.copy(this).projectOnVector(e), this.sub(er);
  }
  reflect(e) {
    return this.sub(er.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(_t(n, -1, 1));
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
const er = /* @__PURE__ */ new L(), Zr = /* @__PURE__ */ new kn();
class un {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
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
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ci.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ci.copy(n.boundingBox)), ci.applyMatrix4(e.matrixWorld), this.union(ci);
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
    this.getCenter(Kn), ui.subVectors(this.max, Kn), yn.subVectors(e.a, Kn), Tn.subVectors(e.b, Kn), An.subVectors(e.c, Kn), rn.subVectors(Tn, yn), sn.subVectors(An, Tn), fn.subVectors(yn, An);
    let t = [
      0,
      -rn.z,
      rn.y,
      0,
      -sn.z,
      sn.y,
      0,
      -fn.z,
      fn.y,
      rn.z,
      0,
      -rn.x,
      sn.z,
      0,
      -sn.x,
      fn.z,
      0,
      -fn.x,
      -rn.y,
      rn.x,
      0,
      -sn.y,
      sn.x,
      0,
      -fn.y,
      fn.x,
      0
    ];
    return !tr(t, yn, Tn, An, ui) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !tr(t, yn, Tn, An, ui)) ? !1 : (hi.crossVectors(rn, sn), t = [hi.x, hi.y, hi.z], tr(t, yn, Tn, An, ui));
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
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], zt = /* @__PURE__ */ new L(), ci = /* @__PURE__ */ new un(), yn = /* @__PURE__ */ new L(), Tn = /* @__PURE__ */ new L(), An = /* @__PURE__ */ new L(), rn = /* @__PURE__ */ new L(), sn = /* @__PURE__ */ new L(), fn = /* @__PURE__ */ new L(), Kn = /* @__PURE__ */ new L(), ui = /* @__PURE__ */ new L(), hi = /* @__PURE__ */ new L(), pn = /* @__PURE__ */ new L();
function tr(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    pn.fromArray(i, s);
    const a = r.x * Math.abs(pn.x) + r.y * Math.abs(pn.y) + r.z * Math.abs(pn.z), l = e.dot(pn), c = t.dot(pn), u = n.dot(pn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a)
      return !1;
  }
  return !0;
}
const Ga = /* @__PURE__ */ new un(), $n = /* @__PURE__ */ new L(), nr = /* @__PURE__ */ new L();
class Wn {
  constructor(e = new L(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Ga.setFromPoints(e).getCenter(n);
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
    $n.subVectors(e, this.center);
    const t = $n.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector($n, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (nr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint($n.copy(e.center).add(nr)), this.expandByPoint($n.copy(e.center).sub(nr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const $t = /* @__PURE__ */ new L(), ir = /* @__PURE__ */ new L(), di = /* @__PURE__ */ new L(), an = /* @__PURE__ */ new L(), rr = /* @__PURE__ */ new L(), fi = /* @__PURE__ */ new L(), sr = /* @__PURE__ */ new L();
class Dr {
  constructor(e = new L(), t = new L(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, $t)), this;
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
    const t = $t.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : ($t.copy(this.origin).addScaledVector(this.direction, t), $t.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    ir.copy(e).add(t).multiplyScalar(0.5), di.copy(t).sub(e).normalize(), an.copy(this.origin).sub(ir);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(di), a = an.dot(this.direction), l = -an.dot(di), c = an.lengthSq(), u = Math.abs(1 - o * o);
    let d, f, m, g;
    if (u > 0)
      if (d = o * l - a, f = o * a - l, g = s * u, d >= 0)
        if (f >= -g)
          if (f <= g) {
            const v = 1 / u;
            d *= v, f *= v, m = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * l) + c;
          } else
            f = s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c;
        else
          f = -s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c;
      else
        f <= -g ? (d = Math.max(0, -(-o * s + a)), f = d > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -d * d + f * (f + 2 * l) + c) : f <= g ? (d = 0, f = Math.min(Math.max(-s, -l), s), m = f * (f + 2 * l) + c) : (d = Math.max(0, -(o * s + a)), f = d > 0 ? s : Math.min(Math.max(-s, -l), s), m = -d * d + f * (f + 2 * l) + c);
    else
      f = o > 0 ? -s : s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(ir).addScaledVector(di, f), m;
  }
  intersectSphere(e, t) {
    $t.subVectors(e.center, this.origin);
    const n = $t.dot(this.direction), r = $t.dot($t) - n * n, s = e.radius * e.radius;
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
    const c = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, r = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, r = (e.min.x - f.x) * c), u >= 0 ? (s = (e.min.y - f.y) * u, o = (e.max.y - f.y) * u) : (s = (e.max.y - f.y) * u, o = (e.min.y - f.y) * u), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), d >= 0 ? (a = (e.min.z - f.z) * d, l = (e.max.z - f.z) * d) : (a = (e.max.z - f.z) * d, l = (e.min.z - f.z) * d), n > l || a > r) || ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, $t) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    rr.subVectors(t, e), fi.subVectors(n, e), sr.crossVectors(rr, fi);
    let o = this.direction.dot(sr), a;
    if (o > 0) {
      if (r)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    an.subVectors(this.origin, e);
    const l = a * this.direction.dot(fi.crossVectors(an, fi));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(rr.cross(an));
    if (c < 0 || l + c > o)
      return null;
    const u = -a * an.dot(sr);
    return u < 0 ? null : this.at(u / o, s);
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
  constructor(e, t, n, r, s, o, a, l, c, u, d, f, m, g, v, p) {
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
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, u, d, f, m, g, v, p);
  }
  set(e, t, n, r, s, o, a, l, c, u, d, f, m, g, v, p) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = o, h[9] = a, h[13] = l, h[2] = c, h[6] = u, h[10] = d, h[14] = f, h[3] = m, h[7] = g, h[11] = v, h[15] = p, this;
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
    const t = this.elements, n = e.elements, r = 1 / bn.setFromMatrixColumn(e, 0).length(), s = 1 / bn.setFromMatrixColumn(e, 1).length(), o = 1 / bn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const f = o * u, m = o * d, g = a * u, v = a * d;
      t[0] = l * u, t[4] = -l * d, t[8] = c, t[1] = m + g * c, t[5] = f - v * c, t[9] = -a * l, t[2] = v - f * c, t[6] = g + m * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const f = l * u, m = l * d, g = c * u, v = c * d;
      t[0] = f + v * a, t[4] = g * a - m, t[8] = o * c, t[1] = o * d, t[5] = o * u, t[9] = -a, t[2] = m * a - g, t[6] = v + f * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const f = l * u, m = l * d, g = c * u, v = c * d;
      t[0] = f - v * a, t[4] = -o * d, t[8] = g + m * a, t[1] = m + g * a, t[5] = o * u, t[9] = v - f * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const f = o * u, m = o * d, g = a * u, v = a * d;
      t[0] = l * u, t[4] = g * c - m, t[8] = f * c + v, t[1] = l * d, t[5] = v * c + f, t[9] = m * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const f = o * l, m = o * c, g = a * l, v = a * c;
      t[0] = l * u, t[4] = v - f * d, t[8] = g * d + m, t[1] = d, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = m * d + g, t[10] = f - v * d;
    } else if (e.order === "XZY") {
      const f = o * l, m = o * c, g = a * l, v = a * c;
      t[0] = l * u, t[4] = -d, t[8] = c * u, t[1] = f * d + v, t[5] = o * u, t[9] = m * d - g, t[2] = g * d - m, t[6] = a * u, t[10] = v * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ha, e, Va);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return wt.subVectors(e, t), wt.lengthSq() === 0 && (wt.z = 1), wt.normalize(), on.crossVectors(n, wt), on.lengthSq() === 0 && (Math.abs(n.z) === 1 ? wt.x += 1e-4 : wt.z += 1e-4, wt.normalize(), on.crossVectors(n, wt)), on.normalize(), pi.crossVectors(wt, on), r[0] = on.x, r[4] = pi.x, r[8] = wt.x, r[1] = on.y, r[5] = pi.y, r[9] = wt.y, r[2] = on.z, r[6] = pi.z, r[10] = wt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], d = n[5], f = n[9], m = n[13], g = n[2], v = n[6], p = n[10], h = n[14], A = n[3], M = n[7], T = n[11], b = n[15], C = r[0], R = r[4], V = r[8], E = r[12], x = r[1], F = r[5], q = r[9], j = r[13], P = r[2], H = r[6], X = r[10], k = r[14], $ = r[3], Z = r[7], Y = r[11], D = r[15];
    return s[0] = o * C + a * x + l * P + c * $, s[4] = o * R + a * F + l * H + c * Z, s[8] = o * V + a * q + l * X + c * Y, s[12] = o * E + a * j + l * k + c * D, s[1] = u * C + d * x + f * P + m * $, s[5] = u * R + d * F + f * H + m * Z, s[9] = u * V + d * q + f * X + m * Y, s[13] = u * E + d * j + f * k + m * D, s[2] = g * C + v * x + p * P + h * $, s[6] = g * R + v * F + p * H + h * Z, s[10] = g * V + v * q + p * X + h * Y, s[14] = g * E + v * j + p * k + h * D, s[3] = A * C + M * x + T * P + b * $, s[7] = A * R + M * F + T * H + b * Z, s[11] = A * V + M * q + T * X + b * Y, s[15] = A * E + M * j + T * k + b * D, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], d = e[6], f = e[10], m = e[14], g = e[3], v = e[7], p = e[11], h = e[15];
    return g * (+s * l * d - r * c * d - s * a * f + n * c * f + r * a * m - n * l * m) + v * (+t * l * m - t * c * f + s * o * f - r * o * m + r * c * u - s * l * u) + p * (+t * c * d - t * a * m - s * o * d + n * o * m + s * a * u - n * c * u) + h * (-r * a * u - t * l * d + t * a * f + r * o * d - n * o * f + n * l * u);
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], d = e[9], f = e[10], m = e[11], g = e[12], v = e[13], p = e[14], h = e[15], A = d * p * c - v * f * c + v * l * m - a * p * m - d * l * h + a * f * h, M = g * f * c - u * p * c - g * l * m + o * p * m + u * l * h - o * f * h, T = u * v * c - g * d * c + g * a * m - o * v * m - u * a * h + o * d * h, b = g * d * l - u * v * l - g * a * f + o * v * f + u * a * p - o * d * p, C = t * A + n * M + r * T + s * b;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / C;
    return e[0] = A * R, e[1] = (v * f * s - d * p * s - v * r * m + n * p * m + d * r * h - n * f * h) * R, e[2] = (a * p * s - v * l * s + v * r * c - n * p * c - a * r * h + n * l * h) * R, e[3] = (d * l * s - a * f * s - d * r * c + n * f * c + a * r * m - n * l * m) * R, e[4] = M * R, e[5] = (u * p * s - g * f * s + g * r * m - t * p * m - u * r * h + t * f * h) * R, e[6] = (g * l * s - o * p * s - g * r * c + t * p * c + o * r * h - t * l * h) * R, e[7] = (o * f * s - u * l * s + u * r * c - t * f * c - o * r * m + t * l * m) * R, e[8] = T * R, e[9] = (g * d * s - u * v * s - g * n * m + t * v * m + u * n * h - t * d * h) * R, e[10] = (o * v * s - g * a * s + g * n * c - t * v * c - o * n * h + t * a * h) * R, e[11] = (u * a * s - o * d * s - u * n * c + t * d * c + o * n * m - t * a * m) * R, e[12] = b * R, e[13] = (u * v * r - g * d * r + g * n * f - t * v * f - u * n * p + t * d * p) * R, e[14] = (g * a * r - o * v * r - g * n * l + t * v * l + o * n * p - t * a * p) * R, e[15] = (o * d * r - u * a * r + u * n * l - t * d * l - o * n * f + t * a * f) * R, this;
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
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, l = e.z, c = s * o, u = s * a;
    return this.set(
      c * o + n,
      c * a - r * l,
      c * l + r * a,
      0,
      c * a + r * l,
      u * a + n,
      u * l - r * o,
      0,
      c * l - r * a,
      u * l + r * o,
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
    const r = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, u = o + o, d = a + a, f = s * c, m = s * u, g = s * d, v = o * u, p = o * d, h = a * d, A = l * c, M = l * u, T = l * d, b = n.x, C = n.y, R = n.z;
    return r[0] = (1 - (v + h)) * b, r[1] = (m + T) * b, r[2] = (g - M) * b, r[3] = 0, r[4] = (m - T) * C, r[5] = (1 - (f + h)) * C, r[6] = (p + A) * C, r[7] = 0, r[8] = (g + M) * R, r[9] = (p - A) * R, r[10] = (1 - (f + v)) * R, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = bn.set(r[0], r[1], r[2]).length();
    const o = bn.set(r[4], r[5], r[6]).length(), a = bn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Gt.copy(this);
    const c = 1 / s, u = 1 / o, d = 1 / a;
    return Gt.elements[0] *= c, Gt.elements[1] *= c, Gt.elements[2] *= c, Gt.elements[4] *= u, Gt.elements[5] *= u, Gt.elements[6] *= u, Gt.elements[8] *= d, Gt.elements[9] *= d, Gt.elements[10] *= d, t.setFromRotationMatrix(Gt), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, r, s, o, a = 2e3) {
    const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r);
    let m, g;
    if (a === 2e3)
      m = -(o + s) / (o - s), g = -2 * o * s / (o - s);
    else if (a === 2001)
      m = -o / (o - s), g = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, o, a = 2e3) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - r), d = 1 / (o - s), f = (t + e) * c, m = (n + r) * u;
    let g, v;
    if (a === 2e3)
      g = (o + s) * d, v = -2 * d;
    else if (a === 2001)
      g = s * d, v = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const bn = /* @__PURE__ */ new L(), Gt = /* @__PURE__ */ new Ge(), Ha = /* @__PURE__ */ new L(0, 0, 0), Va = /* @__PURE__ */ new L(1, 1, 1), on = /* @__PURE__ */ new L(), pi = /* @__PURE__ */ new L(), wt = /* @__PURE__ */ new L(), Kr = /* @__PURE__ */ new Ge(), $r = /* @__PURE__ */ new kn();
class Wi {
  constructor(e = 0, t = 0, n = 0, r = Wi.DEFAULT_ORDER) {
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
    const r = e.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], u = r[9], d = r[2], f = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(_t(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-_t(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(_t(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-_t(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(_t(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-_t(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Kr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Kr, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return $r.setFromEuler(this), this.setFromQuaternion($r, e);
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
Wi.DEFAULT_ORDER = "XYZ";
class Xi {
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
let ka = 0;
const Jr = /* @__PURE__ */ new L(), Rn = /* @__PURE__ */ new kn(), Jt = /* @__PURE__ */ new Ge(), mi = /* @__PURE__ */ new L(), Jn = /* @__PURE__ */ new L(), Wa = /* @__PURE__ */ new L(), Xa = /* @__PURE__ */ new kn(), Qr = /* @__PURE__ */ new L(1, 0, 0), es = /* @__PURE__ */ new L(0, 1, 0), ts = /* @__PURE__ */ new L(0, 0, 1), qa = { type: "added" }, Ya = { type: "removed" };
class Et extends Vn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ka++ }), this.uuid = tn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Et.DEFAULT_UP.clone();
    const e = new L(), t = new Wi(), n = new kn(), r = new L(1, 1, 1);
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
    }), this.matrix = new Ge(), this.matrixWorld = new Ge(), this.matrixAutoUpdate = Et.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Xi(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return Rn.setFromAxisAngle(e, t), this.quaternion.multiply(Rn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Rn.setFromAxisAngle(e, t), this.quaternion.premultiply(Rn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Qr, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(es, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ts, e);
  }
  translateOnAxis(e, t) {
    return Jr.copy(e).applyQuaternion(this.quaternion), this.position.add(Jr.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Qr, e);
  }
  translateY(e) {
    return this.translateOnAxis(es, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ts, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Jt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? mi.copy(e) : mi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Jn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Jt.lookAt(Jn, mi, this.up) : Jt.lookAt(mi, Jn, this.up), this.quaternion.setFromRotationMatrix(Jt), r && (Jt.extractRotation(r.matrixWorld), Rn.setFromRotationMatrix(Jt), this.quaternion.premultiply(Rn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(qa)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ya)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Jt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Jt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Jt), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Jn, e, Wa), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Jn, Xa, e), e;
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
          for (let c = 0, u = l.length; c < u; c++) {
            const d = l[c];
            s(e.shapes, d);
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
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), d = o(e.shapes), f = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
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
Et.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
Et.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ht = /* @__PURE__ */ new L(), Qt = /* @__PURE__ */ new L(), ar = /* @__PURE__ */ new L(), en = /* @__PURE__ */ new L(), wn = /* @__PURE__ */ new L(), Cn = /* @__PURE__ */ new L(), ns = /* @__PURE__ */ new L(), or = /* @__PURE__ */ new L(), lr = /* @__PURE__ */ new L(), cr = /* @__PURE__ */ new L();
let _i = !1;
class Vt {
  constructor(e = new L(), t = new L(), n = new L()) {
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
    Ht.subVectors(r, t), Qt.subVectors(n, t), ar.subVectors(e, t);
    const o = Ht.dot(Ht), a = Ht.dot(Qt), l = Ht.dot(ar), c = Qt.dot(Qt), u = Qt.dot(ar), d = o * c - a * a;
    if (d === 0)
      return s.set(-2, -1, -1);
    const f = 1 / d, m = (c * l - a * u) * f, g = (o * u - a * l) * f;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, en), en.x >= 0 && en.y >= 0 && en.x + en.y <= 1;
  }
  static getUV(e, t, n, r, s, o, a, l) {
    return _i === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), _i = !0), this.getInterpolation(e, t, n, r, s, o, a, l);
  }
  static getInterpolation(e, t, n, r, s, o, a, l) {
    return this.getBarycoord(e, t, n, r, en), l.setScalar(0), l.addScaledVector(s, en.x), l.addScaledVector(o, en.y), l.addScaledVector(a, en.z), l;
  }
  static isFrontFacing(e, t, n, r) {
    return Ht.subVectors(n, t), Qt.subVectors(e, t), Ht.cross(Qt).dot(r) < 0;
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
    return Ht.subVectors(this.c, this.b), Qt.subVectors(this.a, this.b), Ht.cross(Qt).length() * 0.5;
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
    return _i === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), _i = !0), Vt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
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
    wn.subVectors(r, n), Cn.subVectors(s, n), or.subVectors(e, n);
    const l = wn.dot(or), c = Cn.dot(or);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    lr.subVectors(e, r);
    const u = wn.dot(lr), d = Cn.dot(lr);
    if (u >= 0 && d <= u)
      return t.copy(r);
    const f = l * d - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return o = l / (l - u), t.copy(n).addScaledVector(wn, o);
    cr.subVectors(e, s);
    const m = wn.dot(cr), g = Cn.dot(cr);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const v = m * c - l * g;
    if (v <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(Cn, a);
    const p = u * g - m * d;
    if (p <= 0 && d - u >= 0 && m - g >= 0)
      return ns.subVectors(s, r), a = (d - u) / (d - u + (m - g)), t.copy(r).addScaledVector(ns, a);
    const h = 1 / (p + v + f);
    return o = v * h, a = f * h, t.copy(n).addScaledVector(wn, o).addScaledVector(Cn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Ks = {
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
}, ln = { h: 0, s: 0, l: 0 }, gi = { h: 0, s: 0, l: 0 };
function ur(i, e, t) {
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
    if (e = Lr(e, 1), t = _t(t, 0, 1), n = _t(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = ur(o, s, e + 1 / 3), this.g = ur(o, s, e), this.b = ur(o, s, e - 1 / 3);
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
    const n = Ks[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = zn(e.r), this.g = zn(e.g), this.b = zn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ji(e.r), this.g = Ji(e.g), this.b = Ji(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = dt) {
    return ke.fromWorkingColorSpace(mt.copy(this), e), Math.round(_t(mt.r * 255, 0, 255)) * 65536 + Math.round(_t(mt.g * 255, 0, 255)) * 256 + Math.round(_t(mt.b * 255, 0, 255));
  }
  getHexString(e = dt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ke.workingColorSpace) {
    ke.fromWorkingColorSpace(mt.copy(this), t);
    const n = mt.r, r = mt.g, s = mt.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const d = o - a;
      switch (c = u <= 0.5 ? d / (o + a) : d / (2 - o - a), o) {
        case n:
          l = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / d + 2;
          break;
        case s:
          l = (n - r) / d + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
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
    return this.getHSL(ln), this.setHSL(ln.h + e, ln.s + t, ln.l + n);
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
    this.getHSL(ln), e.getHSL(gi);
    const n = ni(ln.h, gi.h, t), r = ni(ln.s, gi.s, t), s = ni(ln.l, gi.l, t);
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
ze.NAMES = Ks;
let ja = 0;
class si extends Vn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ja++ }), this.uuid = tn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ze(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
class Xn extends si {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ze(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const it = /* @__PURE__ */ new L(), vi = /* @__PURE__ */ new Le();
class Lt {
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
        vi.fromBufferAttribute(this, t), vi.applyMatrix3(e), this.setXY(t, vi.x, vi.y);
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
class $s extends Lt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Js extends Lt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Dt extends Lt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Za = 0;
const Ft = /* @__PURE__ */ new Ge(), hr = /* @__PURE__ */ new Et(), Pn = /* @__PURE__ */ new L(), Ct = /* @__PURE__ */ new un(), Qn = /* @__PURE__ */ new un(), lt = /* @__PURE__ */ new L();
class Tt extends Vn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Za++ }), this.uuid = tn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (qs(e) ? Js : $s)(e, 1) : this.index = e, this;
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
    return hr.lookAt(e), hr.updateMatrix(), this.applyMatrix4(hr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Pn).negate(), this.translate(Pn.x, Pn.y, Pn.z), this;
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
        new L(-1 / 0, -1 / 0, -1 / 0),
        new L(1 / 0, 1 / 0, 1 / 0)
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
    this.boundingSphere === null && (this.boundingSphere = new Wn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Ct.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          Qn.setFromBufferAttribute(a), this.morphTargetsRelative ? (lt.addVectors(Ct.min, Qn.min), Ct.expandByPoint(lt), lt.addVectors(Ct.max, Qn.max), Ct.expandByPoint(lt)) : (Ct.expandByPoint(Qn.min), Ct.expandByPoint(Qn.max));
        }
      Ct.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        lt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(lt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            lt.fromBufferAttribute(a, c), l && (Pn.fromBufferAttribute(e, c), lt.add(Pn)), r = Math.max(r, n.distanceToSquared(lt));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Lt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let x = 0; x < a; x++)
      c[x] = new L(), u[x] = new L();
    const d = new L(), f = new L(), m = new L(), g = new Le(), v = new Le(), p = new Le(), h = new L(), A = new L();
    function M(x, F, q) {
      d.fromArray(r, x * 3), f.fromArray(r, F * 3), m.fromArray(r, q * 3), g.fromArray(o, x * 2), v.fromArray(o, F * 2), p.fromArray(o, q * 2), f.sub(d), m.sub(d), v.sub(g), p.sub(g);
      const j = 1 / (v.x * p.y - p.x * v.y);
      isFinite(j) && (h.copy(f).multiplyScalar(p.y).addScaledVector(m, -v.y).multiplyScalar(j), A.copy(m).multiplyScalar(v.x).addScaledVector(f, -p.x).multiplyScalar(j), c[x].add(h), c[F].add(h), c[q].add(h), u[x].add(A), u[F].add(A), u[q].add(A));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: n.length
    }]);
    for (let x = 0, F = T.length; x < F; ++x) {
      const q = T[x], j = q.start, P = q.count;
      for (let H = j, X = j + P; H < X; H += 3)
        M(
          n[H + 0],
          n[H + 1],
          n[H + 2]
        );
    }
    const b = new L(), C = new L(), R = new L(), V = new L();
    function E(x) {
      R.fromArray(s, x * 3), V.copy(R);
      const F = c[x];
      b.copy(F), b.sub(R.multiplyScalar(R.dot(F))).normalize(), C.crossVectors(V, F);
      const j = C.dot(u[x]) < 0 ? -1 : 1;
      l[x * 4] = b.x, l[x * 4 + 1] = b.y, l[x * 4 + 2] = b.z, l[x * 4 + 3] = j;
    }
    for (let x = 0, F = T.length; x < F; ++x) {
      const q = T[x], j = q.start, P = q.count;
      for (let H = j, X = j + P; H < X; H += 3)
        E(n[H + 0]), E(n[H + 1]), E(n[H + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Lt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const r = new L(), s = new L(), o = new L(), a = new L(), l = new L(), c = new L(), u = new L(), d = new L();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0), v = e.getX(f + 1), p = e.getX(f + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, v), o.fromBufferAttribute(t, p), u.subVectors(o, s), d.subVectors(r, s), u.cross(d), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, p), a.add(u), l.add(u), c.add(u), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          r.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), u.subVectors(o, s), d.subVectors(r, s), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
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
      const c = a.array, u = a.itemSize, d = a.normalized, f = new c.constructor(l.length * u);
      let m = 0, g = 0;
      for (let v = 0, p = l.length; v < p; v++) {
        a.isInterleavedBufferAttribute ? m = l[v] * a.data.stride + a.offset : m = l[v] * u;
        for (let h = 0; h < u; h++)
          f[g++] = c[m++];
      }
      return new Lt(f, u, d);
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
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u], m = e(f, n);
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
      const c = this.morphAttributes[l], u = [];
      for (let d = 0, f = c.length; d < f; d++) {
        const m = c[d];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (r[l] = u, s = !0);
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
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [], d = s[c];
      for (let f = 0, m = d.length; f < m; f++)
        u.push(d[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const d = o[c];
      this.addGroup(d.start, d.count, d.materialIndex);
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
const is = /* @__PURE__ */ new Ge(), mn = /* @__PURE__ */ new Dr(), xi = /* @__PURE__ */ new Wn(), rs = /* @__PURE__ */ new L(), Ln = /* @__PURE__ */ new L(), Dn = /* @__PURE__ */ new L(), Un = /* @__PURE__ */ new L(), dr = /* @__PURE__ */ new L(), Si = /* @__PURE__ */ new L(), Mi = /* @__PURE__ */ new Le(), Ei = /* @__PURE__ */ new Le(), yi = /* @__PURE__ */ new Le(), ss = /* @__PURE__ */ new L(), as = /* @__PURE__ */ new L(), os = /* @__PURE__ */ new L(), Ti = /* @__PURE__ */ new L(), Ai = /* @__PURE__ */ new L();
class Bt extends Et {
  constructor(e = new Tt(), t = new Xn()) {
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
      Si.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l], d = s[l];
        u !== 0 && (dr.fromBufferAttribute(d, e), o ? Si.addScaledVector(dr, u) : Si.addScaledVector(dr.sub(t), u));
      }
      t.add(Si);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), xi.copy(n.boundingSphere), xi.applyMatrix4(s), mn.copy(e.ray).recast(e.near), !(xi.containsPoint(mn.origin) === !1 && (mn.intersectSphere(xi, rs) === null || mn.origin.distanceToSquared(rs) > (e.far - e.near) ** 2)) && (is.copy(s).invert(), mn.copy(e.ray).applyMatrix4(is), !(n.boundingBox !== null && mn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, mn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, d = s.attributes.normal, f = s.groups, m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, v = f.length; g < v; g++) {
          const p = f[g], h = o[p.materialIndex], A = Math.max(p.start, m.start), M = Math.min(a.count, Math.min(p.start + p.count, m.start + m.count));
          for (let T = A, b = M; T < b; T += 3) {
            const C = a.getX(T), R = a.getX(T + 1), V = a.getX(T + 2);
            r = bi(this, h, e, n, c, u, d, C, R, V), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(a.count, m.start + m.count);
        for (let p = g, h = v; p < h; p += 3) {
          const A = a.getX(p), M = a.getX(p + 1), T = a.getX(p + 2);
          r = bi(this, o, e, n, c, u, d, A, M, T), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, v = f.length; g < v; g++) {
          const p = f[g], h = o[p.materialIndex], A = Math.max(p.start, m.start), M = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
          for (let T = A, b = M; T < b; T += 3) {
            const C = T, R = T + 1, V = T + 2;
            r = bi(this, h, e, n, c, u, d, C, R, V), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(l.count, m.start + m.count);
        for (let p = g, h = v; p < h; p += 3) {
          const A = p, M = p + 1, T = p + 2;
          r = bi(this, o, e, n, c, u, d, A, M, T), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function Ka(i, e, t, n, r, s, o, a) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(o, s, r, !0, a) : l = n.intersectTriangle(r, s, o, e.side === 0, a), l === null)
    return null;
  Ai.copy(a), Ai.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Ai);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Ai.clone(),
    object: i
  };
}
function bi(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, Ln), i.getVertexPosition(l, Dn), i.getVertexPosition(c, Un);
  const u = Ka(i, e, t, n, Ln, Dn, Un, Ti);
  if (u) {
    r && (Mi.fromBufferAttribute(r, a), Ei.fromBufferAttribute(r, l), yi.fromBufferAttribute(r, c), u.uv = Vt.getInterpolation(Ti, Ln, Dn, Un, Mi, Ei, yi, new Le())), s && (Mi.fromBufferAttribute(s, a), Ei.fromBufferAttribute(s, l), yi.fromBufferAttribute(s, c), u.uv1 = Vt.getInterpolation(Ti, Ln, Dn, Un, Mi, Ei, yi, new Le()), u.uv2 = u.uv1), o && (ss.fromBufferAttribute(o, a), as.fromBufferAttribute(o, l), os.fromBufferAttribute(o, c), u.normal = Vt.getInterpolation(Ti, Ln, Dn, Un, ss, as, os, new L()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = {
      a,
      b: l,
      c,
      normal: new L(),
      materialIndex: 0
    };
    Vt.getNormal(Ln, Dn, Un, d.normal), u.face = d;
  }
  return u;
}
class qn extends Tt {
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
    const l = [], c = [], u = [], d = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, o, 2), g("x", "z", "y", 1, -1, e, n, -t, r, o, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new Dt(c, 3)), this.setAttribute("normal", new Dt(u, 3)), this.setAttribute("uv", new Dt(d, 2));
    function g(v, p, h, A, M, T, b, C, R, V, E) {
      const x = T / R, F = b / V, q = T / 2, j = b / 2, P = C / 2, H = R + 1, X = V + 1;
      let k = 0, $ = 0;
      const Z = new L();
      for (let Y = 0; Y < X; Y++) {
        const D = Y * F - j;
        for (let G = 0; G < H; G++) {
          const ae = G * x - q;
          Z[v] = ae * A, Z[p] = D * M, Z[h] = P, c.push(Z.x, Z.y, Z.z), Z[v] = 0, Z[p] = 0, Z[h] = C > 0 ? 1 : -1, u.push(Z.x, Z.y, Z.z), d.push(G / R), d.push(1 - Y / V), k += 1;
        }
      }
      for (let Y = 0; Y < V; Y++)
        for (let D = 0; D < R; D++) {
          const G = f + D + H * Y, ae = f + D + H * (Y + 1), se = f + (D + 1) + H * (Y + 1), le = f + (D + 1) + H * Y;
          l.push(G, ae, le), l.push(ae, se, le), $ += 6;
        }
      a.addGroup(m, $, E), m += $, f += k;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new qn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Gn(i) {
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
    const n = Gn(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function $a(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Qs(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : ke.workingColorSpace;
}
const Mn = { clone: Gn, merge: Mt };
var Ja = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Qa = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class gt extends si {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ja, this.fragmentShader = Qa, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Gn(e.uniforms), this.uniformsGroups = $a(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class ea extends Et {
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
class Nt extends ea {
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
    this.fov = ri * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(ti * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ri * 2 * Math.atan(
      Math.tan(ti * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(ti * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
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
const In = -90, Fn = 1;
class eo extends Et {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Nt(In, Fn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Nt(In, Fn, e, t);
    s.layers = this.layers, this.add(s);
    const o = new Nt(In, Fn, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Nt(In, Fn, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Nt(In, Fn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Nt(In, Fn, e, t);
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
    const [s, o, a, l, c, u] = this.children, d = e.getRenderTarget(), f = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = v, e.setRenderTarget(n, 5, r), e.render(t, u), e.setRenderTarget(d, f, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class ta extends Pt {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, r, s, o, a, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class to extends kt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    t.encoding !== void 0 && (ii("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === 3001 ? dt : Ot), this.texture = new ta(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
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
    }, r = new qn(5, 5, 5), s = new gt({
      name: "CubemapFromEquirect",
      uniforms: Gn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const o = new Bt(r, s), a = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new eo(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const fr = /* @__PURE__ */ new L(), no = /* @__PURE__ */ new L(), io = /* @__PURE__ */ new Ne();
class gn {
  constructor(e = new L(1, 0, 0), t = 0) {
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
    const r = fr.subVectors(n, t).cross(no.subVectors(e, t)).normalize();
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
    const n = e.delta(fr), r = this.normal.dot(n);
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
    const n = t || io.getNormalMatrix(e), r = this.coplanarPoint(fr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const _n = /* @__PURE__ */ new Wn(), Ri = /* @__PURE__ */ new L();
class na {
  constructor(e = new gn(), t = new gn(), n = new gn(), r = new gn(), s = new gn(), o = new gn()) {
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
    const n = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], u = r[5], d = r[6], f = r[7], m = r[8], g = r[9], v = r[10], p = r[11], h = r[12], A = r[13], M = r[14], T = r[15];
    if (n[0].setComponents(l - s, f - c, p - m, T - h).normalize(), n[1].setComponents(l + s, f + c, p + m, T + h).normalize(), n[2].setComponents(l + o, f + u, p + g, T + A).normalize(), n[3].setComponents(l - o, f - u, p - g, T - A).normalize(), n[4].setComponents(l - a, f - d, p - v, T - M).normalize(), t === 2e3)
      n[5].setComponents(l + a, f + d, p + v, T + M).normalize();
    else if (t === 2001)
      n[5].setComponents(a, d, v, M).normalize();
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
      if (Ri.x = r.normal.x > 0 ? e.max.x : e.min.x, Ri.y = r.normal.y > 0 ? e.max.y : e.min.y, Ri.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Ri) < 0)
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
function ia() {
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
function ro(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function r(c, u) {
    const d = c.array, f = c.usage, m = i.createBuffer();
    i.bindBuffer(u, m), i.bufferData(u, d, f), c.onUploadCallback();
    let g;
    if (d instanceof Float32Array)
      g = i.FLOAT;
    else if (d instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          g = i.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = i.UNSIGNED_SHORT;
    else if (d instanceof Int16Array)
      g = i.SHORT;
    else if (d instanceof Uint32Array)
      g = i.UNSIGNED_INT;
    else if (d instanceof Int32Array)
      g = i.INT;
    else if (d instanceof Int8Array)
      g = i.BYTE;
    else if (d instanceof Uint8Array)
      g = i.UNSIGNED_BYTE;
    else if (d instanceof Uint8ClampedArray)
      g = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
    return {
      buffer: m,
      type: g,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function s(c, u, d) {
    const f = u.array, m = u.updateRange;
    i.bindBuffer(d, c), m.count === -1 ? i.bufferSubData(d, 0, f) : (t ? i.bufferSubData(
      d,
      m.offset * f.BYTES_PER_ELEMENT,
      f,
      m.offset,
      m.count
    ) : i.bufferSubData(
      d,
      m.offset * f.BYTES_PER_ELEMENT,
      f.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (i.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d === void 0 ? n.set(c, r(c, u)) : d.version < c.version && (s(d.buffer, c, u), d.version = c.version);
  }
  return {
    get: o,
    remove: a,
    update: l
  };
}
class Ur extends Tt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(r), c = a + 1, u = l + 1, d = e / a, f = t / l, m = [], g = [], v = [], p = [];
    for (let h = 0; h < u; h++) {
      const A = h * f - o;
      for (let M = 0; M < c; M++) {
        const T = M * d - s;
        g.push(T, -A, 0), v.push(0, 0, 1), p.push(M / a), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let A = 0; A < a; A++) {
        const M = A + c * h, T = A + c * (h + 1), b = A + 1 + c * (h + 1), C = A + 1 + c * h;
        m.push(M, T, C), m.push(T, b, C);
      }
    this.setIndex(m), this.setAttribute("position", new Dt(g, 3)), this.setAttribute("normal", new Dt(v, 3)), this.setAttribute("uv", new Dt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ur(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var so = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ao = `#ifdef USE_ALPHAHASH
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
#endif`, oo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, lo = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, co = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, uo = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, ho = `#ifdef USE_AOMAP
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
#endif`, fo = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, po = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, mo = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, _o = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, go = `#ifdef USE_IRIDESCENCE
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
#endif`, vo = `#ifdef USE_BUMPMAP
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
#endif`, xo = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, So = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Mo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Eo = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, yo = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, To = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ao = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, bo = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Ro = `#define PI 3.141592653589793
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
} // validated`, wo = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Co = `vec3 transformedNormal = objectNormal;
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
#endif`, Po = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Lo = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Do = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Uo = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Io = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Fo = `
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
}`, No = `#ifdef USE_ENVMAP
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
#endif`, Oo = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Bo = `#ifdef USE_ENVMAP
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
#endif`, zo = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Go = `#ifdef USE_ENVMAP
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
#endif`, Ho = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Vo = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, ko = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Wo = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Xo = `#ifdef USE_GRADIENTMAP
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
}`, qo = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Yo = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, jo = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Zo = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Ko = `uniform bool receiveShadow;
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
#endif`, $o = `#ifdef USE_ENVMAP
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
#endif`, Jo = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Qo = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, el = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, tl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, nl = `PhysicalMaterial material;
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
#endif`, il = `struct PhysicalMaterial {
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
}`, rl = `
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
#endif`, sl = `#if defined( RE_IndirectDiffuse )
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
#endif`, al = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ol = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, ll = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, cl = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, ul = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, hl = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, dl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, fl = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, pl = `#if defined( USE_POINTS_UV )
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
#endif`, ml = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, _l = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, gl = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, vl = `#ifdef USE_MORPHNORMALS
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
#endif`, xl = `#ifdef USE_MORPHTARGETS
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
#endif`, Sl = `#ifdef USE_MORPHTARGETS
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
#endif`, Ml = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, El = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, yl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Tl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Al = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, bl = `#ifdef USE_NORMALMAP
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
#endif`, Rl = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, wl = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Cl = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Pl = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ll = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Dl = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Ul = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Il = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Fl = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Nl = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Ol = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Bl = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, zl = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Gl = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Hl = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Vl = `float getShadowMask() {
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
}`, kl = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Wl = `#ifdef USE_SKINNING
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
#endif`, Xl = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ql = `#ifdef USE_SKINNING
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
#endif`, Yl = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, jl = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Zl = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Kl = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, $l = `#ifdef USE_TRANSMISSION
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
#endif`, Jl = `#ifdef USE_TRANSMISSION
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
#endif`, Ql = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, ec = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, tc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, nc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ic = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, rc = `uniform sampler2D t2D;
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
}`, sc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ac = `#ifdef ENVMAP_TYPE_CUBE
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
}`, oc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, lc = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, cc = `#include <common>
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
}`, uc = `#if DEPTH_PACKING == 3200
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
}`, hc = `#define DISTANCE
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
}`, dc = `#define DISTANCE
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
}`, fc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, pc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, mc = `uniform float scale;
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
}`, _c = `uniform vec3 diffuse;
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
}`, gc = `#include <common>
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
}`, vc = `uniform vec3 diffuse;
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
}`, xc = `#define LAMBERT
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
}`, Sc = `#define LAMBERT
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
}`, Mc = `#define MATCAP
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
}`, Ec = `#define MATCAP
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
}`, yc = `#define NORMAL
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
}`, Tc = `#define NORMAL
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
}`, Ac = `#define PHONG
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
}`, bc = `#define PHONG
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
}`, Rc = `#define STANDARD
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
}`, wc = `#define STANDARD
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
}`, Cc = `#define TOON
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
}`, Pc = `#define TOON
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
}`, Lc = `uniform float size;
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
}`, Dc = `uniform vec3 diffuse;
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
}`, Uc = `#include <common>
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
}`, Ic = `uniform vec3 color;
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
}`, Fc = `uniform float rotation;
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
}`, Nc = `uniform vec3 diffuse;
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
}`, Pe = {
  alphahash_fragment: so,
  alphahash_pars_fragment: ao,
  alphamap_fragment: oo,
  alphamap_pars_fragment: lo,
  alphatest_fragment: co,
  alphatest_pars_fragment: uo,
  aomap_fragment: ho,
  aomap_pars_fragment: fo,
  begin_vertex: po,
  beginnormal_vertex: mo,
  bsdfs: _o,
  iridescence_fragment: go,
  bumpmap_pars_fragment: vo,
  clipping_planes_fragment: xo,
  clipping_planes_pars_fragment: So,
  clipping_planes_pars_vertex: Mo,
  clipping_planes_vertex: Eo,
  color_fragment: yo,
  color_pars_fragment: To,
  color_pars_vertex: Ao,
  color_vertex: bo,
  common: Ro,
  cube_uv_reflection_fragment: wo,
  defaultnormal_vertex: Co,
  displacementmap_pars_vertex: Po,
  displacementmap_vertex: Lo,
  emissivemap_fragment: Do,
  emissivemap_pars_fragment: Uo,
  colorspace_fragment: Io,
  colorspace_pars_fragment: Fo,
  envmap_fragment: No,
  envmap_common_pars_fragment: Oo,
  envmap_pars_fragment: Bo,
  envmap_pars_vertex: zo,
  envmap_physical_pars_fragment: $o,
  envmap_vertex: Go,
  fog_vertex: Ho,
  fog_pars_vertex: Vo,
  fog_fragment: ko,
  fog_pars_fragment: Wo,
  gradientmap_pars_fragment: Xo,
  lightmap_fragment: qo,
  lightmap_pars_fragment: Yo,
  lights_lambert_fragment: jo,
  lights_lambert_pars_fragment: Zo,
  lights_pars_begin: Ko,
  lights_toon_fragment: Jo,
  lights_toon_pars_fragment: Qo,
  lights_phong_fragment: el,
  lights_phong_pars_fragment: tl,
  lights_physical_fragment: nl,
  lights_physical_pars_fragment: il,
  lights_fragment_begin: rl,
  lights_fragment_maps: sl,
  lights_fragment_end: al,
  logdepthbuf_fragment: ol,
  logdepthbuf_pars_fragment: ll,
  logdepthbuf_pars_vertex: cl,
  logdepthbuf_vertex: ul,
  map_fragment: hl,
  map_pars_fragment: dl,
  map_particle_fragment: fl,
  map_particle_pars_fragment: pl,
  metalnessmap_fragment: ml,
  metalnessmap_pars_fragment: _l,
  morphcolor_vertex: gl,
  morphnormal_vertex: vl,
  morphtarget_pars_vertex: xl,
  morphtarget_vertex: Sl,
  normal_fragment_begin: Ml,
  normal_fragment_maps: El,
  normal_pars_fragment: yl,
  normal_pars_vertex: Tl,
  normal_vertex: Al,
  normalmap_pars_fragment: bl,
  clearcoat_normal_fragment_begin: Rl,
  clearcoat_normal_fragment_maps: wl,
  clearcoat_pars_fragment: Cl,
  iridescence_pars_fragment: Pl,
  opaque_fragment: Ll,
  packing: Dl,
  premultiplied_alpha_fragment: Ul,
  project_vertex: Il,
  dithering_fragment: Fl,
  dithering_pars_fragment: Nl,
  roughnessmap_fragment: Ol,
  roughnessmap_pars_fragment: Bl,
  shadowmap_pars_fragment: zl,
  shadowmap_pars_vertex: Gl,
  shadowmap_vertex: Hl,
  shadowmask_pars_fragment: Vl,
  skinbase_vertex: kl,
  skinning_pars_vertex: Wl,
  skinning_vertex: Xl,
  skinnormal_vertex: ql,
  specularmap_fragment: Yl,
  specularmap_pars_fragment: jl,
  tonemapping_fragment: Zl,
  tonemapping_pars_fragment: Kl,
  transmission_fragment: $l,
  transmission_pars_fragment: Jl,
  uv_pars_fragment: Ql,
  uv_pars_vertex: ec,
  uv_vertex: tc,
  worldpos_vertex: nc,
  background_vert: ic,
  background_frag: rc,
  backgroundCube_vert: sc,
  backgroundCube_frag: ac,
  cube_vert: oc,
  cube_frag: lc,
  depth_vert: cc,
  depth_frag: uc,
  distanceRGBA_vert: hc,
  distanceRGBA_frag: dc,
  equirect_vert: fc,
  equirect_frag: pc,
  linedashed_vert: mc,
  linedashed_frag: _c,
  meshbasic_vert: gc,
  meshbasic_frag: vc,
  meshlambert_vert: xc,
  meshlambert_frag: Sc,
  meshmatcap_vert: Mc,
  meshmatcap_frag: Ec,
  meshnormal_vert: yc,
  meshnormal_frag: Tc,
  meshphong_vert: Ac,
  meshphong_frag: bc,
  meshphysical_vert: Rc,
  meshphysical_frag: wc,
  meshtoon_vert: Cc,
  meshtoon_frag: Pc,
  points_vert: Lc,
  points_frag: Dc,
  shadow_vert: Uc,
  shadow_frag: Ic,
  sprite_vert: Fc,
  sprite_frag: Nc
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
    normalScale: { value: /* @__PURE__ */ new Le(1, 1) }
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
    center: { value: /* @__PURE__ */ new Le(0.5, 0.5) },
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
    vertexShader: Pe.meshbasic_vert,
    fragmentShader: Pe.meshbasic_frag
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
    vertexShader: Pe.meshlambert_vert,
    fragmentShader: Pe.meshlambert_frag
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
    vertexShader: Pe.meshphong_vert,
    fragmentShader: Pe.meshphong_frag
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
    vertexShader: Pe.meshphysical_vert,
    fragmentShader: Pe.meshphysical_frag
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
    vertexShader: Pe.meshtoon_vert,
    fragmentShader: Pe.meshtoon_frag
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
    vertexShader: Pe.meshmatcap_vert,
    fragmentShader: Pe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Mt([
      ne.points,
      ne.fog
    ]),
    vertexShader: Pe.points_vert,
    fragmentShader: Pe.points_frag
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
    vertexShader: Pe.linedashed_vert,
    fragmentShader: Pe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.displacementmap
    ]),
    vertexShader: Pe.depth_vert,
    fragmentShader: Pe.depth_frag
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
    vertexShader: Pe.meshnormal_vert,
    fragmentShader: Pe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Mt([
      ne.sprite,
      ne.fog
    ]),
    vertexShader: Pe.sprite_vert,
    fragmentShader: Pe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ne() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Pe.background_vert,
    fragmentShader: Pe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Pe.backgroundCube_vert,
    fragmentShader: Pe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Pe.cube_vert,
    fragmentShader: Pe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Pe.equirect_vert,
    fragmentShader: Pe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Mt([
      ne.common,
      ne.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Pe.distanceRGBA_vert,
    fragmentShader: Pe.distanceRGBA_frag
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
    vertexShader: Pe.shadow_vert,
    fragmentShader: Pe.shadow_frag
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
      clearcoatNormalScale: { value: /* @__PURE__ */ new Le(1, 1) },
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
      transmissionSamplerSize: { value: /* @__PURE__ */ new Le() },
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
      anisotropyVector: { value: /* @__PURE__ */ new Le() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ne() }
    }
  ]),
  vertexShader: Pe.meshphysical_vert,
  fragmentShader: Pe.meshphysical_frag
};
const wi = { r: 0, b: 0, g: 0 };
function Oc(i, e, t, n, r, s, o) {
  const a = new ze(0);
  let l = s === !0 ? 0 : 1, c, u, d = null, f = 0, m = null;
  function g(p, h) {
    let A = !1, M = h.isScene === !0 ? h.background : null;
    M && M.isTexture && (M = (h.backgroundBlurriness > 0 ? t : e).get(M)), M === null ? v(a, l) : M && M.isColor && (v(M, 1), A = !0);
    const T = i.xr.getEnvironmentBlendMode();
    T === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : T === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || A) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), M && (M.isCubeTexture || M.mapping === 306) ? (u === void 0 && (u = new Bt(
      new qn(1, 1, 1),
      new gt({
        name: "BackgroundCubeMaterial",
        uniforms: Gn(yt.backgroundCube.uniforms),
        vertexShader: yt.backgroundCube.vertexShader,
        fragmentShader: yt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(b, C, R) {
      this.matrixWorld.copyPosition(R.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), u.material.uniforms.envMap.value = M, u.material.uniforms.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = h.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, u.material.toneMapped = ke.getTransfer(M.colorSpace) !== je, (d !== M || f !== M.version || m !== i.toneMapping) && (u.material.needsUpdate = !0, d = M, f = M.version, m = i.toneMapping), u.layers.enableAll(), p.unshift(u, u.geometry, u.material, 0, 0, null)) : M && M.isTexture && (c === void 0 && (c = new Bt(
      new Ur(2, 2),
      new gt({
        name: "BackgroundMaterial",
        uniforms: Gn(yt.background.uniforms),
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
    }), r.update(c)), c.material.uniforms.t2D.value = M, c.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, c.material.toneMapped = ke.getTransfer(M.colorSpace) !== je, M.matrixAutoUpdate === !0 && M.updateMatrix(), c.material.uniforms.uvTransform.value.copy(M.matrix), (d !== M || f !== M.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, d = M, f = M.version, m = i.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function v(p, h) {
    p.getRGB(wi, Qs(i)), n.buffers.color.setClear(wi.r, wi.g, wi.b, h, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(p, h = 1) {
      a.set(p), l = h, v(a, l);
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
function Bc(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, l = p(null);
  let c = l, u = !1;
  function d(P, H, X, k, $) {
    let Z = !1;
    if (o) {
      const Y = v(k, X, H);
      c !== Y && (c = Y, m(c.object)), Z = h(P, k, X, $), Z && A(P, k, X, $);
    } else {
      const Y = H.wireframe === !0;
      (c.geometry !== k.id || c.program !== X.id || c.wireframe !== Y) && (c.geometry = k.id, c.program = X.id, c.wireframe = Y, Z = !0);
    }
    $ !== null && t.update($, i.ELEMENT_ARRAY_BUFFER), (Z || u) && (u = !1, V(P, H, X, k), $ !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get($).buffer));
  }
  function f() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function m(P) {
    return n.isWebGL2 ? i.bindVertexArray(P) : s.bindVertexArrayOES(P);
  }
  function g(P) {
    return n.isWebGL2 ? i.deleteVertexArray(P) : s.deleteVertexArrayOES(P);
  }
  function v(P, H, X) {
    const k = X.wireframe === !0;
    let $ = a[P.id];
    $ === void 0 && ($ = {}, a[P.id] = $);
    let Z = $[H.id];
    Z === void 0 && (Z = {}, $[H.id] = Z);
    let Y = Z[k];
    return Y === void 0 && (Y = p(f()), Z[k] = Y), Y;
  }
  function p(P) {
    const H = [], X = [], k = [];
    for (let $ = 0; $ < r; $++)
      H[$] = 0, X[$] = 0, k[$] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: H,
      enabledAttributes: X,
      attributeDivisors: k,
      object: P,
      attributes: {},
      index: null
    };
  }
  function h(P, H, X, k) {
    const $ = c.attributes, Z = H.attributes;
    let Y = 0;
    const D = X.getAttributes();
    for (const G in D)
      if (D[G].location >= 0) {
        const se = $[G];
        let le = Z[G];
        if (le === void 0 && (G === "instanceMatrix" && P.instanceMatrix && (le = P.instanceMatrix), G === "instanceColor" && P.instanceColor && (le = P.instanceColor)), se === void 0 || se.attribute !== le || le && se.data !== le.data)
          return !0;
        Y++;
      }
    return c.attributesNum !== Y || c.index !== k;
  }
  function A(P, H, X, k) {
    const $ = {}, Z = H.attributes;
    let Y = 0;
    const D = X.getAttributes();
    for (const G in D)
      if (D[G].location >= 0) {
        let se = Z[G];
        se === void 0 && (G === "instanceMatrix" && P.instanceMatrix && (se = P.instanceMatrix), G === "instanceColor" && P.instanceColor && (se = P.instanceColor));
        const le = {};
        le.attribute = se, se && se.data && (le.data = se.data), $[G] = le, Y++;
      }
    c.attributes = $, c.attributesNum = Y, c.index = k;
  }
  function M() {
    const P = c.newAttributes;
    for (let H = 0, X = P.length; H < X; H++)
      P[H] = 0;
  }
  function T(P) {
    b(P, 0);
  }
  function b(P, H) {
    const X = c.newAttributes, k = c.enabledAttributes, $ = c.attributeDivisors;
    X[P] = 1, k[P] === 0 && (i.enableVertexAttribArray(P), k[P] = 1), $[P] !== H && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](P, H), $[P] = H);
  }
  function C() {
    const P = c.newAttributes, H = c.enabledAttributes;
    for (let X = 0, k = H.length; X < k; X++)
      H[X] !== P[X] && (i.disableVertexAttribArray(X), H[X] = 0);
  }
  function R(P, H, X, k, $, Z, Y) {
    Y === !0 ? i.vertexAttribIPointer(P, H, X, $, Z) : i.vertexAttribPointer(P, H, X, k, $, Z);
  }
  function V(P, H, X, k) {
    if (n.isWebGL2 === !1 && (P.isInstancedMesh || k.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    M();
    const $ = k.attributes, Z = X.getAttributes(), Y = H.defaultAttributeValues;
    for (const D in Z) {
      const G = Z[D];
      if (G.location >= 0) {
        let ae = $[D];
        if (ae === void 0 && (D === "instanceMatrix" && P.instanceMatrix && (ae = P.instanceMatrix), D === "instanceColor" && P.instanceColor && (ae = P.instanceColor)), ae !== void 0) {
          const se = ae.normalized, le = ae.itemSize, pe = t.get(ae);
          if (pe === void 0)
            continue;
          const we = pe.buffer, ye = pe.type, Ce = pe.bytesPerElement, Ke = n.isWebGL2 === !0 && (ye === i.INT || ye === i.UNSIGNED_INT || ae.gpuType === 1013);
          if (ae.isInterleavedBufferAttribute) {
            const Ue = ae.data, I = Ue.stride, At = ae.offset;
            if (Ue.isInstancedInterleavedBuffer) {
              for (let me = 0; me < G.locationSize; me++)
                b(G.location + me, Ue.meshPerAttribute);
              P.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = Ue.meshPerAttribute * Ue.count);
            } else
              for (let me = 0; me < G.locationSize; me++)
                T(G.location + me);
            i.bindBuffer(i.ARRAY_BUFFER, we);
            for (let me = 0; me < G.locationSize; me++)
              R(
                G.location + me,
                le / G.locationSize,
                ye,
                se,
                I * Ce,
                (At + le / G.locationSize * me) * Ce,
                Ke
              );
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let Ue = 0; Ue < G.locationSize; Ue++)
                b(G.location + Ue, ae.meshPerAttribute);
              P.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let Ue = 0; Ue < G.locationSize; Ue++)
                T(G.location + Ue);
            i.bindBuffer(i.ARRAY_BUFFER, we);
            for (let Ue = 0; Ue < G.locationSize; Ue++)
              R(
                G.location + Ue,
                le / G.locationSize,
                ye,
                se,
                le * Ce,
                le / G.locationSize * Ue * Ce,
                Ke
              );
          }
        } else if (Y !== void 0) {
          const se = Y[D];
          if (se !== void 0)
            switch (se.length) {
              case 2:
                i.vertexAttrib2fv(G.location, se);
                break;
              case 3:
                i.vertexAttrib3fv(G.location, se);
                break;
              case 4:
                i.vertexAttrib4fv(G.location, se);
                break;
              default:
                i.vertexAttrib1fv(G.location, se);
            }
        }
      }
    }
    C();
  }
  function E() {
    q();
    for (const P in a) {
      const H = a[P];
      for (const X in H) {
        const k = H[X];
        for (const $ in k)
          g(k[$].object), delete k[$];
        delete H[X];
      }
      delete a[P];
    }
  }
  function x(P) {
    if (a[P.id] === void 0)
      return;
    const H = a[P.id];
    for (const X in H) {
      const k = H[X];
      for (const $ in k)
        g(k[$].object), delete k[$];
      delete H[X];
    }
    delete a[P.id];
  }
  function F(P) {
    for (const H in a) {
      const X = a[H];
      if (X[P.id] === void 0)
        continue;
      const k = X[P.id];
      for (const $ in k)
        g(k[$].object), delete k[$];
      delete X[P.id];
    }
  }
  function q() {
    j(), u = !0, c !== l && (c = l, m(c.object));
  }
  function j() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: d,
    reset: q,
    resetDefaultState: j,
    dispose: E,
    releaseStatesOfGeometry: x,
    releaseStatesOfProgram: F,
    initAttributes: M,
    enableAttribute: T,
    disableUnusedAttributes: C
  };
}
function zc(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, u) {
    i.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, d) {
    if (d === 0)
      return;
    let f, m;
    if (r)
      f = i, m = "drawArraysInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[m](s, c, u, d), t.update(u, s, d);
  }
  this.setMode = o, this.render = a, this.renderInstances = l;
}
function Gc(i, e, t) {
  let n;
  function r() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(R) {
    if (R === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      R = "mediump";
    }
    return R === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), f = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), v = i.getParameter(i.MAX_VERTEX_ATTRIBS), p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), h = i.getParameter(i.MAX_VARYING_VECTORS), A = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), M = f > 0, T = o || e.has("OES_texture_float"), b = M && T, C = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: v,
    maxVertexUniforms: p,
    maxVaryings: h,
    maxFragmentUniforms: A,
    vertexTextures: M,
    floatFragmentTextures: T,
    floatVertexTextures: b,
    maxSamples: C
  };
}
function Hc(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new gn(), a = new Ne(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const m = d.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = f, n = d.length, m;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, f) {
    t = u(d, f, 0);
  }, this.setState = function(d, f, m) {
    const g = d.clippingPlanes, v = d.clipIntersection, p = d.clipShadows, h = i.get(d);
    if (!r || g === null || g.length === 0 || s && !p)
      s ? u(null) : c();
    else {
      const A = s ? 0 : n, M = A * 4;
      let T = h.clippingState || null;
      l.value = T, T = u(g, f, M, m);
      for (let b = 0; b !== M; ++b)
        T[b] = t[b];
      h.clippingState = T, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(d, f, m, g) {
    const v = d !== null ? d.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const h = m + v * 4, A = f.matrixWorldInverse;
        a.getNormalMatrix(A), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let M = 0, T = m; M !== v; ++M, T += 4)
          o.copy(d[M]).applyMatrix4(A, a), o.normal.toArray(p, T), p[T + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = v, e.numIntersection = 0, p;
  }
}
function Vc(i) {
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
            const c = new to(l.height / 2);
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
class Ir extends ea {
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
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, o = s + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const On = 4, ls = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], xn = 20, pr = /* @__PURE__ */ new Ir(), cs = /* @__PURE__ */ new ze();
let mr = null, _r = 0, gr = 0;
const vn = (1 + Math.sqrt(5)) / 2, Nn = 1 / vn, us = [
  /* @__PURE__ */ new L(1, 1, 1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(0, vn, Nn),
  /* @__PURE__ */ new L(0, vn, -Nn),
  /* @__PURE__ */ new L(Nn, 0, vn),
  /* @__PURE__ */ new L(-Nn, 0, vn),
  /* @__PURE__ */ new L(vn, Nn, 0),
  /* @__PURE__ */ new L(-vn, Nn, 0)
];
class hs {
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
    mr = this._renderer.getRenderTarget(), _r = this._renderer.getActiveCubeFace(), gr = this._renderer.getActiveMipmapLevel(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = ps(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = fs(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(mr, _r, gr), e.scissorTest = !1, Ci(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), mr = this._renderer.getRenderTarget(), _r = this._renderer.getActiveCubeFace(), gr = this._renderer.getActiveMipmapLevel();
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
      colorSpace: nn,
      depthBuffer: !1
    }, r = ds(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ds(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = kc(s)), this._blurMaterial = Wc(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Bt(this._lodPlanes[0], e);
    this._renderer.compile(t, pr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new Nt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, f = u.toneMapping;
    u.getClearColor(cs), u.toneMapping = 0, u.autoClear = !1;
    const m = new Xn({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new Bt(new qn(), m);
    let v = !1;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, v = !0) : (m.color.copy(cs), v = !0);
    for (let h = 0; h < 6; h++) {
      const A = h % 3;
      A === 0 ? (a.up.set(0, l[h], 0), a.lookAt(c[h], 0, 0)) : A === 1 ? (a.up.set(0, 0, l[h]), a.lookAt(0, c[h], 0)) : (a.up.set(0, l[h], 0), a.lookAt(0, 0, c[h]));
      const M = this._cubeSize;
      Ci(r, A * M, h > 2 ? M : 0, M, M), u.setRenderTarget(r), v && u.render(g, a), u.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = f, u.autoClear = d, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = ps()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = fs());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Bt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Ci(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, pr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = us[(r - 1) % us.length];
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
    const u = 3, d = new Bt(this._lodPlanes[r], c), f = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * xn - 1), v = s / g, p = isFinite(s) ? 1 + Math.floor(u * v) : xn;
    p > xn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xn}`);
    const h = [];
    let A = 0;
    for (let R = 0; R < xn; ++R) {
      const V = R / v, E = Math.exp(-V * V / 2);
      h.push(E), R === 0 ? A += E : R < p && (A += 2 * E);
    }
    for (let R = 0; R < h.length; R++)
      h[R] = h[R] / A;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = h, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: M } = this;
    f.dTheta.value = g, f.mipInt.value = M - n;
    const T = this._sizeLods[r], b = 3 * T * (r > M - On ? r - M + On : 0), C = 4 * (this._cubeSize - T);
    Ci(t, b, C, 3 * T, 2 * T), l.setRenderTarget(t), l.render(d, pr);
  }
}
function kc(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - On + 1 + ls.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - On ? l = ls[o - i + On - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), u = -c, d = 1 + c, f = [u, u, d, u, d, d, u, u, d, d, u, d], m = 6, g = 6, v = 3, p = 2, h = 1, A = new Float32Array(v * g * m), M = new Float32Array(p * g * m), T = new Float32Array(h * g * m);
    for (let C = 0; C < m; C++) {
      const R = C % 3 * 2 / 3 - 1, V = C > 2 ? 0 : -1, E = [
        R,
        V,
        0,
        R + 2 / 3,
        V,
        0,
        R + 2 / 3,
        V + 1,
        0,
        R,
        V,
        0,
        R + 2 / 3,
        V + 1,
        0,
        R,
        V + 1,
        0
      ];
      A.set(E, v * g * C), M.set(f, p * g * C);
      const x = [C, C, C, C, C, C];
      T.set(x, h * g * C);
    }
    const b = new Tt();
    b.setAttribute("position", new Lt(A, v)), b.setAttribute("uv", new Lt(M, p)), b.setAttribute("faceIndex", new Lt(T, h)), e.push(b), r > On && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function ds(i, e, t) {
  const n = new kt(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Ci(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Wc(i, e, t) {
  const n = new Float32Array(xn), r = new L(0, 1, 0);
  return new gt({
    name: "SphericalGaussianBlur",
    defines: {
      n: xn,
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
    vertexShader: Fr(),
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
function fs() {
  return new gt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Fr(),
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
function ps() {
  return new gt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Fr(),
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
function Fr() {
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
function Xc(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === 303 || l === 304, u = l === 301 || l === 302;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return t === null && (t = new hs(i)), d = c ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d), e.set(a, d), d.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const d = a.image;
            if (c && d && d.height > 0 || u && d && r(d)) {
              t === null && (t = new hs(i));
              const f = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", s), f.texture;
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
    for (let u = 0; u < c; u++)
      a[u] !== void 0 && l++;
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
function qc(i) {
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
function Yc(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes)
      e.remove(f.attributes[g]);
    for (const g in f.morphAttributes) {
      const v = f.morphAttributes[g];
      for (let p = 0, h = v.length; p < h; p++)
        e.remove(v[p]);
    }
    f.removeEventListener("dispose", o), delete r[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(d, f) {
    return r[f.id] === !0 || (f.addEventListener("dispose", o), r[f.id] = !0, t.memory.geometries++), f;
  }
  function l(d) {
    const f = d.attributes;
    for (const g in f)
      e.update(f[g], i.ARRAY_BUFFER);
    const m = d.morphAttributes;
    for (const g in m) {
      const v = m[g];
      for (let p = 0, h = v.length; p < h; p++)
        e.update(v[p], i.ARRAY_BUFFER);
    }
  }
  function c(d) {
    const f = [], m = d.index, g = d.attributes.position;
    let v = 0;
    if (m !== null) {
      const A = m.array;
      v = m.version;
      for (let M = 0, T = A.length; M < T; M += 3) {
        const b = A[M + 0], C = A[M + 1], R = A[M + 2];
        f.push(b, C, C, R, R, b);
      }
    } else if (g !== void 0) {
      const A = g.array;
      v = g.version;
      for (let M = 0, T = A.length / 3 - 1; M < T; M += 3) {
        const b = M + 0, C = M + 1, R = M + 2;
        f.push(b, C, C, R, R, b);
      }
    } else
      return;
    const p = new (qs(f) ? Js : $s)(f, 1);
    p.version = v;
    const h = s.get(d);
    h && e.remove(h), s.set(d, p);
  }
  function u(d) {
    const f = s.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && c(d);
    } else
      c(d);
    return s.get(d);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: u
  };
}
function jc(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(f) {
    s = f;
  }
  let a, l;
  function c(f) {
    a = f.type, l = f.bytesPerElement;
  }
  function u(f, m) {
    i.drawElements(s, m, a, f * l), t.update(m, s, 1);
  }
  function d(f, m, g) {
    if (g === 0)
      return;
    let v, p;
    if (r)
      v = i, p = "drawElementsInstanced";
    else if (v = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", v === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    v[p](s, m, a, f * l, g), t.update(m, s, g);
  }
  this.setMode = o, this.setIndex = c, this.render = u, this.renderInstances = d;
}
function Zc(i) {
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
function Kc(i, e) {
  return i[0] - e[0];
}
function $c(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function Jc(i, e, t) {
  const n = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new et(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, u, d) {
    const f = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, v = g !== void 0 ? g.length : 0;
      let p = s.get(u);
      if (p === void 0 || p.count !== v) {
        let H = function() {
          j.dispose(), s.delete(u), u.removeEventListener("dispose", H);
        };
        var m = H;
        p !== void 0 && p.texture.dispose();
        const M = u.morphAttributes.position !== void 0, T = u.morphAttributes.normal !== void 0, b = u.morphAttributes.color !== void 0, C = u.morphAttributes.position || [], R = u.morphAttributes.normal || [], V = u.morphAttributes.color || [];
        let E = 0;
        M === !0 && (E = 1), T === !0 && (E = 2), b === !0 && (E = 3);
        let x = u.attributes.position.count * E, F = 1;
        x > e.maxTextureSize && (F = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
        const q = new Float32Array(x * F * 4 * v), j = new Zs(q, x, F, v);
        j.type = 1015, j.needsUpdate = !0;
        const P = E * 4;
        for (let X = 0; X < v; X++) {
          const k = C[X], $ = R[X], Z = V[X], Y = x * F * 4 * X;
          for (let D = 0; D < k.count; D++) {
            const G = D * P;
            M === !0 && (o.fromBufferAttribute(k, D), q[Y + G + 0] = o.x, q[Y + G + 1] = o.y, q[Y + G + 2] = o.z, q[Y + G + 3] = 0), T === !0 && (o.fromBufferAttribute($, D), q[Y + G + 4] = o.x, q[Y + G + 5] = o.y, q[Y + G + 6] = o.z, q[Y + G + 7] = 0), b === !0 && (o.fromBufferAttribute(Z, D), q[Y + G + 8] = o.x, q[Y + G + 9] = o.y, q[Y + G + 10] = o.z, q[Y + G + 11] = Z.itemSize === 4 ? o.w : 1);
          }
        }
        p = {
          count: v,
          texture: j,
          size: new Le(x, F)
        }, s.set(u, p), u.addEventListener("dispose", H);
      }
      let h = 0;
      for (let M = 0; M < f.length; M++)
        h += f[M];
      const A = u.morphTargetsRelative ? 1 : 1 - h;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", A), d.getUniforms().setValue(i, "morphTargetInfluences", f), d.getUniforms().setValue(i, "morphTargetsTexture", p.texture, t), d.getUniforms().setValue(i, "morphTargetsTextureSize", p.size);
    } else {
      const g = f === void 0 ? 0 : f.length;
      let v = n[u.id];
      if (v === void 0 || v.length !== g) {
        v = [];
        for (let T = 0; T < g; T++)
          v[T] = [T, 0];
        n[u.id] = v;
      }
      for (let T = 0; T < g; T++) {
        const b = v[T];
        b[0] = T, b[1] = f[T];
      }
      v.sort($c);
      for (let T = 0; T < 8; T++)
        T < g && v[T][1] ? (a[T][0] = v[T][0], a[T][1] = v[T][1]) : (a[T][0] = Number.MAX_SAFE_INTEGER, a[T][1] = 0);
      a.sort(Kc);
      const p = u.morphAttributes.position, h = u.morphAttributes.normal;
      let A = 0;
      for (let T = 0; T < 8; T++) {
        const b = a[T], C = b[0], R = b[1];
        C !== Number.MAX_SAFE_INTEGER && R ? (p && u.getAttribute("morphTarget" + T) !== p[C] && u.setAttribute("morphTarget" + T, p[C]), h && u.getAttribute("morphNormal" + T) !== h[C] && u.setAttribute("morphNormal" + T, h[C]), r[T] = R, A += R) : (p && u.hasAttribute("morphTarget" + T) === !0 && u.deleteAttribute("morphTarget" + T), h && u.hasAttribute("morphNormal" + T) === !0 && u.deleteAttribute("morphNormal" + T), r[T] = 0);
      }
      const M = u.morphTargetsRelative ? 1 : 1 - A;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", M), d.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return {
    update: l
  };
}
function Qc(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, d = e.get(l, u);
    if (r.get(d) !== c && (e.update(d), r.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      r.get(f) !== c && (f.update(), r.set(f, c));
    }
    return d;
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
const ra = /* @__PURE__ */ new Pt(), sa = /* @__PURE__ */ new Zs(), aa = /* @__PURE__ */ new za(), oa = /* @__PURE__ */ new ta(), ms = [], _s = [], gs = new Float32Array(16), vs = new Float32Array(9), xs = new Float32Array(4);
function Yn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0)
    return i;
  const r = e * t;
  let s = ms[r];
  if (s === void 0 && (s = new Float32Array(r), ms[r] = s), e !== 0) {
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
function qi(i, e) {
  let t = _s[e];
  t === void 0 && (t = new Int32Array(e), _s[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function eu(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function tu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e))
      return;
    i.uniform2fv(this.addr, e), st(t, e);
  }
}
function nu(i, e) {
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
function iu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e))
      return;
    i.uniform4fv(this.addr, e), st(t, e);
  }
}
function ru(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e))
      return;
    i.uniformMatrix2fv(this.addr, !1, e), st(t, e);
  } else {
    if (rt(t, n))
      return;
    xs.set(n), i.uniformMatrix2fv(this.addr, !1, xs), st(t, n);
  }
}
function su(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e))
      return;
    i.uniformMatrix3fv(this.addr, !1, e), st(t, e);
  } else {
    if (rt(t, n))
      return;
    vs.set(n), i.uniformMatrix3fv(this.addr, !1, vs), st(t, n);
  }
}
function au(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e))
      return;
    i.uniformMatrix4fv(this.addr, !1, e), st(t, e);
  } else {
    if (rt(t, n))
      return;
    gs.set(n), i.uniformMatrix4fv(this.addr, !1, gs), st(t, n);
  }
}
function ou(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function lu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e))
      return;
    i.uniform2iv(this.addr, e), st(t, e);
  }
}
function cu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (rt(t, e))
      return;
    i.uniform3iv(this.addr, e), st(t, e);
  }
}
function uu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e))
      return;
    i.uniform4iv(this.addr, e), st(t, e);
  }
}
function hu(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function du(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e))
      return;
    i.uniform2uiv(this.addr, e), st(t, e);
  }
}
function fu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (rt(t, e))
      return;
    i.uniform3uiv(this.addr, e), st(t, e);
  }
}
function pu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e))
      return;
    i.uniform4uiv(this.addr, e), st(t, e);
  }
}
function mu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2D(e || ra, r);
}
function _u(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || aa, r);
}
function gu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || oa, r);
}
function vu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || sa, r);
}
function xu(i) {
  switch (i) {
    case 5126:
      return eu;
    case 35664:
      return tu;
    case 35665:
      return nu;
    case 35666:
      return iu;
    case 35674:
      return ru;
    case 35675:
      return su;
    case 35676:
      return au;
    case 5124:
    case 35670:
      return ou;
    case 35667:
    case 35671:
      return lu;
    case 35668:
    case 35672:
      return cu;
    case 35669:
    case 35673:
      return uu;
    case 5125:
      return hu;
    case 36294:
      return du;
    case 36295:
      return fu;
    case 36296:
      return pu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return mu;
    case 35679:
    case 36299:
    case 36307:
      return _u;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return gu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return vu;
  }
}
function Su(i, e) {
  i.uniform1fv(this.addr, e);
}
function Mu(i, e) {
  const t = Yn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Eu(i, e) {
  const t = Yn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function yu(i, e) {
  const t = Yn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Tu(i, e) {
  const t = Yn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Au(i, e) {
  const t = Yn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function bu(i, e) {
  const t = Yn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Ru(i, e) {
  i.uniform1iv(this.addr, e);
}
function wu(i, e) {
  i.uniform2iv(this.addr, e);
}
function Cu(i, e) {
  i.uniform3iv(this.addr, e);
}
function Pu(i, e) {
  i.uniform4iv(this.addr, e);
}
function Lu(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Du(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Uu(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Iu(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Fu(i, e, t) {
  const n = this.cache, r = e.length, s = qi(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || ra, s[o]);
}
function Nu(i, e, t) {
  const n = this.cache, r = e.length, s = qi(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || aa, s[o]);
}
function Ou(i, e, t) {
  const n = this.cache, r = e.length, s = qi(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || oa, s[o]);
}
function Bu(i, e, t) {
  const n = this.cache, r = e.length, s = qi(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || sa, s[o]);
}
function zu(i) {
  switch (i) {
    case 5126:
      return Su;
    case 35664:
      return Mu;
    case 35665:
      return Eu;
    case 35666:
      return yu;
    case 35674:
      return Tu;
    case 35675:
      return Au;
    case 35676:
      return bu;
    case 5124:
    case 35670:
      return Ru;
    case 35667:
    case 35671:
      return wu;
    case 35668:
    case 35672:
      return Cu;
    case 35669:
    case 35673:
      return Pu;
    case 5125:
      return Lu;
    case 36294:
      return Du;
    case 36295:
      return Uu;
    case 36296:
      return Iu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Fu;
    case 35679:
    case 36299:
    case 36307:
      return Nu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ou;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Bu;
  }
}
class Gu {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = xu(t.type);
  }
}
class Hu {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = zu(t.type);
  }
}
class Vu {
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
const vr = /(\w+)(\])?(\[|\.)?/g;
function Ss(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function ku(i, e, t) {
  const n = i.name, r = n.length;
  for (vr.lastIndex = 0; ; ) {
    const s = vr.exec(n), o = vr.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) {
      Ss(t, c === void 0 ? new Gu(a, i, e) : new Hu(a, i, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && (d = new Vu(a), Ss(t, d)), t = d;
    }
  }
}
class Oi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      ku(s, o, this);
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
function Ms(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Wu = 37297;
let Xu = 0;
function qu(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Yu(i) {
  const e = ke.getPrimaries(ke.workingColorSpace), t = ke.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === Gi && t === zi ? n = "LinearDisplayP3ToLinearSRGB" : e === zi && t === Gi && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case nn:
    case ki:
      return [n, "LinearTransferOETF"];
    case dt:
    case Pr:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function Es(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + qu(i.getShaderSource(e), o);
  } else
    return r;
}
function ju(i, e) {
  const t = Yu(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Zu(i, e) {
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
function Ku(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(ei).join(`
`);
}
function $u(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Ju(i, e) {
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
function ei(i) {
  return i !== "";
}
function ys(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ts(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Qu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ar(i) {
  return i.replace(Qu, th);
}
const eh = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function th(i, e) {
  let t = Pe[e];
  if (t === void 0) {
    const n = eh.get(e);
    if (n !== void 0)
      t = Pe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Ar(t);
}
const nh = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function As(i) {
  return i.replace(nh, ih);
}
function ih(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function bs(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function rh(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function sh(i) {
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
function ah(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function oh(i) {
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
function lh(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function ch(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = rh(t), c = sh(t), u = ah(t), d = oh(t), f = lh(t), m = t.isWebGL2 ? "" : Ku(t), g = $u(s), v = r.createProgram();
  let p, h, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ei).join(`
`), p.length > 0 && (p += `
`), h = [
    m,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ei).join(`
`), h.length > 0 && (h += `
`)) : (p = [
    bs(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
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
  ].filter(ei).join(`
`), h = [
    m,
    bs(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + d : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
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
    t.toneMapping !== 0 ? Pe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? Zu("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Pe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    ju("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ei).join(`
`)), o = Ar(o), o = ys(o, t), o = Ts(o, t), a = Ar(a), a = ys(a, t), a = Ts(a, t), o = As(o), a = As(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, p = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, h = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === Wr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Wr ? "" : "#define gl_FragColor pc_fragColor",
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
` + h);
  const M = A + p + o, T = A + h + a, b = Ms(r, r.VERTEX_SHADER, M), C = Ms(r, r.FRAGMENT_SHADER, T);
  r.attachShader(v, b), r.attachShader(v, C), t.index0AttributeName !== void 0 ? r.bindAttribLocation(v, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(v, 0, "position"), r.linkProgram(v);
  function R(F) {
    if (i.debug.checkShaderErrors) {
      const q = r.getProgramInfoLog(v).trim(), j = r.getShaderInfoLog(b).trim(), P = r.getShaderInfoLog(C).trim();
      let H = !0, X = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (H = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, v, b, C);
        else {
          const k = Es(r, b, "vertex"), $ = Es(r, C, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(v, r.VALIDATE_STATUS) + `

Program Info Log: ` + q + `
` + k + `
` + $
          );
        }
      else
        q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (j === "" || P === "") && (X = !1);
      X && (F.diagnostics = {
        runnable: H,
        programLog: q,
        vertexShader: {
          log: j,
          prefix: p
        },
        fragmentShader: {
          log: P,
          prefix: h
        }
      });
    }
    r.deleteShader(b), r.deleteShader(C), V = new Oi(r, v), E = Ju(r, v);
  }
  let V;
  this.getUniforms = function() {
    return V === void 0 && R(this), V;
  };
  let E;
  this.getAttributes = function() {
    return E === void 0 && R(this), E;
  };
  let x = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return x === !1 && (x = r.getProgramParameter(v, Wu)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(v), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Xu++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = b, this.fragmentShader = C, this;
}
let uh = 0;
class hh {
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
    return n === void 0 && (n = new dh(e), t.set(e, n)), n;
  }
}
class dh {
  constructor(e) {
    this.id = uh++, this.code = e, this.usedTimes = 0;
  }
}
function fh(i, e, t, n, r, s, o) {
  const a = new Xi(), l = new hh(), c = [], u = r.isWebGL2, d = r.logarithmicDepthBuffer, f = r.vertexTextures;
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
  function v(E) {
    return E === 0 ? "uv" : `uv${E}`;
  }
  function p(E, x, F, q, j) {
    const P = q.fog, H = j.geometry, X = E.isMeshStandardMaterial ? q.environment : null, k = (E.isMeshStandardMaterial ? t : e).get(E.envMap || X), $ = k && k.mapping === 306 ? k.image.height : null, Z = g[E.type];
    E.precision !== null && (m = r.getMaxPrecision(E.precision), m !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", m, "instead."));
    const Y = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color, D = Y !== void 0 ? Y.length : 0;
    let G = 0;
    H.morphAttributes.position !== void 0 && (G = 1), H.morphAttributes.normal !== void 0 && (G = 2), H.morphAttributes.color !== void 0 && (G = 3);
    let ae, se, le, pe;
    if (Z) {
      const tt = yt[Z];
      ae = tt.vertexShader, se = tt.fragmentShader;
    } else
      ae = E.vertexShader, se = E.fragmentShader, l.update(E), le = l.getVertexShaderID(E), pe = l.getFragmentShaderID(E);
    const we = i.getRenderTarget(), ye = j.isInstancedMesh === !0, Ce = !!E.map, Ke = !!E.matcap, Ue = !!k, I = !!E.aoMap, At = !!E.lightMap, me = !!E.bumpMap, Te = !!E.normalMap, Ee = !!E.displacementMap, $e = !!E.emissiveMap, Ie = !!E.metalnessMap, Fe = !!E.roughnessMap, qe = E.anisotropy > 0, at = E.clearcoat > 0, ft = E.iridescence > 0, y = E.sheen > 0, _ = E.transmission > 0, N = qe && !!E.anisotropyMap, Q = at && !!E.clearcoatMap, K = at && !!E.clearcoatNormalMap, ee = at && !!E.clearcoatRoughnessMap, de = ft && !!E.iridescenceMap, re = ft && !!E.iridescenceThicknessMap, ce = y && !!E.sheenColorMap, xe = y && !!E.sheenRoughnessMap, He = !!E.specularMap, J = !!E.specularColorMap, We = !!E.specularIntensityMap, Ae = _ && !!E.transmissionMap, Se = _ && !!E.thicknessMap, _e = !!E.gradientMap, he = !!E.alphaMap, Be = E.alphaTest > 0, w = !!E.alphaHash, oe = !!E.extensions, te = !!H.attributes.uv1, W = !!H.attributes.uv2, ie = !!H.attributes.uv3;
    let ge = 0;
    return E.toneMapped && (we === null || we.isXRRenderTarget === !0) && (ge = i.toneMapping), {
      isWebGL2: u,
      shaderID: Z,
      shaderType: E.type,
      shaderName: E.name,
      vertexShader: ae,
      fragmentShader: se,
      defines: E.defines,
      customVertexShaderID: le,
      customFragmentShaderID: pe,
      isRawShaderMaterial: E.isRawShaderMaterial === !0,
      glslVersion: E.glslVersion,
      precision: m,
      instancing: ye,
      instancingColor: ye && j.instanceColor !== null,
      supportsVertexTextures: f,
      outputColorSpace: we === null ? i.outputColorSpace : we.isXRRenderTarget === !0 ? we.texture.colorSpace : nn,
      map: Ce,
      matcap: Ke,
      envMap: Ue,
      envMapMode: Ue && k.mapping,
      envMapCubeUVHeight: $,
      aoMap: I,
      lightMap: At,
      bumpMap: me,
      normalMap: Te,
      displacementMap: f && Ee,
      emissiveMap: $e,
      normalMapObjectSpace: Te && E.normalMapType === 1,
      normalMapTangentSpace: Te && E.normalMapType === 0,
      metalnessMap: Ie,
      roughnessMap: Fe,
      anisotropy: qe,
      anisotropyMap: N,
      clearcoat: at,
      clearcoatMap: Q,
      clearcoatNormalMap: K,
      clearcoatRoughnessMap: ee,
      iridescence: ft,
      iridescenceMap: de,
      iridescenceThicknessMap: re,
      sheen: y,
      sheenColorMap: ce,
      sheenRoughnessMap: xe,
      specularMap: He,
      specularColorMap: J,
      specularIntensityMap: We,
      transmission: _,
      transmissionMap: Ae,
      thicknessMap: Se,
      gradientMap: _e,
      opaque: E.transparent === !1 && E.blending === 1,
      alphaMap: he,
      alphaTest: Be,
      alphaHash: w,
      combine: E.combine,
      //
      mapUv: Ce && v(E.map.channel),
      aoMapUv: I && v(E.aoMap.channel),
      lightMapUv: At && v(E.lightMap.channel),
      bumpMapUv: me && v(E.bumpMap.channel),
      normalMapUv: Te && v(E.normalMap.channel),
      displacementMapUv: Ee && v(E.displacementMap.channel),
      emissiveMapUv: $e && v(E.emissiveMap.channel),
      metalnessMapUv: Ie && v(E.metalnessMap.channel),
      roughnessMapUv: Fe && v(E.roughnessMap.channel),
      anisotropyMapUv: N && v(E.anisotropyMap.channel),
      clearcoatMapUv: Q && v(E.clearcoatMap.channel),
      clearcoatNormalMapUv: K && v(E.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ee && v(E.clearcoatRoughnessMap.channel),
      iridescenceMapUv: de && v(E.iridescenceMap.channel),
      iridescenceThicknessMapUv: re && v(E.iridescenceThicknessMap.channel),
      sheenColorMapUv: ce && v(E.sheenColorMap.channel),
      sheenRoughnessMapUv: xe && v(E.sheenRoughnessMap.channel),
      specularMapUv: He && v(E.specularMap.channel),
      specularColorMapUv: J && v(E.specularColorMap.channel),
      specularIntensityMapUv: We && v(E.specularIntensityMap.channel),
      transmissionMapUv: Ae && v(E.transmissionMap.channel),
      thicknessMapUv: Se && v(E.thicknessMap.channel),
      alphaMapUv: he && v(E.alphaMap.channel),
      //
      vertexTangents: !!H.attributes.tangent && (Te || qe),
      vertexColors: E.vertexColors,
      vertexAlphas: E.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4,
      vertexUv1s: te,
      vertexUv2s: W,
      vertexUv3s: ie,
      pointsUvs: j.isPoints === !0 && !!H.attributes.uv && (Ce || he),
      fog: !!P,
      useFog: E.fog === !0,
      fogExp2: P && P.isFogExp2,
      flatShading: E.flatShading === !0,
      sizeAttenuation: E.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: j.isSkinnedMesh === !0,
      morphTargets: H.morphAttributes.position !== void 0,
      morphNormals: H.morphAttributes.normal !== void 0,
      morphColors: H.morphAttributes.color !== void 0,
      morphTargetsCount: D,
      morphTextureStride: G,
      numDirLights: x.directional.length,
      numPointLights: x.point.length,
      numSpotLights: x.spot.length,
      numSpotLightMaps: x.spotLightMap.length,
      numRectAreaLights: x.rectArea.length,
      numHemiLights: x.hemi.length,
      numDirLightShadows: x.directionalShadowMap.length,
      numPointLightShadows: x.pointShadowMap.length,
      numSpotLightShadows: x.spotShadowMap.length,
      numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
      numLightProbes: x.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: E.dithering,
      shadowMapEnabled: i.shadowMap.enabled && F.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: ge,
      useLegacyLights: i._useLegacyLights,
      decodeVideoTexture: Ce && E.map.isVideoTexture === !0 && ke.getTransfer(E.map.colorSpace) === je,
      premultipliedAlpha: E.premultipliedAlpha,
      doubleSided: E.side === 2,
      flipSided: E.side === 1,
      useDepthPacking: E.depthPacking >= 0,
      depthPacking: E.depthPacking || 0,
      index0AttributeName: E.index0AttributeName,
      extensionDerivatives: oe && E.extensions.derivatives === !0,
      extensionFragDepth: oe && E.extensions.fragDepth === !0,
      extensionDrawBuffers: oe && E.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: oe && E.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: E.customProgramCacheKey()
    };
  }
  function h(E) {
    const x = [];
    if (E.shaderID ? x.push(E.shaderID) : (x.push(E.customVertexShaderID), x.push(E.customFragmentShaderID)), E.defines !== void 0)
      for (const F in E.defines)
        x.push(F), x.push(E.defines[F]);
    return E.isRawShaderMaterial === !1 && (A(x, E), M(x, E), x.push(i.outputColorSpace)), x.push(E.customProgramCacheKey), x.join();
  }
  function A(E, x) {
    E.push(x.precision), E.push(x.outputColorSpace), E.push(x.envMapMode), E.push(x.envMapCubeUVHeight), E.push(x.mapUv), E.push(x.alphaMapUv), E.push(x.lightMapUv), E.push(x.aoMapUv), E.push(x.bumpMapUv), E.push(x.normalMapUv), E.push(x.displacementMapUv), E.push(x.emissiveMapUv), E.push(x.metalnessMapUv), E.push(x.roughnessMapUv), E.push(x.anisotropyMapUv), E.push(x.clearcoatMapUv), E.push(x.clearcoatNormalMapUv), E.push(x.clearcoatRoughnessMapUv), E.push(x.iridescenceMapUv), E.push(x.iridescenceThicknessMapUv), E.push(x.sheenColorMapUv), E.push(x.sheenRoughnessMapUv), E.push(x.specularMapUv), E.push(x.specularColorMapUv), E.push(x.specularIntensityMapUv), E.push(x.transmissionMapUv), E.push(x.thicknessMapUv), E.push(x.combine), E.push(x.fogExp2), E.push(x.sizeAttenuation), E.push(x.morphTargetsCount), E.push(x.morphAttributeCount), E.push(x.numDirLights), E.push(x.numPointLights), E.push(x.numSpotLights), E.push(x.numSpotLightMaps), E.push(x.numHemiLights), E.push(x.numRectAreaLights), E.push(x.numDirLightShadows), E.push(x.numPointLightShadows), E.push(x.numSpotLightShadows), E.push(x.numSpotLightShadowsWithMaps), E.push(x.numLightProbes), E.push(x.shadowMapType), E.push(x.toneMapping), E.push(x.numClippingPlanes), E.push(x.numClipIntersection), E.push(x.depthPacking);
  }
  function M(E, x) {
    a.disableAll(), x.isWebGL2 && a.enable(0), x.supportsVertexTextures && a.enable(1), x.instancing && a.enable(2), x.instancingColor && a.enable(3), x.matcap && a.enable(4), x.envMap && a.enable(5), x.normalMapObjectSpace && a.enable(6), x.normalMapTangentSpace && a.enable(7), x.clearcoat && a.enable(8), x.iridescence && a.enable(9), x.alphaTest && a.enable(10), x.vertexColors && a.enable(11), x.vertexAlphas && a.enable(12), x.vertexUv1s && a.enable(13), x.vertexUv2s && a.enable(14), x.vertexUv3s && a.enable(15), x.vertexTangents && a.enable(16), x.anisotropy && a.enable(17), x.alphaHash && a.enable(18), E.push(a.mask), a.disableAll(), x.fog && a.enable(0), x.useFog && a.enable(1), x.flatShading && a.enable(2), x.logarithmicDepthBuffer && a.enable(3), x.skinning && a.enable(4), x.morphTargets && a.enable(5), x.morphNormals && a.enable(6), x.morphColors && a.enable(7), x.premultipliedAlpha && a.enable(8), x.shadowMapEnabled && a.enable(9), x.useLegacyLights && a.enable(10), x.doubleSided && a.enable(11), x.flipSided && a.enable(12), x.useDepthPacking && a.enable(13), x.dithering && a.enable(14), x.transmission && a.enable(15), x.sheen && a.enable(16), x.opaque && a.enable(17), x.pointsUvs && a.enable(18), x.decodeVideoTexture && a.enable(19), E.push(a.mask);
  }
  function T(E) {
    const x = g[E.type];
    let F;
    if (x) {
      const q = yt[x];
      F = Mn.clone(q.uniforms);
    } else
      F = E.uniforms;
    return F;
  }
  function b(E, x) {
    let F;
    for (let q = 0, j = c.length; q < j; q++) {
      const P = c[q];
      if (P.cacheKey === x) {
        F = P, ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && (F = new ch(i, x, E, s), c.push(F)), F;
  }
  function C(E) {
    if (--E.usedTimes === 0) {
      const x = c.indexOf(E);
      c[x] = c[c.length - 1], c.pop(), E.destroy();
    }
  }
  function R(E) {
    l.remove(E);
  }
  function V() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: T,
    acquireProgram: b,
    releaseProgram: C,
    releaseShaderCache: R,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: V
  };
}
function ph() {
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
function mh(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Rs(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function ws() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(d, f, m, g, v, p) {
    let h = i[e];
    return h === void 0 ? (h = {
      id: d.id,
      object: d,
      geometry: f,
      material: m,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: v,
      group: p
    }, i[e] = h) : (h.id = d.id, h.object = d, h.geometry = f, h.material = m, h.groupOrder = g, h.renderOrder = d.renderOrder, h.z = v, h.group = p), e++, h;
  }
  function a(d, f, m, g, v, p) {
    const h = o(d, f, m, g, v, p);
    m.transmission > 0 ? n.push(h) : m.transparent === !0 ? r.push(h) : t.push(h);
  }
  function l(d, f, m, g, v, p) {
    const h = o(d, f, m, g, v, p);
    m.transmission > 0 ? n.unshift(h) : m.transparent === !0 ? r.unshift(h) : t.unshift(h);
  }
  function c(d, f) {
    t.length > 1 && t.sort(d || mh), n.length > 1 && n.sort(f || Rs), r.length > 1 && r.sort(f || Rs);
  }
  function u() {
    for (let d = e, f = i.length; d < f; d++) {
      const m = i[d];
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
    finish: u,
    sort: c
  };
}
function _h() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new ws(), i.set(n, [o])) : r >= s.length ? (o = new ws(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function gh() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new L(),
            color: new ze()
          };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new ze(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new L(),
            color: new ze(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new L(),
            skyColor: new ze(),
            groundColor: new ze()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ze(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function vh() {
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
            shadowMapSize: new Le()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let xh = 0;
function Sh(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Mh(i, e) {
  const t = new gh(), n = vh(), r = {
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
  for (let u = 0; u < 9; u++)
    r.probe.push(new L());
  const s = new L(), o = new Ge(), a = new Ge();
  function l(u, d) {
    let f = 0, m = 0, g = 0;
    for (let q = 0; q < 9; q++)
      r.probe[q].set(0, 0, 0);
    let v = 0, p = 0, h = 0, A = 0, M = 0, T = 0, b = 0, C = 0, R = 0, V = 0, E = 0;
    u.sort(Sh);
    const x = d === !0 ? Math.PI : 1;
    for (let q = 0, j = u.length; q < j; q++) {
      const P = u[q], H = P.color, X = P.intensity, k = P.distance, $ = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        f += H.r * X * x, m += H.g * X * x, g += H.b * X * x;
      else if (P.isLightProbe) {
        for (let Z = 0; Z < 9; Z++)
          r.probe[Z].addScaledVector(P.sh.coefficients[Z], X);
        E++;
      } else if (P.isDirectionalLight) {
        const Z = t.get(P);
        if (Z.color.copy(P.color).multiplyScalar(P.intensity * x), P.castShadow) {
          const Y = P.shadow, D = n.get(P);
          D.shadowBias = Y.bias, D.shadowNormalBias = Y.normalBias, D.shadowRadius = Y.radius, D.shadowMapSize = Y.mapSize, r.directionalShadow[v] = D, r.directionalShadowMap[v] = $, r.directionalShadowMatrix[v] = P.shadow.matrix, T++;
        }
        r.directional[v] = Z, v++;
      } else if (P.isSpotLight) {
        const Z = t.get(P);
        Z.position.setFromMatrixPosition(P.matrixWorld), Z.color.copy(H).multiplyScalar(X * x), Z.distance = k, Z.coneCos = Math.cos(P.angle), Z.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), Z.decay = P.decay, r.spot[h] = Z;
        const Y = P.shadow;
        if (P.map && (r.spotLightMap[R] = P.map, R++, Y.updateMatrices(P), P.castShadow && V++), r.spotLightMatrix[h] = Y.matrix, P.castShadow) {
          const D = n.get(P);
          D.shadowBias = Y.bias, D.shadowNormalBias = Y.normalBias, D.shadowRadius = Y.radius, D.shadowMapSize = Y.mapSize, r.spotShadow[h] = D, r.spotShadowMap[h] = $, C++;
        }
        h++;
      } else if (P.isRectAreaLight) {
        const Z = t.get(P);
        Z.color.copy(H).multiplyScalar(X), Z.halfWidth.set(P.width * 0.5, 0, 0), Z.halfHeight.set(0, P.height * 0.5, 0), r.rectArea[A] = Z, A++;
      } else if (P.isPointLight) {
        const Z = t.get(P);
        if (Z.color.copy(P.color).multiplyScalar(P.intensity * x), Z.distance = P.distance, Z.decay = P.decay, P.castShadow) {
          const Y = P.shadow, D = n.get(P);
          D.shadowBias = Y.bias, D.shadowNormalBias = Y.normalBias, D.shadowRadius = Y.radius, D.shadowMapSize = Y.mapSize, D.shadowCameraNear = Y.camera.near, D.shadowCameraFar = Y.camera.far, r.pointShadow[p] = D, r.pointShadowMap[p] = $, r.pointShadowMatrix[p] = P.shadow.matrix, b++;
        }
        r.point[p] = Z, p++;
      } else if (P.isHemisphereLight) {
        const Z = t.get(P);
        Z.skyColor.copy(P.color).multiplyScalar(X * x), Z.groundColor.copy(P.groundColor).multiplyScalar(X * x), r.hemi[M] = Z, M++;
      }
    }
    A > 0 && (e.isWebGL2 || i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = ne.LTC_FLOAT_1, r.rectAreaLTC2 = ne.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = ne.LTC_HALF_1, r.rectAreaLTC2 = ne.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = f, r.ambient[1] = m, r.ambient[2] = g;
    const F = r.hash;
    (F.directionalLength !== v || F.pointLength !== p || F.spotLength !== h || F.rectAreaLength !== A || F.hemiLength !== M || F.numDirectionalShadows !== T || F.numPointShadows !== b || F.numSpotShadows !== C || F.numSpotMaps !== R || F.numLightProbes !== E) && (r.directional.length = v, r.spot.length = h, r.rectArea.length = A, r.point.length = p, r.hemi.length = M, r.directionalShadow.length = T, r.directionalShadowMap.length = T, r.pointShadow.length = b, r.pointShadowMap.length = b, r.spotShadow.length = C, r.spotShadowMap.length = C, r.directionalShadowMatrix.length = T, r.pointShadowMatrix.length = b, r.spotLightMatrix.length = C + R - V, r.spotLightMap.length = R, r.numSpotLightShadowsWithMaps = V, r.numLightProbes = E, F.directionalLength = v, F.pointLength = p, F.spotLength = h, F.rectAreaLength = A, F.hemiLength = M, F.numDirectionalShadows = T, F.numPointShadows = b, F.numSpotShadows = C, F.numSpotMaps = R, F.numLightProbes = E, r.version = xh++);
  }
  function c(u, d) {
    let f = 0, m = 0, g = 0, v = 0, p = 0;
    const h = d.matrixWorldInverse;
    for (let A = 0, M = u.length; A < M; A++) {
      const T = u[A];
      if (T.isDirectionalLight) {
        const b = r.directional[f];
        b.direction.setFromMatrixPosition(T.matrixWorld), s.setFromMatrixPosition(T.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(h), f++;
      } else if (T.isSpotLight) {
        const b = r.spot[g];
        b.position.setFromMatrixPosition(T.matrixWorld), b.position.applyMatrix4(h), b.direction.setFromMatrixPosition(T.matrixWorld), s.setFromMatrixPosition(T.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(h), g++;
      } else if (T.isRectAreaLight) {
        const b = r.rectArea[v];
        b.position.setFromMatrixPosition(T.matrixWorld), b.position.applyMatrix4(h), a.identity(), o.copy(T.matrixWorld), o.premultiply(h), a.extractRotation(o), b.halfWidth.set(T.width * 0.5, 0, 0), b.halfHeight.set(0, T.height * 0.5, 0), b.halfWidth.applyMatrix4(a), b.halfHeight.applyMatrix4(a), v++;
      } else if (T.isPointLight) {
        const b = r.point[m];
        b.position.setFromMatrixPosition(T.matrixWorld), b.position.applyMatrix4(h), m++;
      } else if (T.isHemisphereLight) {
        const b = r.hemi[p];
        b.direction.setFromMatrixPosition(T.matrixWorld), b.direction.transformDirection(h), p++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: r
  };
}
function Cs(i, e) {
  const t = new Mh(i, e), n = [], r = [];
  function s() {
    n.length = 0, r.length = 0;
  }
  function o(d) {
    n.push(d);
  }
  function a(d) {
    r.push(d);
  }
  function l(d) {
    t.setup(n, d);
  }
  function c(d) {
    t.setupView(n, d);
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
function Eh(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return a === void 0 ? (l = new Cs(i, e), t.set(s, [l])) : o >= a.length ? (l = new Cs(i, e), a.push(l)) : l = a[o], l;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class yh extends si {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Th extends si {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Ah = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, bh = `uniform sampler2D shadow_pass;
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
function Rh(i, e, t) {
  let n = new na();
  const r = new Le(), s = new Le(), o = new et(), a = new yh({ depthPacking: 3201 }), l = new Th(), c = {}, u = t.maxTextureSize, d = { 0: 1, 1: 0, 2: 2 }, f = new gt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Le() },
      radius: { value: 4 }
    },
    vertexShader: Ah,
    fragmentShader: bh
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Tt();
  g.setAttribute(
    "position",
    new Lt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new Bt(g, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let h = this.type;
  this.render = function(b, C, R) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || b.length === 0)
      return;
    const V = i.getRenderTarget(), E = i.getActiveCubeFace(), x = i.getActiveMipmapLevel(), F = i.state;
    F.setBlending(0), F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1);
    const q = h !== 3 && this.type === 3, j = h === 3 && this.type !== 3;
    for (let P = 0, H = b.length; P < H; P++) {
      const X = b[P], k = X.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", X, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1)
        continue;
      r.copy(k.mapSize);
      const $ = k.getFrameExtents();
      if (r.multiply($), s.copy(k.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / $.x), r.x = s.x * $.x, k.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / $.y), r.y = s.y * $.y, k.mapSize.y = s.y)), k.map === null || q === !0 || j === !0) {
        const Y = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        k.map !== null && k.map.dispose(), k.map = new kt(r.x, r.y, Y), k.map.texture.name = X.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const Z = k.getViewportCount();
      for (let Y = 0; Y < Z; Y++) {
        const D = k.getViewport(Y);
        o.set(
          s.x * D.x,
          s.y * D.y,
          s.x * D.z,
          s.y * D.w
        ), F.viewport(o), k.updateMatrices(X, Y), n = k.getFrustum(), T(C, R, k.camera, X, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === 3 && A(k, R), k.needsUpdate = !1;
    }
    h = this.type, p.needsUpdate = !1, i.setRenderTarget(V, E, x);
  };
  function A(b, C) {
    const R = e.update(v);
    f.defines.VSM_SAMPLES !== b.blurSamples && (f.defines.VSM_SAMPLES = b.blurSamples, m.defines.VSM_SAMPLES = b.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), b.mapPass === null && (b.mapPass = new kt(r.x, r.y)), f.uniforms.shadow_pass.value = b.map.texture, f.uniforms.resolution.value = b.mapSize, f.uniforms.radius.value = b.radius, i.setRenderTarget(b.mapPass), i.clear(), i.renderBufferDirect(C, null, R, f, v, null), m.uniforms.shadow_pass.value = b.mapPass.texture, m.uniforms.resolution.value = b.mapSize, m.uniforms.radius.value = b.radius, i.setRenderTarget(b.map), i.clear(), i.renderBufferDirect(C, null, R, m, v, null);
  }
  function M(b, C, R, V) {
    let E = null;
    const x = R.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (x !== void 0)
      E = x;
    else if (E = R.isPointLight === !0 ? l : a, i.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const F = E.uuid, q = C.uuid;
      let j = c[F];
      j === void 0 && (j = {}, c[F] = j);
      let P = j[q];
      P === void 0 && (P = E.clone(), j[q] = P), E = P;
    }
    if (E.visible = C.visible, E.wireframe = C.wireframe, V === 3 ? E.side = C.shadowSide !== null ? C.shadowSide : C.side : E.side = C.shadowSide !== null ? C.shadowSide : d[C.side], E.alphaMap = C.alphaMap, E.alphaTest = C.alphaTest, E.map = C.map, E.clipShadows = C.clipShadows, E.clippingPlanes = C.clippingPlanes, E.clipIntersection = C.clipIntersection, E.displacementMap = C.displacementMap, E.displacementScale = C.displacementScale, E.displacementBias = C.displacementBias, E.wireframeLinewidth = C.wireframeLinewidth, E.linewidth = C.linewidth, R.isPointLight === !0 && E.isMeshDistanceMaterial === !0) {
      const F = i.properties.get(E);
      F.light = R;
    }
    return E;
  }
  function T(b, C, R, V, E) {
    if (b.visible === !1)
      return;
    if (b.layers.test(C.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && E === 3) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse, b.matrixWorld);
      const q = e.update(b), j = b.material;
      if (Array.isArray(j)) {
        const P = q.groups;
        for (let H = 0, X = P.length; H < X; H++) {
          const k = P[H], $ = j[k.materialIndex];
          if ($ && $.visible) {
            const Z = M(b, $, V, E);
            i.renderBufferDirect(R, null, q, Z, b, k);
          }
        }
      } else if (j.visible) {
        const P = M(b, j, V, E);
        i.renderBufferDirect(R, null, q, P, b, null);
      }
    }
    const F = b.children;
    for (let q = 0, j = F.length; q < j; q++)
      T(F[q], C, R, V, E);
  }
}
function wh(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let w = !1;
    const oe = new et();
    let te = null;
    const W = new et(0, 0, 0, 0);
    return {
      setMask: function(ie) {
        te !== ie && !w && (i.colorMask(ie, ie, ie, ie), te = ie);
      },
      setLocked: function(ie) {
        w = ie;
      },
      setClear: function(ie, ge, Ve, tt, It) {
        It === !0 && (ie *= tt, ge *= tt, Ve *= tt), oe.set(ie, ge, Ve, tt), W.equals(oe) === !1 && (i.clearColor(ie, ge, Ve, tt), W.copy(oe));
      },
      reset: function() {
        w = !1, te = null, W.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let w = !1, oe = null, te = null, W = null;
    return {
      setTest: function(ie) {
        ie ? Ce(i.DEPTH_TEST) : Ke(i.DEPTH_TEST);
      },
      setMask: function(ie) {
        oe !== ie && !w && (i.depthMask(ie), oe = ie);
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
        w = ie;
      },
      setClear: function(ie) {
        W !== ie && (i.clearDepth(ie), W = ie);
      },
      reset: function() {
        w = !1, oe = null, te = null, W = null;
      }
    };
  }
  function o() {
    let w = !1, oe = null, te = null, W = null, ie = null, ge = null, Ve = null, tt = null, It = null;
    return {
      setTest: function(Ye) {
        w || (Ye ? Ce(i.STENCIL_TEST) : Ke(i.STENCIL_TEST));
      },
      setMask: function(Ye) {
        oe !== Ye && !w && (i.stencilMask(Ye), oe = Ye);
      },
      setFunc: function(Ye, vt, Wt) {
        (te !== Ye || W !== vt || ie !== Wt) && (i.stencilFunc(Ye, vt, Wt), te = Ye, W = vt, ie = Wt);
      },
      setOp: function(Ye, vt, Wt) {
        (ge !== Ye || Ve !== vt || tt !== Wt) && (i.stencilOp(Ye, vt, Wt), ge = Ye, Ve = vt, tt = Wt);
      },
      setLocked: function(Ye) {
        w = Ye;
      },
      setClear: function(Ye) {
        It !== Ye && (i.clearStencil(Ye), It = Ye);
      },
      reset: function() {
        w = !1, oe = null, te = null, W = null, ie = null, ge = null, Ve = null, tt = null, It = null;
      }
    };
  }
  const a = new r(), l = new s(), c = new o(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let f = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), v = [], p = null, h = !1, A = null, M = null, T = null, b = null, C = null, R = null, V = null, E = new ze(0, 0, 0), x = 0, F = !1, q = null, j = null, P = null, H = null, X = null;
  const k = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = !1, Z = 0;
  const Y = i.getParameter(i.VERSION);
  Y.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(Y)[1]), $ = Z >= 1) : Y.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), $ = Z >= 2);
  let D = null, G = {};
  const ae = i.getParameter(i.SCISSOR_BOX), se = i.getParameter(i.VIEWPORT), le = new et().fromArray(ae), pe = new et().fromArray(se);
  function we(w, oe, te, W) {
    const ie = new Uint8Array(4), ge = i.createTexture();
    i.bindTexture(w, ge), i.texParameteri(w, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(w, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ve = 0; Ve < te; Ve++)
      n && (w === i.TEXTURE_3D || w === i.TEXTURE_2D_ARRAY) ? i.texImage3D(oe, 0, i.RGBA, 1, 1, W, 0, i.RGBA, i.UNSIGNED_BYTE, ie) : i.texImage2D(oe + Ve, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ie);
    return ge;
  }
  const ye = {};
  ye[i.TEXTURE_2D] = we(i.TEXTURE_2D, i.TEXTURE_2D, 1), ye[i.TEXTURE_CUBE_MAP] = we(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (ye[i.TEXTURE_2D_ARRAY] = we(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), ye[i.TEXTURE_3D] = we(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Ce(i.DEPTH_TEST), l.setFunc(3), Ie(!1), Fe(1), Ce(i.CULL_FACE), Ee(0);
  function Ce(w) {
    f[w] !== !0 && (i.enable(w), f[w] = !0);
  }
  function Ke(w) {
    f[w] !== !1 && (i.disable(w), f[w] = !1);
  }
  function Ue(w, oe) {
    return m[w] !== oe ? (i.bindFramebuffer(w, oe), m[w] = oe, n && (w === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = oe), w === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = oe)), !0) : !1;
  }
  function I(w, oe) {
    let te = v, W = !1;
    if (w)
      if (te = g.get(oe), te === void 0 && (te = [], g.set(oe, te)), w.isWebGLMultipleRenderTargets) {
        const ie = w.texture;
        if (te.length !== ie.length || te[0] !== i.COLOR_ATTACHMENT0) {
          for (let ge = 0, Ve = ie.length; ge < Ve; ge++)
            te[ge] = i.COLOR_ATTACHMENT0 + ge;
          te.length = ie.length, W = !0;
        }
      } else
        te[0] !== i.COLOR_ATTACHMENT0 && (te[0] = i.COLOR_ATTACHMENT0, W = !0);
    else
      te[0] !== i.BACK && (te[0] = i.BACK, W = !0);
    W && (t.isWebGL2 ? i.drawBuffers(te) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te));
  }
  function At(w) {
    return p !== w ? (i.useProgram(w), p = w, !0) : !1;
  }
  const me = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    me[103] = i.MIN, me[104] = i.MAX;
  else {
    const w = e.get("EXT_blend_minmax");
    w !== null && (me[103] = w.MIN_EXT, me[104] = w.MAX_EXT);
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
  function Ee(w, oe, te, W, ie, ge, Ve, tt, It, Ye) {
    if (w === 0) {
      h === !0 && (Ke(i.BLEND), h = !1);
      return;
    }
    if (h === !1 && (Ce(i.BLEND), h = !0), w !== 5) {
      if (w !== A || Ye !== F) {
        if ((M !== 100 || C !== 100) && (i.blendEquation(i.FUNC_ADD), M = 100, C = 100), Ye)
          switch (w) {
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
              console.error("THREE.WebGLState: Invalid blending: ", w);
              break;
          }
        else
          switch (w) {
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
              console.error("THREE.WebGLState: Invalid blending: ", w);
              break;
          }
        T = null, b = null, R = null, V = null, E.set(0, 0, 0), x = 0, A = w, F = Ye;
      }
      return;
    }
    ie = ie || oe, ge = ge || te, Ve = Ve || W, (oe !== M || ie !== C) && (i.blendEquationSeparate(me[oe], me[ie]), M = oe, C = ie), (te !== T || W !== b || ge !== R || Ve !== V) && (i.blendFuncSeparate(Te[te], Te[W], Te[ge], Te[Ve]), T = te, b = W, R = ge, V = Ve), (tt.equals(E) === !1 || It !== x) && (i.blendColor(tt.r, tt.g, tt.b, It), E.copy(tt), x = It), A = w, F = !1;
  }
  function $e(w, oe) {
    w.side === 2 ? Ke(i.CULL_FACE) : Ce(i.CULL_FACE);
    let te = w.side === 1;
    oe && (te = !te), Ie(te), w.blending === 1 && w.transparent === !1 ? Ee(0) : Ee(w.blending, w.blendEquation, w.blendSrc, w.blendDst, w.blendEquationAlpha, w.blendSrcAlpha, w.blendDstAlpha, w.blendColor, w.blendAlpha, w.premultipliedAlpha), l.setFunc(w.depthFunc), l.setTest(w.depthTest), l.setMask(w.depthWrite), a.setMask(w.colorWrite);
    const W = w.stencilWrite;
    c.setTest(W), W && (c.setMask(w.stencilWriteMask), c.setFunc(w.stencilFunc, w.stencilRef, w.stencilFuncMask), c.setOp(w.stencilFail, w.stencilZFail, w.stencilZPass)), at(w.polygonOffset, w.polygonOffsetFactor, w.polygonOffsetUnits), w.alphaToCoverage === !0 ? Ce(i.SAMPLE_ALPHA_TO_COVERAGE) : Ke(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ie(w) {
    q !== w && (w ? i.frontFace(i.CW) : i.frontFace(i.CCW), q = w);
  }
  function Fe(w) {
    w !== 0 ? (Ce(i.CULL_FACE), w !== j && (w === 1 ? i.cullFace(i.BACK) : w === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Ke(i.CULL_FACE), j = w;
  }
  function qe(w) {
    w !== P && ($ && i.lineWidth(w), P = w);
  }
  function at(w, oe, te) {
    w ? (Ce(i.POLYGON_OFFSET_FILL), (H !== oe || X !== te) && (i.polygonOffset(oe, te), H = oe, X = te)) : Ke(i.POLYGON_OFFSET_FILL);
  }
  function ft(w) {
    w ? Ce(i.SCISSOR_TEST) : Ke(i.SCISSOR_TEST);
  }
  function y(w) {
    w === void 0 && (w = i.TEXTURE0 + k - 1), D !== w && (i.activeTexture(w), D = w);
  }
  function _(w, oe, te) {
    te === void 0 && (D === null ? te = i.TEXTURE0 + k - 1 : te = D);
    let W = G[te];
    W === void 0 && (W = { type: void 0, texture: void 0 }, G[te] = W), (W.type !== w || W.texture !== oe) && (D !== te && (i.activeTexture(te), D = te), i.bindTexture(w, oe || ye[w]), W.type = w, W.texture = oe);
  }
  function N() {
    const w = G[D];
    w !== void 0 && w.type !== void 0 && (i.bindTexture(w.type, null), w.type = void 0, w.texture = void 0);
  }
  function Q() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function K() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function ee() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function de() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function re() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function ce() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function xe() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function He() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function J() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function We() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Ae(w) {
    le.equals(w) === !1 && (i.scissor(w.x, w.y, w.z, w.w), le.copy(w));
  }
  function Se(w) {
    pe.equals(w) === !1 && (i.viewport(w.x, w.y, w.z, w.w), pe.copy(w));
  }
  function _e(w, oe) {
    let te = d.get(oe);
    te === void 0 && (te = /* @__PURE__ */ new WeakMap(), d.set(oe, te));
    let W = te.get(w);
    W === void 0 && (W = i.getUniformBlockIndex(oe, w.name), te.set(w, W));
  }
  function he(w, oe) {
    const W = d.get(oe).get(w);
    u.get(oe) !== W && (i.uniformBlockBinding(oe, W, w.__bindingPointIndex), u.set(oe, W));
  }
  function Be() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), f = {}, D = null, G = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), v = [], p = null, h = !1, A = null, M = null, T = null, b = null, C = null, R = null, V = null, E = new ze(0, 0, 0), x = 0, F = !1, q = null, j = null, P = null, H = null, X = null, le.set(0, 0, i.canvas.width, i.canvas.height), pe.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: Ce,
    disable: Ke,
    bindFramebuffer: Ue,
    drawBuffers: I,
    useProgram: At,
    setBlending: Ee,
    setMaterial: $e,
    setFlipSided: Ie,
    setCullFace: Fe,
    setLineWidth: qe,
    setPolygonOffset: at,
    setScissorTest: ft,
    activeTexture: y,
    bindTexture: _,
    unbindTexture: N,
    compressedTexImage2D: Q,
    compressedTexImage3D: K,
    texImage2D: J,
    texImage3D: We,
    updateUBOMapping: _e,
    uniformBlockBinding: he,
    texStorage2D: xe,
    texStorage3D: He,
    texSubImage2D: ee,
    texSubImage3D: de,
    compressedTexSubImage2D: re,
    compressedTexSubImage3D: ce,
    scissor: Ae,
    viewport: Se,
    reset: Be
  };
}
function Ch(i, e, t, n, r, s, o) {
  const a = r.isWebGL2, l = r.maxTextures, c = r.maxCubemapSize, u = r.maxTextureSize, d = r.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let v;
  const p = /* @__PURE__ */ new WeakMap();
  let h = !1;
  try {
    h = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function A(y, _) {
    return h ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(y, _)
    ) : Vi("canvas");
  }
  function M(y, _, N, Q) {
    let K = 1;
    if ((y.width > Q || y.height > Q) && (K = Q / Math.max(y.width, y.height)), K < 1 || _ === !0)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap) {
        const ee = _ ? Hi : Math.floor, de = ee(K * y.width), re = ee(K * y.height);
        v === void 0 && (v = A(de, re));
        const ce = N ? A(de, re) : v;
        return ce.width = de, ce.height = re, ce.getContext("2d").drawImage(y, 0, 0, de, re), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + y.width + "x" + y.height + ") to (" + de + "x" + re + ")."), ce;
      } else
        return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + y.width + "x" + y.height + ")."), y;
    return y;
  }
  function T(y) {
    return Tr(y.width) && Tr(y.height);
  }
  function b(y) {
    return a ? !1 : y.wrapS !== 1001 || y.wrapT !== 1001 || y.minFilter !== 1003 && y.minFilter !== 1006;
  }
  function C(y, _) {
    return y.generateMipmaps && _ && y.minFilter !== 1003 && y.minFilter !== 1006;
  }
  function R(y) {
    i.generateMipmap(y);
  }
  function V(y, _, N, Q, K = !1) {
    if (a === !1)
      return _;
    if (y !== null) {
      if (i[y] !== void 0)
        return i[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let ee = _;
    if (_ === i.RED && (N === i.FLOAT && (ee = i.R32F), N === i.HALF_FLOAT && (ee = i.R16F), N === i.UNSIGNED_BYTE && (ee = i.R8)), _ === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (ee = i.R8UI), N === i.UNSIGNED_SHORT && (ee = i.R16UI), N === i.UNSIGNED_INT && (ee = i.R32UI), N === i.BYTE && (ee = i.R8I), N === i.SHORT && (ee = i.R16I), N === i.INT && (ee = i.R32I)), _ === i.RG && (N === i.FLOAT && (ee = i.RG32F), N === i.HALF_FLOAT && (ee = i.RG16F), N === i.UNSIGNED_BYTE && (ee = i.RG8)), _ === i.RGBA) {
      const de = K ? Bi : ke.getTransfer(Q);
      N === i.FLOAT && (ee = i.RGBA32F), N === i.HALF_FLOAT && (ee = i.RGBA16F), N === i.UNSIGNED_BYTE && (ee = de === je ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (ee = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (ee = i.RGB5_A1);
    }
    return (ee === i.R16F || ee === i.R32F || ee === i.RG16F || ee === i.RG32F || ee === i.RGBA16F || ee === i.RGBA32F) && e.get("EXT_color_buffer_float"), ee;
  }
  function E(y, _, N) {
    return C(y, N) === !0 || y.isFramebufferTexture && y.minFilter !== 1003 && y.minFilter !== 1006 ? Math.log2(Math.max(_.width, _.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? _.mipmaps.length : 1;
  }
  function x(y) {
    return y === 1003 || y === 1004 || y === 1005 ? i.NEAREST : i.LINEAR;
  }
  function F(y) {
    const _ = y.target;
    _.removeEventListener("dispose", F), j(_), _.isVideoTexture && g.delete(_);
  }
  function q(y) {
    const _ = y.target;
    _.removeEventListener("dispose", q), H(_);
  }
  function j(y) {
    const _ = n.get(y);
    if (_.__webglInit === void 0)
      return;
    const N = y.source, Q = p.get(N);
    if (Q) {
      const K = Q[_.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && P(y), Object.keys(Q).length === 0 && p.delete(N);
    }
    n.remove(y);
  }
  function P(y) {
    const _ = n.get(y);
    i.deleteTexture(_.__webglTexture);
    const N = y.source, Q = p.get(N);
    delete Q[_.__cacheKey], o.memory.textures--;
  }
  function H(y) {
    const _ = y.texture, N = n.get(y), Q = n.get(_);
    if (Q.__webglTexture !== void 0 && (i.deleteTexture(Q.__webglTexture), o.memory.textures--), y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget)
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(N.__webglFramebuffer[K]))
          for (let ee = 0; ee < N.__webglFramebuffer[K].length; ee++)
            i.deleteFramebuffer(N.__webglFramebuffer[K][ee]);
        else
          i.deleteFramebuffer(N.__webglFramebuffer[K]);
        N.__webglDepthbuffer && i.deleteRenderbuffer(N.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(N.__webglFramebuffer))
        for (let K = 0; K < N.__webglFramebuffer.length; K++)
          i.deleteFramebuffer(N.__webglFramebuffer[K]);
      else
        i.deleteFramebuffer(N.__webglFramebuffer);
      if (N.__webglDepthbuffer && i.deleteRenderbuffer(N.__webglDepthbuffer), N.__webglMultisampledFramebuffer && i.deleteFramebuffer(N.__webglMultisampledFramebuffer), N.__webglColorRenderbuffer)
        for (let K = 0; K < N.__webglColorRenderbuffer.length; K++)
          N.__webglColorRenderbuffer[K] && i.deleteRenderbuffer(N.__webglColorRenderbuffer[K]);
      N.__webglDepthRenderbuffer && i.deleteRenderbuffer(N.__webglDepthRenderbuffer);
    }
    if (y.isWebGLMultipleRenderTargets)
      for (let K = 0, ee = _.length; K < ee; K++) {
        const de = n.get(_[K]);
        de.__webglTexture && (i.deleteTexture(de.__webglTexture), o.memory.textures--), n.remove(_[K]);
      }
    n.remove(_), n.remove(y);
  }
  let X = 0;
  function k() {
    X = 0;
  }
  function $() {
    const y = X;
    return y >= l && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + l), X += 1, y;
  }
  function Z(y) {
    const _ = [];
    return _.push(y.wrapS), _.push(y.wrapT), _.push(y.wrapR || 0), _.push(y.magFilter), _.push(y.minFilter), _.push(y.anisotropy), _.push(y.internalFormat), _.push(y.format), _.push(y.type), _.push(y.generateMipmaps), _.push(y.premultiplyAlpha), _.push(y.flipY), _.push(y.unpackAlignment), _.push(y.colorSpace), _.join();
  }
  function Y(y, _) {
    const N = n.get(y);
    if (y.isVideoTexture && at(y), y.isRenderTargetTexture === !1 && y.version > 0 && N.__version !== y.version) {
      const Q = y.image;
      if (Q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ce(N, y, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function D(y, _) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      Ce(N, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + _);
  }
  function G(y, _) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      Ce(N, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function ae(y, _) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      Ke(N, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + _);
  }
  const se = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, le = {
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
  function we(y, _, N) {
    if (N ? (i.texParameteri(y, i.TEXTURE_WRAP_S, se[_.wrapS]), i.texParameteri(y, i.TEXTURE_WRAP_T, se[_.wrapT]), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, se[_.wrapR]), i.texParameteri(y, i.TEXTURE_MAG_FILTER, le[_.magFilter]), i.texParameteri(y, i.TEXTURE_MIN_FILTER, le[_.minFilter])) : (i.texParameteri(y, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(y, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (_.wrapS !== 1001 || _.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(y, i.TEXTURE_MAG_FILTER, x(_.magFilter)), i.texParameteri(y, i.TEXTURE_MIN_FILTER, x(_.minFilter)), _.minFilter !== 1003 && _.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), _.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, pe[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (_.magFilter === 1003 || _.minFilter !== 1005 && _.minFilter !== 1008 || _.type === 1015 && e.has("OES_texture_float_linear") === !1 || a === !1 && _.type === 1016 && e.has("OES_texture_half_float_linear") === !1)
        return;
      (_.anisotropy > 1 || n.get(_).__currentAnisotropy) && (i.texParameterf(y, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy);
    }
  }
  function ye(y, _) {
    let N = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, _.addEventListener("dispose", F));
    const Q = _.source;
    let K = p.get(Q);
    K === void 0 && (K = {}, p.set(Q, K));
    const ee = Z(_);
    if (ee !== y.__cacheKey) {
      K[ee] === void 0 && (K[ee] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, N = !0), K[ee].usedTimes++;
      const de = K[y.__cacheKey];
      de !== void 0 && (K[y.__cacheKey].usedTimes--, de.usedTimes === 0 && P(_)), y.__cacheKey = ee, y.__webglTexture = K[ee].texture;
    }
    return N;
  }
  function Ce(y, _, N) {
    let Q = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (Q = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (Q = i.TEXTURE_3D);
    const K = ye(y, _), ee = _.source;
    t.bindTexture(Q, y.__webglTexture, i.TEXTURE0 + N);
    const de = n.get(ee);
    if (ee.version !== de.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const re = ke.getPrimaries(ke.workingColorSpace), ce = _.colorSpace === Ot ? null : ke.getPrimaries(_.colorSpace), xe = _.colorSpace === Ot || re === ce ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe);
      const He = b(_) && T(_.image) === !1;
      let J = M(_.image, He, !1, u);
      J = ft(_, J);
      const We = T(J) || a, Ae = s.convert(_.format, _.colorSpace);
      let Se = s.convert(_.type), _e = V(_.internalFormat, Ae, Se, _.colorSpace, _.isVideoTexture);
      we(Q, _, We);
      let he;
      const Be = _.mipmaps, w = a && _.isVideoTexture !== !0, oe = de.__version === void 0 || K === !0, te = E(_, J, We);
      if (_.isDepthTexture)
        _e = i.DEPTH_COMPONENT, a ? _.type === 1015 ? _e = i.DEPTH_COMPONENT32F : _.type === 1014 ? _e = i.DEPTH_COMPONENT24 : _.type === 1020 ? _e = i.DEPTH24_STENCIL8 : _e = i.DEPTH_COMPONENT16 : _.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), _.format === 1026 && _e === i.DEPTH_COMPONENT && _.type !== 1012 && _.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), _.type = 1014, Se = s.convert(_.type)), _.format === 1027 && _e === i.DEPTH_COMPONENT && (_e = i.DEPTH_STENCIL, _.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), _.type = 1020, Se = s.convert(_.type))), oe && (w ? t.texStorage2D(i.TEXTURE_2D, 1, _e, J.width, J.height) : t.texImage2D(i.TEXTURE_2D, 0, _e, J.width, J.height, 0, Ae, Se, null));
      else if (_.isDataTexture)
        if (Be.length > 0 && We) {
          w && oe && t.texStorage2D(i.TEXTURE_2D, te, _e, Be[0].width, Be[0].height);
          for (let W = 0, ie = Be.length; W < ie; W++)
            he = Be[W], w ? t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, he.width, he.height, Ae, Se, he.data) : t.texImage2D(i.TEXTURE_2D, W, _e, he.width, he.height, 0, Ae, Se, he.data);
          _.generateMipmaps = !1;
        } else
          w ? (oe && t.texStorage2D(i.TEXTURE_2D, te, _e, J.width, J.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, J.width, J.height, Ae, Se, J.data)) : t.texImage2D(i.TEXTURE_2D, 0, _e, J.width, J.height, 0, Ae, Se, J.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          w && oe && t.texStorage3D(i.TEXTURE_2D_ARRAY, te, _e, Be[0].width, Be[0].height, J.depth);
          for (let W = 0, ie = Be.length; W < ie; W++)
            he = Be[W], _.format !== 1023 ? Ae !== null ? w ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, he.width, he.height, J.depth, Ae, he.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, W, _e, he.width, he.height, J.depth, 0, he.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : w ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, he.width, he.height, J.depth, Ae, Se, he.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, W, _e, he.width, he.height, J.depth, 0, Ae, Se, he.data);
        } else {
          w && oe && t.texStorage2D(i.TEXTURE_2D, te, _e, Be[0].width, Be[0].height);
          for (let W = 0, ie = Be.length; W < ie; W++)
            he = Be[W], _.format !== 1023 ? Ae !== null ? w ? t.compressedTexSubImage2D(i.TEXTURE_2D, W, 0, 0, he.width, he.height, Ae, he.data) : t.compressedTexImage2D(i.TEXTURE_2D, W, _e, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : w ? t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, he.width, he.height, Ae, Se, he.data) : t.texImage2D(i.TEXTURE_2D, W, _e, he.width, he.height, 0, Ae, Se, he.data);
        }
      else if (_.isDataArrayTexture)
        w ? (oe && t.texStorage3D(i.TEXTURE_2D_ARRAY, te, _e, J.width, J.height, J.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, Ae, Se, J.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, _e, J.width, J.height, J.depth, 0, Ae, Se, J.data);
      else if (_.isData3DTexture)
        w ? (oe && t.texStorage3D(i.TEXTURE_3D, te, _e, J.width, J.height, J.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, Ae, Se, J.data)) : t.texImage3D(i.TEXTURE_3D, 0, _e, J.width, J.height, J.depth, 0, Ae, Se, J.data);
      else if (_.isFramebufferTexture) {
        if (oe)
          if (w)
            t.texStorage2D(i.TEXTURE_2D, te, _e, J.width, J.height);
          else {
            let W = J.width, ie = J.height;
            for (let ge = 0; ge < te; ge++)
              t.texImage2D(i.TEXTURE_2D, ge, _e, W, ie, 0, Ae, Se, null), W >>= 1, ie >>= 1;
          }
      } else if (Be.length > 0 && We) {
        w && oe && t.texStorage2D(i.TEXTURE_2D, te, _e, Be[0].width, Be[0].height);
        for (let W = 0, ie = Be.length; W < ie; W++)
          he = Be[W], w ? t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, Ae, Se, he) : t.texImage2D(i.TEXTURE_2D, W, _e, Ae, Se, he);
        _.generateMipmaps = !1;
      } else
        w ? (oe && t.texStorage2D(i.TEXTURE_2D, te, _e, J.width, J.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Ae, Se, J)) : t.texImage2D(i.TEXTURE_2D, 0, _e, Ae, Se, J);
      C(_, We) && R(Q), de.__version = ee.version, _.onUpdate && _.onUpdate(_);
    }
    y.__version = _.version;
  }
  function Ke(y, _, N) {
    if (_.image.length !== 6)
      return;
    const Q = ye(y, _), K = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + N);
    const ee = n.get(K);
    if (K.version !== ee.__version || Q === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const de = ke.getPrimaries(ke.workingColorSpace), re = _.colorSpace === Ot ? null : ke.getPrimaries(_.colorSpace), ce = _.colorSpace === Ot || de === re ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const xe = _.isCompressedTexture || _.image[0].isCompressedTexture, He = _.image[0] && _.image[0].isDataTexture, J = [];
      for (let W = 0; W < 6; W++)
        !xe && !He ? J[W] = M(_.image[W], !1, !0, c) : J[W] = He ? _.image[W].image : _.image[W], J[W] = ft(_, J[W]);
      const We = J[0], Ae = T(We) || a, Se = s.convert(_.format, _.colorSpace), _e = s.convert(_.type), he = V(_.internalFormat, Se, _e, _.colorSpace), Be = a && _.isVideoTexture !== !0, w = ee.__version === void 0 || Q === !0;
      let oe = E(_, We, Ae);
      we(i.TEXTURE_CUBE_MAP, _, Ae);
      let te;
      if (xe) {
        Be && w && t.texStorage2D(i.TEXTURE_CUBE_MAP, oe, he, We.width, We.height);
        for (let W = 0; W < 6; W++) {
          te = J[W].mipmaps;
          for (let ie = 0; ie < te.length; ie++) {
            const ge = te[ie];
            _.format !== 1023 ? Se !== null ? Be ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ie, 0, 0, ge.width, ge.height, Se, ge.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ie, he, ge.width, ge.height, 0, ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ie, 0, 0, ge.width, ge.height, Se, _e, ge.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ie, he, ge.width, ge.height, 0, Se, _e, ge.data);
          }
        }
      } else {
        te = _.mipmaps, Be && w && (te.length > 0 && oe++, t.texStorage2D(i.TEXTURE_CUBE_MAP, oe, he, J[0].width, J[0].height));
        for (let W = 0; W < 6; W++)
          if (He) {
            Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, 0, 0, J[W].width, J[W].height, Se, _e, J[W].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, he, J[W].width, J[W].height, 0, Se, _e, J[W].data);
            for (let ie = 0; ie < te.length; ie++) {
              const Ve = te[ie].image[W].image;
              Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ie + 1, 0, 0, Ve.width, Ve.height, Se, _e, Ve.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ie + 1, he, Ve.width, Ve.height, 0, Se, _e, Ve.data);
            }
          } else {
            Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, 0, 0, Se, _e, J[W]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, he, Se, _e, J[W]);
            for (let ie = 0; ie < te.length; ie++) {
              const ge = te[ie];
              Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ie + 1, 0, 0, Se, _e, ge.image[W]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ie + 1, he, Se, _e, ge.image[W]);
            }
          }
      }
      C(_, Ae) && R(i.TEXTURE_CUBE_MAP), ee.__version = K.version, _.onUpdate && _.onUpdate(_);
    }
    y.__version = _.version;
  }
  function Ue(y, _, N, Q, K, ee) {
    const de = s.convert(N.format, N.colorSpace), re = s.convert(N.type), ce = V(N.internalFormat, de, re, N.colorSpace);
    if (!n.get(_).__hasExternalTextures) {
      const He = Math.max(1, _.width >> ee), J = Math.max(1, _.height >> ee);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY ? t.texImage3D(K, ee, ce, He, J, _.depth, 0, de, re, null) : t.texImage2D(K, ee, ce, He, J, 0, de, re, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, y), qe(_) ? f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Q, K, n.get(N).__webglTexture, 0, Fe(_)) : (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Q, K, n.get(N).__webglTexture, ee), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function I(y, _, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, y), _.depthBuffer && !_.stencilBuffer) {
      let Q = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
      if (N || qe(_)) {
        const K = _.depthTexture;
        K && K.isDepthTexture && (K.type === 1015 ? Q = i.DEPTH_COMPONENT32F : K.type === 1014 && (Q = i.DEPTH_COMPONENT24));
        const ee = Fe(_);
        qe(_) ? f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ee, Q, _.width, _.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, ee, Q, _.width, _.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, Q, _.width, _.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, y);
    } else if (_.depthBuffer && _.stencilBuffer) {
      const Q = Fe(_);
      N && qe(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Q, i.DEPTH24_STENCIL8, _.width, _.height) : qe(_) ? f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Q, i.DEPTH24_STENCIL8, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, y);
    } else {
      const Q = _.isWebGLMultipleRenderTargets === !0 ? _.texture : [_.texture];
      for (let K = 0; K < Q.length; K++) {
        const ee = Q[K], de = s.convert(ee.format, ee.colorSpace), re = s.convert(ee.type), ce = V(ee.internalFormat, de, re, ee.colorSpace), xe = Fe(_);
        N && qe(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xe, ce, _.width, _.height) : qe(_) ? f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xe, ce, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, ce, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function At(y, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, y), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(_.depthTexture).__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), Y(_.depthTexture, 0);
    const Q = n.get(_.depthTexture).__webglTexture, K = Fe(_);
    if (_.depthTexture.format === 1026)
      qe(_) ? f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Q, 0, K) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Q, 0);
    else if (_.depthTexture.format === 1027)
      qe(_) ? f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Q, 0, K) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function me(y) {
    const _ = n.get(y), N = y.isWebGLCubeRenderTarget === !0;
    if (y.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (N)
        throw new Error("target.depthTexture not supported in Cube render targets");
      At(_.__webglFramebuffer, y);
    } else if (N) {
      _.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[Q]), _.__webglDepthbuffer[Q] = i.createRenderbuffer(), I(_.__webglDepthbuffer[Q], y, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer = i.createRenderbuffer(), I(_.__webglDepthbuffer, y, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Te(y, _, N) {
    const Q = n.get(y);
    _ !== void 0 && Ue(Q.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && me(y);
  }
  function Ee(y) {
    const _ = y.texture, N = n.get(y), Q = n.get(_);
    y.addEventListener("dispose", q), y.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = i.createTexture()), Q.__version = _.version, o.memory.textures++);
    const K = y.isWebGLCubeRenderTarget === !0, ee = y.isWebGLMultipleRenderTargets === !0, de = T(y) || a;
    if (K) {
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
          const re = y.texture;
          for (let ce = 0, xe = re.length; ce < xe; ce++) {
            const He = n.get(re[ce]);
            He.__webglTexture === void 0 && (He.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && y.samples > 0 && qe(y) === !1) {
        const re = ee ? _ : [_];
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let ce = 0; ce < re.length; ce++) {
          const xe = re[ce];
          N.__webglColorRenderbuffer[ce] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[ce]);
          const He = s.convert(xe.format, xe.colorSpace), J = s.convert(xe.type), We = V(xe.internalFormat, He, J, xe.colorSpace, y.isXRRenderTarget === !0), Ae = Fe(y);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ae, We, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ce, i.RENDERBUFFER, N.__webglColorRenderbuffer[ce]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), y.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), I(N.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (K) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Q.__webglTexture), we(i.TEXTURE_CUBE_MAP, _, de);
      for (let re = 0; re < 6; re++)
        if (a && _.mipmaps && _.mipmaps.length > 0)
          for (let ce = 0; ce < _.mipmaps.length; ce++)
            Ue(N.__webglFramebuffer[re][ce], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + re, ce);
        else
          Ue(N.__webglFramebuffer[re], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      C(_, de) && R(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ee) {
      const re = y.texture;
      for (let ce = 0, xe = re.length; ce < xe; ce++) {
        const He = re[ce], J = n.get(He);
        t.bindTexture(i.TEXTURE_2D, J.__webglTexture), we(i.TEXTURE_2D, He, de), Ue(N.__webglFramebuffer, y, He, i.COLOR_ATTACHMENT0 + ce, i.TEXTURE_2D, 0), C(He, de) && R(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = i.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (a ? re = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(re, Q.__webglTexture), we(re, _, de), a && _.mipmaps && _.mipmaps.length > 0)
        for (let ce = 0; ce < _.mipmaps.length; ce++)
          Ue(N.__webglFramebuffer[ce], y, _, i.COLOR_ATTACHMENT0, re, ce);
      else
        Ue(N.__webglFramebuffer, y, _, i.COLOR_ATTACHMENT0, re, 0);
      C(_, de) && R(re), t.unbindTexture();
    }
    y.depthBuffer && me(y);
  }
  function $e(y) {
    const _ = T(y) || a, N = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
    for (let Q = 0, K = N.length; Q < K; Q++) {
      const ee = N[Q];
      if (C(ee, _)) {
        const de = y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, re = n.get(ee).__webglTexture;
        t.bindTexture(de, re), R(de), t.unbindTexture();
      }
    }
  }
  function Ie(y) {
    if (a && y.samples > 0 && qe(y) === !1) {
      const _ = y.isWebGLMultipleRenderTargets ? y.texture : [y.texture], N = y.width, Q = y.height;
      let K = i.COLOR_BUFFER_BIT;
      const ee = [], de = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, re = n.get(y), ce = y.isWebGLMultipleRenderTargets === !0;
      if (ce)
        for (let xe = 0; xe < _.length; xe++)
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, re.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglFramebuffer);
      for (let xe = 0; xe < _.length; xe++) {
        ee.push(i.COLOR_ATTACHMENT0 + xe), y.depthBuffer && ee.push(de);
        const He = re.__ignoreDepthValues !== void 0 ? re.__ignoreDepthValues : !1;
        if (He === !1 && (y.depthBuffer && (K |= i.DEPTH_BUFFER_BIT), y.stencilBuffer && (K |= i.STENCIL_BUFFER_BIT)), ce && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, re.__webglColorRenderbuffer[xe]), He === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [de]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [de])), ce) {
          const J = n.get(_[xe]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, J, 0);
        }
        i.blitFramebuffer(0, 0, N, Q, 0, 0, N, Q, K, i.NEAREST), m && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ee);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ce)
        for (let xe = 0; xe < _.length; xe++) {
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.RENDERBUFFER, re.__webglColorRenderbuffer[xe]);
          const He = n.get(_[xe]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.TEXTURE_2D, He, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglMultisampledFramebuffer);
    }
  }
  function Fe(y) {
    return Math.min(d, y.samples);
  }
  function qe(y) {
    const _ = n.get(y);
    return a && y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function at(y) {
    const _ = o.render.frame;
    g.get(y) !== _ && (g.set(y, _), y.update());
  }
  function ft(y, _) {
    const N = y.colorSpace, Q = y.format, K = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || y.format === 1035 || N !== nn && N !== Ot && (ke.getTransfer(N) === je ? a === !1 ? e.has("EXT_sRGB") === !0 && Q === 1023 ? (y.format = 1035, y.minFilter = 1006, y.generateMipmaps = !1) : _ = Ys.sRGBToLinear(_) : (Q !== 1023 || K !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), _;
  }
  this.allocateTextureUnit = $, this.resetTextureUnits = k, this.setTexture2D = Y, this.setTexture2DArray = D, this.setTexture3D = G, this.setTextureCube = ae, this.rebindTextures = Te, this.setupRenderTarget = Ee, this.updateRenderTargetMipmap = $e, this.updateMultisampleRenderTarget = Ie, this.setupDepthRenderbuffer = me, this.setupFrameBufferTexture = Ue, this.useMultisampledRTT = qe;
}
function Ph(i, e, t) {
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
      if (l === je)
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
          return l === je ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === 37496)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === 37808 || s === 37809 || s === 37810 || s === 37811 || s === 37812 || s === 37813 || s === 37814 || s === 37815 || s === 37816 || s === 37817 || s === 37818 || s === 37819 || s === 37820 || s === 37821)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === 37808)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === 37809)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === 37810)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === 37811)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === 37812)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === 37813)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === 37814)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === 37815)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === 37816)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === 37817)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === 37818)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === 37819)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === 37820)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === 37821)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === 36492 || s === 36494 || s === 36495)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === 36492)
          return l === je ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
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
class Lh extends Nt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Bn extends Et {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Dh = { type: "move" };
class xr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Bn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Bn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Bn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
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
          const p = t.getJointPose(v, n), h = this._getHandJoint(c, v);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], f = u.position.distanceTo(d.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && f > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && f <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Dh)));
    }
    return a !== null && (a.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Bn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Uh extends Pt {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    if (u = u !== void 0 ? u : 1026, u !== 1026 && u !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === 1026 && (n = 1014), n === void 0 && u === 1027 && (n = 1020), super(null, r, s, o, a, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Ih extends Vn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, u = null, d = null, f = null, m = null, g = null;
    const v = t.getContextAttributes();
    let p = null, h = null;
    const A = [], M = [], T = new Nt();
    T.layers.enable(1), T.viewport = new et();
    const b = new Nt();
    b.layers.enable(2), b.viewport = new et();
    const C = [T, b], R = new Lh();
    R.layers.enable(1), R.layers.enable(2);
    let V = null, E = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(D) {
      let G = A[D];
      return G === void 0 && (G = new xr(), A[D] = G), G.getTargetRaySpace();
    }, this.getControllerGrip = function(D) {
      let G = A[D];
      return G === void 0 && (G = new xr(), A[D] = G), G.getGripSpace();
    }, this.getHand = function(D) {
      let G = A[D];
      return G === void 0 && (G = new xr(), A[D] = G), G.getHandSpace();
    };
    function x(D) {
      const G = M.indexOf(D.inputSource);
      if (G === -1)
        return;
      const ae = A[G];
      ae !== void 0 && (ae.update(D.inputSource, D.frame, c || o), ae.dispatchEvent({ type: D.type, data: D.inputSource }));
    }
    function F() {
      r.removeEventListener("select", x), r.removeEventListener("selectstart", x), r.removeEventListener("selectend", x), r.removeEventListener("squeeze", x), r.removeEventListener("squeezestart", x), r.removeEventListener("squeezeend", x), r.removeEventListener("end", F), r.removeEventListener("inputsourceschange", q);
      for (let D = 0; D < A.length; D++) {
        const G = M[D];
        G !== null && (M[D] = null, A[D].disconnect(G));
      }
      V = null, E = null, e.setRenderTarget(p), m = null, f = null, d = null, r = null, h = null, Y.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(D) {
      s = D, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(D) {
      a = D, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(D) {
      c = D;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(D) {
      if (r = D, r !== null) {
        if (p = e.getRenderTarget(), r.addEventListener("select", x), r.addEventListener("selectstart", x), r.addEventListener("selectend", x), r.addEventListener("squeeze", x), r.addEventListener("squeezestart", x), r.addEventListener("squeezeend", x), r.addEventListener("end", F), r.addEventListener("inputsourceschange", q), v.xrCompatible !== !0 && await t.makeXRCompatible(), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const G = {
            antialias: r.renderState.layers === void 0 ? v.antialias : !0,
            alpha: !0,
            depth: v.depth,
            stencil: v.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, G), r.updateRenderState({ baseLayer: m }), h = new kt(
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
          let G = null, ae = null, se = null;
          v.depth && (se = v.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, G = v.stencil ? 1027 : 1026, ae = v.stencil ? 1020 : 1014);
          const le = {
            colorFormat: t.RGBA8,
            depthFormat: se,
            scaleFactor: s
          };
          d = new XRWebGLBinding(r, t), f = d.createProjectionLayer(le), r.updateRenderState({ layers: [f] }), h = new kt(
            f.textureWidth,
            f.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Uh(f.textureWidth, f.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, G),
              stencilBuffer: v.stencil,
              colorSpace: e.outputColorSpace,
              samples: v.antialias ? 4 : 0
            }
          );
          const pe = e.properties.get(h);
          pe.__ignoreDepthValues = f.ignoreDepthValues;
        }
        h.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), Y.setContext(r), Y.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    };
    function q(D) {
      for (let G = 0; G < D.removed.length; G++) {
        const ae = D.removed[G], se = M.indexOf(ae);
        se >= 0 && (M[se] = null, A[se].disconnect(ae));
      }
      for (let G = 0; G < D.added.length; G++) {
        const ae = D.added[G];
        let se = M.indexOf(ae);
        if (se === -1) {
          for (let pe = 0; pe < A.length; pe++)
            if (pe >= M.length) {
              M.push(ae), se = pe;
              break;
            } else if (M[pe] === null) {
              M[pe] = ae, se = pe;
              break;
            }
          if (se === -1)
            break;
        }
        const le = A[se];
        le && le.connect(ae);
      }
    }
    const j = new L(), P = new L();
    function H(D, G, ae) {
      j.setFromMatrixPosition(G.matrixWorld), P.setFromMatrixPosition(ae.matrixWorld);
      const se = j.distanceTo(P), le = G.projectionMatrix.elements, pe = ae.projectionMatrix.elements, we = le[14] / (le[10] - 1), ye = le[14] / (le[10] + 1), Ce = (le[9] + 1) / le[5], Ke = (le[9] - 1) / le[5], Ue = (le[8] - 1) / le[0], I = (pe[8] + 1) / pe[0], At = we * Ue, me = we * I, Te = se / (-Ue + I), Ee = Te * -Ue;
      G.matrixWorld.decompose(D.position, D.quaternion, D.scale), D.translateX(Ee), D.translateZ(Te), D.matrixWorld.compose(D.position, D.quaternion, D.scale), D.matrixWorldInverse.copy(D.matrixWorld).invert();
      const $e = we + Te, Ie = ye + Te, Fe = At - Ee, qe = me + (se - Ee), at = Ce * ye / Ie * $e, ft = Ke * ye / Ie * $e;
      D.projectionMatrix.makePerspective(Fe, qe, at, ft, $e, Ie), D.projectionMatrixInverse.copy(D.projectionMatrix).invert();
    }
    function X(D, G) {
      G === null ? D.matrixWorld.copy(D.matrix) : D.matrixWorld.multiplyMatrices(G.matrixWorld, D.matrix), D.matrixWorldInverse.copy(D.matrixWorld).invert();
    }
    this.updateCamera = function(D) {
      if (r === null)
        return;
      R.near = b.near = T.near = D.near, R.far = b.far = T.far = D.far, (V !== R.near || E !== R.far) && (r.updateRenderState({
        depthNear: R.near,
        depthFar: R.far
      }), V = R.near, E = R.far);
      const G = D.parent, ae = R.cameras;
      X(R, G);
      for (let se = 0; se < ae.length; se++)
        X(ae[se], G);
      ae.length === 2 ? H(R, T, b) : R.projectionMatrix.copy(T.projectionMatrix), k(D, R, G);
    };
    function k(D, G, ae) {
      ae === null ? D.matrix.copy(G.matrixWorld) : (D.matrix.copy(ae.matrixWorld), D.matrix.invert(), D.matrix.multiply(G.matrixWorld)), D.matrix.decompose(D.position, D.quaternion, D.scale), D.updateMatrixWorld(!0), D.projectionMatrix.copy(G.projectionMatrix), D.projectionMatrixInverse.copy(G.projectionMatrixInverse), D.isPerspectiveCamera && (D.fov = ri * 2 * Math.atan(1 / D.projectionMatrix.elements[5]), D.zoom = 1);
    }
    this.getCamera = function() {
      return R;
    }, this.getFoveation = function() {
      if (!(f === null && m === null))
        return l;
    }, this.setFoveation = function(D) {
      l = D, f !== null && (f.fixedFoveation = D), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = D);
    };
    let $ = null;
    function Z(D, G) {
      if (u = G.getViewerPose(c || o), g = G, u !== null) {
        const ae = u.views;
        m !== null && (e.setRenderTargetFramebuffer(h, m.framebuffer), e.setRenderTarget(h));
        let se = !1;
        ae.length !== R.cameras.length && (R.cameras.length = 0, se = !0);
        for (let le = 0; le < ae.length; le++) {
          const pe = ae[le];
          let we = null;
          if (m !== null)
            we = m.getViewport(pe);
          else {
            const Ce = d.getViewSubImage(f, pe);
            we = Ce.viewport, le === 0 && (e.setRenderTargetTextures(
              h,
              Ce.colorTexture,
              f.ignoreDepthValues ? void 0 : Ce.depthStencilTexture
            ), e.setRenderTarget(h));
          }
          let ye = C[le];
          ye === void 0 && (ye = new Nt(), ye.layers.enable(le), ye.viewport = new et(), C[le] = ye), ye.matrix.fromArray(pe.transform.matrix), ye.matrix.decompose(ye.position, ye.quaternion, ye.scale), ye.projectionMatrix.fromArray(pe.projectionMatrix), ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(), ye.viewport.set(we.x, we.y, we.width, we.height), le === 0 && (R.matrix.copy(ye.matrix), R.matrix.decompose(R.position, R.quaternion, R.scale)), se === !0 && R.cameras.push(ye);
        }
      }
      for (let ae = 0; ae < A.length; ae++) {
        const se = M[ae], le = A[ae];
        se !== null && le !== void 0 && le.update(se, G, c || o);
      }
      $ && $(D, G), G.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: G }), g = null;
    }
    const Y = new ia();
    Y.setAnimationLoop(Z), this.setAnimationLoop = function(D) {
      $ = D;
    }, this.dispose = function() {
    };
  }
}
function Fh(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, Qs(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function r(p, h, A, M, T) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(p, h) : h.isMeshToonMaterial ? (s(p, h), d(p, h)) : h.isMeshPhongMaterial ? (s(p, h), u(p, h)) : h.isMeshStandardMaterial ? (s(p, h), f(p, h), h.isMeshPhysicalMaterial && m(p, h, T)) : h.isMeshMatcapMaterial ? (s(p, h), g(p, h)) : h.isMeshDepthMaterial ? s(p, h) : h.isMeshDistanceMaterial ? (s(p, h), v(p, h)) : h.isMeshNormalMaterial ? s(p, h) : h.isLineBasicMaterial ? (o(p, h), h.isLineDashedMaterial && a(p, h)) : h.isPointsMaterial ? l(p, h, A, M) : h.isSpriteMaterial ? c(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, t(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === 1 && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, t(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === 1 && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, t(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, t(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const A = e.get(h).envMap;
    if (A && (p.envMap.value = A, p.flipEnvMap.value = A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap) {
      p.lightMap.value = h.lightMap;
      const M = i._useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = h.lightMapIntensity * M, t(h.lightMap, p.lightMapTransform);
    }
    h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, p.aoMapTransform));
  }
  function o(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, t(h.map, p.mapTransform));
  }
  function a(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function l(p, h, A, M) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * A, p.scale.value = M * 0.5, h.map && (p.map.value = h.map, t(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function d(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, p.roughnessMapTransform)), e.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, A) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === 1 && p.clearcoatNormalScale.value.negate())), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = A.texture, p.transmissionSamplerSize.value.set(A.width, A.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function v(p, h) {
    const A = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(A.matrixWorld), p.nearDistance.value = A.shadow.camera.near, p.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Nh(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(A, M) {
    const T = M.program;
    n.uniformBlockBinding(A, T);
  }
  function c(A, M) {
    let T = r[A.id];
    T === void 0 && (g(A), T = u(A), r[A.id] = T, A.addEventListener("dispose", p));
    const b = M.program;
    n.updateUBOMapping(A, b);
    const C = e.render.frame;
    s[A.id] !== C && (f(A), s[A.id] = C);
  }
  function u(A) {
    const M = d();
    A.__bindingPointIndex = M;
    const T = i.createBuffer(), b = A.__size, C = A.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, T), i.bufferData(i.UNIFORM_BUFFER, b, C), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, M, T), T;
  }
  function d() {
    for (let A = 0; A < a; A++)
      if (o.indexOf(A) === -1)
        return o.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const M = r[A.id], T = A.uniforms, b = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, M);
    for (let C = 0, R = T.length; C < R; C++) {
      const V = T[C];
      if (m(V, C, b) === !0) {
        const E = V.__offset, x = Array.isArray(V.value) ? V.value : [V.value];
        let F = 0;
        for (let q = 0; q < x.length; q++) {
          const j = x[q], P = v(j);
          typeof j == "number" ? (V.__data[0] = j, i.bufferSubData(i.UNIFORM_BUFFER, E + F, V.__data)) : j.isMatrix3 ? (V.__data[0] = j.elements[0], V.__data[1] = j.elements[1], V.__data[2] = j.elements[2], V.__data[3] = j.elements[0], V.__data[4] = j.elements[3], V.__data[5] = j.elements[4], V.__data[6] = j.elements[5], V.__data[7] = j.elements[0], V.__data[8] = j.elements[6], V.__data[9] = j.elements[7], V.__data[10] = j.elements[8], V.__data[11] = j.elements[0]) : (j.toArray(V.__data, F), F += P.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        i.bufferSubData(i.UNIFORM_BUFFER, E, V.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(A, M, T) {
    const b = A.value;
    if (T[M] === void 0) {
      if (typeof b == "number")
        T[M] = b;
      else {
        const C = Array.isArray(b) ? b : [b], R = [];
        for (let V = 0; V < C.length; V++)
          R.push(C[V].clone());
        T[M] = R;
      }
      return !0;
    } else if (typeof b == "number") {
      if (T[M] !== b)
        return T[M] = b, !0;
    } else {
      const C = Array.isArray(T[M]) ? T[M] : [T[M]], R = Array.isArray(b) ? b : [b];
      for (let V = 0; V < C.length; V++) {
        const E = C[V];
        if (E.equals(R[V]) === !1)
          return E.copy(R[V]), !0;
      }
    }
    return !1;
  }
  function g(A) {
    const M = A.uniforms;
    let T = 0;
    const b = 16;
    let C = 0;
    for (let R = 0, V = M.length; R < V; R++) {
      const E = M[R], x = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, F = Array.isArray(E.value) ? E.value : [E.value];
      for (let q = 0, j = F.length; q < j; q++) {
        const P = F[q], H = v(P);
        x.boundary += H.boundary, x.storage += H.storage;
      }
      if (E.__data = new Float32Array(x.storage / Float32Array.BYTES_PER_ELEMENT), E.__offset = T, R > 0) {
        C = T % b;
        const q = b - C;
        C !== 0 && q - x.boundary < 0 && (T += b - C, E.__offset = T);
      }
      T += x.storage;
    }
    return C = T % b, C > 0 && (T += b - C), A.__size = T, A.__cache = {}, this;
  }
  function v(A) {
    const M = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof A == "number" ? (M.boundary = 4, M.storage = 4) : A.isVector2 ? (M.boundary = 8, M.storage = 8) : A.isVector3 || A.isColor ? (M.boundary = 16, M.storage = 12) : A.isVector4 ? (M.boundary = 16, M.storage = 16) : A.isMatrix3 ? (M.boundary = 48, M.storage = 48) : A.isMatrix4 ? (M.boundary = 64, M.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), M;
  }
  function p(A) {
    const M = A.target;
    M.removeEventListener("dispose", p);
    const T = o.indexOf(M.__bindingPointIndex);
    o.splice(T, 1), i.deleteBuffer(r[M.id]), delete r[M.id], delete s[M.id];
  }
  function h() {
    for (const A in r)
      i.deleteBuffer(r[A]);
    o = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: h
  };
}
class la {
  constructor(e = {}) {
    const {
      canvas: t = Ia(),
      context: n = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    n !== null ? f = n.getContextAttributes().alpha : f = o;
    const m = new Uint32Array(4), g = new Int32Array(4);
    let v = null, p = null;
    const h = [], A = [];
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
    const M = this;
    let T = !1, b = 0, C = 0, R = null, V = -1, E = null;
    const x = new et(), F = new et();
    let q = null;
    const j = new ze(0);
    let P = 0, H = t.width, X = t.height, k = 1, $ = null, Z = null;
    const Y = new et(0, 0, H, X), D = new et(0, 0, H, X);
    let G = !1;
    const ae = new na();
    let se = !1, le = !1, pe = null;
    const we = new Ge(), ye = new Le(), Ce = new L(), Ke = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ue() {
      return R === null ? k : 1;
    }
    let I = n;
    function At(S, U) {
      for (let O = 0; O < S.length; O++) {
        const B = S[O], z = t.getContext(B, U);
        if (z !== null)
          return z;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Cr}`), t.addEventListener("webglcontextlost", Be, !1), t.addEventListener("webglcontextrestored", w, !1), t.addEventListener("webglcontextcreationerror", oe, !1), I === null) {
        const U = ["webgl2", "webgl", "experimental-webgl"];
        if (M.isWebGL1Renderer === !0 && U.shift(), I = At(U, S), I === null)
          throw At(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && I instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), I.getShaderPrecisionFormat === void 0 && (I.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let me, Te, Ee, $e, Ie, Fe, qe, at, ft, y, _, N, Q, K, ee, de, re, ce, xe, He, J, We, Ae, Se;
    function _e() {
      me = new qc(I), Te = new Gc(I, me, e), me.init(Te), We = new Ph(I, me, Te), Ee = new wh(I, me, Te), $e = new Zc(I), Ie = new ph(), Fe = new Ch(I, me, Ee, Ie, Te, We, $e), qe = new Vc(M), at = new Xc(M), ft = new ro(I, Te), Ae = new Bc(I, me, ft, Te), y = new Yc(I, ft, $e, Ae), _ = new Qc(I, y, ft, $e), xe = new Jc(I, Te, Fe), de = new Hc(Ie), N = new fh(M, qe, at, me, Te, Ae, de), Q = new Fh(M, Ie), K = new _h(), ee = new Eh(me, Te), ce = new Oc(M, qe, at, Ee, _, f, l), re = new Rh(M, _, Te), Se = new Nh(I, $e, Te, Ee), He = new zc(I, me, $e, Te), J = new jc(I, me, $e, Te), $e.programs = N.programs, M.capabilities = Te, M.extensions = me, M.properties = Ie, M.renderLists = K, M.shadowMap = re, M.state = Ee, M.info = $e;
    }
    _e();
    const he = new Ih(M, I);
    this.xr = he, this.getContext = function() {
      return I;
    }, this.getContextAttributes = function() {
      return I.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = me.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = me.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (k = S, this.setSize(H, X, !1));
    }, this.getSize = function(S) {
      return S.set(H, X);
    }, this.setSize = function(S, U, O = !0) {
      if (he.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      H = S, X = U, t.width = Math.floor(S * k), t.height = Math.floor(U * k), O === !0 && (t.style.width = S + "px", t.style.height = U + "px"), this.setViewport(0, 0, S, U);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(H * k, X * k).floor();
    }, this.setDrawingBufferSize = function(S, U, O) {
      H = S, X = U, k = O, t.width = Math.floor(S * O), t.height = Math.floor(U * O), this.setViewport(0, 0, S, U);
    }, this.getCurrentViewport = function(S) {
      return S.copy(x);
    }, this.getViewport = function(S) {
      return S.copy(Y);
    }, this.setViewport = function(S, U, O, B) {
      S.isVector4 ? Y.set(S.x, S.y, S.z, S.w) : Y.set(S, U, O, B), Ee.viewport(x.copy(Y).multiplyScalar(k).floor());
    }, this.getScissor = function(S) {
      return S.copy(D);
    }, this.setScissor = function(S, U, O, B) {
      S.isVector4 ? D.set(S.x, S.y, S.z, S.w) : D.set(S, U, O, B), Ee.scissor(F.copy(D).multiplyScalar(k).floor());
    }, this.getScissorTest = function() {
      return G;
    }, this.setScissorTest = function(S) {
      Ee.setScissorTest(G = S);
    }, this.setOpaqueSort = function(S) {
      $ = S;
    }, this.setTransparentSort = function(S) {
      Z = S;
    }, this.getClearColor = function(S) {
      return S.copy(ce.getClearColor());
    }, this.setClearColor = function() {
      ce.setClearColor.apply(ce, arguments);
    }, this.getClearAlpha = function() {
      return ce.getClearAlpha();
    }, this.setClearAlpha = function() {
      ce.setClearAlpha.apply(ce, arguments);
    }, this.clear = function(S = !0, U = !0, O = !0) {
      let B = 0;
      if (S) {
        let z = !1;
        if (R !== null) {
          const ue = R.texture.format;
          z = ue === 1033 || ue === 1031 || ue === 1029;
        }
        if (z) {
          const ue = R.texture.type, fe = ue === 1009 || ue === 1014 || ue === 1012 || ue === 1020 || ue === 1017 || ue === 1018, ve = ce.getClearColor(), Me = ce.getClearAlpha(), De = ve.r, be = ve.g, Re = ve.b;
          fe ? (m[0] = De, m[1] = be, m[2] = Re, m[3] = Me, I.clearBufferuiv(I.COLOR, 0, m)) : (g[0] = De, g[1] = be, g[2] = Re, g[3] = Me, I.clearBufferiv(I.COLOR, 0, g));
        } else
          B |= I.COLOR_BUFFER_BIT;
      }
      U && (B |= I.DEPTH_BUFFER_BIT), O && (B |= I.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), I.clear(B);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Be, !1), t.removeEventListener("webglcontextrestored", w, !1), t.removeEventListener("webglcontextcreationerror", oe, !1), K.dispose(), ee.dispose(), Ie.dispose(), qe.dispose(), at.dispose(), _.dispose(), Ae.dispose(), Se.dispose(), N.dispose(), he.dispose(), he.removeEventListener("sessionstart", It), he.removeEventListener("sessionend", Ye), pe && (pe.dispose(), pe = null), vt.stop();
    };
    function Be(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), T = !0;
    }
    function w() {
      console.log("THREE.WebGLRenderer: Context Restored."), T = !1;
      const S = $e.autoReset, U = re.enabled, O = re.autoUpdate, B = re.needsUpdate, z = re.type;
      _e(), $e.autoReset = S, re.enabled = U, re.autoUpdate = O, re.needsUpdate = B, re.type = z;
    }
    function oe(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function te(S) {
      const U = S.target;
      U.removeEventListener("dispose", te), W(U);
    }
    function W(S) {
      ie(S), Ie.remove(S);
    }
    function ie(S) {
      const U = Ie.get(S).programs;
      U !== void 0 && (U.forEach(function(O) {
        N.releaseProgram(O);
      }), S.isShaderMaterial && N.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, U, O, B, z, ue) {
      U === null && (U = Ke);
      const fe = z.isMesh && z.matrixWorld.determinant() < 0, ve = ma(S, U, O, B, z);
      Ee.setMaterial(B, fe);
      let Me = O.index, De = 1;
      if (B.wireframe === !0) {
        if (Me = y.getWireframeAttribute(O), Me === void 0)
          return;
        De = 2;
      }
      const be = O.drawRange, Re = O.attributes.position;
      let Qe = be.start * De, bt = (be.start + be.count) * De;
      ue !== null && (Qe = Math.max(Qe, ue.start * De), bt = Math.min(bt, (ue.start + ue.count) * De)), Me !== null ? (Qe = Math.max(Qe, 0), bt = Math.min(bt, Me.count)) : Re != null && (Qe = Math.max(Qe, 0), bt = Math.min(bt, Re.count));
      const ot = bt - Qe;
      if (ot < 0 || ot === 1 / 0)
        return;
      Ae.setup(z, B, ve, O, Me);
      let Zt, Je = He;
      if (Me !== null && (Zt = ft.get(Me), Je = J, Je.setIndex(Zt)), z.isMesh)
        B.wireframe === !0 ? (Ee.setLineWidth(B.wireframeLinewidth * Ue()), Je.setMode(I.LINES)) : Je.setMode(I.TRIANGLES);
      else if (z.isLine) {
        let Oe = B.linewidth;
        Oe === void 0 && (Oe = 1), Ee.setLineWidth(Oe * Ue()), z.isLineSegments ? Je.setMode(I.LINES) : z.isLineLoop ? Je.setMode(I.LINE_LOOP) : Je.setMode(I.LINE_STRIP);
      } else
        z.isPoints ? Je.setMode(I.POINTS) : z.isSprite && Je.setMode(I.TRIANGLES);
      if (z.isInstancedMesh)
        Je.renderInstances(Qe, ot, z.count);
      else if (O.isInstancedBufferGeometry) {
        const Oe = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, Yi = Math.min(O.instanceCount, Oe);
        Je.renderInstances(Qe, ot, Yi);
      } else
        Je.render(Qe, ot);
    };
    function ge(S, U, O) {
      S.transparent === !0 && S.side === 2 && S.forceSinglePass === !1 ? (S.side = 1, S.needsUpdate = !0, oi(S, U, O), S.side = 0, S.needsUpdate = !0, oi(S, U, O), S.side = 2) : oi(S, U, O);
    }
    this.compile = function(S, U, O = null) {
      O === null && (O = S), p = ee.get(O), p.init(), A.push(p), O.traverseVisible(function(z) {
        z.isLight && z.layers.test(U.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), S !== O && S.traverseVisible(function(z) {
        z.isLight && z.layers.test(U.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), p.setupLights(M._useLegacyLights);
      const B = /* @__PURE__ */ new Set();
      return S.traverse(function(z) {
        const ue = z.material;
        if (ue)
          if (Array.isArray(ue))
            for (let fe = 0; fe < ue.length; fe++) {
              const ve = ue[fe];
              ge(ve, O, z), B.add(ve);
            }
          else
            ge(ue, O, z), B.add(ue);
      }), A.pop(), p = null, B;
    }, this.compileAsync = function(S, U, O = null) {
      const B = this.compile(S, U, O);
      return new Promise((z) => {
        function ue() {
          if (B.forEach(function(fe) {
            Ie.get(fe).currentProgram.isReady() && B.delete(fe);
          }), B.size === 0) {
            z(S);
            return;
          }
          setTimeout(ue, 10);
        }
        me.get("KHR_parallel_shader_compile") !== null ? ue() : setTimeout(ue, 10);
      });
    };
    let Ve = null;
    function tt(S) {
      Ve && Ve(S);
    }
    function It() {
      vt.stop();
    }
    function Ye() {
      vt.start();
    }
    const vt = new ia();
    vt.setAnimationLoop(tt), typeof self < "u" && vt.setContext(self), this.setAnimationLoop = function(S) {
      Ve = S, he.setAnimationLoop(S), S === null ? vt.stop() : vt.start();
    }, he.addEventListener("sessionstart", It), he.addEventListener("sessionend", Ye), this.render = function(S, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (T === !0)
        return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), he.enabled === !0 && he.isPresenting === !0 && (he.cameraAutoUpdate === !0 && he.updateCamera(U), U = he.getCamera()), S.isScene === !0 && S.onBeforeRender(M, S, U, R), p = ee.get(S, A.length), p.init(), A.push(p), we.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), ae.setFromProjectionMatrix(we), le = this.localClippingEnabled, se = de.init(this.clippingPlanes, le), v = K.get(S, h.length), v.init(), h.push(v), Wt(S, U, 0, M.sortObjects), v.finish(), M.sortObjects === !0 && v.sort($, Z), this.info.render.frame++, se === !0 && de.beginShadows();
      const O = p.state.shadowsArray;
      if (re.render(O, S, U), se === !0 && de.endShadows(), this.info.autoReset === !0 && this.info.reset(), ce.render(v, S), p.setupLights(M._useLegacyLights), U.isArrayCamera) {
        const B = U.cameras;
        for (let z = 0, ue = B.length; z < ue; z++) {
          const fe = B[z];
          Br(v, S, fe, fe.viewport);
        }
      } else
        Br(v, S, U);
      R !== null && (Fe.updateMultisampleRenderTarget(R), Fe.updateRenderTargetMipmap(R)), S.isScene === !0 && S.onAfterRender(M, S, U), Ae.resetDefaultState(), V = -1, E = null, A.pop(), A.length > 0 ? p = A[A.length - 1] : p = null, h.pop(), h.length > 0 ? v = h[h.length - 1] : v = null;
    };
    function Wt(S, U, O, B) {
      if (S.visible === !1)
        return;
      if (S.layers.test(U.layers)) {
        if (S.isGroup)
          O = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(U);
        else if (S.isLight)
          p.pushLight(S), S.castShadow && p.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || ae.intersectsSprite(S)) {
            B && Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(we);
            const fe = _.update(S), ve = S.material;
            ve.visible && v.push(S, fe, ve, O, Ce.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || ae.intersectsObject(S))) {
          const fe = _.update(S), ve = S.material;
          if (B && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), Ce.copy(S.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), Ce.copy(fe.boundingSphere.center)), Ce.applyMatrix4(S.matrixWorld).applyMatrix4(we)), Array.isArray(ve)) {
            const Me = fe.groups;
            for (let De = 0, be = Me.length; De < be; De++) {
              const Re = Me[De], Qe = ve[Re.materialIndex];
              Qe && Qe.visible && v.push(S, fe, Qe, O, Ce.z, Re);
            }
          } else
            ve.visible && v.push(S, fe, ve, O, Ce.z, null);
        }
      }
      const ue = S.children;
      for (let fe = 0, ve = ue.length; fe < ve; fe++)
        Wt(ue[fe], U, O, B);
    }
    function Br(S, U, O, B) {
      const z = S.opaque, ue = S.transmissive, fe = S.transparent;
      p.setupLightsView(O), se === !0 && de.setGlobalState(M.clippingPlanes, O), ue.length > 0 && pa(z, ue, U, O), B && Ee.viewport(x.copy(B)), z.length > 0 && ai(z, U, O), ue.length > 0 && ai(ue, U, O), fe.length > 0 && ai(fe, U, O), Ee.buffers.depth.setTest(!0), Ee.buffers.depth.setMask(!0), Ee.buffers.color.setMask(!0), Ee.setPolygonOffset(!1);
    }
    function pa(S, U, O, B) {
      if ((O.isScene === !0 ? O.overrideMaterial : null) !== null)
        return;
      const ue = Te.isWebGL2;
      pe === null && (pe = new kt(1, 1, {
        generateMipmaps: !0,
        type: me.has("EXT_color_buffer_half_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: ue ? 4 : 0
      })), M.getDrawingBufferSize(ye), ue ? pe.setSize(ye.x, ye.y) : pe.setSize(Hi(ye.x), Hi(ye.y));
      const fe = M.getRenderTarget();
      M.setRenderTarget(pe), M.getClearColor(j), P = M.getClearAlpha(), P < 1 && M.setClearColor(16777215, 0.5), M.clear();
      const ve = M.toneMapping;
      M.toneMapping = 0, ai(S, O, B), Fe.updateMultisampleRenderTarget(pe), Fe.updateRenderTargetMipmap(pe);
      let Me = !1;
      for (let De = 0, be = U.length; De < be; De++) {
        const Re = U[De], Qe = Re.object, bt = Re.geometry, ot = Re.material, Zt = Re.group;
        if (ot.side === 2 && Qe.layers.test(B.layers)) {
          const Je = ot.side;
          ot.side = 1, ot.needsUpdate = !0, zr(Qe, O, B, bt, ot, Zt), ot.side = Je, ot.needsUpdate = !0, Me = !0;
        }
      }
      Me === !0 && (Fe.updateMultisampleRenderTarget(pe), Fe.updateRenderTargetMipmap(pe)), M.setRenderTarget(fe), M.setClearColor(j, P), M.toneMapping = ve;
    }
    function ai(S, U, O) {
      const B = U.isScene === !0 ? U.overrideMaterial : null;
      for (let z = 0, ue = S.length; z < ue; z++) {
        const fe = S[z], ve = fe.object, Me = fe.geometry, De = B === null ? fe.material : B, be = fe.group;
        ve.layers.test(O.layers) && zr(ve, U, O, Me, De, be);
      }
    }
    function zr(S, U, O, B, z, ue) {
      S.onBeforeRender(M, U, O, B, z, ue), S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), z.onBeforeRender(M, U, O, B, S, ue), z.transparent === !0 && z.side === 2 && z.forceSinglePass === !1 ? (z.side = 1, z.needsUpdate = !0, M.renderBufferDirect(O, U, B, z, S, ue), z.side = 0, z.needsUpdate = !0, M.renderBufferDirect(O, U, B, z, S, ue), z.side = 2) : M.renderBufferDirect(O, U, B, z, S, ue), S.onAfterRender(M, U, O, B, z, ue);
    }
    function oi(S, U, O) {
      U.isScene !== !0 && (U = Ke);
      const B = Ie.get(S), z = p.state.lights, ue = p.state.shadowsArray, fe = z.state.version, ve = N.getParameters(S, z.state, ue, U, O), Me = N.getProgramCacheKey(ve);
      let De = B.programs;
      B.environment = S.isMeshStandardMaterial ? U.environment : null, B.fog = U.fog, B.envMap = (S.isMeshStandardMaterial ? at : qe).get(S.envMap || B.environment), De === void 0 && (S.addEventListener("dispose", te), De = /* @__PURE__ */ new Map(), B.programs = De);
      let be = De.get(Me);
      if (be !== void 0) {
        if (B.currentProgram === be && B.lightsStateVersion === fe)
          return Hr(S, ve), be;
      } else
        ve.uniforms = N.getUniforms(S), S.onBuild(O, ve, M), S.onBeforeCompile(ve, M), be = N.acquireProgram(ve, Me), De.set(Me, be), B.uniforms = ve.uniforms;
      const Re = B.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Re.clippingPlanes = de.uniform), Hr(S, ve), B.needsLights = ga(S), B.lightsStateVersion = fe, B.needsLights && (Re.ambientLightColor.value = z.state.ambient, Re.lightProbe.value = z.state.probe, Re.directionalLights.value = z.state.directional, Re.directionalLightShadows.value = z.state.directionalShadow, Re.spotLights.value = z.state.spot, Re.spotLightShadows.value = z.state.spotShadow, Re.rectAreaLights.value = z.state.rectArea, Re.ltc_1.value = z.state.rectAreaLTC1, Re.ltc_2.value = z.state.rectAreaLTC2, Re.pointLights.value = z.state.point, Re.pointLightShadows.value = z.state.pointShadow, Re.hemisphereLights.value = z.state.hemi, Re.directionalShadowMap.value = z.state.directionalShadowMap, Re.directionalShadowMatrix.value = z.state.directionalShadowMatrix, Re.spotShadowMap.value = z.state.spotShadowMap, Re.spotLightMatrix.value = z.state.spotLightMatrix, Re.spotLightMap.value = z.state.spotLightMap, Re.pointShadowMap.value = z.state.pointShadowMap, Re.pointShadowMatrix.value = z.state.pointShadowMatrix), B.currentProgram = be, B.uniformsList = null, be;
    }
    function Gr(S) {
      if (S.uniformsList === null) {
        const U = S.currentProgram.getUniforms();
        S.uniformsList = Oi.seqWithValue(U.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Hr(S, U) {
      const O = Ie.get(S);
      O.outputColorSpace = U.outputColorSpace, O.instancing = U.instancing, O.instancingColor = U.instancingColor, O.skinning = U.skinning, O.morphTargets = U.morphTargets, O.morphNormals = U.morphNormals, O.morphColors = U.morphColors, O.morphTargetsCount = U.morphTargetsCount, O.numClippingPlanes = U.numClippingPlanes, O.numIntersection = U.numClipIntersection, O.vertexAlphas = U.vertexAlphas, O.vertexTangents = U.vertexTangents, O.toneMapping = U.toneMapping;
    }
    function ma(S, U, O, B, z) {
      U.isScene !== !0 && (U = Ke), Fe.resetTextureUnits();
      const ue = U.fog, fe = B.isMeshStandardMaterial ? U.environment : null, ve = R === null ? M.outputColorSpace : R.isXRRenderTarget === !0 ? R.texture.colorSpace : nn, Me = (B.isMeshStandardMaterial ? at : qe).get(B.envMap || fe), De = B.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4, be = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Re = !!O.morphAttributes.position, Qe = !!O.morphAttributes.normal, bt = !!O.morphAttributes.color;
      let ot = 0;
      B.toneMapped && (R === null || R.isXRRenderTarget === !0) && (ot = M.toneMapping);
      const Zt = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Je = Zt !== void 0 ? Zt.length : 0, Oe = Ie.get(B), Yi = p.state.lights;
      if (se === !0 && (le === !0 || S !== E)) {
        const Rt = S === E && B.id === V;
        de.setState(B, S, Rt);
      }
      let nt = !1;
      B.version === Oe.__version ? (Oe.needsLights && Oe.lightsStateVersion !== Yi.state.version || Oe.outputColorSpace !== ve || z.isInstancedMesh && Oe.instancing === !1 || !z.isInstancedMesh && Oe.instancing === !0 || z.isSkinnedMesh && Oe.skinning === !1 || !z.isSkinnedMesh && Oe.skinning === !0 || z.isInstancedMesh && Oe.instancingColor === !0 && z.instanceColor === null || z.isInstancedMesh && Oe.instancingColor === !1 && z.instanceColor !== null || Oe.envMap !== Me || B.fog === !0 && Oe.fog !== ue || Oe.numClippingPlanes !== void 0 && (Oe.numClippingPlanes !== de.numPlanes || Oe.numIntersection !== de.numIntersection) || Oe.vertexAlphas !== De || Oe.vertexTangents !== be || Oe.morphTargets !== Re || Oe.morphNormals !== Qe || Oe.morphColors !== bt || Oe.toneMapping !== ot || Te.isWebGL2 === !0 && Oe.morphTargetsCount !== Je) && (nt = !0) : (nt = !0, Oe.__version = B.version);
      let hn = Oe.currentProgram;
      nt === !0 && (hn = oi(B, U, z));
      let Vr = !1, Zn = !1, ji = !1;
      const xt = hn.getUniforms(), dn = Oe.uniforms;
      if (Ee.useProgram(hn.program) && (Vr = !0, Zn = !0, ji = !0), B.id !== V && (V = B.id, Zn = !0), Vr || E !== S) {
        xt.setValue(I, "projectionMatrix", S.projectionMatrix), xt.setValue(I, "viewMatrix", S.matrixWorldInverse);
        const Rt = xt.map.cameraPosition;
        Rt !== void 0 && Rt.setValue(I, Ce.setFromMatrixPosition(S.matrixWorld)), Te.logarithmicDepthBuffer && xt.setValue(
          I,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && xt.setValue(I, "isOrthographic", S.isOrthographicCamera === !0), E !== S && (E = S, Zn = !0, ji = !0);
      }
      if (z.isSkinnedMesh) {
        xt.setOptional(I, z, "bindMatrix"), xt.setOptional(I, z, "bindMatrixInverse");
        const Rt = z.skeleton;
        Rt && (Te.floatVertexTextures ? (Rt.boneTexture === null && Rt.computeBoneTexture(), xt.setValue(I, "boneTexture", Rt.boneTexture, Fe), xt.setValue(I, "boneTextureSize", Rt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const Zi = O.morphAttributes;
      if ((Zi.position !== void 0 || Zi.normal !== void 0 || Zi.color !== void 0 && Te.isWebGL2 === !0) && xe.update(z, O, hn), (Zn || Oe.receiveShadow !== z.receiveShadow) && (Oe.receiveShadow = z.receiveShadow, xt.setValue(I, "receiveShadow", z.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (dn.envMap.value = Me, dn.flipEnvMap.value = Me.isCubeTexture && Me.isRenderTargetTexture === !1 ? -1 : 1), Zn && (xt.setValue(I, "toneMappingExposure", M.toneMappingExposure), Oe.needsLights && _a(dn, ji), ue && B.fog === !0 && Q.refreshFogUniforms(dn, ue), Q.refreshMaterialUniforms(dn, B, k, X, pe), Oi.upload(I, Gr(Oe), dn, Fe)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (Oi.upload(I, Gr(Oe), dn, Fe), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && xt.setValue(I, "center", z.center), xt.setValue(I, "modelViewMatrix", z.modelViewMatrix), xt.setValue(I, "normalMatrix", z.normalMatrix), xt.setValue(I, "modelMatrix", z.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const Rt = B.uniformsGroups;
        for (let Ki = 0, va = Rt.length; Ki < va; Ki++)
          if (Te.isWebGL2) {
            const kr = Rt[Ki];
            Se.update(kr, hn), Se.bind(kr, hn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return hn;
    }
    function _a(S, U) {
      S.ambientLightColor.needsUpdate = U, S.lightProbe.needsUpdate = U, S.directionalLights.needsUpdate = U, S.directionalLightShadows.needsUpdate = U, S.pointLights.needsUpdate = U, S.pointLightShadows.needsUpdate = U, S.spotLights.needsUpdate = U, S.spotLightShadows.needsUpdate = U, S.rectAreaLights.needsUpdate = U, S.hemisphereLights.needsUpdate = U;
    }
    function ga(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return b;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return R;
    }, this.setRenderTargetTextures = function(S, U, O) {
      Ie.get(S.texture).__webglTexture = U, Ie.get(S.depthTexture).__webglTexture = O;
      const B = Ie.get(S);
      B.__hasExternalTextures = !0, B.__hasExternalTextures && (B.__autoAllocateDepthBuffer = O === void 0, B.__autoAllocateDepthBuffer || me.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(S, U) {
      const O = Ie.get(S);
      O.__webglFramebuffer = U, O.__useDefaultFramebuffer = U === void 0;
    }, this.setRenderTarget = function(S, U = 0, O = 0) {
      R = S, b = U, C = O;
      let B = !0, z = null, ue = !1, fe = !1;
      if (S) {
        const Me = Ie.get(S);
        Me.__useDefaultFramebuffer !== void 0 ? (Ee.bindFramebuffer(I.FRAMEBUFFER, null), B = !1) : Me.__webglFramebuffer === void 0 ? Fe.setupRenderTarget(S) : Me.__hasExternalTextures && Fe.rebindTextures(S, Ie.get(S.texture).__webglTexture, Ie.get(S.depthTexture).__webglTexture);
        const De = S.texture;
        (De.isData3DTexture || De.isDataArrayTexture || De.isCompressedArrayTexture) && (fe = !0);
        const be = Ie.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(be[U]) ? z = be[U][O] : z = be[U], ue = !0) : Te.isWebGL2 && S.samples > 0 && Fe.useMultisampledRTT(S) === !1 ? z = Ie.get(S).__webglMultisampledFramebuffer : Array.isArray(be) ? z = be[O] : z = be, x.copy(S.viewport), F.copy(S.scissor), q = S.scissorTest;
      } else
        x.copy(Y).multiplyScalar(k).floor(), F.copy(D).multiplyScalar(k).floor(), q = G;
      if (Ee.bindFramebuffer(I.FRAMEBUFFER, z) && Te.drawBuffers && B && Ee.drawBuffers(S, z), Ee.viewport(x), Ee.scissor(F), Ee.setScissorTest(q), ue) {
        const Me = Ie.get(S.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + U, Me.__webglTexture, O);
      } else if (fe) {
        const Me = Ie.get(S.texture), De = U || 0;
        I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, Me.__webglTexture, O || 0, De);
      }
      V = -1;
    }, this.readRenderTargetPixels = function(S, U, O, B, z, ue, fe) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ve = Ie.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && fe !== void 0 && (ve = ve[fe]), ve) {
        Ee.bindFramebuffer(I.FRAMEBUFFER, ve);
        try {
          const Me = S.texture, De = Me.format, be = Me.type;
          if (De !== 1023 && We.convert(De) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Re = be === 1016 && (me.has("EXT_color_buffer_half_float") || Te.isWebGL2 && me.has("EXT_color_buffer_float"));
          if (be !== 1009 && We.convert(be) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(be === 1015 && (Te.isWebGL2 || me.has("OES_texture_float") || me.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Re) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= S.width - B && O >= 0 && O <= S.height - z && I.readPixels(U, O, B, z, We.convert(De), We.convert(be), ue);
        } finally {
          const Me = R !== null ? Ie.get(R).__webglFramebuffer : null;
          Ee.bindFramebuffer(I.FRAMEBUFFER, Me);
        }
      }
    }, this.copyFramebufferToTexture = function(S, U, O = 0) {
      const B = Math.pow(2, -O), z = Math.floor(U.image.width * B), ue = Math.floor(U.image.height * B);
      Fe.setTexture2D(U, 0), I.copyTexSubImage2D(I.TEXTURE_2D, O, 0, 0, S.x, S.y, z, ue), Ee.unbindTexture();
    }, this.copyTextureToTexture = function(S, U, O, B = 0) {
      const z = U.image.width, ue = U.image.height, fe = We.convert(O.format), ve = We.convert(O.type);
      Fe.setTexture2D(O, 0), I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, O.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, O.unpackAlignment), U.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, B, S.x, S.y, z, ue, fe, ve, U.image.data) : U.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, B, S.x, S.y, U.mipmaps[0].width, U.mipmaps[0].height, fe, U.mipmaps[0].data) : I.texSubImage2D(I.TEXTURE_2D, B, S.x, S.y, fe, ve, U.image), B === 0 && O.generateMipmaps && I.generateMipmap(I.TEXTURE_2D), Ee.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, U, O, B, z = 0) {
      if (M.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const ue = S.max.x - S.min.x + 1, fe = S.max.y - S.min.y + 1, ve = S.max.z - S.min.z + 1, Me = We.convert(B.format), De = We.convert(B.type);
      let be;
      if (B.isData3DTexture)
        Fe.setTexture3D(B, 0), be = I.TEXTURE_3D;
      else if (B.isDataArrayTexture)
        Fe.setTexture2DArray(B, 0), be = I.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, B.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, B.unpackAlignment);
      const Re = I.getParameter(I.UNPACK_ROW_LENGTH), Qe = I.getParameter(I.UNPACK_IMAGE_HEIGHT), bt = I.getParameter(I.UNPACK_SKIP_PIXELS), ot = I.getParameter(I.UNPACK_SKIP_ROWS), Zt = I.getParameter(I.UNPACK_SKIP_IMAGES), Je = O.isCompressedTexture ? O.mipmaps[0] : O.image;
      I.pixelStorei(I.UNPACK_ROW_LENGTH, Je.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Je.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, S.min.x), I.pixelStorei(I.UNPACK_SKIP_ROWS, S.min.y), I.pixelStorei(I.UNPACK_SKIP_IMAGES, S.min.z), O.isDataTexture || O.isData3DTexture ? I.texSubImage3D(be, z, U.x, U.y, U.z, ue, fe, ve, Me, De, Je.data) : O.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), I.compressedTexSubImage3D(be, z, U.x, U.y, U.z, ue, fe, ve, Me, Je.data)) : I.texSubImage3D(be, z, U.x, U.y, U.z, ue, fe, ve, Me, De, Je), I.pixelStorei(I.UNPACK_ROW_LENGTH, Re), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Qe), I.pixelStorei(I.UNPACK_SKIP_PIXELS, bt), I.pixelStorei(I.UNPACK_SKIP_ROWS, ot), I.pixelStorei(I.UNPACK_SKIP_IMAGES, Zt), z === 0 && B.generateMipmaps && I.generateMipmap(be), Ee.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? Fe.setTextureCube(S, 0) : S.isData3DTexture ? Fe.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? Fe.setTexture2DArray(S, 0) : Fe.setTexture2D(S, 0), Ee.unbindTexture();
    }, this.resetState = function() {
      b = 0, C = 0, R = null, Ee.reset(), Ae.reset();
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
    t.drawingBufferColorSpace = e === Pr ? "display-p3" : "srgb", t.unpackColorSpace = ke.workingColorSpace === ki ? "display-p3" : "srgb";
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
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === 3001 ? dt : nn;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class Oh extends la {
}
Oh.prototype.isWebGL1Renderer = !0;
class Bh extends Et {
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
class zh {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = tn();
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = tn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = tn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const St = /* @__PURE__ */ new L();
class cn {
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
      return new Lt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new cn(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
class ca extends si {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ze(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Ps = /* @__PURE__ */ new L(), Ls = /* @__PURE__ */ new L(), Ds = /* @__PURE__ */ new Ge(), Sr = /* @__PURE__ */ new Dr(), Pi = /* @__PURE__ */ new Wn();
class Gh extends Et {
  constructor(e = new Tt(), t = new ca()) {
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
        Ps.fromBufferAttribute(t, r - 1), Ls.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Ps.distanceTo(Ls);
      e.setAttribute("lineDistance", new Dt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Pi.copy(n.boundingSphere), Pi.applyMatrix4(r), Pi.radius += s, e.ray.intersectsSphere(Pi) === !1)
      return;
    Ds.copy(r).invert(), Sr.copy(e.ray).applyMatrix4(Ds);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new L(), u = new L(), d = new L(), f = new L(), m = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position;
    if (g !== null) {
      const h = Math.max(0, o.start), A = Math.min(g.count, o.start + o.count);
      for (let M = h, T = A - 1; M < T; M += m) {
        const b = g.getX(M), C = g.getX(M + 1);
        if (c.fromBufferAttribute(p, b), u.fromBufferAttribute(p, C), Sr.distanceSqToSegment(c, u, f, d) > l)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const V = e.ray.origin.distanceTo(f);
        V < e.near || V > e.far || t.push({
          distance: V,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: M,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const h = Math.max(0, o.start), A = Math.min(p.count, o.start + o.count);
      for (let M = h, T = A - 1; M < T; M += m) {
        if (c.fromBufferAttribute(p, M), u.fromBufferAttribute(p, M + 1), Sr.distanceSqToSegment(c, u, f, d) > l)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const C = e.ray.origin.distanceTo(f);
        C < e.near || C > e.far || t.push({
          distance: C,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: M,
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
class Hh extends Tt {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: e
    }, e !== null) {
      const t = [], n = /* @__PURE__ */ new Set(), r = new L(), s = new L();
      if (e.index !== null) {
        const o = e.attributes.position, a = e.index;
        let l = e.groups;
        l.length === 0 && (l = [{ start: 0, count: a.count, materialIndex: 0 }]);
        for (let c = 0, u = l.length; c < u; ++c) {
          const d = l[c], f = d.start, m = d.count;
          for (let g = f, v = f + m; g < v; g += 3)
            for (let p = 0; p < 3; p++) {
              const h = a.getX(g + p), A = a.getX(g + (p + 1) % 3);
              r.fromBufferAttribute(o, h), s.fromBufferAttribute(o, A), Us(r, s, n) === !0 && (t.push(r.x, r.y, r.z), t.push(s.x, s.y, s.z));
            }
        }
      } else {
        const o = e.attributes.position;
        for (let a = 0, l = o.count / 3; a < l; a++)
          for (let c = 0; c < 3; c++) {
            const u = 3 * a + c, d = 3 * a + (c + 1) % 3;
            r.fromBufferAttribute(o, u), s.fromBufferAttribute(o, d), Us(r, s, n) === !0 && (t.push(r.x, r.y, r.z), t.push(s.x, s.y, s.z));
          }
      }
      this.setAttribute("position", new Dt(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function Us(i, e, t) {
  const n = `${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;
  return t.has(n) === !0 || t.has(r) === !0 ? !1 : (t.add(n), t.add(r), !0);
}
class Vh extends gt {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class kh extends Et {
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
class Wh extends kh {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Xh extends Tt {
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
class qh {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Is(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = Is();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Is() {
  return (typeof performance > "u" ? Date : performance).now();
}
class br extends zh {
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
class Yh {
  constructor(e, t, n = 0, r = 1 / 0) {
    this.ray = new Dr(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new Xi(), this.params = {
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
    return Rr(e, this, n, t), n.sort(Fs), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let r = 0, s = e.length; r < s; r++)
      Rr(e[r], this, n, t);
    return n.sort(Fs), n;
  }
}
function Fs(i, e) {
  return i.distance - e.distance;
}
function Rr(i, e, t, n) {
  if (i.layers.test(e.layers) && i.raycast(e, t), n === !0) {
    const r = i.children;
    for (let s = 0, o = r.length; s < o; s++)
      Rr(r[s], e, t, !0);
  }
}
const Ns = /* @__PURE__ */ new L(), Li = /* @__PURE__ */ new L();
class jh {
  constructor(e = new L(), t = new L()) {
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
    Ns.subVectors(e, this.start), Li.subVectors(this.end, this.start);
    const n = Li.dot(Li);
    let s = Li.dot(Ns) / n;
    return t && (s = _t(s, 0, 1)), s;
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
  revision: Cr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Cr);
const Os = 1024e3, Zh = 0.1 / 180 * Math.PI, Bs = Math.atan(3 / 4), Di = 63710088e-1, Kh = 40075017, Ze = {
  WORLD_SIZE: Os,
  PROJECTION_WORLD_SIZE: Os / (Di * Math.PI * 2),
  MERCATOR_A: Di,
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  EARTH_RADIUS: Di,
  EARTH_CIRCUMFERENCE: 2 * Math.PI * Di,
  //40075000, // In meters
  EARTH_CIRCUMFERENCE_EQUATOR: Kh,
  FOV_ORTHO: Zh,
  // closest to 0
  FOV: Bs,
  // Math.atan(3/4) radians. If this value is changed, FOV_DEGREES must be calculated
  FOV_DEGREES: Bs * 180 / Math.PI,
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
    const a = 1 / (e - i), l = 1 / (t - n), c = 1 / (s - r), u = (e + i) * a, d = (t + n) * l, f = r * c;
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
      -u,
      -d,
      -f,
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
      -Ze.MERCATOR_A * Ze.DEG2RAD * i[0] * Ze.PROJECTION_WORLD_SIZE,
      -Ze.MERCATOR_A * Math.log(
        Math.tan(
          Math.PI * 0.25 + 0.5 * Ze.DEG2RAD * i[1]
        )
      ) * Ze.PROJECTION_WORLD_SIZE
    ];
    if (!i[2])
      e.push(0);
    else {
      var t = this.projectedUnitsPerMeter(i[1]);
      e.push(i[2] * t);
    }
    var n = new L(
      e[0],
      e[1],
      e[2]
    );
    return n;
  },
  projectedUnitsPerMeter: function(i) {
    return Math.abs(
      Ze.WORLD_SIZE / Math.cos(Ze.DEG2RAD * i) / Ze.EARTH_CIRCUMFERENCE
    );
  },
  _circumferenceAtLatitude: function(i) {
    return Ze.EARTH_CIRCUMFERENCE * Math.cos(i * Math.PI / 180);
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
      -i.x / (Ze.MERCATOR_A * Ze.DEG2RAD * Ze.PROJECTION_WORLD_SIZE),
      2 * (Math.atan(
        Math.exp(
          i.y / (Ze.PROJECTION_WORLD_SIZE * -Ze.MERCATOR_A)
        )
      ) - Math.PI / 4) / Ze.DEG2RAD
    ], t = this.projectedUnitsPerMeter(e[1]), n = i.z || 0;
    return e.push(n / t), e;
  },
  toScreenPosition: function(i, e) {
    var t = new L(), n = 0.5 * renderer.context.canvas.width, r = 0.5 * renderer.context.canvas.height;
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
      new Lt(new Float32Array(t), 3)
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
      var n = Ut.projectToWorld(t), r = new L(n.x, n.y, n.z);
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
    ), s = new ca({
      color: n,
      linewidth: t
    });
    return new Gh(r, s);
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
function wr(i, e, t) {
  this.map = i, this.camera = e, this.active = !0, this.camera.matrixAutoUpdate = !1, this.world = t || new Bn(), this.world.position.x = this.world.position.y = Ze.WORLD_SIZE / 2, this.world.matrixAutoUpdate = !1, this.state = {
    translateCenter: new Ge().makeTranslation(
      Ze.WORLD_SIZE / 2,
      -Ze.WORLD_SIZE / 2,
      0
    ),
    worldSizeRatio: Ze.TILE_SIZE / Ze.WORLD_SIZE,
    worldSize: Ze.TILE_SIZE * this.map.transform.scale
  };
  let n = this;
  this.map.on("move", function() {
    n.updateCamera();
  }).on("resize", function() {
    n.setupCamera();
  }), this.setupCamera();
}
wr.prototype = {
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
    const t = e.centerOffset || new L();
    let n = 0, r = 0;
    this.halfFov = e._fov / 2;
    const s = Math.PI / 2 + e._pitch, o = Math.cos(Math.PI / 2 - e._pitch);
    this.cameraToCenterDistance = 0.5 / Math.tan(this.halfFov) * e.height;
    let a = 1;
    const l = this.worldSize();
    var c = this.map.version.split("."), u = parseInt(c[0]);
    if (u >= 2) {
      a = this.mercatorZfromAltitude(1, e.center.lat) * l;
      const C = e._fov * (0.5 + e.centerOffset.y / e.height), R = e.elevation ? e.elevation.getMinElevationBelowMSL() * a : 0, V = (e._camera.position[2] * l - R) / Math.cos(e._pitch), E = Math.sin(C) * V / Math.sin(Ut.clamp(Math.PI - s - C, 0.01, Math.PI - 0.01));
      r = o * E + V;
      const x = V * (1 / e._horizonShift);
      n = Math.min(r * 1.01, x);
    } else {
      const C = Math.sin(this.halfFov) * this.cameraToCenterDistance / Math.sin(Math.PI - s - this.halfFov);
      r = o * C + this.cameraToCenterDistance, n = r * 1.01;
    }
    this.cameraTranslateZ = new Ge().makeTranslation(0, 0, this.cameraToCenterDistance);
    const d = e.height / 50, f = Math.max(d * o, d), m = e.height, g = e.width;
    this.camera instanceof Ir ? this.camera.projectionMatrix = Ut.makeOrthographicMatrix(g / -2, g / 2, m / 2, m / -2, f, n) : this.camera.projectionMatrix = Ut.makePerspectiveMatrix(e._fov, g / m, f, n), this.camera.projectionMatrix.elements[8] = -t.x * 2 / e.width, this.camera.projectionMatrix.elements[9] = t.y * 2 / e.height;
    let v = this.calcCameraMatrix(e._pitch, e.angle);
    e.elevation && (v.elements[14] = e._camera.position[2] * l), this.camera.matrixWorld.copy(v);
    let p = e.scale * this.state.worldSizeRatio, h = new Ge(), A = new Ge(), M = new Ge();
    h.makeScale(p, p, p);
    let T = e.x || e.point.x, b = e.y || e.point.y;
    A.makeTranslation(-T, b, 0), M.makeRotationZ(Math.PI), this.world.matrix = new Ge().premultiply(M).premultiply(this.state.translateCenter).premultiply(h).premultiply(A), this.map.fire("CameraSynced", {
      detail: {
        nearZ: f,
        farZ: n,
        pitch: e._pitch,
        angle: e.angle,
        furthestDistance: r,
        cameraToCenterDistance: this.cameraToCenterDistance,
        t: this.map.transform,
        tbProjMatrix: this.camera.projectionMatrix.elements,
        tbWorldMatrix: this.world.matrix.elements,
        cameraSyn: wr
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
    return Ze.EARTH_CIRCUMFERENCE * Math.cos(i * Math.PI / 180);
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
    const n = new Ge(), r = new Ge(), s = t._camera._orientation, o = t._camera.position, a = new L(o[0], o[1], o[2]), l = new kn();
    l.set(s[0], s[1], s[2], s[3]);
    const c = l.conjugate();
    return a.multiplyScalar(-i), r.makeTranslation(a.x, a.y, a.z), n.makeRotationFromQuaternion(c).premultiply(r), n.elements[1] *= -1, n.elements[5] *= -1, n.elements[9] *= -1, n.elements[13] *= -1, n.elements[8] *= e, n.elements[9] *= e, n.elements[10] *= e, n.elements[11] *= e, n;
  },
  translate(i, e, t) {
    let n = t[0] || t.x, r = t[1] || t.y, s = t[2] || t.z, o, a, l, c, u, d, f, m, g, v, p, h;
    return e === i ? (i[12] = e[0] * n + e[4] * r + e[8] * s + e[12], i[13] = e[1] * n + e[5] * r + e[9] * s + e[13], i[14] = e[2] * n + e[6] * r + e[10] * s + e[14], i[15] = e[3] * n + e[7] * r + e[11] * s + e[15]) : (o = e[0], a = e[1], l = e[2], c = e[3], u = e[4], d = e[5], f = e[6], m = e[7], g = e[8], v = e[9], p = e[10], h = e[11], i[0] = o, i[1] = a, i[2] = l, i[3] = c, i[4] = u, i[5] = d, i[6] = f, i[7] = m, i[8] = g, i[9] = v, i[10] = p, i[11] = h, i[12] = o * n + u * r + g * s + e[12], i[13] = a * n + d * r + v * s + e[13], i[14] = l * n + f * r + p * s + e[14], i[15] = c * n + m * r + h * s + e[15]), i;
  }
};
const zs = new un(), Ui = new L();
class ua extends Xh {
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
    const n = new br(t, 6, 1);
    return this.setAttribute("instanceStart", new cn(n, 3, 0)), this.setAttribute("instanceEnd", new cn(n, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new br(t, 6, 1);
    return this.setAttribute("instanceColorStart", new cn(n, 3, 0)), this.setAttribute("instanceColorEnd", new cn(n, 3, 3)), this;
  }
  fromWireframeGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromEdgesGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromMesh(e) {
    return this.fromWireframeGeometry(new Hh(e.geometry)), this;
  }
  fromLineSegments(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new un());
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), zs.setFromBufferAttribute(t), this.boundingBox.union(zs));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Wn()), this.boundingBox === null && this.computeBoundingBox();
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    if (e !== void 0 && t !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        Ui.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(Ui)), Ui.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(Ui));
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
  resolution: { value: new Le(1, 1) },
  dashOffset: { value: 0 },
  dashScale: { value: 1 },
  dashSize: { value: 1 },
  gapSize: { value: 1 }
  // todo FIX - maybe change to totalSize
};
yt.line = {
  uniforms: Mn.merge([
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
class Nr extends gt {
  constructor(e) {
    super({
      type: "LineMaterial",
      uniforms: Mn.clone(yt.line.uniforms),
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
const Gs = new L(), Hs = new L(), ct = new et(), ut = new et(), Xt = new et(), Mr = new L(), Er = new Ge(), ht = new jh(), Vs = new L(), Ii = new un(), Fi = new Wn(), qt = new et();
let jt, Sn;
function ks(i, e, t) {
  return qt.set(0, 0, -e, 1).applyMatrix4(i.projectionMatrix), qt.multiplyScalar(1 / qt.w), qt.x = Sn / t.width, qt.y = Sn / t.height, qt.applyMatrix4(i.projectionMatrixInverse), qt.multiplyScalar(1 / qt.w), Math.abs(Math.max(qt.x, qt.y));
}
function $h(i, e) {
  const t = i.matrixWorld, n = i.geometry, r = n.attributes.instanceStart, s = n.attributes.instanceEnd, o = Math.min(n.instanceCount, r.count);
  for (let a = 0, l = o; a < l; a++) {
    ht.start.fromBufferAttribute(r, a), ht.end.fromBufferAttribute(s, a), ht.applyMatrix4(t);
    const c = new L(), u = new L();
    jt.distanceSqToSegment(ht.start, ht.end, u, c), u.distanceTo(c) < Sn * 0.5 && e.push({
      point: u,
      pointOnLine: c,
      distance: jt.origin.distanceTo(u),
      object: i,
      face: null,
      faceIndex: a,
      uv: null,
      uv1: null
    });
  }
}
function Jh(i, e, t) {
  const n = e.projectionMatrix, s = i.material.resolution, o = i.matrixWorld, a = i.geometry, l = a.attributes.instanceStart, c = a.attributes.instanceEnd, u = Math.min(a.instanceCount, l.count), d = -e.near;
  jt.at(1, Xt), Xt.w = 1, Xt.applyMatrix4(e.matrixWorldInverse), Xt.applyMatrix4(n), Xt.multiplyScalar(1 / Xt.w), Xt.x *= s.x / 2, Xt.y *= s.y / 2, Xt.z = 0, Mr.copy(Xt), Er.multiplyMatrices(e.matrixWorldInverse, o);
  for (let f = 0, m = u; f < m; f++) {
    if (ct.fromBufferAttribute(l, f), ut.fromBufferAttribute(c, f), ct.w = 1, ut.w = 1, ct.applyMatrix4(Er), ut.applyMatrix4(Er), ct.z > d && ut.z > d)
      continue;
    if (ct.z > d) {
      const M = ct.z - ut.z, T = (ct.z - d) / M;
      ct.lerp(ut, T);
    } else if (ut.z > d) {
      const M = ut.z - ct.z, T = (ut.z - d) / M;
      ut.lerp(ct, T);
    }
    ct.applyMatrix4(n), ut.applyMatrix4(n), ct.multiplyScalar(1 / ct.w), ut.multiplyScalar(1 / ut.w), ct.x *= s.x / 2, ct.y *= s.y / 2, ut.x *= s.x / 2, ut.y *= s.y / 2, ht.start.copy(ct), ht.start.z = 0, ht.end.copy(ut), ht.end.z = 0;
    const v = ht.closestPointToPointParameter(Mr, !0);
    ht.at(v, Vs);
    const p = Ua.lerp(ct.z, ut.z, v), h = p >= -1 && p <= 1, A = Mr.distanceTo(Vs) < Sn * 0.5;
    if (h && A) {
      ht.start.fromBufferAttribute(l, f), ht.end.fromBufferAttribute(c, f), ht.start.applyMatrix4(o), ht.end.applyMatrix4(o);
      const M = new L(), T = new L();
      jt.distanceSqToSegment(ht.start, ht.end, T, M), t.push({
        point: T,
        pointOnLine: M,
        distance: jt.origin.distanceTo(T),
        object: i,
        face: null,
        faceIndex: f,
        uv: null,
        uv1: null
      });
    }
  }
}
class Qh extends Bt {
  constructor(e = new ua(), t = new Nr({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, r = new Float32Array(2 * t.count);
    for (let o = 0, a = 0, l = t.count; o < l; o++, a += 2)
      Gs.fromBufferAttribute(t, o), Hs.fromBufferAttribute(n, o), r[a] = a === 0 ? 0 : r[a - 1], r[a + 1] = r[a] + Gs.distanceTo(Hs);
    const s = new br(r, 2, 1);
    return e.setAttribute("instanceDistanceStart", new cn(s, 1, 0)), e.setAttribute("instanceDistanceEnd", new cn(s, 1, 1)), this;
  }
  raycast(e, t) {
    const n = this.material.worldUnits, r = e.camera;
    r === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const s = e.params.Line2 !== void 0 && e.params.Line2.threshold || 0;
    jt = e.ray;
    const o = this.matrixWorld, a = this.geometry, l = this.material;
    Sn = l.linewidth + s, a.boundingSphere === null && a.computeBoundingSphere(), Fi.copy(a.boundingSphere).applyMatrix4(o);
    let c;
    if (n)
      c = Sn * 0.5;
    else {
      const d = Math.max(r.near, Fi.distanceToPoint(jt.origin));
      c = ks(r, d, l.resolution);
    }
    if (Fi.radius += c, jt.intersectsSphere(Fi) === !1)
      return;
    a.boundingBox === null && a.computeBoundingBox(), Ii.copy(a.boundingBox).applyMatrix4(o);
    let u;
    if (n)
      u = Sn * 0.5;
    else {
      const d = Math.max(r.near, Ii.distanceToPoint(jt.origin));
      u = ks(r, d, l.resolution);
    }
    Ii.expandByScalar(u), jt.intersectsBox(Ii) !== !1 && (n ? $h(this, t) : Jh(this, r, t));
  }
}
class ha extends ua {
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
class ed extends Qh {
  constructor(e = new ha(), t = new Nr({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLine2 = !0, this.type = "Line2";
  }
}
const da = {
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
class jn {
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
const td = new Ir(-1, 1, 1, -1, 0, 1);
class nd extends Tt {
  constructor() {
    super(), this.setAttribute("position", new Dt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Dt([0, 2, 0, 0, 2, 0], 2));
  }
}
const id = new nd();
class Or {
  constructor(e) {
    this._mesh = new Bt(id, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, td);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class fa extends jn {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof gt ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Mn.clone(e.uniforms), this.material = new gt({
      name: e.name !== void 0 ? e.name : "unspecified",
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new Or(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class Ws extends jn {
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
class rd extends jn {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class Xs {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new Le());
      this._width = n.width, this._height = n.height, t = new kt(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: 1016 }), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new fa(da), this.copyPass.material.blending = 0, this.clock = new qh();
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
        Ws !== void 0 && (o instanceof Ws ? n = !0 : o instanceof rd && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new Le());
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
class sd extends jn {
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
const ad = {
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
class Hn extends jn {
  constructor(e, t, n, r) {
    super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = r, this.resolution = e !== void 0 ? new Le(e.x, e.y) : new Le(256, 256), this.clearColor = new ze(1, 1, 1), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new kt(s, o, { type: 1016 }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
    for (let d = 0; d < this.nMips; d++) {
      const f = new kt(s, o, { type: 1016 });
      f.texture.name = "UnrealBloomPass.h" + d, f.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(f);
      const m = new kt(s, o, { type: 1016 });
      m.texture.name = "UnrealBloomPass.v" + d, m.texture.generateMipmaps = !1, this.renderTargetsVertical.push(m), s = Math.round(s / 2), o = Math.round(o / 2);
    }
    const a = ad;
    this.highPassUniforms = Mn.clone(a.uniforms), this.highPassUniforms.luminosityThreshold.value = r, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new gt({
      uniforms: this.highPassUniforms,
      vertexShader: a.vertexShader,
      fragmentShader: a.fragmentShader
    }), this.separableBlurMaterials = [];
    const l = [3, 5, 7, 9, 11];
    s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    for (let d = 0; d < this.nMips; d++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])), this.separableBlurMaterials[d].uniforms.invSize.value = new Le(1 / s, 1 / o), s = Math.round(s / 2), o = Math.round(o / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [new L(1, 1, 1), new L(1, 1, 1), new L(1, 1, 1), new L(1, 1, 1), new L(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    const u = da;
    this.copyUniforms = Mn.clone(u.uniforms), this.blendMaterial = new gt({
      uniforms: this.copyUniforms,
      vertexShader: u.vertexShader,
      fragmentShader: u.fragmentShader,
      blending: 2,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), this.enabled = !0, this.needsSwap = !1, this._oldClearColor = new ze(), this.oldClearAlpha = 1, this.basic = new Xn(), this.fsQuad = new Or(null);
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
      this.renderTargetsHorizontal[s].setSize(n, r), this.renderTargetsVertical[s].setSize(n, r), this.separableBlurMaterials[s].uniforms.invSize.value = new Le(1 / n, 1 / r), n = Math.round(n / 2), r = Math.round(r / 2);
  }
  render(e, t, n, r, s) {
    e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
    const o = e.autoClear;
    e.autoClear = !1, e.setClearColor(this.clearColor, 0), s && e.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
    let a = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++)
      this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = a.texture, this.separableBlurMaterials[l].uniforms.direction.value = Hn.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = Hn.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), a = this.renderTargetsVertical[l];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, s && e.state.buffers.stencil.setTest(!0), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = o;
  }
  getSeperableBlurMaterial(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(0.39894 * Math.exp(-0.5 * n * n / (e * e)) / e);
    return new gt({
      defines: {
        KERNEL_RADIUS: e
      },
      uniforms: {
        colorTexture: { value: null },
        invSize: { value: new Le(0.5, 0.5) },
        // inverse texture size
        direction: { value: new Le(0.5, 0.5) },
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
				
					gl_FragColor = vec4(diffuseSum / weightSum, 1);
				}`
    });
  }
  getCompositeMaterial(e) {
    return new gt({
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
Hn.BlurDirectionX = new Le(1, 0);
Hn.BlurDirectionY = new Le(0, 1);
const od = {
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
class ld extends jn {
  constructor() {
    super();
    const e = od;
    this.uniforms = Mn.clone(e.uniforms), this.material = new Vh({
      name: e.name,
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    }), this.fsQuad = new Or(this.material), this._outputColorSpace = null, this._toneMapping = null;
  }
  render(e, t, n) {
    this.uniforms.tDiffuse.value = n.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, ke.getTransfer(this._outputColorSpace) === je && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === 1 ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === 2 ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === 3 ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === 4 && (this.material.defines.ACES_FILMIC_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
const cd = "pk.eyJ1IjoienRvcCIsImEiOiJjbHU5bWF3czAwN3E4MnNudHZjbHN2cmplIn0.LDBbkevH-f8pFktEZynTSA";
mapboxgl.accessToken = cd;
var Ni = new mapboxgl.Map({
  container: "container",
  style: "mapbox://styles/mapbox/dark-v9",
  zoom: 10,
  pitch: 0,
  center: [121.45485566448343, 31.16]
});
const yr = {
  threshold: 0,
  strength: 0.3,
  radius: 0,
  exposure: 0.1
};
Ni.on("style.load", function() {
  let i, e, t, n, r, s, o, a, l, c, u, d, f, m, g, v = new Bn();
  const p = 1, h = new Xi();
  h.set(p);
  const A = new Xn({ color: "black" }), M = {};
  Ni.addLayer({
    id: "custom_layer",
    type: "custom",
    onAdd: function(x, F) {
      o = x.getCanvas();
      const q = o.clientWidth, j = o.clientHeight;
      g = x.getContainer().querySelector("#_THREE_EFFECTS_CONTAINER_"), g || (g = document.createElement("canvas"), g.id = "_THREE_EFFECTS_CONTAINER_", g.style.position = "absolute", g.style.zIndex = "99999", g.style.pointerEvents = "none", g.style.width = "100%", g.style.height = "100%", g.width = q, g.height = j), t = new la({
        alpha: !0,
        antialias: !0,
        canvas: g
      }), t.setPixelRatio(window.devicePixelRatio), t.shadowMap.enabled = !0, t.autoClear = !1, i = new Nt(x.transform.fov, q / j, 0.1, 1e21), e = new Bh(), e.add(v), e.add(new Wh(13421772)), t.setClearAlpha(0), new wr(x, i, v), r = ud({
        color: 49151,
        width: 4,
        opacity: 1,
        containerWidth: q,
        containerHeight: j
      }), v.add(r);
      const H = hd();
      v.add(H);
      const X = dd();
      v.add(X), H.layers.enable(p), r.layers.enable(p), X.layers.enable(p);
      function k() {
        const pe = o.width / window.devicePixelRatio, we = o.height / window.devicePixelRatio;
        t.setSize(pe, we), s.setSize(pe, we), n.setSize(pe, we), r.material.resolution.set(pe, we);
      }
      const $ = new sd(e, i), Z = new Hn(new Le(q, j), yr.strength, yr.radius, yr.threshold);
      s = new Xs(t), s.renderToScreen = !1, s.addPass($), s.addPass(Z);
      const Y = new fa(
        new gt({
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
      Y.needsSwap = !0;
      const D = new ld();
      n = new Xs(t), n.addPass($), n.addPass(Y), n.addPass(D), window.addEventListener("resize", k), k();
      const G = `
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
      `, ae = `
          #ifdef GL_ES
          precision mediump float;
          #endif
          uniform sampler2D u_image;
          varying vec2 v_texCoord;
          void main() {
              gl_FragColor = texture2D(u_image, v_texCoord);
          }
      `, se = F.createShader(F.VERTEX_SHADER);
      if (F.shaderSource(se, G), F.compileShader(se), !F.getShaderParameter(se, F.COMPILE_STATUS)) {
        console.error(F.getShaderInfoLog(se)), F.deleteShader(se);
        return;
      }
      const le = F.createShader(F.FRAGMENT_SHADER);
      if (F.shaderSource(le, ae), F.compileShader(le), !F.getShaderParameter(le, F.COMPILE_STATUS)) {
        console.error(F.getShaderInfoLog(le)), F.deleteShader(le);
        return;
      }
      if (a = F.createProgram(), F.attachShader(a, se), F.attachShader(a, le), F.linkProgram(a), !F.getProgramParameter(a, F.LINK_STATUS)) {
        console.error(F.getProgramInfoLog(a)), F.deleteProgram(a);
        return;
      }
      l = F.getAttribLocation(a, "a_position"), c = F.getAttribLocation(a, "a_texCoord"), u = F.getUniformLocation(a, "u_resolution"), d = F.createBuffer(), f = F.createBuffer(), m = F.createTexture();
    },
    render: function(x, F) {
      e.traverse(b), s.render(), e.traverse(C), n.render(), t.resetState(), t.render(e, i), x.useProgram(a), x.bindBuffer(x.ARRAY_BUFFER, d), T(x, 0, 0, o.width, o.height), x.bindBuffer(x.ARRAY_BUFFER, f), x.bufferData(
        x.ARRAY_BUFFER,
        new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
        x.STATIC_DRAW
      ), x.bindTexture(x.TEXTURE_2D, m), x.texParameteri(x.TEXTURE_2D, x.TEXTURE_WRAP_S, x.CLAMP_TO_EDGE), x.texParameteri(x.TEXTURE_2D, x.TEXTURE_WRAP_T, x.CLAMP_TO_EDGE), x.texParameteri(x.TEXTURE_2D, x.TEXTURE_MIN_FILTER, x.NEAREST), x.texParameteri(x.TEXTURE_2D, x.TEXTURE_MAG_FILTER, x.NEAREST), x.texImage2D(x.TEXTURE_2D, 0, x.RGBA, x.RGBA, x.UNSIGNED_BYTE, g), x.enableVertexAttribArray(l), x.bindBuffer(x.ARRAY_BUFFER, d), x.vertexAttribPointer(l, 2, x.FLOAT, !1, 0, 0), x.enableVertexAttribArray(c), x.bindBuffer(x.ARRAY_BUFFER, f), x.vertexAttribPointer(c, 2, x.FLOAT, !1, 0, 0), x.uniform2f(u, x.canvas.width, x.canvas.height), x.enable(x.BLEND), x.blendFunc(x.ONE, x.ONE), x.drawArrays(x.TRIANGLES, 0, 6);
    }
  });
  function T(x, F, q, j, P) {
    const H = F, X = F + j, k = q, $ = q + P;
    x.bufferData(x.ARRAY_BUFFER, new Float32Array([H, k, X, k, H, $, H, $, X, k, X, $]), x.STATIC_DRAW);
  }
  function b(x) {
    x.isMesh && h.test(x.layers) === !1 && (M[x.uuid] = x.material, x.material = A);
  }
  function C(x) {
    M[x.uuid] && (x.material = M[x.uuid], delete M[x.uuid]);
  }
  var R = new Yh(), V = new Le();
  function E(x) {
    const F = o.width / window.devicePixelRatio, q = o.height / window.devicePixelRatio;
    V.x = x.clientX / F * 2 - 1, V.y = -(x.clientY / q) * 2 + 1, R.setFromCamera(V, i);
    var j = R.intersectObjects(e.children, !0);
    j.length > 0 && (console.log("Object clicked!"), j[0].object.material.color.set(16711680));
  }
  window.addEventListener("click", E, !1), Ni.addSource("line", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [121.45485566448343, 31.313623092438412],
              [121.47540519609203, 31.068403408422398],
              [121.45293459353682, 30.940240693209184]
            ],
            type: "LineString"
          }
        }
      ]
    }
  }), Ni.addLayer({
    type: "line",
    source: "line",
    id: "line",
    paint: {
      "line-color": "red",
      "line-width": 8
    },
    layout: {
      "line-cap": "round",
      "line-join": "round"
    }
  });
});
function ud(i) {
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
  var e = Ut.lnglatsToWorld(i.geometry), t = Ut.normalizeVertices(e), n = Ut.flattenVectors(t.vertices), r = new ha();
  r.setPositions(n);
  let s = new Nr({
    color: i.color,
    linewidth: i.width,
    dashed: !1,
    opacity: i.opacity
  });
  s.resolution.set(i.containerWidth, i.containerHeight), s.isMaterial = !0, s.transparent = !0, s.depthWrite = !1;
  let o = new ed(r, s);
  return o.position.copy(t.position), o;
}
function hd() {
  const i = [
    [121.47540519609203, 31.068403408422398],
    [121.40293459353683, 30.980240693209183],
    [121.57515884902091, 30.979997036822525]
  ];
  var e = Ut.lnglatsToWorld(i), t = Ut.normalizeVertices(e), n = Ut.flattenVectors(t.vertices);
  const r = new Float32Array(n), s = new Tt();
  s.setAttribute("position", new Lt(r, 3));
  const o = new Xn({ color: 65280 }), a = new Bt(s, o);
  return a.position.set(t.position.x, t.position.y, t.position.z), a;
}
function dd() {
  const i = [121.10987446056618, 31.18596578115384];
  var e = Ut.projectToWorld(i), t = new qn(200, 200, 200), n = new Xn({ color: 16776960 }), r = new Bt(t, n);
  return r.position.set(e.x, e.y, e.z), r;
}
