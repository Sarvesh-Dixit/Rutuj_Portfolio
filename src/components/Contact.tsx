import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, CircleAlert, LoaderCircle } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { contact, profile } from "../data/portfolio";
import { easeLuxe } from "../lib/motion";
import RevealText from "./RevealText";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "success" | "error";

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Optional JSON endpoint (Formspree, Getform, own API). Without it, the form opens the visitor's mail app. */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.subject.trim().length < 3) e.subject = "A short subject helps — at least 3 characters.";
  if (f.message.trim().length < 10) e.message = "Tell me a little more — at least 10 characters.";
  return e;
}

const fieldMeta: { key: keyof Fields; label: string; type?: string; autoComplete?: string; multiline?: boolean }[] = [
  { key: "name", label: "Name", autoComplete: "name" },
  { key: "email", label: "Email", type: "email", autoComplete: "email" },
  { key: "subject", label: "Subject" },
  { key: "message", label: "Message", multiline: true },
];

export default function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const onChange = (key: keyof Fields) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...fields, [key]: e.target.value };
    setFields(next);
    if (touched) setErrors(validate(next));
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);
    const found = validate(fields);
    setErrors(found);
    const firstInvalid = fieldMeta.find((f) => found[f.key]);
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid.key}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(fields),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setFeedback("Thank you — your message has been sent. I'll reply as soon as I can.");
      } else {
        // mailto fallback: hand the composed message to the visitor's email app.
        const body = `${fields.message}\n\n— ${fields.name} (${fields.email})`;
        const href = `mailto:${profile.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;
        await new Promise((r) => setTimeout(r, 700));
        window.location.href = href;
        setFeedback("Your email app should now open with the message ready to send.");
      }
      setStatus("success");
      setFields(EMPTY);
      setTouched(false);
    } catch {
      setStatus("error");
      setFeedback(`Something went wrong while sending. Please try again, or write directly to ${profile.email}.`);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-60 bottom-0 size-[40rem] rounded-full bg-claret/30 blur-3xl" />
      <div className="container-x relative grid gap-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <SectionLabel number="07" text="Let's connect" />
          <RevealText
            id="contact-title"
            className="display mt-10 text-[clamp(2.8rem,6vw,6.4rem)]"
            lines={[
              contact.heading[0],
              <>
                Let&apos;s give it <em className="text-gold">direction.</em>
              </>,
            ]}
          />
          <Reveal delay={0.15}>
            <p className="mt-9 max-w-md leading-relaxed text-cream-muted">{contact.text}</p>
          </Reveal>

          <Reveal delay={0.25} className="mt-14">
            <p className="eyebrow text-[0.625rem] text-gold">Write to me</p>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-3 inline-block break-all pb-1 font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-light italic"
            >
              {profile.email}
            </a>

            <ul className="mt-12 flex flex-col border-t border-line">
              {profile.socials.map((s) => (
                <li key={s.label} className="border-b border-line">
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-5 eyebrow text-cream transition-colors hover:text-gold"
                    >
                      {s.label}
                      <ArrowUpRight aria-hidden="true" strokeWidth={1.25} className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <span className="flex items-center justify-between py-5 eyebrow text-cream-muted/70">
                      {s.label}
                      <span className="font-serif text-sm normal-case italic tracking-normal">profile link coming soon</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-28" delay={0.2}>
          <form noValidate onSubmit={onSubmit} aria-describedby="form-status" className="border border-line bg-wine/60 p-6 sm:p-10">
            <p className="font-serif text-2xl italic text-cream">Start a conversation</p>
            <div className="mt-8 space-y-8">
              {fieldMeta.map((f) => {
                const error = errors[f.key];
                const common = {
                  id: `field-${f.key}`,
                  name: f.key,
                  value: fields[f.key],
                  onChange: onChange(f.key),
                  "aria-invalid": Boolean(error),
                  "aria-describedby": error ? `error-${f.key}` : undefined,
                  className: `peer w-full border-0 border-b bg-transparent px-0 py-3 text-base text-cream outline-none transition-colors placeholder:text-cream-muted/40 focus:border-gold ${
                    error ? "border-[#e08a8a]" : "border-line-strong"
                  }`,
                };
                return (
                  <div key={f.key}>
                    <label htmlFor={`field-${f.key}`} className="eyebrow text-[0.625rem] text-cream-muted">
                      {f.label}
                    </label>
                    {f.multiline ? (
                      <textarea {...common} rows={4} className={`${common.className} resize-none`} placeholder="A few lines about your idea…" />
                    ) : (
                      <input {...common} type={f.type ?? "text"} autoComplete={f.autoComplete} />
                    )}
                    <AnimatePresence>
                      {error && (
                        <motion.p
                          id={`error-${f.key}`}
                          className="mt-2 text-xs text-[#f0a7a7]"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative isolate mt-10 inline-flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden border border-gold px-7 py-3.5 eyebrow text-cream transition-colors duration-500 hover:text-burgundy disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              <span aria-hidden="true" className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gold transition-transform duration-700 ease-(--ease-luxe) group-hover:scale-x-100" />
              {status === "sending" ? (
                <>
                  Sending <LoaderCircle aria-hidden="true" className="size-4 animate-spin" strokeWidth={1.5} />
                </>
              ) : (
                <>
                  Send message <ArrowRight aria-hidden="true" className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
                </>
              )}
            </button>

            <div id="form-status" role="status" aria-live="polite" className="min-h-6">
              <AnimatePresence mode="wait">
                {(status === "success" || status === "error") && (
                  <motion.p
                    key={status}
                    className={`mt-6 flex items-start gap-3 text-sm leading-relaxed ${status === "success" ? "text-cream" : "text-[#f0a7a7]"}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: easeLuxe }}
                  >
                    {status === "success" ? (
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                    ) : (
                      <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
                    )}
                    {feedback}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
