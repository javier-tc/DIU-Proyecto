import React, { useState } from 'react';
const diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

function App() {
  const [comidasSemana, setComidasSemana] = useState({
    lunes: { desayuno: [], almuerzo: [], cena: [] },
    martes: { desayuno: [], almuerzo: [], cena: [] },
    miércoles: { desayuno: [], almuerzo: [], cena: [] },
    jueves: { desayuno: [], almuerzo: [], cena: [] },
    viernes: { desayuno: [], almuerzo: [], cena: [] },
    sábado: { desayuno: [], almuerzo: [], cena: [] },
    domingo: { desayuno: [], almuerzo: [], cena: [] },
  });
  const [ingredientes, setIngredientes] = useState([]);

  const handleAgregarComida = (dia, tipoComida, comida) => {
    // Copia el estado actual de comidasSemana
    const nuevoComidasSemana = { ...comidasSemana };
    // Agrega la comida al día y tipo de comida especificados
    nuevoComidasSemana[dia][tipoComida].push(comida);
    // Actualiza el estado con las comidas agregadas
    setComidasSemana(nuevoComidasSemana);
  };

  const obtenerIngredientes = () => {
    const ingredientesObtenidos = [];
    for (const dia in comidasSemana) {
      for (const tipoComida in comidasSemana[dia]) {
        ingredientesObtenidos.push(...comidasSemana[dia][tipoComida]);
      }
    }
    setIngredientes(ingredientesObtenidos);
  };

  return (
    <div className="container">
      <div className="dias-container">
        {diasSemana.map((dia) => (
          <div key={dia} className="dia">
            <h2 className='texto-dia'>{dia.charAt(0).toUpperCase() + dia.slice(1)}</h2> {}
            <div className="comida-container">
              <h3 className='texto-comida'>Desayuno</h3>
              <input className='input-comida'
                type="text"
                placeholder="Agregar comida"
                onChange={(e) => handleAgregarComida(dia, 'desayuno', e.target.value)}
              />
            </div>
            <div className="comida-container">
              <h3 className='texto-comida'>Almuerzo</h3>
              <input className='input-comida'
                type="text"
                placeholder="Agregar comida"
                onChange={(e) => handleAgregarComida(dia, 'almuerzo', e.target.value)}
              />
            </div>
            <div className="comida-container">
              <h3 className='texto-comida'>Cena</h3>
              <input className='input-comida'
                type="text"
                placeholder="Agregar comida"
                onChange={(e) => handleAgregarComida(dia, 'cena', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="obtener-ingredientes" onClick={obtenerIngredientes}>Obtener ingredientes</button>
      <ul className="ingredientes-list">
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
        <a href="../presupuesto">Obtener Presupuesto</a>
      </ul>
    </div>
  );
}

export default App;