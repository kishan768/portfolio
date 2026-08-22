import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="skills"
      className="card bg-base-100 shadow-xl p-8 rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-6">My Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <p className="font-semibold mb-1">{skill.name}</p>
            <progress
              className="progress progress-primary w-full"
              value={skill.level}
              max="100"
            ></progress>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default Skills;
