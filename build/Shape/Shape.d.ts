import * as React from 'react';
import { ShapeProps } from './Shape.types';
import './Shape.scss';
declare const Shape: {
    (props: ShapeProps): JSX.Element;
    Triangle(props: ShapeProps): JSX.Element;
    Square(props: ShapeProps): JSX.Element;
    Circle(props: ShapeProps): JSX.Element;
    Freeze: React.MemoExoticComponent<(props: ShapeProps) => JSX.Element>;
};
export default Shape;
