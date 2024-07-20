
export const Radio = () => {
  return (
    <section className="w-full">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¡También estamos en la radio!</h2>
          </div>
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Revisa nuestras transmisiones en la radio, podcast y más.
          </div>
          <img
            alt="Imagen"
            className="mx-auto aspect-[6/1] overflow-hidden rounded-xl object-cover"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </div>
    </section>
  )
}