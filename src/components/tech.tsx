import React from 'react';

const TechnologySection = () => {
  return (
    <div style={{ padding: '20px', borderRadius: '10px', margin: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>New Technology</h2>
        <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>See All</a>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        
        <div style={{
          width: '289px',
          height: '396px',
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: '#f4f0f8',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <div style={{
            height: '250px',
            width: '100%',
            backgroundColor: '#ccc',
            borderRadius: '8px',
            marginBottom: '10px',
            backgroundImage: `url('/1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
            A Review Of Cars With Advanced Infotainment Systems
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', color: '#777', fontSize: '14px', marginLeft: '10px' }}>
            <img src="/dasteer.png" alt="Author" style={{ width: '40px', height: '40px', borderRadius: '50%', padding: '20px' }} />
            <div>
              <p style={{ margin: 0, fontWeight: "bold", color: '#2B2C34', fontSize: '15px', textAlign: 'left' }}>
                Dasteen
              </p>
              <div style={{ display: "flex", lineHeight: '5px', gap: '10px', fontSize: "13px", color: '#2B2C34' }}>
                <p>Jan 10, 2024</p>
                <p>&bull; 3 Min Read</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          width: '289px',
          height: '396px',
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: '#f4f0f8',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <div style={{
            height: '250px',
            width: '100%',
            backgroundColor: '#ccc',
            borderRadius: '8px',
            marginBottom: '10px',
            backgroundImage: `url('/2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
            A Deep Dive Into Sports Cars
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', color: '#777', fontSize: '14px', marginLeft: '10px' }}>
            <img src="/dasteer.png" alt="Author" style={{ width: '40px', height: '40px', borderRadius: '50%', padding: '20px' }} />
            <div>
              <p style={{ margin: 0, fontWeight: "bold", color: '#2B2C34', fontSize: '15px', textAlign: 'left' }}>
                Dasteen
              </p>
              <div style={{ display: "flex", lineHeight: '5px', gap: '10px', fontSize: "13px", color: '#2B2C34' }}>
                <p>Jan 10, 2024</p>
                <p>&bull; 3 Min Read</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          width: '289px',
          height: '396px',
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: '#f4f0f8',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <div style={{
            height: '250px',
            width: '100%',
            backgroundColor: '#ccc',
            borderRadius: '8px',
            marginBottom: '10px',
            backgroundImage: `url('/3.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
            A Deep Dive Into Sports Cars
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', color: '#777', fontSize: '14px', marginLeft: '10px' }}>
            <img src="/dasteer.png" alt="Author" style={{ width: '40px', height: '40px', borderRadius: '50%', padding: '20px' }} />
            <div>
              <p style={{ margin: 0, fontWeight: "bold", color: '#2B2C34', fontSize: '15px', textAlign: 'left' }}>
                Dasteen
              </p>
              <div style={{ display: "flex", lineHeight: '5px', gap: '10px', fontSize: "13px", color: '#2B2C34' }}>
                <p>Jan 10, 2024</p>
                <p>&bull; 3 Min Read</p>
              </div>
            </div>
          </div>
        </div>
     </div>
     </div>
  );
};

export default TechnologySection;
