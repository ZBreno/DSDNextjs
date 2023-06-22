import { ReactNode, StyleHTMLAttributes } from 'react';
import styles from './style.module.scss';

interface ButtonProps {
    children?:ReactNode;
    style?: StyleHTMLAttributes<HTMLButtonElement>;
}

export default function Button({children, style}:ButtonProps) {

    return (
        <button style={style} className={`${styles.button} ${ styles.searchButton}`}>
            {children}
        </button>
    )
}