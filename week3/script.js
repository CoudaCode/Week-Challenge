let btnadd = document.querySelector('#add')
let rslt = document.querySelector('#resultat')
let container = document.querySelector('.container')
let contdiv = document.querySelectorAll('.container div')
let deNumber = [1,2,3,4,5,6];
let count = 0;
let compteur = 1;

if (compteur < 5) {
    btnadd.addEventListener('click',()=>{
            contdiv[compteur].style.display = 'block';
            console.log(compteur)
            compteur ++
    })
   
}

contdiv.forEach(deElemt =>{

    deElemt.addEventListener('click',()=>{
       
        numAléa = Math.floor(Math.random() * ((deNumber.length+1) - 1)) + 1;
        deElemt.textContent = numAléa
        count += numAléa;

    })
})

rslt.addEventListener('click', ()=>{
  alert(count)
})











