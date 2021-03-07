/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var sexo;
	var lugar; //“bariloche”, “cataratas” o “salta”),
	var temporada; //“otoño”,”invierno, “verano,”primavera”),
	var cantidadPersonas;
	var continuar = true;

	var lugarMasElegido;
	var contadorBariloche = 0;
	var contadorSalta = 0;
	var contadorCataratas = 0;

	var sexoTitularMasPasajeros;
	var flagTitularMasPasajeros = true;
	var maximoPasajeros;

	var contadorInvierno = 0;
	var acumuladorPersonasInvierno = 0;
	var promedioPersonasInvierno;

	while(continuar == true)
	{
		sexo = prompt ("Ingrese sexo:");
		while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
		{
			sexo = prompt ("Error, reingrese sexo:");
		}

		
		lugar = prompt ("Ingrese lugar de destino:");
		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta")
		{
			lugar = prompt ("Error, reingrese lugar de destino:");
		}

		temporada = prompt ("Ingrese temporada en la que viajara:");
		while(temporada != "otoño" && temporada != "invierno" && temporada != "primavera")
		{
			temporada = prompt ("Error, reingrese temporada en la que viajara:");
		}

		cantidadPersonas = prompt ("Ingrese cantidad de personas que viajaran:");
		cantidadPersonas  = parseInt (cantidadPersonas);
		while(cantidadPersonas < 0 || cantidadPersonas > 100 || isNaN(cantidadPersonas))
		{
			cantidadPersonas = prompt ("Error, reingrese cantidad de personas que viajaran:");
			cantidadPersonas = parseInt (cantidadPersonas);

		}

		switch(lugar)//“bariloche”, “cataratas” o “salta”),
		{
			case "bariloche":
				contadorBariloche++;
				break;

			case "cataratas":
				contadorCataratas++;
				break;

			case "salta":
				contadorSalta++;
				break;
		}


		if(flagTitularMasPasajeros == true || maximoPasajeros<cantidadPersonas)
		{
			flagTitularMasPasajeros = false;
			sexoTitularMasPasajeros = sexo;
			maximoPasajeros = cantidadPersonas;
		}
		console.log(sexoTitularMasPasajeros + "<br>" +
			"maximo de pasajeros " +maximoPasajeros);
		if(temporada == "invierno")
		{
			contadorInvierno++;
			acumuladorPersonasInvierno = acumuladorPersonasInvierno + cantidadPersonas;
		}
			console.log("Bariloche " + contadorBariloche + "<br>"+
				"Cataratas " + contadorCataratas + "<br>" +
				"Salta " + contadorSalta);
		console.log("Personas invierno " + acumuladorPersonasInvierno);

		continuar = confirm ("Desea ingresar mas pasajero?");
	}
		//b)el sexo de titular que lleva más pasajeros.
		//c)el promedio de personas por viaje,  que viajan en invierno
//////////////////////////////////////////////





	if(contadorBariloche> contadorSalta && contadorBariloche > contadorCataratas)
	{
		lugarMasElegido = "Bariloche";
	}
	else
	{
		if(contadorSalta> contadorBariloche && contadorSalta > contadorCataratas)
		{
			lugarMasElegido = "Salta";
		}
		else
		{
			lugarMasElegido = "Cataratas";
		}
	}
	

	if(contadorInvierno > 0)
	{
		promedioPersonasInvierno = acumuladorPersonasInvierno / contadorInvierno;
	}
	else
	{
		promedioPersonasInvierno = 0;
	}

/*a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno

*/

document.write ("El lugar mas elegido es: " + lugarMasElegido + ". <br>" +
	"El sexo del titular que lleva mas pasajeros es: " + sexoTitularMasPasajeros + ". <br>" +
	"El promedio de personas por viaje en invierno es de: " + promedioPersonasInvierno + ".");
	










}










/*
var respuesta;
	var sexoTitular;
	var lugarIngresado;
	var temporadaIngresada;
	var cantidadPasajeros;

	var contadorBariloche;
	var contadorSalta;
	var contadorCataratas;
	var lugarMasElegido;
	var banderaMaximosPasajeros;
	var mayorCantidadPasajeros;
	var sexoMasPasajeros;
	var contadorViajesInvierno;
	var acumuladorPersonasInvierno;
	var promedioPersonasInvierno;

	respuesta="si";
	banderaMaximosPasajeros=0;
	contadorCataratas=0;
	contadorSalta=0;
	contadorBariloche=0;
	contadorViajesInvierno=0;
	acumuladorPersonasInvierno=0;


	while(respuesta=="si")
	{
		sexoTitular=prompt("Ingrese el sexo del titular 'f' para femenino, 'm' para masculino.");
		while(isNaN(sexoTitular)==false || sexoTitular!="f" && sexoTitular!="m")
		{
			sexoTitular=prompt("ERROR, ingrese un sexo valido");
		}

		lugarIngresado=prompt("Ingrese el lugar, sea 'cataratas', 'bariloche' o 'salta' ");
		while(isNaN(lugarIngresado)==false || lugarIngresado!="cataratas" && lugarIngresado!="bariloche" && lugarIngresado!="salta")
		{
			lugarIngresado=prompt("ERROR, ingrese el lugar correcto");
		}

		temporadaIngresada=prompt("Ingrese la temporada del año (estacion)");
		while(isNaN(temporadaIngresada)==false || temporadaIngresada!="otoño" && temporadaIngresada!="primavera" && temporadaIngresada!="verano" && temporadaIngresada!="invierno")
		{
			temporadaIngresada=prompt("ERROR, ingrese una estacion del año");
		}

		cantidadPasajeros=prompt("Ingrese la cantidad de pasajeros");
		cantidadPasajeros=parseInt(cantidadPasajeros);
		while(isNaN(cantidadPasajeros)==true || cantidadPasajeros<0)
		{
			cantidadPasajeros=prompt("ERROR, ingrese una cantidad correcta de pasajeros");
			cantidadPasajeros=parseInt(cantidadPasajeros);
		}


		//contadores de destinos
		switch(lugarIngresado)
		{
			case "bariloche":
				contadorBariloche++;
				break;
			case "salta":
				contadorSalta++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
		}


		//sexo del titular con mayor cantidad de pasajeros
		if(banderaMaximosPasajeros==0)
		{
			sexoMasPasajeros=sexoTitular;
			mayorCantidadPasajeros=cantidadPasajeros;

			banderaMaximosPasajeros++;
		}
		else
		{
			if(mayorCantidadPasajeros<cantidadPasajeros)
			{
				sexoMasPasajeros=sexoTitular;
				mayorCantidadPasajeros=cantidadPasajeros;
			}
		}

		//promedio de personas por viaje en invierno
		switch(temporadaIngresada)
		{
			case "invierno":
				contadorViajesInvierno++;
				acumuladorPersonasInvierno=acumuladorPersonasInvierno+cantidadPasajeros;
		}



		respuesta=prompt("Ingrese 'si' si desea ingresar otra estadia");
	}//fin del while principal


	//comparo contadores de destinos
	if(contadorCataratas>contadorSalta && contadorCataratas>contadorBariloche)
	{
		lugarMasElegido="Cataratas";
	}
	else
	{
		if(contadorSalta>contadorBariloche)
		{
			lugarMasElegido="Salta";
		}
		else
		{
			lugarMasElegido="Bariloche";
		}
	}

	document.write("El destino mas elegido es: "+lugarMasElegido+"<br>");
	document.write("El sexo del titular que lleva mas pasajeros es: "+sexoMasPasajeros+"<br>");


	//promedio de personas por viaje en invierno
	promedioPersonasInvierno=acumuladorPersonasInvierno / contadorViajesInvierno ;

	if(contadorViajesInvierno>0)
	{
		document.write("El promedio de personas por viaje en invierno es de: "+promedioPersonasInvierno+"<br>");
	}


*/