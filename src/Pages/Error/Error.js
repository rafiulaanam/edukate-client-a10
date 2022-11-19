import React from 'react';
import error from '../../Assets/img/404/error.png'

const Error = () => {
    return (
        <div>
            <img src={error} alt="" className='img-fluid mx-auto' />
        </div>
    );
};

export default Error;