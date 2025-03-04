import {
  defineNuxtModule,
  createResolver,
  addComponent,
} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  idle: number
  events: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxt/screensaver',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },

  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addComponent({
      name: 'NuxtScreensaver',
      filePath: resolver.resolve('runtime/components/NuxtScreensaver.vue'),
    })
  },
})
