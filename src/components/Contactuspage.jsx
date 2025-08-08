import React from 'react'
import Contactus from '../shared/components/Contactus'
import HelmetComponent from './HelmetComponent'

function Contactuspage() {
  return (
    <div>
      <HelmetComponent title={'Contact us - International Conference on Advances in Big Data, Cloud, and Intelligent Computing'} canonical={'https://icabcic.org/contact-us'} />
      <Contactus />
    </div>
  )
}

export default Contactuspage