import { reviews } from "../data/reviews.js";
console.log(reviews); // Import as Array form

const myTarget = document.querySelector("#cards")

for (let x =0; x < reviews.length; x++) {
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name;
    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text;        //5번반복해서 이름이랑 후기 다 넣었음

    const myRating = document.createElement('div') //별 넣을 div 생성
    

    console.log(reviews[x].stars) // Each reviewers' stars number
    for (let step = 0; step < reviews[x].stars; step++) {
        const genIndicator = document.createElement('img') //이 createElement를 reviews[x].stars만큼 한다는거. 즉, 요소 생성을 해당 숫자만큼 반복하겠다.
        genIndicator.src = "images/Blue-Star.svg"
        myRating.appendChild(genIndicator)
    }
    
    mySection.appendChild(myName)
    mySection.appendChild(myRating)
    mySection.appendChild(myReview)
    myTarget.appendChild(mySection)
}

const rightNow = new Date()
document.querySelector('#year').textContent = rightNow.getFullYear();

function toggleMenu() {
    document.querySelector('#btn').classList.toggle("open")
    document.querySelector('#primaryNav').classList.toggle("open")
}

const x = document.querySelector('#btn')
x.onclick = toggleMenu;