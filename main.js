

const body = document.getElementsByTagName('body')[0],

// Creat MainElement
main = document.createElement('main');
body.append(main);


// Create addButtonElements
let addButtonElement = document.createElement('button');
addButtonElement.setAttribute('id', 'addButton')
addButtonElement.append ('Add Elements');
body.append(addButtonElement);



// Create add Event Listener
const addButton =document.querySelector('#addButton');
addButton.addEventListener('click', function(){
    let userText = document.querySelector('#userInput');
    let userValue = userText.value;
    const divElement = document.createElement('div');
    divElement.append(userValue);
    body.append(divElement);
})




// Create ImageElement
const imageElement = document.createElement('img');
imageElement.setAttribute('class','image');
imageElement.setAttribute('alt','Cheetah');
imageElement.setAttribute('src', 'https://coloringhome.com/coloring/Aib/jbE/AibjbEnzT.gif');
imageElement.setAttribute('width','430px');
main.append(imageElement);


// create input text box
const inputElement = document.createElement('input');
inputElement.setAttribute('id', 'userInput');
body.append(inputElement);





// create remove button 
let buttonElement = document.createElement('button');
buttonElement.setAttribute('id', 'removeButton')
buttonElement.append ('Remove Elements');
body.append(buttonElement);
buttonElement.setAttribute('fontColor','red');

// Create remove Event Listener
const removeButton = document.querySelector('#removeButton');
removeButton.addEventListener('click', function(){
    main.remove();
})

// create AElements
const aElement = document.createElement('a');
aElement.setAttribute('class', 'Link');
aElement.setAttribute('href', 'https://www.codewars.com/users/codetiger');
aElement.append('Jump to my War Zoon');
aElement.setAttribute('color','silver');
main.append(aElement);
