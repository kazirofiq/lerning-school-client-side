import React from 'react';

const Faq = () => {
    return (
        <div className='my-6 w-9/12 mx-auto'>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        How to get Premium access?
        </div>
        <div className="collapse-content"> 
        <p>Select Course from Home page or in the Navbar. Then you will find all Courses. Select what you want to learn. Scroll down, you will see premium access button.Please signup/signin before proceeding to the premium checkout page.</p>
        </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        Is there any way to read offline?
        </div>
        <div className="collapse-content"> 
        <p>Yeah!! You can download pdf of our free version. Just click Courses in the navbar and select a course then you will find a print icon beside the Title.After Clicking it pdf file of that page will be downloaded.</p>
        </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        How do I get Update from you?
        </div>
        <div className="collapse-content"> 
        <p>It's simple. Just scroll down the homepage, you will see our get update form.</p>
        </div>
        </div>

        </div>
    );
};

export default Faq;