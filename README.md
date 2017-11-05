# vue-holder

A Vue.js directive for [HolderJS](https://github.com/imsky/holder).
Holder renders image placeholders on the client side using SVG.

## Installing

Install with npm:
```bash
npm install vue-holderjs --save-dev
```

Add as a dependency in your Vue app:

```javascript
import VueHolder from 'vue-holderjs';
Vue.use(VueHolder);
```

Include from a CDN:
```html
<script src="https://unpkg.com/vue-holderjs/dist/index.js"></script>
```

## Usage example

```html
<template>
  <main>
    <div style="width:300px;height: 300px;overflow: hidden">
      <img alt="Post Image" v-holder="holder">
    </div>
  </main>
</template>

<script>
import VueHolder from 'vue-holderjs';
Vue.use(VueHolder);
	
export default {
  name: 'Example',
  data () {
    return {
      holder: {
        img: '500x500',
        auto: 'yes',
        theme: 'vue'
      }
    }
  }
}
</script>
```

[TODO: Update with more examples]

## Placeholder options

Holder options are set through an object.

* `theme`: The theme to use for the placeholder.
* `random`: Use random theme.
* `bg`: Background color.
* `fg`: Foreground (text) color.
* `text`: Custom text. Example:
* `size`: Custom text size. Defaults to `pt` units.
* `font`: Custom text font.
* `align`: Custom text alignment (left, right).
* `outline`: Draw outline and diagonals for placeholder.
* `lineWrap`: Maximum line length to image width ratio.

### Themes

Holder includes the 6 default themes: ``sky``, ``vine``, ``lava``, ``gray``, ``industrial``, and ``social``
and aditionals ``vue``, ``facebook``, ``twitter``, ``youtube``, ``tumblr``, ``github``, ``whatsapp``

**Important:** When testing locally, font URLs must have a `http` or `https` protocol defined.

**Important:** Fonts served from locations other than public registries (i.e. Google Fonts, Typekit, etc.) require the correct CORS headers to be set. See [How to use CDN with Webfonts](https://www.maxcdn.com/one/tutorial/how-to-use-cdn-with-webfonts/) for more details.

### Fluid placeholders

**Important:** Percentages are specified with the `p` character, not with the `%` character.

Specifying a dimension in percentages creates a fluid placeholder that responds to media queries.

```html
<img v-holder="img=100px75?theme=social">
```

By default, the fluid placeholder will show its current size in pixels. To display the original dimensions, i.e. 100%x75, set the ``textmode`` flag to ``literal`` like so: `img=100px75?textmode=literal`.

### Automatically sized placeholders

If you'd like to avoid Holder enforcing an image size, use the ``auto`` flag like so:

```html
<img v-holder="img=200x200?auto=yes">
```

The above will render a placeholder without any embedded CSS for height or width.

To show the current size of an automatically sized placeholder, set the ``textmode`` flag to ``exact`` like so: `img200x200?auto=yes&textmode=exact`.

## License

Holder is provided under the [MIT License](http://opensource.org/licenses/MIT).

## Credits

[HolderJS](https://github.com/imsky/holder) is a project by [Ivan Malopinsky](http://imsky.co).


## Change History

### v1.0.0 - 2017/05/24

* Initial release