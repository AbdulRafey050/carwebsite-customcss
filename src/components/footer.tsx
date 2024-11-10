import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e1e28', marginTop: '100px', padding: '40px 20px', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#FFD6D6', borderRadius: '50%' }}></div>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>LOGO</span>
        </div>

        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold' }}>Home</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold' }}>Blog</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold' }}>About us</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold' }}>Contact us</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold' }}>Privacy Policy</a>
        </nav>
      </div>

      <div style={{ backgroundColor: '#2c2c3a', padding: '30px', borderRadius: '10px', textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '33px' }}>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <h2 style={{ fontSize: '34px', fontWeight: 'bold', margin: '0 0 20px' }}>
              Subscribe to our newsletter to <br /> get the latest updates and news
            </h2>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <input
              type="email"
              placeholder="example@email.com"
              style={{
                padding: '10px 15px',
                borderRadius: '5px',
                border: 'none',
                fontSize: '18px',
                flex: '1',
                width: '100%',
                maxWidth: '380px',
                height: '35px',
                outline: 'none'
              }}
            />
            <button
              style={{
                backgroundColor: '#FF5959',
                color: '#fff',
                padding: '10px 30px',
                borderRadius: '5px',
                border: 'none',
                height: '55px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              Subscribe 
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'left', fontSize: '16px', color: '#FFFFFF', flex: '1' }}>
          <p style={{ margin: '10px 0' }}>Finstreet 118 2561 abctown</p>
          <p style={{ margin: '10px 0' }}>example@femail.com • 001 21345 442</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '30px', margin: '20px 40px', flex: '1',  }}>
          <a href="#" style={{ color: '#ffffff', fontSize: '22px' }}> <FaFacebook /></a>
          <a href="#" style={{ color: '#ffffff', fontSize: '22px' }}> <FaTwitter /> </a>
          <a href="#" style={{ color: '#ffffff', fontSize: '22px' }}> <FaInstagram /> </a>
          <a href="#" style={{ color: '#ffffff', fontSize: '22px' }}> <FaLinkedinIn /> </a>
        </div>
      </div>
    </footer>
  );
}
