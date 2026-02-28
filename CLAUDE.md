# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

```bash
pnpm dev          # 启动本地开发服务器
pnpm build        # TypeScript 类型检查 + Vite 构建
pnpm lint         # ESLint 检查
pnpm preview      # 预览构建产物
```

## 项目架构

赛博朋克风格个人简历，React 19 + TypeScript + Vite，**数据与视图完全解耦**：修改简历内容只需编辑 `src/data.ts`。

### 数据流

```
src/data.ts (唯一数据源)
    └── src/App.tsx (注入 resumeData 到各 section 组件)
            ├── Header.tsx
            ├── CoreModules.tsx
            ├── Experience.tsx
            ├── Projects.tsx
            ├── EducationAwards.tsx
            └── Footer.tsx (静态组件，不接收 data prop)
```

所有组件接收 `data: ResumeData` prop，类型定义在 `src/types.ts`。

### 动画系统（GSAP Hooks）

动画逻辑封装在 `src/hooks/` 下，**不应在组件内直接调用 GSAP**：

| Hook | 用途 |
|------|------|
| `useScrollReveal` | 元素入场动画（`y:40→0` + blur）；自动跳过 `prefers-reduced-motion` 和打印媒体 |
| `useTypewriter` | 打字机文字逐字显示效果 |
| `useHoverScan` | 卡片悬停时的扫描光束效果，向 DOM 注入 `[data-hover-beam]` div |
| `useTimelineDraw` | 时间轴序列入场动画：竖线（`scaleY`）→ 节点（`scale+opacity`）→ 条目（`y+opacity`）；自动跳过打印媒体 |

打印兼容由三层机制共同保证：
1. `useScrollReveal` / `useTimelineDraw` 在 hook 内检测 `matchMedia("print")` 并提前返回，阻止动画注册
2. `App.tsx` 的 `beforeprint` 监听器将所有已注册的有限动画推进到终态
3. `index.css` 的 `@media print` 块强制覆盖 GSAP 残留 inline styles（`opacity:1!important` 等）

`useScrollReveal` 在模块顶层调用 `gsap.registerPlugin(ScrollTrigger)`；`useTimelineDraw` 在 `useGSAP()` 内部注册。新增需要 `ScrollTrigger` 的 hook 时，应遵循模块顶层注册的模式。

### 样式系统

使用 **Tailwind CSS v4**（`@theme` 指令定义 CSS 变量）：

- 主题 token（`bg-bg-dark`、`text-text-main`、`text-text-dim`、`font-mono` 等均可直接作为 Tailwind 工具类使用）：

  ```css
  --color-neon-blue: #00f2ff;   --color-neon-purple: #bc13fe;
  --color-bg-dark: #050505;     --color-card-bg: rgba(15,15,15,0.8);
  --color-text-main: #e0e0e0;   --color-text-dim: #94a3b8;
  --font-mono: "JetBrains Mono", ...;
  ```

- 核心组件类：`.neon-card`（赛博朋克卡片，含四角装饰和悬停发光）、`.neon-glow`（霓虹蓝发光滤镜）
- 打印模式：`@media print` 将主题 token 重映射为黑白色，并重置所有 GSAP inline styles（`opacity:1!important` 等）

### 公共 UI 组件

`src/components/UI.tsx` 导出两个基础组件：
- `SectionHeader`：区块标题（图标 + 标题 + 分隔线）
- `GlassCard`：带 `useHoverScan` 的毛玻璃卡片容器
