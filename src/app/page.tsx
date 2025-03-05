import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <>
      <Head>
        <title>DeepResume - AI-Powered Resume Builder</title>
        <meta name="description" content="Create ATS-friendly and professionally written resumes in seconds with AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <Pricing />
      </main>
    </>
  )
} 