import React from 'react';
import './styles.css'; // 引入样式文件

// 定义一个函数组件 AIEnlargerPage
const AIEnlargerPage = () => {
  return (
    <div className="container">
      {/* 页头部分 */}
      <header className="header">
        <h1>AI Boobs Enlarger</h1>
        <p>使用我们的AI工具，根据文本描述生成定制的艺术作品。</p>
      </header>
      
      {/* 主体部分 */}
      <main className="main">
        {/* 左侧文字部分 */}
        <section className="text-section">
          <h2>输入你的想法</h2>
          <textarea placeholder="在此输入你的艺术概念..." className="input-box"></textarea>
          <button className="generate-button">生成</button>
        </section>
        
        {/* 右侧图片部分 */}
        <section className="image-section">
          <img src="/images/image1.png" alt="示例图片" className="example-image" />
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
        <p>© 2024 AI Boobs Enlarger. 保留所有权利。</p>
      </footer>
    </div>
  );
};

// 导出组件
export default AIEnlargerPage;
