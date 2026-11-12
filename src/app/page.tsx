import { Cases } from '@/components/Cases'
import { Contact } from '@/components/Contact'
import { Automations } from '@/components/Automations'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { StructuredData } from '@/components/StructuredData'
import { getProjectCasesForPage } from '@/lib/projects'
import { unstable_noStore as noStore } from 'next/cache'

export const dynamic = 'force-dynamic'

export default async function Page() {
  noStore()
  const { projects, databaseWarning } = await getProjectCasesForPage()

  return (
    <div className="portfolio-theme">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <StructuredData />
        <Hero />
        <Cases projects={projects} databaseWarning={databaseWarning} />
        <Services />
        <Automations />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
