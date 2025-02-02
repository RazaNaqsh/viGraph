import { motion } from "framer-motion";
import trees from "../assets/trees.gif";
import { Link } from "react-router-dom";

const HireUs = () => {
  return (
    <section className="font-kalnia relative pt-10 pb-32">
      <img
        src={trees}
        className="z-[-100] h-[80vh] w-[90vw] opacity-60 object-cover mx-auto"
        alt=""
      />
      <div className="h-full w-full flex justify-center text-white items-center">
        <div className="absolute z-[100] text-center  h-full justify-center items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[18px] ">Hire Us</h3>
            <h1 className="text-[22px] sm:text-[36px] md:text-[50px]">
              We Are Always Ready To <br /> Take A Perfect Shot
            </h1>
          </motion.div>
          <Link to="/contact">
            <motion.button
              className="text-[15px] md:text-[18px] w-fit px-3 md:px-5 py-2 md:py-4 bg-[#FFA33E] rounded-[100px] mt-4 md:mt-8"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HireUs;
