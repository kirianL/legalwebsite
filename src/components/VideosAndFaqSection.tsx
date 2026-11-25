import React, { useState, useEffect, useRef } from 'react';
import { VIDEOS, FAQ_CARDS } from '../data/content';
import { ArrowLeftIcon, ArrowRightIcon, PlayIcon, CloseIcon } from './Icons';
import './VideosAndFaqSection.css';

export const VideosAndFaqSection: React.FC = () => {
  const [videoIdx, setVideoIdx] = useState(0);
  const [activeVideo, setActiveVideo] = useState<(typeof VIDEOS)[0] | null>(null);
  const closeModalRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeVideo) return;
    closeModalRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
        lastTriggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeVideo]);

  const closeModal = () => {
    setActiveVideo(null);
    lastTriggerRef.current?.focus();
  };

  return (
    <section className="videos-faq-section">
      <div className="container">
        {/* Videos row */}
        <div className="editorial-grid">
          <div className="editorial-eyebrow-col">
            <span className="eyebrow eyebrow--dark">Videos</span>
          </div>

          <div className="editorial-main-col">
            <div className="videos-header">
              <div>
                <h2 className="videos-header__title">Videos</h2>
                <p className="videos-header__sub">Cápsulas jurídicas breves sobre consultas frecuentes</p>
              </div>
              <div className="videos-header__controls">
                <button
                  type="button"
                  className="icon-square-btn"
                  aria-label="Video anterior"
                  disabled={videoIdx === 0}
                  onClick={() => setVideoIdx((i) => Math.max(0, i - 1))}
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  type="button"
                  className="icon-square-btn"
                  aria-label="Siguiente video"
                  disabled={videoIdx >= VIDEOS.length - 2}
                  onClick={() => setVideoIdx((i) => Math.min(VIDEOS.length - 2, i + 1))}
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            <div className="videos-grid">
              {VIDEOS.slice(videoIdx, videoIdx + 2).map((video) => (
                <article key={video.id} className="video-card">
                  <button
                    type="button"
                    className="video-card__thumb"
                    onClick={(e) => {
                      lastTriggerRef.current = e.currentTarget;
                      setActiveVideo(video);
                    }}
                    aria-label={`Ver adelanto: ${video.title}`}
                  >
                    <img src={video.thumbnail} alt="" width={480} height={270} loading="lazy" />
                    <span className="video-card__play" aria-hidden="true">
                      <PlayIcon size={18} />
                    </span>
                    <span className="video-card__duration">{video.duration}</span>
                  </button>
                  <h3 className="video-card__title">{video.title}</h3>
                  <p className="video-card__desc">{video.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Dual-tone FAQ cards from reference */}
        <div className="editorial-grid faq-row">
          <div className="editorial-eyebrow-col">
            <h2 className="eyebrow eyebrow--dark">Preguntas frecuentes</h2>
          </div>
          <div className="editorial-main-col">
            <div className="faq-cards-grid">
              {FAQ_CARDS.map((card) => (
                <article
                  key={card.id}
                  className={`faq-card faq-card--${card.variant}`}
                >
                  <svg className="faq-card__mesh" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                    <path d="M180 0V300M0 160L300 80M180 112L300 240" stroke="currentColor" strokeOpacity="0.12" />
                    <circle cx="180" cy="112" r="3" fill="currentColor" fillOpacity="0.25" />
                  </svg>
                  <h3 className="faq-card__question">{card.question}</h3>
                  <div className="faq-card__bottom">
                    <p className="faq-card__answer">{card.answer}</p>
                    <a href="#contact" className="link-with-badge">
                      <span>Conocer más</span>
                      <span className="link-with-badge__box">
                        <ArrowRightIcon size={12} />
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeVideo && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={closeModal}
        >
          <div className="video-modal__panel" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal__head">
              <h3>{activeVideo.title}</h3>
              <button
                ref={closeModalRef}
                type="button"
                aria-label="Cerrar vista previa"
                onClick={closeModal}
                className="video-modal__close"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="video-modal__preview">
              <img src={activeVideo.thumbnail} alt="" width={640} height={360} />
              <div className="video-modal__badge">
                Vista previa ({activeVideo.duration}) — Solicite la grabación completa mediante consulta
              </div>
            </div>
            <p className="video-modal__desc">{activeVideo.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};
