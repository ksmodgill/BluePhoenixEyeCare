type AnimatedStatProps = {
  value?: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  staticValue?: string;
};

export function AnimatedStat({
  value,
  label,
  suffix = "",
  prefix = "",
  decimals = 0,
  staticValue
}: AnimatedStatProps) {
  const displayNumber = `${prefix}${value?.toFixed(decimals) ?? "0"}`;

  return (
    <article className="stat-card">
      <strong>
        {staticValue ?? (
          <>
            {displayNumber}
            {suffix === "★" ? <span className="rating-star">★</span> : suffix}
          </>
        )}
      </strong>
      <span>{label}</span>
    </article>
  );
}
