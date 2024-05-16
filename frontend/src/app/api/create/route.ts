// import { ChartData } from "@/store/AuthChartsSlice";
import axios from "axios"



/* eslint-disable import/prefer-default-export */
export function GET() {

}

export async function POST(req: Request) {
  const reqData = await req.json();
  const res = await axios.post('http://backend:8080/api', reqData);
  const data = await res.data;
  return Response.json(data);
}