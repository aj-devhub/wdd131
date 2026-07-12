// get elemnt from the document
const raduisOutput = document.getElementById('raduis');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

let raduis = 10;
area = PI * raduis * raduis;
raduisOutput.textContent = raduis;
areaOutput.textContent = area;

raduis = 20;
area = PI * raduis * raduis;
raduisOutput.innerHTML = raduis;
areaOutput.innerHTML = area;