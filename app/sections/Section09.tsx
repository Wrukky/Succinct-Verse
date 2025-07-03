'use client'

import { motion } from 'framer-motion'

export default function Section09() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-pink-950 to-black text-white px-6 py-24 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Onchain Verification Design
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12 text-lg">
        Smart contracts on any chain can verify zkVM proofs directly, without needing to re-run the program. This design enables trustless, lightweight verification across chains.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="bg-pink-900/30 border border-pink-600 rounded-xl p-6 max-w-xs text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">zkVM Output</h3>
          <p className="text-sm text-gray-400">
            The succinct proof with commitment & hash.
          </p>
        </motion.div>

        <motion.div
          className="text-4xl"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ➡️
        </motion.div>

        <motion.div
          className="bg-pink-900/30 border border-pink-600 rounded-xl p-6 max-w-xs text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">Verifier Contract</h3>
          <p className="text-sm text-gray-400">
            Checks validity using a fixed verification key.
          </p>
        </motion.div>

        <motion.div
          className="text-4xl hidden md:block"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ➡️
        </motion.div>

        <motion.div
          className="bg-pink-900/30 border border-pink-600 rounded-xl p-6 max-w-xs text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">State Update</h3>
          <p className="text-sm text-gray-400">
            On success, state or downstream logic is updated.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
