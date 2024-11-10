'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #C4C4C4",
        background: "#232536",
        width: "97%",
        height: "80px",
        padding: "0 20px",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          <div style={{
            height: '50px',
            width: '50px',
            borderRadius: '50%',
            backgroundColor: '#ffffff'
          }}>
          </div>
          <p style={{ color: "White" }}>LOGO</p>
        </div>

        <ul style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link href="/" style={{ textDecoration: "none", color: "White" }}>Home</Link>
          </li>
          <li>
            <Link href="/blog" style={{ textDecoration: "none", color: "white" }}>Blog</Link>
          </li>
          <li>
            <Link href="/about" style={{ textDecoration: "none", color: "white" }}>About</Link>
          </li>
          <li>
            <Link href="/contact" style={{ textDecoration: "none", color: "white" }}>Contact Us</Link>
          </li>
        </ul>

        <button style={{
          width: "152px",
          height: "50px",
          backgroundColor: "#ffffff",
          padding: "6px",
          borderRadius: "8px",
          border: "none",
          paddingRight:'20px'
        }}>
          <Link href="/" style={{
            textDecoration: "none",
            color: "black",
            fontWeight: 'bold',
            fontSize: '15px'
          }}>Subscribe</Link>
        </button>
      </nav>

      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            height: auto;
            padding: 10px;
          }

          ul {
            flex-direction: column;
            gap: 15px;
            margin-top: 10px;
          }

          button {
            width: 100%;
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar;


