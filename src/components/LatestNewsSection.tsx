import React from 'react';
import { LATEST_NEWS } from '../data/content';
import { ArrowRightIcon, ArrowUpRightIcon } from './Icons';
import './LatestNewsSection.css';

export const LatestNewsSection: React.FC = () => {
  return (
    <section id="news" className="news-section">
      <div className="container">
        <div className="editorial-grid">
          <div className="editorial-eyebrow-col">
            <span className="eyebrow eyebrow--dark">Blog</span>
          </div>

          <div className="editorial-main-col">
            <div className="news-section__header">
              <h2 className="news-section__title">Últimas noticias</h2>
              <a href="#contact" className="link-with-badge">
                <span>Ver todas las noticias</span>
                <span className="link-with-badge__box">
                  <ArrowRightIcon size={12} />
                </span>
              </a>
            </div>

            <div className="news-list">
              {LATEST_NEWS.map((item) => (
                <article key={item.id} className="news-row">
                  <time className="news-row__date" dateTime={item.date.split('.').reverse().join('-')}>
                    {item.date}
                  </time>
                  <div className="news-row__media">
                    <img src={item.image} alt={item.title} width={220} height={135} loading="lazy" />
                  </div>
                  <div className="news-row__content">
                    <h3 className="news-row__title">{item.title}</h3>
                    <p className="news-row__excerpt">{item.excerpt}</p>
                  </div>
                  <a
                    href="#contact"
                    className="news-row__arrow"
                    aria-label={`Leer artículo: ${item.title}`}
                  >
                    <ArrowUpRightIcon size={20} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
