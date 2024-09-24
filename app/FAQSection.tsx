'use client';

import React, { useState } from 'react';

const faqStyles = {
  faqSection: {
    textAlign: 'center' as const,
    padding: '3rem 0',
    backgroundColor: '#FFF0F5',
  },
  faqTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: '2rem',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1.5rem',
  },
  faqItem: {
    width: '80%',
    maxWidth: '800px',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'left' as const,
  },
  faqQuestion: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqAnswer: {
    fontSize: '1rem',
    color: '#666',
    marginTop: '0.5rem',
    display: 'none',
  },
  faqAnswerVisible: {
    display: 'block',
  },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    { question: "What is AI Boobs?", answer: "AI Boobs is an advanced AI-powered tool designed to enhance and enlarge breast images using cutting-edge artificial intelligence technology." },
    { question: "How does AI Boobs work?", answer: "AI Boobs uses sophisticated machine learning algorithms to analyze and modify images, enhancing breast size and shape while maintaining a natural appearance." },
    { question: "Is AI Boobs free to use?", answer: "We offer both free and paid options. Check our pricing section for more details on our plans and features." },
    { question: "Can AI Boobs be used on any type of image?", answer: "AI Boobs works best with clear, front-facing images. However, it can process a wide variety of image types and poses." },
    { question: "Is AI Boobs safe and private?", answer: "Yes, we prioritize user privacy and data security. All uploaded images are processed securely and are not stored on our servers after processing." },
    { question: "What formats does AI Boobs support?", answer: "AI Boobs supports common image formats including JPG, PNG, and WEBP." },
    { question: "Can I customize the size and shape of the enhancement with AI Tits?", answer: "Yes, our advanced AI allows for customization of size and shape to suit your preferences while maintaining a natural look." },
    { question: "How long does it take for AI Boobs to generate an enhanced image?", answer: "Processing time typically takes between 10-30 seconds, depending on the complexity of the image and server load." },
  ];

  return (
    <section style={faqStyles.faqSection}>
      <h2 style={faqStyles.faqTitle}>AI Boobs FAQ</h2>
      <div style={faqStyles.faqList}>
        {faqItems.map((item, index) => (
          <div key={index} style={faqStyles.faqItem}>
            <h3 
              style={faqStyles.faqQuestion} 
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </h3>
            <p style={{
              ...faqStyles.faqAnswer,
              ...(openIndex === index ? faqStyles.faqAnswerVisible : {})
            }}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;