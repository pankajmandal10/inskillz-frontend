import React, { useState} from 'react';
import "./Tutor.css"
import {useDropzone} from 'react-dropzone';
import { Button } from '@material-ui/core';

 export default function ChapterVideo(props) {
    const {getRootProps, getInputProps, acceptedFiles} = useDropzone();
    
    let files = acceptedFiles.map(file =>
     <li key={file.path}>
       {file.path}
     </li>);

    return (
      <section>
        <div className="chapter-dash-border" {...getRootProps()}>
        <input  {...getInputProps()} />
        <aside className="fileName">
          {files}
        </aside>
         <button className="browse-video" >Browse Video</button>
         <p className="chapter-drag-n-drop">Or drag'n'drop here</p>
        </div>
      </section> 
    );
  }