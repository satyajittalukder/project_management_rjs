import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { SideBar } from "./components/SideBar";

function App() {
  const [projectState, setProjectState] = useState({
    seletedProjectId: undefined,
    projects: [],
  })


  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (

    <main className="flex h-screen my-8 gap-8">
      <SideBar onStartAddProject={handleStartAddProject} />
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
