import { useState } from "react"
import { Tag, tags } from "./constants/tags"
import { motion } from "motion/react"

function App() {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([tags[0]])

  const selectedTagsNames = selectedTags.map((item) => item.name)

  return (
    <section className="w-full h-dvh flex flex-col items-center justify-center gap-4">
      <motion.div 
        layout
        className="min-w-80 h-12 flex items-center px-2 gap-2"
        style={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)', borderRadius: 6 }}
      >
        {selectedTags.map((tag) => (
          <motion.div 
            key={tag.name}
            layoutId={tag.name}
            onClick={() => setSelectedTags(selectedTags.filter((item) => item.name != tag.name))}
            className="h-8 flex items-center pb-0.5 overflow-hidden cursor-pointer bg-black/10"
            style={{ 
              borderRadius: 6,
              boxShadow: '0px 1px 2px rgba(0, 0,0 , 0.3)'
            }}
          >
            <div 
              className="h-full w-full rounded-md flex items-center gap-1 bg-white px-2"
            >
              <motion.span
                layout="position" 
                className="capitalize text-gray-600"
              >
                {tag.name}
              </motion.span>
              <svg
                width="14"
                height="14"
                className=" stroke-gray-400 relative top-px"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        layout 
        className="w-80 p-2 py-2 flex gap-2 flex-wrap"
        style={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)', borderRadius: 6 }}
      >
        {tags
          .filter((item) => !selectedTagsNames.includes(item.name))
          .map((tag) => (
            <motion.div 
              key={tag.name}
              layoutId={tag.name}
              onClick={() => setSelectedTags([...selectedTags, tag])}
              className="flex items-center bg-gray-200 h-8 px-2 cursor-pointer"
              style={{ borderRadius: 6 }}
            >
              <motion.span
                layout="position" 
                className="capitalize text-gray-700"
              >
                {tag.name}
              </motion.span>
            </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default App
