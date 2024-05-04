var prompt = function(texto) { return lines.shift();};

for (let tentativa = 1; true; tentativa++) {
   var number = parseInt(prompt());
   if (isNaN(number)) {
      break;
   }

   var sequence = [0];

   for (let i = 1; i <= number; i++) {
      for (let n = 0; n < i; n++) {
         sequence.push(i);
      }
   }

   if (sequence.length == 1) {
      console.log(`Caso ${tentativa}: ${sequence.length} numero`);
   }
   else {
      console.log(`Caso ${tentativa}: ${sequence.length} numeros`);
   }
  console.log(sequence.join(" "));
  console.log("");
}
