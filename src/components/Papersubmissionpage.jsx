import React from 'react'
import Papersubmission from '../shared/components/Papersubmission'
import HelmetComponent from './HelmetComponent'

function Papersubmissionpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Advances in Big Data, Cloud, and Intelligent Computing'} canonical={'https://icabcic.org/paper-submission'} />
      <Papersubmission />
    </div>
  )
}

export default Papersubmissionpage