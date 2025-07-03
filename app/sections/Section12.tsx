'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Section12() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-6 py-24 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Proof of Concept
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12 text-lg">
        Succinct has built a working system that proves real-world data using the RISC Zero zkVM — and verifies it trustlessly on Ethereum.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl w-full">
        <motion.div
          className="bg-slate-800/40 border border-slate-600 p-6 rounded-xl w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Offchain Proving</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-400 mt-1" size={16} />
              Uses the RISC Zero zkVM to run a Celestia light client offchain
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-400 mt-1" size={16} />
              Generates a zk proof of data availability
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-slate-800/40 border border-slate-600 p-6 rounded-xl w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4">Onchain Verification</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-400 mt-1" size={16} />
              Proof is submitted to Ethereum through the Succinct verifier
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-400 mt-1" size={16} />
              Smart contract checks the zk proof and accepts/rejects result
            </li>
          </ul>
        </motion.div>
      </div>

      <p className="text-gray-400 text-sm text-center mt-12 max-w-xl">
        This working prototype demonstrates the end-to-end validity of Succinct’s architecture — from offchain execution to trustless onchain verification.
      </p>
    </section>
  )
}
