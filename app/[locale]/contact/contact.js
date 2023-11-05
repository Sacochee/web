"use client"
import { useState } from "react"
import style from "./style.module.css"
import Image from "next/image"

export default function Contact() {
  const [err, setErr] = useState(false)
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [text, setText] = useState()
  const setData = () =>{
    if(email.includes(".") && email.includes("@")){
      if(phone.length >= 9){

      }
    }
  }
 const tel = (e)=>{
  console.log(e.target.value)
  const tel = e.target.value.split("")
  if(tel.length == 1){
    for(let i = 0 ; i<=10;i++){
      if(tel[0] == i.toString()){
        setPhone(tel)
      }
    }
  }
  console.log(tel)
  const last = tel.pop()
  for(let i = 0; i<= 10; i++){
    if(last == i.toString()){
      console.log("yes")
      return setPhone(tel)
    }
    else
      continue
  }
  console.log("no")
  return setPhone(tel.pop())
}
  return (
    <main>
      <div className={style.center}>
        <h1 className={style.title}>
          Contact
        </h1>
      </div>
      <section className={style.contact}>
        <div className={style.part}>
          <label className={style.lb}>
            Email
          </label>
          <input placeholder="exemple@exemple.com" type="email" className={style.input} value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label className={style.lb}>
            Numéro de téléphone
          </label>
          <input placeholder="06 00 00 00 00" type="text" className={style.input} value={phone} onChange={(e)=>tel(e)}/>
        </div>
        <div style={{position:"relative"}}>
            <label htmlFor="txt" className={style.label}>
             Message pour l'artiste
            </label>
            <textarea cols={30} rows={10} className={style.text} placeholder="Ecrivez votre message Ici" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        {err ? <Err /> : undefined}
        <button className={style.btn}>
          Envoyer
        </button>
      </section>
      <div className={style.center}>
        <p className={style.or}>
          OU
        </p>
      </div>
      <section className={style.mail}>
        <a href="mailto:patdsasda@gmail.com" className={style.a}>
          <Image 
          src={"/icons/mail.png"}
          width={30}
          height={30}
          alt="logo d un mail"
          />
          <div className={style.data}>
            kjasdasdasda@fasdas.com
          </div>
        </a>
        <a href="tel:0620719864" className={style.a}>
          <Image 
          src={"/icons/tel.png"}
          width={30}
          height={30}
          alt="logo d un téléphone"
          />
          <div className={style.data}>
            +33.6.20.50.50.20
          </div>
        </a>
      </section>
    </main>
  )
}


function Err(){
  return(<div>

  </div>)
}


