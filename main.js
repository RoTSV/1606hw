
let block = document.querySelector(".block");
let wrapp = document.querySelector(".wrapp");
let coord = wrapp.getBoundingClientRect();
block.addEventListener('mousedown', mouseDown);
block.addEventListener('mouseup', mouseUp);

function mouseDown() {
    block.addEventListener('mousemove', move);
    console.log(coord);
};

function move(e) {
    let blockX = e.pageX - block.offsetWidth / 2;
    let blockY = e.pageY - block.offsetHeight / 2;
    
    if(blockX<=coord.x || blockY<=coord.y || blockX>=coord.width-block.offsetWidth || blockY>=coord.height-block.offsetHeight){
        block.style.left == blockX + 'px';
        block.style.top == blockY + 'px';
        block.style.right == blockX + 'px';
        block.style.bottom == blockY + 'px';
    }
     else{     
        block.style.left = blockX + 'px';
        block.style.top = blockY + 'px';
    } 
};

function mouseUp() {
    block.removeEventListener('mousemove', move);
};
