// btn1 = document.querySelector('.btn1')
// btn2 = document.querySelector('.btn2')

// mesBox = document.querySelectorAll('.mox')

// btn1.addEventListener('click',function(e){
//     console.log('click btn1',e)
    
// })

// btn2.addEventListener('click',function(){
//     console.log('click btn2')
// })

// mesBox.forEach(btn => {
//     btn.addEventListener('click',function(){
//         console.log('click move')})

//         dragElement(btn);
// } );

// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     if (document.getElementById(elmnt)) {
//       /* if present, the header is where you move the DIV from:*/
//       document.getElementById(elmnt).onmousedown = dragMouseDown;
//     } else {
//       /* otherwise, move the DIV from anywhere inside the DIV:*/
//       elmnt.onmousedown = dragMouseDown;
//     }
  
//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // get the mouse cursor position at startup:
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // call a function whenever the cursor moves:
//       document.onmousemove = elementDrag;
//     }
  
//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // calculate the new cursor position:
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;
        
//       console.log(`pos1 : ${pos1} ,pos2 : ${pos2} ,pos3 : ${pos3} ,pos4 : ${pos4}  `)
//       // set the element's new position:
//       elmnt.style.top = (elmnt.offsetTop) + "px";
//       elmnt.style.left = (elmnt.offsetLeft) + "px";
//     }
  
//     function closeDragElement() {
//       /* stop moving when mouse button is released:*/
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }


 btnTest= document.querySelector('.btn1')
 btnVerife = document.querySelector('.btn2')



btnVerife.addEventListener('click',function(){
  id1 = document.querySelector("#id1")
  console.log(id1)
  console.log('btn Verification')
})



btnTest.addEventListener('click',function(){
    console.log('btn test')
})



resu = document.querySelectorAll('.resu');
console.log(resu)
var drag

function dragMove(id){

  var element = document.getElementById(id);
  element.style.position = 'absolute';
  element.onmousedown =  function() {
          drag = element;
          resu.forEach(elem => {
            elem.style.border = `5px dashed black`;
           
       });
  }
  
}

document.onmouseup = function(){
   drag = null;
   resu.forEach(elem => {
    elem.style.border = `none`
});
}

document.onmousemove = function (e) {
  console.log('lever down')
    x = e.pageX ;
    y = e.pageY;
    console.log(drag)
    console.log(x, y)
    drag.style.left = x + "px"
    drag.style.top = y + "px"
}

window.onload = function (){
      for (let index = 1; index <= 10; index++) {
        dragMove(`container${index}`)
        
      }
};