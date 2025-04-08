'use client' 
import { ModeToggle } from "@/components/darkmode";
import { Calculator } from "@/components/calculator";
import { motion } from 'framer-motion' 
import {useEffect, useState} from 'react' 


export default function Home() {
  const [isMounted, setIsMounted] = useState(false); 
  // questions to ask: why is this needed? isn't isMounted just a boolean? what is the purpose of this? 
  useEffect(() => { 
    setIsMounted(true); 
  }, []);

  

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      {/* <h1 className="text-3xl font-bold mb-8">Ezra's Calculator</h1> */}

      {isMounted ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="w-full flex flex-col items-center" 
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: .3, duration: .5 }}
            className="text-3xl font-bold mb-8"
          >
            Ezra's Calculator
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            transition={{ delay: .6, duration: .5 }} 
          >
            <Calculator /> 
          </motion.div>
        </motion.div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <Calculator />
        </div>
      )}

    </main>
  );
}
