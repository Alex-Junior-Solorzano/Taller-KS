import React, { useEffect, useState } from 'react'
import "../App.css";

const Clock = () => {
  const [seconds, setSeconds] = useState(0);//Variable de estado 
  
  let time = new Date();// obtiene la fecha actual, incluida la hora minutos y segundos
  let horas = time.getHours();// de la variable anterior deja solo el numero de horas 
  let minutos = time.getMinutes();// de la variable anterior deja solo el numero de minutos
  let segundos = time.getSeconds();// de la variable anterior deja solo el numero de segundos
  let porcentajeHoras = 0;
  let porcentajeMinutos = 0;
  let porcentajeSegundos = 0;

  if (horas <= 12) { 
    porcentajeHoras = (horas / 12 * 360);// para sacar los grados de la hora 
  } else {
    porcentajeHoras = ((horas-12) / 12 * 360); // en caso de que el formato sea de 24 horas
  }
  porcentajeHoras += minutos / 60 * 30;// para agregar los grados que faltan entre cada hora
  porcentajeMinutos = minutos / 60 * 360;// para sacar los grados de los minutos
  porcentajeSegundos = segundos / 60 * 360;// para sacar los grados de los segundos
  

  useEffect(() => { // permite realizar efectos secundarios en componentes de función
    const interval = setInterval(() => { //llama a una función o ejecuta un fragmento de código de forma reiterada, con un retardo de tiempo fijo entre cada llamada.
      setSeconds(seconds => seconds + 1);
    }, 1000);//1000 = a 1 segundo
    return () => clearInterval(interval);//Cancela la acción reiterativa iniciada con setInterval
  }, []);

  return (
    <>
      <script>
        {seconds}
      </script>
      <div className="clock"  >
        <div className="hand hour" data-hour-hand style={{ '--rotation': porcentajeHoras }}></div>
        <div className="hand minute" data-minute-hand style={{ '--rotation': porcentajeMinutos }}></div>
        <div className="hand second" data-second-hand style={{ '--rotation': porcentajeSegundos }}></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
    </>
  )
}

export default Clock