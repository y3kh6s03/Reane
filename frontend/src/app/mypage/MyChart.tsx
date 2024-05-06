"use client"

import { useAppSellector } from "@/store/hooks";
import ChartIndex from "../components/features/chart";


export default function MyChart() {
  const {chart} = useAppSellector((state) => state.chart)
  return (
    <ChartIndex chart={chart}/>
  )
}