import { motion } from "framer-motion";

const WebBackground = () => {
  // Generate web line positions
  const horizontalLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${(i + 1) * 12}%`,
    delay: i * 0.2,
  }));

  const verticalLines = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${(i + 1) * 8}%`,
    delay: i * 0.15,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(0 85% 50% / 0.08) 0%, hsl(220 60% 12% / 0.3) 50%, hsl(0 0% 4%) 100%)',
        }}
      />
      
      {/* Web grid pattern */}
      <div className="absolute inset-0 web-grid opacity-30" />
      
      {/* Animated horizontal web lines */}
      {horizontalLines.map((line) => (
        <motion.div
          key={`h-${line.id}`}
          className="web-line"
          style={{
            top: line.top,
            left: 0,
            right: 0,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.4 }}
          transition={{
            duration: 1.5,
            delay: line.delay,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Animated vertical web lines */}
      {verticalLines.map((line) => (
        <motion.div
          key={`v-${line.id}`}
          className="web-line-vertical"
          style={{
            left: line.left,
            top: 0,
            bottom: 0,
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.3 }}
          transition={{
            duration: 1.5,
            delay: line.delay + 0.5,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Glowing corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96"
        style={{
          background: 'radial-gradient(circle at top left, hsl(0 85% 50% / 0.15), transparent 60%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96"
        style={{
          background: 'radial-gradient(circle at bottom right, hsl(210 100% 55% / 0.1), transparent 60%)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default WebBackground;
