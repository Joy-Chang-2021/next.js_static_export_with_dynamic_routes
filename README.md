# Next.js static export with dynamic routes

### [Github Page Demo](https://joy-chang-2021.github.io/next.js_static_export_with_dynamic_routes)

- 動態路由輸出靜態網頁、部署於 github-page
    1. [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) | NEXT.js
    2. [Generating Static Params](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params) | NEXT.js

---

- 靜態打包步驟 [參考↗](https://github.com/Joy-Chang-2021/next.js_static_export)

### dynamic routes

- dynamic Segment `[folderName]/page.js`
- generateStaticParams 與 dynamic Segment 結合使用  
   在輸出打包時生成靜態路由，而不是等使用者請求時動態生成

```javascript
// app/post/[number]/page.tsx
export async function generateStaticParams() {
	return [{number: 0}, {number: 1}, {number: 3}]
}

export default function Post ({params}) {
	return <p>{params.number}</p>
}
```
- addition notes
    - generateStaticParams 主要優點在於其對於數據的智慧檢索功能，於此使用 fetch 請求資料時，這些請求將被自動記憶
    - 當在多個 generateStaticParams、Layouts 和 Pages 使用相同參數的 fetch 時，只會執行一次請求，減少建置的時間