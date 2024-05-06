var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var data =JSON.parse(request.response);
    console.log(data);

    // Using filter function to get all countries from Asia

    let res1 =data.filter((element)=>element.region=="Asia");
    console.log(res1);

    // population less than 2 lakhs

    let res2 = data.filter((element)=>element.population < 200000);
    console.log(res2);

    // using forEach function to get all name capital and flag
    let res3 =data.forEach(element=>{
        console.log(element.name,element.capital,element.flag);
    }); 

    // get all populations
    let res4=data.reduce((pop,data)=>{
        return pop + data.population
    },0);
    console.log(res4);

    //Print the country that uses US dollars as currency.
    let res5 =data.filter((element)=>element.currencies=="USD");
    console.log(res5);
}