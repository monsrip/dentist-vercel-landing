export function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  };

  const icons = {
    tooth: (
      <svg {...common}>
        <path d="M8.2 3.5c1.2 0 2.2.6 3.8.6s2.6-.6 3.8-.6c3 0 4.7 2.6 4.2 5.6-.4 2.2-1.5 3.8-2.2 5.8-.9 2.7-1.4 5.6-3.2 5.6-1.6 0-1.4-4.7-2.6-4.7s-1 4.7-2.6 4.7c-1.8 0-2.3-2.9-3.2-5.6-.7-2-1.8-3.6-2.2-5.8-.5-3 1.2-5.6 4.2-5.6Z" />
        <path d="M10 7c.7.5 1.4.7 2 .7s1.3-.2 2-.7" />
      </svg>
    ),
    sparkles: (
      <svg {...common}>
        <path d="m12 3 1 3.2L16 8l-3 1.8-1 3.2-1-3.2L8 8l3-1.8L12 3Z" />
        <path d="m18.5 13 .7 2.2 2.1 1.3-2.1 1.2-.7 2.3-.7-2.3-2.1-1.2 2.1-1.3.7-2.2Z" />
        <path d="m5.5 12 .5 1.6 1.5.9-1.5.9-.5 1.6-.5-1.6-1.5-.9 1.5-.9.5-1.6Z" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.8 2.8 8.3 7 10 4.2-1.7 7-5.2 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    scan: (
      <svg {...common}>
        <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
        <path d="M7 12h10M12 7v10" />
      </svg>
    ),
    braces: (
      <svg {...common}>
        <path d="M6 7c1.7-1.2 3.7-1.8 6-1.8S16.3 5.8 18 7v10c-1.7 1.2-3.7 1.8-6 1.8S7.7 18.2 6 17V7Z" />
        <path d="M6 10h12M6 14h12M9 9v6M15 9v6" />
      </svg>
    ),
    implant: (
      <svg {...common}>
        <path d="M9 3h6l1 4-2 3H10L8 7l1-4Z" />
        <path d="M10 10v3h4v-3M9 13h6M10 16h4M11 19h2M12 13v8" />
      </svg>
    ),
    child: (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21c.8-4 3.2-6 7-6s6.2 2 7 6M9.5 8h.01M14.5 8h.01M10.5 10.5c.9.6 2.1.6 3 0" />
      </svg>
    ),
    phone: (
      <svg {...common}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2c-8.3-.9-14.8-7.4-15.7-15.7A2 2 0 0 1 6.1 4h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L10 12c1.5 2.8 3.2 4.5 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7Z" />
      </svg>
    ),
    calendar: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    location: (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    star: (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="m12 2.7 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 2.7Z" />
      </svg>
    ),
    quote: (
      <svg {...common}>
        <path d="M9 11H5c0-4 1-6 5-8v3c-2 1-2 2-2 3h1v5H4v-3h5ZM20 11h-4c0-4 1-6 5-8v3c-2 1-2 2-2 3h1v5h-5v-3h5Z" />
      </svg>
    ),
    menu: (
      <svg {...common}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    ),
    close: (
      <svg {...common}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    ),
    whatsapp: (
      <svg {...common}>
        <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z" />
        <path d="M8.2 7.7c.2-.4.5-.4.8-.4h.4c.2 0 .4 0 .5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.5.9 1.3 1.7 2.2 2.2.3.2.5.2.7 0l.7-.8c.2-.2.4-.3.7-.2l1.7.8c.3.1.5.3.5.5 0 .3-.2 1.4-.8 1.9-.6.5-1.4.7-2.3.5-1.1-.2-2.5-.8-4.2-2.3-1.4-1.2-2.3-2.7-2.6-3.8-.3-1-.1-1.8.2-2.4Z" />
      </svg>
    )
  };

  return icons[name] || icons.tooth;
}
