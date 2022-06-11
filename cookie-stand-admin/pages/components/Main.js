

function Main(props) {
  return (
    <>
    <div className="w-4/5 mx-auto rounded-lg h-60 bg-Neutral">
      <form onSubmit={props.eventHandler} className = 'relative p-5 mt-6'>
      <h1 className="mb-6 text-2xl text-center text-Purple ">Create Cookie Stand</h1>
       
          <label name = 'location' className= 'p-5 text-Purple'>Location</label>
          <input  value={props.reply.location} onChange={props.eventHandler} name = 'question-1' className="w-5/6 mb-8 rounded-lg absoulte grow placeholder:p-3"  type={'text'} placeholder ={'Add a Location' } ></input>
          <br/>
          
            <label name = 'min' className= 'p-6 text-Purple '>Minimum Customers per Hour</label>
            <label name= 'max' className= 'p-6 text-Purple '>Maximum Customers per Hour</label>
            <label neme = 'avg' className= 'p-6 text-Purple '>Average Cookies per Sale</label>
            <button className="absolute w-1/4 py-4 ml-3 text-4xl text-center rounded-lg top-17 bg-purple-light hover:bg-Purple text-Neutral">Ask</button>
            <br/>
            <input value={props.reply.min} onChange={props.eventHandler} name = 'question-min' className="mt-2 ml-4 rounded-lg placeholder:text-center"  type={'text'} placeholder ={'Min Customers per Hour' } ></input>
            <input value={props.reply.max} onChange={props.eventHandler} name = 'question-max' className="mt-2 rounded-lg ml-7 placeholder:text-center"  type={'text'} placeholder ={'Max Customers per Hour' } ></input>
            <input value={props.reply.avg} onChange={props.eventHandler} name = 'question-avg' className="mt-2 rounded-lg ml-7 placeholder:text-center"  type={'text'} placeholder ={'Average Cookies per Sale' } ></input>
      </form>
    </div>

    <div>
      <p className="mt-5 text-center text-Purple "> Report Table Comming Soon... </p>
      {/* <p className="mt-5 text-center text-Purple">{props.reply.location} </p> */}
    </div>

    </>
  )
}

export default Main