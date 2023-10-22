import React, { useState, useEffect } from 'react';

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
    'Tortillas con palta',
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
  'Tortillas con palta': ['Tortillas', 'palta', 'Tomate', 'Cebolla', 'Limón'],
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
  'Sushi mixto': ['Arroz', 'Salmón', 'palta', 'Alga marina'],
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

const preciosDeIngredientes = {
  "Pan tostado": 1000,
  "Mermelada": 1500,
  "Mantequilla": 2000,
  "Cereal": 1200,
  "Leche": 900,
  "Frutas": 2500,
  "Yogur": 1000,
  "Miel": 1500,
  "Panqueques": 1000,
  "Huevos": 1000,
  "Jamón": 1500,
  "Queso": 1500,
  "Tomate": 1000,
  "Proteína en polvo": 1500,
  "Plátano": 1000,
  "Waffles": 1000,
  "Canela": 1000,
  "Avena": 1200,
  "Nueces": 2000,
  "Sopa de fideos": 1500,
  "Caldo": 1000,
  "Zanahorias": 1000,
  "Cebolla": 1000,
  "Apio": 1000,
  "Manzanas": 1200,
  "Azúcar": 1000,
  "Canela": 1000,
  "Masa para pastel": 1500,
  "Tortillas": 1000,
  "Palta": 1200,
  "Limón": 1000,
  "Crepe": 1000,
  "Chocolate": 1500,
  "Fresas": 1200,
  "Harina": 1000,
  "Carne molida": 5000,
  "Salsa de tomate": 1000,
  "Salsa Alfredo": 1500,
  "Parmesano": 1500,
  "Chuletas de cerdo": 4500,
  "Arroz": 1000,
  "Judías verdes": 1200,
  "Pollo": 3000,
  "Huevo": 1000,
  "Vegetales": 1200,
  "Filete de pescado": 1500,
  "Tortillas de maíz": 1000,
  "Col repollo": 1000,
  "Salsa de crema": 1200,
  "Pan de hamburguesa": 1000,
  "Lechuga": 1000,
  "Aderezo": 1200,
  "Eneldo": 1000,
  "Salmón": 1000,
  "Caldo de pollo": 1000,
  "Crema": 1200,
  "Curry en polvo": 1000,
  "Leche de coco": 1500,
  "Pizza de pepperoni": 1000,
  "Pimientos": 1000,
  "Champiñones": 1200,
  "Pepino":1000,
  "Aceitunas": 1500,
  "Pan":1000,
  "Carne de res":10000,
  "Alga marina":700,
  "Verduras a la parrilla":1800,
  "Papas":1600,
  "Pasta":1200,
  "Fideos":1200,
  "Jarabe de arce":3400,
  "Masa de pizza":2000,
  "Pepperoni":2700,
  "Caldo de verduras":500,
  "Brócoli":1500,
  "Albóndigas":4600,
  "Puré de patatas":2000,
  "Lechuga romana":1500,
  "Queso parmesano":4000,
  "Aderezo César":2600,
  "Palta":2000,
  "Arándanos":5000,
  "Pollo a la parrilla":7000
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
  const [presupuesto, setPresupuesto] = useState(0);
  const [mostrarPrecios, setMostrarPrecios] = useState(false);

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
    console.log(ingredientesObtenidos);
    //alerta en caso de que no seleccione comidas
    if (ingredientesObtenidos.length == 0){
      window.alert('No hay comidas seleccionadas para esta semana. Selecciona una comida para obtener sus ingredientes.');
    }
    setIngredientesSeleccionados(ingredientesObtenidos.reduce((acc, ingrediente) => {
      acc[ingrediente] = true;
      return acc;
    }, {}));
  };

  const ingredientes = Object.keys(ingredientesSeleccionados);


  useEffect(() => {
    // Función para calcular el presupuesto en función de los ingredientes seleccionados
    calcularPresupuesto();
  }, [ingredientesSeleccionados]);

  const calcularPresupuesto = () => {
    let totalPresupuesto = 0;
    for (const ingrediente in ingredientesSeleccionados) {
      if (ingredientesSeleccionados[ingrediente]) {
        totalPresupuesto += preciosDeIngredientes[ingrediente] || 0;
      }
    }
    setPresupuesto(totalPresupuesto);
    setMostrarPrecios(true);
  };

  return (
    <div className="semana-container">
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
      <ul>
        {ingredientes.map((ingrediente, index) => (
          <li className="ingredientes-list" key={index}>
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
      </ul>
      <button
        type="button"
        className='obtener-presupuesto'
        onClick={() => setMostrarPrecios(!mostrarPrecios)}
      >
        {mostrarPrecios ? 'Ocultar Precios' : 'Mostrar Precios'}
      </button>
      {mostrarPrecios && (
        <ul className="precios-list">
          {Object.keys(ingredientesSeleccionados).map((ingrediente, index) => (
            ingredientesSeleccionados[ingrediente] && (
              <li key={index}>
                {ingrediente}: ${preciosDeIngredientes[ingrediente] || 0}
              </li>
            )
          ))}
          <p className='total'>Presupuesto Total: ${presupuesto}</p>
        </ul>
      )}
    </div>
  );
}

export default App;




