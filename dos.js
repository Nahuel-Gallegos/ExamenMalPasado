/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{


	var marca;
	var precio;
	var peso;
	var tipo;
	var continuar;

	var acumuladorPeso = 0;

	var flagMarca = true;
	var precioMaximo;
	var marcaMasCaraLiquido;


	var flagSolido = true;
	var precioMasBarato;
	var marcaMasBarataSolidos;



	do
	{
		marca = prompt ("Ingrese la marca del producto:");
		while(!isNaN(marca))
		{
			marca = prompt("Error, reingrese la marca del producto:");
		}

		precio = prompt ("Ingrese precio:");
		precio  = parseInt (precio);
		while(precio < 20 || precio > 1000 || isNaN(precio))
		{
			precio = prompt ("Error, reingrese precio:");
			precio = parseInt (precio);
		}

		peso = prompt ("Ingrese peso del producto:");
		peso  = parseInt (peso);
		while(peso < 2 || peso > 400 || isNaN(peso))
		{
			peso = prompt ("Error, reingrese peso del producto:");
			peso = parseInt (peso);
		}

		tipo = prompt ("Ingrese tipo de producto:");//solido o líquido)
		while(tipo != "solido" && tipo != "liquido")
		{
			tipo = prompt ("Error, reingrese tipo de producto:");
		}

		acumuladorPeso = acumuladorPeso + peso;
		console.log("Peso total " + acumuladorPeso);

		if(flagMarca == true || precioMaximo<precio && tipo == "liquido")
		{
			
			precioMaximo = precio;
			marcaMasCaraLiquido = marca;
			flagMarca = false;
		}
		else
		{
			if(precioMasBarato>precio || flagSolido == true)
			{
				flagSolido = false;
				precioMasBarato = precio;
				marcaMasBarataSolidos = marca;
			}
		}
	console.log("marca mas cara liquido " + marcaMasCaraLiquido + precioMaximo);
		console.log ("marca mas barata solido " + marcaMasBarataSolidos+ precioMasBarato);
		continuar = confirm ("Desea continuar?");
	}while(continuar == true)


	document.write ("El peso total de la compra es " + acumuladorPeso + " kg. <br>");

	if(flagMarca == false)
	{
		document.write("La marca mas cara de los liquidos es " + marcaMasCaraLiquido + ". <br>" );
	}
	else
	{
		document.write("No hay productos liquidos en la compra. <br>");
	}

	if(flagSolido == false)
	{
		document.write ("La marca mas barata de los solidos es "  +marcaMasBarataSolidos + ".");
	}
	else
	{
		document.write ("No hay productos solidos en la compra.");
	}
/*
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/













////////////////////////////////// fuera del while



}


/*
	var marca;
	var peso;
	var precio;
	var tipo;
	var respuesta;
	var acumuladorPeso;
	var marcaLiquidoCaro;
	var precioLiquidoIngresaso;
	var banderaPrimerLiquido;
	var banderaSolidoMasBarato;
	var marcaMasBaratoSolido;
	var precioMasBaratoSolido;

	banderaSolidoMasBarato=0;
	banderaPrimerLiquido=0;
	acumuladorPeso=0;
	

	respuesta="si";

	while(respuesta=="si")
	{
		marca=prompt("Ingrese por favor la marca");//puede ser numero
		while(marca==" ")
		{
			tipo=prompt("Error, ingrese una marca valida");
		}

		tipo=prompt("Ingrese por favor el tipo");
		while(!isNaN(tipo)||tipo!="solido"&&tipo!="liquido")
		{
			tipo=prompt("Error, ingrese un tipo valido");
		}

		peso=prompt("Ingrese el peso en kilogramos");
		peso=parseInt(peso);
		while(isNaN(peso)||peso<1)
		{
			
			peso=prompt("Error, Ingrese el peso en kilogramos");
			peso=parseInt(peso);
		}

		precio=prompt("Ingrese el precio por favor");
		precio=parseInt(precio);
		while(isNaN(precio)||precio<1)
		{
			precio=prompt("Ingrese el precio por favor");
			precio=parseInt(precio);

		}

		acumuladorPeso=acumuladorPeso+peso;		
  		

		switch(tipo)
		{
			case "liquido":
				if(banderaPrimerLiquido==0)
				{
					marcaLiquidoCaro=marca;
					precioLiquidoIngresaso=precio;
					banderaPrimerLiquido=1;
				}
				else
				{
					if(precio>precioLiquidoIngresaso)
					{
						marcaLiquidoCaro=marca;
						precioLiquidoIngresaso=precio;
					}
				}
				break;
			case "solido":
				if(banderaSolidoMasBarato==0)
				{
					marcaMasBaratoSolido=marca;
					precioMasBaratoSolido=precio;
					banderaSolidoMasBarato=1;
				}
				else
				{
					if(precio<precioMasBaratoSolido)
					{
						marcaMasBaratoSolido=marca;
						precioMasBaratoSolido=precio;
					}
				}
				break;
					
		}//cierre switch

		
		respuesta=prompt("Desea seguir?")
	} //cierre while



 console.log("El peso total de la compra es: "+acumuladorPeso); 					
 console.log("La marca del más caro de los liquidos es: "+marcaLiquidoCaro);
 console.log("La marca del más barato de los solidos es: "+marcaMasBaratoSolido);
*/