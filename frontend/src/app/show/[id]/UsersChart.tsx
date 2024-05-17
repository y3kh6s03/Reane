"use client"

import ChartIndex from "@/app/features/chartView/Index";
import { useAppSellector } from "@/store/hooks";

export default function UsersChart() {
  const { userChartData } = useAppSellector((state) => state.usersChart);
  const chartData = userChartData
  return (
      <ChartIndex chartData={chartData} />
  )
}