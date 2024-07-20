import { Card } from "../ui/card"

export const Contacto = () => {
  return (
    <Card className="w-fll p-8">

      <section id="contacto" className="w-full">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactame</h2>
            </div>
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Ingrese sus datos y nos pondremos en contacto con usted.
            </div>
            <div>
              {/* <ContactForm /> */}
            </div>
          </div>
        </div>
      </section>
    </Card>
  )
}