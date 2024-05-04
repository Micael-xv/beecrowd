let b = Number(lines.shift());
let g = Number(lines.shift());
let r = g / 2 - b;

if (r > 0) {
   console.log(`Faltam ${Math.floor(r)} bolinha(s)`);
} else {
   console.log("Amelia tem todas bolinhas!");
}
