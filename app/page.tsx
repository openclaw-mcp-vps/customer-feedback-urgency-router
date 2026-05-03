export default function Page() {
  const faqs = [
    {
      q: "Which channels does FeedbackRouter support?",
      a: "Email, live chat, web forms, and API webhooks — all unified in one dashboard with AI-powered triage."
    },
    {
      q: "How does SLA tracking work?",
      a: "Each routed ticket gets a deadline based on urgency tier. Overdue items auto-escalate and notify the responsible team lead."
    },
    {
      q: "Can I customize routing rules?",
      a: "Yes. Define keyword triggers, sentiment thresholds, and team assignments. The AI learns from your overrides over time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Routing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Route feedback by{" "}
          <span className="text-[#58a6ff]">urgency &amp; sentiment</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          FeedbackRouter ingests customer messages from every channel, uses AI to score urgency and sentiment, then dispatches tickets to the right team — with SLA timers and auto-escalation built in.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $49/mo
        </a>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Instant Triage", desc: "AI scores every message in under 2 seconds." },
            { icon: "🎯", title: "Smart Routing", desc: "Rules + ML send tickets to the right team automatically." },
            { icon: "⏱", title: "SLA Tracking", desc: "Deadlines, reminders, and escalations out of the box." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$49<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6">Everything included, no hidden fees</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited feedback channels",
              "AI sentiment & urgency scoring",
              "Custom routing rules",
              "SLA tracking & escalations",
              "Team dashboard & analytics",
              "Email & Slack notifications"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} FeedbackRouter. All rights reserved.
      </footer>
    </main>
  );
}
