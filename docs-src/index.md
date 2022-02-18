---
layout: page.11ty.cjs
title: <splide-slider> ⌲ Home
---

# &lt;splide-slider>

`<splide-slider>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<splide-slider>` is just an HTML element. You can it anywhere you can use HTML!

```html
<splide-slider></splide-slider>
```

  </div>
  <div>

<splide-slider></splide-slider>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<splide-slider>` can be configured with attributed in plain HTML.

```html
<splide-slider name="HTML"></splide-slider>
```

  </div>
  <div>

<splide-slider name="HTML"></splide-slider>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<splide-slider>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;splide-slider&gt;</h2>
    <splide-slider .name=${name}></splide-slider>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;splide-slider&gt;</h2>
<splide-slider name="lit-html"></splide-slider>

  </div>
</section>
