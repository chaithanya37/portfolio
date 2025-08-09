import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Button } from "@mui/material";
import { Email, LinkedIn, GitHub, ArrowOutward } from "@mui/icons-material";

const Contact = () => {
  return (
    <>
      {/* Flex container for both sections */}
      <div className="flex flex-col-reverse gap-10 overflow-hidden md:mt-12 md:flex-row">
        {/* Contact Info Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.5)}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:chaithanyakanipakam37@gmail.com">
              <Button variant="outlined" endIcon={<Email />}>
                Email
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/chaithanya-kanipakam-3b5751280/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outlined" endIcon={<LinkedIn />}>
                LinkedIn
              </Button>
            </a>
            <a
              href="https://github.com/chaithanya37"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outlined" endIcon={<GitHub />}>
                GitHub
              </Button>
            </a>
          </div>
        </motion.div>

        {/* "Thanks for scrolling" Section */}
        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="md:flex-1 flex flex-col justify-between rounded-2xl bg-black-100 p-8"
        >
          <div className="mb-4">
            <h1 className="mb-28 text-4xl font-bold text-slate-50">
              Thanks for scrolling.
            </h1>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1e1OZSL7WrddCjvRPWLV72TmKDXuGTmNX/view?usp=sharing"
            >
              <Button variant="outlined" endIcon={<ArrowOutward />}>
                Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="ml-2 mt-6 border-slate-600" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
