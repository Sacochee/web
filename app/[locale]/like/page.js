import Likes from "./likes";
import { getData } from "../page";

export default async function page() {
    const data = await getData()
  return (
        <>
            <Likes data={data.result}/>
        </>
  )
}
