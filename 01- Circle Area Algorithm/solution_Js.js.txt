function Pararea(base,height){
    
    parallelogramArea=base*height;
    
    
    return parallelogramArea;
}

function Traparea(a,b,h){
    
    TrapezoidArea= ((a+b)/2)*h;

    
    return TrapezoidArea;
}

console.log("parallelogram Area = "+Pararea(3,3));
console.log("Trapezoid Area = "+Traparea(3,3,4));