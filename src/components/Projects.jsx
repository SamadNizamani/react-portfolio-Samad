import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Projects</h1>
        <div>
            {PROJECTS.map((Project, index) => (
                <div key={index} className="mb-4 flex flex-wrap lg:justify-center" >
                <div className="w-full lg:w-1/4">
                <img
                 src={Project.image}
                 width={150}
                 height={150}
                 alt={Project.title}
                 className="mb-6 rounded"
                  />
                  </div>
                  <div className="w-full max-w-xl lg:w-3/4">
                     <h6 className="mb-2 font-semibold">{Project.title}</h6>
                     <p className="mb-4 text-neutral-400">{Project.description}</p>
                     {Project.technologies.map((tech, index) => (
                         <span key={index} className="inline-block bg-neutral-900 rounded-full px-3 py-1 text-sm text-purple-800 mr-2">
                           {tech}
                         </span>
                     ))}
                  </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects