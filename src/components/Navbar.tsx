import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS } from '../data/content';
import { BrandLogo, ChevronDownIcon, MenuIcon, CloseIcon, PhoneIcon, PlusIcon, MinusIcon } from './Icons';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>('Temas clave');
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        if (mobileOpen) {
          setMobileOpen(false);
          burgerRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      closeRef.current?.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand" aria-label="Inicio M&P Méndez & Palacios">
          <BrandLogo />
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => {
            const hasSub = Boolean(item.subItems?.length);
            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.label}
                className="site-nav__item"
                onMouseEnter={() => {
                  if (hasSub && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                    setOpenDropdown(item.label);
                  }
                }}
                onMouseLeave={() => {
                  if (hasSub && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                    setOpenDropdown(null);
                  }
                }}
              >
                {hasSub ? (
                  <button
                    type="button"
                    className="site-nav__link"
                    aria-expanded={isOpen}
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDownIcon rotated={isOpen} />
                  </button>
                ) : (
                  <a href={item.href} className="site-nav__link">
                    <span>{item.label}</span>
                  </a>
                )}

                {hasSub && isOpen && (
                  <div className="site-nav__dropdown">
                    {item.subItems!.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="site-nav__dropdown-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <a href="tel:+50622018450" className="site-header__phone">
            +506 2201-8450
          </a>
          <a href="#contact" className="btn-garnet site-header__cta">
            Contáctenos
          </a>
        </div>

        <button
          ref={burgerRef}
          type="button"
          className="site-header__burger"
          aria-label="Abrir menú de navegación"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      </header>

      {/* Mobile Fullscreen Drawer (outside header so backdrop-filter doesn't trap fixed positioning) */}
      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navegación móvil">
          <div className="mobile-drawer__top">
            <a href="#top" onClick={() => setMobileOpen(false)}>
              <BrandLogo />
            </a>
            <button
              ref={closeRef}
              type="button"
              className="mobile-drawer__close"
              aria-label="Cerrar menú de navegación"
              onClick={() => {
                setMobileOpen(false);
                burgerRef.current?.focus();
              }}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="mobile-drawer__nav" aria-label="Mobile Menu">
            {NAV_ITEMS.map((item) => {
              const hasSub = Boolean(item.subItems?.length);
              const isExpanded = mobileExpanded === item.label;
              return (
                <div key={item.label} className="mobile-drawer__group">
                  {hasSub ? (
                    <>
                      <button
                        type="button"
                        className="mobile-drawer__trigger"
                        aria-expanded={isExpanded}
                        onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                      >
                        <span>{item.label}</span>
                        <span className="mobile-drawer__plus" aria-hidden="true">
                          {isExpanded ? <MinusIcon /> : <PlusIcon />}
                        </span>
                      </button>
                      {isExpanded && (
                        <div className="mobile-drawer__sublist">
                          {item.subItems!.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="mobile-drawer__sublink"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="mobile-drawer__trigger"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{item.label}</span>
                    </a>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mobile-drawer__footer">
            <a href="tel:+50622018450" className="mobile-drawer__phone">
              <PhoneIcon />
              <span>+506 2201-8450</span>
            </a>
            <a
              href="#contact"
              className="btn-garnet mobile-drawer__cta"
              onClick={() => setMobileOpen(false)}
            >
              Contáctenos
            </a>
          </div>
        </div>
      )}
    </>
  );
};
