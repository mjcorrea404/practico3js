function mostrarInformacion(cadena) {
    if (cadena === cadena.toUpperCase()) {
      console.log("La cadena está formada solo por mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
      console.log("La cadena está formada solo por minúsculas");
    } else {
      console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas");
    }
  }
  mostrarInformacion("HOLA"); 
  mostrarInformacion("hola"); 
  mostrarInformacion("Hola");