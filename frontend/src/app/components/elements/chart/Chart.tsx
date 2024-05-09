'use client'

import { useEffect, useRef, useState } from "react";
import styles from "./chart.module.scss"

interface ChartData {
  chartData: {
    skills: string[]
  }
}

export default function Chart({ chartData }: ChartData) {

  const skillLength = chartData.skills.length;
  const [rad, setRad] = useState<number>();
  const [r, setR] = useState<number>();
  const [radOffset, setRadOffset] = useState<number>();
  const skillsContainer = useRef<HTMLDivElement | null>(null);
  const skillsInner = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (skillsContainer.current && skillsInner.current) {
      const deg = 360.0 / skillLength;
      const circleRadius = skillsContainer.current.clientWidth / 2 - skillsInner.current.clientWidth / 2;
      const radianOffset = -Math.PI / 2;
      const angleInRadians = deg * Math.PI / 180.0;
      setRad(angleInRadians);
      setR(circleRadius);
      setRadOffset(radianOffset);
    }
  }, [skillLength]);

  return (
    <div
      ref={skillsContainer}
      className={styles.skills_container}
    >
      {
        chartData.skills.map((skill, index) => {
          const y = rad && radOffset && r
            ? Math.sin(rad * index + radOffset) * r + r
            : 0;
          const x = rad && radOffset && r
            ? Math.cos(rad * index + radOffset) * r + r
            : 0;
          return (
            <div
              ref={skillsInner}
              className={styles.skills_inner}
              style={{ left: x, top: y }}
              key={skill}
            >
              <span
                className={styles.skills_inner_name}
              >
                {skill}
              </span>
            </div>
          )
        })
      }
    </div>
  )
}
