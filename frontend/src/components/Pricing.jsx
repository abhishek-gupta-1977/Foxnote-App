import React from 'react'
import { motion } from 'framer-motion'


const Pricing = () => {
  return (
    <motion.section id="Pricing" className="py-24 bg-white/10 backdrop-blur-md"
      initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true, margin: "-100px" }}
    >
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold mb-6">Simple Pricing</h2>

    <div className="mt-10 bg-white rounded-2xl shadow-xl p-10 border">
      <p className="text-5xl font-extrabold text-indigo-600">$1.99</p>
      <p className="mt-2 text-gray-500">per month</p>

      <p className="mt-6 text-gray-600">
        Or $39.99 for lifetime access.
      </p>

      <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-500 transition">
        Get Started
      </button>
    </div>
  </div>
</motion.section>

  )
}

export default Pricing
