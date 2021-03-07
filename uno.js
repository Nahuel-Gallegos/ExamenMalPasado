/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{


	var nombre;
	var peso;
	var sexo;
	var edad;

	var contadorFemenino =0;

	var contadorTotalPacientes =0;
	var acumuladorEdad =0;
	var promedioEdad;

	var flagMasculino = true;
	var pesoMaximoMasculino;
	var nombreMasculinoMaximo;

	for(var i = 0; i<5; i++)
	{


		nombre = prompt ("Ingrese el nombre del paciente:");

		while(!isNaN(nombre))
		{
			nombre = prompt("Error, reingrese el nombre del paciente:");
		}

		peso = prompt ("Ingrese peso:");
		peso  = parseInt (peso);

		while(peso < 45|| peso > 150 || isNaN(peso))
		{
			peso = prompt ("Error, reingrese peso:");
			peso = parseInt (peso);
		}

		sexo = prompt ("Ingrese el sexo del paciente:");

		while(!isNaN(sexo))
		{
			sexo = prompt("Error, reingrese el sexo del paciente:");
		}

		edad = prompt ("Ingrese edad:");
		edad  = parseInt (edad);

		while(edad < 18|| edad > 125 || isNaN(edad))
		{
			edad = prompt ("Error, reingrese edad:");
			edad = parseInt (edad);
		}

		if(sexo == "femenino")
		{
			contadorFemenino++;
		}
		else
		{
			if(flagMasculino == true || pesoMaximoMasculino<peso)
			{
				pesoMaximoMasculino = peso;
				nombreMasculinoMaximo = nombre;
				flagMasculino = false;
			}
		}
		contadorTotalPacientes++;
		acumuladorEdad = acumuladorEdad +edad;

}
//////////////////////

promedioEdad = acumuladorEdad / contadorTotalPacientes;

if(contadorFemenino > 0)
{
	document.write ("La cantidad de mujeres ingresadas es " + contadorFemenino + ".<br>");
}
else
{
	document.write ("No se ingresarion mujeres.<br>" );
}

document. write ("La edad promedio total es " + promedioEdad + ". <br>");

if(flagMasculino == false)
{
	document.write ("El hombre mas pesado es " + nombreMasculinoMaximo);
}
else
{
	document.write("No se ingresaron hombres.")
}

}



/*
var contador;
var nombreIngresado;
var pesoIngresado;
var edadIngresada;
var sexoIngresado;
var acumuladorEdad;
var contadorMujeres;
var promedioEdadTotal;
var banderaDelMasPesado;
var pesoDelMasPesado;
var nombreDelMasPesado;


acumuladorEdad=0;
banderaDelMasPesado=true;
contadorMujeres=0;
contador=0;


	for(contador=0;contador<3;contador++)
	{
		sexoIngresado=prompt("ingrese el sexo");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="femenino" && sexoIngresado!="masculino" && sexoIngresado!="no binario")
		{
			sexoIngresado=prompt("error, reingrese femenino, masculino o no binario");
		}

		pesoIngresado=prompt("ingrese el peso");
		pesoIngresado=parseInt(pesoIngresado);
		while(isNaN(pesoIngresado)==true || pesoIngresado<0|| pesoIngresado>150)
		{
			pesoIngresado=prompt("error, reingrese un peso valido");
			pesoIngresado=parseInt(pesoIngresado);
		}
		
		nombreIngresado=prompt("ingrese el nombre");		
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese un nombre valido");			
		}

		edadIngresada=prompt("ingrese la edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>110)
		{
			edadIngresada=prompt("error, reingrese una edad valida");
			edadIngresada=parseInt(edadIngresada);
		}

		switch(sexoIngresado)
		{
			case "femenino":
			contadorMujeres++;
			break;
		}

		if(sexoIngresado=="masculino")
		{
			if(banderaDelMasPesado==true)
			{
				pesoDelMasPesado=pesoIngresado;
				nombreDelMasPesado=nombreIngresado;
				banderaDelMasPesado=false;
			}
			else
			{
				if(pesoDelMasPesado<pesoIngresado)
				{
					pesoDelMasPesado=pesoIngresado;
					nombreDelMasPesado=nombreIngresado;
				}
			}
		}

	acumuladorEdad=acumuladorEdad+edadIngresada;

	}

	promedioEdadTotal=acumuladorEdad/contador;
	
	console.log("la edad promedio es: "+promedioEdadTotal);

	if(contadorMujeres==0)
	{
		console.log("no se ingresaron mujeres");
	}
	else
	{
		console.log("La cantidad de mujeres es: "+contadorMujeres);
	}

	if(banderaDelMasPesado==true)
	{
		console.log("no se ingresaron hombres");
	}
	else
	{
		console.log("el hombre mas pesado es: "+nombreDelMasPesado);
	}
*/