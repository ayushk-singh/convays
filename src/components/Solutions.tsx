import Image from "next/image";

const Solutions = [
  {
    title: "Software Automation",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "dark",
    icon: "/solutions/swauto.png", // put icon src here
  },
  {
    title: "AI Solutions",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "light",
    icon: "/solutions/ai.png",
  },
  {
    title: "Web Development",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "light",
    icon: "/solutions/webdev.png",
  },
  {
    title: "CRM Implementation",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "dark",
    icon: "/solutions/crm.png",
  },
  {
    title: "ERP Implementation",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "dark",
    icon: "/solutions/erp.png",
  },
  {
    title: "API Integration",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "light",
    icon: "/solutions/api.png",
  },
  {
    title: "Business Process Automation",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "light",
    icon: "/solutions/bpa.png",
  },
  {
    title: "Accounting Software Implementation",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "dark",
    icon: "/solutions/accounting.png",
  },
  {
    title: "Dashboard Development",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "dark",
    icon: "/solutions/dashboard.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "light",
    icon: "/solutions/digitalmarketing.png",
  },
];

export default function OurSolutions() {
  return (
    <section id="solutions" className="w-full bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white sm:text-4xl">
          Our Solutions
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {Solutions.map((Solution) => (
            <div
              key={Solution.title}
              className={`
                flex items-start gap-5 rounded-2xl p-6
                ${
                  Solution.variant === "dark"
                    ? "bg-zinc-800/80"
                    : "bg-gradient-to-br from-sky-300 to-emerald-400"
                }
              `}
            >
              {/* Icon Placeholder */}
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-700/50">
                {Solution.icon ? (
                  <Image
                    src={Solution.icon}
                    alt={Solution.title}
                    width={60}
                    height={60}
                  />
                ) : (
                  <span className="text-xs text-zinc-400">Icon</span>
                )}
              </div>

              {/* Text */}
              <div>
                <h3
                  className={`text-lg font-bold ${
                    Solution.variant === "dark" ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {Solution.title}
                </h3>
                <p
                  className={`mt-2 text-sm font-medium ${
                    Solution.variant === "dark"
                      ? "text-zinc-300"
                      : "text-zinc-800/90"
                  }`}
                >
                  {Solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}