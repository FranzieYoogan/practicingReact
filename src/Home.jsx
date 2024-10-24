import { useEffect, useState } from "react"
import Header from "./Header"

function Home() {

    const [ischecked,setIsChecked] = useState(false)

    const changeH1 = (checked) => {

        setIsChecked(checked)

    }

  

    return(

        <>
            <Header changeH1={changeH1}></Header>
            <h1 style={{color: ischecked ? "white" : "black"}}>Home</h1>

        </>

    )   

}

export default Home