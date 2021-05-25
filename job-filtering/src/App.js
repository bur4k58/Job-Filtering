import React, { useState} from "react";
import Job from './components/Job'
import Data from "./components/data.json";

function App() {
  const [job, setJob] = useState(Data);
  return (
    <div className="App bg-background ">
      <img src="/images/bg-header-desktop.svg" className="hidden mobile:block w-full h-40 bg-primary" />
      <img src="/images/bg-header-mobile.svg" className="mobile:hidden w-full bg-primary" />
    {
      job.map(job => <Job job={job}/>)
    }
    </div>
  );
}

export default App;
