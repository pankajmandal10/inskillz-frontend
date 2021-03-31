import React,{useState} from 'react'
import "./Tutor.css"
import Checkbox from '@material-ui/core/Checkbox';
import Dropzone from "./Dropzone"
import ChapterPDF from './ChapterPDF';
import ChapterVideo from './ChapterVideo';

let lectures = [1,2,3,4,5,6,7,8,9,10];
let chapterName = ["Enter Chapter Name", "Function Component", "Routing", "API"];
let chapterName2 = ["Tools", "java", "React", "API"];
let chapterName3 = ["Never To Miss Out", "Function Component", "Routing", "API"];
let chapterName4 = ["Utilising Social Media", "Function Component", "Routing", "API"];
let chapterName5 = ["Social Media For Business", "Function Component", "Routing", "API"];
let chapterName6 = ["Enter Chapter Name", "Function Component", "Routing", "API"];


export default function EditForm() {
    const [checked, setChecked] = React.useState(true);
    const [chapter, setChapter]= useState("Chapter Name");
    

    const handleDropdown = (e) => {
       
        setChecked(e.target.checked);
      };

      let handleChangeChapter = (e) => {
        const newChapter = e.target.value;
        setChapter({ name: newChapter });
      }
      

    return (
        <div className="editForm">
            <div class="uk-card uk-card-default uk-card-large uk-card-body">

               <div class="uk-grid uk-child-width-expand@s uk-text-left" uk-grid>
                 <div className="form-details">
                   <div>
                     <label className="edit-course-name">Course Name</label>
                     <div>
                     <input className="edit-inputType" type="text" placeholder="Digital Marketing"/>
                     </div>
                   </div>
                 </div>
                 <div className="form-details">
                  <div>
                  <label className="edit-course-name">Institute</label>
                     <div>
                     <input className="edit-inputType" type="text" placeholder="Independent"/>
                     </div>
                  </div>
                 </div>
               </div>


               <div class="uk-grid uk-child-width-expand@s uk-text-left" uk-grid>
                 <div className="form-details">
                     <label className="edit-course-name">Instructor Name</label>
                     <div>
                     <input className="edit-inputType" type="text" placeholder="Jyothi Prakash Kumar"/>
                     </div>
                 </div>
                 <div className="form-details">
                  <label className="edit-course-name">Duration</label>
                     <div>
                     <input className="edit-inputType" type="text" placeholder="7 Weeks"/>
                     </div>
                 </div>
               </div>


               <div class="uk-grid uk-child-width-expand@s uk-text-left" uk-grid>
                 <div className="form-details">
                     <label className="edit-course-name">Course Includes</label>
                     <div>
                        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                           <div>
                             <Checkbox defaultChecked className="edit-checkbox-style" color="primary"  inputProps={{ 'aria-label': '#2F5E9D checkbox' }} />
                             <input className="edit-course-includes" type="text" placeholder="On- demand Video"/>
                           </div>
                           <div>
                             <Checkbox defaultChecked className="edit-checkbox-style" color="primary" inputProps={{ 'aria-label': '#2F5E9D checkbox' }} />
                             <input className="edit-course-includes" type="text" placeholder="Full lifetime access"/>
                           </div>
                        </div>
                     </div>
                 </div>
                 <div className="form-details">
                    <div>
                        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                           <div className="edit-includes">
                             <Checkbox defaultChecked className="edit-checkbox-style"  color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                             <input className="edit-course-includes" type="text" placeholder="Downloadable resources"/>
                           </div>
                           <div>
                           <Checkbox defaultChecked className="edit-checkbox-style" color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                             <input className="edit-course-includes" type="text" placeholder="Certificate of completion"/>
                           </div>
                        </div>
                     </div>
                 </div>
               </div>


               <div class="uk-grid uk-child-width-expand@s uk-text-left" uk-grid>
                 <div className="form-details">
                     <label className="edit-course-name">Course Language</label>
                     <div>
                       <input className="edit-inputType" type="text" placeholder="English"/>
                     </div>
                 </div>
                 <div className="form-details">
                     <label className="edit-course-name">Lectures</label>
                     <div >
                       <select className="edit-inputType" onChange={(e)=>handleDropdown(e)}>
                         {lectures.map(Course => (
                         <option value={Course}>{Course}</option>
                        ))}
                       </select>
                     </div>
                  </div>
               </div>

               <div class="uk-grid uk-child-width-expand@s uk-text-left" uk-grid>
                 <div className="form-details">
                    <label className="edit-course-name">Course Overview</label>
                    <Dropzone />
                 </div>
               </div>

               <div class="uk-grid uk-child-width-expand@s uk-text-left" uk-grid>
                 <div className="chapter-details">
                    <label className="edit-course-name">Chapter 1</label>
                    <div id="select-chapter-dropdown">
                      <select className="select-chapter-name" onChange={(e)=>handleChangeChapter(e)}>
                        {chapterName.map(Chapter => (
                        <option value={Chapter}>{Chapter}</option>
                        ))}
                      </select>
                   </div>
                   <div className="chapter-background">
                     <div class="uk-grid uk-child-width-expand@s uk-text-left" uk-grid>
                       <div>
                         <div><ChapterVideo /></div>
                       </div>
                       <div>
                         <div><ChapterPDF /></div>
                       </div>
                      </div>
                   </div>
                    
                 </div>
               </div>
               
               <div class="uk-grid uk-text-left" uk-grid>
                 <div>
                   <label className="edit-course-name">Chapter 2</label>
                    <div id="select-chapter-dropdown">
                      <select className="select-chapter-name" onChange={(e)=>handleChangeChapter(e)}>
                        {chapterName2.map(Chapter2 => (
                        <option value={Chapter2}>{Chapter2}</option>
                        ))}
                      </select>
                   </div>
                 </div>
               </div>
               
               <div class="uk-grid uk-text-left" uk-grid>
                 <div>
                   <label className="edit-course-name">Chapter 3</label>
                    <div id="select-chapter-dropdown">
                      <select className="select-chapter-name" onChange={(e)=>handleChangeChapter(e)}>
                        {chapterName3.map(Chapter3 => (
                        <option value={Chapter3}>{Chapter3}</option>
                        ))}
                      </select>
                   </div>
                 </div>
               </div>

               <div class="uk-grid uk-text-left" uk-grid>
                 <div>
                   <label className="edit-course-name">Chapter 4</label>
                    <div id="select-chapter-dropdown">
                      <select className="select-chapter-name" onChange={(e)=>handleChangeChapter(e)}>
                        {chapterName4.map(Chapte4 => (
                        <option value={Chapte4}>{Chapte4}</option>
                        ))}
                      </select>
                   </div>
                 </div>
               </div>

               <div class="uk-grid uk-text-left" uk-grid>
                 <div>
                   <label className="edit-course-name">Chapter 5</label>
                    <div id="select-chapter-dropdown">
                      <select className="select-chapter-name" onChange={(e)=>handleChangeChapter(e)}>
                        {chapterName5.map(Chapter5 => (
                        <option value={Chapter5}>{Chapter5}</option>
                        ))}
                      </select>
                   </div>
                 </div>
               </div>

               <div class="uk-grid uk-text-left" uk-grid>
                 <div>
                   <label className="edit-course-name">Chapter 6</label>
                    <div id="select-chapter-dropdown">
                      <select className="select-chapter-name" onChange={(e)=>handleChangeChapter(e)}>
                        {chapterName6.map(Chapter6 => (
                        <option value={Chapter6}>{Chapter6}</option>
                        ))}
                      </select>
                   </div>
                 </div>
               </div>

               <div class="uk-grid uk-child-width-expand@s uk-text-left" uk-grid>
                 <div className="form-details">
                     <label className="edit-course-name">Course Minimum Price</label>
                     <div>
                       <input className="edit-inputType" type="text" placeholder="600"/>
                     </div>
                 </div>
                 <div className="form-details">
                     <label className="edit-course-name">Course Minimum Price</label>
                     <div >
                     <input className="edit-inputType" type="text" placeholder="1500"/>
                     </div>
                  </div>
               </div>

               <button className="details-update-button">Update</button>

            </div> 
        </div>
    )
}
