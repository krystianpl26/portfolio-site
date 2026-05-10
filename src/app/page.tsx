import Image from "next/image";

const profile = {
  name: "Krystian Szczepankiewicz",
  role: "CS + AI New Grad",
  email: "kszczepanki1@gmail.com",
  github: "https://github.com/krystianpl26",
  linkedin: "https://www.linkedin.com/in/kszczepanki",
  location: "Chicago, IL",
}; 

const navItems = ["About", "Projects", "Skills", "Resume", "Contact"];

const projects = [
  {
    title: "JobExtractX",
    category: "AI Workflow Automation",
    description:
      "An intelligent job-posting parser that extracts role requirements, technologies, and candidate-fit signals from unstructured listings.",
    stack: ["Python", "NLP", "Next.js", "Automation"],
    impact: "Designed for faster application targeting and cleaner opportunity tracking.",
  },
  {
    title: "Lignin Research Project",
    category: "AI for Scientific Discovery",
    description:
      "Research tooling for analyzing lignin-related experimental data, surfacing trends, and supporting reproducible material-science insights.",
    stack: ["Machine Learning", "Data Analysis", "Research", "Visualization"],
    impact: "Built to bridge computational methods with sustainable biomaterials research.",
  },
  {
    title: "Drone Firmware Project",
    category: "Embedded Systems",
    description:
      "Low-level firmware experiments for sensor integration, flight-control loops, telemetry, and reliable hardware communication.",
    stack: ["C/C++", "Firmware", "Sensors", "Real-Time Systems"],
    impact: "Focused on dependable control logic and field-ready debugging workflows.",
  },
  {
    title: "SouthwestDB",
    category: "Database Systems",
    description:
      "A custom database project exploring schema design, query patterns, indexing decisions, and backend data modeling.",
    stack: ["SQL", "Backend", "Data Modeling", "APIs"],
    impact: "Created as a foundation for scalable application data and analytics features.",
  },
  {
    title: "SpotifyClone",
    category: "Full-Stack Product Build",
    description:
      "A sleek music-streaming interface clone with responsive layouts, playlist views, and modern client-side interaction patterns.",
    stack: ["React", "Tailwind CSS", "UI Engineering", "State"],
    impact: "Recreated familiar product UX while sharpening component architecture skills.",
  },
  {
    title: "Next Project Slot",
    category: "Coming Soon",
    description:
      "Reserved space for an upcoming AI, systems, or full-stack project with measurable outcomes and polished case-study notes.",
    stack: ["AI", "Systems", "Product", "Research"],
    impact: "Ready for the next launch, hackathon, or research milestone.",
  },
];

const skills = [
  "Python",
  "JavaScript/TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Machine Learning",
  "Natural Language Processing",
  "Data Structures",
  "Algorithms",
  "SQL",
  "C/C++",
  "Embedded Systems",
  "Git/GitHub",
  "Research Communication",
  "Cloud Fundamentals",
];

const resumeHighlights = [
  "Computer Science + AI student building across machine learning, databases, embedded systems, and full-stack web apps.",
  "Experience turning ambiguous technical problems into structured prototypes, demos, and research artifacts.",
  "Comfortable collaborating across product, research, and engineering contexts with clear documentation and iteration.",
];

const stats = [
  ["05+", "Featured projects"],
  ["AI", "Primary focus"],
  ["Full-stack", "Build style"],
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-pulseGlow" />
      <div className="absolute right-[-10rem] top-96 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl animate-pulseGlow animation-delay-2000" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/70 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10"
          aria-label="Primary navigation"
        >
          <a
            href="#home"
            className="focus-ring rounded-full font-display text-lg font-bold tracking-tight text-white"
          >
            {profile.name.split(" ")[0]}<span className="text-cyan-300">.dev</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:student@example.com"
            className="focus-ring rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
          >
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="section-shell flex min-h-screen items-center pt-32"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">{profile.role}</p>

<h1 className="mt-6 font-display text-5xl font-black leading-tight tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
  Hi, I&apos;m <span className="gradient-text">{profile.name}</span>.
</h1>

<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
  I&apos;m a recent Computer Science and AI new grad interested in AI, data analytics,
  tech consulting, and more.
</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="focus-ring rounded-full bg-white px-6 py-3 text-center font-semibold text-night transition hover:-translate-y-1 hover:bg-cyan-100"
              >
                View projects
              </a>
              <a
                href="#resume"
                className="focus-ring rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-white/10"
              >
                Resume highlights
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="glass-card rounded-3xl p-4">
                  <div className="font-display text-2xl font-bold text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-float">
  <div className="absolute inset-6 rounded-[3rem] bg-cyan-300/20 blur-3xl" />

  <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-4">
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-ink">
      <Image
        src="/profile.jpg"
        alt={`Portrait of ${profile.name}`}
        fill
        priority
        className="object-cover"
      />
    </div>

    <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-night/75 p-4 backdrop-blur-xl">
      <p className="font-display text-xl font-bold text-white">
        {profile.name}
      </p>
      <p className="mt-1 text-sm text-slate-300">
        {profile.role} · {profile.location}
      </p>
    </div>
  </div>
</div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title">
              Curious builder.
            </h2>
          </div>
          <div className="glass-card rounded-[2rem] p-8 text-lg leading-8 text-slate-300">
            <p>
              I started coding when I got to high school and quickly realized the potential of technology to solve real-world problems. What interests me most is the mix of technical depth and practical impact.

A lot of my work has been shaped by curiosity and learning through projects. From machine learning, research, and data analysis to systems programming and web development, I enjoy understanding how things work underneath the surface and then turning those ideas into something useful and intuitive for other people.
            </p>

          </div>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">
              Featured builds and research experiments.
            </h2>
          </div>
          <p className="max-w-xl text-slate-400">
            Each card is ready to link to a GitHub repository, technical
            write-up, demo video, or publication as the work evolves.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-card group flex min-h-[24rem] flex-col justify-between rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-200/40 hover:bg-white/[0.08]"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
                    {project.category}
                  </span>
                  <span className="font-display text-sm text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>
              </div>
              <div className="mt-8">
                <p className="border-l border-cyan-300/40 pl-4 text-sm leading-6 text-slate-400">
                  {project.impact}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell overflow-hidden">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title max-w-3xl">
          A flexible toolkit for AI prototypes, production UI, and technical
          research.
        </h2>
        <div className="mt-10 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] py-4">
          <div className="flex w-max animate-marquee gap-3 px-3">
            {[...skills, ...skills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="rounded-full border border-white/10 bg-night/80 px-5 py-3 text-sm font-medium text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="section-shell">
        <div className="glass-card grid gap-8 rounded-[2.5rem] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div>
            <p className="eyebrow">Resume</p>
            <h2 className="section-title">
              Snapshot for recruiters, collaborators, and research teams.
            </h2>
            <a
              href="#contact"
              className="focus-ring mt-8 inline-flex rounded-full bg-cyan-300 px-5 py-3 font-semibold text-night transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              Request resume
            </a>
          </div>
          <div className="space-y-5">
            {resumeHighlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-night/60 p-5"
              >
                <p className="leading-7 text-slate-300">{item}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-violet-300/20 bg-violet-300/10 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-100/80">
                Currently seeking
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Full-time roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/20 via-white/[0.06] to-violet-400/20 p-8 shadow-glow md:p-12">
          <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
  Let&apos;s connect.
</h2>

<p className="mt-6 text-lg leading-8 text-slate-300">
  I&apos;m always happy to talk about full-time opportunities, research or project ideas.
</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="focus-ring rounded-full bg-white px-6 py-3 text-center font-semibold text-night transition hover:-translate-y-1"
                href="mailto:kszczepanki1@gmail.com"
              >
                kszczepanki1@gmail.com
              </a>
              <a
                className="focus-ring rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
                href="https://github.com/krystianpl26"
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile
              </a>
              <a
                className="focus-ring rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
                href="https://www.linkedin.com/in/kszczepanki"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}