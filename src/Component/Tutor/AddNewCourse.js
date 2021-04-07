import React from 'react'
import EditForm from './EditForm'
import TutorFormHeader from './TutorFormHeader'

export default function AddNewCourse() {
    return (
        <div>
            <TutorFormHeader formHeadline="Add New Course" />
            <EditForm />
        </div>
    )
}
