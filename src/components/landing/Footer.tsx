
export default function Footer() {
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs mt-4">
      <p>
        Todos los derechos reservados © {new Date().getFullYear()}{" "}
        <a
          // href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          CEFAUC
        </a>
      </p>
    </footer>
  )
}