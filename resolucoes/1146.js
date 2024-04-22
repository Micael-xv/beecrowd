let x = 1, aux = "";

let n = parseInt(lines.shift());

while(x <= n){
    if(n === 0){
        break;
    }
    else{
        if (x === n) {
            aux += (x.toString() + "\n");
            x=0;
            n=parseInt(lines.shift());
        } 
        else {
            aux += (x.toString() + " ");
        }  
    }
    x++;
}
console.log(aux.replace(/\n$/, ""));