'use client'

import { motion } from 'framer-motion'

const useCases = [
  {
    title: '🧭 Light Clients in the Browser',
    description:
      'Users can run full Ethereum light clients in the browser using zk proofs. No trusted RPCs needed.',
    bg: 'bg-gray-900 border border-purple-800',
  },
  {
    title: '🔗 On-Chain Proof Verification',
    description:
      'Smart contracts can verify off-chain computations using zk proofs, enabling trustless applications.',
    bg: 'bg-gradient-to-br from-purple-700 to-pink-600 text-white',
  },
  {
    title: '🌉 Cross-Chain Bridges',
    description:
      'Securely bridge assets or data across chains by verifying source chain proofs on the destination.',
    bg: 'bg-gray-900 border border-purple-800',
  },
  {
    title: '📡 Oracles & Data Feeds',
    description:
      'Trust-minimized oracles can prove that off-chain data was fetched and processed correctly.',
    bg: 'bg-gradient-to-br from-purple-700 to-pink-600 text-white',
  },
]

export default function Section05() {
  return (
    <motion.section
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Real-World Use Cases
      </h2>

      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            className={`${useCase.bg} rounded-xl p-6 shadow-lg`}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
            <p className="text-gray-300">
              {useCase.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
