import { useState } from "react"

function UserEventLib() {
    const [data, setData] = useState("")
    return(
        <>
            <h1>User Event Library Testing</h1>
            {/* User event library is a supportive library for react Testing Library */}
            {/* it basically helps in onChange event, basically helps to interact with components */}
            <button onClick={() => setData("Hello")}>Click Me</button>
            <h1>{data}</h1>
        </>
    )
}

export default UserEventLib