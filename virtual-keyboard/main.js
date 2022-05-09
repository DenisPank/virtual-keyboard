
let arrKey = ['Backquote','Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace','Tab','KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock','KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', "Quote", 'Enter', 'ShiftLeft','KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash','ArrowUp', 'ShiftRight', 'ControlLeft','MetaLeft','AltLeft','Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']

let arrKeyPress = ['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace','Tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift','z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','&uarr;', 'Shift', 'CTRL','MetaLeft','Alt',' ', 'Alt', '&larr;', '&darr;', '&rarr;', 'CTRL']


document.body.insertAdjacentHTML('afterbegin', ' <div id="virtual_KeyBoard"></div>');


let virtualKeyBoard = document.querySelector("#virtual_KeyBoard");



function keyBoard(arr1, arr2) {
  let out = '';
  for(let i=0; i <= 63; i++){
    out += '<div class="virtual_KeyBoard__btn" data="' + arr1[i] +'">'+ arr2[i] +'</div>'
  }
  virtualKeyBoard.innerHTML = out;

}

keyBoard(arrKey, arrKeyPress)

virtualKeyBoard.insertAdjacentHTML('beforebegin', '<textarea type="text" id="textBoard" rows="15" cols="50" ></textarea>');

document.addEventListener("keydown",(event)=>{
  
  document.querySelectorAll('#virtual_KeyBoard .virtual_KeyBoard__btn').forEach((Element)=>{
    Element.classList.remove('active')
  })
  
  document.querySelector('#virtual_KeyBoard .virtual_KeyBoard__btn[data="' +event.code + '"]').classList.add('active')
  
if (event.key != "Backspace" && event.key != "Delete" && event.key != "Shift") {
  if (event.key != "Enter" && event.key != "Control" && event.key != "Alt") {
    if (event.key != "CapsLock" && event.key != "Tab" && event.key != "Meta") {
      if (event.key != "ArrowDown" && event.key != "ArrowUp" && event.key != "ArrowRight" && event.key != "ArrowLeft") {
    textBoard.value += event.key;}}
}}
// if (event.key == "Backspace") {
//   textBoard.value;
  

// }
if(event.key == "Backspace"){
  textBoard.value = textBoard.value.substring(0, textBoard.value.length - 1);
}
if(event.key == "Enter"){
  textBoard.value += "\n";
}

if(event.key == "Tab"){
  textBoard.value += "\t";
}




console.log(event.key)
})

  





virtual_KeyBoard.onclick = function(event) {
  if (event.target.tagName != "DIV") return;
  let selected = virtual_KeyBoard.querySelectorAll('.active');
  for(let elem of selected) {
    elem.classList.remove('active');
  }
  event.target.classList.add('active')

  if (event.target.classList.contains('virtual_KeyBoard__btn') && event.target.innerHTML.length == "1") {
    
    textBoard.value += event.target.innerHTML
    
  }
}


document.addEventListener("keydown",(event)=>{
  

})