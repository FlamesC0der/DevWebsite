export default {
    state: {
        navs: [
            {icon: "bi-book", to: "/", text_key: "nav.home"},
            {icon: "bi-file-person", to: "/about", text_key: "nav.about"},
            {icon: "bi-person-lines-fill", to: "/links", text_key: "nav.links"},
            {icon: "bi-grid-1x2", to: "/projects", text_key: "nav.projects"}
        ],
        langs: [
            {lang: "ru", text: "Русский", country: "ru"},
            {lang: "en", text: "English", country: "us"},
            {lang: "ja", text: "日本語", country: "jp"},
        ],
        projects: [
            {
                name: 'discord-bot-template',
                links: [
                    {text: 'about', link: '/projects/discord-bot-template', logo: 'bi-book'},
                    {text: 'github', link: 'https://github.com/FlamesC0der/discord-bot-template', logo: 'bi-github'},
                ],
            },
        ],
        Projectdependencies: `{
    "name": "dev-website",
    "version": "0.0.0",
    "private": true,
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    },
    "dependencies": {
        "@intlify/unplugin-vue-i18n": "^0.12.3",
        "axios": "^1.4.0",
        "bootstrap-icons": "^1.10.5",
        "github-markdown-css": "^5.2.0",
        "vue": "^3.3.4",
        "vue-country-flag-next": "^2.3.2",
        "vue-i18n": "^9.2.2",
        "vue-router": "^4.2.4",
        "vue3-highlightjs": "^1.0.5",
        "vue3-markdown-it": "^1.0.10",
        "vuex": "^4.0.2"
    },
    "devDependencies": {
        "@vitejs/plugin-vue": "^4.2.3",
        "sass": "^1.66.1",
        "vite": "^4.4.6"
    }
}`,
        links: [
            {text: 'Github', link: 'https://github.com/FlamesC0der', logo: 'bi-github'},
            {text: 'Discord', link: 'https://discord.gg/3wt8QRndjm', logo: 'bi-discord'},
            {text: 'Telegram', link: 'https://t.me/FlameCoder0_0', logo: 'bi-telegram'}
        ]

    },
    getters: {
        navs: s => s.navs,
        langs: s => s.langs,
        projects: s => s.projects,
        Projectdependencies: s => s.Projectdependencies,
        links: s => s.links
    }
}