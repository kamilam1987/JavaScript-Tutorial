// ******************* STYLE ***************

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.facebook.com');
link.innerText = 'facebook page';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
//msg.setAttribute('class', 'success');
//msg.setAttribute('style', 'color:green');

const title = document.querySelector('h1');

console.log(title.style);

console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'yellow';
title.style.fontSize = '60px';
title.style.margin = '';//Back to previous oen

const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('error');// Adds class

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    //console.log(para.textContent)// shows text content that is hidden
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }
    else if (para.textContent.includes('success')){
        para.classList.add('success');
    }
});

const titleNew = document.querySelector('.title');
titleNew.classList.toggle('test');
