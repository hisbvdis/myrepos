// ===========================================================================
// Округлить до "n" знаков (по математическим правилам)
// ===========================================================================
// Принцип: количество нулей = количество знаков после точки
// Math.round(0.455 * 10) / 10      =>  0.5
// Math.round(0.455 * 100) / 100    =>  0.46
// Math.round(0.455 * 1000) / 1000  =>  0.455
const roundMath = (value, n) => Math.round(value * 10 ** n) / 10 ** n;
