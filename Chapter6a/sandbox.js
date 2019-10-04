const para = document.querySelector('p');

//console.log(para.innetText);
//para.innerText = 'ninjas are awesome!'// Set to a new text
para.innerText += 'ninjas are awesome!'// Append to a text 

// Change text of a few items at once
const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += 'new text';
});

const content = document.querySelector('.content');
//console.log(content.innerHTML);
content.innerHTML = '<h2>This is a new h2</h2>'//Owerite content to h2

const people =['mario', 'luigi', 'orla'];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`
});