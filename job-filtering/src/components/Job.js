import React, { useState} from "react";

export default function Job({ job }) {
  const [languages, setLanguages] = useState([...job.languages, ...job.tools, job.role, job.level]);

  return (
    <div className={`flex shadow-lg mx-20 m-5 mx-5 p-5 bg-white ${job.featured && 'border-l-4 border-blue-400'}`}>
      <div>
        <img src={`${job.logo}`} alt={job.company} />
      </div>
      <div className="flex flex-col ml-5 justify-between">
        <div className="flex space-x-3">
          <h3 className="text-blue-400 font-bold">{job.company}</h3>
          {job.new ? <span className="rounded-full px-2 p-1 bg-blue-400 font-bold">NEW!</span> : null}
          {job.featured ? <span className="rounded-full px-2 p-1 bg-gray-700 text-white font-bold">FEAUTRED</span> : null}
        </div>
        <h2 className="font-bold">{job.position}</h2>
        <p className="text-gray-400">
          {job.postedAt} * {job.contract} * {job.location}
        </p>
      </div>
      <div className="flex items-center justify-center ml-auto">
        {languages.length > 0
          ? languages.map((x) => <p className="text-blue-400 bg-blue-50 font-bold m-2 p-2 rounded" key={x}>{x}</p>)
          : null
        }
      </div>
    </div>
  );
}
