"use client"

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { ChartData, fetchAuthChartData } from "@/store/AuthChartsSlice";
import ChartIndex from "../features/chartView/Index";

export default function MyChart() {
  const { data: session } = useSession();
  const authEmail = session?.user?.email || '';
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (authEmail) {
      dispatch(fetchAuthChartData({ authEmail }))
    }
  }, [dispatch, authEmail])

  const { authChartDatas } = useAppSelector((state) => state.authChart)
  return (
    <div>
      {authChartDatas &&
        authChartDatas.map((authChartData: ChartData) =>
          <ChartIndex key={authChartData.id} chartData={authChartData} />
        )
      }
    </div>
  )
}

  // const bodyData = useMemo(() => {
  //   const body = { authEmail };
  //   return body
  // }, [authEmail])
  // useEffect(() => {
  //   const getChartDatas = async () => {
  //     const res = await axios.post('http://localhost:3000/api/myChart', bodyData);
  //     const data = await res.data;
  //     console.log(data)
  //   }
  //   getChartDatas();
  // }, [bodyData])
  // const { authChartData } = useAppSellector((state) => state.authChart)
  // const chartData = authChartData;
