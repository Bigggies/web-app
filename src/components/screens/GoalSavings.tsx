"use client";

import { useState } from "react";
import type { Goal } from "@/types";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { GoalIcon } from "@/components/icons";

const money = (value: number) =>
  `GH₵${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
const muted = { color: "#9CA3AF" };
const field = {
  background: "#F9FAFB",
  border: "1px solid #E5E7EB",
  color: "#1F2937",
};
const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export function GoalOverview({
  goals,
  history,
}: {
  goals: Goal[];
  history: { date: string; amount: number }[];
}) {
  const total = goals.reduce((sum, goal) => sum + goal.saved, 0);
  const now = new Date();
  const recent = history
    .filter(
      (entry) =>
        new Date(entry.date).getMonth() === now.getMonth() &&
        new Date(entry.date).getFullYear() === now.getFullYear(),
    )
    .reduce((sum, entry) => sum + entry.amount, 0);
  const points = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 5 + i + 1, 1);
    return {
      label: new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        1,
      ).toLocaleDateString("en", { month: "short" }),
      value: history
        .filter((entry) => new Date(entry.date) < date)
        .reduce((sum, entry) => sum + entry.amount, 0),
    };
  });
  const max = Math.max(1, ...points.map((p) => p.value));
  const path = points
    .map(
      (p, i) =>
        `${i === 0 ? "M" : "L"}${12 + i * 60},${145 - (p.value / max) * 125}`,
    )
    .join(" ");
  return (
    <div className="mx-4 flex flex-col gap-4">
      <div className="rounded-2xl p-5" style={{ background: "#FFFFFF" }}>
        <p className="text-xs" style={muted}>
          Total saved across all goals
        </p>
        <p
          className="text-4xl font-bold mt-2 tracking-tight"
          style={{ color: "#1F2937" }}
        >
          {money(total)}
        </p>
        <p className="text-sm mt-2 font-medium" style={{ color: "#F5C000" }}>
          + {money(recent)} this month
        </p>
        <p className="text-xs mt-6" style={muted}>
          Cumulative growth · Last 6 months
        </p>
        <svg
          viewBox="0 0 324 170"
          className="w-full mt-2"
          role="img"
          aria-label={`Cumulative savings: ${points.map((p) => `${p.label} ${money(p.value)}`).join(", ")}`}
        >
          <defs>
            <linearGradient id="goal-growth" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#F5C000" stopOpacity=".25" />
              <stop offset="1" stopColor="#F5C000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${path} L312,150 L12,150 Z`} fill="url(#goal-growth)" />
          <path
            d={path}
            fill="none"
            stroke="#F5C000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {points.map((p, i) => (
            <text
              key={i}
              x={12 + i * 60}
              y="168"
              textAnchor="middle"
              fill="#9CA3AF"
              fontSize="10"
            >
              {p.label}
            </text>
          ))}
        </svg>
        <p className="text-xs mt-3" style={muted}>
          Manual top-ups and automated transfers together.
        </p>
        <p className="text-xs mt-1" style={muted}>
          Demo: starting history is sample data.
        </p>
      </div>
      <div className="rounded-2xl p-4" style={{ background: "#FFFFFF" }}>
        <p className="text-sm font-semibold mb-4" style={{ color: "#1F2937" }}>
          By goal
        </p>
        {goals.map((goal) => (
          <div key={goal.id} className="flex items-center gap-3 py-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: goal.saved >= goal.target ? "#D1FAE5" : "#F3F4F6",
              }}
            >
              <GoalIcon name={goal.name} done={goal.saved >= goal.target} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold" style={{ color: "#1F2937" }}>
                {goal.name}{" "}
                {goal.saved >= goal.target && (
                  <span style={{ color: "#10B981" }}>✓</span>
                )}
              </p>
              <p className="text-xs" style={muted}>
                {total ? ((goal.saved / total) * 100).toFixed(1) : 0}% of total
              </p>
            </div>
            <span
              className="text-sm font-semibold"
              style={{ color: "#1F2937" }}
            >
              {money(goal.saved)}
            </span>
          </div>
        ))}
        {!goals.length && (
          <p className="text-xs" style={muted}>
            Create a goal to start saving.
          </p>
        )}
      </div>
    </div>
  );
}

export function AutoSaveSheet({
  goal,
  onClose,
  onSave,
}: {
  goal?: Goal;
  onClose: () => void;
  onSave: (goal: Goal) => void;
}) {
  // Keying the form ensures every open loads the current saved rule.
  return (
    <BottomSheet
      open={!!goal}
      onClose={onClose}
      title={`Auto-save to ${goal?.name ?? ""}`}
    >
      {goal && (
        <AutoSaveForm
          key={`${goal.id}-${!!goal.automation}`}
          goal={goal}
          onClose={onClose}
          onSave={onSave}
        />
      )}
    </BottomSheet>
  );
}
function AutoSaveForm({
  goal,
  onClose,
  onSave,
}: {
  goal: Goal;
  onClose: () => void;
  onSave: (goal: Goal) => void;
}) {
  const [frequency, setFrequency] = useState<
    NonNullable<Goal["automation"]>["frequency"]
  >(goal.automation?.frequency ?? "Weekly");
  const [source, setSource] = useState<
    NonNullable<Goal["automation"]>["source"]
  >(goal.automation?.source ?? "GCB Main Account");
  const [amount, setAmount] = useState(
    goal.automation ? String(goal.automation.amount) : "",
  );
  const [date, setDate] = useState(goal.automation?.nextDate ?? today());
  const done = goal.saved >= goal.target;
  const valid =
    Number.isFinite(Number(amount)) &&
    Number(amount) >= 0.01 &&
    !!date &&
    date >= today() &&
    !done;
  const dateObject = new Date(date + "T12:00:00");
  const cadence =
    frequency === "Daily"
      ? "every day"
      : frequency === "Weekly"
        ? `every ${dateObject.toLocaleDateString("en", { weekday: "long" })}`
        : `on day ${dateObject.getDate()} each month`;
  function save() {
    if (!valid) return;
    onSave({
      ...goal,
      automation: {
        amount: Math.round(Number(amount) * 100) / 100,
        frequency,
        source,
        nextDate: date,
        day: dateObject.getDate(),
        paused: false,
      },
    });
    onClose();
  }
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-xs mb-2" style={muted}>
          Frequency
        </p>
        <div className="flex gap-2">
          {(["Daily", "Weekly", "Monthly"] as const).map((value) => (
            <button
              key={value}
              onClick={() => setFrequency(value)}
              aria-pressed={value === frequency}
              className="flex-1 rounded-full py-2 text-xs font-semibold"
              style={{
                background: frequency === value ? "#F5C000" : "#F3F4F6",
                color: "#1F2937",
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <label className="text-xs" style={muted}>
        Amount (GH₵)
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mt-2 rounded-xl p-3 text-sm"
          style={field}
        />
      </label>
      <div>
        <p className="text-xs mb-2" style={muted}>
          Source
        </p>
        <div className="flex gap-2">
          {(["GCB Main Account", "Round-Up Savings"] as const).map((value) => (
            <button
              key={value}
              aria-pressed={source === value}
              onClick={() => setSource(value)}
              className="flex-1 rounded-full px-3 py-2 text-xs font-semibold"
              style={{
                background: source === value ? "#F5C000" : "#F3F4F6",
                color: "#1F2937",
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <label className="text-xs" style={muted}>
        {goal.automation ? "Next transfer date" : "Start date"}
        <input
          type="date"
          min={today()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mt-2 rounded-xl p-3 text-sm"
          style={field}
        />
      </label>
      <p aria-live="polite" className="text-sm" style={{ color: "#6B7280" }}>
        {Number(amount) > 0 && date
          ? `${money(Number(amount))} ${cadence} from your ${source}.`
          : "Choose an amount and start date."}
      </p>
      {frequency === "Monthly" && (
        <p className="text-xs" style={muted}>
          Short months use their last day.
        </p>
      )}
      {goal.automation?.warning && (
        <p className="text-xs" style={{ color: "#F5C000" }}>
          Insufficient funds. Transfer skipped; retry on{" "}
          {goal.automation.nextDate}.
        </p>
      )}
      {done && (
        <p className="text-xs" style={{ color: "#10B981" }}>
          Auto-save paused — goal complete.
        </p>
      )}
      <button
        disabled={!valid}
        onClick={save}
        className="rounded-full py-3 text-sm font-semibold disabled:opacity-40"
        style={{ background: "#F5C000", color: "#1F2937" }}
      >
        {goal.automation ? "Save auto-save" : "Set up auto-save"}
      </button>
      {goal.automation && (
        <div className="flex gap-2">
          <button
            disabled={done}
            onClick={() => {
              onSave({
                ...goal,
                automation: {
                  ...goal.automation!,
                  paused: !goal.automation!.paused,
                },
              });
              onClose();
            }}
            className="flex-1 rounded-full py-2.5 text-sm"
            style={{ ...field }}
          >
            {goal.automation.paused ? "Resume" : "Pause"}
          </button>
          <button
            onClick={() => {
              onSave({ ...goal, automation: undefined });
              onClose();
            }}
            className="flex-1 rounded-full py-2.5 text-sm"
            style={{ background: "#F3F4F6", color: "#EF4444" }}
          >
            End auto-save
          </button>
        </div>
      )}
      <p className="text-xs" style={muted}>
        Prototype: schedules run while the app is open. Frequency, today’s date
        and source options are demo defaults; Round-Up Savings uses your Vault
        balance.
      </p>
    </div>
  );
}
