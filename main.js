
let block = document.querySelector(".block");
let wrapp = document.querySelector(".wrapp");
let coord = wrapp.getBoundingClientRect();
let a=0;
let b=0;
let c=0;
let d=0;

block.addEventListener('mousedown', mouseDown);
block.addEventListener('mouseup', mouseUp);

function mouseDown() {
    a=coord.x;
    b=coord.y;
    c=coord.width;
    d=coord.height;
    block.addEventListener('mousemove', move);
    console.log(coord);
};

function move(e) {
    let blockX = e.pageX - block.offsetWidth / 2;
    let blockY = e.pageY - block.offsetHeight / 2;
    
    
    if(blockX<=b || blockY<=a){
        block.style.left == blockX + 'px';
        block.style.top == blockY + 'px';
        
    }
    else if(blockX>=c-block.offsetWidth || blockY>=d-block.offsetHeight){
        block.style.right == blockX + 'px';
        block.style.bottom == blockY + 'px';
        
    } else{
        blockX=e.pageX - block.offsetWidth / 2; 
        blockY = e.pageY - block.offsetHeight / 2;       
        block.style.left = blockX + 'px';
        block.style.top = blockY + 'px';
    }
};

function mouseUp() {
    block.removeEventListener('mousemove', move);
};
