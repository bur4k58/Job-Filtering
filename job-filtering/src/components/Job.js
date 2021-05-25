import React, { useState} from "react";

export default function Job({ job }) {
  const [languages, setLanguages] = useState([job.role, job.level, ...job.languages, ...job.tools]);

  return (
    <div className={`flex flex-col shadow-md mx-5 m-5 p-5 my-16 bg-white ${job.featured && 'border-l-4 border-primary rounded'} mobile:flex-row mobile:mx-20`}>
      <div>
        <img src={`${job.logo}`} alt={job.company} className="-mt-16 mb-4 w-16 h-16 mobile:mt-0 mobile:w-24 mobile:h-24 mobile:mb-0 "/>
      </div>
      <div className="flex flex-col justify-between px-2 mobile:ml-5 mobile:ml-5">
        <div className="flex space-x-3  flex-wrap">
          <h3 className="text-primary font-bold">{job.company}</h3>
          {job.new ? <span className="rounded-full px-2 p-1 bg-primary text-white font-bold">NEW!</span> : null}
          {job.featured ? <span className="rounded-full px-2 py-1 bg-verydark text-white font-bold">FEAUTRED</span> : null}
        </div>
        <h2 className="font-bold">{job.position}</h2>
        <p className="text-dark">
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div className="flex items-center desktop:justify-end  flex-wrap border-t-2 pt-4 mt-4 mobile:ml-auto mobile:border-0 mobile:pt-0 mobile:mt-0 ">
        {languages.length > 0
          ? languages.map((x) => <p className="flex text-primary bg-background font-bold m-2 p-2 rounded" key={x}>{x}</p>)
          : null
        }
      </div>
    </div>
  );
}
