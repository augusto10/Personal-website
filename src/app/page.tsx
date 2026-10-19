import { Cases } from '@/components/Cases'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { StructuredData } from '@/components/StructuredData'
import { getProjectCasesForPage } from '@/lib/projects'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const { projects, databaseWarning } = await getProjectCasesForPage()

  return (
    <main>
      <StructuredData />
      <Header />
      <Hero />
      <Cases projects={projects} databaseWarning={databaseWarning} />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
