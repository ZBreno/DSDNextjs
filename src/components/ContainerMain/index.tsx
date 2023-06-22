import React from "react";
import style from "./style.module.css";
interface ContainerMainProps {
  children: React.ReactNode;
}

export default function ContainerMain({ children }: ContainerMainProps) {
  return (
    <div className={style.container}>
      <div className={style.containerBook}>{children}</div>
    </div>
  );
}
