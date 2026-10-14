/**
 * Editorial Animation & Motion Tokens
 * Inspired by Modnia & Swiss typography layouts
 */
export const EASINGS = {
  editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
  smoothOut: 'cubic-bezier(0.25, 1, 0.5, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.2, 1)'
};

export const TRANSITION_TOKENS = {
  sectionEnter: {
    duration: '0.32s',
    easing: EASINGS.editorial
  },
  hoverFast: {
    duration: '0.2s',
    easing: 'ease'
  },
  cursorInterpolation: {
    ringLerp: 0.22,
    trail1Lerp: 0.15,
    trail2Lerp: 0.08
  }
};
