// Libraries
import { FC, useState, useRef, CSSProperties } from "react";
import Hammer from "react-hammerjs";

const HammerTest: FC = () => {
  const hammerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setDragging] = useState<boolean>(false);
  const [coords, setCoords] = useState<{ x: Number; y: number }>({
    x: 0,
    y: 0,
  });

  const updatePosition = (xPos: number, yPos: number): void => {
    if (!hammerRef.current) {
      return;
    }

    const { left, top } = hammerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(xPos - left, 100));
    const y = Math.max(0, Math.min(yPos - top, 360));

    setCoords({ x, y });
  };

  const handlePanStart = (e: any): void => {
    setDragging(true);
    console.log("pan start");
    updatePosition(e.center.x, e.center.y);
  };

  const handlePanEnd = (): void => {
    setDragging(false);
    console.log("pan end");
  };

  const handlePan = (e: any): void => {
    updatePosition(e.center.x, e.center.y);
  };

  const handleTap = (e: any): void => {
    updatePosition(e.center.x, e.center.y);
  };

  const style: CSSProperties = {
    position: "absolute",
    transition: isDragging
      ? "transform 0.3s ease"
      : "transform 0.3s ease, top 0.2s cubic-bezier(0.87, 0, 0.13, 1), left 0.2s cubic-bezier(0.87, 0, 0.13, 1)",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    background: "#fff",
    top: `${coords.y}px`,
    left: `${coords.x}px`,
    transform: isDragging
      ? "translate(-50%, -50%) scale(2)"
      : "translate(-50%, -50%",
  };

  return (
    <div ref={hammerRef}>
      <Hammer
        onTap={handleTap}
        direction="DIRECTION_VERTICAL"
        vertical={true}
        onPanStart={handlePanStart}
        onPanEnd={handlePanEnd}
        onPan={handlePan}
      >
        <div
          style={{
            width: "100px",
            height: "360px",
            background: "#ff0054",
            position: "relative",
          }}
        >
          <div style={style} />
        </div>
      </Hammer>
    </div>
  );
};

export default HammerTest;
