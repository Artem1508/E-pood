export default function Footer() {
  return (
    <footer className="bg-white border-t border-nude-300 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-3">HELP</h4>
          <ul className="Row">
            <div className="Column"><a href="#">Shipping</a></div>
            <div className="Column"><a href="#">Returns</a></div>
            <div className="Column"><a href="#">Size Guide</a></div>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">© 2026 ABM | Nude Edition</div>
    </footer>
  )
}