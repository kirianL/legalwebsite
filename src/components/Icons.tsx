import React from 'react';

export const BrandLogo: React.FC = () => (
  <span className="brand-logo">
    <span className="brand-logo__mark">M&amp;P</span>
    <span className="brand-logo__tagline">
      <strong>Méndez &amp; Palacios</strong>
      <span>Grupo de Servicios Privados</span>
    </span>
  </span>
);

export const ArrowRightIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const ArrowLeftIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const ArrowUpRightIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const ChevronDownIcon: React.FC<{ size?: number; rotated?: boolean }> = ({ size = 10, rotated = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    className={`icon-chevron${rotated ? ' icon-chevron--rotated' : ''}`}
  >
    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
  </svg>
);

export const PlusIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const MinusIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const PlayIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M6.5 4.5L15.5 10L6.5 15.5V4.5Z" fill="currentColor" />
  </svg>
);

export const MenuIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7H21M3 12H21M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const CloseIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const PhoneIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const MailIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const PinIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const ClockIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const SocialIcon: React.FC<{ name: 'Telegram' | 'WhatsApp' | 'YouTube' | 'LinkedIn' }> = ({ name }) => {
  switch (name) {
    case 'Telegram':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21 5L2 12.5l7 1.5M21 5l-2.5 15L9 14m12-9L9 14m0 0v5l3.5-3.2" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case 'WhatsApp':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 11.5a8.5 8.5 0 0 1-12.5 7.5L3 20l1-4.3A8.5 8.5 0 1 1 20 11.5z" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9.5 9.5c.3 1.5 2 3.2 3.5 3.5l1.2-1 1.5.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'YouTube':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2.5" y="5.5" width="19" height="13" rx="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M10 9.2l5.5 2.8-5.5 2.8V9.2z" fill="currentColor" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 10.5v6M8 7.5v.5M12 16.5v-3.5a2 2 0 0 1 4 0v3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
  }
};

export const GeometricShapesBg: React.FC = () => (
  <svg viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="hero__bg">
    {/* Diagonal central-left band matching reference imgi_76 */}
    <polygon points="735,0 1180,0 780,900 475,900" fill="#320B0D" />
    {/* Upper-right facet */}
    <polygon points="1040,0 1440,0 1440,460 885,460" fill="#391113" />
    {/* Lower-right diamond/facet */}
    <polygon points="885,460 1440,460 1440,900 695,900" fill="#2D0708" />
    {/* Subtle secondary diagonal highlight */}
    <polygon points="1180,0 1440,0 1440,260 1020,460" fill="#3F1517" fillOpacity="0.65" />
  </svg>
);
