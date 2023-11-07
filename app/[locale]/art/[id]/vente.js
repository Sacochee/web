"use client";
import style from "./style.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/compoments/hooks";

export default function Vente({ data }) {
  const lst = data.images.split(";") ? data.images.split(";") : [data.images];
  const [img, setImg] = useState(0);
  const [full, setFull] = useState(false);
  const change = (i) => {
    if (img + i < lst.length && img + i >= 0) {
      setImg(img + i);
    } else setImg(0);
  };
  return (
    <main>
      {full ? (
        <Container>
          <div onClick={() => setFull(false)} className={style.over}>
            <div className={style.top}></div>
            <Full data={lst[img]} />
            <div className={style.bg}></div>
          </div>
        </Container>
      ) : (
        <>
          <div className={style.center}>
            <h1 className={style.title}>{data.name}</h1>
          </div>
          <section className={`${style.center} ${style.container}`}>
            <div className={style.box}>
              {lst.length == 1 ? undefined : (
                <div onClick={() => change(-1)} className={style.flecheGauche}>
                  <Image
                    src={"/images/left.png"}
                    width={40}
                    height={40}
                    alt="fleche qui pointe vers la gauche"
                  />
                </div>
              )}
              <Image
                src={`http://195.35.48.48:8080/${lst[img]}`}
                width={270}
                height={270}
                alt={data.name + "de patricia teyssier"}
                className={style.img}
                onClick={() => setFull(true)}
              />
              {lst.length == 1 ? undefined : (
                <div onClick={() => change(+1)} className={style.flecheDroite}>
                  <Image
                    src={"/images/right.png"}
                    width={40}
                    height={40}
                    alt="fleche qui pointe vers la droite"
                  />
                </div>
              )}
            </div>
          </section>
          <section className={style.cont}>
            <div className={style.part1}>
              <div className={style.price}>{data.price}€</div>
              <div className={style.size}>
                <div className={style.flex}>
                  <div className={style.height}>{data.heigth}</div>
                  <div className={style.carre}></div>
                </div>
                <div className={style.flex}>
                  <div className={style.cm}>Cm</div>
                  <div className={style.width}>{data.width}</div>
                </div>
              </div>
            </div>
            <button className={style.btn}>Buy</button>
            <p>{data.description}</p>
          </section>
        </>
      )}
    </main>
  );
}

function Full({ data }) {
  return (
    <div
      style={{ width: screen.width }}
      className={`${style.center}  ${style.full}`}
    >
      <Image
        src={`http://195.35.48.48:8080/${data}`}
        width={screen.width < screen.height ? screen.width : screen.height}
        height={screen.width < screen.height ? screen.width : screen.height}
        alt="tableaux de patricial en full Screen"
        className={style.full}
      />
    </div>
  );
}

function Container({ children }) {
  useEffect(() => {
    scrollBy(0, 0)
  });
  return <div>{children}</div>;
}
