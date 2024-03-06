import React from 'react'
import './CSS/header.css'

function header() {
  return (
    <>
    <div className="background">
      <div className="text-white flex justify-center items-center h-screen miom">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to the Hospital</h1>
          <p className="text-2xl">We care about your health</p>
          <p className="text-2xl">Obstetrician-Gynecologist in Chas</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default header
