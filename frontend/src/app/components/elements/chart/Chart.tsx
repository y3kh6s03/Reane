'use client'

import { useRouter, usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { SkillData } from "@/store/AuthChartsSlice";
import styles from "./chart.module.scss"

interface ChartData {
  chartData: {
    skills: SkillData[]
    setIsActionModal?: Dispatch<SetStateAction<boolean>>;
    setSkillName?: Dispatch<SetStateAction<string>>
  },
}

export default function Chart({ chartData }: ChartData) {

  const pathName = usePathname().substring(1);
  const modalOpen = (skill: string) => {
    if (chartData.setIsActionModal && chartData.setSkillName) {
      chartData.setIsActionModal((prev) => !prev);
      chartData.setSkillName(skill)
    }
  }

  const router = useRouter();
  const skillAndActionRedirect = (skillName: string) => {
    router.push(`/skillAndAction/${skillName}`);
  }

  const skillLength = Object.keys(chartData.skills).length;
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
        Object.entries(chartData.skills).map((val, index) => {
          const skillName = Object.entries(val[1])[0][0]
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
              style={{ left: x, top: y, backgroundColor: pathName === 'create' ? "gray" : '' }}
              key={skillName}
              role="button"
              tabIndex={0}
              onClick={pathName === 'create'
                ? () => { modalOpen(skillName) }
                : () => { skillAndActionRedirect(skillName) }
              }
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  const actionToPerform = pathName === 'create'
                    ? () => modalOpen(skillName)
                    : () => { skillAndActionRedirect(skillName) }
                  actionToPerform();
                }
              }}
            >
              <span
                className={styles.skills_inner_name}
              >
                {Object.entries(val[1])[0][0]}
              </span>
            </div>
          )
        })
      }
    </div>
  )
}
