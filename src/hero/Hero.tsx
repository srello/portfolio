import { FaGithub, FaLinkedin } from "react-icons/fa"
import sergioImg from "../assets/sergio_rello.webp"
import { useAppTranslation } from "../translation/hooks/useAppTranslation"
import { HERO_DESCRIPTION } from "../translation/tTranslation"
import { MailIcon, PhoneIcon } from "lucide-react"
import { copyToClipboard } from "../utils/clipboard"

export const Hero = () => {
  const [heroDescription] = useAppTranslation({
    sentences: [{ sentenceKey: HERO_DESCRIPTION }],
  })
  return (
    <section className="mx-auto flex w-5/6 max-w-4xl flex-col items-start gap-4 py-10 text-start md:w-2/3 md:justify-center">
      <section className="flex items-center gap-4">
        <img
          src={sergioImg}
          alt="Image of the developer, Sergio Rello"
          className="size-20 rounded-full object-cover md:size-44"
        />
        <section className="flex flex-col">
          <h1 className="text-4xl font-bold uppercase md:text-5xl lg:text-6xl">
            Sergio Rello
          </h1>
          <h2 className="size-auto text-2xl font-thin text-teal-500 uppercase md:text-4xl lg:text-5xl">
            {heroDescription}
          </h2>
        </section>
      </section>
      <section className="w-full">
        <section className="mt-4 flex items-center gap-4">
          <section className="flex gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sergio-rello-elipe-22925a123/"
            >
              <FaLinkedin className="size-10 transition-transform duration-200 hover:scale-110" />
            </a>
            <a target="_blank" href="https://github.com/srello">
              <FaGithub className="size-10 transition-transform duration-200 hover:scale-110" />
            </a>
          </section>
          <section className="flex flex-col gap-4 sm:flex-row md:text-lg">
            <button
              className="flex cursor-pointer items-center justify-start gap-2 hover:text-slate-800 hover:dark:text-slate-200"
              onClick={() => copyToClipboard("srello0410@gmail.com")}
            >
              <MailIcon />
              <span>srello0410@gmail.com</span>
            </button>
            <button
              className="flex cursor-pointer items-center justify-start gap-2 hover:text-slate-800 hover:dark:text-slate-200"
              onClick={() => copyToClipboard("+34 620467491")}
            >
              <PhoneIcon />
              <span>+34 620 467 491</span>
            </button>
          </section>
        </section>
      </section>
    </section>
  )
}
