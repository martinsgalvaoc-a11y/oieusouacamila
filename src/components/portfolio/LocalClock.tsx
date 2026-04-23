import { useEffect, useState } from "react";

const formatTime = () =>
  new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  }).format(new Date());

const LocalClock = () => {
  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="eyebrow text-muted-foreground tabular-nums">
      São Bernardo · {time}
    </span>
  );
};

export default LocalClock;
