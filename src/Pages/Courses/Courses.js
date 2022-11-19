import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "./Course";
import Pdf from "react-to-pdf";

const Courses = () => {
  const ref = React.createRef();

  const courses = useLoaderData();

  return (
    <div className="container mx-auto flex flex-row">
      <div className="basis-1/5 ">
        <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box gap-6">
          <li className="menu-title">
            <span>Category</span>
          </li>

          <li>
            <Link to={``}>Mobile App Development</Link>
          </li>
          <li>
            <Link to={"#"}>Web Development</Link>
          </li>
          <li>
            <Link to={"#"}>Programming</Link>
          </li>
        </ul>
      </div>

      <div>
        <div className="my-10">
          <div className="flex justify-between my-10 ">
            <h1 className="text-3xl uppercase">All Courses</h1>
            <Pdf targetRef={ref} filename="course-details.pdf">
              {({ toPdf }) => (
                <button className="btn btn-secondary" onClick={toPdf}>
                  Generate Course PDF
                </button>
              )}
            </Pdf>
          </div>
          <p>
            Personalized, fun, and interactive learning process. Enjoy our
            gamified courses to master python, Web development, cyber security,
            C, C++ course and more.
          </p>
        </div>

        <div ref={ref} className="pr-48">
          <div className="overflow-x-auto my-10">
            <table className="table w-full ">
              <thead>
                <tr>
                  <th></th>
                  <th>Author Name</th>
                  <th>Course Name</th>
                  <th>Published Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>C Programming for Beginners</td>
                  <td>13 Nov 2022</td>
                </tr>

                <tr className="active">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Introduction to R</td>
                  <td>14 Nov 2022</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Graphic Design Fundamentals</td>
                  <td>15 Nov 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 basis-4/5">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      <div className="flex justify-center">
      <Link to={'/courses/get-premium-access'}><button className="btn btn-accent my-10  ">Get Premium Access</button></Link>
      </div>
      </div>
    </div>
  );
};

export default Courses;
