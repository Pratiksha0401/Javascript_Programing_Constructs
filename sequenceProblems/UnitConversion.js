//unit conversion from inches to feet
console.log("1 feet = 12 inches");
feet = 42/12;
console.log("42 inches in feet is " + feet);

//unit conversion for rectangular plot    
let area= 60 * 40;
console.log("Area of plot (60 feets*40 feets)in square feet : "+area+"square feet");
let lengthInMeters = 60*0.305;
let widthInMeter = 40*0.305;
let area1 = lengthInMeters * widthInMeter;
console.log("Area of plot are in meter squre " + area1+"meter square");

// area of 25 plot in acres
let areaInAcre = (lengthInMeters*widthInMeter)*0.000247;
let areaOfTotalPlots = areaInAcre*25;
console.log("Area of such 25 plots in acres is " + areaOfTotalPlots);