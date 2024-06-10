import { useState } from "react"

function ClickBtn() {
    const [data, setData] = useState("")
    return (
        <>
            <h1>Testing OnClick event with jest</h1>
            <button type="text" onClick={() => setData("OnClick Function Working")}>Update Data</button>
            <p>{data}</p>
        </>
    )
}

export default ClickBtn