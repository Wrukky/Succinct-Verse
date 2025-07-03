'use client'

import { motion } from 'framer-motion'

const stages = [
  {
    icon: '🟢',
    title: 'Stage 0: Single Chain',
    description: 'Traditional apps run entirely on one chain with no cross-chain logic.',
  },
  {
    icon: '🟡',
    title: 'Stage 1: Offchain Light Clients',
    description: 'Apps use offchain light clients for data from other chains, requiring trust in relayers.',
  },
  {
    icon: '🔵',
    title: 'Stage 2: zk Light Clients',
    description: 'Use zero-knowledge proofs to verify cross-chain state trustlessly.',
  },
  {
    icon: '🟣',
    title: 'Stage 3: Trustless Interoperability',
    description: 'Chains become composable with trust-minimized and generalized interchain execution.',
  },
]

export default function Section10() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-24 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        The Four Stages of Interoperability
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-16 text-lg">
        Succinct envisions a progression from isolated chains to full trustless interoperability. Here’s how it unfolds:
      </p>

      {/* Vertical line for timeline effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-48 bottom-24 w-1 bg-zinc-800 rounded"></div>

      <div className="space-y-12 max-w-3xl w-full relative z-10">
        {stages.map((stage, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-6 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Connector dot */}
            <div className="w-5 h-5 rounded-full bg-zinc-700 border-2 border-white mt-1.5 z-10 group-hover:scale-110 transition-transform duration-200" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{stage.icon}</div>
                <h4 className="text-lg md:text-xl font-semibold group-hover:text-purple-400 transition-colors duration-200">
                  {stage.title}
                </h4>
              </div>
              <p className="text-sm text-gray-400">{stage.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


