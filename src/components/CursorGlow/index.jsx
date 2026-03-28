import React, {useEffect, useState} from 'react'
import './index.css'

const CursorGlow = () => {
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({x: e.clientX, y: e.clientY})
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="cursor-glow"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  )
}

export default CursorGlow
