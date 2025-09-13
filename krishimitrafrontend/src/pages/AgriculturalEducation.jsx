import { useState } from 'react';
import './AgriculturalEducation.css';
import Layout from '../layout/layout';

const videoData = [
  {
    title: 'धान की उन्नत खेती',
    category: 'फसल उत्पादन',
    image: 'https://img.youtube.com/vi/6QVwPcooJ2o/maxresdefault.jpg',
    url: 'https://youtu.be/4-0iPmgrt_g?si=DeYAMFhFz4TG8lic',
  },
  {
    title: 'विश्व की प्रमुख फसलें और उनके उत्पादक देश',
    category: 'फसल उत्पादन',
    image: 'https://img.youtube.com/vi/qEfSjon0VTE/maxresdefault.jpg',
    url: 'https://youtu.be/qEfSjon0VTE?si=Yan6bIrvZyh9sQdw',
  },
  {
    title: 'फसलों के प्रकार, रबी, खरीफ, जायद',
    category: 'फसल उत्पादन',
    image: 'https://img.youtube.com/vi/MJ1i2nu5EEY/sddefault.jpg',
    url: 'https://youtu.be/MJ1i2nu5EEY?si=yoWEKMtBECC0dd9f',
  },
  {
    title: 'सबसे अच्छी भैंस की नस्ल कौन सी है',
    category: 'पशुपालन',
    image: 'https://img.youtube.com/vi/m5mdqjny-Gg/maxresdefault.jpg',
    url: 'https://youtu.be/5vWAL0KNdro?si=SGsNyhU5kUV9dMEx',
  },
  {
    title: 'पशुपालन की एडवांस मशीनें',
    category: 'पशुपालन',
    image: 'https://img.youtube.com/vi/6liRoz1Gr78/maxresdefault.jpg',
    url: 'https://youtu.be/6liRoz1Gr78?si=suxI9MTLMDMtqqJf',
  },
  {
    title: 'कृषि क्षेत्र में इस्तेमाल होने वाले उपकरण एवं उनके उपयोग',
    category: 'खेती के आधुनिक उपकरण',
    image: 'https://img.youtube.com/vi/NOWeqnXc5Lo/maxresdefault.jpg',
    url: 'https://youtu.be/NOWeqnXc5Lo?si=3zS2ppPImCwUkVU4',
  },
  {
    title: 'जैविक खेती कैसे होती है,जैविक खेती का फायदा क्या है',
    category: 'फसल सुरक्षा एवं उर्वरक',
    image: 'https://img.youtube.com/vi/MhxJp5RbWC4/maxresdefault.jpg',
    url: 'https://youtu.be/MhxJp5RbWC4?si=5ZRSJdlREk75SdVP',
  },
  {
    title: 'फल क्या है|फलों के प्रकार',
    category: 'फल एवं सब्जी उत्पादन',
    image: 'https://img.youtube.com/vi/gZXl96IxYGE/maxresdefault.jpg',
    url: 'https://youtu.be/gZXl96IxYGE?si=6So9vrgC_smrbs0Y',
  },
  {
    title: 'सिंचाई, सिंचाई की विधियाँ',
    category: 'जल प्रबंधन और सिंचाई',
    image: 'https://img.youtube.com/vi/jDXGPw0VP6A/maxresdefault.jpg',
    url: 'https://youtu.be/jDXGPw0VP6A?si=7be9cG6nqXSrpYb7',
  },
  {
    title: 'कैसे होता है कृषि उपज मंडी का संचालन?',
    category: 'कृषि बाजार और व्यापार',
    image: 'https://img.youtube.com/vi/DmT2NnsFR2c/maxresdefault.jpg',
    url: 'https://youtu.be/DmT2NnsFR2c?si=H5s7jTNxiZe2IJI7',
  },
];

const categories = [
  'सभी',
  'फसल उत्पादन',
  'पशुपालन',
  'खेती के आधुनिक उपकरण',
  'फसल सुरक्षा एवं उर्वरक',
  'फल एवं सब्जी उत्पादन',
  'जल प्रबंधन और सिंचाई',
  'कृषि बाजार और व्यापार',
];

const AgriculturalEducation = () => {
  const [selectedCategory, setSelectedCategory] = useState('सभी');

  const filteredVideos =
    selectedCategory === 'सभी'
      ? videoData
      : videoData.filter((video) => video.category === selectedCategory);

  return (
    <Layout>
      <div className="agriedcontainer">
        {/* Filters */}
        <div className="filter-section">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-button ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Cards */}
        <div className="video-grid">
          {filteredVideos.map((video, index) => (
            <div key={index} className="video-card">
              <img
                src={video.image}
                alt={video.title}
                className="video-image"
              />
              <h3 className="video-title">{video.title}</h3>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <button className="watch-button">वीडियो देखें</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AgriculturalEducation;
