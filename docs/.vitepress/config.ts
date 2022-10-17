import {defineConfig} from 'vitepress'


export default defineConfig({
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',
    base: '/dcomb-vitepress-template/',

    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    markdown: {
        headers: {
            level: [0, 0]
        }
    },
    themeConfig: {
        nav: nav(),

        sidebar: sidebarGuide(),

        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Dcomb'
        },

        // algolia: {
        //     appId: '8J64VVRP8K',
        //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        //     indexName: 'vitepress'
        // },
        //
        // carbonAds: {
        //     code: 'CEBDT27Y',
        //     placement: 'vuejsorg'
        // }
    }
})

function nav() {
    return [
        {text: 'Abt', link: '/', activeMatch: '/'},
        {
            text: '1.0.0',
            items: [
                {
                    text: 'Changelog',
                    link: '/'
                },
                {
                    text: 'Contributing',
                    link: '/'
                }
            ]
        }
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Element-plus',
            collapsible: true,
            items: [
                {text: 'Button', link: '/element-plus/button'},
                {text: 'Background', link: '/element-plus/background'},
            ]
        },
        {
            text: 'Markdown',
            collapsible: true,
            items: [
                {text: 'Markdown-It', link: '/markdown/markdown-it'},
            ]
        },
        {
            text: '404',
            collapsible: true,
            items: [
                {text: '404', link: '/'},
            ]
        },
    ]
}
