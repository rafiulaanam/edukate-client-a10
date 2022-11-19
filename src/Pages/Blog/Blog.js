import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <h1 className="text-5xl text-white text-center my-10">Blog</h1>
      <div className="card card-side  shadow-xl">
        <figure>
          <img
            src="https://nordicapis.com/wp-content/uploads/What-is-CORS-.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">What is CORS?</h2>
          <p>
            As you've possibly already come across by now, CORS is an acronym
            for Cross-Origin Resource Sharing, but what does that actually mean?
            What is CORS? Well, if we go by the Wikipedia definition, "[CORS] is
            a mechanism that allows restricted resources on a web page to be
            requested from another domain outside the domain from which the
            first resource was served," then you'd be forgiven if you were more
            confused than before you'd read that sentence.
          </p>
        </div>
      </div>
      <div className="card card-side  shadow-xl">
        <figure>
          <img
            src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
          <p>
          Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
          </p>
        </div>
      </div>
      <div className="card card-side  shadow-xl">
        <figure className="w-[800px]">
          <img
            src="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1644677452807%2FXGJeaMjX2.png%3Fw%3D1200%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">How does the private route work?</h2>
          <p>
          The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
          </p>
        </div>
      </div>
      <div className="card card-side  shadow-xl">
        <figure className="w-[800px]">
          <img
            src="https://www.tekkiwebsolutions.com/wp-content/uploads/Nodejs-Architecture.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">What is Node? How does Node work?</h2>
          <p>
          Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
