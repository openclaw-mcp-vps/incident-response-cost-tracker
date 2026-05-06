export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Incident Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate the True Cost<br />of Every Incident
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Track incident duration, engineers involved, and revenue impact. Generate detailed post-mortem reports with real dollar figures — so leadership finally understands the stakes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $49/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for 14-day trial</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { title: "Engineer Cost Tracking", desc: "Input hourly rates and headcount to calculate real labor costs per incident." },
          { title: "Revenue Impact Estimation", desc: "Map downtime to revenue loss using your MRR and traffic data." },
          { title: "Post-Mortem Reports", desc: "Auto-generate shareable reports with cost breakdowns and timelines." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$49</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per team</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited incidents tracked",
              "Custom engineer hourly rates",
              "Revenue impact calculator",
              "Automated post-mortem reports",
              "Webhook integrations (PagerDuty, OpsGenie)",
              "CSV & PDF export",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the revenue impact calculation work?",
              a: "You provide your monthly recurring revenue and estimated traffic. We calculate revenue-per-minute and multiply by incident duration, giving you a defensible dollar figure for every outage."
            },
            {
              q: "Can I integrate with my existing alerting tools?",
              a: "Yes. We support inbound webhooks from PagerDuty, OpsGenie, and any tool that can send HTTP POST requests. Incidents are automatically created and timed from alert to resolution."
            },
            {
              q: "Is my data secure?",
              a: "All data is encrypted at rest and in transit. We never share your incident data with third parties. You can export or delete your data at any time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Incident Response Cost Tracker. All rights reserved.
      </footer>
    </main>
  );
}
