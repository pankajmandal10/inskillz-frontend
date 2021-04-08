import React, { useState, useCallback, useEffect } from 'react';
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
import Batches from './batches';
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
  'Category 01',
  'Category 01',
  'Category 01',
  'Category 01',
  'Category 01',
  'Category 01',
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
  const [numChapters, setNumChapters] = useState('');
  const [chapters, setChapters] = useState([]);
  const [chapter, setChapter] = useState({
    chapter: '',
    url: '',
    doc: '',
  });
  let chaptersData = [];
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

  // for chapter

  // useEffect(() => {

  // }, [chapters])

  const handleLectureChange = (e) => {
    setCourse({
      ...course,
      numLectures: e.target.value,
    });


    for (let i = 0; i < e.target.value; i++) {
      chaptersData.push(i)
    }
    setChapters(
      chaptersData
    )

    console.log("chapter value", e.target.value)
    console.log("chapter", chapters)
    console.log("chapter Number", numChapters)
  }

  const chaptersEl = () => {

  }


  // const handleChapters = (value) => {
  //   chapters=[];
  //   for(let i=0; i<value; i++){
  //    chapters.push(i)
  //   }
  //   console.log("chapter value",value)
  //   console.log("chapter",chapters)
  //   console.log("chapter Number",numChapters)

  // }
  const onInputChapter = (e) => {
    setChapter({
      ...chapter,
      [e.target.name]: e.target.value,
    });
  };
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
  // const handleChapter = () => {
  //    return (<Chapter />)
  // }
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
                  name='numLectures'
                  value={course.numLectures}
                  onChange={(e) => onInputChange(e)}
                  className='edit-inputType'
                //  onChange={(e) => handleDropdown(e)}
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
          <div className="uk-text-left uk-margin-top">
            <label className='edit-course-name'>Course Includes</label>

          </div>

          <div class='uk-grid uk-child-width-expand@s uk-text-left' uk-grid="true">
            <div className='form-details'>
              <div>
                <div class='uk-margin uk-flex'>

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
                <div className="uk-flex">
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
            <div className='form-details'>
              <div>

                <div class='uk-margin uk-flex'>
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
                <div class='uk-margin uk-flex'>
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
                  //onChange={(e) => setCourse({...course, numLectures: e.target.value})}
                  onChange={(e) => handleLectureChange(e)}
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
              <div className='overviewContain dropContain'>
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
                        <i class='fas fa-cloud-upload-alt fa-3x'></i>
                        <br></br>
                        <p className="uploadTxt">Upload Image</p>

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
              <div className='overviewContain '>
                <textarea
                  name='overViewText'
                  placeholder="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                  value={course.overViewText}
                  onChange={(e) => onInputChange(e)}
                  style={{ height: '120px', background: "#fff" }}
                  className='edit-inputBatch'
                ></textarea>
                <div className="uploadContainer">
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
                        <i class='fas fa-cloud-upload-alt fa-3x'></i>
                        <br></br>
                        <p className="uploadTxt">Upload Image</p>

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
            <div className='dropContain uk-padding-small'>
              <PdfUpload inputChange={(file) => handelBroacherInput(file)} />
            </div>
          </div>
          <div
            class='uk-grid uk-child-width-expand@s uk-text-left'
            uk-grid='true'
          >


            <div className='chapter-details'>
              <label className='edit-course-name'>Chapter </label>

              <div id='select-chapter-dropdown'>

                {chapters.map(n => (
                  <Chapter num={n + 1} />
                ))}


              </div>


            </div>
          </div>
          <div className='uk-text-left'>
            <label className='edit-course-name'>Batches </label>

          </div>
          <Batches></Batches>

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
