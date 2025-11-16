// src/components/Products.jsx
const items = [
  {title: "Autonomous VTOL", desc: "Hybrid takeoff & landing with long endurance."},
  {title: "Secure Comms", desc: "Low-latency, encrypted datalinks with failover."},
  {title: "Payload Integration", desc: "Modular sensors & EO/IR payloads."},
  {title: "Mission SW", desc: "AI-assisted planning & adaptive flight stacks."}
]

export default function Products(){
  return (
    <section id="products" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Capabilities</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it)=>(
          <div key={it.title} className="bg-[#0f1113] p-6 rounded-2xl shadow hover:-translate-y-2 transition-transform">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-2 text-gray-400">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
