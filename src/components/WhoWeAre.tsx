export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="w-full bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-10 text-center text-3xl font-extrabold text-white sm:text-4xl">
          Who we are
        </h2>

        {/* Top Card */}
        <div className="mb-6 rounded-3xl bg-gradient-to-br from-sky-300 to-cyan-400 p-8 sm:p-10 lg:p-12">
          <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">
            Your Technology Partner for Long-Term Successt
          </h3>
          <p className="mt-4 max-w-3xl text-base text-zinc-800/90 sm:text-lg">
            Whether you&apos;re launching a startup, scaling an existing
            business, or modernizing legacy systems, we deliver reliable web
            development, intelligent automation, and seamless system
            integrations that empower your business to grow with confidence.
          </p>
        </div>

        {/* Bottom Two Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-teal-300 to-emerald-400 p-8 sm:p-10">
            <h3 className="text-lg font-bold text-zinc-900 sm:text-xl">
              Building Digital Solutions That Drive Business Growth
            </h3>
            <p className="mt-4 text-base text-zinc-800/90">
              We help businesses establish a powerful online presence with
              modern websites, scalable web applications, and custom software
              solutions designed to meet real business goals.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-sky-300 to-emerald-400 p-8 sm:p-10">
            <h3 className="text-lg font-bold text-zinc-900 sm:text-xl">
              Automation That Saves Time
            </h3>
            <p className="mt-4 text-base text-zinc-800/90">
              From workflow automation to API integrations, we streamline
              repetitive processes and connect your favorite tools, helping
              your team work smarter and more efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}