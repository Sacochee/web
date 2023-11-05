import style from "./style.module.css"
import { useTranslations } from "next-intl"

export default function Faq() {
    const t = useTranslations("faq")
  return (
    <section>
        <h2>
            Questions frequament posée
        </h2>
        <Article Q={t("q1")} R={t("r1")}/>
        <Article Q={t("q2")} R={t("r2")}/>
    </section>
  )
}


function Article({Q, R}){
    return(
        <article>
            <h3>
                {Q}
            </h3>
            <p>
                {R}
            </p>
        </article>
    )
}