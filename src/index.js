const Holder = require('holderjs');

Holder.addTheme('vue', {bg: '#4FC08D', fg: '#FFFFFF'});
Holder.addTheme('facebook', {bg: '#3b5998', fg: '#FFFFFF'});
Holder.addTheme('twitter', {bg: '#55acee', fg: '#FFFFFF'});
Holder.addTheme('youtube', {bg: '#bb0000', fg: '#FFFFFF'});
Holder.addTheme('tumblr', {bg: '#32506d', fg: '#FFFFFF'});
Holder.addTheme('github', {bg: '#000000', fg: '#FFFFFF'});
Holder.addTheme('whatsapp', {bg: '#4dc247', fg: '#FFFFFF'});

const holderJS = {
	install(Vue, options = {}) {
		Vue.directive('holder', {
			bind(el, binding) {
				if (!binding.value) {
					el.setAttribute('data-src', 'holder.js/100px100p?auto=yes');
					Holder.run({images: el});
				} else if (Object.prototype.toString.call(binding.value) === '[object Object]') {
					let imageSize = '300x300',
						holderOpts = binding.value;
					if (holderOpts.hasOwnProperty('img')) {
						imageSize = holderOpts.img;
						delete holderOpts['img'];
					}
					let holderStr = '?' + Object.keys(holderOpts).map(function (prop) {
						return [prop, holderOpts[prop]].map(encodeURIComponent).join('=');
					}).join('&');
					el.setAttribute('data-src', 'holder.js/' + imageSize + holderStr);
					Holder.run({
						images: el
					});
				} else if (Object.prototype.toString.call(binding.value) === '[object String]') {
					el.setAttribute('data-src', 'holder.js/' + binding.value);
					Holder.run({
						images: el
					});
				}
			}
		});
	}
};

export default holderJS;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(holderJS);
}