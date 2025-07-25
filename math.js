// -------- Helpers --------
const x  = 854.76;
const nx = -854.76;
const a  = 16;
const b  = 9;
const arr = [12, -5, 27, 3.14];

const degToRad = d => d * Math.PI / 180;
const radToDeg = r => r * 180 / Math.PI;

console.log('--- Rounding ---');
console.log(Math.floor(x));   // 854  (round down)
console.log(Math.ceil(x));    // 855  (round up)
console.log(Math.round(x));   // 855  (nearest int; .5 goes up)
console.log(Math.trunc(x));   // 854  (drop decimals)
console.log(Math.fround(x));  // nearest 32‑bit float representation

console.log('--- Sign / Absolute ---');
console.log(Math.abs(nx));    // 854.76
console.log(Math.sign(nx));   // -1   (1 for +, -1 for -, 0, -0)

console.log('--- Powers / Roots ---');
console.log(Math.pow(2, 10)); // 1024
console.log(2 ** 10);         // 1024 (ES2016 operator)
console.log(Math.sqrt(a));    // 4
console.log(Math.cbrt(27));   // 3
console.log(Math.hypot(3, 4)); // 5  (sqrt(3^2 + 4^2))

console.log('--- Max / Min ---');
console.log(Math.max(...arr)); // 27
console.log(Math.min(...arr)); // -5

console.log('--- Random ---');
console.log(Math.random());    // [0, 1)
const randInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randInt(1, 6));    // dice 1..6

console.log('--- Logs / Exponentials ---');
console.log(Math.log(Math.E));   // 1        (natural log)
console.log(Math.log10(1000));   // 3
console.log(Math.log2(1024));    // 10
console.log(Math.log1p(0.5));    // ln(1 + x) -> more precise for tiny x
console.log(Math.exp(1));        // e^1
console.log(Math.expm1(1));      // e^x - 1  -> more precise for tiny x

console.log('--- Trigonometry (radians) ---');
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1
console.log(Math.tan(Math.PI / 4)); // 1
console.log(Math.asin(1));          // 1.5707963267948966 (π/2)
console.log(Math.acos(0));          // 1.5707963267948966 (π/2)
console.log(Math.atan(1));          // 0.7853981633974483  (π/4)
console.log(Math.atan2(4, 3));      // angle of vector (x=3, y=4)

console.log('--- Hyperbolic ---');
console.log(Math.sinh(1));   // ~1.1752011936438014
console.log(Math.cosh(1));   // ~1.5430806348152437
console.log(Math.tanh(1));   // ~0.7615941559557649
console.log(Math.asinh(1));  // ~0.881373587019543
console.log(Math.acosh(2));  // ~1.3169578969248166
console.log(Math.atanh(0.5));// ~0.5493061443340548

console.log('--- 32-bit integer helpers ---');
console.log(Math.imul(0x7fffffff, 2)); // 32-bit integer multiplication
console.log(Math.clz32(1));            // 31 (count leading zeros in 32-bit)
console.log(Math.clz32(0));            // 32

console.log('--- Radians <-> Degrees helpers (custom) ---');
console.log(degToRad(180)); // Math.PI
console.log(radToDeg(Math.PI / 2)); // 90

console.log('--- Constants ---');
console.log(Math.PI);      // 3.141592653589793
console.log(Math.E);       // 2.718281828459045
console.log(Math.LN2);     // ln(2)
console.log(Math.LN10);    // ln(10)
console.log(Math.LOG2E);   // log2(e)
console.log(Math.LOG10E);  // log10(e)
console.log(Math.SQRT2);   // sqrt(2)
console.log(Math.SQRT1_2); // sqrt(1/2)
