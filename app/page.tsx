'use client';

import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import './styles.css';
import FAQSection from './FAQSection';

// 修改 hero 样式
const heroStyles = {
  heroSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4rem 2rem',
    backgroundColor: '#FFB6C1', // 改为与 Price section 相同的浅粉色背景
  },
  heroContent: {
    flex: 1,
    maxWidth: '600px',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#8B0000', // 改为深红色，与 Price section 标题颜色一致
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#333', // 改为深灰色，提高可读性
    marginBottom: '2rem',
  },
  ctaButton: {
    backgroundColor: '#FF1493', // 改为深粉红色，与 Price section 按钮颜色一致
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    fontSize: '1.2rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  heroImage: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userCount: {
    fontSize: '1rem',
    color: '#333', // 改为深灰色，提高可读性
    marginTop: '1rem',
  },
};

// 修改内联样式
const styles = {
  howToUse: {
    textAlign: 'center' as const,
    padding: '3rem 0',
    backgroundColor: '#FFF0F5', // 保持浅粉红色背景
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

// 添加用户评价样式
const testimonialStyles = {
  testimonialSection: {
    textAlign: 'center' as const,
    padding: '3rem 0',
    backgroundColor: '#FFF0F5', // 浅粉红色背景
  },
  testimonialTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: '2rem',
  },
  testimonials: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    gap: '2rem',
  },
  testimonial: {
    width: '300px',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  userImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: '0 auto 1rem',
  },
  userName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '0.5rem',
  },
  userComment: {
    fontSize: '1rem',
    color: '#666',
    fontStyle: 'italic',
  },
};

// 用户评价组件
const TestimonialSection = () => (
  <section style={testimonialStyles.testimonialSection}>
    <h2 style={testimonialStyles.testimonialTitle}>What Users Say About Us</h2>
    <div style={testimonialStyles.testimonials}>
      <div style={testimonialStyles.testimonial}>
        <Image src="/images/sarah.jpg" alt="Sarah J." width={80} height={80} style={testimonialStyles.userImage} />
        <h3 style={testimonialStyles.userName}>Sarah J.</h3>
        <p style={testimonialStyles.userComment}>&quot;This AI tool is amazing! It helped me create stunning artwork in minutes.&quot;</p>
      </div>
      <div style={testimonialStyles.testimonial}>
        <Image src="/images/Mike.jpg" alt="Mike R." width={80} height={80} style={testimonialStyles.userImage} />
        <h3 style={testimonialStyles.userName}>Mike R.</h3>
        <p style={testimonialStyles.userComment}>&quot;I&apos;m impressed with the quality and speed. Definitely worth trying!&quot;</p>
      </div>
      <div style={testimonialStyles.testimonial}>
        <Image src="/images/man1.png" alt="John D." width={80} height={80} style={testimonialStyles.userImage} />
        <h3 style={testimonialStyles.userName}>John D.</h3>
        <p style={testimonialStyles.userComment}>&quot;The results are beyond my expectations. I highly recommend this service!&quot;</p>
      </div>
    </div>
  </section>
);

// Define a functional component AIEnlargerPage
const AIEnlargerPage = () => {
  const { data: session } = useSession();

  return (
    <div className="container">
      {/* Navbar section */}
      <nav className="navbar">
        <div className="navbar-brand">BoobBeep</div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="/blog">Blog</a></li>
          <li className="navbar-item"><a href="/price">Price</a></li>
          {session ? (
            <li className="navbar-item">
              <button onClick={() => signOut()}>Sign out</button>
            </li>
          ) : (
            <li className="navbar-item">
              <button onClick={() => signIn('google')}>Sign in with Google</button>
            </li>
          )}
        </ul>
      </nav>
      
      {/* Hero section */}
      <section style={heroStyles.heroSection}>
        <div style={heroStyles.heroContent}>
          <h1 style={heroStyles.heroTitle}>AI Boobs Art Generator</h1>
          <p style={heroStyles.heroSubtitle}>
            Transform your images with cutting-edge AI technology. Create stunning, customized breast enhancements in minutes. It&apos;s easy to generate custom tits using AI.
          </p>
          <button style={heroStyles.ctaButton}>Try AI Boobs Now</button>
          <p style={heroStyles.userCount}>Trusted by 10,000+ happy users</p>
        </div>
        <div style={heroStyles.heroImage}>
          <Image src="/images/image2.png" alt="AI Boobs Example" width={500} height={500} />
        </div>
      </section>
      
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
      
      {/* 新增 What Users Say About 部分 */}
      <TestimonialSection />
      
      {/* FAQ 部分 */}
      <FAQSection />
      
      {/* Footer section */}
      <footer className="footer">
        <p>© 2024 BoobBeep. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Export component
export default function Page() {
  return (
    <SessionProvider>
      <AIEnlargerPage />
    </SessionProvider>
  );
}
