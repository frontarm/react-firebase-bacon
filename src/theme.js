import { css } from 'styled-components/macro'

export const colors = {
  background: {
    canvas: '#f5f7fa',
    card: '#ffffff',
  },
  beacon: {
    focus: 'rgba(68, 136, 221, 0.75)',
    focusGlow: 'rgba(68, 136, 221, 0.4)',
  },
  border: {
    default: '#eaecf2',
    field: '#e0e8ec',
  },
  primary: {
    default: '#102030',
    light: '#aabbcc',
  },
  text: {
    alt: '#607080',
    default: '#282A2C',
    error: '#733939',
    label: '#334455',
    reverse: 'rgba(255, 255, 255, 0.93)',
  },
}

export const dimensions = {
  oneRemInPixels: 16,
}

export const radii = {
  small: '4px',
  medium: '8px',
}

export const shadows = {
  beacon: color => `
    0 0 0 2px ${colors.beacon[color]},
    0 0 4px 3px ${colors.beacon[color + 'Glow']}
  `,
  bevel: () => `
    1px 1px 1px rgba(255, 255, 255, 0.12) inset,
    -1px -1px 1px rgba(0, 0, 0, 0.08) inset
  `,
  card: () => `
    0 0 5px 3px rgba(0, 0, 0, 0.01),
    0 0 2px 0px rgba(0, 0, 0, 0.02)
  `,
  drop: () => `
    1px 1px 1px rgba(255, 255, 255, 0.12) inset,
    -1px -1px 1px rgba(0, 0, 0, 0.08) inset
  `,
  sunk: () => `
    2px 2px 2px rgba(16, 32, 48, 0.03) inset
  `,
}

export const beaconRing = (selector, radius) =>
  css`
    ${selector} {
      content: ' ';
      position: absolute;
      border-radius: ${radius};
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      z-index: -1;
    }
    :focus${selector} {
      box-shadow: ${shadows.beacon('focus')};
    }
  `
