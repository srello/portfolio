import { FaDocker, FaGitAlt, FaJava, FaReact } from "react-icons/fa"
import { TECH_STACK_TITLE } from "../translation/tTranslation"
import { useAppTranslation } from "../translation/hooks/useAppTranslation"
import { SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si"
import { BiLogoSpringBoot } from "react-icons/bi"

export const TECH_STACK_ID = "tech-stack"

export const TechStack = () => {
  const [techStackTitle] = useAppTranslation({
    sentences: [{ sentenceKey: TECH_STACK_TITLE }],
  })
  const strecthText = (text: string) => {
    return (
      <div className="flex w-full items-center justify-between">
        {text.split("").map((letter) => (
          <span>{letter}</span>
        ))}
      </div>
    )
  }
  return (
    <section id={TECH_STACK_ID} className="flex flex-col gap-4 border-l pl-4">
      <h3 className="text-2xl font-thin text-teal-500 uppercase md:text-4xl">
        {techStackTitle}
      </h3>
      <section className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <div className="group relative grid place-content-center rounded-md py-2 outline-1 outline-transparent transition-colors duration-200 hover:text-[#5382a1] hover:outline-[#5382a1] active:text-[#5382a1] active:outline-[#5382a1] hover:dark:text-[#f89820] hover:dark:outline-[#f89820] active:dark:text-[#f89820] active:dark:outline-[#f89820]">
          <div className="absolute z-10 grid h-full w-full px-2 text-center text-xl font-black text-transparent group-hover:bg-slate-950/10 group-hover:text-slate-950 group-active:bg-slate-950/10 group-active:text-slate-950 group-hover:dark:text-white group-active:dark:text-white">
            {strecthText("JAVA")}
          </div>
          <FaJava className="size-12 md:size-16" />
        </div>
        <div className="group relative grid place-content-center rounded-md py-2 outline-1 outline-transparent transition-colors duration-200 hover:text-[#6DB33F] hover:outline-[#6DB33F] active:text-[#6DB33F] active:outline-[#6DB33F]">
          <div className="absolute z-10 grid h-full w-full px-2 text-center text-xl font-black text-transparent group-hover:bg-slate-950/10 group-hover:text-slate-950 group-active:bg-slate-950/10 group-active:text-slate-950 group-hover:dark:text-white group-active:dark:text-white">
            {strecthText("SPRING")}
          </div>
          <BiLogoSpringBoot className="size-12 md:size-16" />
        </div>
        <div className="group relative grid place-content-center rounded-md py-2 outline-1 outline-transparent transition-colors duration-200 hover:text-[#0064a5] hover:outline-[#0064a5] active:text-[#0064a5] active:outline-[#0064a5] hover:dark:text-[#008bb9] hover:dark:outline-[#008bb9] active:dark:text-[#008bb9] active:dark:outline-[#008bb9]">
          <div className="absolute z-10 grid h-full w-full px-2 text-center text-xl font-black text-transparent group-hover:bg-slate-950/10 group-hover:text-slate-950 group-active:bg-slate-950/10 group-active:text-slate-950 group-hover:dark:text-white group-active:dark:text-white">
            {strecthText("POSTGRESQL")}
          </div>
          <SiPostgresql className="size-12 md:size-16" />
        </div>
        <div className="group relative grid place-content-center rounded-md py-2 outline-1 outline-transparent transition-colors duration-200 hover:text-[#F1502F] hover:outline-[#F1502F] active:text-[#F1502F] active:outline-[#F1502F]">
          <div className="absolute z-10 grid h-full w-full px-2 text-center text-xl font-black text-transparent group-hover:bg-slate-950/10 group-hover:text-slate-950 group-active:bg-slate-950/10 group-active:text-slate-950 group-hover:dark:text-white group-active:dark:text-white">
            {strecthText("GIT")}
          </div>
          <FaGitAlt className="size-12 md:size-16" />
        </div>
        <div className="group relative grid place-content-center rounded-md py-2 outline-1 outline-transparent transition-colors duration-200 hover:text-[#00d8ff] hover:outline-[#00d8ff] active:text-[#00d8ff] active:outline-[#00d8ff]">
          <div className="absolute z-10 grid h-full w-full px-2 text-center text-xl font-black text-transparent group-hover:bg-slate-950/10 group-hover:text-slate-950 group-active:bg-slate-950/10 group-active:text-slate-950 group-hover:dark:text-white group-active:dark:text-white">
            {strecthText("REACT")}
          </div>
          <FaReact className="size-12 md:size-16" />
        </div>
        <div className="group relative grid place-content-center rounded-md py-2 outline-1 outline-transparent transition-colors duration-200 hover:text-[#06b6d4] hover:outline-[#06b6d4] active:text-[#06b6d4] active:outline-[#06b6d4]">
          <div className="absolute z-10 grid h-full w-full px-2 text-center text-xl font-black text-transparent group-hover:bg-slate-950/10 group-hover:text-slate-950 group-active:bg-slate-950/10 group-active:text-slate-950 group-hover:dark:text-white group-active:dark:text-white">
            {strecthText("TAILWIND CSS")}
          </div>
          <SiTailwindcss className="size-12 md:size-16" />
        </div>
        <div className="group relative grid place-content-center rounded-md py-2 outline-1 outline-transparent transition-colors duration-200 hover:text-[#3178c6] hover:outline-[#3178c6] active:text-[#3178c6] active:outline-[#3178c6]">
          <SiTypescript className="size-12 md:size-16" />
          <span className="absolute z-10 grid h-full w-full px-2 text-center text-xl font-black text-transparent group-hover:bg-slate-950/10 group-hover:text-slate-950 group-active:bg-slate-950/10 group-active:text-slate-950 group-hover:dark:text-white group-active:dark:text-white">
            {strecthText("TYPESCRIPT")}
          </span>
        </div>
        <div className="group relative grid place-content-center rounded-md py-2 outline-1 outline-transparent transition-colors duration-200 hover:text-[#0db7ed] hover:outline-[#0db7ed] active:text-[#0db7ed] active:outline-[#0db7ed]">
          <div className="absolute z-10 grid h-full w-full px-2 text-center text-xl font-black text-transparent group-hover:bg-slate-950/10 group-hover:text-slate-950 group-active:bg-slate-950/10 group-active:text-slate-950 group-hover:dark:text-white group-active:dark:text-white">
            {strecthText("DOCKER")}
          </div>
          <FaDocker className="size-12 md:size-16" />
        </div>
      </section>
    </section>
  )
}
