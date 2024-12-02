import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './App.css';

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="App" ref={ref}>
      <motion.div className="progress-bar" style={{ scaleX }} />
      
      <section className="effect">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          1. Fade In & Slide Up
        </motion.h2>
      </section>

      <section className="effect">
        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          2. Interactive Box
        </motion.div>
      </section>

      <section className="effect">
        <motion.div
          className="circle"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
        />
      </section>

      <section className="effect">
        <motion.div
          className="box"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          whileHover={{ rotate: 360 }}
          transition={{ type: "spring", duration: 1 }}
        >
          4. Spring Animation
        </motion.div>
      </section>

      <section className="effect">
        <motion.div
          className="grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="grid-item"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 }
              }}
            />
          ))}
        </motion.div>
      </section>

      <section className="effect">
        <motion.div
          className="box"
          animate={{
            x: [0, 100, 0],
            backgroundColor: ["#ff0055", "#0099ff", "#ff0055"],
            boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 20px rgba(0,0,0,0.3)", "0px 0px 0px rgba(0,0,0,0)"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          6. Color & Shadow
        </motion.div>
      </section>

      <section className="effect">
        <motion.div
          className="text-scramble"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[..."Motion is awesome!"].map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </section>

      <section className="effect">
        <motion.div
          className="box"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          whileDrag={{ scale: 1.2 }}
        >
          8. Drag Me
        </motion.div>
      </section>

      <section className="effect">
        <motion.div
          className="box"
          initial={{ rotate: 0 }}
          whileInView={{
            rotate: 360,
            transition: {
              duration: 2,
              ease: "linear",
              repeat: Infinity
            }
          }}
        >
          9. Infinite Rotation
        </motion.div>
      </section>

      <section className="effect">
        <motion.div
          className="advanced-box"
          initial={{ scale: 0.5, borderRadius: "10%" }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 0.5,
              type: "spring"
            }
          }}
          whileHover={{
            scale: 1.2,
            borderRadius: "50%",
            rotate: [0, 90, -90, 0],
            transition: {
              rotate: {
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }
            }
          }}
        >
          10. Shape Morph
        </motion.div>
      </section>

      <section className="effect">
        <div className="perspective-container">
          <motion.div
            className="card"
            initial={{ rotateY: 0 }}
            whileHover={{
              rotateY: 180,
              transition: { duration: 0.8 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="card-front">Hover Me</div>
            <div className="card-back">3D Flip</div>
          </motion.div>
        </div>
      </section>

      <section className="effect">
        <motion.div className="particles-container">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 1,
                opacity: 1 
              }}
              animate={{
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                scale: 0,
                opacity: 0
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
          >
            12. Particle Explosion
          </motion.div>
        </motion.div>
      </section>

      <section className="effect">
        <motion.div
          className="wave-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[..."Wave Effect"].map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { y: 50, opacity: 0, rotateX: -90 },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    delay: i * 0.1
                  }
                }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </section>

      <section className="effect">
        <motion.div
          className="magnetic-box"
          whileHover={{ scale: 1.2 }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          whileTap={{ cursor: "grabbing" }}
        >
          14. Magnetic Pull
        </motion.div>
      </section>
    </div>
  );
}

export default App;
