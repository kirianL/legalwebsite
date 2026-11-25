import React, { useMemo, useState } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import topologyData from 'world-atlas/countries-50m.json';
import { PARTNER_PINS } from '../data/content';
import type { PartnerPin } from '../data/content';
import './PartnersMapSection.css';

const WIDTH = 720;
const HEIGHT = 460;
const HIGHLIGHTED = new Set([
  'Costa Rica',
  'Panama',
  'Guatemala',
  'El Salvador',
  'Honduras',
  'Nicaragua',
]);

interface CountryProperties {
  name: string;
}

export const PartnersMapSection: React.FC = () => {
  const [selectedPin, setSelectedPin] = useState<PartnerPin>(PARTNER_PINS[0]);

  const { countryPaths, pins } = useMemo(() => {
    const projection = geoMercator()
      .center([-84.8, 12.1])
      .scale(1750)
      .translate([WIDTH / 2, HEIGHT / 2]);
    const pathGen = geoPath(projection);

    const topo = topologyData as unknown as Topology<{
      countries: GeometryCollection<CountryProperties>;
    }>;
    const countries = feature(topo, topo.objects.countries).features;

    const countryPaths = countries
      .filter((c) => c.properties?.name !== 'Antarctica')
      .map((c, idx) => {
        const d = pathGen(c);
        const name = c.properties?.name ?? `country-${idx}`;
        return {
          key: `${name}-${idx}`,
          d: d ?? '',
          highlighted: HIGHLIGHTED.has(name),
        };
      })
      .filter((c) => c.d.length > 0);

    const pins = PARTNER_PINS.map((p) => {
      const projected = projection([p.lon, p.lat]);
      const [x, y] = projected ?? [0, 0];
      return { ...p, x, y };
    });

    return { countryPaths, pins };
  }, []);

  return (
    <section id="partners" className="partners-section">
      <div className="container partners-grid">
        <div className="partners-info">
          <span className="eyebrow eyebrow--dark">Red regional</span>
          <h2 className="partners-info__title">70+ aliados en Centroamérica</h2>
          <p className="partners-info__desc">
            Bancos, entidades financieras, firmas legales, auditoras y asesoras inmobiliarias en las principales plazas
            de la región.
          </p>
          <a href="#contact" className="btn-garnet partners-info__cta">
            Ser aliado
          </a>

          {/* Active jurisdiction card */}
          <div className="partners-card" aria-live="polite">
            <div key={selectedPin.id} className="partners-card__body">
              <div className="partners-card__country">{selectedPin.country}</div>
              <ul className="partners-card__list">
                {selectedPin.partners.map((partner) => (
                  <li key={partner}>{partner}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="partners-map-wrap">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="partners-map"
            role="group"
            aria-label="Mapa interactivo de aliados bancarios y legales de M&P en Centroamérica"
          >
            <title>Mapa interactivo de aliados bancarios y legales de M&amp;P en Centroamérica</title>
            <g className="map-countries">
              {countryPaths.map((c) => (
                <path
                  key={c.key}
                  d={c.d}
                  fill={c.highlighted ? 'var(--accent-garnet)' : 'var(--map-land)'}
                  fillOpacity={c.highlighted ? 0.94 : 0.88}
                  stroke="var(--bg-dark)"
                  strokeWidth={0.5}
                />
              ))}
            </g>

            {/* Interactive Country Pins */}
            {pins.map((pin) => {
              const isSelected = selectedPin.id === pin.id;
              const badgeWidth = pin.country.length * 7.2 + 16;
              const isLeft = pin.labelSide === 'left';
              const rectX = isLeft ? -12 - badgeWidth : 12;
              const textX = isLeft ? -12 - badgeWidth + 8 : 20;

              return (
                <g
                  key={pin.id}
                  transform={`translate(${pin.x}, ${pin.y})`}
                  className="map-pin"
                  onMouseEnter={() => setSelectedPin(pin)}
                  onClick={() => setSelectedPin(pin)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPin(pin);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Seleccionar aliados en ${pin.country}`}
                  aria-pressed={isSelected}
                >
                  <circle r={16} fill="transparent" className="map-pin__hit" />
                  <circle
                    r={isSelected ? 9 : 6}
                    fill={isSelected ? 'var(--text-on-dark)' : 'var(--bg-dark)'}
                    stroke="var(--text-on-dark)"
                    strokeWidth="2"
                    className="map-pin__dot"
                  />
                  <rect
                    x={rectX}
                    y={-11}
                    width={badgeWidth}
                    height={22}
                    rx={2}
                    fill={isSelected ? 'var(--text-on-dark)' : 'rgba(23, 0, 0, 0.9)'}
                    className="map-pin__badge"
                  />
                  <text
                    x={textX}
                    y={3.5}
                    fontSize="11"
                    fontWeight={isSelected ? 600 : 400}
                    fill={isSelected ? 'var(--bg-dark)' : 'var(--text-on-dark)'}
                    className="map-pin__label"
                  >
                    {pin.country}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
};
