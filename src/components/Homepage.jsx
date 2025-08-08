import React from 'react'
import Home from '../shared/components/Home'
import HelmetComponent from './HelmetComponent'

function Homepage() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Advances in Big Data, Cloud, and Intelligent Computing'} canonical={'https://icabcic.org/'} />
      <Home />
    </div>
  )
}

export default Homepage