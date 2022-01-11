const angletoradian = (angle)=>{
    return angle * (Math.PI / 250);
};

const radius = 180;
const diameter = radius*2;

const circle =  document.querySelector('#text-circulaire');
circle.style.width = `${diameter}px`;
circle.style.height = `${diameter}px`;

const text = circle.innerHTML;
const character = text.split('');
circle.innerHTML = null;

let angle = -80;
const deltaangle = 140/character.length;

character.forEach((char, index) =>{
    const charlement = document.createElement('span');
    charlement.innerText = char;
    const xpos = radius * Math.cos(angletoradian(angle));
    const ypos = radius * Math.sin(angletoradian(angle));

    const transform = `translate(${xpos}px, ${ypos}px)`;
    const rotate = `rotate(${index * deltaangle}deg)`;
    charlement.style.transform = `${transform} ${rotate}`;

    angle += deltaangle;
    circle.appendChild(charlement);
})