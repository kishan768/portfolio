import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="footer footer-center p-6 bg-base-300 text-base-content"
    >
      <div>
        <p className="font-semibold">© 2026 Kishan | All Rights Reserved</p>
        <div className="flex gap-6 mt-4">
          <a href="https://github.com/kishan768" className="link link-hover">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="link link-hover"
          >
            LinkedIn
          </a>
          <a href="https://twitter.com/yourprofile" className="link link-hover">
            Twitter
          </a>
          <a href="mailto:youremail@example.com" className="link link-hover">
            Email
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;
