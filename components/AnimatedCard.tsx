import * as motion from 'motion/react-client'

type AnimatedCardProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export default function AnimatedCard({ children, className, delay = 0, duration = 1 }: AnimatedCardProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ 
                duration,
                ease: [0.25, 1, 0.5, 1], 
                delay
            }} 
            className={className}
        >
            {children}
        </motion.div>
    )
}