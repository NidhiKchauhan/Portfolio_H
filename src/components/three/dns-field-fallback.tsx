const NODES = [
  { x: 180, y: 460, label: "CLIENT" },
  { x: 520, y: 340, label: "RESOLVER" },
  { x: 860, y: 520, label: "ROOT" },
  { x: 1180, y: 330, label: "TLD" },
  { x: 1440, y: 470, label: "AUTH" },
];

export function DnsFieldFallback() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="bg-grid-schematic h-full w-full"
      role="presentation"
      focusable="false"
    >
      <polyline
        points={NODES.map((n) => `${n.x},${n.y}`).join(" ")}
        fill="none"
        stroke="var(--border)"
        strokeWidth={2}
        strokeDasharray="8 10"
      />
      {NODES.map((node, i) => (
        <g key={node.label}>
          <circle
            cx={node.x}
            cy={node.y}
            r={i === NODES.length - 1 ? 20 : 14}
            fill={i === NODES.length - 1 ? "var(--accent-pass)" : "var(--accent-signal)"}
          />
          <text
            x={node.x}
            y={node.y + (i % 2 === 0 ? 48 : -32)}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize={20}
            letterSpacing="0.06em"
            fill="var(--muted-foreground)"
          >
            {node.label}
          </text>
        </g>
      ))}
      <text
        x={NODES[NODES.length - 1].x}
        y={NODES[NODES.length - 1].y - 40}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize={20}
        letterSpacing="0.04em"
        fill="var(--accent-pass)"
      >
        200 OK
      </text>
    </svg>
  );
}
