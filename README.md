VSCode throws an error for ref on html elements.
To remedy this, change the type definition for the HTMLProps interface found here .vscode\extensions\svelte.svelte-vscode-105.16.0\node_modules\svelte2tsx\svelte-jsx.d.ts

```
// eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
      ref?: any;
    }
```

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).