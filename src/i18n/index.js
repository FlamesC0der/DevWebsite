import { createI18n } from "vue-i18n";
import en from "./locales/en.json"
import ru from "./locales/ru.json"
import ja from "./locales/ja.json"

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { en,ru,ja }
})