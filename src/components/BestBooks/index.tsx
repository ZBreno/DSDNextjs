import Link from "next/link";
import style from "./page.module.css";
import { useEffect } from "react";

export default function BestBooks() {
  const books = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  return (
    <div>
      <p> Encontre as melhores indicações de livros</p>
      <div className={style.container}>
        {books.map((index) => (
          <Link  key={index} href={`/details/${index}`}>
            <div className={style.books}></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
