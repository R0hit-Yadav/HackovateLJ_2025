import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../layout/layout";
import './News.css'


const apiKey = import.meta.env.VITE_NEWS_API_KEY;
console.log("API Key:", apiKey);

const API_URL = `https://newsapi.org/v2/everything?q=agriculture+farming+crops&language=en&apiKey=${apiKey}`;

  const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        const filteredArticles = response.data.articles.filter(
          (article) =>
            article.title.toLowerCase().includes("agriculture") ||
            article.description?.toLowerCase().includes("agriculture")
        );
        setArticles(filteredArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <Layout>
      <div className="agri-container">
        <h1 className="agri-heading">Agriculture News</h1>
        {loading ? (
          <p className="agri-loading">Loading...</p>
        ) : (
          <div className="agri-card-container">
            {articles.map((article, index) => (
              <div className="agri-card" key={index}>
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="agri-card-image"
                  />
                )}
                <div className="agri-card-content">
                  <h3 className="agri-card-title">{article.title}</h3>
                  <p className="agri-card-description">
                    {article.description?.slice(0, 100)}...
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="agri-card-button"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default News;
