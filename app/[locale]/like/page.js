"use client"
import Tableaux from '@/compoments/main/tableaux'
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

export default  function page() {
    const data  = localStorage.getItem("Id").split(";") | undefined 
    console.log(data)
  return (
    <main>
        {
            data == undefined ? 
              <Oups/> :<ul>
                {data.map((item)=><li key={item}>

                </li>)}
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

function Li(id){
    let data = undefined
    useEffect(()=>{
        fetch(`195.35.48.48:8080/tableaux/?id=${id}`).then((res)=>data = res.result
        ).catch(err=>console.log(err))
    })
    if(data != undefined)
        return(
            <Tableaux data={data} key={uuidv4()}/>
        )
    else
        return(
    <div>
        Oups il y a une erreur dans le chargement de ce tableuax
    </div>
    )
}