import React from 'react';
import Image from 'next/image';
import './styles.css'; // Import styles

// 修改内联样式
const styles = {
  howToUse: {
    textAlign: 'center' as const,
    padding: '3rem 0',
    // 移除了backgroundColor: '#ff69b4',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#FF69B4', // 改变标题颜色为粉红色（Hot Pink）
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // 减轻文字阴影
    marginBottom: '2rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
    position: 'relative' as const,
    display: 'inline-block',
  },
  steps: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    gap: '2rem',
    marginTop: '2rem',
  },
  step: {
    width: '300px',
    backgroundColor: '#f8f9fa', // 改为浅灰色背景
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  stepText: {
    marginTop: '1rem',
    fontSize: '1.1rem',
    color: '#333',
    fontWeight: 'bold',
  },
};

// 修改价格套餐样式
const priceStyles = {
  priceSection: {
    textAlign: 'center' as const,
    padding: '3rem 0',
    backgroundColor: '#FFB6C1', // 更改为暗粉色（Light Pink）
  },
  priceTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#8B0000', // 深红色，与暗粉色背景形成对比
    marginBottom: '2rem',
  },
  priceCards: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    gap: '2rem',
  },
  priceCard: {
    width: '300px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 半透明白色背景
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  planName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#8B0000', // 深红色
    marginBottom: '0.5rem',
  },
  planPrice: {
    fontSize: '2rem',
    color: '#FF1493', // 深粉红色
    marginBottom: '1rem',
  },
  planDescription: {
    fontSize: '1rem',
    color: '#333', // 深灰色
    marginBottom: '1rem',
  },
  planFeatures: {
    listStyle: 'none',
    padding: 0,
    margin: '1rem 0',
  },
  planFeature: {
    margin: '0.5rem 0',
    color: '#333', // 深灰色
  },
  chooseButton: {
    backgroundColor: '#FF1493', // 深粉红色
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

// 价格套餐组件
const PriceSection = () => (
  <section style={priceStyles.priceSection}>
    <h2 style={priceStyles.priceTitle}>AI Boobs Price</h2>
    <div style={priceStyles.priceCards}>
      <div style={priceStyles.priceCard}>
        <h3 style={priceStyles.planName}>Starter</h3>
        <p style={priceStyles.planPrice}>$2.9</p>
        <p style={priceStyles.planDescription}>Perfect for individuals looking to enhance their online presence.</p>
        <ul style={priceStyles.planFeatures}>
          <li style={priceStyles.planFeature}>✔ 20 AI Boobs Credit</li>
        </ul>
        <button style={priceStyles.chooseButton}>Choose Starter</button>
      </div>
      <div style={priceStyles.priceCard}>
        <h3 style={priceStyles.planName}>Basic</h3>
        <p style={priceStyles.planPrice}>$9.9</p>
        <p style={priceStyles.planDescription}>Ideal for professionals requiring frequent updates to their profiles.</p>
        <ul style={priceStyles.planFeatures}>
          <li style={priceStyles.planFeature}>✔ 100 AI Boobs Credit</li>
          <li style={priceStyles.planFeature}>✔ No Ads</li>
        </ul>
        <button style={priceStyles.chooseButton}>Choose Basic</button>
      </div>
      <div style={priceStyles.priceCard}>
        <h3 style={priceStyles.planName}>Premium</h3>
        <p style={priceStyles.planPrice}>$19.9</p>
        <p style={priceStyles.planDescription}>The best value with unlimited possibilities.</p>
        <ul style={priceStyles.planFeatures}>
          <li style={priceStyles.planFeature}>✔ 300 AI Credit</li>
          <li style={priceStyles.planFeature}>✔ No Ads</li>
          <li style={priceStyles.planFeature}>✔ Best customer service</li>
        </ul>
        <button style={priceStyles.chooseButton}>Choose Premium</button>
      </div>
    </div>
  </section>
);

// Define a functional component AIEnlargerPage
const AIEnlargerPage = () => {
  return (
    <div className="container">
      {/* Navbar section */}
      <nav className="navbar">
        <div className="navbar-brand">BoobBeep</div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="/blog">Blog</a></li>
          <li className="navbar-item"><a href="/price">Price</a></li>
        </ul>
      </nav>
      
      {/* Main section */}
      <main className="main">
        {/* Left text section */}
        <section className="text-section">
          <h1>AI Boobs Art Generator</h1>
          <p>AI boobs art generator helps you make your boobs bigger in minutes. It's easy to generate custom tits using AI.</p>
          <button className="cta-button">Have a try</button>
        </section>
        
        {/* Right image section */}
        <section className="image-section">
          <Image src="/images/image1.png" alt="Image 1" className="example-image" width={500} height={500} />
        </section>
      </main>
      
      {/* How To Use section */}
      <section style={styles.howToUse}>
        <h2 style={styles.sectionTitle}>How To Use AI Boobs</h2>
        <div style={styles.steps}>
          <div style={styles.step}>
            <Image src="/images/Step 1.jpg" alt="Step 1" width={300} height={300} />
            <p style={styles.stepText}>Step 1: Enter your artistic concept.</p>
          </div>
          <div style={styles.step}>
            <Image src="/images/Step 2.jpg" alt="Step 2" width={300} height={300} />
            <p style={styles.stepText}>Step 2: Click the generate button.</p>
          </div>
          <div style={styles.step}>
            <Image src="/images/Step 3.jpg" alt="Step 3" width={300} height={300} />
            <p style={styles.stepText}>Step 3: Wait for the AI to generate your custom artwork.</p>
          </div>
        </div>
      </section>
      
      {/* 新增 Price section */}
      <PriceSection />
      
      {/* Footer section */}
      <footer className="footer">
        <p>© 2024 BoobBeep. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Export component
export default AIEnlargerPage;
