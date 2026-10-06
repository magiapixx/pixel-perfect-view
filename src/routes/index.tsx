import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTA, SectionHeading, SiteShell, useReveal } from "@/components/site/SiteShell";
import { practices, testimonials } from "@/components/site/data";
import consultationImage from "@/assets/legal-consultation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Mara & Wren — A softer law firm for women" },
    { name: "description", content: "Women-led legal care for divorce, custody, workplace and safety matters. Calm, clear, and on your side." },
    { property: "og:title", content: "Mara & Wren — A softer law firm for women" },
    { property: "og:description", content: "Women-led legal care for divorce, custody, workplace and safety matters." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Home,
});

const moments = [
  ["11:42 pm", "He said I’ll never see the kids again."], ["Tuesday, 8:05 am", "My manager cut my hours after I told him I’m pregnant."], ["Sunday", "I want a divorce, but I don’t know where to begin."], ["3:17 am", "I need to feel safe in my own home."],
];
const faqs = [
  ["Is the first consultation really free?", "Yes. Your first 15-minute conversation costs nothing and carries no obligation. We listen, learn what is happening and help identify a sensible next step."],
  ["Is everything I share confidential?", "Your first conversation is treated with care and discretion. We will explain when attorney–client privilege begins and how your information is protected."],
  ["How much will my case cost?", "It depends on the work your matter needs. Before you commit, we explain likely fees, possible paths and where costs can change."],
  ["How long will my case take?", "Every matter has its own pace. We give you a realistic timeline after understanding the facts and keep you updated as it changes."],
];

function Home() {
  useReveal(); const [sent, setSent] = useState(false);
  return <SiteShell>
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center">
      <div className="ambient ambient-left bg-blush" /><div className="ambient ambient-right bg-lilac" />
      <p className="animate-appear relative mb-6 rounded-full bg-card/80 px-4 py-1.5 text-sm text-muted-foreground shadow-soft">Women-led family, workplace &amp; safety law</p>
      <h1 style={{ animationDelay: "150ms" }} className="animate-appear relative max-w-4xl text-5xl font-light leading-[1.05] md:text-7xl">Legal care that <span className="font-hand text-6xl text-primary md:text-8xl">holds</span> you, not just your case.</h1>
      <p style={{ animationDelay: "300ms" }} className="animate-appear relative mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">A small team of women attorneys helping women move through divorce, custody, workplace harm and safety with calm, clear guidance.</p>
      <div style={{ animationDelay: "450ms" }} className="animate-appear relative mt-9 flex flex-wrap justify-center gap-3"><Button asChild size="lg" className="rounded-full px-7"><a href="#book">Free consultation</a></Button><Button asChild size="lg" variant="outline" className="rounded-full px-7"><Link to="/about">Meet the firm</Link></Button></div>
      <p className="relative mt-14 text-xs uppercase tracking-widest text-muted-foreground">A first conversation. No pressure. Complete confidence.</p>
    </section>

    <section className="border-y border-border bg-card px-6 py-8"><div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-5 text-center text-sm font-medium text-muted-foreground"><span>State Bar member</span><span>Women in Law Alliance</span><span>Family Advocacy Network</span><span>Community Legal Care</span></div></section>

    <section className="py-24"><div className="mx-auto max-w-5xl px-6"><SectionHeading kicker="When it gets real" title={<>It often starts with a moment <span className="font-hand text-5xl text-muted-foreground">like this</span></>} body="Whatever brought you here, you deserve to be heard before you are advised." /></div><div className="no-scrollbar mt-10 flex gap-4 overflow-x-auto px-6 pb-4 md:px-[max(1.5rem,calc((100vw-64rem)/2))]">{moments.map(([time, text], i) => <div key={text} style={{ "--d": `${i * 90}ms` } as CSSProperties} className="reveal flex h-44 w-72 shrink-0 flex-col justify-between rounded-2xl bg-card p-6 shadow-soft"><span className="text-sm text-muted-foreground">{time}</span><p className="text-xl leading-snug">{text}</p></div>)}</div></section>

    <section className="bg-stone-soft px-6 py-24"><div className="mx-auto max-w-5xl"><SectionHeading kicker="Our approach" title={<>Soft where it matters. <span className="font-hand text-5xl text-primary">Strong</span> where it counts.</>} body="We make room for the full story, translate the legal language and advocate without losing sight of the life around your case." /><div className="mt-14 grid gap-5 md:grid-cols-3">{[[HeartHandshake,"Empathetic listening","We begin with your experience, your concerns and what a good outcome means to you."],[MessageCircle,"Clear communication","Plain words, honest options and no wondering what happens next."],[ShieldCheck,"Fierce advocacy","A thoughtful strategy does not mean a timid one. We protect what matters with resolve."]].map(([Icon,title,body],i) => { const I = Icon as typeof HeartHandshake; return <article key={String(title)} style={{ "--d": `${i * 100}ms` } as CSSProperties} className="reveal rounded-2xl border border-border bg-card p-7"><I className="h-6 w-6 text-primary"/><h3 className="mt-8 text-2xl font-light">{String(title)}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{String(body)}</p></article>})}</div></div></section>

    <section className="px-6 py-24"><div className="mx-auto max-w-5xl"><SectionHeading kicker="How we help" title="Focused legal care for the life around the issue." /><div className="mt-12 grid gap-5 md:grid-cols-3">{practices.map((practice,i) => <article key={practice.slug} style={{ "--d": `${i * 100}ms` } as CSSProperties} className={`reveal flex min-h-96 flex-col overflow-hidden rounded-2xl ${practice.accent}`}><div className="h-40 overflow-hidden"><img src={consultationImage} alt="Attorneys reviewing documents together" loading="lazy" width={1200} height={912} className={`h-full w-full object-cover transition-transform duration-700 hover:scale-105 ${i === 1 ? "object-center" : i === 2 ? "object-right" : "object-left"}`} /></div><div className="flex flex-1 flex-col p-7"><span className="text-sm text-muted-foreground">0{i+1}</span><h3 className="mt-auto text-3xl font-light">{practice.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{practice.short}</p><Link to="/practice-areas/$slug" params={{slug: practice.slug}} className="mt-6 inline-flex items-center gap-2 text-sm font-medium">Learn more <ArrowRight className="h-4 w-4"/></Link></div></article>)}</div></div></section>

    <section className="bg-card px-6 py-24"><div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[.8fr_1.2fr] md:items-start"><SectionHeading kicker="The way through" title={<>Three steps. One steady <span className="font-hand text-5xl text-primary">hand.</span></>} body="We keep the process understandable so your energy can go where it is needed most."/><div className="space-y-4">{[["01","Tell us your story","A short, private call at your pace."],["02","See your options","A clear plan, likely costs and honest trade-offs."],["03","Move with support","We guide, negotiate and represent you through resolution."]].map(([n,t,b],i)=><div key={n} style={{"--d":`${i*100}ms`} as CSSProperties} className="reveal grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-6"><span className="font-hand text-3xl text-primary">{n}</span><div><h3 className="text-xl font-medium">{t}</h3><p className="mt-2 text-muted-foreground">{b}</p></div></div>)}</div></div></section>

    <section className="px-6 py-24"><div className="mx-auto max-w-5xl"><SectionHeading kicker="Why women choose us" title="Legal strategy with the whole person in view."/><div className="mt-12 grid gap-8 md:grid-cols-3">{[["A safer space","You never have to minimize what happened to be taken seriously."],["A plan made for you","Advice shaped around your family, work, finances and future."],["Support beyond paperwork","Preparation that helps you feel grounded in every conversation and decision."]].map(([t,b],i)=><div key={t} style={{"--d":`${i*100}ms`} as CSSProperties} className="reveal border-l-2 border-primary pl-6"><h3 className="text-2xl font-light">{t}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{b}</p></div>)}</div></div></section>

    <section className="bg-lavender/60 px-6 py-24"><div className="mx-auto max-w-5xl"><SectionHeading kicker="Client notes" title={<>Words left in the <span className="font-hand text-5xl text-primary">margins</span></>} /><div className="mt-12 grid gap-6 md:grid-cols-3">{testimonials.map(([quote,name],i)=><figure key={name} style={{"--d":`${i*100}ms`} as CSSProperties} className={`reveal rounded-2xl bg-card p-7 shadow-soft ${i===1?"md:translate-y-8":""}`}><Sparkles className="h-5 w-5 text-primary"/><blockquote className="mt-6 text-lg leading-relaxed">“{quote}”</blockquote><figcaption className="mt-6 font-hand text-2xl text-muted-foreground">— {name}</figcaption></figure>)}</div></div></section>

    <section className="px-6 py-24"><div className="mx-auto max-w-2xl"><SectionHeading center kicker="Common questions" title="A little clarity before we talk."/><Accordion type="single" collapsible defaultValue="item-0" className="mt-10">{faqs.map(([q,a],i)=><AccordionItem value={`item-${i}`} key={q} className="rounded-none border-border"><AccordionTrigger className="py-6 text-base hover:no-underline">{q}</AccordionTrigger><AccordionContent className="pb-6 pr-8 text-base leading-relaxed text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

    <CTA />
    <section id="book" className="scroll-mt-24 bg-blush/60 px-6 py-24"><div className="reveal mx-auto max-w-2xl text-center"><p className="font-hand text-3xl text-primary">start softly</p><h2 className="mt-2 text-4xl font-light md:text-5xl">Request your free call</h2><p className="mt-4 text-muted-foreground">Leave your email and we’ll reach out within one business day.</p>{sent?<p className="mt-9 text-2xl font-light">Thank you — we’ll be in touch soon.</p>:<form onSubmit={(event)=>{event.preventDefault();setSent(true)}} className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="consult-email">Email address</label><input id="consult-email" required type="email" placeholder="you@email.com" className="min-h-12 flex-1 rounded-full border border-border bg-card px-5 outline-none focus:border-primary"/><Button type="submit" className="min-h-12 rounded-full bg-foreground px-7 text-background hover:bg-foreground/85">Request a call</Button></form>}</div></section>
  </SiteShell>;
}
