'use client'

import { motion } from 'framer-motion'

export default function Section01() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-black"
      style={{ color: '#ff49a1' }} // neon pink color applied here
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        What is Succinct?
      </h2>
      <p className="text-lg md:text-xl max-w-3xl text-center mb-8" style={{ color: '#ff49a1' }}>
        Succinct is a protocol that enables developers to prove arbitrary programs — instantly verifiable,
        universally trustworthy, and fully interoperable across chains, using zero-knowledge proofs.
      </p>
      <div className="w-full max-w-xl aspect-video rounded-2xl bg-gradient-to-br from-purple-700 to-pink-500 shadow-2xl flex items-center justify-center text-2xl font-semibold text-white">
        🌐 zkVM + Light Clients = Trustless Interop
      </div>
    </motion.section>
  )
}


