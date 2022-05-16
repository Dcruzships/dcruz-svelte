import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"
import preprocess from 'svelte-preprocess';

/** @type {import(""@sveltejs/adapter-static").Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'docs',
            fallback: 'index.html',
            precompress: false
        }),
        prerender: {
            // This can be false if you're using a fallback (i.e. SPA mode)
            default: true
        },
        paths: {
            // change below to your repo name
            base: "",
        },
        trailingSlash: 'always'
    }
};

export default config;