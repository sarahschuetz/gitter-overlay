# Gitter Overlay
## Dev-Tool for Gitter Plugin

*Gitter Overlay* is an easy way to include guidelines for the configured *Gitter* columns to facilitate frontend development.

### Requirements

*Gitter-Overlay* only works together with *Tailwind CSS* and the *Gitter* plugin ([view on Github](https://github.com/sarahschuetz/tailwindcss-gitter))


### Installation

*Gitter-Overlay* is part of the npm registry and can be installed using *npm* or *yarn*:

```
npm install gitter-overlay
```
or
```
yarn add gitter-overlay
```

Then you to import the module:
```
import gitterOverlay from 'gitter-overlay';
```
... and initialize it somewhere in your project:

```
gitterOverlay();
```

You can also pass options when initializing the overlay:
```
gitterOverlay({
  cols: 12,
  responsiveCols: {
    xs: '6',
    lg: '12',
    xl: '24'
  },
  outerGutter: '1rem',
  overlayColor: 'blue',
  sectionMaxWidth: '1000px'
});
```
Be sure to pass the same options you have configured for your *Gitter* plugin.

Finally, don't forget to include the `gitter.css` file.

