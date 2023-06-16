"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Loading from './Loading';
import { FcManager } from 'react-icons/fc';
import { ImLocation2 } from 'react-icons/im';
import { BsPersonFill } from 'react-icons/bs';

const Jobs = ({ jobpost,isloading }) => {
 
  return (
    <section className="flex flex-col mt-6">
      {isloading === false ? (
        jobpost.map((job) => (
          <section key={job.job_id} className="mt-3 ml-3 job bg-white-500">
            <div className="flex items-center">
              {job.employer_logo ? (
                <img
                  src={job.employer_logo}
                  className="h-14 w-16 border-4 border-white-500  mr-3"
                  alt=""
                  srcSet=""
                />
              ) : (
                <BsPersonFill size={50} className="border-4 border-white-500  mr-3" />
              )}
              <div className="flex flex-col">
                <span className="font-bold">{job.employer_name}</span>
                <span className="text-gray-500">{job.job_publisher} Posted: 1 day ago</span>
              </div>
            </div>
            <div>
              <p className="text-gray-500 font-medium mt-3">
                {job.job_description.slice(0, 600)}..
                <Link href={`JobDetail/${job.job_id}`}>view more</Link>
              </p>
            </div>
            <div className="skills mt-5">
              <span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">React</span>
              <span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Next</span>
              <span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">
                Typescript
              </span>
            </div>
            <div className="flex justify-between mt-4 items-center">
              <div className="flex items-center">
                <span className="border-white m-3 p-3 flex  items-center  bg-slate-100 rounded-xl text-xs">
                  {job.job_employment_type}
                  <span>
                    <FcManager size={20} />
                  </span>
                </span>
                <span className="border-white m-3 p-3 flex  items-center  bg-slate-100 rounded-xl text-xs">
                  {job.job_is_remote ? 'Remote' : 'Onsite'}
                </span>
                <span className="border-white m-3 p-3 flex  items-center  bg-slate-100 rounded-xl text-xs">
                  {job.job_city},{job.job_country}
                  <span>
                    <ImLocation2 size={17} />
                  </span>
                </span>
              </div>
              <div className="flex">
                <button>View Details</button>
                <button className="m-4 rounded-xl bg-green-500 text-white p-2 w-40">
                  <Link href="https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=b36aCwNT58QAAAAAAAAAAA%3D%3D">
                    Apply Now
                  </Link>
                </button>
              </div>
            </div>
          </section>
        ))
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Jobs;
