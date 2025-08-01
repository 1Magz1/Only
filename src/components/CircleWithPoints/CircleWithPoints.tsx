import {useState, useEffect, useRef, useMemo} from 'react';
import gsap from '../../shared/config/gsap';
import {useGSAP} from "@gsap/react";

import cls from "./CircleWithPoints.module.scss";

interface Point {
  id: number;
  x: number;
  y: number;
  title: string;
}

interface CircleWithPointsProps {
  pointsList: {title: string}[];
  circleSize?: number;
  activePoint: number;
  angleOffset?: number;
  onPointClick: (index: number) => void;
}

const CircleWithPoints = (
  {
    pointsList,
    activePoint,
    circleSize = 530,
    angleOffset = 66,
    onPointClick,
  }: CircleWithPointsProps) => {
  const [points, setPoints] = useState<Point[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRotationComplete, setIsRotationComplete] = useState(false);

  const calculatePoints = () => {
    const newPoints: Point[] = [];
    const center = circleSize / 2;

    const offsetRadians = (angleOffset * Math.PI) / 180;

    for (let i = 0; i < pointsList.length; i++) {
      const angle = (2 * Math.PI * i) / pointsList.length - offsetRadians;
      const x = center + center * Math.cos(angle);
      const y = center + center * Math.sin(angle);

      newPoints.push({
        id: i,
        x,
        y,
        title: pointsList[i].title
      });
    }

    setPoints(newPoints);
  };

  useEffect(() => {
    calculatePoints();
  }, [pointsList, circleSize, angleOffset]);

  const angleStep = 360 / pointsList.length;

  const targetRotation = useMemo(() => {
    return -(activePoint * angleStep);
  }, [activePoint, angleStep]);

  useGSAP(() => {
    if (containerRef.current) {
      setIsRotationComplete(false)
      const normalizedTarget = gsap.utils.snap(angleStep, targetRotation);

      gsap.to(containerRef.current, {
        rotation: normalizedTarget,
        duration: 1,
        ease: 'power2.inOut',
        transformOrigin: '50% 50%',
        onComplete: () => {
          setIsRotationComplete(true);
        }
      });
    }

  }, [targetRotation, angleStep]);

  return (
    <div
      className={cls.circle}
      style={{
        width: `${circleSize}px`,
        height: `${circleSize}px`,
      }}
    >
      <div
        ref={containerRef}
        className={cls.container}
      >
        {points.map((point) => (
          <div
            key={point.id}
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
            }}
            className={`${cls.point} ${point.id === activePoint ? cls.active : ''}`}
            onClick={() => onPointClick(point.id)}
          >
            <div
              style={{
              transform: `rotate(${-targetRotation}deg)`,
            }}
              className={cls.wrapper}
            >
              <span className={cls.counter}>{point.id + 1}</span>
              <span className={`${cls.label} ${isRotationComplete ? cls['label--active'] : ''}`}>{point.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleWithPoints;
