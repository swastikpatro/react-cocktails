import { motion as m } from 'framer-motion';

const About = () => {
  return (
    <m.section
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.61, 1, 0.88, 1] }}
      className='section about-section'
    >
      <h2>About</h2>
      <p>
        Hare Krishna Krishna Hare, Krishna Hare Hare Krishna, Hare Ram Ram Hare,
        Ram Hare Hare Ram. Om Namah Bhagavate Vasudevaya. Om Namah Narayan
        Narayanaya. Hare Krishna Krishna Hare, Krishna Hare Hare Krishna, Hare
        Ram Ram Hare, Ram Hare Hare Ram. Om Namah Bhagavate Vasudevaya. Om Namah
        Narayan Narayanaya. 🙏🏻
      </p>
    </m.section>
  );
};

export default About;
