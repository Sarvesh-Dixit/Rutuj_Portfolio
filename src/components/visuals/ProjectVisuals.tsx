import type { JSX } from "react";
import type { ProjectVisualKey } from "../../data/projects";

/**
 * Illustrated interface compositions for each concept project.
 * Built from HTML/SVG so they stay crisp, weigh almost nothing and never break.
 * Sizes use container-query units (cqw) so each composition scales as one piece.
 */

/* ───────────────────────── 01 · NOVA FINANCE ───────────────────────── */
function Nova() {
  const bars = [42, 66, 38, 74, 55, 88, 61, 47, 70, 52, 80, 64];
  return (
    <div className="flex h-full w-full bg-[#141012] font-sans text-[1.35cqw] text-[#e9dfcf]">
      <aside className="flex w-[7%] flex-col items-center gap-[2.4cqw] border-r border-white/5 py-[2.6cqw]">
        <span className="font-serif text-[2.2cqw] italic text-[#C5A15B]">N</span>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`block size-[1.5cqw] rounded-[0.3cqw] ${i === 0 ? "bg-[#C5A15B]" : "bg-white/10"}`} />
        ))}
      </aside>
      <div className="flex flex-1 flex-col gap-[2cqw] p-[2.6cqw]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[1.1cqw] uppercase tracking-[0.25em] text-white/40">Overview</p>
            <p className="mt-[0.4cqw] font-serif text-[2.6cqw]">Good evening</p>
          </div>
          <div className="flex gap-[0.8cqw]">
            {["1M", "6M", "1Y"].map((t, i) => (
              <span key={t} className={`rounded-full px-[1.2cqw] py-[0.4cqw] text-[1.05cqw] ${i === 1 ? "bg-[#C5A15B] text-[#141012]" : "border border-white/10 text-white/50"}`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid flex-1 grid-cols-[1.55fr_1fr] gap-[2cqw]">
          {/* area chart */}
          <div className="flex flex-col rounded-[1cqw] border border-white/5 bg-white/[0.03] p-[2cqw]">
            <p className="text-[1.05cqw] uppercase tracking-[0.2em] text-white/40">Net balance</p>
            <p className="mt-[0.4cqw] font-serif text-[3.6cqw] leading-none">48,250<span className="text-[2cqw] text-white/40">.00</span></p>
            <p className="mt-[0.5cqw] text-[1.05cqw] text-[#9fc29a]">+ 4.2% this month</p>
            <svg viewBox="0 0 300 110" className="mt-[1.2cqw] min-h-0 w-full flex-1" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="nova-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#C5A15B" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#C5A15B" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[20, 50, 80].map((y) => (
                <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="white" strokeOpacity="0.05" />
              ))}
              <path d="M0 88 C30 80 45 92 70 70 S120 60 140 64 S190 30 215 40 S260 18 300 12 V110 H0Z" fill="url(#nova-area)" />
              <path d="M0 88 C30 80 45 92 70 70 S120 60 140 64 S190 30 215 40 S260 18 300 12" fill="none" stroke="#C5A15B" strokeWidth="1.6" />
              <circle cx="215" cy="40" r="3.2" fill="#141012" stroke="#C5A15B" strokeWidth="1.4" />
            </svg>
          </div>

          <div className="flex flex-col gap-[2cqw]">
            {/* card */}
            <div className="relative overflow-hidden rounded-[1cqw] bg-gradient-to-br from-[#641D32] via-[#4A1426] to-[#2a0c16] p-[1.8cqw]">
              <span className="absolute -right-[3cqw] -top-[3cqw] block size-[12cqw] rounded-full border border-[#C5A15B]/30" />
              <div className="flex items-center justify-between">
                <span className="block h-[2cqw] w-[2.8cqw] rounded-[0.3cqw] bg-gradient-to-br from-[#e6c98a] to-[#a8823e]" />
                <span className="font-serif text-[1.6cqw] italic text-[#C5A15B]">Nova</span>
              </div>
              <p className="mt-[2.4cqw] tracking-[0.3em] text-white/70">•••• 2048</p>
              <p className="mt-[0.4cqw] text-[1.05cqw] uppercase tracking-[0.2em] text-white/40">Primary account</p>
            </div>
            {/* bars */}
            <div className="flex flex-1 flex-col rounded-[1cqw] border border-white/5 bg-white/[0.03] p-[1.8cqw]">
              <p className="text-[1.05cqw] uppercase tracking-[0.2em] text-white/40">Spending</p>
              <div className="mt-[1cqw] flex min-h-0 flex-1 items-end gap-[0.6cqw]">
                {bars.map((h, i) => (
                  <span key={i} className={`block flex-1 rounded-t-[0.2cqw] ${i === 5 ? "bg-[#C5A15B]" : "bg-white/15"}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[2cqw]">
          {[
            ["Groceries", "−1,240"],
            ["Salary", "+32,000"],
            ["Utilities", "−860"],
          ].map(([label, amount]) => (
            <div key={label} className="flex items-center justify-between rounded-[0.8cqw] border border-white/5 px-[1.4cqw] py-[1cqw]">
              <span className="text-white/60">{label}</span>
              <span className={amount.startsWith("+") ? "text-[#9fc29a]" : "text-white/80"}>{amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 02 · VERDE ───────────────────────── */
function Vase({ className = "", body = "#B9886A", neck = "#A5765A" }: { className?: string; body?: string; neck?: string }) {
  return (
    <svg viewBox="0 0 100 160" className={className} aria-hidden="true">
      <ellipse cx="50" cy="154" rx="34" ry="4" fill="#000" opacity="0.12" />
      <path d="M40 10 h20 v14 c0 8 26 22 26 62 c0 38 -16 66 -36 66 s-36 -28 -36 -66 c0 -40 26 -54 26 -62 z" fill={body} />
      <rect x="40" y="6" width="20" height="8" rx="2" fill={neck} />
      <path d="M30 60 c4 -10 10 -16 14 -20" stroke="#fff" strokeOpacity="0.35" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Verde() {
  return (
    <div className="flex h-full w-full flex-col bg-[#EFE8DB] font-sans text-[1.3cqw] text-[#2f3a2a]">
      <div className="flex items-center justify-between border-b border-[#2f3a2a]/10 px-[3cqw] py-[1.8cqw]">
        <div className="flex gap-[2cqw] text-[1.05cqw] uppercase tracking-[0.2em] text-[#2f3a2a]/60">
          <span>Shop</span>
          <span>Home</span>
          <span>Journal</span>
        </div>
        <span className="font-serif text-[2.6cqw] tracking-[0.4em]">VERDE</span>
        <span className="text-[1.05cqw] uppercase tracking-[0.2em] text-[#2f3a2a]/60">Bag (2)</span>
      </div>

      <div className="grid flex-1 grid-cols-[1fr_1.1fr] gap-[3cqw] px-[3cqw] py-[2.6cqw]">
        <div className="flex flex-col justify-center">
          <p className="text-[1.05cqw] uppercase tracking-[0.3em] text-[#6E7F5F]">The slow living edit</p>
          <p className="mt-[1.2cqw] font-serif text-[5.4cqw] font-light leading-[0.95]">
            Live <em className="text-[#6E7F5F]">gently</em>,
            <br />
            own less.
          </p>
          <p className="mt-[1.4cqw] max-w-[85%] leading-relaxed text-[#2f3a2a]/60">Hand-thrown ceramics and natural textiles, made to last.</p>
          <span className="mt-[2cqw] inline-block self-start bg-[#2f3a2a] px-[2cqw] py-[1cqw] text-[1.05cqw] uppercase tracking-[0.25em] text-[#EFE8DB]">
            Discover
          </span>
        </div>
        <div className="relative overflow-hidden rounded-t-full bg-gradient-to-b from-[#c9cfb6] to-[#a9b392]">
          <span className="absolute inset-x-[12%] bottom-[18%] block h-[2%] rounded-full bg-[#8f9a77]" />
          <Vase className="absolute bottom-[18%] left-1/2 w-[38%] -translate-x-1/2" />
          <span className="absolute right-[10%] top-[30%] font-serif text-[1.6cqw] italic text-[#2f3a2a]/60">N° 07</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[1.6cqw] px-[3cqw] pb-[2.6cqw]">
        {[
          { name: "Terra vase", price: "48", bg: "#e2d6c3", body: "#B9886A", neck: "#A5765A" },
          { name: "Oat carafe", price: "36", bg: "#d9dcc9", body: "#d8cdb6", neck: "#c4b89c" },
          { name: "Moss bottle", price: "42", bg: "#e6dccc", body: "#6E7F5F", neck: "#5c6c4f" },
        ].map((p) => (
          <div key={p.name} className="flex items-center gap-[1.2cqw] border border-[#2f3a2a]/10 p-[1cqw]">
            <div className="grid aspect-square w-[34%] place-items-end justify-center pb-[6%]" style={{ background: p.bg }}>
              <Vase className="w-[46%]" body={p.body} neck={p.neck} />
            </div>
            <div>
              <p className="font-serif text-[1.7cqw]">{p.name}</p>
              <p className="text-[#2f3a2a]/60">€ {p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── 03 · TASKFLOW ───────────────────────── */
function Taskflow() {
  const columns = [
    { title: "To do", count: 4, cards: [["Research onboarding", "#C5A15B", 1], ["Draft API schema", "#9fb4c7", 2]] },
    { title: "In progress", count: 3, cards: [["Kanban drag & drop", "#d48f8f", 3], ["Auth with Supabase", "#9fc29a", 1], ["Timeline view", "#C5A15B", 2]] },
    { title: "Done", count: 6, cards: [["Design tokens", "#9fb4c7", 2], ["Project setup", "#9fc29a", 3]] },
  ] as const;
  const avatars = ["#C5A15B", "#d48f8f", "#9fb4c7"];
  return (
    <div className="flex h-full w-full flex-col bg-[#2a0f19] font-sans text-[1.25cqw] text-[#F3EBDD]">
      <div className="flex items-center justify-between px-[2.6cqw] py-[1.8cqw]">
        <div className="flex items-center gap-[1.2cqw]">
          <span className="grid size-[2.6cqw] place-items-center rounded-[0.5cqw] bg-[#F3EBDD] font-serif text-[1.6cqw] italic text-[#2a0f19]">t</span>
          <span className="font-serif text-[2.2cqw]">Sprint · Week 14</span>
        </div>
        <div className="flex -space-x-[0.6cqw]">
          {avatars.map((c) => (
            <span key={c} className="block size-[2.4cqw] rounded-full border-2 border-[#2a0f19]" style={{ background: c }} />
          ))}
        </div>
      </div>

      {/* timeline strip */}
      <div className="mx-[2.6cqw] rounded-[0.8cqw] border border-white/10 p-[1.2cqw]">
        <div className="grid grid-cols-7 text-[0.95cqw] uppercase tracking-[0.2em] text-white/40">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="relative mt-[1cqw] h-[3.4cqw]">
          <span className="absolute left-0 top-0 h-[1.3cqw] w-[44%] rounded-full bg-[#C5A15B]/80" />
          <span className="absolute left-[30%] top-[1.9cqw] h-[1.3cqw] w-[50%] rounded-full bg-[#d48f8f]/70" />
          <span className="absolute left-[58%] top-0 h-[1.3cqw] w-[30%] rounded-full bg-[#9fb4c7]/70" />
        </div>
      </div>

      <div className="grid flex-1 grid-cols-3 gap-[1.6cqw] p-[2.6cqw]">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-[1.1cqw] rounded-[1cqw] bg-white/[0.04] p-[1.2cqw]">
            <div className="flex items-center justify-between px-[0.4cqw] text-[1cqw] uppercase tracking-[0.2em] text-white/50">
              <span>{col.title}</span>
              <span>{col.count}</span>
            </div>
            {col.cards.map(([title, color, people], i) => (
              <div key={title} className={`rounded-[0.8cqw] bg-[#F3EBDD] p-[1.2cqw] text-[#2a0f19] ${col.title === "In progress" && i === 0 ? "-rotate-2 shadow-[0_1.5cqw_3cqw_-1cqw_rgba(0,0,0,0.5)]" : ""}`}>
                <span className="block h-[0.5cqw] w-[30%] rounded-full" style={{ background: color }} />
                <p className="mt-[0.9cqw] font-medium leading-tight">{title}</p>
                <div className="mt-[1cqw] flex items-center justify-between">
                  <span className="block h-[0.5cqw] w-[40%] rounded-full bg-[#2a0f19]/10" />
                  <div className="flex -space-x-[0.4cqw]">
                    {avatars.slice(0, people).map((c) => (
                      <span key={c} className="block size-[1.6cqw] rounded-full border border-[#F3EBDD]" style={{ background: c }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── 04 · AURA ───────────────────────── */
function Aura() {
  return (
    <div className="flex h-full w-full bg-[#100c0e] font-sans text-[1.25cqw] text-[#ece3d6]">
      <aside className="flex w-[24%] flex-col gap-[1.2cqw] border-r border-white/5 p-[2cqw]">
        <span className="font-serif text-[2.4cqw] italic tracking-wide text-[#e3b7ae]">aura</span>
        <span className="mt-[1cqw] rounded-[0.6cqw] border border-white/10 px-[1cqw] py-[0.8cqw] text-white/60">+ New idea</span>
        <p className="mt-[1cqw] text-[0.95cqw] uppercase tracking-[0.25em] text-white/30">Collections</p>
        {["Launch essay", "Research notes", "Newsletter", "Product copy"].map((t, i) => (
          <span key={t} className={`flex items-center gap-[0.8cqw] rounded-[0.5cqw] px-[0.8cqw] py-[0.6cqw] ${i === 0 ? "bg-white/[0.06] text-white" : "text-white/50"}`}>
            <span className="block size-[0.8cqw] rounded-full" style={{ background: ["#e3b7ae", "#C5A15B", "#9fb4c7", "#9fc29a"][i] }} />
            {t}
          </span>
        ))}
      </aside>

      <div className="relative flex flex-1 flex-col p-[2.6cqw]">
        {/* orb */}
        <div className="absolute right-[4%] top-[6%] grid size-[15cqw] place-items-center" aria-hidden="true">
          <span className="absolute inset-0 rounded-full border border-[#C5A15B]/25" />
          <span className="absolute inset-[14%] rounded-full border border-[#e3b7ae]/30" />
          <span className="block size-[56%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#f4d7c6,#c98f86_45%,#4A1426_80%)] opacity-90" />
        </div>

        <p className="text-[0.95cqw] uppercase tracking-[0.25em] text-white/35">Workspace</p>
        <p className="mt-[0.6cqw] max-w-[60%] font-serif text-[3.4cqw] font-light leading-[1.05]">
          Turn scattered notes into a <em className="text-[#e3b7ae]">clear</em> outline.
        </p>

        <div className="mt-[2.4cqw] grid flex-1 grid-cols-[1.3fr_1fr] gap-[1.6cqw]">
          <div className="rounded-[1cqw] border border-white/10 bg-white/[0.03] p-[1.6cqw]">
            <p className="text-[0.95cqw] uppercase tracking-[0.25em] text-[#C5A15B]">Generated outline</p>
            {["Why slow design matters", "Three principles", "Case: a calmer inbox", "Closing thought"].map((h, i) => (
              <div key={h} className="mt-[1.2cqw]">
                <p className="text-white/85">
                  <span className="mr-[0.8cqw] font-serif italic text-[#C5A15B]">{i + 1}.</span>
                  {h}
                </p>
                <span className="mt-[0.6cqw] block h-[0.45cqw] rounded-full bg-white/10" style={{ width: `${88 - i * 14}%` }} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[1.2cqw]">
            {["Tone · Warm", "Length · 1,200 words", "Audience · Designers"].map((t) => (
              <span key={t} className="rounded-[0.6cqw] border border-white/10 px-[1.2cqw] py-[0.9cqw] text-white/60">
                {t}
              </span>
            ))}
            <span className="mt-auto rounded-[0.6cqw] bg-[#e3b7ae] px-[1.2cqw] py-[0.9cqw] text-center text-[1.05cqw] uppercase tracking-[0.2em] text-[#100c0e]">
              Expand draft
            </span>
          </div>
        </div>

        <div className="mt-[1.6cqw] flex items-center gap-[1cqw] rounded-full border border-white/15 px-[1.6cqw] py-[1cqw]">
          <span className="text-white/40">Ask aura to restructure section two</span>
          <span className="anim-caret block h-[1.6cqw] w-px bg-[#e3b7ae]" />
          <span className="ml-auto grid size-[2.4cqw] place-items-center rounded-full bg-[#C5A15B] text-[#100c0e]">↑</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 05 · VOYAGE ───────────────────────── */
function Landscape({ sky, sun, hills, sea, className = "" }: { sky: [string, string]; sun: string; hills: [string, string]; sea: string; className?: string }) {
  const id = `${sky[0]}${sky[1]}`.replace(/#/g, "");
  return (
    <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} />
          <stop offset="1" stopColor={sky[1]} />
        </linearGradient>
      </defs>
      <rect width="300" height="200" fill={`url(#sky-${id})`} />
      <circle cx="205" cy="104" r="30" fill={sun} opacity="0.9" />
      <path d="M0 120 L50 78 L95 112 L150 64 L210 118 L250 92 L300 120 V200 H0Z" fill={hills[0]} />
      <path d="M0 140 C60 118 110 132 160 124 S260 116 300 132 V200 H0Z" fill={hills[1]} />
      <rect y="150" width="300" height="50" fill={sea} />
      {[160, 170, 180].map((y, i) => (
        <line key={y} x1={60 + i * 30} x2={240 - i * 20} y1={y} y2={y} stroke="#fff" strokeOpacity="0.18" />
      ))}
    </svg>
  );
}

function Voyage() {
  return (
    <div className="flex h-full w-full flex-col bg-[#1d1210] p-[2.6cqw] font-sans text-[1.25cqw] text-[#f3ebdd]">
      <div className="flex items-center justify-between">
        <span className="font-serif text-[2.6cqw] tracking-[0.3em]">VOYAGE</span>
        <div className="flex gap-[2cqw] text-[1cqw] uppercase tracking-[0.2em] text-white/50">
          <span>Destinations</span>
          <span>Journeys</span>
          <span>Stays</span>
        </div>
      </div>

      <div className="mt-[2cqw] grid flex-1 grid-cols-[1.6fr_1fr] gap-[2cqw]">
        <div className="relative overflow-hidden rounded-[1.2cqw]">
          <Landscape className="absolute inset-0 h-full w-full" sky={["#3b1220", "#d9825b"]} sun="#f6c88b" hills={["#5a2230", "#3a1420"]} sea="#2b1a2a" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-[2cqw]">
            <p className="text-[1cqw] uppercase tracking-[0.3em] text-white/70">Italy · 7 nights</p>
            <p className="mt-[0.4cqw] font-serif text-[4.2cqw] font-light leading-none">
              Amalfi <em>Coast</em>
            </p>
          </div>
          <span className="absolute right-[1.6cqw] top-[1.6cqw] rounded-full bg-black/30 px-[1.2cqw] py-[0.5cqw] text-[1cqw] backdrop-blur">★ 4.9</span>
        </div>

        <div className="flex flex-col rounded-[1.2cqw] bg-[#f3ebdd] p-[1.8cqw] text-[#1d1210]">
          <p className="text-[1cqw] uppercase tracking-[0.25em] text-[#1d1210]/50">Reserve</p>
          <p className="mt-[0.4cqw] font-serif text-[2.4cqw]">Your stay</p>
          {[
            ["Check-in", "12 Jun"],
            ["Check-out", "19 Jun"],
            ["Guests", "2 adults"],
          ].map(([k, v]) => (
            <div key={k} className="mt-[1cqw] flex justify-between border-b border-[#1d1210]/10 pb-[0.8cqw]">
              <span className="text-[#1d1210]/55">{k}</span>
              <span className="font-medium">{v}</span>
            </div>
          ))}
          <span className="mt-auto block bg-[#641D32] py-[1.1cqw] text-center text-[1.05cqw] uppercase tracking-[0.25em] text-[#f3ebdd]">
            Check availability
          </span>
        </div>
      </div>

      <div className="mt-[2cqw] grid grid-cols-3 gap-[1.6cqw]">
        {[
          { name: "Kyoto", sky: ["#2d3b4a", "#e3a587"] as [string, string], sun: "#f7d9b0", hills: ["#3c3346", "#262033"] as [string, string], sea: "#22202d" },
          { name: "Santorini", sky: ["#1f3550", "#9cc0d4"] as [string, string], sun: "#fff1d0", hills: ["#e9e3d8", "#cfc6b6"] as [string, string], sea: "#1d4560" },
          { name: "Marrakech", sky: ["#5b2a1d", "#e7a35d"] as [string, string], sun: "#fde0a6", hills: ["#9a4a2c", "#6e301d"] as [string, string], sea: "#7a3a22" },
        ].map((d) => (
          <div key={d.name} className="flex items-center gap-[1.2cqw] rounded-[0.8cqw] border border-white/10 p-[0.8cqw]">
            <Landscape className="aspect-square w-[34%] rounded-[0.5cqw]" sky={d.sky} sun={d.sun} hills={d.hills} sea={d.sea} />
            <div>
              <p className="font-serif text-[1.7cqw]">{d.name}</p>
              <p className="text-[1cqw] text-white/50">Curated · 5 stays</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals: Record<ProjectVisualKey, () => JSX.Element> = {
  nova: Nova,
  verde: Verde,
  taskflow: Taskflow,
  aura: Aura,
  voyage: Voyage,
};

type ProjectVisualProps = { visual: ProjectVisualKey; alt: string; className?: string };

/** Renders a project's illustrated interface inside a scalable 4:3 frame. */
export default function ProjectVisual({ visual, alt, className = "" }: ProjectVisualProps) {
  const Visual = visuals[visual];
  return (
    <div role="img" aria-label={alt} className={`@container relative aspect-[4/3] w-full select-none overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Visual />
      </div>
    </div>
  );
}
