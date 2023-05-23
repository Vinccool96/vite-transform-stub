import { Plugin } from "vite"

export function stubTransform(extensionRegex = /.+\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$/): Plugin {
  return {
    name: "vite-transform-stub",
    transform(_src, id) {
      if (extensionRegex.test(id)) {
        return {
          code: 'module.exports = ""',
          map: null,
        }
      }
    },

    load(id) {
      if (extensionRegex.test(id)) {
        return {
          code: 'module.exports = ""',
          map: null,
        }
      }
    },
  }
}
