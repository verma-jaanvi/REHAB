import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface WorkflowStage {
  number: string;
  title: string;
  description: string;
  color: string;
  image: string;
}

interface Props extends WorkflowStage {
  index: number;
}

export function WorkflowImageCard({
  number,
  title,
  description,
  color,
  image,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ delay: index * 0.15 }}
      className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#7ED6DF]/50 group cursor-pointer"
    >

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-110"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
          fontFamily: "var(--font-desc)"
        }}
      />
      
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

      <div className="absolute bottom-0 left-0 right-0 px-4 sm:p-6 md:p-8 text-white transition-transform duration-500 group-hover:translate-y-[-8px]">
        
        <h3 className="text-lg sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-3 transition-transform duration-500 origin-left group-hover:scale-105">
          {title}
        </h3>

        <p
          className="sm:text-xs text-gray-200 leading-relaxed mb-6 sm:mb-4 transition-transform duration-500 origin-left group-hover:scale-105"
          style={{ fontSize: "10px" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}