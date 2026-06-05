import type { ResumeData } from '@/types';

export const resumeData: ResumeData = {
  name: '秦嘉鹏 (Jiapeng Qin)',
  title: 'AI 全栈工程师 / 大前端',
  avatar: '',
  info: {
    gender: '', // 留空隐藏
    age: '', // 留空隐藏
    hometown: '', // 留空隐藏
    phone: '15370035363',
    email: '759848795@qq.com',
    targetCity: '不限 / 远程优先',
    experience: '10年研发与架构经验',
  },
  social: {
    github: 'https://github.com/qjp88995',
  },
  advantages: [
    'AI 工程化：独立设计并落地多 Provider 统一适配层（OpenAI / Anthropic / Gemini / DeepSeek / Qwen / Zhipu / Moonshot 共 7 家）、MCP 全链路集成、LLM-as-a-Judge 自动化评测与 Agent 全生命周期管理，已交付 3 个生产就绪的 AI 工程项目。',
    '现代全栈：以 React 19 / Next.js 16 / NestJS 11 / Prisma + PostgreSQL 为主力技术栈，能独立闭环从架构设计、后端服务到前端交付的全链路系统。',
    '工程化与基建：熟练运用 Docker、Turborepo Monorepo、GitHub Actions CI/CD 及独立设计系统包，具备单元测试、可观测性（OpenTelemetry）与 Linux 环境调优能力。',
    '自驱与协作：极客精神驱动，长期主动跟进并落地前沿技术栈，跨团队沟通顺畅、抗压、对交付高度负责。',
  ],
  education: [
    {
      school: '太原理工大学',
      major: '软件工程',
      degree: '本科',
      period: '2012 - 2016',
    },
  ],
  awards: ['荣获2022年天华优秀员工'],
  workExperience: [
    {
      company: '独立开发 · AI 工程自主研发',
      title: 'AI 全栈工程师（自由职业）',
      period: '2025.05 - 至今',
      description: [
        'All-in AI 工程方向，独立自主研发并开源 3 个 AI 工程项目（Agent-X / unfinished-symphony / ai-model-evaluator），覆盖 AI Agent 平台、AI 对话式应用与大模型评测，作为能力证据。',
        '独立承接 AI / 全栈技术咨询与研发项目（涉及客户保密，细节不便展示）。',
        '持续跟进并落地 React 19 / Next.js 16 / Tailwind v4 / MCP / Vercel AI SDK 等最新技术栈。',
      ],
    },
    {
      company: '南京杰游互联网服务有限公司',
      title: '前端研发工程师',
      period: '2024.12 - 2025.05',
      description: [
        '聚焦快应用广告新业务线的前端开发与基础工具链建设。',
        '基于 Node.js + Webpack 构建广告接入工具集，降低应用端接入成本。',
        '在官方基础上完善快应用类型标注库及底层打包工具。',
      ],
    },
    {
      company: '上海天华建筑设计有限公司',
      title: '资深全栈开发工程师',
      period: '2020.04 - 2024.04',
      description: [
        '主导流程与信息化部门（涵盖产品、软件、硬件及数据分析）的核心基建与业务系统研发。',
        '参与企业级数字化转型，独立负责从前端架构到后端服务链路的全栈重构与交付。',
        '以 Ruby on Rails 后端 + Webpack/React 前端为主，交付项目全生命周期管理平台、聚合工作台等多个核心业务系统。',
      ],
    },
    {
      company: '上海多棱镜网络科技有限公司',
      title: '高级前端开发工程师',
      period: '2017.02 - 2019.12',
      description: [
        '深度参与产品需求迭代，负责跨平台 Web 应用的交付与长期维护。',
        '独立闭环业务模块，涵盖数据库设计、服务端接口开发与前端联调部署。',
        '对接测试与设计验收流程，优化上线部署规范，保障系统稳定运行。',
      ],
    },
    {
      company: '掌心网络科技(苏州)有限公司',
      title: '产品运营',
      period: '2016.02 - 2016.11',
      description: [
        '主导公司品牌宣传与网站运营，建立产品体验的数据反馈闭环。',
        '开展市场调研与运营数据分析，输出产品优化方案。',
      ],
    },
  ],
  projects: [
    {
      name: 'Agent-X - 自托管 AI Agent 发布与管理平台',
      role: '全栈架构师 / AI 工程化',
      period: '2026.03 - 至今',
      description:
        '自托管的 AI Agent 全生命周期管理平台。支持多 Provider 统一接入、MCP 工具集成、Skills 市场、in-browser 工作区 IDE 及 OpenAI 兼容 API；Agent 具备完整的版本管理与 Share Token 发布机制，实现灵活配置与安全对外共享。',
      techStack: [
        'NestJS 11',
        'Prisma v7',
        'PostgreSQL 16',
        'React 19',
        'Vite 6',
        'Tailwind CSS v4',
        'Radix UI',
        'CVA',
        'Vercel AI SDK',
        'Monaco Editor',
        'Zustand v5',
        'TanStack Query v5',
        'Storybook',
        'Docker',
        'Turborepo',
      ],
      difficulties: [
        '多 Provider 统一适配层 + Thinking/Reasoning 跨厂商适配：抹平 OpenAI、Anthropic、Gemini、DeepSeek、Qwen、Zhipu、Moonshot 共 7 家厂商 API 协议差异；各厂商推理模式配置方式完全异构（Anthropic/Moonshot 用 budgetTokens、Qwen 用 enableThinking+thinkingBudget、Gemini 用 thinkingConfig），统一封装为单一调用接口。',
        'MCP 协议全链路集成：完整实现 STDIO、SSE、Streamable HTTP 三种 MCP Server 传输协议，打通 Marketplace 与自定义服务器的动态挂载与热测试能力。',
        'AI 驱动的工作区 IDE：基于 Monaco / CodeMirror 构建 in-browser 文件编辑器；内置 17 个工作区工具（含 writeFiles 原子批量写入、patchFile 局部更新、路径遍历防护），打通自然语言到文件系统操作的完整链路。',
        'OpenAI 兼容 API 网关：将任意发布态 Agent 暴露为标准 /v1/chat/completions 接口，配合 sk-agx- 形式的 API Key 鉴权体系，实现与第三方工具及自有业务的无缝对接。',
        '独立设计系统包（@agent-x/design）：基于 Radix UI + CVA + Tailwind v4 抽取独立组件库，按 primitives/data/feedback/navigation/settings/layout/chat/workspace 分类，配套 Storybook，实现 UI 与业务的彻底解耦。',
        '安全架构设计：采用 AES-256-GCM 加密 Provider Key 密文存储与内存态安全解密；JWT 双 Token（7d/30d）机制配合刷新策略，防范全链路凭证泄露风险。',
        '工程化与质量保障：Turborepo Monorepo 组织 server/web/design 多包；52 个单元测试覆盖核心服务，集成 OpenTelemetry 遥测追踪与 GitHub Actions Docker 自动构建发布流水线。',
      ],
      highlights: [],
      url: 'https://agent-x.qinjiapeng.com',
      github: 'https://github.com/qjp88995/agent-x',
      achievements:
        '打通从多 Provider 接入、Agent 配置发布到 OpenAI 兼容对外服务的完整工程链路；后端 24 个服务模块、前端 100+ 组件，构建生产就绪的自托管 AI Agent 基础设施。',
    },
    {
      name: 'unfinished-symphony - AI 对话式智能作品集管理平台',
      role: '全栈架构师 / AI 工程化',
      period: '2026.02 - 至今',
      description:
        '融合 AI 对话管理与公共展示的全栈作品集平台。通过自然语言对话实现项目的智能 CRUD 管理，支持多模型接入、聊天持久化、上下文压缩及富文本渲染，并提供深浅主题切换的公共展示界面。',
      techStack: [
        'Next.js 16',
        'React 19',
        'Tailwind CSS v4',
        'Prisma',
        'SQLite',
        'Vercel AI SDK',
        'Tiptap 3',
        'shadcn/ui',
        'Docker',
      ],
      difficulties: [
        'AI 工具链工程化：基于 Vercel AI SDK v6 实现 11 个 Function Calling 工具定义与执行引擎，支持项目批量操作、@mentions 上下文注入及图片粘贴自动上传，打通自然语言到数据库操作的完整链路。',
        '流式对话与持久化：实现基于 SSE 的 AI 流式响应、SQLite 聊天记录持久化及智能上下文压缩策略（70% Token 窗口阈值自动触发），保障长对话场景的连贯体验。',
        '富内容渲染引擎：集成 React Markdown、KaTeX 数学公式、代码高亮、AI 思维过程可视化及工具调用追踪，构建多维度对话展示能力。',
        '安全与部署架构：采用 bcrypt + iron-session 加密会话体系、Next.js 16 中间件路由级鉴权，配合多阶段 Docker 构建与非 root 运行策略，实现生产级部署。',
      ],
      highlights: [],
      url: 'https://www.qinjiapeng.cn/',
      github: 'https://github.com/qjp88995/unfinished-symphony',
      achievements:
        '作为个人作品集的智能管理中枢，实现从手动编辑到 AI 对话驱动的作品管理范式升级。',
    },
    {
      name: 'ai-model-evaluator - 大模型管理与 LLM-as-a-Judge 评测矩阵',
      role: '全栈架构师 / AI 工程化',
      period: '2024.12 - 至今',
      description:
        '为应对大模型落地中的黑盒与成本管控挑战，自主研发的工程化评测平台。实现多路异构模型并行评测、自动化评分与密钥安全治理。',
      techStack: [
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'React 18',
        'Vite',
        'SSE',
        'Docker',
      ],
      difficulties: [
        '基于 SSE 的异步多路并发流处理：解决 NestJS 在高吞吐分发下的连接状态与幂等更新难题，支持 4 路大模型并发输出。',
        '异构协议适配与 Token 监测：采用适配器模式抹平 OpenAI、Anthropic、智谱等 10+ 厂商 API 差异，实现低损耗的实时耗时分析与 Token 统计。',
        'LLM-as-a-Judge 自动化度量：自建 Meta-Prompt 评分引擎，将高级模型改造为“判分专家”，输出可闭环对比的打分 (Score) 与语义反馈 (Comment)。',
        '安全设计：采用 AES-256-GCM 加密实现 API Key 密文存储与内存态安全解密，防范全链路泄露风险。',
      ],
      highlights: [],
      url: 'https://ai-model-eval.qinjiapeng.com/',
      github: 'https://github.com/qjp88995/ai-model-evaluator',
      achievements:
        '作为个人及团队大模型选型基石，降低异构模型接入成本，为业务侧模型评估积累客观数据支撑。',
    },
    {
      name: '天华企业级系统研发（RoR / React 全栈）',
      role: '全栈核心开发 / 前端负责人',
      period: '2020.04 - 2024.04',
      description:
        '主导集团流程与信息化部门的核心业务系统研发，覆盖项目全生命周期管理、外部合作商协同与员工效能聚合三大平台。',
      techStack: [
        'Ruby on Rails',
        'React',
        'Angular',
        'MySQL',
        'Redis',
        'Headless Browser',
        'SSE',
      ],
      difficulties: [
        'PLM 项目全生命周期管理平台：基于 OpenProject 二次开发，分离 1.5GB 超大型历史 Git 仓库，攻克 Ruby 弱类型与大量元编程下的重构难题；设计基于 Promise 的异步任务调度队列解决人员创建接口高并发瓶颈；用 exceljs 处理十万级人员与项目批量导出，在上海、深圳等分部全面铺开。',
        '协同打件平台：管理 2 万+ 外部合作商、超 1.5TB 设计成果的归档审计与流转。自研前端分片上传、断点续传与 MD5 指纹校验重传；从 0 到 1 设计多角色（分包/内部/组长）权限控制树与审批引擎；用 Headless Browser 实现无感知画图反馈截图，累计处理成果文件 15000+。',
        'ITH 聚合工作台：集成企业微信、Outlook 日历与 PLM 生产数据的数字化办公入口，对接 Exchange/WeCom 日历协议并研发日程智能分类；引入 SSE 实现高频消息实时推送；通过域控策略作为全集团默认主页，服务数千名设计与管理人员。',
      ],
      highlights: [],
      achievements:
        '支撑集团从立项、协同到日常办公的核心业务链路，多套系统作为集团级基础设施长期高频运行。',
    },
    {
      name: '天华前端资产平台与工具链',
      role: '前端架构 / 全栈研发',
      period: '2021.05 - 2024.01',
      description: '围绕设计资产管理与内部生态搭建的多个前端平台与工具链。',
      techStack: [
        'React',
        'SolidJS',
        'NestJS',
        'Webpack 5',
        'Ruby on Rails',
        'Ruby C-API',
      ],
      difficulties: [
        'TH-Facade 住宅立面资源库：承载数万件渲染图、SU 模型与材料贴图的设计资产云平台，针对海量高清图片做瀑布流加载性能调优并重构可复用业务组件库。',
        '线上生态展厅引擎：首次以无虚拟 DOM 的 SolidJS 构建移动端扫码导览引擎，破解微信/特种设备多端视频自动播放限制，作为大型会展电子导览基础设施落地。',
        '内部生态系统：基于 Java + Vue 的天问内网全文搜索（十万级数据流式同步）与基于 RoR 二次重构的甜酸内部论坛（打通域单点登录、阅后即焚/匿名特性），低成本承接腾讯乐享下线后的内部讨论场景。',
        'SketchUp 插件与工具拓展：运用 Ruby C-API 开发 SU 模型内批量导出立体材料的插件，优化数万级图元轮询性能；另开发联审平台短信转发安卓集线器（心跳检测/防误触/电量侦测），解决资质账号换绑难题。',
      ],
      highlights: [],
      achievements:
        '提升内部数十个业务组的设计资产检索与流转效率，并补齐多处内部工具与生态空白。',
    },
  ],
};
