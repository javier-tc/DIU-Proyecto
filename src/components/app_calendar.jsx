import React, { useState } from 'react';

const diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

const comidasPorDia = {
  desayuno: [
    'Tostadas con mermelada',
    'Cereal con leche',
    'Yogur con frutas',
    'Panqueques con miel',
    'Huevos revueltos',
    'Batido de proteínas',
    'Tostadas francesas',
    'Waffles con frutas',
    'Avena con nueces',
    'Sopa de fideos',
    'Pastel de manzana',
    'Tortillas con aguacate',
    'Crepes de chocolate',
    'Muffins de arándanos',
  ],
  almuerzo: [
    'Pollo asado',
    'Sándwich de jamón y queso',
    'Ensalada mixta',
    'Pizza de pepperoni',
    'Sopa de verduras',
    'Pasta con salsa alfredo',
    'Chuletas de cerdo',
    'Arroz frito',
    'Lasagna',
    'Sushi mixto',
    'Pollo a la parrilla',
    'Fajitas de carne de res',
    'Tacos de pescado',
    'Hamburguesa clásica',
  ],
  cena: [
    'Pasta con salsa alfredo',
    'Pollo a la parrilla',
    'Waffles con frutas',
    'Lasagna',
    'Fajitas de carne de res',
    'Tacos de pescado',
    'Hamburguesa clásica',
    'Albóndigas en salsa',
    'Ensalada césar con pollo',
    'Salmón a la parrilla',
    'Sopa de tomate',
    'Curry de pollo',
    'Sushi mixto',
    'Pizza vegetariana',
  ],
};

const ingredientesPorComida = {
  'Tostadas con mermelada': ['Pan tostado', 'Mermelada', 'Mantequilla'],
  'Cereal con leche': ['Cereal', 'Leche', 'Frutas'],
  'Yogur con frutas': ['Yogur', 'Frutas', 'Miel'],
  'Panqueques con miel': ['Panqueques', 'Miel', 'Mantequilla'],
  'Huevos revueltos': ['Huevos', 'Jamón', 'Queso', 'Tomate'],
  'Batido de proteínas': ['Proteína en polvo', 'Leche', 'Plátano', 'Miel'],
  'Tostadas francesas': ['Pan', 'Huevo', 'Leche', 'Canela', 'Miel'],
  'Waffles con frutas': ['Waffles', 'Frutas', 'Jarabe de arce'],
  'Avena con nueces': ['Avena', 'Leche', 'Nueces', 'Miel'],
  'Sopa de fideos': ['Fideos', 'Caldo', 'Zanahorias', 'Cebolla', 'Apio'],
  'Pastel de manzana': ['Manzanas', 'Azúcar', 'Canela', 'Masa para pastel'],
  'Tortillas con aguacate': ['Tortillas', 'Aguacate', 'Tomate', 'Cebolla', 'Limón'],
  'Crepes de chocolate': ['Crepe', 'Chocolate', 'Plátano', 'Fresas'],
  'Muffins de arándanos': ['Harina', 'Arándanos', 'Azúcar', 'Leche', 'Mantequilla'],
  'Pollo asado': ['Pollo', 'Papas', 'Ensalada'],
  'Sándwich de jamón y queso': ['Pan', 'Jamón', 'Queso', 'Lechuga', 'Tomate'],
  'Ensalada mixta': ['Lechuga', 'Tomate', 'Pepino', 'Aceitunas', 'Aderezo'],
  'Pizza de pepperoni': ['Masa de pizza', 'Salsa de tomate', 'Queso', 'Pepperoni'],
  'Sopa de verduras': ['Caldo de verduras', 'Zanahorias', 'Brócoli', 'Cebolla'],
  'Pasta con salsa alfredo': ['Pasta', 'Salsa Alfredo', 'Pollo', 'Parmesano'],
  'Chuletas de cerdo': ['Chuletas de cerdo', 'Arroz', 'Judías verdes'],
  'Arroz frito': ['Arroz', 'Pollo', 'Huevo', 'Vegetales'],
  'Lasagna': ['Pasta', 'Carne molida', 'Queso', 'Salsa de tomate'],
  'Sushi mixto': ['Arroz', 'Salmón', 'Aguacate', 'Alga marina'],
  'Pollo a la parrilla': ['Pollo', 'Verduras a la parrilla', 'Arroz'],
  'Fajitas de carne de res': ['Carne de res', 'Pimientos', 'Cebolla', 'Tortillas'],
  'Tacos de pescado': ['Filete de pescado', 'Tortillas de maíz', 'Col repollo', 'Salsa de crema'],
  'Hamburguesa clásica': ['Carne de res', 'Pan de hamburguesa', 'Lechuga', 'Tomate'],
  'Albóndigas en salsa': ['Albóndigas', 'Salsa de tomate', 'Puré de patatas'],
  'Ensalada césar con pollo': ['Lechuga romana', 'Pollo a la parrilla', 'Queso parmesano', 'Aderezo César'],
  'Salmón a la parrilla': ['Salmón', 'Eneldo', 'Limón', 'Mantequilla'],
  'Sopa de tomate': ['Tomates', 'Cebolla', 'Caldo de pollo', 'Crema'],
  'Curry de pollo': ['Pollo', 'Curry en polvo', 'Leche de coco', 'Arroz'],
  'Pizza vegetariana': ['Masa de pizza', 'Salsa de tomate', 'Queso', 'Pimientos', 'Champiñones'],
};

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

  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState({});

  const handleAgregarComida = (dia, tipoComida, comida) => {
    const nuevoComidasSemana = { ...comidasSemana };
    nuevoComidasSemana[dia][tipoComida].push(comida);
    setComidasSemana(nuevoComidasSemana);
  };

  const handleToggleSeleccion = (nombreIngrediente) => {
    setIngredientesSeleccionados((prev) => ({
      ...prev,
      [nombreIngrediente]: !prev[nombreIngrediente],
    }));
  };

  const obtenerIngredientes = () => {
    const ingredientesObtenidos = [];
    for (const dia in comidasSemana) {
      for (const tipoComida in comidasSemana[dia]) {
        comidasSemana[dia][tipoComida].forEach((comida) => {
          if (ingredientesPorComida[comida]) {
            ingredientesObtenidos.push(...ingredientesPorComida[comida]);
          }
        });
      }
    }
    setIngredientesSeleccionados(ingredientesObtenidos.reduce((acc, ingrediente) => {
      acc[ingrediente] = true;
      return acc;
    }, {}));
  };

  const ingredientes = Object.keys(ingredientesSeleccionados);

  return (
    <div className="container">
      <div className="dias-container">
        {diasSemana.map((dia) => (
          <div key={dia} className="dia">
            <h2 className='texto-dia'>{dia.charAt(0).toUpperCase() + dia.slice(1)}</h2>
            {Object.keys(comidasPorDia).map((tipoComida, index) => (
              <div className="comida-container" key={index}>
                <h3 className='texto-comida'>{tipoComida.charAt(0).toUpperCase() + tipoComida.slice(1)}</h3>
                <select
                  className='input-comida'
                  onChange={(e) => handleAgregarComida(dia, tipoComida, e.target.value)}
                >
                  <option value="">Selecciona una comida</option>
                  {comidasPorDia[tipoComida].map((comida, index) => (
                    <option key={index} value={comida}>
                      {comida}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="obtener-ingredientes" onClick={obtenerIngredientes}>
        Obtener ingredientes
      </button>
      <ul className="ingredientes-list">
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={ingredientesSeleccionados[ingrediente]}
                onChange={() => handleToggleSeleccion(ingrediente)}
              />
              {ingrediente}
            </label>
          </li>
        ))}
        <a href="../presupuesto">Obtener Presupuesto</a>
      </ul>
    </div>
  );
}

export default App;




