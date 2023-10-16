import React from 'react';

function DiaComidas({ dia, comidas }) {
  return (
    <div className="dia">
      <h2>{dia}</h2>
      <ul>
        {Array(3).fill(null).map((_, index) => (
          <li key={index}>{comidas[index]}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const semana = [
    {comidas: ['Desayuno', 'Almuerzo', 'Cena']},
    { dia: 'Lunes', comidas: ['', '', ''] },
    { dia: 'Martes', comidas:  ['', '', ''] },
    { dia: 'Miércoles', comidas:  ['', '', ''] },
    { dia: 'Jueves', comidas:  ['', '', ''] },
    { dia: 'Viernes', comidas:  ['', '', ''] },
    { dia: 'Sábado', comidas:  ['', '', ''] },
    { dia: 'Domingo', comidas: ['', '', ''] },
  ];

  return (
    <div className="calendario">
      {semana.map((item, index) => (
        <DiaComidas key={index} dia={item.dia} comidas={item.comidas} />
      ))}
    </div>
  );
}

export default App;
