import ProjectCard from '../components/ProjectCard'
import { Projects } from '../constants'
import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/mountains.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index)=> (
          <Link href={`${project.route}`} key={index}>
          <ProjectCard 
            key={index}
            title={project.text}
            text={project.text}
            image={project.src}
          />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page