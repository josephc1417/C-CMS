import { useFetchProjects } from "./fetchProjects"
import "./fetchProjects"
const Project = () => {
  const {projects,loading} = useFetchProjects()
    console.log(projects,loading);
    return (
    <h2> Project </h2>
  )
}

export default Project
