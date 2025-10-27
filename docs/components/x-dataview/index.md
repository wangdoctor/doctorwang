---
title: x-dataview # 配置页面标题,同时生成 <title> 标签
description: 描述 # 配置页面简介，同时用于生成 <meta> 标签
keywords: [关键词] # 配置页面关键词，同时用于生成 <meta> 标签
toc: content
---

# x-dataview

> 组件的使用示例文档。

## 示例
- x-dataview 与 x-event 事件绑定
> 行按钮点击事件
```js
<x-dataview
    :row-actions="[
        { key:'showlist',name:'齐套检查', icon:'el-svg-list'},
    ]"
    event-source="showlist-source"
    ></x-dataview>

<x-event type="dataview" action-key="showlist" source="showlist-source"></x-event>
```

## API 接口

| 参数名 | 类型     | 必选 | 默认值 | 说明                         |
|-------|----------|------|--------|------------------------------|
| `id`   | `string` | ✓    | —      | 唯一标识符                   |
| `name` | `string` |      | `''`   | 名称                         |
| `age`  | `number` |      | `0`    | 年龄                         |


