import { Heart } from 'lucide-react';
import style from './style.module.css'
export default function Comment() {
  return (
    <div className={style.containerComments}>
      <div>
        <div className={style.photoProfile}></div>
      </div>
      <div className={style.comment}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          sagittis a augue sit amet auctor. Integer eget gravida nibh, vel
          feugiat nibh. Aenean malesuada, mi non maximus bibendum, magna lorem
          vulputate mauris, at rhoncus risus urna eu nibh. In sed tellus tellus.
          Suspendisse nulla augue, tempor sit amet ex vel, lobortis varius
          sapien. Phasellus in tristique felis. Phasellus blandit augue.
        </p>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 8,
            alignItems: "center",
          }}
        >
          <Heart fill="red" color="red" />
          <p style={{ color: "red" }}> gostei (12) </p>
        </div>
      </div>
    </div>
  );
}
