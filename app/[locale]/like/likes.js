"use client"
import Tableaux from '@/compoments/main/tableaux'
import Link from 'next/link'
import style from "./style.module.css"

export default function Likes({data}) {
    const id = localStorage.getItem("Id")
    const ids = id ? id.split(";") : []
    const d = []
    data.map((item)=>{
        ids.map((id)=>{
            if(item.id == id.toString())
                d.push(item)
        })
    })
    console.log(d)
  return (
    <main>
        {
            d[0] == undefined ? 
            <Oups/> 
            :
            <ul className={style.ul}>
                {d.map((item)=><Li data={item}/>)}
            </ul>
        }
    </main>
  )
}

function Oups(){
    return(
    <div>
        Vous n avez encore liké aucun tableuax
        <Link href={"/"}>
            Retrouner a la page d acceuile
        </Link>
    </div>
    )
}

function Li({data}){
    
    if(data != undefined)
        return(
            <Tableaux data={data} />
        )
    else
        return(
    <div>
        Oups il y a une erreur dans le chargement de ce tableuax
    </div>
    )
}