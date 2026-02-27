# cyber-resume

赛博朋克风格的个人在线简历，基于 React + TypeScript + Vite 构建，配合 GSAP 滚动动画，数据与视图完全解耦，修改简历只需编辑一个数据文件。

## 技术栈

| 分类 | 技术 |
|------|------|
| 框架 | React 19 + TypeScript |
| 构建工具 | Vite 7 |
| 样式 | Tailwind CSS v4 |
| 动画 | GSAP 3 + ScrollTrigger |
| 图标 | lucide-react |
| 包管理 | pnpm |

## 项目结构

```
cyber-resume/
├── public/               # 静态资源
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Hero 区域（姓名、职位、联系方式）
│   │   ├── CoreModules.tsx   # 个人优势模块
│   │   ├── Experience.tsx    # 工作经历
│   │   ├── Projects.tsx      # 项目经历
│   │   ├── EducationAwards.tsx # 教育背景与荣誉
│   │   ├── Footer.tsx        # 页脚
│   │   └── UI.tsx            # 通用 UI 组件
│   ├── data.ts           # 简历数据（唯一需要修改的文件）
│   ├── types.ts          # TypeScript 类型定义
│   ├── App.tsx           # 根组件，注册 GSAP ScrollTrigger 动画
│   ├── index.css         # 全局样式
│   └── main.tsx          # 入口文件
├── resume.md             # Markdown 格式简历（备用）
├── index.html
├── vite.config.ts
└── package.json
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览构建产物

```bash
pnpm preview
```

## 定制简历内容

所有简历数据集中在 `src/data.ts` 文件中，按以下结构填写：

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

## 动画说明

滚动动画通过 GSAP `ScrollTrigger.batch` 实现。所有需要入场动画的元素添加 `.gsap-fade-up` class，进入视口时触发 `y: 40 → 0` + `blur(10px) → 0` 的淡入效果，仅触发一次。
