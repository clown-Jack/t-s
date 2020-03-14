"use strict";
//普通枚举
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
var g1 = Gender.BOY;
var g2 = Gender.GIRL;
console.log(Gender);
console.log(g1); //0
console.log(g2); //1
// console.log(Color)
console.log(2 /* BLUE */, 0 /* RED */, 1 /* YELLOW */);
