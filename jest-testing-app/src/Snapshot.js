
import { useState } from "react"

function Snapshot() {
    const [data, setData] = useState("")
    return (
        <>
            <h1>Testing Snapshot with jest</h1>
            <button type="text" onClick={() => setData("OnClick Function Working")}>Update Data</button>
            <p>{data}</p>
        </>
    )
}

export default Snapshot