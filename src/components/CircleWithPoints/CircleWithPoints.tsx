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
  pointColor?: string;
  pointSize?: number;
  circleColor?: string;
  circleBorderWidth?: number;
  onPointClick: (index: number) => void;
}

const CircleWithPoints = (
  {
    pointCount,
    circleSize = 530,
    pointColor = '#42567A',
    pointSize = 6,
    circleColor = '#42567A',
    circleBorderWidth = 1,
    onPointClick,
  }: CircleWithPointsProps) => {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    calculatePoints();
  }, [pointCount, circleSize, pointSize]);

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
    <div style={{
      position: 'relative',
      width: `${circleSize}px`,
      height: `${circleSize}px`,
      border: `${circleBorderWidth}px solid ${circleColor}`,
      borderRadius: '50%',
      margin: '20px'
    }}>
      {points.map(point => (
        <div
          key={point.id}
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${pointSize}px`,
            height: `${pointSize}px`,
            backgroundColor: pointColor,
          }}
          className={cls.points}
          onClick={() => onPointClick(point.id)}
        />
      ))}
    </div>
  );
};

export default CircleWithPoints;
