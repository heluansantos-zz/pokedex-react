import { InputHTMLAttributes } from 'react';

export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}
