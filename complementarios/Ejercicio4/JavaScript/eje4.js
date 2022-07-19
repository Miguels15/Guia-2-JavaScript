var cifras;
//contadores
var cImpares = 0;
var cPares = 0;
var sPares = 0;
var sImpares = 0;
var sCifras = 0;
//declaramos una bandera que esta nos servira para el ciclo do while, y tambien para el desarrollo del ejercicio
var bandera = false;

do{
var nume = prompt("Porfavor digite un numero entero: ");
if(!(nume)){
    alert("No deje el espacio en blanco");
}else{
    if(isNaN(nume) || (nume % 1 != 0)){
        alert("Digite un dato valido.");
    }else{
      if(nume >  0){
        cifras = nume.length ;
        document.write("<h3> El numero tiene: "+cifras+" cifras </h3>");

        for(i = nume; i > 0; i--){
            sCifras += i * 1;
            if(i % 2 == 0){
                cPares++;
                sPares += i * 1;
            }else{
                cImpares++;
                sImpares += i * 1;
            }
        }
          document.write("<h3> Cantidad de cifras impares: "+cImpares+"</h3>");
          document.write("<h3> Cantidad de cifras pares: "+cPares+"</h3>");
          document.write("<h3> La suma de cifras impares: "+sImpares+"</h3>");
          document.write("<h3> La suma de cifras pares: "+sPares+"</h3>");
          document.write("<h3> La suma de todas las cifras: "+sCifras+"</h3>");
        if(sPares > sImpares){
            document.write("<h3> La cifra mayor son los pares: "+sPares+"</h3>");
            document.write("<h3> La cifra Menor son los impares: "+sImpares+"</h3>");
            bandera = true;
        }else{
            document.write("<h3> La cifra mayor son los Impares: "+sImpares+"</h3>");
            document.write("<h3> La cifra Menor son los pares: "+sPares+"</h3>");
            bandera = true;
        }
      }else if(nume < 0){
        cifras = nume.length - 1;
        document.write("<h3> Cantidad de cifras que tiene el numero "+cifras+"</h3>");
        for(i = nume; i < 0; i++){
            sCifras += i * 1;
            if(i % 2 == 0){
                cPares++;
                sPares += i * 1;
            }else{
                cImpares++;
                sImpares += i * 1;
            }
        }
          document.write("<h3> Cantidad de cifras impares: "+cImpares+"</h3>");
          document.write("<h3> Cantidad de cifras pares: "+cPares+"</h3>");
          document.write("<h3> La suma de cifras impares: "+sImpares+"</h3>");
          document.write("<h3> La suma de cifras pares: "+sPares+"</h3>");
          document.write("<h3> La suma de todas las cifras: "+sCifras+"</h3>");
        if(sPares > sImpares){
            document.write("<h3> La cifra mayor son los pares: "+sPares+"</h3>");
            document.write("<h3> La cifra Menor son los impares: "+sImpares+"</h3>");
            bandera = true;
        }else{
            document.write("<h3> La cifra mayor son los Impares: "+sImpares+"</h3>");
            document.write("<h3> La cifra Menor son los pares: "+sPares+"</h3>");
            bandera = true;
        }
      }else{

        document.write("<h3> Cantidad de cifras que tiene el numero 0</h3>");
        document.write("<h3> Cantidad de cifras impares: 0</h3>");
        document.write("<h3> Cantidad de cifras pares: 0</h3>");
        document.write("<h3> La suma de cifras impares: 0</h3>");
        document.write("<h3> La suma de cifras pares: 0</h3>");
        document.write("<h3> La suma de todas las cifras: 0</h3>");
        document.write("<h3> No hay cifra mayor ni menor</h3>");
        bandera = true;
      }
    }
}
}while(bandera == false);

