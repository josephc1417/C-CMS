import { useFetchProjects } from "./fetchProjects"
import "./fetchProjects"


const Project = () => {
  const {projects,loading} = useFetchProjects()
    console.log(projects,loading);
    if(loading) {
      return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
      )
    }
    return (
  <section className="projects">
        <div className="title">
          <h2>Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-center">
        {projects.map((project) => {
          const { id,title,url ,img } = project;
          return (
          < a key={id} href={url} target="_blank" rel="noreferrer" className="project">
            <img src={img} alt={title} className="img"/>
            <h4>{title}</h4>
          </a>
          )
        })}
        </div>
  </section>
  )
}

export default Project
