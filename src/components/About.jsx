const About = () => {
  return (
    <div id="about" className="p-10 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="card w-64 bg-base-200 shadow-xl image-full">
          <figure>
            <img src="/src/assets/profile.jpg" alt="Kishan" />
          </figure>
        </div>

        {/* Bio */}
        <div>
          <p className="text-lg leading-relaxed">
            I'm Kishan, a passionate Full Stack Developer specializing in the
            MERN stack. I love building scalable web applications and crafting
            beautiful user experiences.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            <span className="badge badge-primary">JavaScript</span>
            <span className="badge badge-secondary">React</span>
            <span className="badge badge-accent">Node.js</span>
            <span className="badge badge-info">MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
