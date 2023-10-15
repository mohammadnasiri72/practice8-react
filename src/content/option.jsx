import { useContext } from "react"
import { TextColor , BorderColor } from '../App'
export default function Option() {
    const setTColor = useContext(TextColor);
    const setBColor = useContext(BorderColor);

    return (
        <>
            <div className="w-75 m-2 test2">
                <h1>{`Options`}</h1>
                <p>this is options page</p>
                <p><span>Text Color : </span> <input onChange={(e) => {
                    setTColor(e.target.value)
                }} type="color" /></p>
                <p><span>Border Color : </span> <input onChange={(e) => {
                    setBColor(e.target.value)
                }} type="color" /></p>
            </div>
        </>
    )
}

