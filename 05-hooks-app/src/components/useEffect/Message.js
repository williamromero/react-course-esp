import React, { useState, useEffect } from 'react'

const Message = () => {

  const [coords, setCoords] = useState({ x:0, y:0 })
  const { x, y } = coords;

  useEffect(() => {

    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y }
      console.log(coords);
      setCoords(coords);
    }

    window.addEventListener('mousemove', mouseMove)
    console.log('Componente Montado')

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      console.log('Componente Desmontado')
    }
  }, [])

  return (
    <div className="messageElm">
      <span>Eres genial!</span>
      <p>
        x:{x}, y:{y}
      </p>
    </div>
  )
}

export default Message
