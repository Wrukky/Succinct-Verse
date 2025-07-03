'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    icon: '🧠',
    title: 'Computation',
    desc: 'Select data (e.g. a block) to prove using the zkVM.',
  },
  {
    icon: '⚙️',
    title: 'Proof Generation',
    desc: 'Prover generates a zk proof using Succinct’s stack.',
  },
  {
    icon: '🚀',
    title: 'Submission',
    desc: 'Coordinator submits proof to the Proof Stream.',
  },
  {
    icon: '🛡️',
    title: 'Verification',
    desc: 'Verifier smart contract checks the proof on-chain.',
  },
  {
    icon: '🎉',
    title: 'Usage',
    desc: 'Applications use the verified data or computation result.',
  },
]

export default function Section07() {
  return (
    <motion.section
      className="min-h-screen bg-black text-white px-6 py-24 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Proof Lifecycle
      </h2>

      <ol className="relative border-l border-purple-700 max-w-2xl mx-auto">
        {steps.map((step, i) => (
          <motion.li
            key={i}
            className="mb-12 ml-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <span className="absolute flex items-center justify-center w-10 h-10 bg-purple-700 rounded-full -left-5 ring-8 ring-black text-xl">
              {step.icon}
            </span>
            <h3 className="text-2xl font-semibold">{step.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{step.desc}</p>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  )
}
