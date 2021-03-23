
function converter(){
   var anos_luz = document.getElementById('entrada').value;
   var anos_luz_num = parseFloat(anos_luz);
   var quilometros = (anos_luz_num/0.00000000000010570);
   var quilometros_real = quilometros.toFixed(2);
   document.getElementById('saida').value = quilometros_real;
 }



