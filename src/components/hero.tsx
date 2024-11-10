'use client'
import React from 'react'
import car1 from '../../public/car.png';

const Hero = () => {
  return (
    <div 
      style={{
        width: "100%",         
        height: "87vh",
        top: "80px",
        backgroundImage: `url(${car1.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div 
        style={{
          color: 'white',
          marginLeft: '50px',
          maxWidth: '400px',
          padding: '20px',
        }}
      >
        <h1 style={{
          fontSize: '48px', 
          lineHeight: '1.2',
          margin: 0
        }}>
          YOUR JOURNEY <br /> YOUR CAR <br /> YOUR WAY
        </h1>
        <p style={{
          fontSize: '16px', 
          marginTop: '20px',
          lineHeight: '1.5'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla ac eros at ligula blandit malesuada at eu eros. 
          Vestibulum ante ipsum primis in faucibus orci luctus et 
          ultrices posuere cubilia curae; Integer a ligula nec nisl 
          suscipit dapibus.
        </p>
        <button 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#ff6666',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Subscribe
        </button>
      </div>

      <style jsx>{`
        /* Desktop and Default Styling */
        h1 {
          font-size: 48px;
        }
        
        /* Mobile Styling */
        @media (max-width: 768px) {
          div {
            margin-left: 20px;
          }
          h1 {
            font-size: 32px;
          }
          p {
            font-size: 14px;
          }
          button {
            padding: 8px 16px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero;
