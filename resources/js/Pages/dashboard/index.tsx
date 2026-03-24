import { usePage } from "@inertiajs/react";

interface TopPage {
    page: string;
    count: number;
}

interface DailyCount {
    date: string;
    count: number;
}

interface Stats {
    total: number;
    today: number;
    this_week: number;
    top_pages: TopPage[];
    daily: DailyCount[];
}

const StatCard = ({
    label,
    value,
}: {
    label: string;
    value: number | string;
}) => (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {label}
        </p>
        <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">
            {value.toLocaleString()}
        </p>
    </div>
);

const Index = () => {
    const { stats } = usePage<{ stats: Stats }>().props;

    const maxDaily = Math.max(...(stats.daily.map((d) => d.count) ?? [1]), 1);

    return (
        <div className="space-y-8 p-6">
            {/* Summary cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <StatCard label="Total Visitors" value={stats.total} />
                <StatCard label="Visitors Today" value={stats.today} />
                <StatCard label="Visitors (Last 7 Days)" value={stats.this_week} />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Daily bar chart (last 14 days) */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="mb-4 text-lg font-semibold dark:text-white">
                        Daily Visitors (Last 14 Days)
                    </h2>
                    {stats.daily.length === 0 ? (
                        <p className="text-sm text-gray-400">No data yet.</p>
                    ) : (
                        <div className="flex items-end gap-1.5 h-40">
                            {stats.daily.map((d) => (
                                <div
                                    key={d.date}
                                    className="group relative flex flex-1 flex-col items-center justify-end"
                                >
                                    <div
                                        className="w-full rounded-t bg-blue-500 transition-all group-hover:bg-blue-400"
                                        style={{
                                            height: `${Math.round((d.count / maxDaily) * 100)}%`,
                                            minHeight: "4px",
                                        }}
                                    />
                                    <span className="absolute -top-5 hidden text-xs text-gray-600 dark:text-gray-300 group-hover:block">
                                        {d.count}
                                    </span>
                                    <span className="mt-1 text-[10px] text-gray-400 rotate-45 origin-left">
                                        {d.date.slice(5)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Top pages table */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="mb-4 text-lg font-semibold dark:text-white">
                        Visitors by Page
                    </h2>
                    {stats.top_pages.length === 0 ? (
                        <p className="text-sm text-gray-400">No data yet.</p>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-gray-700">
                                    <th className="pb-2 text-left font-medium text-gray-500 dark:text-gray-400">
                                        Page
                                    </th>
                                    <th className="pb-2 text-right font-medium text-gray-500 dark:text-gray-400">
                                        Visits
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.top_pages.map((p) => (
                                    <tr
                                        key={p.page}
                                        className="border-b border-gray-50 dark:border-gray-700/50"
                                    >
                                        <td className="py-2 text-gray-800 dark:text-gray-200">
                                            {p.page}
                                        </td>
                                        <td className="py-2 text-right font-semibold text-gray-900 dark:text-white">
                                            {p.count.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Index;
