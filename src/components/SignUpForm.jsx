import {useState} from "react"


export default function SignUpForm({setToken}){
 const [userName , setUserName] = useState("")
const [password , setPassword] = useState("")
const [error, setError] = useState(null)

async function HandleSubmit(event){
  
    event.preventDefault();

    try{
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",  { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({
            username: userName,
            password: password
        })
    })
    const result = await response.json()
    console.log(result)
    setToken(result.token)
    console.log(result.token)
    }
    catch(error){
        setError(error.message)
    }
    }
    

    return (
    <div>
    <h2>sign up</h2>
    {error && <p>{error}</p>}
        <form onSubmit={HandleSubmit}>
            <label>
           username: <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </label>
            <label>
                password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button >submit</button>
        </form>
        </div>  
    )
}