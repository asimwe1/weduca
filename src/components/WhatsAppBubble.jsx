import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppBubble = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <a
      href="https://wa.me/250789000213"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-2 p-3 bg-white shadow-lg rounded-full transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ scale: hovered ? 0.8 : 1 }}
        className="text-green-500 text-3xl"
      >
        <FaWhatsapp />
      </motion.div>
      {hovered && <span className="text-green-600 font-semibold">Chat Now</span>}
    </a>
  );
};

export default WhatsAppBubble;
