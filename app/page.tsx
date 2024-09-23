import React from 'react';
import Image from 'next/image';
import './styles.css'; // 引入样式文件

// 定义一个函数组件 AIEnlargerPage
const AIEnlargerPage = () => {
  return (
    <div className="container">
      {/* 导航栏部分 */}
      <nav className="navbar">
        <div className="navbar-brand">BoobBeep</div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="/blog">Blog</a></li>
          <li className="navbar-item"><a href="/price">Price</a></li>
        </ul>
      </nav>
      
      {/* 主体部分 */}
      <main className="main">
        {/* 左侧文字部分 */}
        <section className="text-section">
          <h1>AI Boobs Art Generator</h1>
          <p>AI boobs art Generator helps you make your boobs more bigger in minutes. It&apos;s easy to generate custom tits use AI.</p>
          <button className="cta-button">Have a try</button>
        </section>
        
        {/* 右侧图片部分 */}
        <section className="image-section">
          <Image src="/images/image1.png" alt="Image 1" className="example-image" width={500} height={500} />
        </section>
      </main>
      
      {/* 输出部分 */}
      <section className="output-section">
        <h2>生成的艺术作品</h2>
        <div className="output-box">
          {/* 这里将显示生成的艺术作品 */}
        </div>
      </section>
      
      {/* 页脚部分 */}
      <footer className="footer">
        <p>© 2024 BoobBeep. 保留所有权利。</p>
      </footer>
    </div>
  );
};

// 导出组件
export default AIEnlargerPage;
