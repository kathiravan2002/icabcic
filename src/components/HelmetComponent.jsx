import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({title,canonical}) {
  return (
     <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICABCIC, International Conference on Advances in Big Data, Cloud, and Intelligent Computing  ,Big Data, Cloud Computing, Intelligent Computing, International Conference, Data Science, Machine Learning, Artificial Intelligence, IoT, Edge Computing, Cloud Infrastructure, Data Analytics, Deep Learning, Smart Systems, High Performance Computing, ICT, Computational Intelligence, Digital Transformation, Cybersecurity, Cloud Security, Emerging Technologies Conference, BDCloud Conference, Academic Research Conference" />
            <meta name="description" content="Join the International Conference on Advances in Big Data, Cloud, and Intelligent Computing to explore the latest innovations, research findings, and applications in data science, cloud technologies, and intelligent systems. Connect with global experts, researchers, and industry leaders." />
            <meta name="author" content="ICABCIC Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Advances in Big Data, Cloud, and Intelligent Computing" />
            <meta property="og:description" content="Join the International Conference on Advances in Big Data, Cloud, and Intelligent Computing to explore the latest innovations, research findings, and applications in data science, cloud technologies, and intelligent systems. Connect with global experts, researchers, and industry leaders." />
            <meta property="og:url" content="https://icabcic.org/" />
            <meta property="og:image" content="https://icabcic.org/images/logo.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icabcic.org/images/logo.png" />

        </Helmet>
  )
}

export default HelmetComponent