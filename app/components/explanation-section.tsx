import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ExplanationSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How it works</AccordionTrigger>
        <AccordionContent>
          <h3 className="text-lg font-semibold mb-2">Server Actions</h3>
          <p className="mb-4">
            Server actions process the input on the server-side. When the form is submitted, the `greetUser` function is
            called, which takes the form data, extracts the name, and returns a greeting message.
          </p>
          <h3 className="text-lg font-semibold mb-2">Shadcn UI Components</h3>
          <p className="mb-4">
            This app uses Shadcn UI components such as Button, Input, Card, and Accordion for consistent styling and
            improved user experience.
          </p>
          <h3 className="text-lg font-semibold mb-2">Next.js 15.1 Features</h3>
          <p>
            This app leverages Next.js 15.1 features like server actions, improved client-side rendering with React 19,
            and enhanced forms with the next/form API for seamless form submissions.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

