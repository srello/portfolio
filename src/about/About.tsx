import { useAppTranslation } from "../translation/hooks/useAppTranslation"
import { ABOUT } from "../translation/tTranslation"

export const About = () => {
  const today = new Date()
  const [about] = useAppTranslation({
    sentences: [
      {
        sentenceKey: ABOUT,
        dynamicValues: {
          experienceYears:
            today.getFullYear() - Number(today.getMonth() > 7 ? 2019 : 2020),
        },
      },
    ],
  })
  return <p className="font-thin md:text-xl">{about}</p>
}
