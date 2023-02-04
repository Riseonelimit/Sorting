let random_array = document.getElementById("random_array");
let sort = document.getElementById("sort");
let bar_container = document.getElementById("bar_container") 
let noOfBars = 20;
let min = 1;
let max = 50;
let height = 10;
let new_array = new Array(noOfBars);

function randomNumber(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function createRandomArray(){
    for (let i = 0; i < noOfBars; i++) {
        new_array[i] = randomNumber(min,max);
        console.log(new_array[i]);
    }
}

function renderArray(array){
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar")    ;
        bar.style.height = array[i] * height + "px";
        console.log(array[i]);
        bar_container.appendChild(bar);
    }
}


random_array.addEventListener("click",function (){
    createRandomArray();
    bar_container.innerHTML = "";
    renderArray(new_array);
})

function sleep(ms){
    return new Promise ((resolve) => setTimeout(resolve,ms));
}

addEventListener("DOMContentLoaded",function(){
    createRandomArray();
    renderArray(new_array);
})

async function bubbleSort(array){
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length ; j++) {
            
            if (array[j]>array[j+1]) {
                for (let k = 0; k < bars.length; k++) {
                    if(k !== j && k!== j+1){
                        bars[k].style.backgroundColor = "royalblue";
                    }
                }
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                bars[j].style.height = array[j] * height + "px"; 
                bars[j].style.backgroundColor = "aliceblue"; 
                bars[j+1].style.height = array[j+1] * height + "px"; 
                bars[j+1].style.backgroundColor = "aliceblue"; 
                await sleep(30);
            }   
        }
        await sleep(30);
    }
    return array;
}

sort.addEventListener("click",function (){

    let sorted_array = bubbleSort(new_array);
    console.log(sorted_array);
})