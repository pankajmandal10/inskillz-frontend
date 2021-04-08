import React from 'react'
import AddForm from './addCourseForm'
import TutorFormHeader from './TutorFormHeader'

export default function AddNewCourse() {
    return (
        <div>
            <TutorFormHeader formHeadline="Add New Course" />
            <AddForm />
        </div>
    )
}
