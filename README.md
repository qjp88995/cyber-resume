# cyber-resume

赛博朋克风格的个人在线简历，基于 React 19 + TypeScript + Vite 构建，配合 GSAP 动画系统，数据与视图完全解耦，修改简历只需编辑一个数据文件。

## 技术栈

| 分类 | 技术 |
|------|------|
| 框架 | React 19 + TypeScript |
| 构建工具 | Vite 7 |
| 样式 | Tailwind CSS v4 |
| 动画 | GSAP 3 + @gsap/react |
| 图标 | lucide-react |
| 包管理 | pnpm |
| 代码规范 | ESLint + Prettier + husky |

## 项目结构

```
cyber-resume/
├── public/               # 静态资源
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Hero 区域（姓名、职位、联系方式）
│   │   ├── CoreModules.tsx     # 个人优势模块
│   │   ├── Experience.tsx      # 工作经历时间线
│   │   ├── Projects.tsx        # 项目经历
│   │   ├── EducationAwards.tsx # 教育背景与荣誉
│   │   ├── Footer.tsx          # 页脚
│   │   └── UI.tsx              # 通用 UI 组件（SectionHeader、GlassCard）
│   ├── hooks/
│   │   ├── useScrollReveal.ts  # 元素入场动画
│   │   ├── useTypewriter.ts    # 打字机效果
│   │   ├── useHoverScan.ts     # 卡片悬停扫描光束
│   │   └── useTimelineDraw.ts  # 时间轴序列入场动画
│   ├── data.ts           # 简历数据（唯一需要修改的文件）
│   ├── types.ts          # TypeScript 类型定义
│   ├── App.tsx           # 根组件
│   ├── index.css         # 全局样式与主题 token
│   └── main.tsx          # 入口文件
├── eslint.config.js
├── .prettierrc
├── vite.config.ts
└── package.json
```

## 快速开始

```bash
pnpm install
pnpm dev
```

## 常用命令

```bash
pnpm dev        # 启动本地开发服务器
pnpm build      # TypeScript 类型检查 + Vite 构建
pnpm preview    # 预览构建产物
pnpm lint       # ESLint 检查
pnpm lint:fix   # ESLint 自动修复
pnpm format     # Prettier 格式化 src/
```

## 定制简历内容

所有简历数据集中在 `src/data.ts`，按以下结构填写：

```ts
export const resumeData: ResumeData = {
  name: "你的名字",
  title: "职位头衔",
  avatar: "",          // 留空则不显示头像
  info: {
    phone: "手机号",
    email: "邮箱",
    targetCity: "期望城市",
    experience: "N年研发经验",
    gender: "",        // 留空则隐藏
    age: "",           // 留空则隐藏
    hometown: "",      // 留空则隐藏
  },
  social: {
    github: "https://github.com/your-username",
  },
  advantages: [/* 个人优势列表 */],
  workExperience: [/* 工作经历列表 */],
  projects: [/* 项目经历列表 */],
  education: [/* 教育经历列表 */],
  awards: [/* 荣誉奖项列表 */],
};
```

完整类型定义见 `src/types.ts`。

## 页面结构

| 区块 | 内容 |
|------|------|
| Header | 姓名、职位、联系方式、GitHub 链接、个人优势标签 |
| CoreModules | 个人核心优势详细说明 |
| Experience | 工作经历时间线 |
| Projects | 项目经历（含技术栈、难点突破、业务成果） |
| EducationAwards | 教育背景 + 荣誉奖项 |
| Footer | 版权信息 |

## 动画系统

动画逻辑封装在 `src/hooks/` 下，组件内不直接调用 GSAP：

| Hook | 用途 |
|------|------|
| `useScrollReveal` | 元素入场动画（`y:40→0` + blur），自动跳过打印模式 |
| `useTypewriter` | 打字机文字逐字显示效果 |
| `useHoverScan` | 卡片悬停时的扫描光束效果 |
| `useTimelineDraw` | 时间轴序列动画（竖线 → 节点 → 条目），自动跳过打印模式 |

打印兼容由三层机制共同保证：hook 内检测 `matchMedia("print")` 提前返回、`App.tsx` 的 `beforeprint` 监听器将动画推进到终态、`index.css` 的 `@media print` 强制覆盖 GSAP 残留 inline styles。

## 代码规范

提交前自动执行（由 husky + lint-staged 驱动）：

- **Prettier**：格式化暂存的 `*.{ts,tsx,css,json}` 文件
- **ESLint**：检查暂存的 `*.{ts,tsx}` 文件，0 警告容忍

导入排序规则（`simple-import-sort`）：`React → 三方库 → @/ 内部路径 → 相对路径 → CSS`
