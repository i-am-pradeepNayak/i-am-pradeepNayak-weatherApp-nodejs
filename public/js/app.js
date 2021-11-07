console.log("Client side javascript file is loaded!");

const val=document.querySelector('form');
const input=document.querySelector('input');
const forecastData=document.getElementsByClassName('forecastData')
const location1=document.getElementsByClassName('location')
console.log(forecastData);
console.log(location1);


val.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("on submit added")
    var serachData=input.value;

    if(!serachData)
    {
        return console.log("Enter the seatch ele")
    }
    fetch(`http://localhost:3000/weather?address=${serachData}`)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    if(data.error)
    {
        console.log(data.error)
    }
    else{
        console.log(data)
        forecastData[0].textContent=data.forecastData;
        location1[0].textContent=`${data.location} and ${serachData}`;
    }
  });

})

