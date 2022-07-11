# LocaleContext

[LocaleContext](/taxonomy/reference/global-contexts/LocaleContext.md) captures the language in multilingual Applications.

## Installation
```sh
yarn add @objectiv/plugin-locale-context
```

**or**

```sh
npm install @objectiv/plugin-locale-context
```

## Implementation
Implements PluginInterface's `enrich`.

### enrich
Creates a new instance of LocaleContext, by running the given `idFactoryFunction`, and adds it to the list of Global Contexts of the outgoing Event.

### isUsable
Always true.

### Configuration
The Plugin constructor accepts a single `idFactoryFunction` parameter:

```ts
  idFactoryFunction: () => string | null | undefined;
```

:::info
`idFactoryFunction` may return `null` or `undefined`.
A LocaleContext will not be generated in those cases.
:::

#### Locale from URL
Example URL: `http://www.website.dev/en/slug2`.   
Expected LocaleContext id: `en`.  

```ts
const tracker = new ReactTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev',
  plugins: [
    new LocaleContextPlugin({
      idFactoryFunction: () => location.pathname.split('/')[1] ?? null 
    })
  ]
});  
```
