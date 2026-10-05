import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="relative min-h-screen overflow-x-hidden">
    <div className="grain" />
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border/70 bg-card/85 px-4 py-2.5 shadow-soft backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary"><span className="h-2 w-2 rounded-full bg-card" /></span>Mara &amp; Wren
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/about" activeProps={{ className: "text-foreground" }}>About</Link>
          <Link to="/practice-areas" activeProps={{ className: "text-foreground" }}>Practice areas</Link>
          <Link to="/resources" activeProps={{ className: "text-foreground" }}>Resources</Link>
        </div>
        <Button asChild className="hidden rounded-full bg-foreground px-5 text-background hover:bg-foreground/85 md:inline-flex"><Link to="/" hash="book">Book a call</Link></Button>
        <Button variant="ghost" size="icon" className="rounded-full md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
      </nav>
      {open && <div className="mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-2xl border border-border bg-card p-3 shadow-soft md:hidden">
        <Link to="/about" className="rounded-xl px-4 py-3" onClick={() => setOpen(false)}>About</Link>
        <Link to="/practice-areas" className="rounded-xl px-4 py-3" onClick={() => setOpen(false)}>Practice areas</Link>
        <Link to="/resources" className="rounded-xl px-4 py-3" onClick={() => setOpen(false)}>Resources</Link>
        <Button asChild className="mt-1 rounded-xl bg-foreground text-background"><Link to="/" hash="book" onClick={() => setOpen(false)}>Book a call</Link></Button>
      </div>}
    </header>
    <main>{children}</main>
    <Footer />
  </div>;
}

export function PageHero({ eyebrow, title, accent, body }: { eyebrow: string; title: string; accent: string; body: string }) {
  return <section className="relative flex min-h-[68vh] items-end overflow-hidden px-6 pb-20 pt-36 md:pb-24">
    <div className="ambient ambient-left bg-blush" /><div className="ambient ambient-right bg-sage" />
    <div className="relative mx-auto w-full max-w-5xl animate-appear">
      <p className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
      <h1 className="max-w-4xl text-5xl font-light leading-[1.05] md:text-7xl">{title} <span className="font-hand text-6xl text-primary md:text-8xl">{accent}</span></h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{body}</p>
    </div>
  </section>;
}

export function SectionHeading({ kicker, title, body, center = false }: { kicker?: string; title: ReactNode; body?: string; center?: boolean }) {
  return <div className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
    {kicker && <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">{kicker}</p>}
    <h2 className="text-4xl font-light leading-tight md:text-5xl">{title}</h2>
    {body && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{body}</p>}
  </div>;
}

export function CTA({ title = "You don’t have to figure this out alone.", body = "Start with a free, confidential 15-minute conversation. We’ll listen and help you see the next step." }: { title?: string; body?: string }) {
  return <section className="px-6 py-24"><div className="reveal mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-foreground px-8 py-16 text-center text-background md:px-16">
    <p className="font-hand text-3xl text-primary">a gentle first step</p><h2 className="mx-auto mt-3 max-w-3xl text-4xl font-light md:text-5xl">{title}</h2><p className="mx-auto mt-5 max-w-xl text-background/70">{body}</p>
    <Button asChild size="lg" className="mt-8 rounded-full px-7"><Link to="/" hash="book">Book a free call <ArrowRight /></Link></Button>
  </div></section>;
}

export function Footer() {
  return <footer className="border-t border-border px-6 py-12"><div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
    <div><Link to="/" className="text-lg font-semibold">Mara &amp; Wren</Link><p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">Women-led legal care for life’s most difficult transitions.</p></div>
    <div className="space-y-2 text-sm"><p className="font-medium">Explore</p><Link to="/about" className="block text-muted-foreground">About us</Link><Link to="/practice-areas" className="block text-muted-foreground">Practice areas</Link><Link to="/resources" className="block text-muted-foreground">Resources</Link></div>
    <div className="text-sm"><p className="font-medium">Legal note</p><p className="mt-2 text-muted-foreground">Attorney advertising. This site is not legal advice.</p></div>
  </div><p className="mx-auto mt-10 max-w-5xl text-xs text-muted-foreground">© 2026 Mara &amp; Wren Law</p></footer>;
}
