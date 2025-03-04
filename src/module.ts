import { defineNuxtModule, addComponent } from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {
  idle: number;
  events: string[];
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxt/screensaver',
    configKey: 'nuxtScreensaver',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },

  setup(_options, _nuxt) {
    addComponent({
      name: 'Screensaver',
      filePath: resolver.resolve('runtime/components/Screensaver.vue'),
    });
  },
});
