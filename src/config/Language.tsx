import { useChangeAppLanguage } from '../translation/hooks/useChangeAppLanguage'

export const Language = () => {
  const { toggleLanguage, language } = useChangeAppLanguage()
  return (
    <button
      className="hover:font-semibold hover:scale-110 transition-all duration-200 uppercase"
      onClick={toggleLanguage}
    >
      {language}
    </button>
  )
}
