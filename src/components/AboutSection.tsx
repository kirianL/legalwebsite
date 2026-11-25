import React from 'react';
import { ArrowRightIcon } from './Icons';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="editorial-grid">
          <div className="editorial-eyebrow-col">
            <span className="eyebrow eyebrow--light">Nosotros</span>
          </div>

          <div className="editorial-main-col">
            <h2 className="about-section__heading">
              Protección y resguardo patrimonial para clientes de alto valor
            </h2>

            <p className="about-section__copy">
              Ayudamos a familias empresarias y clientes privados a proteger, estructurar y transmitir su patrimonio.
              Fundada en 1995, desde 2007 nuestra firma trabaja de forma exclusiva con clientes privados, bancos líderes
              e instituciones financieras en Costa Rica, Panamá y toda Centroamérica. Confidencialidad y respaldo jurídico.
            </p>

            <a href="#contact" className="link-with-badge about-section__link">
              <span>Conozca más sobre nosotros</span>
              <span className="link-with-badge__box">
                <ArrowRightIcon size={12} />
              </span>
            </a>

            <div className="about-stats">
              <div className="about-stats__item">
                <div className="about-stats__value">
                  31 <span className="about-stats__unit">años</span>
                </div>
                <p className="about-stats__label">en servicios legales y financieros</p>
              </div>
              <div className="about-stats__item">
                <div className="about-stats__value">2,700+</div>
                <p className="about-stats__label">clientes patrimoniales y familias asesoradas</p>
              </div>
              <div className="about-stats__item">
                <div className="about-stats__value">70+</div>
                <p className="about-stats__label">especialistas y aliados bancarios regionales</p>
              </div>
            </div>

            <div className="about-section__banner">
              <img
                src="/images/about-office.jpg"
                alt="Ejecutivos en silueta dentro de un atrio arquitectónico moderno de vidrio"
                width={960}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
