# Shape

Lil' Component that brings svg shapes to your project. Typescript, Rollup.

[Codesandbox example](https://codesandbox.io/s/shape-tv517?file=/src/App.tsx)

## Use it

```javascript

const [isOpen, setOpen] = useState<boolean>(true); 

return (
    <>
        <Shape.Circle />
        <Shape.Circle transforms={isOpen ? "rotate(90deg)" : undefined} />
        <Shape.Square />
        <Shape sides={5} />
        <Shape sides={6} />
    </>
);
```

## Props

| Prop name  | Accepts |      Default |
| :--------- | :-----: | -----------: |
| className  | string  |         undefined |
| fill       | string  | currentColor |
| size       | number  |           69 |
| sides      | number  |            3 |
| transforms | string  |         undefined |

## Install

```bash

npm i react-lil-shape

```
