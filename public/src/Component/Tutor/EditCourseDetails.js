import React from 'react'
import EditForm from './EditForm'
import TutorFormHeader from './TutorFormHeader'

export default function EditCourseDetails() {
    return (
        <div>
            <TutorFormHeader formHeadline="Edit Course Details" />
            <EditForm />
        </div>
    )
}
