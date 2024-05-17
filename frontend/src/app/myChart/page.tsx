"use client"

import { useAppSellector } from "@/store/hooks";
import { useEffect, useMemo } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import ChartIndex from "../features/chartView/Index";

export default function MyChart() {
  const { data: session } = useSession();
  const authEmail = session?.user?.email || '';

  const bodyData = useMemo(() => {
    const body = { authEmail };
    return body
  }, [authEmail])
  useEffect(() => {
    const getChartDatas = async () => {
      const res = await axios.post('http://localhost:3000/api/myChart', bodyData);
      const data = await res.data;
      console.log(data)
    }
    getChartDatas();
  }, [bodyData])
  const { authChartData } = useAppSellector((state) => state.authChart)
  const chartData = authChartData;
  return (
    <ChartIndex chartData={chartData} />
  )
}