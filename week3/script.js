let btn = document.querySelector('#add')
let resultat = document.querySelector('#resultat')
let content = document.querySelector('.container')

let addDiv = document.querySelectorAll('.container div')
console.log(addDiv);
let tabNbr = [1,2,3,4,5,6];

let total = 0;

let cpt = 1;
console.log(addDiv[2])

if (cpt < 5) {
    btn.addEventListener('click',()=>{
            addDiv[cpt].style.display = 'block';
            console.log(cpt)
            cpt ++
    })
   
}

addDiv.forEach(elemt =>{
    
    elemt.addEventListener('click',()=>{
       
        nbrAléa = Math.floor(Math.random() * ((tabNbr.length+1) - 1)) + 1;
        elemt.textContent = nbrAléa
        console.log('test1',nbrAléa)
        total += nbrAléa;
        console.log(total);

    })
})

resultat.addEventListener('click', ()=>{
  alert(total)
})











