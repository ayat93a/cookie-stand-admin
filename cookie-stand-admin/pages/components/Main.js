
function Main({questionAskedHandler}) {
  return (
    <div className="box-content relative w-2/5 mx-auto rounded-lg h-60 my-18 bg-Neutral ">
      <form onSubmit={questionAskedHandler} className = 'flex w-1/2 p-2 mx-auto mt-6 Purple'>
       
          <label for = 'question-1' className= 'absolute left-5 '>Location</label>
          <input name = 'question-1' className="absolute top-0 left-0 rounded-lg grow"  type={'text'} placeholder ={'Add a Location' } ></input>
          <br/>
  
          <label for = 'minimum_custumr' className= 'absolute inset-y-0 left-5'>Minimum Customers per Hour</label>
          <input name = 'question-1' className="rounded-lg grow"  type={'text'} placeholder ={'Min Customers per Hour' } ></input>
        
       
          <label for = 'maximum_custumr' className= 'absolute left-5'>Maximum Customers per Hour</label>
          <input name = 'question-1' className="rounded-lg grow"  type={'text'} placeholder ={'Max Customers per Hour' } ></input>
        
          
          <label for = 'avg-cookie' className= 'absolute left-5'>Average Cookies per Sale</label>
          <input name = 'question-1' className="rounded-lg grow"  type={'text'} placeholder ={'Average Cookies per Sale' } ></input>
         
         
          <button className="px-4 py-2 ml-2 bg-gray-400 rounded-full text-gray-50 ">Ask</button>
        

      </form>
    </div>
  )
}

export default Main