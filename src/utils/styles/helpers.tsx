import { css } from '@emotion/react';

export const NONE = 'none';
export const resetSpacingStyles = css({ margin: 0, padding: 0 });
export const resetBorderStyles = css({ border: NONE, borderRadius: 0 });

export const resetButtonStyles = css(
  {
    appearance: NONE,
    background: NONE,
    cursor: 'pointer',
  },
  [resetSpacingStyles, resetBorderStyles]
);

export const resetListStyles = css({ listStyle: NONE, '& li': resetSpacingStyles }, [
  resetSpacingStyles,
]);
