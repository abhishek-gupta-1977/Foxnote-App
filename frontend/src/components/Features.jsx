import React from "react";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <>
      <motion.section id="Features" className="text-center pt-10 "
       initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true, margin: "-100px" }}>
        <h2 className="text-6xl font-bold ">Features</h2>
      </motion.section>
      <div className="  text-center  flex items-center justify-center"
      >
        <div className="flex items-center">
          <p className="mt-10 max-w-md text-lg  font-medium ">
            rich text formatting (bold, italics, headings, lists), attachment
            support (PDFs, images, web links, audio recordings), and
            handwriting/drawing with Apple Pencil or finger input.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-14">
        <Card className=" max-w-sm p-7 bg-gray-100 border border-white w-2xs ">
          <ul className="list-disc list-inside text-gray-800 space-y-4">
            <li>Organization & Search Tools</li>
            <li>managing large volumes of notes.</li>
            <li>Smart Folders help categorize content</li>
            <li>search functionality</li>
            <li>AI-powered search</li>
          </ul>
        </Card>
        <Card className=" max-w-sm p-7 bg-gray-100 border border-white w-2xs ">
          <ul className="list-disc list-inside text-gray-800 space-y-4">
            <li>Collaboration & Security</li>
            <li>real-time collaboration,</li>
            <li>secure notes with end-to-end encryption</li>
            <li>offline access and one-click data export.</li>
          </ul>
        </Card>

        <Card className=" max-w-sm p-7 bg-gray-100 border border-white w-2xs ">
          <ul className="list-disc list-inside text-gray-800 space-y-4">
            <li>Cross-Platform & Integration</li>
            <li>Integration with other tools.</li>
            <li>task creation within notes,</li>
            <li>AI-powered summarization.</li>
          </ul>
        </Card>
      </div>
    </>
  );
};

export default Features;
