'use client'

import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./chart.module.scss"

interface ChartData {
  chartData: {
    skills: {[name: string]: string[]}
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
  const linkRedirect = () => {
    alert('リンクリダイレクト');
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
        Object.entries(chartData.skills).map((val,index) => {
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
              key={val[0]}
              role="button"
              tabIndex={0}
              onClick={pathName === 'create'
                ? () => { modalOpen(val[0]) }
                : linkRedirect}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  if (pathName === 'create') {
                    modalOpen(val[0]);
                  } else {
                    linkRedirect();
                  }
                }
              }}
            >
              <span
                className={styles.skills_inner_name}
              >
                {val[0]}
              </span>
            </div>
          )
        })
      }
    </div>
  )
}
