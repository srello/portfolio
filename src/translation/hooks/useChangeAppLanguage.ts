import { useState } from 'react'
import i18n from '../config/i18n'

export const useChangeAppLanguage = () => {
  const [language, setLanguage] = useState(i18n.language)
  const toggleLanguage = () => {
    const newLanguage = language.toLowerCase() === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
  }

  return { toggleLanguage, language }
}
