import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { SideBar } from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  let content;
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const cancelHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };
  const handleNewProject = (projectData) => {
    const newProjectData = {
      ...projectData,
      id: Math.random(),
    };
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProjectData],
      };
    });
  };

  const handleSelectProject = (projectId) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };
  
  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  };

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAddProject={handleNewProject} onCancel={cancelHandler} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    const project = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
    );
    content = <SelectedProject project={project} onDelete={handleDeleteProject} />;
  }

  return (
    <main className="flex h-screen my-8 gap-8">
      <SideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
