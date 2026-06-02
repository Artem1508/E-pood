export default function Footer() {
  return (
    <footer className="bg-white border-t border-nude-300 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-3">HELP</h4>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">TRACK YOUR ORDER</h4>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Invoice</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">NEWSLETTER SIGNUP</h4>
          <p className="text-gray-500 text-xs mb-2">Get 10% off</p>
          <input type="email" placeholder="Your email" className="border p-1 w-full text-sm rounded" />
        </div>
        <div>
          <h4 className="font-bold mb-3">CREATORS CLUB</h4>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#">Join</a></li>
            <li><a href="#">Rewards</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">© 2026 ABM | Nude Edition</div>
    </footer>
  )
}