'use client'

import { motion } from 'framer-motion'

export default function Section04() {
  return (
    <motion.section
      className="min-h-screen bg-gray-950 text-white px-6 py-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Universal Proving with zkVMs
      </h2>

      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl border border-purple-800 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">💻 Any Program</h3>
          <p className="text-gray-300">
  Succinct&apos;s zkVM can run arbitrary programs in Rust, C, and more — then generate proofs of their execution.
</p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="bg-gradient-to-br from-purple-700 to-pink-600 p-6 rounded-xl shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">⚙️ zkVM</h3>
          <p>
            A general-purpose zero-knowledge virtual machine, enabling trustless computation across domains.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl border border-purple-800 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">🌍 Universal Verifiability</h3>
          <p className="text-gray-300">
            Proofs can be verified anywhere — on-chain, off-chain, in a browser, or across ecosystems.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
