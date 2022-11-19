import React from 'react';

const FAQ = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 gap-4'>
<h1 className="text-5xl text-white text-center my-10">FAQ</h1>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How do I locate a program that's right for me?
  </div>
  <div className="collapse-content"> 
    <p> Search by degree level: Undergraduate Programs, Master's Degree Programs, Doctorate Degree Programs, <br /> Teacher Certification Programs, Other Certificate Programs, and Online Programs
Search by department</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What are the differences between the certifications and degrees offered?
  </div>
  <div className="collapse-content"> 
    <p>Bachelor of Science (BS)
The BS degree is for those seeking the first college degree typically focusing <br /> on an area related to science.
</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How can I become a teacher in PA?
  </div>
  <div className="collapse-content"> 
    <p>Bachelor of Science (BS)
    Our school offers several graduate programs leading to teacher certification. <br /> You can read about these programs in greater detail online, <br /> and you can also attend a weekly information <br /> session to learn more about the application process.
</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default FAQ;