'use client'
import Image from "next/image";

export default function Card() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      <div style={{
        flex: '3',
        marginRight: '20px',
        minWidth: '300px',
      }}>
        <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>Latest</h2>
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '20px'
        }}>
          <Image
            src="/5.png"
            alt="Latest Blog"
            width={100}
            height={100}
            style={{ width: '100%', height: 'auto' }}
          />
          <div style={{ padding: '20px' }}>
            <p style={{ color: '#ff5a5f', fontSize: '14px', margin: '0' }}>By John Doe | March 12, 2024</p>
            <h3 style={{ fontSize: '35px', fontWeight: 'bold', margin: '10px 0' }}>
              Lorem ipsum dolor sit amet, consectetur aisc ing elit, sed do eiusmod tempor.
            </h3>
            <p style={{ fontSize: '20px', color: '#666', lineHeight:'30px' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident. <br />
              Duis aute irure dolor in reprehenderit in voluptate v <br />
              Duis aute irure dolor in reprehenderit in volusse cillum dolore eu fugiat nulla pariatur. <br />
              Excepteur sint occaecat cupidatat non proident. <br />
            </p>
            <button style={{
              backgroundColor: '#ff5a5f',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
              height: '51px',
              width: '230px',
              fontSize: '20px'
            }}>
              Read more
            </button>
          </div>
        </div>
      </div>
  
      <div style={{
        flex: '2',
        minWidth: '300px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>Trending Blogs</h2>
          <a href="#" style={{ fontSize: '14px', color: 'black', textDecoration: 'none' }}>See all</a>
        </div>
        {[...Array(4)].map((_, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 0',
            borderBottom: index === 1 ? '1px solid #e0e0e0' : 'none',
            backgroundColor: index === 1 ? '#ff5a5f' : 'transparent',
            color: index === 1 ? 'white' : '#333',
            marginBottom: '10px'
          }}>
            <p style={{
              fontSize: '15px',
              color: index === 1 ? 'white' : '#ff5a5f',
              margin: '0'
            }}>
              By John Doe | Aug 23, 2023
            </p>
            <h3 style={{
              fontSize: '35px',
              fontWeight: 'bold',
              margin: '5px 0',
              padding:'25px'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </h3>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            flex-direction: column;
          }
          h2 {
            font-size: 30px;
          }
          h3 {
            font-size: 28px;
          }
          p {
            font-size: 14px;
          }
          button {
            width: 100%;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
