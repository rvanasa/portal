import React, { useEffect } from "react";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import { AnimatePresence, motion, useAnimation, useCycle } from "framer-motion";
import { useInView } from "react-intersection-observer";
import transitions from "@site/static/transitions.json";

function Index() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <div className={styles.section}>
      <a className={styles.anchor} id="home" />
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={transitions.container}
        className={styles.container}
      >
        <motion.div variants={transitions.item} className={styles.Title}>
          <h1>The future of Web3</h1>
        </motion.div>
        <motion.p variants={transitions.item} className={styles.Text}>
          Web speed. Serves web. 100,000X more efficient... simply better tech
        </motion.p>
        <motion.div
          variants={transitions.item}
          className={styles.actionContainer}
        >
          <Link className={styles.actionButton} to="/developers">
            BUILD REAL WEB3
          </Link>
          <Link
            className={styles.callToAction}
            to={"https://dfinity.org/showcase/"}
          >
            Explore the Internet Computer
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Index;
