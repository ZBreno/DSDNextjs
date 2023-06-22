'use client'
import Link from "next/link";
import style from "./page.module.css";
import { useEffect, useState } from "react";
import api from "@/services/api";
import Image from "next/image";

export default function BestBooks() {
  const [books, setBooks] = useState([])

  const handleBooks = async () => {
    const response = await api.get('books')
    
    setBooks(response.data)
    
  }
  
    
  useEffect(() => {
    handleBooks()
   
  }, [])
  

  return (
    <div>
      <p> Encontre as melhores indicações de livros</p>
      <div className={style.container}>
          {books.map(({id, image}) => (
            <Link  key={id}  href={`/details/${id}`}>
              <div className={style.books}><Image width={207} height={200} src={image} alt="capa do livro"/></div>
            </Link>
          ))}
      </div>
    </div>
  );
}
