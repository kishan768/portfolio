import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="hero  min-h-screen bg-linear-to-r from-indigo-900 to-blue-700 text-white"
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hi, I'm Kishan</h1>
          <p className="py-6 text-xl">Full Stack Developer (MERN Stack)</p>
          <button className="btn btn-primary btn-glass">View My Work</button>
        </div>
      </div>
    </motion.div>
  );
};
export default Hero;
