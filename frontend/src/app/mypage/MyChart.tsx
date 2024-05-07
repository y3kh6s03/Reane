"use client"

import { useAppSellector } from "@/store/hooks";
import { SessionProvider } from "next-auth/react";
import ChartIndex from "../components/features/chart/Index";



export default function MyChart() {
  const { authChartData } = useAppSellector((state) => state.authChart)
  const chartData = authChartData;
  return (
    <SessionProvider>
      <ChartIndex chartData={chartData} />
    </SessionProvider>
  )
}