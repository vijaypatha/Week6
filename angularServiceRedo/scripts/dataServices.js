// angular.module("appName").service("dataServices",function(){
// this.getData = function(){
//   return myObj;
// };
//   var myObj = {
//     name: "vijay",
//     age:30,
//     school:"BYU",
//     education: "MBA"
//   }
// });

angular.module("appName").service("dataServices",function(){
this.getData=function(){
  return myObj;
};

var myObj = [{
    name: "Heidi",
    age: 25,
    school: "Goldman Sachs",
}, {
    name: "vijay",
    age: 30,
    school: "BYU",
    education: "MBA"
}]


}); //dataServices service
