// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Claude for Cry Babies',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/wangchauyan/claude-for-cry-babies' }],
			defaultLocale: 'root',
			locales: {
				root: { label: '繁體中文', lang: 'zh-TW' },
				en: { label: 'English', lang: 'en' },
			},
			sidebar: [
				{
					label: 'Part I：基礎篇',
					translations: { en: 'Part I: Foundations' },
					items: [
						{
							label: '第 1 章：你為什麼需要一隻 AI 神筆？',
							translations: { en: 'Ch 1: Why You Need an AI Magic Pen' },
							items: [
								{ slug: 'chapter-01' },
								{ slug: 'chapter-01/section-01' },
								{ slug: 'chapter-01/section-02' },
								{ slug: 'chapter-01/section-03' },
								{ slug: 'chapter-01/section-04' },
							],
						},
						{
							label: '第 2 章：跟 AI 說話的藝術',
							translations: { en: 'Ch 2: The Art of Talking to AI' },
							items: [
								{ slug: 'chapter-02' },
								{ slug: 'chapter-02/section-01' },
								{ slug: 'chapter-02/section-02' },
								{ slug: 'chapter-02/section-03' },
								{ slug: 'chapter-02/section-04' },
							],
						},
					],
				},
				{
					label: 'Part II：實戰篇',
					translations: { en: 'Part II: Hands-On' },
					items: [
						{
							label: '第 3 章：Artifacts 魔法',
							translations: { en: 'Ch 3: Artifacts Magic' },
							items: [
								{ slug: 'chapter-03' },
								{ slug: 'chapter-03/section-01' },
								{ slug: 'chapter-03/section-02' },
								{ slug: 'chapter-03/section-03' },
								{ slug: 'chapter-03/section-04' },
								{ slug: 'chapter-03/section-05' },
								{ slug: 'chapter-03/section-06' },
							],
						},
						{
							label: '第 4 章：檔案分析',
							translations: { en: 'Ch 4: File Analysis' },
							items: [
								{ slug: 'chapter-04' },
								{ slug: 'chapter-04/section-01' },
								{ slug: 'chapter-04/section-02' },
								{ slug: 'chapter-04/section-03' },
								{ slug: 'chapter-04/section-04' },
								{ slug: 'chapter-04/section-05' },
							],
						},
					],
				},
				{
					label: 'Part III：進階篇',
					translations: { en: 'Part III: Advanced' },
					items: [
						{
							label: '第 5 章：出錯了怎麼辦？',
							translations: { en: 'Ch 5: When Things Go Wrong' },
							items: [
								{ slug: 'chapter-05' },
								{ slug: 'chapter-05/section-01' },
								{ slug: 'chapter-05/section-02' },
								{ slug: 'chapter-05/section-03' },
								{ slug: 'chapter-05/section-04' },
								{ slug: 'chapter-05/section-05' },
							],
						},
						{
							label: '第 6 章：Projects 長期記憶',
							translations: { en: 'Ch 6: Projects & Memory' },
							items: [
								{ slug: 'chapter-06' },
								{ slug: 'chapter-06/section-01' },
								{ slug: 'chapter-06/section-02' },
								{ slug: 'chapter-06/section-03' },
								{ slug: 'chapter-06/section-04' },
								{ slug: 'chapter-06/section-05' },
							],
						},
						{
							label: '第 7 章：打造你的 MVP',
							translations: { en: 'Ch 7: Build Your MVP' },
							items: [
								{ slug: 'chapter-07' },
								{ slug: 'chapter-07/section-01' },
								{ slug: 'chapter-07/section-02' },
								{ slug: 'chapter-07/section-03' },
								{ slug: 'chapter-07/section-04' },
								{ slug: 'chapter-07/section-05' },
								{ slug: 'chapter-07/section-06' },
								{ slug: 'chapter-07/section-07' },
							],
						},
						{
							label: '第 8 章：建造者心態',
							translations: { en: 'Ch 8: The Builder Mindset' },
							items: [
								{ slug: 'chapter-08' },
								{ slug: 'chapter-08/section-01' },
								{ slug: 'chapter-08/section-02' },
								{ slug: 'chapter-08/section-03' },
								{ slug: 'chapter-08/section-04' },
								{ slug: 'chapter-08/section-05' },
							],
						},
					],
				},
				{
					label: '附錄',
					translations: { en: 'Appendix' },
					items: [
						{ slug: 'appendix/prompt-cheatsheet' },
						{ slug: 'appendix/claude-plans' },
						{ slug: 'appendix/faq' },
						{ slug: 'appendix/resources' },
					],
				},
			],
		}),
	],
});
