# LocaleContext

[LocaleContext](/taxonomy/reference/global-contexts/LocaleContext.md) may capture language and/or country in multilingual Applications.

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
Creates a new instance of LocaleContext and sets its properties using the given factories.  

### isUsable
Always true.

### Configuration
The Plugin constructor requires at least one of the following factories to be specified:

```ts
idFactoryFunction: () => string | null | undefined;
languageFactoryFunction: () => string | null | undefined;
countryFactoryFunction: () => string | null | undefined;
```

:::caution
- `languageFactoryFunction` return value must be a valid [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code.
- `countryFactoryFunction` return value must be a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) country code.

Values returned by either factory that do not conform to their respective ISO standard will be discarded, and the 
plugin will not generate a LocaleContext. 

The issue is logged to the TrackerConsole during development.
:::


#### Id generation
LocaleContext, like all other Global Contexts, must have an identifier.  

It can be set directly by specifying the `idFactoryFunction`, or generated indirectly via `languageCodeFactory` 
and/or `countryCodeFactory`. 

In the latter scenario the identifier is going to be a composition of the returning values of the
`languageCodeFactory` and/or `countryCodeFactory`. 

#### Id generation examples

```ts
{ idFactoryFunction: () => 'custom-id' }                             // id: 'custom-id'
{ languageCodeFactory: () => 'en' }                                  // id: 'en'
{ countryCodeFactory: () => 'US' }                                   // id: 'US'
{ languageCodeFactory: () => 'en', countryCodeFactory: () => 'US' }  // id: 'en_US'
```

:::info
Identifiers are not used for modeling, but specifying an `idFactoryFunction` can be used to later transform the data 
and produce a fully functional LocaleContext, in the backend or the data pipeline.

This is particularly useful in applications that don't have the capability to provide valid language or country codes.
:::

### Usage examples

#### Locale from state
In this example we are going to retrieve the current language from a library, such as [react-i18next](https://react.i18next.com).

```tsx
const { i18n } = useTranslation();

// This can be: 'en', or 'en-US', or even more complex formats such as 'en-US-xxx'
const selectedLanguage = i18n.language; 
const [languageCode, countryCode] = selectedLanguage.split('-'); 

const tracker = new ReactNativeTracker({
    applicationId: 'app-id',
    endpoint: 'https://collector.app.dev',
    plugins: [
      new LocaleContextPlugin({
        languageFactoryFunction: () => languageCode, 
        countryFactoryFunction: () => countryCode 
      })
    ]
});  
```

#### Non-standard language id
```ts
const someArbitraryState = {
  language: 'lan1'
}

const tracker = new ReactNativeTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev',
  plugins: [
    new LocaleContextPlugin({
      idFactoryFunction: () => someArbitraryState.language 
    })
  ]
});  
```

:::info
As mentioned above, this custom identifier will not be usable directly for modeling, but it may be mapped server-side
to its actual language and/or country via enrichment/transformations.

In the worst case scenario, it can be used just for simple filtering operations. That said, to fully leverage Locale 
based models, we definitely would recommend looking into standardizing your application languages.
:::

