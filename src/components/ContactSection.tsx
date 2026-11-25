import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { BrandLogo, ClockIcon, MailIcon, PhoneIcon, PinIcon, SocialIcon } from './Icons';
import './ContactSection.css';

const SAN_JOSE_COORDS: [number, number] = [9.9415, -84.1394];

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'error' | 'submitted'>('idle');
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = L.map(mapRef.current, {
      center: SAN_JOSE_COORDS,
      zoom: 15,
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    const icon = L.divIcon({
      className: 'contact-map-pin',
      html: `<svg viewBox="0 0 28 40" width="28" height="40" aria-hidden="true">
        <path d="M14 0C6.3 0 0 6.3 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.3 21.7 0 14 0z" fill="#E8C9A9"/>
        <circle cx="14" cy="14" r="5" fill="#270000"/>
      </svg>`,
      iconSize: [28, 40],
      iconAnchor: [14, 40],
    });

    L.marker(SAN_JOSE_COORDS, {
      icon,
      title: 'Avenida Escazú, Torre Lex, San José, Costa Rica',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !consent) {
      setStatus('error');
      return;
    }
    setStatus('submitted');
    setName('');
    setPhone('');
    setComment('');
    setConsent(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-header__title">contáctenos</h2>
          <div className="contact-header__social">
            <span className="contact-header__social-label">Síganos</span>
            <div className="contact-social-row">
              {(['Telegram', 'WhatsApp', 'YouTube', 'LinkedIn'] as const).map((net) => (
                <a
                  key={net}
                  href="#contact"
                  className="contact-social-box"
                  aria-label={`Méndez & Palacios en ${net}`}
                >
                  <SocialIcon name={net} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-col">
            <div className="contact-info-row">
              <div>
                <div className="contact-info-label">Escríbanos</div>
                <a href="mailto:contacto@mp-centroamerica.cr" className="contact-info-value">
                  contacto@mp-centroamerica.cr
                </a>
              </div>
              <span className="contact-info-icon">
                <MailIcon />
              </span>
            </div>

            <div className="contact-info-row">
              <div>
                <div className="contact-info-label">Nuestra oficina</div>
                <div className="contact-info-value">Avenida Escazú, Torre Lex, San José, Costa Rica</div>
              </div>
              <span className="contact-info-icon">
                <PinIcon />
              </span>
            </div>

            <div className="contact-location-map" role="region" aria-label="Mapa de ubicación en Avenida Escazú, San José">
              <div ref={mapRef} className="contact-leaflet-map" />
              <span className="contact-location-caption">Avenida Escazú, San José — Acceso privado</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-col">
            <div className="contact-info-row">
              <div>
                <div className="contact-info-label">Llámenos</div>
                <a href="tel:+50622018450" className="contact-info-value">
                  +506 2201-8450
                </a>
              </div>
              <span className="contact-info-icon">
                <PhoneIcon />
              </span>
            </div>

            <div className="contact-info-row">
              <div>
                <div className="contact-info-label">Horario de atención</div>
                <div className="contact-info-value">Lun–Vie: 8:30–18:00</div>
              </div>
              <span className="contact-info-icon">
                <ClockIcon />
              </span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="contact-form__title">Solicitar asesoría</h3>

              <label className="contact-field">
                <span className="sr-only">Nombre</span>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="*Nombre"
                  value={name}
                  aria-invalid={status === 'error' && !name.trim()}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  required
                />
              </label>

              <label className="contact-field">
                <span className="sr-only">Teléfono</span>
                <input
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="*Teléfono"
                  value={phone}
                  aria-invalid={status === 'error' && !phone.trim()}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  required
                />
              </label>

              <label className="contact-field">
                <span className="sr-only">Comentario</span>
                <input
                  type="text"
                  placeholder="Comentario"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </label>

              <label className="contact-consent">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span>
                  Al hacer clic en Enviar, autorizo el <u>tratamiento de mis datos personales</u>.
                </span>
              </label>

              {status === 'error' && (
                <p className="contact-feedback contact-feedback--error" role="alert">
                  Por favor complete su nombre, teléfono y acepte el tratamiento de datos personales.
                </p>
              )}
              {status === 'submitted' && (
                <p className="contact-feedback contact-feedback--success" role="status">
                  Solicitud recibida. Un socio director se pondrá en contacto a la brevedad.
                </p>
              )}

              <button type="submit" className="btn-garnet contact-form__submit">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <footer className="footer-bottom">
          <BrandLogo />
          <div className="footer-bottom__meta">
            <span>&copy; {new Date().getFullYear()} Méndez &amp; Palacios Grupo de Servicios Privados.</span>
            <span>Confidencialidad y aviso legal</span>
          </div>
        </footer>
      </div>
    </section>
  );
};
