// index.js
import {Locale} from "vant";
// 引入英文语言包
import enUS from "vant/es/locale/lang/en-US";
import {createI18n} from "vue-i18n";
import en from "./en";
import zh from "./zh";

Locale.use("en-US", enUS);

let messages = {
  "zh-CN": zh,
  "en-US	": en,
};
Locale.add(messages);
messages = {
  en,
  zh,
};
const language = (navigator.language || "en").toLocaleLowerCase(); // 这是获取浏览器的语言
const i18n = createI18n({
  locale: localStorage.getItem("lang") || language.split("-")[0] || "en", // 首先从缓存里拿，没有的话就用浏览器语言，
  fallbackLocale: "en", // 设置备用语言
  messages,
});

export default i18n;
