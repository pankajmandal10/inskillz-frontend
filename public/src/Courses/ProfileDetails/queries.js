import React from 'react'
// import "./Discuss.css"
import Path1 from "../../Component/Assets/image/Path1.png"
import Path from "../../Component/Assets/image/Path.png"

export default function Queries() {
    return (
      <div className="query">
      <img src={Path1} className="imag" />
      <div className="py-5">
          <div className="card px-3 mx-3 shadow-lg p-2 mb-5 ">
             <div className="card-body py-3 my-3">
               <p className="discuss">Any Queries on Digital Marketing ? </p>
               <p className="text-abc" >Would you like to know more about Inskillz? Please enter your details below and get a call back from us.<br></br>Also you can contact us directly on our Customer Support number.</p>
             <div className="container">
               <div className="row">
                 <div className="col-sm">
                   <div className="form-group">
                     <input type="text" className="form-page"  placeholder="Name" />
                   </div>
                 </div>
                 <div className="col-sm">
                  <div className="form-group">
                      <input type="text" className="form-page"  id="email" placeholder="Email Id"/>
                  </div>
               </div>
             </div>
           </div>
           <div className="container">
             <div className="row">
               <div className="col-sm">
                <div className="form-group"> 
                 <input type="text" className="form-page"   placeholder="Phone Number" />
                </div>
               </div>
               <div className="col-sm">
                 <div className="form-group">
                  <input type="text" className="form-page"   placeholder="Enquiry Type" />
                 </div>
               </div>
             </div>
             <div className="form-group">
              <textarea type="textarea" className="form-msg"  placeholder="Message" />
             </div>
           </div>
           <button style={{ width: "170px",height: "42px",background: "#D3262A 0% 0% no-repeat padding-box",boxShadow: "0px 3px 6px #00000029",borderRadius: "6px",opacity: "1",border:"none",color:"#FFFFFF",marginTop:'20px'}} type="submit">Submit</button>
          </div>
        </div>
      </div>
      <img src={Path} className="i2" />
      </div>
    )
}
