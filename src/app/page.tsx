import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Services } from '@/components/Services'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
