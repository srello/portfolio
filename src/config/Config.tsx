import { DarkMode } from './DarkMode'
import { Language } from './Language'

export const Config = () => {
  return (
    <section className="p-4 flex justify-end gap-4">
      <Language />
      <DarkMode />
    </section>
  )
}
