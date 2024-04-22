import { lightTheme } from './theme';
export const breakpoints = lightTheme.spacing.breakpoints;

export type BreakPoints = keyof typeof breakpoints;

export const mq = (breakpoint: BreakPoints) =>
  `@media screen and (min-width: ${breakpoints[breakpoint]})`;
