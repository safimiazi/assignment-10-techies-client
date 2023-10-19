import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-blue-700">
        404
        <br />
        Page is not Found ...!!
      </h2>
      <Link to={"/"}>
        <button className="btn bg-blue-700 mt-5 text-white">Go back Home</button>
      </Link>
      <img className='h-[50%] mx-auto' src="https://i.postimg.cc/NM9903Yd/404.gif" alt="404 gif" />
    </div>
  );
};

export default ErrorPage;