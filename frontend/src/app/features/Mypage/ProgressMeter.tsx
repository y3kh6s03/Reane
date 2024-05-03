import styles from "./styles/progressMeter.module.scss"

export default function ProgressMeter() {

  // SVGの描画サイズ
  const size = 450;
  // 現在の進捗
  const progressPercent = 90;
  // 円の半径
  const radius = 190;
  // 円周
  const circumference = 2 * Math.PI * radius;
  // 表示割合
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;
  return (
    <>
      <style>
        {`@keyframes circleStroke {
          from {
            stroke-dashoffset: ${circumference};
            opacity: 1
          }
          to {
            stroke-dashoffset: ${strokeDashoffset};
            opacity: 1
          }
        }
        `}
      </style>
      <div className={styles.container}>
        <svg
          viewBox={`0 0 ${size} ${size}`}
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            r={radius}
            cx={size / 2}
            cy={size / 2}
            stroke="#DF8B74"
            strokeWidth="20"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{
              opacity: 0,
              animation: "circleStroke .5s 1s ease-in-out forwards",
            }}
          />
        </svg>
        <span className={styles.text_number}>90<span className={styles.text_percent}>%</span></span>
      </div>
    </>
  );
}