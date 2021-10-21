$('#btnValorEncriptado').bind('click',function(){
        
    let value = $('#inputMensaje').val();
    
     let binary = function(val){
        let sb = '';
        for(let i=0; i<val.length; i++){
            sb += 0 + val.charCodeAt(i).toString(2);
        }
        return sb;
    }
    $('#Resultado').val(binary(value));
    let Arreglo1 = Array.from(binary(value));

    let value1 = $('#inputLlave').val();
    
     let binary1 = function(val){
        let sb1 = '';
        for(let i=0; i<val.length; i++){
            sb1 += 0 + val.charCodeAt(i).toString(2);
        }
        return sb1;
    }
    $('#Resultado1').val(binary(value1));
    let Arreglo2 = Array.from(binary(value1));

    var ArregloFinal = new Array(Arreglo2.length)
    console.log(Arreglo2);
    for(let i=0; i<ArregloFinal.length; i++){
        if (Arreglo1[i] == Arreglo2[i]) {
            ArregloFinal[i] = 0;
         } else
         ArregloFinal[i] = 1;
    }

    console.log(ArregloFinal);
    var resfinal = []
  for (let index = 0; index < ArregloFinal.length; index++) {
      let arrayaux = "";
    for (let index2 = 0; index2 <8 ; index2++) {
    arrayaux +=  ArregloFinal[index];
  
    index++;    
    }   
    resfinal.push(arrayaux);
    index--;  
  }
    $('#ResultadoFinal').val(resfinal);
    /*let binValue =  $('#ResultadoFinal').val(),
    sd = '';
let str = function(val){
let strVal = val.split(',');
let ss = '';
for(let i=0; i<strVal.length-1; i++){
 ss += String.fromCharCode(binToDec(strVal[i])); 
}
return ss;
}*/
var letasc ="";
for (let i = 0; i < resfinal.length; i++) {
    if (resfinal[i] == "01000011") {letasc = letasc + 'C'}
    if (resfinal[i] == "01000001") {letasc = letasc + 'A'}
    if (resfinal[i] == "01000010") {letasc = letasc + 'B'}
    if (resfinal[i] == "01000100") {letasc = letasc + 'D'}
    if (resfinal[i] == "01000101") {letasc = letasc + 'E'}
    if (resfinal[i] == "01000110") {letasc = letasc + 'F'}
    if (resfinal[i] == "01000111") {letasc = letasc + 'G'}
    if (resfinal[i] == "01001000") {letasc = letasc + 'H'}
    if (resfinal[i] == "01001001") {letasc = letasc + 'I'}
    if (resfinal[i] == "01001010") {letasc = letasc + 'J'}
    if (resfinal[i] == "01001011") {letasc = letasc + 'K'}
    if (resfinal[i] == "01001100") {letasc = letasc + 'L'}
    if (resfinal[i] == "01001101") {letasc = letasc + 'M'}
    if (resfinal[i] == "01001110") {letasc = letasc + 'N'}
    if (resfinal[i] == "01001111") {letasc = letasc + 'O'}
    if (resfinal[i] == "01010000") {letasc = letasc + 'P'}
    if (resfinal[i] == "01010001") {letasc = letasc + 'Q'}
    if (resfinal[i] == "01010010") {letasc = letasc + 'R'}
    if (resfinal[i] == "01010011") {letasc = letasc + 'S'}
    if (resfinal[i] == "01010100") {letasc = letasc + 'T'}
    if (resfinal[i] == "01010101") {letasc = letasc + 'U'}
    if (resfinal[i] == "01010110") {letasc = letasc + 'V'}
    if (resfinal[i] == "01010111") {letasc = letasc + 'W'}
    if (resfinal[i] == "01011000") {letasc = letasc + 'X'}
    if (resfinal[i] == "01011001") {letasc = letasc + 'Y'}
    if (resfinal[i] == "01011010") {letasc = letasc + 'Z'}
    if (resfinal[i] == "01100001") {letasc = letasc + 'a'}
    if (resfinal[i] == "01100010") {letasc = letasc + 'b'}
    if (resfinal[i] == "01100011") {letasc = letasc + 'c'}
    if (resfinal[i] == "01100100") {letasc = letasc + 'd'}
    if (resfinal[i] == "01100101") {letasc = letasc + 'e'}
    if (resfinal[i] == "01100110") {letasc = letasc + 'f'}
    if (resfinal[i] == "01100111") {letasc = letasc + 'g'}
    if (resfinal[i] == "01101000") {letasc = letasc + 'h'}
    if (resfinal[i] == "01101001") {letasc = letasc + 'i'}
    if (resfinal[i] == "01101010") {letasc = letasc + 'j'}
    if (resfinal[i] == "01101011") {letasc = letasc + 'k'}
    if (resfinal[i] == "01101100") {letasc = letasc + 'l'}
    if (resfinal[i] == "01101101") {letasc = letasc + 'm'}
    if (resfinal[i] == "01101110") {letasc = letasc + 'n'}
    if (resfinal[i] == "01101111") {letasc = letasc + 'o'}
    if (resfinal[i] == "01110000") {letasc = letasc + 'p'}
    if (resfinal[i] == "01110001") {letasc = letasc + 'q'}
    if (resfinal[i] == "01110010") {letasc = letasc + 'r'}
    if (resfinal[i] == "01110011") {letasc = letasc + 's'}
    if (resfinal[i] == "01110100") {letasc = letasc + 't'}
    if (resfinal[i] == "01110101") {letasc = letasc + 'u'}
    if (resfinal[i] == "01110110") {letasc = letasc + 'v'}
    if (resfinal[i] == "01110111") {letasc = letasc + 'w'}
    if (resfinal[i] == "01111000") {letasc = letasc + 'x'}
    if (resfinal[i] == "01111001") {letasc = letasc + 'y'}
    if (resfinal[i] == "01111010") {letasc = letasc + 'z'}
    if (resfinal[i] == "00100000") {letasc = letasc + ' '}
    
    //Numbers:
    if (resfinal[i] == "00110000") {letasc = letasc + '0'}
    if (resfinal[i] == "00110001") {letasc = letasc + '1'}
    if (resfinal[i] == "00110010") {letasc = letasc + '2'}
    if (resfinal[i] == "00110011") {letasc = letasc + '3'}
    if (resfinal[i] == "00110100") {letasc = letasc + '4'}
    if (resfinal[i] == "00110101") {letasc = letasc + '5'}
    if (resfinal[i] == "00110110") {letasc = letasc + '6'}
    if (resfinal[i] == "00110111") {letasc = letasc + '7'}
    if (resfinal[i] == "00111000") {letasc = letasc + '8'}
    if (resfinal[i] == "00111001") {letasc = letasc + '9'}
    
    //Special Characters:
    if (resfinal[i] == "00100001") {letasc = letasc + '!'}
    if (resfinal[i] == "00100010") {letasc = letasc + '"'}
    if (resfinal[i] == "00100011") {letasc = letasc + '#'}
    if (resfinal[i] == "00100100") {letasc = letasc + '$'}
    if (resfinal[i] == "00100101") {letasc = letasc + '%'}
    if (resfinal[i] == "00100110") {letasc = letasc + '&'}
    if (resfinal[i] == "00100111") {letasc = letasc + "'"}
    if (resfinal[i] == "00101000") {letasc = letasc + '('}
    if (resfinal[i] == "00101001") {letasc = letasc + ')'}
    if (resfinal[i] == "00101010") {letasc = letasc + '*'}
    if (resfinal[i] == "00101011") {letasc = letasc + '+'}
    if (resfinal[i] == "00101100") {letasc = letasc + ','}
    if (resfinal[i] == "00101101") {letasc = letasc + '-'}
    if (resfinal[i] == "00101110") {letasc = letasc + '.'}
    if (resfinal[i] == "00101111") {letasc = letasc + '/'}
    if (resfinal[i] == "00111010") {letasc = letasc + ':'}
    if (resfinal[i] == "00111011") {letasc = letasc + ';'}
    if (resfinal[i] == "00111100") {letasc = letasc + '<'}
    if (resfinal[i] == "00111101") {letasc = letasc + '='}
    if (resfinal[i] == "00111110") {letasc = letasc + '>'}
    if (resfinal[i] == "00111111") {letasc = letasc + '?'}
    if (resfinal[i] == "01000000") {letasc = letasc + '@'}
    if (resfinal[i] == "01011011") {letasc = letasc + '['}
    if (resfinal[i] == "01011100") {letasc = letasc + "'\'"}
    if (resfinal[i] == "01011101") {letasc = letasc + ']'}
    if (resfinal[i] == "01011110") {letasc = letasc + '^'}
    if (resfinal[i] == "01011111") {letasc = letasc + '_'}
    if (resfinal[i] == "01100000") {letasc = letasc + '`'}
    if (resfinal[i] == "01111011") {letasc = letasc + '{'}
    if (resfinal[i] == "01111100") {letasc = letasc + '|'}
    if (resfinal[i] == "01111101") {letasc = letasc + '}'}
    if (resfinal[i] == "01111110") {letasc = letasc + '~'}
    if (resfinal[i] == "10000000") {letasc = letasc + '€'}
    if (resfinal[i] == "10100001") {letasc = letasc + '¡'}
    if (resfinal[i] == "10100010") {letasc = letasc + '¢'}
    if (resfinal[i] == "10100011") {letasc = letasc + '£'}
    if (resfinal[i] == "10100100") {letasc = letasc + '¤'}
    if (resfinal[i] == "10100101") {letasc = letasc + '¥'}
    if (resfinal[i] == "10100110") {letasc = letasc + '¦'}
    if (resfinal[i] == "10100111") {letasc = letasc + '§'}
    if (resfinal[i] == "10100111") {letasc = letasc + '¨'}
    if (resfinal[i] == "10101001") {letasc = letasc + '©'}
    if (resfinal[i] == "10101010") {letasc = letasc + 'ª'}
    if (resfinal[i] == "10101011") {letasc = letasc + '«'}
    if (resfinal[i] == "10101100") {letasc = letasc + '¬'}
    if (resfinal[i] == "10101101") {letasc = letasc + '­'}
    if (resfinal[i] == "10101110") {letasc = letasc + '®'}
    if (resfinal[i] == "10101111") {letasc = letasc + '¯'}
    if (resfinal[i] == "10110000") {letasc = letasc + '°'}
    if (resfinal[i] == "10110001") {letasc = letasc + '±'}
    if (resfinal[i] == "10110010") {letasc = letasc + '²'}
    if (resfinal[i] == "10110011") {letasc = letasc + '³'}
    if (resfinal[i] == "10110100") {letasc = letasc + '´'}
    if (resfinal[i] == "10110101") {letasc = letasc + 'µ'}
    if (resfinal[i] == "10110110") {letasc = letasc + '¶'}
    if (resfinal[i] == "10110111") {letasc = letasc + '·'}
    if (resfinal[i] == "10111000") {letasc = letasc + '¸'}
    if (resfinal[i] == "10111001") {letasc = letasc + '¹'}
    if (resfinal[i] == "10111010") {letasc = letasc + 'º'}
    if (resfinal[i] == "10111011") {letasc = letasc + '»'}
    if (resfinal[i] == "10111100") {letasc = letasc + '¼'}
    if (resfinal[i] == "10111101") {letasc = letasc + '½'}
    if (resfinal[i] == "10111110") {letasc = letasc + '¾'}
    if (resfinal[i] == "10111111") {letasc = letasc + '¿'}
    if (resfinal[i] == "11000000") {letasc = letasc + 'À'}
    if (resfinal[i] == "11000001") {letasc = letasc + 'Á'}
    if (resfinal[i] == "11000010") {letasc = letasc + 'Â'}
    if (resfinal[i] == "11000011") {letasc = letasc + 'Ã'}
    if (resfinal[i] == "11000100") {letasc = letasc + 'Ä'}
    if (resfinal[i] == "11000101") {letasc = letasc + 'Å'}
    if (resfinal[i] == "11000110") {letasc = letasc + 'Æ'}
    if (resfinal[i] == "11000111") {letasc = letasc + 'Ç'}
    if (resfinal[i] == "11001000") {letasc = letasc + 'È'}
    if (resfinal[i] == "11001001") {letasc = letasc + 'É'}
    if (resfinal[i] == "11001010") {letasc = letasc + 'Ê'}
    if (resfinal[i] == "11001011") {letasc = letasc + 'Ë'}
    if (resfinal[i] == "11001100") {letasc = letasc + 'Ì'}
    if (resfinal[i] == "11001101") {letasc = letasc + 'Í'}
    if (resfinal[i] == "11001110") {letasc = letasc + 'Î'}
    if (resfinal[i] == "11001111") {letasc = letasc + 'Ï'}
    if (resfinal[i] == "11010000") {letasc = letasc + 'Ð'}
    if (resfinal[i] == "11010001") {letasc = letasc + 'Ñ'}
    if (resfinal[i] == "11010010") {letasc = letasc + 'Ò'}
    if (resfinal[i] == "11010011") {letasc = letasc + 'Ó'}
    if (resfinal[i] == "11010100") {letasc = letasc + 'Ô'}
    if (resfinal[i] == "11010101") {letasc = letasc + 'Õ'}
    if (resfinal[i] == "11010110") {letasc = letasc + 'Ö'}
    if (resfinal[i] == "11010111") {letasc = letasc + '×'}
    if (resfinal[i] == "11011000") {letasc = letasc + 'Ø'}
    if (resfinal[i] == "11011001") {letasc = letasc + 'Ù'}
    if (resfinal[i] == "11011010") {letasc = letasc + 'Ú'}
    if (resfinal[i] == "11011011") {letasc = letasc + 'Û'}
    if (resfinal[i] == "11011100") {letasc = letasc + 'Ü'}
    if (resfinal[i] == "11011101") {letasc = letasc + 'Ý'}
    if (resfinal[i] == "11011110") {letasc = letasc + 'Þ'}
    if (resfinal[i] == "11011111") {letasc = letasc + 'ß'}
    if (resfinal[i] == "11100000") {letasc = letasc + 'à'}
    if (resfinal[i] == "11100001") {letasc = letasc + 'á'}
    if (resfinal[i] == "11100010") {letasc = letasc + 'â'}
    if (resfinal[i] == "11100011") {letasc = letasc + 'ã'}
    if (resfinal[i] == "11100100") {letasc = letasc + 'ä'}
    if (resfinal[i] == "11100101") {letasc = letasc + 'å'}
    if (resfinal[i] == "11100110") {letasc = letasc + 'æ'}
    if (resfinal[i] == "11100111") {letasc = letasc + 'ç'}
    if (resfinal[i] == "11101000") {letasc = letasc + 'è'}
    if (resfinal[i] == "11101001") {letasc = letasc + 'é'}
    if (resfinal[i] == "11101010") {letasc = letasc + 'ê'}
    if (resfinal[i] == "11101011") {letasc = letasc + 'ë'}
    if (resfinal[i] == "11101100") {letasc = letasc + 'ì'}
    if (resfinal[i] == "11101101") {letasc = letasc + 'í'}
    if (resfinal[i] == "11101110") {letasc = letasc + 'î'}
    if (resfinal[i] == "11101111") {letasc = letasc + 'ï'}
    if (resfinal[i] == "11110000") {letasc = letasc + 'ð'}
    if (resfinal[i] == "11110001") {letasc = letasc + 'ñ'}
    if (resfinal[i] == "11110010") {letasc = letasc + 'ò'}
    if (resfinal[i] == "11110011") {letasc = letasc + 'ó'}
    if (resfinal[i] == "11110100") {letasc = letasc + 'ô'}
    if (resfinal[i] == "11110101") {letasc = letasc + 'õ'}
    if (resfinal[i] == "11110110") {letasc = letasc + 'ö'}
    if (resfinal[i] == "11110111") {letasc = letasc + '÷'}
    if (resfinal[i] == "11111000") {letasc = letasc + 'ø'}
    if (resfinal[i] == "11111001") {letasc = letasc + 'ù'}
    if (resfinal[i] == "11111010") {letasc = letasc + 'ú'}
    if (resfinal[i] == "11111011") {letasc = letasc + 'û'}
    if (resfinal[i] == "11111100") {letasc = letasc + 'û'}
    if (resfinal[i] == "11111101") {letasc = letasc + 'ý'}
    if (resfinal[i] == "11111110") {letasc = letasc + 'þ'}
    if (resfinal[i] == "11111111") {letasc = letasc + 'ÿ'}
    
}
$('#ResultadoAscii').val(letasc);
       
        //$('#ResultadoAscii').val(str(binValue.fromCharCode(binToDec(strVal[i]))));
        //binValue = String.fromCharCode(binToDec(strVal[i]));
        //$('#ResultadoAscii').val(binValue)
});

/*function binToDec(a){
    let value = String(a);
    if(value.search(/(\.)\d+/) != -1 ){
        let int = forFloat(value.slice(value.indexOf('.')+1)),
          float = forInt(value.slice(0,value.indexOf('.')));
        return int+float;
    }else{
        if(value.indexOf('.') != -1){
           return forInt(value.slice(0,value.indexOf('.')));
        }else{
           return forInt(value);
        }
    }
     function forInt(intValue){
        let int = 0
        for(let i=intValue.length-1; i>-1; i--){
           if(parseFloat( intValue.charAt((intValue.length-1)-i)) === 0){continue;}
           int += Math.pow(2,i);
        }
        return int;
    }
    function forFloat(floatValue){
        let float = 0
        for(let i=0; i<floatValue.length; i++){
           if(parseFloat( floatValue.charAt(i)) === 0){continue;}
           float += Math.pow(1/2,i+1);
        }
        return float;
    }
}
*/ 