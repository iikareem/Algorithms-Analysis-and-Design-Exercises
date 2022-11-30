var R  =  SSxx = SSyy = SSxy  = sumXY = n = sumofxSquare = sumofySquare = sumX = sumY = 0
var x = [];
var xsquare = [];
var y = [];
var ysquare = [];
var xy =  [];


n = Number(prompt("n"))

for (var i = 0; i < n; i++) {

  x[i] = Number(prompt("x" + "(" + i + ")"));
  xsquare[i]=Math.pow(x[i],2);

  y[i] = Number(prompt("y" + "(" + i + ")"));
  ysquare[i]=Math.pow(y[i],2);

  xy[i] = x[i]*y[i];


  sumX += x[i];
  sumY += y[i];
  sumofxSquare += xsquare[i];
  sumofySquare += ysquare[i];
  sumXY += xy[i];

}

SSxx = (sumofxSquare - (Math.pow(sumX,2))/n);
SSyy = (sumofySquare - (Math.pow(sumY,2))/n);
SSxy = (sumXY  -  (sumX*sumY)/n);



R =  SSxy/Math.sqrt(SSxx*SSyy);

console.log(R);