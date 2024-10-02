let tagH1 = document.getElementsByTagName('h1');

    tagH1 = tagH1[0];

//console.log(tagH1.textContent);
//console.log(tagH1.innerText);
//console.log(tagH1.innerHTML);
//console.log(tagH1.outerHTML);

let tagP1 = document.getElementsById('texto-p1');

const mostraAlert = () =>{
    alert( 123);
}
tagP1.addEventListener ('mouoseover', mostraAlert);

let tagButton = document.getElementById ('my-button');

tagButton.addEventListener('click', ()=>{
    tagH1.textContent = 'Outra coisa';
    

})

let tagA = document.querySelector('a');

tagA.addEventListener('click', (event) => {


})

