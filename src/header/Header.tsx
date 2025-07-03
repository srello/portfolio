import { Config } from '../config/Config'
import { Hero } from '../hero/Hero'

export const Header = () => {
  return (
    <header>
      <Config />
      <Hero />
    </header>
  )
}
