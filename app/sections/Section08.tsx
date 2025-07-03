'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const chains = ['Ethereum', 'Polygon', 'Optimism', 'Arbitrum', 'Base']
const proofs = ['Proof #1', 'Proof #2', 'Proof #3', 'Proof #4', 'Proof #5']

export default function Section08() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: ['100%', '-100%'],
      transition: {
        x: {
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        },
      },
    })
  }, [controls])

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white px-6 py-24 flex flex-col items-center">
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        style={{ color: '#ff49a1' }} // neon pink applied here
      >
        Proof Stream Design
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12 text-lg">
        Succinct pushes all proofs to a global, chain-agnostic stream. Verifiers on any chain can subscribe and validate them instantly.
      </p>

      <div className="overflow-hidden w-full max-w-4xl relative h-20 border border-purple-700 rounded-lg bg-purple-900/20">
        <motion.div
          className="flex gap-6 absolute top-1/2 -translate-y-1/2 text-white text-sm"
          animate={controls}
        >
          {proofs.map((proof, i) => (
            <div
              key={i}
              className="px-4 py-2 bg-purple-700 rounded-full shadow-lg"
            >
              {proof}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
        {chains.map((chain, i) => (
          <motion.div
            key={i}
            className="bg-purple-800/40 p-4 rounded-xl border border-purple-600 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{chain}</h3>
            <p className="text-sm text-gray-400 mt-2">
              Verifier subscribes to Proof Stream
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
