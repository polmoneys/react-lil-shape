# <Shape>

Lil' Component that brings svg shapes to your project. Typescript, Rollup.

[Codesandbox example](https://codesandbox.io/s/shape-tv517?file=/src/App.tsx)

## Use it

```javascript
return (
    <>
        <Shape.Circle />
        <Shape.Circle transforms="rotate(90deg)" />
        <Shape.Square />
        <Shape sides={5} />
        <Shape sides={6} />
    </>
);
```

## Props

| Prop name  | Accepts |      Default |
| :--------- | :-----: | -----------: |
| className  | string  |         null |
| fill       | string  | currentColor |
| size       | number  |           69 |
| sides      | number  |            3 |
| transforms | string  |         null |

## Install

```bash

npm i react-lil-shape

```
