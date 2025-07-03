'use client'

import { motion } from 'framer-motion'

export default function Section03() {
  return (
    <motion.section
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        style={{ color: '#ff49a1' }} // neon pink color on title only
      >
        Succinct Clients<br />Verify Chains with Proofs
      </h2>

      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Light Client */}
        <motion.div
          className="bg-gray-900 border border-purple-800 rounded-xl p-6 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-4">🪶 Light Clients</h3>
          <p className="text-gray-300">
            Lightweight clients that verify blockchain headers using zk proofs — no need for RPCs or full nodes.
          </p>
        </motion.div>

        {/* Trustless Infra */}
        <motion.div
          className="bg-gradient-to-br from-purple-700 to-pink-600 text-white rounded-xl p-6 shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-4">🔗 Trustless Everywhere</h3>
          <p>
            Succinct clients can run in browsers, smart contracts, or any environment — unlocking universal trustless access.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
