// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-10 py-20">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">VyomGarud</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Precision UAV systems engineered for mission-critical autonomy and reliability.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg bg-[#ff7b00] text-black font-semibold">Contact Sales</a>
          <a href="#products" className="px-6 py-3 rounded-lg border border-gray-700">Our Capabilities</a>
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-[#0f1113] p-6 rounded-2xl shadow-lg">
          <div className="h-64 flex items-center justify-center">
            {/* placeholder svg — replace with image in /public when ready */}
            <svg width="220" height="220" viewBox="0 0 24 24" fill="none" className="opacity-80">
              <path d="M12 2 L15 6 L21 7 L17 11 L18 17 L12 14 L6 17 L7 11 L3 7 L9 6 Z" fill="#ff7b00"/>
            </svg>
          </div>
          <div className="mt-4 text-gray-400 text-sm">Autonomy • Redundant Avionics • Secure Comms</div>
        </div>
      </div>
    </section>
  )
}
