'use strict';

{

const target = document.getElementById('target');
const target2 = document.getElementById('target2');
const adder =  document.getElementById('adder');
const adder2 =  document.getElementById('adder2');

function callback(entries) {
  console.log(entries);

  

  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
      adder.classList.add('cross');
    }
  });

  

}
function callback2(entries2) {
  console.log(entries2);

  

  entries2.forEach(entry2 => {
    if (entry2.isIntersecting && entry2.intersectionRatio >= 0.8) {
      adder2.classList.add('cross2');
    }
  });

}




  // entries.forEach(entry => {

  //   if(!entry.isIntersecting) {
  //     return;
  //   }

    

  //   entry.adder.classList.add('cross');

  // });





const options = {
  threshold: 0.8,
};

const options2 = {
  threshold: 0.8,
};

const observer = new IntersectionObserver(callback,options);
const observer2 = new IntersectionObserver(callback2,options2);

observer.observe(target);
observer2.observe(target2);

}