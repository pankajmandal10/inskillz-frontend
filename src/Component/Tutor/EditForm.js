import React, { useState, useCallback } from 'react';
import './Tutor.css';
import Checkbox from '@material-ui/core/Checkbox';
import Dropzone from './Dropzone';
import ChapterPDF from './ChapterPDF';
import ChapterVideo from './ChapterVideo';
import PdfUpload from './pdfUpload';
import DocUpload from './docUpload';
import { useDispatch } from 'react-redux';
import { addNewCourseAction } from '../../Store/actions/courseActions';
import Chapter from './Chapter';
import { Button } from 'bootstrap';

let lectures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let chapterName = [
  'Enter Chapter Name',
  'Function Component',
  'Routing',
  'API',
];
let chapterName2 = ['Tools', 'java', 'React', 'API'];
let chapterName3 = [
  'Never To Miss Out',
  'Function Component',
  'Routing',
  'API',
];
let chapterName4 = [
  'Utilising Social Media',
  'Function Component',
  'Routing',
  'API',
];
let chapterName5 = [
  'Social Media For Business',
  'Function Component',
  'Routing',
  'API',
];
let chapterName6 = [
  'Enter Chapter Name',
  'Function Component',
  'Routing',
  'API',
];
let categories = [
  'Illustration',
  'Graphic Design',
  'UI-UX Design',
  'Web Devolopment'
  
];

export default function EditForm() {
  //initialize
  const dispatch = useDispatch();

  const [checked, setChecked] = React.useState(true);
  // const [chapter, setChapter] = useState("Chapter Name");
  const [previewImage, setPreviewImage] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [courseBroacherFile, setCourseBroacherFile] = useState('');
  const [courseOverviewImage, setCourseOverviewImage] = useState('');
  const [imageBack, setImageBack] = useState('');
  const [chapter, setChapter] = useState({
    chapter: '',
    url: '',
    doc: '',
  });
  const [batch, setBatch] = useState({
    batch: '',
    maxStudents: '',
    classStartDate: '',
    classEndDate: '',
    classStartTime: '',
    classEndTime: '',
  });
  const [course, setCourse] = useState({
    courseName: '',
    instructor: '',
    category: '',
    institute: '',
    shortDescriptioh: '',
    overViewText: '',
    overViewImage: '',
    isFeatured: '',
    numHrsVideoOnDemand: '',
    durationInWeaks: '',
    hasOnDemandVideo: true,
    hasDownloadableResources: true,
    hasLifeTimeAccess: true,
    hasCertification: true,
    bannerImage: '',
    language: '',
    courseMode: '',
    minPrice: '',
    maxPrice: '',
    isApproved: '',
    chapters: chapter,
    batches: '',
    numLectures: 1,
  });

  const overviewHandler = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setImageInput(reader.result);
    };
  };

  const onCheckboxChange = (e) => {
    setChecked(e.target.checked);
    setCourse({
      ...course,
      [e.target.name]: e.target.checked,
    });
  };

  const handelImageInputChange = (e) => {
    const image = e.target.files[0];
    overviewHandler(image);
    setCourseOverviewImage(image);
    // console.log(image);
    // const uploadedImage = new FormData();
    // if (image) {
    //   uploadedImage.append(
    //     'image',
    //     image,
    //     `${course.courseName.replace(/[^a-zA-Z ]/g, '')}.jpg`
    //   );
    //   setImageBack(uploadedImage);
    // }
  };

  const handelBroacherInput = (file) => {
    setCourseBroacherFile(file);
  };

  const onInputChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };
  // const onInputChapter = (e) => {
  //   setChapter({
  //     ...chapter,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const onInputBatch = (e) => {
    setBatch({
      ...batch,
      [e.target.name]: e.target.value,
    });
  };
  const [count, setCount] = useState(1);

  //Add Course Submit Handler
  const onSubmit = (e) => {
    e.preventDefault();

    const courseData = new FormData();

    courseData.set(
      'overViewImage',
      courseOverviewImage,
      course.courseName + 'overview_image'
    );
    courseData.set(
      'broacherFile',
      courseBroacherFile,
      course.courseName + 'broacher_file'
    );
    courseData.set('courseName', course.courseName);
    courseData.set('category', course.category);
    courseData.set('numLectures', course.numLectures);

    dispatch(addNewCourseAction(courseData));

    console.log(course);


    // var v = document.getElementById('addCourse').checkValidity();

    // v.reportValidity();

    // if (v) {
    // axios({
    //   url: "https://ftschamp.trikaradev.xyz/api/create-donor",
    //   method: "POST",
    //   data,
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("login")}`,
    //   },
    // }).then((res) => {
    //   console.log("addCourse", res.data);
    //   alert("success");

    // });
    //   console.log(data);
    // }
  };
  const handleChapter = () => {
     return (<Chapter />)
     
  }
  return (
    <div className='editForm'>
      <form id='addCourse'>
        <div class='uk-card uk-card-default uk-card-large uk-card-body'>
          <div
            class='uk-grid uk-child-width-expand@s  uk-text-left'
            uk-grid='true'
          >
            <div className='form-details'>
              <div>
                <label className='edit-course-name'>Course Name</label>
                <div>
                  <input
                    name='courseName'
                    value={course.courseName}
                    onChange={(e) => onInputChange(e)}
                    className='edit-inputType'
                    type='text'
                    placeholder='Digital Marketing'
                  />
                </div>
              </div>
            </div>
            <div className='form-details'>
              <div>
                <label className='edit-course-name'>Category</label>

                <select
                  name='category'
                  value={course.category}
                  onChange={(e) => onInputChange(e)}
                  className='edit-inputType'
                >
                  {categories.map((Course) => (
                    <option value={Course}>{Course}</option>
                  ))}
                </select>
                <div></div>
              </div>
            </div>
          </div>
          <div
            class='uk-grid uk-child-width-expand@s  uk-text-left'
            uk-grid='true'
          >
            <div className='form-details'>
              <div>
                <label className='edit-course-name'>Institute</label>
                <div>
                  <input
                    name='institute'
                    value={course.institute}
                    onChange={(e) => onInputChange(e)}
                    className='edit-inputType'
                    type='text'
                    placeholder='Independent'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class='uk-grid uk-child-width-expand@s  uk-text-left'
            uk-grid='true'
          >
            <div className='form-details'>
              <label className='edit-course-name'>Instructor Name</label>
              <div>
                <input
                  name='instructor'
                  value={course.instructor}
                  onChange={(e) => onInputChange(e)}
                  className='edit-inputType'
                  type='text'
                  placeholder='Jyothi Prakash Kumar'
                />
              </div>
            </div>

            <div className='form-details'>
              <label className='edit-course-name'>Duration</label>
              <div>
                <input
                  name='durationInWeaks'
                  value={course.durationInWeaks}
                  onChange={(e) => onInputChange(e)}
                  className='edit-inputType'
                  type='text'
                  placeholder='7 Weeks'
                />
              </div>
            </div>
          </div>

          <div class='uk-grid uk-child-width-expand@s uk-text-left' uk-grid>
            <div className='form-details'>
              <label className='edit-course-name'>Course Includes</label>
              <div>
                <div class='uk-margin uk-grid-small uk-child-width-auto uk-grid'>
                  <div>
                    <Checkbox
                      name='hasOnDemandVideo'
                      onChange={(e) => onCheckboxChange(e)}
                      defaultChecked
                      className='edit-checkbox-style'
                      color='primary'
                      inputProps={{ 'aria-label': '#2F5E9D checkbox' }}
                    />
                    <input
                      readOnly
                      className='edit-course-includes'
                      type='text'
                      placeholder='On- demand Video'
                    />
                  </div>
                  <div>
                    <Checkbox
                      name='hasLifeTimeAccess'
                      onChange={(e) => onCheckboxChange(e)}
                      defaultChecked
                      className='edit-checkbox-style'
                      color='primary'
                      inputProps={{ 'aria-label': '#2F5E9D checkbox' }}
                    />
                    <input
                      readOnly
                      className='edit-course-includes'
                      type='text'
                      placeholder='Full lifetime access'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='form-details'>
              <div>
                <div class='uk-margin uk-grid-small uk-child-width-auto uk-grid'>
                  <div className='edit-includes'>
                    <Checkbox
                      name='hasDownloadableResources'
                      onChange={(e) => onCheckboxChange(e)}
                      defaultChecked
                      className='edit-checkbox-style'
                      color='primary'
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <input
                      readOnly
                      className='edit-course-includes'
                      type='text'
                      placeholder='Downloadable resources'
                    />
                  </div>
                  <div>
                    <Checkbox
                      name='hasCertificaton'
                      onChange={(e) => onCheckboxChange(e)}
                      defaultChecked
                      className='edit-checkbox-style'
                      color='primary'
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <input
                      readOnly
                      className='edit-course-includes'
                      type='text'
                      placeholder='Certificate of completion'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class='uk-grid uk-child-width-expand@s uk-text-left'
            uk-grid='true'
          >
            <div className='form-details'>
              <label className='edit-course-name'>Course Language</label>
              <div>
                <input
                  name='language'
                  value={course.language}
                  onChange={(e) => onInputChange(e)}
                  className='edit-inputType'
                  type='text'
                  placeholder='English'
                />
              </div>
            </div>
            <div className='form-details'>
              <label className='edit-course-name'>Lectures</label>
              <div>
                <select
                  name='numLectures'
                  value={course.numLectures}
                  //  onChange={(e) => setCourse({...course, numLectures: e.target.value})}
                  onChange={(e) => onInputChange(e)}
                  className='edit-inputType'
                >
                  {lectures.map((Course) => (
                    <option value={Course}>{Course}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div class='uk-child-width-expand@s uk-margin-top uk-text-left'>
            <div className='form-details'>
              <label className='edit-course-name'>Banner Image</label>
              <br></br>
              <div className='overviewContain'>
                <div>
                  {!imageInput ? (
                    <div className='overviewImg uk-text-center'>
                      <input
                        type='file'
                        accept='image/*'
                        id='upload-image'
                        onChange={(e) => handelImageInputChange(e)}
                        hidden
                      />
                      <label style={{ color: 'lightgray' }} for='upload-image'>
                        <i class='fas fa-plus'></i>
                        <br></br>
                        Upload Image
                      </label>
                    </div>
                  ) : (
                    <div>
                      <i className='fas fa-times-circle overviewCloseEdit'></i>
                      <img className='overviewThumbnail' src={imageInput}></img>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class='uk-child-width-expand@s uk-margin-top uk-text-left'>
            <div className='form-details'>
              <label className='edit-course-name'>Course Overview</label>
              <br></br>
              <div className='overviewContain'>
                <textarea
                  name='overViewText'
                  value={course.overViewText}
                  onChange={(e) => onInputChange(e)}
                  style={{ height: '120px', background: "#fff" }}
                  className='edit-inputBatch'
                ></textarea>
                <div>
                  {!imageInput ? (
                    <div className='overviewImg uk-text-center'>
                      <input
                        type='file'
                        accept='image/*'
                        id='upload-image'
                        onChange={(e) => handelImageInputChange(e)}
                        hidden
                      />
                      <label style={{ color: 'lightgray' }} for='upload-image'>
                        <i class='fas fa-plus'></i>
                        <br></br>
                        Upload Image
                      </label>
                    </div>
                  ) : (
                    <div>
                      <i className='fas fa-times-circle overviewCloseEdit'></i>
                      <img className='overviewThumbnail' src={imageInput}></img>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='form-details uk-text-left uk-margin-top'>
            <label className='edit-course-name'>Course Broacher</label>
            <br></br>
            <div className='dropContain'>
              <PdfUpload inputChange={(file) => handelBroacherInput(file)} />
            </div>
          </div>
          <div
            class='uk-grid uk-child-width-expand@s uk-text-left'
            uk-grid='true'
          >
            <div className='chapter-details'>
              <label className='edit-course-name'>Chapter {count}</label>
              
              <div id='select-chapter-dropdown'>
                {/* <select
                  name='chapter'
                  value={chapter.chapter}
                  onChange={(e) => onInputChapter(e)}
                  className='select-chapter-name'
                  //  onChange={(e) => handleChangeChapter(e)}
                >
                  {chapterName.map((Chapter) => (
                    <option value={Chapter}>{Chapter}</option>
                  ))}
                </select> */}
                <Chapter />
                <button className="AddMoreChapter" type="button" onClick={() => handleChapter()}>Add More Chapter</button>

      
              </div>
              {/* <label className='edit-course-name uk-margin-top'>
                Enter Video URL
              </label>
              <input
                name='url'
                value={chapter.url}
                onChange={(e) => onInputChapter(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='Type here'
              /> */}

              {/* <div>
                <div className='dropContain uk-margin-top'>
                  <DocUpload></DocUpload>
                </div>
              </div> */}
            </div>
          </div>

          {/* <div class="uk-grid uk-text-left" uk-grid>
          <div>
            <label className="edit-course-name">Chapter 2</label>
            <div id="select-chapter-dropdown">
              <select className="select-chapter-name" onChange={(e) => handleChangeChapter(e)}>
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
              <select className="select-chapter-name" onChange={(e) => handleChangeChapter(e)}>
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
              <select className="select-chapter-name" onChange={(e) => handleChangeChapter(e)}>
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
              <select className="select-chapter-name" onChange={(e) => handleChangeChapter(e)}>
                {chapterName5.map(Chapter5 => (
                  <option value={Chapter5}>{Chapter5}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div class="uk-text-left" >
          <div>
            <label className="edit-course-name">Chapter 6</label>
            <div id="select-chapter-dropdown">
              <select className="select-chapter-name" onChange={(e) => handleChangeChapter(e)}>
                {chapterName6.map(Chapter6 => (
                  <option value={Chapter6}>{Chapter6}</option>
                ))}
              </select>
            </div>
          
          </div>
        </div>
    
        */}
          {/* <h5 className='uk-text-left uk-margin-large-top uk-margin-bottom'>
            Batches
          </h5>
          <div className='uk-child-width-1-3@s uk-text-left uk-grid'>
            <div>
              <label className='edit-course-name'>Batch Name</label>
              <input
                name='batch'
                value={batch.batch}
                onChange={(e) => onInputBatch(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='Batch A'
              />
            </div>
            <div>
              <label className='edit-course-name'>Max Students Allowed</label>
              <input
                name='maxStudents'
                value={batch.maxStudents}
                onChange={(e) => onInputBatch(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='100'
              />
            </div>
            <div>
              <label className='edit-course-name'>Class Start Date</label>
              <input
                name='classStartDate'
                value={batch.classStartDate}
                onChange={(e) => onInputBatch(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='DD:MM:YYYY'
              />
            </div>
            <div className='uk-margin-top'>
              <label className='edit-course-name'>Class End Date</label>
              <input
                name='classEndDate'
                value={batch.classEndDate}
                onChange={(e) => onInputBatch(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='DD:MM:YYYY'
              />
            </div>
            <div className='uk-margin-top'>
              <label className='edit-course-name'>Class Start Time</label>
              <input
                name='classStartTime'
                value={batch.classStartTime}
                onChange={(e) => onInputBatch(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='HH:MM'
              />
            </div>
            <div className='uk-margin-top'>
              <label className='edit-course-name'>Class End Time</label>
              <input
                name='classEndTime'
                value={batch.classEndTime}
                onChange={(e) => onInputBatch(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='HH:MM'
              />
            </div>
          </div>
          <div class='uk-grid uk-child-width-expand@s uk-text-left' uk-grid>
            <div className='form-details'>
              <label className='edit-course-name'>Course Minimum Price</label>
              <div>
                <input
                  name='minPrice'
                  value={course.minPrice}
                  onChange={(e) => onInputChange(e)}
                  className='edit-inputType'
                  type='text'
                  placeholder='600'
                />
              </div>
            </div>
            <div className='form-details'>
              <label className='edit-course-name'>Course Maximum Price</label>
              <div>
                <input
                  name='maxPrice'
                  value={course.maxPrice}
                  onChange={(e) => onInputChange(e)}
                  className='edit-inputType'
                  type='text'
                  placeholder='1500'
                />
              </div>
            </div>
          </div> */}
          <div className="accordion accordion-flush" id="accordionFlushExample">
             <div className="accordion-item">
               <h2 className="accordion-header" id="flush-headingOne">
                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{background:"#F4F4F4",borderRadius:"6px"}}>
                    Batch 1
                 </button>
               </h2>
               <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                 <div className="accordion-body">
                   <div className='uk-child-width-1-3@s uk-text-left uk-grid'>
                     <div>
                       <label className='edit-course-name'>Batch Name</label>
                       <input
                          name='batch'
                          value={batch.batch}
                          onChange={(e) => onInputBatch(e)}
                          className='edit-inputBatch'
                          type='text'
                          placeholder='Batch A'
                       />
                     </div>
                   <div>
                   <label className='edit-course-name'>Max Students Allowed</label>
                   <input
                     name='maxStudents'
                     value={batch.maxStudents}
                     onChange={(e) => onInputBatch(e)}
                     className='edit-inputBatch'
                     type='text'
                     placeholder='100'
                   />
                 </div>
            <div>
              <label className='edit-course-name'>Class Start Date</label>
              <input
                name='classStartDate'
                value={batch.classStartDate}
                onChange={(e) => onInputBatch(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='DD:MM:YYYY'
              />
            </div>
            <div className='uk-margin-top'>
              <label className='edit-course-name'>Class End Date</label>
              <input
                name='classEndDate'
                value={batch.classEndDate}
                onChange={(e) => onInputBatch(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='DD:MM:YYYY'
              />
            </div>
            <div className='uk-margin-top'>
              <label className='edit-course-name'>Class Start Time</label>
              <input
                name='classStartTime'
                value={batch.classStartTime}
                onChange={(e) => onInputBatch(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='HH:MM'
              />
            </div>
            <div className='uk-margin-top'>
              <label className='edit-course-name'>Class End Time</label>
              <input
                name='classEndTime'
                value={batch.classEndTime}
                onChange={(e) => onInputBatch(e)}
                className='edit-inputBatch'
                type='text'
                placeholder='HH:MM'
              />
            </div>
          </div>
          <div class='uk-grid uk-child-width-expand@s uk-text-left' uk-grid>
            <div className='form-details'>
              <label className='edit-course-name'>Course Minimum Price</label>
              <div>
                <input
                  name='minPrice'
                  value={course.minPrice}
                  onChange={(e) => onInputChange(e)}
                  className='edit-inputType'
                  type='text'
                  placeholder='600'
                />
              </div>
            </div>
            <div className='form-details'>
              <label className='edit-course-name'>Course Maximum Price</label>
              <div>
                <input
                  name='maxPrice'
                  value={course.maxPrice}
                  onChange={(e) => onInputChange(e)}
                  className='edit-inputType'
                  type='text'
                  placeholder='1500'
                />
              </div>
            </div>
          </div>
                 </div>
               </div>
             </div>
             <div>
             <button className='AddMoreBatch'>Add More Batch</button>
             </div>
          </div>
          

          <button
            type='submit'
            onClick={(e) => onSubmit(e)}
            className='details-update-button'
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
