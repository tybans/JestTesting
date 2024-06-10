import { useState } from "react"

function BeforeHooks() {
    const [data, setData] = useState("")
    return (
        <>
            <h1>Testing Before & After Hook with jest</h1>
            <button type="text" onClick={() => setData("OnClick Function Working")}>Update Data</button>
            <p>{data}</p>
        </>
    )
}

export default BeforeHooks