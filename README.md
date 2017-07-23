# CSS Modules Demo

Shows how to style a single JSX component with multiple conditional or unconditional classes using CSS modules.

# Run

```sh
yarn install
yarn dev
```

# Examples

## Multiple unconditional styles

```jsx
<p class={ [style.sample, style.italic] }>
  Your content goes here
</p>
```

## Combining conditional and unconditional styles

```jsx
this.red = true
this.strong = false

<p class={
  {
    [style.sample]: true,
    [style.red]: this.red,
    [style.strong]: this.strong
  }
}>
  Your content goes here
</p>
```

# License

MIT
