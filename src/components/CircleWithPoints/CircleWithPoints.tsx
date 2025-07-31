import { useState, useEffect } from 'react';
import cls from "./CircleWithPoints.module.scss";

interface Point {
  id: number;
  x: number;
  y: number;
}

interface CircleWithPointsProps {
  pointCount: number;
  circleSize?: number;
  activePoint: number;
  onPointClick: (index: number) => void;
}

const CircleWithPoints = (
  {
    pointCount,
    activePoint,
    circleSize = 530,
    onPointClick,
  }: CircleWithPointsProps) => {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    calculatePoints();
  }, [pointCount, circleSize]);

  const calculatePoints = () => {
    const newPoints: Point[] = [];
    const center = circleSize / 2;

    for (let i = 0; i < pointCount; i++) {
      const angle = (2 * Math.PI * i) / pointCount;
      const x = center + center * Math.cos(angle);
      const y = center + center * Math.sin(angle);

      newPoints.push({
        id: i,
        x,
        y
      });
    }

    setPoints(newPoints);
  };

  return (
    <div
      className={cls.circle}
      style={{
      width: `${circleSize}px`,
      height: `${circleSize}px`,
    }}>
      {points.map(point => (
        <div
          key={point.id}
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
          }}
          className={`${cls.point} ${point.id === activePoint ? cls.active : ''}`}
          onClick={() => onPointClick(point.id)}
        >
          <span className={cls.counter}>{point.id + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default CircleWithPoints;
