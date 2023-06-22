"use client";
import { Star, Heart } from "lucide-react";
import style from "./style.module.css";
import Comment from "../Comment";
import { useEffect, useState } from "react";
import api from "@/services/api";
import Image from "next/image";

interface DetailsBookProps {
  id: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  abstract: string;
  image: string | StaticImport;
  users: number[],
  comments: number[],
}

export default function DetailsBook({ id }: DetailsBookProps) {
  const [book, setBook] = useState<Book | null>(null);

  const handleBook = async () => {
    const response = await api.get(`books/${id}`);
    setBook(response.data);
  };

  useEffect(() => {
    handleBook();
  }, []);
  return (
    <div className={style.container}>
      <div className={style.containerInfo}>
        <Image alt="capa do livro" src={book?.image} width={300} height={400}/>
        <p className={style.title}>{book?.title}</p>
        <p className={style.description}>Lorem ipsum dolor sit amet</p>
        <p className={style.creator}>{book?.author}</p>
        <div>
          <Star color="yellow" fill="yellow" />
          <Star color="yellow" fill="yellow" />
          <Star color="yellow" fill="yellow" />
          <Star color="yellow" fill="yellow" />
          <Star color="gray" fill="gray" />
        </div>
        <button className={style.button}>Adicionar à biblioteca</button>
      </div>
      <div>
        <p className={style.titleBook}>{book?.title}</p>
        <div
          style={{
            display: "flex",

            alignItems: "center",
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          <p className={style.ratingNumber}>4.5</p>
          <p className={style.quantityRating}>93 avaliações</p>
        </div>
        <div className={style.containerCreate}>
          <p>criador</p>
          <p>data</p>
        </div>
        <p className={style.description}>
          {book?.abstract}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <p className={style.titleComment}>Comentários</p>

          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
}
