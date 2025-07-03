import { useAppTranslation } from "../translation/hooks/useAppTranslation"
import { PROJECTS_TITLE } from "../translation/tTranslation"

export const PROJECTS_ID = "projects"

export const Projects = () => {
  const [techStackTitle] = useAppTranslation({
    sentences: [{ sentenceKey: PROJECTS_TITLE }],
  })
  return (
    <section id={PROJECTS_ID} className="flex flex-col gap-4 border-l pl-4">
      <h3 className="text-2xl font-thin text-teal-500 uppercase md:text-4xl">
        {techStackTitle}
      </h3>
      <section className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <div className="col-span-2 rounded-md outline-1 transition-all duration-200 hover:col-span-4">
          PALABROS
        </div>
        <div className="col-span-2 rounded-md outline-1 transition-all duration-200 hover:col-span-4">
          JWT
        </div>
      </section>
    </section>
  )
}
