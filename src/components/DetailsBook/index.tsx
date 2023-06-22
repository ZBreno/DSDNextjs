import { Star, Heart } from "lucide-react";
import style from "./style.module.css";
import Comment from "../Comment";

export default function DetailsBook() {
  return (
    <div className={style.container}>
      <div className={style.containerInfo}>
        <div className={style.book}></div>
        <p className={style.title}>Título do livro</p>
        <p className={style.description}>Lorem ipsum dolor sit amet</p>
        <p className={style.creator}>Fulano de Tal</p>
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
        <p className={style.titleBook}>Título do livro</p>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          sagittis a augue sit amet auctor. Integer eget gravida nibh, vel
          feugiat nibh. Aenean malesuada, mi non maximus bibendum, magna lorem
          vulputate mauris, at rhoncus risus urna eu nibh. In sed tellus tellus.
          Suspendisse nulla augue, tempor sit amet ex vel, lobortis varius
          sapien. Phasellus in tristique felis. Phasellus blandit augue.
        </p>
        <div style={{display: "flex", flexDirection: "column",gap: 32}}>
          <p className={style.titleComment}>Comentários</p>

          <Comment/>
          <Comment/>  
        </div>
       
      </div>
    </div>
  );
}
