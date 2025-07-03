import { useTranslation } from 'react-i18next'
import type { AppTranslation } from '../tTranslation'

interface UseAppTranslationProps {
  sentences: AppTranslation[]
  translationFile?: string
}

export const useAppTranslation = ({
  sentences,
  translationFile
}: UseAppTranslationProps) => {
  const { t } = useTranslation([translationFile])

  return sentences.map((sentence) =>
    t(sentence.sentenceKey, sentence.dynamicValues)
  )
}
