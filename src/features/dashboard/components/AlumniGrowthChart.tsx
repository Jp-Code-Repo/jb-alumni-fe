import { Line, LineChart, CartesianGrid, XAxis } from "recharts";

import type { ChartConfig } from "@/components/ui/chart";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { alumniGrowthData } from "../data/dashboard-chart-data";

const chartConfig = {
  alumni: {
    label: "Alumni",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function AlumniGrowthChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[320px] w-full">
      <LineChart accessibilityLayer data={alumniGrowthData}>
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />

        <Line
          dataKey="alumni"
          type="monotone"
          stroke="var(--color-alumni)"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}