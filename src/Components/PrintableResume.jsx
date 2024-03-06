import React from 'react';
import ResumeGenerator from './ResumeGenerator';

const PrintableResume = React.forwardRef((props, ref) => (
    <div ref={ref} className='print:w-full w-3/5 h-[1056px] bg-white'>
        <ResumeGenerator 
            dataInfo={props.privateInfo}
            dataEducation={props.educationInfo}
            dataExperience={props.experienceInfo}
        />
    </div>
));

export default PrintableResume;