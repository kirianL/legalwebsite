import React from 'react';
import { GeometricShapesBg } from './Icons';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="hero">
      <GeometricShapesBg />

      <div className="container hero__grid">
        <div className="hero__content">
          <h1 className="hero__title">
            Protegemos y <span className="hero__title-italic">preservamos</span> lo que usted construyó
          </h1>

          <div className="hero__lead-wrap">
            <p className="hero__lead">
              Asesoría legal y financiera para clientes privados y empresas — más de 30 años de trayectoria en la región
            </p>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src="/images/themis-hero.png"
            alt="Estatua clásica de bronce de la Justicia sosteniendo la balanza y la espada"
            className="hero__statue"
            width={896}
            height={1200}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};
