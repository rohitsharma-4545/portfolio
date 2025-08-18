// src/components/MobileHero.jsx
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react"; // lightweight icon

const MobileHero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-gradient-to-b from-black to-gray-900">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="p-6 rounded-2xl bg-[#915EFF]/20"
      >
        <Smartphone size={80} color="#915EFF" />
      </motion.div>
      <p className="mt-4 text-white text-lg font-medium text-center">
        Welcome to my portfolio 🚀 <br /> Optimized for mobile users.
      </p>
    </div>
  );
};

export default MobileHero;
