import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const background = <img class="background" src="/images/ocean.jpg" alt='ocean' />;
const images =[];
for (const animal in animals) {
    images.push(<img key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button'onClick={displayFact}/>)
};
function displayFact(e){
    const targetedAnimal = e.target.alt;
    const animalInfo = animals[targetedAnimal];
    const randomIndex = Math.floor(Math.random()*animalInfo.facts.length);
    const funFact=animals.facts[randomIndex];
    document.getElementById('fact').innerHTML=funFact;
}
const animalFacts =(
    <div>
        <h1>{title === '' ? 'Click for animal fun fact' : title}</h1>
        {background}
        <div className='animals'>{images}</div>
        <p id='fact'></p>
    </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));