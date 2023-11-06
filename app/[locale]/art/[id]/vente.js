"use client"
import style from "./style.module.css"
import { useState } from "react"

export default function Vente({data}) {
    console.log(data)
    console.dir(data)
  return (
    <main>
        <div>
            <h1>
                {data.name}
            </h1>
        </div>
        <section>

        </section>
        <section>
            <div>

            </div>
            <button>
                Buy
            </button>
            <p>
                {data.description}
            </p>
        </section>
    </main>
  )
}
