import Paisajes from './Paisajes.jsx'
import Datos from '../data.js'

//Importo los hooks que necesito para el componente
import React, { useState, useEffect } from 'react';

function Titulo() {
    // Utilizo useState para mantener el índice de la imagen que está actualmente activa en el carrusel. Lo inicio en 0, es decir, con la primera imagen del array.
  const [indiceActivo, setIndiceActivo] = useState(0);

  // useEffect(() => {

  //   // Configuramos el temporizador dentro de useEffect para que cambie cada dos segundos

    const temporizador = setTimeout(() => {

      //Ésta función del useState, devuelve 0 si es la última imagen del objeto 'naturaleza', o la aumenta en 1 en caso contrario,para ello empleamos un operador ternario
      setIndiceActivo(indiceActivo => {
        const esUltimaImagen = indiceActivo + 1 === Datos.length;
        return esUltimaImagen ? 0 : indiceActivo + 1;
      });
    }, 2000); 

  //   //Ésta funcion de limpieza, limpia el temporizador,para evitar solapaciones de estados anteriores
  //   return () => clearTimeout(temporizador);
  // }, [indiceActivo]);

  return (
    
     <div className="title">
        <h2>Deslizador de Imágenes de Naturaleza</h2>
        <div className="underline"></div>   
        <div className="section-center">

        {Datos.map((imagen, indice) => {
          // Corregido: Uso correcto de paréntesis y 'return' en la función map
         // Para cada imagen en mi conjunto de datos, decido qué clase CSS aplicar basándome en su índice.
          // Por defecto, asigno a todas las imágenes la clase 'nextSlide'.
          let nombreClase = 'nextSlide'; 
          if (indice === indiceActivo) {

            // La imagen actualmente activa recibe la clase 'activeSlide'.
            nombreClase = 'activeSlide';
            
            //En caso de que el indice corresponda al anterior del índice activo,le asignamos el atributo de clase 'lastSlide'
            //En caso de que el índice sea el primer objeto del Array, y evaluamos la última imagen del array 'naturaleza', le asignamos a ésta última imagen, el atributo de clase 'lastSlide'
          } else if (indice === indiceActivo - 1 || (indiceActivo === 0 && indice === Datos.length - 1)) {
            nombreClase = 'lastSlide';
          } 
          return (
            <Paisajes
              key={imagen.id}
              id={imagen.id}
              nombreClase={nombreClase}
              src={imagen.src}
              img={imagen.img}
              categoria={imagen.categoria}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Titulo;
