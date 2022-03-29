import React,{useRef} from 'react'

const Form = (props)=>{
    const cityRef= useRef()
     const sendData = ()=>{
         if(cityRef.current.value.length>0)
          props.getDataFromServer(cityRef.current.value)
     }

  return(
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-2 col-lg-3"></div>
                <div className="col-md-8 col-lg-6 mt-3">
                    <div className="form-group" style={{display:"flex"}}>
                      <input 
                      type="text" 
                      placeholder="Enter City" 
                      className="form-control"
                       ref={cityRef}
                      />
                      <button 
                      className="btn btn-primary px-5 mx-2 py-2"
                      onClick={sendData} 
                      >Search</button>
                    </div>
                </div>

                <div className="col-md-2 col-lg-3"></div>
        </div>
         
    </div>
  )

}

export default Form