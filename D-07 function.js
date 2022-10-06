

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);

//1. Get all contries from Asia region using filter:

var Res=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
   
    console.log(Res);

//2. Get all the countries with a population of less than 2 lakhs using filter:

var popu=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);

    console.log(popu);

//3. Print the following details name, capital, flag using forEach function

result.forEach((element)=>console.log(element.name));
result.forEach((element)=>console.log(element.capital));
result.forEach((element)=>console.log(element.flags));


//4. Total population of countries using reduce function:

var sum=result.reduce((acc,cv)=>acc+cv.population,0);

    console.log(sum);

//5. Print the country which uses US Dollars as currency:

var curr=result.filter((ele)=>(ele.currencies!=undefined && ele.currencies[0].code=="USD")).map((country)=>country.name);

console.log(curr);

};

