"use client"

import ChartIndex from "@/app/components/features/chart/Index";
import { useAppSellector } from "@/store/hooks";
import { SessionProvider } from "next-auth/react";


export default function UsersChart() {
  const { userChartData } = useAppSellector((state) => state.usersChart);
  const chartData = userChartData
  return (
    <SessionProvider>
      <ChartIndex chartData={chartData} />
    </SessionProvider>
  )
}