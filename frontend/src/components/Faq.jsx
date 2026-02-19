import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <motion.section id="Faqs" className="w-full py-16 px-4 flex justify-center"
      initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          defaultValue="shipping"
          className="w-full space-y-2 "
        >
          <AccordionItem
            value="shipping"
            className="border rounded-lg bg-white shadow-md   px-4"
          >
            <AccordionTrigger className="text-left">
              What is Apple Notes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Apple Notes is a built-in note-taking app available on iPhone,
              iPad, Mac, and Apple Watch. It allows users to create, organize,
              and sync notes across devices using iCloud. It supports text,
              checklists, drawings, audio recordings, scanned documents, photos,
              videos, web links, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="returns"
            className="border rounded-lg bg-white shadow-md  px-4"
          >
            <AccordionTrigger className="text-left">
              Can I collaborate on notes with others?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Returns accepted within 30 days. Items must be unused and in
              original packaging. Refunds processed within 5–7 business days.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="support"
            className="border rounded-lg bg-white shadow-md  px-4"
          >
            <AccordionTrigger className="text-left">
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Reach us via email, live chat, or phone. We respond within 24
              hours during business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="1"
            className="border rounded-lg bg-white shadow-md  px-4"
          >
            <AccordionTrigger className="text-left">
              How do I organize my notes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Use Folders to group related notes. Create subfolders by dragging
              one folder onto another. Use Tags (e.g., #work, #ideas) by typing
              # followed by a word. Create Smart Folders that automatically
              include notes with specific tags, dates, or statuses.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="2"
            className="border rounded-lg bg-white shadow-md  px-4"
          >
            <AccordionTrigger className="text-left">
              Can I search inside my notes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes. Tap the Search field at the top of the Notes list to find
              text in typed or handwritten notes. Search also detects text in
              scanned documents, photos, and attachments. You can search within
              a specific note using Find in Note.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="3"
            className="border rounded-lg bg-white shadow-md  px-4"
          >
            <AccordionTrigger className="text-left">
              How do I use AI features in Notes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              On iPhone 15 Pro and newer (with iOS 18.1+), Apple Intelligence
              enables AI-powered tools like Proofread, Rewrite, Summarize, and
              Change Tone. Tap the Apple Intelligence button (pen in a star) to
              access these features.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="4"
            className="border rounded-lg bg-white shadow-md  px-4"
          >
            <AccordionTrigger className="text-left">
              Can I add links between notes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes. In a note, select text, tap Add Link, then choose another
              note from your list. You can also type and select a note to link
              it. How do I scan documents or add media?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="5"
            className="border rounded-lg bg-white shadow-md  px-4"
          >
            <AccordionTrigger className="text-left">
              Can I lock or protect sensitive notes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes. Open a note, tap ⋯, then Lock. Unlock with passcode, Touch
              ID, or Face ID. Locked notes are hidden from the main list until
              unlocked.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="6"
            className="border rounded-lg bg-white shadow-md  px-4"
          >
            <AccordionTrigger className="text-left">
              What is Quick Note?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Quick Note lets you create a note from Control Center. Swipe down
              from the top-right corner, tap the Quick Note icon (box with
              scribble), and type. It’s ideal for capturing ideas instantly from
              any app.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="7"
            className="border rounded-lg bg-white shadow-md  px-4"
          >
            <AccordionTrigger className="text-left">
              How do I view notes on Apple Watch?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Notes sync to Apple Watch. You can view, pin, create, or complete
              checklists directly from your wrist. Use dictation or Siri to add
              notes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.section>
  );
};

export default Faq;
