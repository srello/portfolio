import { Toaster } from "sonner"
import { About } from "./about/About"
import { Header } from "./header/Header"
import { TechStack } from "./techStack/TechStack"
import { Projects } from "./projects/Projects"

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <main className="mx-auto flex w-5/6 max-w-4xl flex-col gap-y-10 md:w-2/3">
        <About />
        <TechStack />
        <Projects />
      </main>
    </>
  )
}

export default App
