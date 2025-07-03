'use client'

import { motion } from 'framer-motion'

export default function Section02() {
  return (
    <motion.section
      className="min-h-screen bg-gray-950 text-white px-6 py-20 flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Zero-Knowledge Proofs<br />Enable Verifiability
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* Prover */}
        <motion.div
          className="bg-gray-900 rounded-xl p-6 border border-purple-800 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-3">🧠 Prover</h3>
          <p className="text-gray-300">
            Runs the program, generates a proof using a zkVM. The output proves the computation was done correctly.
          </p>
        </motion.div>

        {/* Proof */}
        <motion.div
          className="bg-gradient-to-br from-purple-700 to-pink-600 rounded-xl p-6 shadow-xl text-white"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-3">🔐 ZK Proof</h3>
          <p>
            A tiny cryptographic proof — verifying it is exponentially faster than running the whole program.
          </p>
        </motion.div>

        {/* Verifier */}
        <motion.div
          className="bg-gray-900 rounded-xl p-6 border border-purple-800 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-3">✅ Verifier</h3>
          <p className="text-gray-300">
            Checks the proof in milliseconds. Trusts the result without needing to re-execute the program.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
