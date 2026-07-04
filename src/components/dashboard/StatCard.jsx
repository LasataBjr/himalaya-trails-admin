//destructuring the stat object to extract its properties
function StatCard({ stat }) {
  const Icon = stat.icon;

  const iconColors = {
    amber: "bg-amber-100 text-amber-600",
    teal: "bg-teal-100 text-teal-600",
    sky: "bg-sky-100 text-sky-600",
    emerald: "bg-emerald-100 text-emerald-600",
  };

  return (
    <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-stone-500">
            {stat.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-stone-800">
            {stat.value}
          </h2>

          <p className="mt-2 text-sm text-stone-400">
            {stat.change}
          </p>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconColors[stat.color] || "iconColors.amber"}`}
        >
          <Icon size={26} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;