import { Suspense } from "react"
import GreetingForm from "./components/greeting-form"
import ExplanationSection from "./components/explanation-section"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Next.js Greeting App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <GreetingForm />
      </Suspense>
      <ExplanationSection />
    </main>
  )
}

