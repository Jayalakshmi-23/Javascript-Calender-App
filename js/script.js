'use strict';

const currentDate = document.querySelector(".current--date"),
leftAngle = document.querySelector(".fa-angle-left"),
daysTag = document.querySelector(".days"),
viewBtn = document.querySelector(".btn"),
btns = document.querySelectorAll(".icons i");
// const hasActive = document.querySelector(".active");

let date = new Date(),
currYear = date.getFullYear(),
currDay = date.getDate(),
currMonth = date.getMonth();

const months = ['January', 'Febrary', 'March', 'April','May','June','July','August','September','October','November','December'];


function renderCalender() {
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    let liTag = "";

    // Getting last date of this month
    let lastDayofCurMon = (new Date(currYear, currMonth + 1, 0)).getDate();
    // Getting last date of last month
    let lastDayofLastMon = (new Date(currYear, currMonth, 0)).getDate();

    // Getting first day of curr month
    let firstDay = (new Date(currYear, currMonth)).getDay();

    // Getting last day of current month
    let firstDayofNext = (new Date(currYear,currMonth,lastDayofCurMon)).getDay();
   
   
    for (let i = firstDay; i > 0; i--) {
        liTag += `<li class="inactive">${lastDayofLastMon - i + 1}</li>`; 
    }

    for(let i = 0; i < lastDayofCurMon; i++){
        let isToday = i + 1 === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? 'active' : "";
        liTag += `<li class="${isToday}">${i + 1}</li>`; 
    }

  
    for (let i = firstDayofNext; i < 6; i++) {
        liTag += `<li class="inactive">${i - firstDayofNext + 1}</li>`;  
    }

    daysTag.innerHTML = liTag;

  
}

renderCalender();

btns.forEach(btn => {
    btn.addEventListener('click', () => {
      
        currMonth = btn.id === 'prev' ? currMonth - 1 : currMonth + 1;
        if(currMonth == 12){
            currMonth = 0;
            currYear = currYear + 1;
        }
        if(currMonth < 0){
            currMonth = 11;
            currYear = currYear - 1;
        }
        renderCalender();
        
    })
});

viewBtn.addEventListener('click', function(){
    currYear = date.getFullYear();
    currDay = date.getDate();
    currMonth = date.getMonth();
    renderCalender();
});


const radius = [2,4,1,3];

const area = function(radius){
    return Math.floor(Math.PI * radius * radius);
}

console.log(radius.map(area));

Array.prototype.tempMap = function(logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
          output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.tempMap(area));

const resMap = radius.map(function(r) {
    return area(r);
})
console.log(resMap);

const filterRadius = function(arr, logic){
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = logic(arr[i]);
        if(temp > 10){
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(filterRadius(radius, area));



const longestCommonPrefix = function(str) {
    for (let i = 0; i < str.length; i++) {
        
    }
}

const strs = ["flower","flow","flight"]
longestCommonPrefix(strs)