// src/components/Highlights.jsx
export default function Highlights(){
  const bullets = [
    "Redundant avionics for mission safety",
    "Real-time situational awareness",
    "Field-proven endurance and stability"
  ]
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
      <ul className="grid sm:grid-cols-3 gap-4">
        {bullets.map(b=>(
          <li key={b} className="bg-[#0f1113] p-4 rounded-2xl shadow flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ff7b00] flex items-center justify-center text-black font-bold">✓</div>
            <div className="text-gray-300">{b}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
