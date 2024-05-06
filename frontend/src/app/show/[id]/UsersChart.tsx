"use client"

import ChartIndex from "@/app/components/features/chart";
import { useAppSellector } from "@/store/hooks";

export default function UsersChart() {
  const {chart} = useAppSellector((state) => state.chart)
  return (
    <ChartIndex chart={chart}/>
  )
}