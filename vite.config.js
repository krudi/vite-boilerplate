import { defineConfig } from 'vite'

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "./assets/scss/abstracts/colors.scss";
          @import "./assets/scss/abstracts/fonts.scss";
        `
			}
		}
	}
})
