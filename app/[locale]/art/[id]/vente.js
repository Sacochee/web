"use client";
import style from "./style.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/compoments/hooks";
import desktop from "./desktop.module.css"

export default function Vente({ data }) {
  const lst = data.images.split(";") ? data.images.split(";") : [data.images];
  
  return (
    <main>
      <div className={style.center}>
        <h1 className={style.title}>{data.name}</h1>
      </div>
      <div className={style.cadre}>
        <section className={`${style.center} ${style.container}`}>
          {useMediaQuery(1023) ? <ImagesMobile lst={lst} data={data}/> : <ImageDesktop data={lst}/>}
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
          <p className={style.desc}>{data.description}</p>
        </section>
      </div>
      <section>
          <h2>
            faq 2 vente 
          </h2>
        </section>
    </main>
  );
}

function ImagesMobile({data, lst}){
  const [img, setImg] = useState(0);
  const [full, setFull] = useState(false);
  const change = (i) => {
    if (img + i < lst.length && img + i >= 0) {
      setImg(img + i);
    } else setImg(0);
  };
  return(
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
  )
}

function ImageDesktop({data : lst}){
  const [img, setImg] = useState(lst[0])
  return(
    <div className={desktop.main}>
      <div className={desktop.part}>
        {lst.map((item)=><Image 
        src={`http://195.35.48.48:8080/${item}`}
        width={100}
        height={100}
        onClick={()=>setImg(item)}
        className={desktop.select}
        />)}
      </div>
      <div className={desktop.img}>
        <Image 
        src={`http://195.35.48.48:8080/${img}`}
        width={600}
        height={600}
        />
      </div>
    </div>
  )
}