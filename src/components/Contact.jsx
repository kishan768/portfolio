import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
      className="card bg-base-100 shadow-xl p-8 rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
      <form className="form-control gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full rounded-lg"
        ></textarea>
        <button className="btn btn-primary w-full mt-4 rounded-lg">
          Send Message
        </button>
      </form>
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="https://linkedin.com/in/yourprofile"
          className="btn btn-circle btn-outline"
        >
          LI
        </a>
        <a
          href="https://github.com/kishan768"
          className="btn btn-circle btn-outline"
        >
          GH
        </a>
        <a
          href="https://twitter.com/yourprofile"
          className="btn btn-circle btn-outline"
        >
          TW
        </a>
        <a
          href="mailto:youremail@example.com"
          className="btn btn-circle btn-outline"
        >
          ✉️
        </a>
      </div>
    </motion.div>
  );
};
export default Contact;
