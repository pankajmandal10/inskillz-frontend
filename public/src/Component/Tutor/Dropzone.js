import React, {useEffect, useState} from 'react';
import "./Tutor.css"
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  marginLeft: 26,
  width: 118,
  height: 63,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


export default function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section>

        <div className="course-overview-card">
           <p className="course-overview-text">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
           <aside style={thumbsContainer}>
             {thumbs}
           </aside>
        </div>

        <div class="uk-grid uk-child-width-expand@s uk-text-left" uk-grid>
            <div className="form-details">
                <label className="edit-course-name">Course Broacher</label>
                <div className="course-broacher" >
                 
                 <div className="broacher-dashed" {...getRootProps()}>
                 <input  {...getInputProps()} />
                  <i class="fas fa-file-pdf fa-7x" style={{color:"#d22d2d"}}></i>
                  <p className="broacher-pdf">Broacher.Pdf</p>
                 </div>
                </div>
            </div>
        </div>  
      

        


    </section>
  );
}