import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind.",
      tech: "React • Tailwind • DaisyUI",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A blogging app with authentication and MongoDB.",
      tech: "Node.js • Express • MongoDB",
      link: "#",
    },
    {
      title: "E-Commerce App",
      description:
        "Full MERN stack e-commerce application with cart & checkout.",
      tech: "MERN Stack",
      link: "#",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="projects"
      className="p-10 bg-base-200"
    >
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p>{project.description}</p>
              <div className="badge badge-primary">{project.tech}</div>
              <div className="card-actions justify-end mt-4">
                <a href={project.link} className="btn btn-outline btn-sm">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default Projects;
