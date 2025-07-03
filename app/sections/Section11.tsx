'use client'

import { motion } from 'framer-motion'

export default function Section11() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white px-6 py-24 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        System Security
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12 text-lg">
        Succinct’s security is rooted in cryptographic soundness: proofs are valid only if the underlying zkVM computation was executed correctly. Invalid proofs are rejected by the verifier.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <motion.div
          className="bg-purple-900/30 border border-purple-600 p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-2">zkVM Soundness</h3>
          <p className="text-gray-400 text-sm">
            The zkVM guarantees that all generated proofs are correct with overwhelming probability.
          </p>
        </motion.div>

        <motion.div
          className="bg-purple-900/30 border border-purple-600 p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">Verifier Integrity</h3>
          <p className="text-gray-400 text-sm">
            Smart contract verifiers are minimal and audited — they reject invalid proofs automatically.
          </p>
        </motion.div>

        <motion.div
          className="bg-purple-900/30 border border-purple-600 p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-2">End-to-End Trust</h3>
          <p className="text-gray-400 text-sm">
            Succinct never needs to be trusted — all state transitions rely only on the zkVM and verifier logic.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
