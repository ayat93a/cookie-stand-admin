import Head from "./components/Head"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import React , {useState} from "react"




function Home() {
  const [reply , setReply] = useState({})

  const eventHandler= (e) => {
    e.preventDefault()
    const form = {
     location : e.target.location,
     min : e.target.min,
     max : e.target.max,
     avg : e.target.avg,
    }
    reply = form
    setReply(reply)
    }
     

  return (
     
    <>
      <Header/>
      <Main eventHandler = {eventHandler}  reply={reply}   />
      <p>{reply.location}</p>
      <Footer/>
    </>
  )
}

export default Home