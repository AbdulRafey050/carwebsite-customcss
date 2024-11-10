import React from 'react';
import Hero from '@/components/hero';

export default function Blog() {
  return (
    <div>
      <Hero />
      <div style={{ maxWidth: '100%', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: '#232536', marginBottom: '20px' }}>All posts</h2>
        <hr style={{ borderColor: '#eee', marginBottom: '20px' }} />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', width: '100%', height: '350px' }}>
          <div style={{ flex: '1 1 40%' }}>
            <img
              src="/7.png"
              alt="Car Review"
              style={{ width: '100%', height: '360px', borderRadius: '8px', objectFit: 'cover', marginTop: '20px' }}
            />
          </div>
          <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3 style={{ fontSize: '25px', fontWeight: 'bold', color: '#232536', marginBottom: '5px' }}>
              A Review Of Cars With Advanced Infotainment <br /> Systems
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', color: '#777', fontSize: '14px' }}>
              <img
                src="/dasteer.png"
                alt="Author"
                style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
              />
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#2B2C34', fontSize: '15px' }}>Dasteen</p>
                <div style={{ display: 'flex', lineHeight: '5px', gap: '10px', fontSize: '13px', color: '#2B2C34' }}>
                  <p>Jan 10, 2024</p>
                  <p>&bull; 3 Min Read</p>
                </div>
              </div>
            </div>
            <p style={{ color: '#2B2C34', fontSize: '20px', lineHeight: '1.6', margin: '10px 0' }}>
              Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at
              duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. Ommodo. Cursus
              quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.
            </p>
            <button
              style={{
                backgroundColor: '#FF5959',
                color: '#fff',
                padding: '10px',
                height: '38px',
                width: '192px',
                borderRadius: '5px',
                border: 'none',
                fontSize: '15px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Read full article...
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', width: '100%', height: '350px', marginTop: '50px' }}>
          <div style={{ flex: '1 1 40%' }}>
            <img
              src="/8.png"
              alt="Car Review"
              style={{ width: '100%', height: '360px', borderRadius: '8px', objectFit: 'cover', marginTop: '10px' }}
            />
          </div>
          <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3 style={{ fontSize: '25px', fontWeight: 'bold', color: '#232536', marginBottom: '5px' }}>
              A Review Of Cars With Advanced Infotainment <br /> Systems
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', color: '#777', fontSize: '14px' }}>
              <img
                src="/dasteer.png"
                alt="Author"
                style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
              />
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#2B2C34', fontSize: '15px' }}>Dasteen</p>
                <div style={{ display: 'flex', lineHeight: '5px', gap: '10px', fontSize: '13px', color: '#2B2C34' }}>
                  <p>Jan 10, 2024</p>
                  <p>&bull; 3 Min Read</p>
                </div>
              </div>
            </div>
            <p style={{ color: '#2B2C34', fontSize: '20px', lineHeight: '1.6', margin: '10px 0' }}>
              Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at
              duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. Ommodo. Cursus
              quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.
            </p>
            <button
              style={{
                backgroundColor: '#FF5959',
                color: '#fff',
                padding: '10px',
                height: '38px',
                width: '192px',
                borderRadius: '5px',
                border: 'none',
                fontSize: '15px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Read full article...
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', width: '100%', height: '350px', marginTop: '50px' }}>
          <div style={{ flex: '1 1 40%' }}>
            <img
              src="/9.png"
              alt="Car Review"
              style={{ width: '100%', height: '360px', borderRadius: '8px', objectFit: 'cover', marginTop: '10px' }}
            />
          </div>
          <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3 style={{ fontSize: '25px', fontWeight: 'bold', color: '#232536', marginBottom: '5px' }}>
              A Review Of Cars With Advanced Infotainment <br /> Systems
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', color: '#777', fontSize: '14px' }}>
              <img
                src="/dasteer.png"
                alt="Author"
                style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
              />
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#2B2C34', fontSize: '15px' }}>Dasteen</p>
                <div style={{ display: 'flex', lineHeight: '5px', gap: '10px', fontSize: '13px', color: '#2B2C34' }}>
                  <p>Jan 10, 2024</p>
                  <p>&bull; 3 Min Read</p>
                </div>
              </div>
            </div>
            <p style={{ color: '#2B2C34', fontSize: '20px', lineHeight: '1.6', margin: '10px 0' }}>
              Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at
              duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. Ommodo. Cursus
              quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.
            </p>
            <button
              style={{
                backgroundColor: '#FF5959',
                color: '#fff',
                padding: '10px',
                height: '38px',
                width: '192px',
                borderRadius: '5px',
                border: 'none',
                fontSize: '15px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Read full article...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
