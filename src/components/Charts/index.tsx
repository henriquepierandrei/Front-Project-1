import { motion } from 'framer-motion'

// ─── Smooth Area Line Chart (Catmull-Rom spline) ───────
function catmullRomToBezier(points: [number, number][]): string {
  if (points.length < 2) return ''
  let d = `M${points[0][0]},${points[0][1]}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(i - 1, 0)]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[Math.min(i + 2, points.length - 1)]
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2[0]},${p2[1]}`
  }
  return d
}

interface ChartLine {
  data: number[]
  color: string
  fillColor: string
  width?: number
  dashArray?: string
}

interface AreaChartProps {
  lines: ChartLine[]
  height?: number
  className?: string
  showDots?: boolean
  showGrid?: boolean
  yLabels?: string[]
}

export function AreaChart({
  lines,
  height = 200,
  className,
  showDots = false,
  showGrid = true,
}: AreaChartProps) {
  const padding = { top: 8, right: 8, bottom: 8, left: 8 }
  const w = 800
  const h = height
  const innerW = w - padding.left - padding.right
  const innerH = h - padding.top - padding.bottom

  const normalizePoint = (val: number, i: number, total: number): [number, number] => {
    const x = padding.left + (i / (total - 1)) * innerW
    const y = padding.top + (1 - val / 100) * innerH
    return [x, y]
  }

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full"
        style={{ display: 'block' }}
      >
        {/* Grid lines */}
        {showGrid && (
          <g>
            {[0, 25, 50, 75, 100].map((v) => {
              const y = padding.top + (1 - v / 100) * innerH
              return (
                <line
                  key={v}
                  x1={padding.left}
                  y1={y}
                  x2={w - padding.right}
                  y2={y}
                  stroke="#1A1A1A"
                  strokeWidth="1"
                  strokeDasharray={v === 0 ? '0' : '2 4'}
                />
              )
            })}
          </g>
        )}

        {/* Lines with areas */}
        {lines.map((line, li) => {
          const points = line.data.map((val, i) => normalizePoint(val, i, line.data.length))
          const linePath = catmullRomToBezier(points)
          const areaPath = `${linePath} L${points[points.length - 1][0]},${h - padding.bottom} L${points[0][0]},${h - padding.bottom} Z`

          return (
            <g key={li}>
              <motion.path
                d={areaPath}
                fill={line.fillColor}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + li * 0.15 }}
              />
              <motion.path
                d={linePath}
                fill="none"
                stroke={line.color}
                strokeWidth={line.width || 1.5}
                strokeDasharray={line.dashArray}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + li * 0.15, ease: 'easeInOut' }}
              />
              {showDots &&
                points.map((p, i) => (
                  <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill={line.color} fillOpacity="0.6" />
                ))}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// ─── Horizontal Progress Bars ──────────────────────────
export function ProgressBar({
  value,
  color,
}: {
  value: number
  color: string
}) {
  return (
    <div className="h-[3px] bg-[#1A1A1A] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

// ─── Mini Bar Chart (for dashboard cards) ──────────────
export function MiniBarChart({
  data,
  height = 112,
  color = '#2F5BFF',
  className,
}: {
  data: number[]
  height?: number
  color?: string
  className?: string
}) {
  return (
    <div className={className} style={{ height }}>
      <div className="flex items-end h-full gap-[2px]">
        {data.map((val, i) => (
          <div key={i} className="flex-1 h-full flex flex-col justify-end">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
              className="w-full rounded-[1.5px] origin-bottom"
              style={{
                height: `${val}%`,
                background: `linear-gradient(to top, ${color}, transparent)`,
                opacity: 0.65,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
