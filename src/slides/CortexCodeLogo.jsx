const COCO_GRID = [
  '...BBBBB...',
  '..BBBBBBB..',
  '..BKKBKKB..',
  '..BKKBKKB..',
  'BBBBBOBBBBB',
  'BBBBBOBBBBB',
  'BBBCCCCCBBB',
  'BBBCCCCCBBB',
  '.BBCCCCCBB.',
  '.BOOBCBOOB.',
  '..OO.B.OO..',
]
const COCO_COLORS = { B: '#8CA6E8', K: '#141414', O: '#E8963C', C: '#FCF6E7' }

export default function CortexCodeLogo({ size = 24 }) {
  const cell = 8
  const cols = COCO_GRID[0].length
  const rows = COCO_GRID.length
  return (
    <svg width={size} height={size} className="invert-safe" viewBox={`0 0 ${cols * cell} ${rows * cell}`} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      {COCO_GRID.flatMap((line, y) =>
        line.split('').map((ch, x) =>
          COCO_COLORS[ch] ? (
            <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill={COCO_COLORS[ch]} />
          ) : null,
        ),
      )}
    </svg>
  )
}
