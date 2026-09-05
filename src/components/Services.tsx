import Image from "next/image";

const services = [
  {
    title: "Software Automation",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "dark",
    icon: "", // put icon src here
  },
  {
    title: "AI Solutions",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "light",
    icon: "",
  },
  {
    title: "Web Development",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "light",
    icon: "",
  },
  {
    title: "CRM Implementation",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "dark",
    icon: "",
  },
  {
    title: "ERP Implementation",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "dark",
    icon: "",
  },
  {
    title: "API Integration",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "light",
    icon: "",
  },
  {
    title: "Business Process Automation",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "light",
    icon: "",
  },
  {
    title: "Accounting Software Implementation",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "dark",
    icon: "",
  },
  {
    title: "Dashboard Dev",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "dark",
    icon: "",
  },
  {
    title: "Digital Marketing",
    description:
      "Stop guessing. Let AI predict which leads will convert before your sales team wastes time on dead ends.",
    variant: "light",
    icon: "",
  },
];

export default function OurServices() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white sm:text-4xl">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className={`
                flex items-start gap-5 rounded-2xl p-6
                ${
                  service.variant === "dark"
                    ? "bg-zinc-800/80"
                    : "bg-gradient-to-br from-sky-300 to-emerald-400"
                }
              `}
            >
              {/* Icon Placeholder */}
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-700/50">
                {service.icon ? (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                ) : (
                  <span className="text-xs text-zinc-400">Icon</span>
                )}
              </div>

              {/* Text */}
              <div>
                <h3
                  className={`text-lg font-bold ${
                    service.variant === "dark" ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-2 text-sm font-medium ${
                    service.variant === "dark"
                      ? "text-zinc-300"
                      : "text-zinc-800/90"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}