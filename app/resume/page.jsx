"use client";

import { Description } from '@radix-ui/react-dialog';
import { Figma, icons, Info } from 'lucide-react';
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, } from 'react-icons/fa';

import {SiTailwindcss, SiNextdotjs, } from 'react-icons/si';


const about ={
  title: "About Me",
  Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi consequuntur id perspiciatis doloremque! Quis, animi!",
  info: [
    {
      fieldName: "Name",
      FieldValue: "Nigam Dhillon"
    },
    {
      fieldName: "Phone",
      FieldValue: "+91 1800500800"
    },
    {
      fieldName: "Exprience",
      FieldValue: "12+ Years"
    }, 
    {
      fieldName: "Skype",
      FieldValue: "Nigam Dhillon"
    },
    {
      fieldName: "Nationality",
      FieldValue: "Indian"
    },
    {
      fieldName: "Freelance",
      FieldValue: "Available"
    },
    {
      fieldName: "Languages",
      FieldValue: "English,Hindi,Punjabi"
    },
  ]
};

const experience = {
  icons:'/assets/resume/badge.svg',
  title: 'My experience',
  Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi consequuntur id perspiciatis doloremque! Quis, animi.',
  items: [
    { 
      company:'Tech Solutions Tnc.',
      position: 'Full Stack Developer',
      duration:'2022 - Present',
    },
    { 
      company:'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration:'Summer 2021',
    },
    { 
      company:'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration:'2020 - 2021',
    },
    { 
      company:'Tech Academy',
      position: 'Teaching Assistant',
      duration:'2019 - 2020',
    },
    { 
      company:'Digital Agency',
      position: 'UI/UX Designer',
      duration:'2018 - 2019',
    },
    { 
      company:'Software developer',
      position: 'Junior developer',
      duration:'2017 - 2018',
    },
    
  ]
  
};

const education = {
  icons:'/assets/resume/cap.svg',
  title: 'My education',
  Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi consequuntur id perspiciatis doloremque! Quis, animi.',
  items: [
    { 
      institution:'Online Course Platform',
      degree: 'Full Stack Web Development Bootcamp',
      duration:'2023',
    },
    { 
      institution:'Codeacdemy',
      degree: 'Front-End Track',
      duration:'2022',
    },
    { 
      institution:'Online Course',
      degree: 'Programing Course',
      duration:'2020 - 2021',
    },
    { 
      institution:'Tech Institute',
      degree: 'Certified Web Developer',
      duration:'2019',
    },
    { 
      institution:'Design School',
      degree: 'Diploma in Graphic Design',
      duration:'2016 - 2018',
    },
    { 
      institution:'Community Collage',
      degree: 'Associate Degree in computer science',
      duration:'2014 - 2016',
    },
  ]
  
};
 
const skills = {
  title: "My Skills",
  Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi consequuntur id perspiciatis doloremque! Quis, animi.',
  skillList:[
    {
      icons: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icons: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icons: <FaJs />,
      name: "JAVASCRIPT",
    },
    {
      icons: <FaReact />,
      name: "REACT JS",
    },
    {
      icons: <SiNextdotjs />,
      name: "NEXT JS",
    },
    {
      icons: <SiTailwindcss />,
      name: "TAILWIND CSS",
    },
    {
      icons: <FaNodeJs/>,
      name: "NODE JS",
    },
    {
      icons: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icons: <FaFigma />,
      name: "FIGMA",
    }
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area'; 
import { motion } from 'framer-motion';


const Resume  = () => {
  return (
    <motion.div 
    initial={{opacity: 0 }} 
    animate={{
      opacity: 1, 
      transition:{delay:2.4, duration:0.4, ease:"easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    > 
    <div className="container mx-auto">
      <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        <div className='min-h-[70vh] w-full'>
          
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {experience.Description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience.items.map((item, index)=>{
                    return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1' >
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>


                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>





          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {education.Description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index)=>{
                    return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1' >
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>


                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.institution}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>




          <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.Description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icons}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </TabsContent>
          

          <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.Description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.FieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </TabsContent>
        </div>
      </Tabs>
      </div> 
    </motion.div>
  );
}

export default Resume 