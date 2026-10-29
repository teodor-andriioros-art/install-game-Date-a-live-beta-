const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const DownloadIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v12m0 0-5-5m5 5 5-5M4 20h16" />
  </svg>
)

export const PlayIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M6 3.5v17l14-8.5z" />
  </svg>
)

export const ChevronLeft = (p) => (
  <svg {...base} {...p}>
    <path d="m15 4-8 8 8 8" />
  </svg>
)

export const ChevronRight = (p) => (
  <svg {...base} {...p}>
    <path d="m9 4 8 8-8 8" />
  </svg>
)

export const WindowsIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M3 4.5 10.5 3.5v7.5H3zM11.5 3.4 21 2v9h-9.5zM3 12h7.5v7.5L3 18.500zM11.500 12H21v9l-9.500-1.400z" />
  </svg>
)

export const LinuxIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2c-2.200 0-3.500 1.800-3.500 4.200 0 1.300.3 2.200-.5 3.600C6.800 11.900 5 14.500 5 17.300c0 1.200.6 1.900 1.700 2.300.900.300 1.300.9 2 1.600.800.800 2 .8 3.300.8s2.500 0 3.300-.800c.700-.700 1.100-1.300 2-1.600 1.100-.400 1.700-1.100 1.700-2.300 0-2.800-1.800-5.400-3-7.500-.8-1.400-.5-2.300-.5-3.600C15.500 3.800 14.200 2 12 2zm-1.600 4.500a.9 1.200 0 1 1 0 .1zm3.200 0a.9 1.200 0 1 1 0 .1zM12 8.200c1 0 1.800.600 1.800 1.100S12.900 10.500 12 10.500s-1.800-.700-1.800-1.200S11 8.200 12 8.200z" />
  </svg>
)

export const AppleIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16.400 12.600c0-2.300 1.900-3.400 2-3.500-1.100-1.600-2.800-1.800-3.400-1.800-1.400-.1-2.800.9-3.500.9s-1.800-.8-3-.8c-1.500 0-3 .9-3.800 2.300-1.600 2.800-.4 7 1.200 9.300.8 1.100 1.700 2.400 2.900 2.300 1.200 0 1.600-.7 3-.7s1.800.7 3 .7c1.300 0 2.100-1.100 2.800-2.200.9-1.300 1.200-2.500 1.300-2.600-.1 0-2.500-1-2.500-3.900zM14.200 5.700c.6-.8 1.100-1.800.9-2.900-.9 0-2 .6-2.700 1.400-.6.700-1.100 1.800-1 2.800 1 .1 2.100-.5 2.800-1.300z" />
  </svg>
)

export const GearIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3.200" />
    <path d="M12 2.500v3M12 18.500v3M4.500 4.500l2.100 2.100M17.400 17.400l2.100 2.100M2.500 12h3M18.500 12h3M4.500 19.500l2.100-2.100M17.400 6.600l2.100-2.100" />
  </svg>
)

export const CpuIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9.500" y="9.500" width="5" height="5" />
    <path d="M9 2.500v3M15 2.500v3M9 18.500v3M15 18.500v3M2.500 9h3M2.500 15h3M18.500 9h3M18.500 15h3" />
  </svg>
)

export const RamIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="2.500" y="6.500" width="19" height="9" rx="1.500" />
    <path d="M6 15.500v2.500M10 15.500v2.500M14 15.500v2.500M18 15.500v2.500M6 10.500h2M11 10.500h2M16 10.500h2" />
  </svg>
)

export const DiskIcon = (p) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6c0 1.700 3.600 3 8 3s8-1.300 8-3V6M4 12v6c0 1.700 3.600 3 8 3s8-1.300 8-3v-6" />
  </svg>
)

export const SupportIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <circle cx="9" cy="7.500" r="4" />
    <path d="M1.500 21c0-4 3.300-6.500 7.500-6.500 1.200 0 2.300.2 3.200.6-.9 1.500-.5 3.600 1 5.100l.7.800z" />
    <path d="M18 21.500c-3.600-2.300-5-3.700-5-5.300a2.600 2.600 0 0 1 5-1 2.600 2.600 0 0 1 5 1c0 1.600-1.400 3-5 5.300z" />
  </svg>
)

export const UserIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <circle cx="12" cy="7" r="4.500" />
    <path d="M3 21c0-4.800 4-7.500 9-7.500s9 2.700 9 7.500z" />
  </svg>
)

export const CalendarIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M7 1.500h2v2.500h6V1.500h2V4h3v18H4V4h3zM6 9v11h12V9zm2 2h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2z" />
  </svg>
)

export const MailIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="2.500" y="4.500" width="19" height="15" rx="2" />
    <path d="m3 6.500 9 7 9-7" />
  </svg>
)

export const LockIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="4.500" y="10.500" width="15" height="10.500" rx="2" />
    <path d="M8 10.500V7.500a4 4 0 0 1 8 0v3M12 15v2" />
  </svg>
)

export const EyeOffIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 3l18 18M10.600 5.100A9.800 9.800 0 0 1 12 5c5 0 8.500 4 9.500 7a12 12 0 0 1-2.600 3.900M6.600 6.700A12.400 12.400 0 0 0 2.500 12c1 3 4.500 7 9.500 7a9.700 9.700 0 0 0 4.400-1M9.900 9.900a3 3 0 0 0 4.200 4.200" />
  </svg>
)

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </svg>
)
