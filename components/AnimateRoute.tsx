import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function AnimateRoute({ children }: { children: ReactNode }) {
  const { route } = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ position: 'relative', width: '100%', height: '100%', overflowX: 'hidden' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
