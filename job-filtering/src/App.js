import React, { useState} from "react";
import Job from './components/Job'
import Data from "./components/data.json";

function App() {
  const [job, setJob] = useState(Data);
  return (
    <div className="App bg-blue-50 mb-24">
      <img src="/images/bg-header-desktop.svg" className="w-full h-40 bg-background" />
    {
      job.map(job => <Job job={job}/>)
    }
    </div>
  );
}

export default App;
