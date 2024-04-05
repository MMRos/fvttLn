import './habilidades.css';
import Span from '../compl/span'


const Habilidades = () => {
    const listaTemas = ['Arcana', 'Arte', 'Artesanía', 'Autocontrol', 'Cocina', 'Medicina', 'Movimiento', 'Paleontología', 'Religión', 'Sentidos', 'Social', 'Supervivencia', 'Trato con Animales'];
    const listaCuerpo = ['Sensibilidad Arcana', 'Esculpir/Forjar/Tallar', 'Construir/Picar/Talar', 'Atletismo', 'Cocina', 'Primeros Auxilios', 'Escalada/Nado', 'Excavación', 'Ascetismo/Rezos', 'Kinestesia', 'Presencia', 'Orientación', 'Conducir/Montar'];
    const listaNervio = ['Encantar Objeto', 'Interpretar', 'Juego de Manos', 'Sigilo', 'Venenos', 'Intervención Médica', 'Acrobacias', 'Desactivar Trampas', 'Rituales', 'Percepción', 'Seducción', 'Rastreo/Recolección', 'Doma'];
    const listaMente = ['Conocimiento Arcana', 'Disfrazarse', 'Mecanismos Complejos', 'Concentración/Meditación', 'Alquimia', 'Conocimiento Medicina', 'Cartografía', 'Conocimiento Historia', 'Conocimiento Religión', 'Investigación/Perspicacia', 'Trato Social', 'Conocimiento Naturaleza', 'Conocimiento Fauna'];

    const genTabla = (lista) => {
        return lista.map((elem, index) => (
            <div key={index} >
                {elem}
            </div>
        ));
    };

    const genCel = (lista) => {
        const numColumnas = 3;
        const elementos = [];

        for (let i = 0; i < lista.length; i += numColumnas) {
            elementos.push(
                <div key={i} >
                    {lista.slice(i, i + numColumnas).map((elem, index) => (
                        <div key={index} style={{ display: 'flex' }}>
                            <input id={`valor${elem}`} className='celPeqHabs' />
                            <input id={`mod${elem}`} className='celPeqHabs' />
                            <span id={`total${elem}`} className='celCalc' style={{ width: '12px', height: '12px' }} />
                        </div>
                    ))}
                </div>
            );
        }

        return elementos;
    };

    return (
        <div>
            
{/* Esto es la cabecera de raíces */}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
               <div className='cabecera'>Temas</div>
                <div className='cabecera'>Cuerpo</div>


                <div style={{ marginLeft: '-6px', marginRight: '4px' }}>
                    <div style={{ display: 'flex', marginBottom: '-7px', fontSize: '4', width: '51px' }}>
                        <Span>Nivel</Span>
                        <Span>Mod</Span>
                        <Span>Total</Span>
                    </div>
                    <div style={{ display: 'flex', marginTop: '-10px'}} >
                        <input id='valorCuerpo' className='cabeceraCel' />
                        <input id='modCuerpo' className='cabeceraCel' />
                        <div style={{ marginTop: '10px'}}>
                          <span id='totalCuerpo' className='celCalc' style={{ width: '13px', height: '13px' }} />
                        </div>
                    </div>
                </div>

                <div className='cabecera'>Nervio</div>
                <div style={{  marginLeft: '-13px', marginRight: '24px' }}>
                    <div style={{ display: 'flex', marginBottom: '-7px', fontSize: '4', width: '51px' }}>
                        <Span>Nivel</Span>
                        <Span>Mod</Span>
                        <Span>Total</Span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '-10px'}} >
                        <input id='valorNervio' className='cabeceraCel' />
                        <input id='modNervio' className='cabeceraCel' />
                        <div style={{ marginTop: '10px'}}>
                            <span id='totalNervio' className='celCalc' style={{ width: '13px', height: '13px' }} />
                        </div>
                    </div>
                </div>

                <div className='cabecera'>Mente</div>
                <div style={{ marginRight: '-10px' }} >
                    <div style={{ display: 'flex', marginBottom: '-7px', fontSize: '4', width: '51px' }}>
                        <Span>Nivel</Span>
                        <Span>Mod</Span>
                        <Span>Total</Span>
                    </div>
                    <div style={{ display: 'flex', marginTop: '-10px'}} >
                        <input id='valorMente' className='cabeceraCel' />
                        <input id='modMente' className='cabeceraCel' />
                        <div style={{ marginTop: '10px'}}>
                            <span id='totalMente' className='celCalc' style={{ width: '13px', height: '13px' }} />
                        </div>
                    </div>
                </div>
            </div>


{/* Aquí empiezan las columnas de Raíces*/}
            <div className="tabla" >
                <div className='temas'>
                    {genTabla(listaTemas)}
                </div>
                <div className='columna'>
                    {genTabla(listaCuerpo)}
                </div>
                <div className='columna' >
                    {genCel(listaCuerpo)}
                </div>
                <div className='columna'>
                    {genTabla(listaNervio)}
                </div>
                <div className='columna'>
                    {genCel(listaNervio)}
                </div>
                <div className='columna'>
                    {genTabla(listaMente)}
                </div>
                <div className='columna'>
                    {genCel(listaMente)}
                </div>
            </div>
        </div>
    );
};

export default Habilidades;
