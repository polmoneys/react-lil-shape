import * as React from 'react';
import { polygon } from './polygon';
import { ShapeProps } from './Shape.types';
import './Shape.scss';

const Shape = (props: ShapeProps) => {
    const { className = undefined, sides = 3, size = 69, fill = 'currentColor', transforms = undefined } = props;
    const clampedSize = sides < 3 ? 3 : sides > 60 ? 60 : sides;
    const center = size / 2;
    const box = `0 0 ${size} ${size}`;
    const polyPath = polygon(center, center, clampedSize, size / 2);

    const containerClassName = ['lil-shape', className].filter(Boolean).join(' ');
    return (
        <svg className={containerClassName} viewBox={box} width={size} height={size} fill={fill} style={{ ...(transforms && { transform: transforms }) }}>
            <path d={polyPath} />
        </svg>
    );
};

Shape.Triangle = (props: ShapeProps) => <Shape {...props} sides={3} />;
Shape.Square = (props: ShapeProps) => <Shape {...props} sides={4} />;
Shape.Circle = (props: ShapeProps) => <Shape {...props} sides={25} />;

const avoidRerenderIf = (prevProps: ShapeProps, nextProps: ShapeProps) => {
    return prevProps.sides === nextProps.sides;
};

Shape.Freeze = React.memo((props: ShapeProps) => <Shape {...props} />, avoidRerenderIf);

export default Shape;
