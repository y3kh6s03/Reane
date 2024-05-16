// import { ChartData } from "@/store/AuthChartsSlice";
import axios from "axios"



/* eslint-disable import/prefer-default-export */
export function GET() {

}

export async function POST(req: Request) {
  const reqData = await req.json();
  const CREATE_API_URL = process.env.LARAVEL_API_BASE_URL ?? '';
  const res = await axios.post(CREATE_API_URL, reqData);
  const data = await res.data;
  return Response.json(data);
}