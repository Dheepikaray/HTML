var heading=document.createElement("h1");

function create(){
    heading.innerHTML='HI';
    
    document.body.appendChild(heading);
}
function remove(){
    heading.remove();
}