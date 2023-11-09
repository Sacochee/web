"use client";
import style from "./style.module.css";
import Image from "next/image";
import { useMediaQuery } from "@/compoments/hooks";

export default function page() {
  return (
    <main>
      <div className={style.center}>
        <h1 className={style.title}>Qui est Patricia Teyssier ?</h1>
      </div>
      <div className={style.grid}>
        <div className={style.pp}>
          <Image
            src={"/profile/ping.png"}
            width={useMediaQuery(1023) ? 100 : 300}
            height={useMediaQuery(1023) ? 100 : 300}
            alt="Image de profile de Patricia Teyssier"
            className={style.img}
          />
        </div>
        <div className={style.part2}>
          <H2Center data={"title 2 "} />
          <p>
            asidila,sd as diasdas da sdas dasi dAzda sd ajsid ajsd asd as dasd
            as da
          </p>
        </div>
        <div className={style.part3}>
          <H2Center data={"title 3 "} />
          <p  className={style.p}>
            aosuld naosd sdyuhiajks dasiun dkjyhuinjk yhuijnk, yhuijk èuyj yuij
            yguhin jtgy uhbj ftgyuhnj tfyg uhnjf tgyuh tfgyuh rf- tyguhj ftyguh
            frtygbhu
          </p>
        </div>
      </div>
      <div className={style.box}>
        <Image
          src={"/profile/ping1.png"}
          width={275}
          height={183}
          alt="un pingoui en action1"
        />
        <div>
          <H2Center data={"title 4 "} />
          <p className={style.p}>
            asobdilo maknskj idlojanbjskdiujknbausijkdn bhbasijkd oauisd asd
            huasiud hapius hdiu sh diuasdp iuapiu daipiu sdiaiu hd
          </p>
        </div>
      </div>
      <div className={style.box}>
        <Image
          src={"/profile/ping2.png"}
          width={275}
          height={183}
          alt="un pingoui en action1"
        />
        <div>
          <H2Center data={"title 5 "} />
          <p className={style.p}>
            asobdilo maknskj idlojanbjskdiujknbausijkdn bhbasijkd oauisd asd
            huasiud hapius hdiu sh diuasdp iuapiu daipiu sdiaiu hd
          </p>
        </div>
      </div>
    </main>
  );
}

function H2Center({ data }) {
  return (
    <div className={style.center}>
      <h2 className={style.subTitle}>{data}</h2>
    </div>
  );
}
