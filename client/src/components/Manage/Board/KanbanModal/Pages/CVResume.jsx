import React from 'react'
import pdfpath from '../../../../../assets/Mail-Shiva-New_CV.pdf'

const CVResume = () => {
  return (
    <div>
      <iframe
        title="CVResume"
        src={pdfpath}
        width="100%"
        height="800px"
        className='  rounded-md'
      />
    </div>
  )
}

export default CVResume