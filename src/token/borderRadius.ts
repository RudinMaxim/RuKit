import { Size } from '.';

export interface BorderRadius extends Size {
  none: '0';
  full: '50%';
}

export const borderRadius: BorderRadius = {
  extraSmall: '0.25rem',
  small: '0.5rem',
  medium: '0.75rem',
  large: '1rem',
  extraLarge: '1.25rem',
  none: '0',
  full: '50%',
};
