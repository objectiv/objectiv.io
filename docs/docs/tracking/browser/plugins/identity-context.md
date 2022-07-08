# IdentityContext

[IdentityContext](/taxonomy/reference/global-contexts/IdentityContext.md) enables cross session, platform and device tracking. 

## Installation
```sh
yarn add @objectiv/plugin-identity-context
```

**or**

```sh
npm install @objectiv/plugin-identity-context
```

## Implementation
Implements PluginInterface's `enrich` method.

### enrich
Creates one or more instances of IdentityContext as configured at construction.

### isUsable
Always true.

### Configuration
The plugin's constructor accepts one of the following configurations:

 - an IdentityContextAttributes object
 - an array of IdentityContextAttributes objects
 - a function returning an IdentityContextAttributes object
 - a function returning an array of IdentityContextAttributes objects

#### IdentityContextAttributes
```ts
type IdentityContextAttributes = {
  id: string;
  value: string;
}
```

- The `id` property specifies the scope of identification.  
- The `value` is the actual identifier within the scope defined by `id`.
