import React, { InputHTMLAttributes } from 'react';
import style from './style.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function InputForm({...rest}: InputProps) {
  return (
    <div>
      <input className={style.input} {...rest} />
    </div>
  );
}