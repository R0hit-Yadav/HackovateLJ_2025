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
    title: ' ( खाद ) फसल उत्पादन',
    category: 'फसल उत्पादन',
    image: 'https://img.youtube.com/vi/yOYN_0gpdAU/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=yOYN_0gpdAU',
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
    title: 'फसल उत्पादन एवं प्रबंध',
    category: 'फसल उत्पादन',
    image: 'https://img.youtube.com/vi/JVraNvGteuo/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=JVraNvGteuo',
  },
  {
    title: 'जल निकास ',
    category: 'फसल उत्पादन',
    image: 'https://img.youtube.com/vi/at8CDWG7j7g/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=at8CDWG7j7g',
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
    title: 'आहार एवं पोषण',
    category: 'पशुपालन',
    image: 'https://img.youtube.com/vi/XRaQS3gjnRI/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=XRaQS3gjnRI',
  },
  {
    title: 'पशु रोग',
    category: 'पशुपालन',
    image: 'https://img.youtube.com/vi/jv1n77rGGTM/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=jv1n77rGGTM',
  },
  {
    title: 'राजस्थान पशु संपदा',
    category: 'पशुपालन',
    image: 'https://img.youtube.com/vi/krD0dAHT6IA/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=krD0dAHT6IA',
  },
  {
    title: 'गाय की नस्लें',
    category: 'पशुपालन',
    image: 'https://img.youtube.com/vi/MLfIFbABY3Q/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=MLfIFbABY3Q',
  },
  {
    title: 'कृषि क्षेत्र में इस्तेमाल होने वाले उपकरण एवं उनके उपयोग',
    category: 'खेती के आधुनिक उपकरण',
    image: 'https://img.youtube.com/vi/NOWeqnXc5Lo/maxresdefault.jpg',
    url: 'https://youtu.be/NOWeqnXc5Lo?si=3zS2ppPImCwUkVU4',
  },
  {
    title: 'किसानों की सफलता का मंत्र, ये पांच आधुनिक कृषि यंत्र',
    category: 'खेती के आधुनिक उपकरण',
    image: 'https://img.youtube.com/vi/NbIymnnKD70/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=NbIymnnKD70',
  },
  {
    title: 'सभी आधुनिक कृषि यंत्र मिलेंगे यहाँ',
    category: 'खेती के आधुनिक उपकरण',
    image: 'https://img.youtube.com/vi/9NibSZJ9MaI/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=9NibSZJ9MaI',
  },
  {
    title: 'पारंपरिक और आधुनिक कृषि उपकरण के बीच अंतर ',
    category: 'खेती के आधुनिक उपकरण',
    image: 'https://img.youtube.com/vi/15hkRKoLBGI/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=15hkRKoLBGI',
  },
  {
    title: 'आधुनिक कृषि मशीन उपकरण जो खेती को आसान बनाएगा',
    category: 'खेती के आधुनिक उपकरण',
    image: 'https://img.youtube.com/vi/SXUGXlbbpF8/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=SXUGXlbbpF8',
  },
  {
    title: 'खेती और कृषि के आधुनिक उपकरण',
    category: 'खेती के आधुनिक उपकरण',
    image: 'https://i3.ytimg.com/vi/HGcgwR8YuHo/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=HGcgwR8YuHo',
  },
  {
    title: 'फसल सुरक्षा के नाम पर लाखों रुपये के रसायन क्यों ',
    category: 'फसल सुरक्षा एवं उर्वरक',
    image: 'https://i3.ytimg.com/vi/JaPqTT6Kqgk/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=JaPqTT6Kqgk',
  },
  {
    title: 'तुअर की खेती का A to Z तरीका | बीज, खाद, सिंचाई, फसल सुरक्षा सब कुछ | अरहर की खेती',
    category: 'फसल सुरक्षा एवं उर्वरक',
    image: 'https://img.youtube.com/vi/KaBsOvmQx7I/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=KaBsOvmQx7I',
  },
  {
    title: '1 स्प्रे में फसल की रोग एवं कीटों से 100% सुरक्षा।',
    category: 'फसल सुरक्षा एवं उर्वरक',
    image: 'https://img.youtube.com/vi/6dICr2useMo/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=6dICr2useMo',
  },
  {
    title: 'फसल सुरक्षा और पोषण एक साथ',
    category: 'फसल सुरक्षा एवं उर्वरक',
    image: 'hhttps://img.youtube.com/vi/tL96TaU7GcI/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=tL96TaU7GcI',
  },
  {
    title: 'फसल सुरक्षा रसायनों का विकल्प है "संजीवनी खाद"',
    category: 'फसल सुरक्षा एवं उर्वरक',
    image: 'https://i3.ytimg.com/vi/X8wuuZf4u4E/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=X8wuuZf4u4E',
  },
  {
    title: 'जीवामृत एवं जंगल का कमाल न उर्वरक न फसल सुरक्षा रसायन',
    category: 'फसल सुरक्षा एवं उर्वरक',
    image: 'https://img.youtube.com/vi/-EYhmYAr-PM/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=-EYhmYAr-PM',
  },
  {
    title: 'फल क्या है|फलों के प्रकार',
    category: 'फल एवं सब्जी उत्पादन',
    image: 'https://img.youtube.com/vi/gZXl96IxYGE/maxresdefault.jpg',
    url: 'https://youtu.be/gZXl96IxYGE?si=6So9vrgC_smrbs0Y',
  },
  {
    title: 'जानें 10 साल में फल और सब्जी उत्पादन में कितनी बढ़ी यूपी की हिस्सेदारी?',
    category: 'फल एवं सब्जी उत्पादन',
    image: 'https://i3.ytimg.com/vi/gvk9zhLqR-c/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=gvk9zhLqR-c',
  },
  {
    title: 'किसान ने कैसे शुरुवात की जैविक फल व सब्जी उत्पादन की',
    category: 'फल एवं सब्जी उत्पादन',
    image: 'https://img.youtube.com/vi/vFfZNmVWzGA/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=vFfZNmVWzGA',
  },
  {
    title: 'फल एवं सब्जी प्रसंस्करण में उधमिता विकास',
    category: 'फल एवं सब्जी उत्पादन',
    image: 'https://img.youtube.com/vi/kNDhv75muP4/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=kNDhv75muP4',
  },
  {
    title: 'फल एवं सब्जियों का संरक्षण : कृषि दर्शन ',
    category: 'फल एवं सब्जी उत्पादन',
    image: 'https://img.youtube.com/vi/9E8sgZPNrzY/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=9E8sgZPNrzY',
  },
  {
    title: 'बिहार फल फूल एवं सब्जी उत्पादन, 2020',
    category: 'फल एवं सब्जी उत्पादन',
    image: 'https://img.youtube.com/vi/bJ5RvmMzppI/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=bJ5RvmMzppI',
  },
  {
    title: 'सिंचाई, सिंचाई की विधियाँ',
    category: 'जल प्रबंधन और सिंचाई',
    image: 'https://img.youtube.com/vi/jDXGPw0VP6A/maxresdefault.jpg',
    url: 'https://youtu.be/jDXGPw0VP6A?si=7be9cG6nqXSrpYb7',
  },
  {
    title: 'गेहूं में सिंचाई एवं जल प्रबंधन',
    category: 'जल प्रबंधन और सिंचाई',
    image: 'https://img.youtube.com/vi/3eszivDCmuo/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=3eszivDCmuo',
  },
  {
    title: 'सिंचाई या जल प्रबंधन',
    category: 'जल प्रबंधन और सिंचाई',
    image: 'https://img.youtube.com/vi/2JMpiKIyiJk/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=2JMpiKIyiJk',
  },
  {
    title: 'विचार विमर्श - खेती में जल प्रबंधन',
    category: 'जल प्रबंधन और सिंचाई',
    image: 'https://img.youtube.com/vi/FVMSOEXtGoI/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=FVMSOEXtGoI',
  },
  {
    title: 'सिंचाई की सही तकनीक – पानी की बचत और फसल की बढ़त',
    category: 'जल प्रबंधन और सिंचाई',
    image: 'https://img.youtube.com/vi/1XtCTKlCx_4/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=1XtCTKlCx_4',
  },
  {
    title: 'जल प्रबंधन-ऐसे करें सिंचाई और बचाएं पानी',
    category: 'जल प्रबंधन और सिंचाई',
    image: 'https://i3.ytimg.com/vi/blomUF0F_7M/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=blomUF0F_7M',
  },
  {
    title: 'कैसे होता है कृषि उपज मंडी का संचालन?',
    category: 'कृषि बाजार और व्यापार',
    image: 'https://img.youtube.com/vi/DmT2NnsFR2c/maxresdefault.jpg',
    url: 'https://youtu.be/DmT2NnsFR2c?si=H5s7jTNxiZe2IJI7',
  },
  {
    title: 'कृषि विपणन, व्यापार एवं मूल',
    category: 'कृषि बाजार और व्यापार',
    image: 'https://i3.ytimg.com/vi/G3KWGojbgVM/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=G3KWGojbgVM',
  },
  {
    title: 'मंडी में अनाज खरीदी-बिक्री का व्यापार कैसे शुरू करे',
    category: 'कृषि बाजार और व्यापार',
    image: 'https://i3.ytimg.com/vi/5F0yXeCK_iA/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=5F0yXeCK_iA',
  },
  {
    title: 'कृषि बाजार',
    category: 'कृषि बाजार और व्यापार',
    image: 'https://img.youtube.com/vi/4PJqMnmQX2g/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=4PJqMnmQX2g',
  },
  {
    title: 'कृषि माल बाजार व्यवस्था के बदलाव',
    category: 'कृषि बाजार और व्यापार',
    image: 'https://i3.ytimg.com/vi/P477CS6DpAw/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=P477CS6DpAw',
  },
  {
    title: 'कृषि लागत एवं मूल्य आयोग',
    category: 'कृषि बाजार और व्यापार',
    image: 'https://img.youtube.com/vi/BtMLgIZsOLU/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=BtMLgIZsOLU',
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
