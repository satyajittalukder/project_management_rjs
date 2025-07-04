import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { SideBar } from "./components/SideBar";

function App() {
  let content;
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  })

  const cancelHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }
  const handleNewProject = (projectData) => {
    const newProjectData = {
      ...projectData,
      id: Math.random()
    }
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProjectData]
      }
    })
  }

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }


  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleNewProject} onCancel={cancelHandler}/>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (

    <main className="flex h-screen my-8 gap-8">
      <SideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
