import { motion } from "framer-motion";

export const AppearOnScroll = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};
