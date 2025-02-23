import React, { useState } from 'react';
import Imagen from './compl/imagen'
import ContInfoGen from './compl/contInfoGen';
import Span from './compl/span';
import ArmasMagias from './pestanyas/armas-magias';
import Bio from './pestanyas/bio';
import DotesNodos from './pestanyas/dote-nodos';
import Habilidades from './pestanyas/habilidades';
import Inventario from './pestanyas/inventario';
import './App.css'


//Const para que los botones muestren el contenido de las pestañas
const Boton = ({ children, tabId, activeTab, handleTabClick }) => {
  return (
    <button
      className={activeTab === tabId ? "pestanyact color2 colorLetras" : "botones color5 colorLetras"}
      onClick={() => handleTabClick(tabId)}
    >
      {children}
    </button>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("pest1");

  const handleTabClick = (pestId) => {
    setActiveTab(pestId);
  };

  //Calcular Prestigio. Debe sumar nodosAcum con renombre y buscar el valor en una lista
 // const CalcPrestigio = () => {
 //   const [nodosAcum,]
 // }


  //Calcular vida: (Cuerpo*2 + Nervio*2 + Mente)*Prestigio. Recuerda, Nervio sin penalizadores


  //Calcular voluntad: (Cuerpo + Nervio + Mente + AtrPredominante)*Prestigio. Recuerda, Nervio sin penalizadores


  //Calcular TDs: Pasiva: 6 + nivel armadura + mod + Cuerpo + bonos armadura


  //Calcular Desvío: Nervio + nivel + mod


  // Calcular Esquiva: Mente + nivel + mod



  //Manejar valores

//  const

  return (
    <div className="App">
      <div className='hoja color1 colorLetras'>

        {/* Hoja datos generales */}
        <div style={{ display: 'flex' }}>
          <Imagen />
          <ContInfoGen>
            <label className='label' > Nombre: </label>
            <input name="nombre" className='input color4' />

            <label className='label' > Raza: </label>
            <input name="raza" className='input color4' />

            <label className='label' > Escuelas: </label>
            <input name="escuela" className='input color4' />

            <label className='label' > Prestigio: </label>
            <span id='prestigio' className='celCalc color3' />


            <label className='label' > Vida: </label>
            <div style={{ marginTop: '-20px' }} >
              <div style={{ display: 'flex' }}>
                <Span>Total</Span>
                <Span>Actual</Span>
                <Span>Mod</Span>
              </div>
              <div style={{ display: 'flex' }}>
                <span id='totalVida' className='celCalc color3' />
                <input name='contadorVida' className='celPeq color4' />
                <input name='modVida' className='celPeq color4' />
              </div>
            </div>

            <label className='label' > Movimiento: </label>
            <input name="movimiento" className='input color4' />

            <label className='label' > Sentidos: </label>
            <input name="sentidos" className='input color4' />

            <label className='label' > Nodos Acumulados: </label>
            <input type='number'
//              value={nodosAcum}
//              onChange={ }
              className='celPeq color4'
              style={{ marginTop: '-15px' }} />


            <label className='label' > Voluntad: </label>
            <div style={{ marginTop: '-15px' }} >
              <div style={{ display: 'flex' }}>
                <Span>Total</Span>
                <Span>Actual</Span>
                <Span>Gastado</Span>
                <Span>Max</Span>
              </div>
              <div style={{ display: 'flex' }} >
                <span id='totalVoluntad' className='celCalc color3' />
                <input name='contadorVoluntad' className='celPeq color4' />
                <input name='gastMaxVoluntad' className='celPeq color4' />
                <span id='maxVoluntad' className='celCalc color3' />
              </div>
            </div>


            <label className='label' style={{ marginTop: '-12px' }} > Movimiento Especial: </label>
            <input name="movimiento especial" className='input color4' />

            <label className='label' style={{ marginTop: '-12px' }} > Sentidos especiales: </label>
            <input name="sentidos especiales" className='input color4' />

            <label className='label' > Renombre: </label>
            <input
              type='number'
 //             value={valorRenombre}
 //             onChange={manejaRenombre}
              className='celPeq color4'
              style={{ marginTop: '-15px' }} />
          </ContInfoGen>
        </div>


        {/* Barra con pestañas */}
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <Boton
            tabId="pest1"
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          >
            Habilidades
          </Boton>

          <Boton
            tabId="pest2"
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          >
            Armas y Magias
          </Boton>

          <Boton
            tabId="pest3"
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          >
            Dotes y Nodos
          </Boton>

          <Boton
            tabId="pest4"
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          >
            Inventario
          </Boton>

          <Boton
            tabId="pest5"
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          >
            Bio
          </Boton>
        </nav>

        {/* Contenedores */}
        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
          <div id='pest1' className={activeTab === "pest1" ? 'contenedor color2' : 'oculto color3'} style={{ display: 'flex', justifyContent: 'space-around' }} >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-around' }} >Raíces</div>
              <div>
                <Habilidades />
              </div>
            </div>

          </div>
          <div id='pest2' className={activeTab === "pest2" ? 'contenedor color2' : 'oculto color3'}>
            <ArmasMagias />
          </div>
          <div id='pest3' className={activeTab === "pest3" ? 'contenedor color2' : 'oculto color3'}>
            <DotesNodos />
          </div>
          <div id='pest4' className={activeTab === "pest4" ? 'contenedor color2' : 'oculto color3'}>
            <Inventario />
          </div>
          <div id='pest5' className={activeTab === "pest5" ? 'contenedor color2' : 'oculto color3'}>
            <Bio />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App