'use client'

import { motion } from 'framer-motion'

const components = [
  {
    title: '📦 Prover',
    desc: 'Generates zk proofs of execution (e.g. block headers) using the zkVM.',
  },
  {
    title: '🚚 Coordinator',
    desc: 'Relays proofs to chains, acting as the trusted but auditable transport.',
  },
  {
    title: '🔎 Verifier',
    desc: 'A smart contract that verifies zk proofs on-chain.',
  },
  {
    title: '🌊 Proof Stream',
    desc: 'The shared infrastructure layer that connects everything — push-based proof distribution.',
  },
]

export default function Section06() {
  return (
    <motion.section
      className="min-h-screen bg-gray-950 text-white px-6 py-24 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Succinct Protocol Architecture
      </h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 w-full max-w-6xl">
        {components.map((c, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-purple-700 to-pink-600 p-6 rounded-xl text-white shadow-lg w-full md:w-1/4 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-3">{c.title}</h3>
            <p className="text-sm text-gray-100">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Visual flow */}
      <div className="mt-16 w-full flex flex-col items-center">
        <motion.div
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="inline-block">📦 ➜ 🚚 ➜ 🔎 via 🌊</span>
          <div>Proofs flow from Provers → Coordinator → Verifier over the Proof Stream</div>
        </motion.div>
      </div>
    </motion.section>
  )
}
