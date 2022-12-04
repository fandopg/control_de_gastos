import React from 'react'

const ControlPresupuesto = ({presupuesto, setPresupuesto}) => {
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("en-us",{
             style: "currency",
             currency: "usd"
             })
        };


  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>GRAFICA</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Gastado: </span>{0}
            </p>

            <p>
                <span>Disponible: </span>{0}
            </p>


        </div>
    </div>
  )
}

export default ControlPresupuesto