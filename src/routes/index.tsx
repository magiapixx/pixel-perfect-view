import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mara & Wren — A softer law firm for women" },
      { name: "description", content: "Women-led legal care for divorce, custody, workplace and safety matters. Calm, clear, and on your side." },
      { property: "og:title", content: "Mara & Wren — A softer law firm for women" },
      { property: "og:description", content: "Women-led legal care for divorce, custody, workplace and safety matters." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const moments = [
  ["11:42 pm", "He said I'll never see the kids again."],
  ["Tuesday, 8:05 am", "My manager cut my hours after I told him I'm pregnant."],
  ["Sunday", "I want a divorce, but I don't know where to begin."],
  ["3:17 am", "I need to feel safe in my own home."],
  ["Last spring", "My prenup doesn't feel fair anymore."],
];

const notes = [
  ["I walked in shaking and walked out with a plan. They never once made me feel small.", "Danielle R.", "rotate-1"],
  ["Custody was the hardest year of my life. Mara made it the most bearable.", "Priya S.", "-rotate-1"],
  ["They explained everything twice, gently, without me asking.", "Leah M.", "-rotate-1"],
  ["My settlement was fair. My dignity stayed intact. Both mattered.", "Ana T.", "rotate-1"],
];

const faqs = [
  ["Is the first consultation really free?", "Yes. Your first 30-minute conversation costs nothing and carries no obligation. We just listen and map out your options."],
  ["Is everything I share confidential?", "Always. Attorney–client privilege begins from your very first message to us, even before you hire us."],
  ["What areas of law do you handle?", "Divorce and separation, child custody and support, workplace discrimination and harassment, protective orders, and prenuptial agreements."],
  ["Can we meet somewhere other than an office?", "Of course. We offer video calls, phone calls, and quiet in-person meetings in our living-room-style office."],
];

function Index() {
  useReveal();
  const [open, setOpen] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      <div className="grain" />

      <nav className="fixed left-1/2 top-4 z-40 flex w-[calc(100%-32px)] max-w-3xl -translate-x-1/2 items-center justify-between rounded-full bg-card/70 px-4 py-2.5 shadow-soft backdrop-blur-[20px]">
        <a href="#" className="flex items-center gap-2 text-sm font-medium">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary"><span className="h-2 w-2 rounded-full bg-card" /></span>
          Mara &amp; Wren
        </a>
        <div className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#moments" className="hover:text-foreground">Practice</a>
          <a href="#process" className="hover:text-foreground">Process</a>
          <a href="#notes" className="hover:text-foreground">Clients</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </div>
        <a href="#book" className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">Book a call</a>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 pt-28 text-center">
        <div className="animate-float absolute -left-20 top-24 h-80 w-80 rounded-full bg-blush opacity-60 blur-3xl" />
        <div className="animate-float absolute -right-16 bottom-10 h-96 w-96 rounded-full bg-lilac opacity-60 blur-3xl [animation-delay:-3s]" />
        <p className="reveal relative mb-6 rounded-full bg-card/70 px-4 py-1.5 text-sm text-muted-foreground shadow-soft">Women-led family &amp; workplace law</p>
        <h1 className="reveal relative max-w-4xl text-5xl font-light leading-[1.05] md:text-7xl">
          Legal care that <span className="font-hand text-6xl text-primary md:text-8xl">holds</span> you, not just your case.
        </h1>
        <p className="reveal relative mt-6 max-w-[500px] text-lg text-muted-foreground">
          We're a small firm of women attorneys helping women through divorce, custody, workplace harm and safety — slowly, clearly, kindly.
        </p>
        <div className="reveal relative mt-10 flex flex-wrap justify-center gap-3">
          <a href="#book" className="rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-coral transition hover:-translate-y-0.5">Free consultation</a>
          <a href="#moments" className="rounded-full border border-border bg-card px-7 py-3.5 font-medium">How we help</a>
        </div>
      </section>

      {/* Moments */}
      <section id="moments" className="py-20">
        <div className="reveal mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-light md:text-5xl">It usually starts with a moment <span className="font-hand text-5xl text-muted-foreground">like these</span></h2>
        </div>
        <div className="no-scrollbar mt-10 flex gap-4 overflow-x-auto px-6 pb-4 md:px-[max(1.5rem,calc((100vw-64rem)/2))]">
          {moments.map(([t, s]) => (
            <div key={s} className="group flex h-40 w-72 shrink-0 flex-col justify-between rounded-3xl bg-card p-6 shadow-soft">
              <span className="text-sm text-muted-foreground/70">{t}</span>
              <p className="text-xl leading-snug text-foreground transition-colors duration-500 group-hover:text-primary">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-light md:text-5xl">Three gentle steps</h2>
          <p className="mt-4 text-muted-foreground">From your first breath to your final signature.</p>
        </div>
        <div className="mt-16 flex items-start justify-center gap-4 md:gap-8">
          <Panel className="hidden h-[580px] w-[280px] translate-y-12 bg-sage opacity-80 md:flex" step="01" title="Listen" body="Tell us your story at your pace. No forms, no rush, no judgment." />
          <div className="reveal flex h-[620px] w-[300px] shrink-0 flex-col items-center justify-between rounded-[3rem] border-8 border-card bg-background p-8 text-center shadow-soft">
            <span className="text-sm text-muted-foreground">02 · Breathe</span>
            <div>
              <h3 className="text-3xl font-light">Your plan, in plain words</h3>
              <p className="mt-3 text-sm text-muted-foreground">We lay out every option, cost and timeline before you decide anything.</p>
            </div>
            <a href="#book" className="animate-pulse-soft grid h-36 w-36 place-items-center rounded-full bg-primary font-medium">Breathe</a>
            <span className="font-hand text-2xl text-muted-foreground">you're not alone</span>
          </div>
          <Panel className="hidden h-[580px] w-[280px] translate-y-24 bg-lavender opacity-80 md:flex" step="03" title="Stand with you" body="In negotiation and in court, we speak for you so you can rest." />
        </div>
      </section>

      {/* Notes */}
      <section id="notes" className="px-6 py-28">
        <h2 className="reveal mx-auto max-w-4xl text-4xl font-light md:text-5xl">Notes from <span className="font-hand text-5xl text-primary">our women</span></h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {notes.map(([q, n, r]) => (
            <figure key={n} className={`reveal rounded-[2rem] bg-card p-8 shadow-soft ${r}`}>
              <blockquote className="text-lg leading-relaxed">“{q}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-muted-foreground/50" />
                <span className="font-hand text-2xl text-muted-foreground">{n}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20">
        <h2 className="reveal mx-auto max-w-2xl text-center text-4xl font-light">Quiet questions</h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          {faqs.map(([q, a], i) => (
            <div key={q} className="rounded-2xl border border-border/60 bg-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-6 text-left font-medium">
                {q}
                <span className={`text-2xl font-light transition-transform duration-500 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-500 ease-in-out ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden"><p className="px-6 pb-6 text-muted-foreground">{a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book */}
      <section id="book" className="relative overflow-hidden px-6 py-32 text-center">
        <div className="animate-float absolute left-1/4 top-10 h-72 w-72 rounded-full bg-blush blur-3xl" />
        <div className="animate-float absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-sage blur-3xl [animation-delay:-2s]" />
        <div className="reveal relative mx-auto max-w-xl">
          <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-foreground">
            <span className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <h2 className="mt-8 text-4xl font-light md:text-6xl">Let's talk, <span className="font-hand text-6xl text-primary">softly</span></h2>
          <p className="mt-4 text-muted-foreground">Leave your email and we'll reach out within one business day to book your free, confidential consultation.</p>
          {sent ? (
            <p className="mt-10 font-hand text-3xl">Thank you — we'll be in touch soon.</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 flex flex-col gap-3 rounded-full sm:flex-row">
              <input required type="email" placeholder="you@email.com" className="flex-1 rounded-full border border-border bg-stone-soft px-6 py-4 outline-none focus:border-primary" />
              <button className="rounded-full bg-foreground px-8 py-4 font-medium text-background transition-transform hover:scale-105">Request a call</button>
            </form>
          )}
        </div>
      </section>

      <footer className="px-6 pb-10 text-center text-sm text-muted-foreground">
        © 2026 Mara &amp; Wren Law · Attorney advertising. This site is not legal advice.
      </footer>
    </div>
  );
}

function Panel({ className, step, title, body }: { className: string; step: string; title: string; body: string }) {
  return (
    <div className={`reveal shrink-0 flex-col justify-between rounded-[3rem] border-8 border-card p-8 shadow-soft ${className}`}>
      <span className="text-sm text-muted-foreground">{step}</span>
      <div>
        <h3 className="text-3xl font-light">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{body}</p>
      </div>
      <span className="font-hand text-2xl text-muted-foreground">step {step}</span>
    </div>
  );
}
