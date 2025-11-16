// src/components/Footer.jsx
export default function Footer(){
  return (
    <footer id="contact" className="bg-[#060607] py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-gray-400">Email: hello@vyomgarud.example</p>
          <p className="text-gray-400">Phone: +91 8881444693</p>
        </div>
        <form className="flex-1 max-w-lg">
          <label className="text-sm text-gray-400">Get in touch</label>
          <div className="mt-2 flex gap-2">
            <input className="flex-1 p-3 rounded-lg bg-[#0d0e10] border border-gray-700" placeholder="Your email" />
            <button className="px-4 py-3 rounded-lg bg-[#ff7b00] text-black">Send</button>
          </div>
        </form>
      </div>
      <div className="text-center text-gray-600 mt-8">© VyomGarud</div>
    </footer>
  )
}
