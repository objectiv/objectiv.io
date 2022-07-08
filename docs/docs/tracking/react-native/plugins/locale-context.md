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

#### Locale from state
In this example we are going to retrieve the current language from a library, such as [react-i18next](https://react.i18next.com).

```tsx
const App = (props) => {
  const { i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;
  
  const tracker = new ReactTracker({
    applicationId: 'app-id',
    endpoint: 'https://collector.app.dev',
    plugins: [
      new LocaleContextPlugin({
        idFactoryFunction: () => selectedLanguageCode 
      })
    ]
  });  
  
  return (
    <ObjectivProvider tracker={tracker}>
      {props.children}
    </ObjectivProvider>
  );
}
```
