---
order: 0
title: x-event # 配置页面标题,同时生成 <title> 标签
description: 描述 # 配置页面简介，同时用于生成 <meta> 标签
keywords: [关键词] # 配置页面关键词，同时用于生成 <meta> 标签
toc: content

---

# x-event

> 组件的使用示例文档。

## 示例

### 行按钮点击事件

- `x-dataview` 组件
```js
<x-dataview
	:row-actions="[
			{ key:'showlist',name:'齐套检查', icon:'el-svg-list'},
	]"
	event-source="showlist-source"
></x-dataview>

<x-event type="dataview" action-key="showlist" source="showlist-source" @event="showlist"></x-event>
```
- `x-databoard` 组件
```js
<template>
  <x-databoard
    :row-actions="[
        { key:'showlist',name:'齐套检查', icon:'el-svg-list'},
    ]"
    event-source="showlist-source"
  ></x-databoard>

  <x-event type="dataview" action-key="showlist" source="showlist-source"  @event="showlist"></x-event>
</template>
<!-- 脚本 -->
<script>
  export default {
    name: "e-digital-platform",
      // 方法
    methods: {
      showlist() {

      }  
  }
 <script> 
```
## API 接口

| **参数名** | **类型** | **必选** | **默认值** | **说明** |
|-------------|-----------|-----------|-------------|-----------|
| `type` | [`EventTypes`](#-eventtypes-枚举说明) | ✓ | — | **action：** 表示由用户施加的以向系统输入执行指令的操作。<br />**dataview：** 表示 UI 中所呈现的数据集发生状态改变的事件。 |
| `action-key` | `string` | ✓ | `''` | **操作的元数据** |
| `source` | `string` | ✗ | `` | **监听的事件源** |
| `path` | [`DataviewEventTypes`](#-datavieweventtypes-枚举说明) | ✗ | `` | **数据事件的类型** |
| `@event` | function | ✗ | `` | **事件：** function(){} |

---

### 🧩 EventTypes-枚举说明

`EventTypes` 是一个 **事件类型枚举**，用于区分不同的交互或数据触发来源。

```ts
enum EventTypes {
  /** 动作事件，例如点击、提交等 */
  action = 'action',

  /** 数据视图事件，例如表格、图表更新等 */
  dataview = 'dataview',
}
```
### 🧩 DataviewEventTypes 枚举说明

`DataviewEventTypes` 是一个 **数据集事件类型枚举**，用于 `x-event` 的 `path` 属性。  
它定义了数据视图（DataView）中各种与数据状态、交互行为相关的事件类型。

```ts
export enum DataviewEventTypes {
  /** 数据集通用操作事件 */
  datasetAction = 'datasetAction',

  /** 全选状态变化 */
  allSelectedChanged = 'allSelectedChanged',

  /** 当前项变化 */
  currentItemChanged = 'currentItemChanged',

  /** 单项选中状态变化 */
  itemSelectedChanged = 'itemSelectedChanged',

  /** 单项交互操作事件（如点击、双击等） */
  itemAction = 'itemAction',

  /** 进入编辑状态 */
  edit = 'edit',

  /** 刷新编辑状态 */
  flushEdit = 'flushEdit',

  /** 取消编辑 */
  cancelEdit = 'cancelEdit',

  /** 提交编辑 */
  submitEdit = 'submitEdit',

  /** 插入数据 */
  inserted = 'inserted',

  /** 更新数据 */
  updated = 'updated',

  /** 删除数据 */
  deleted = 'deleted',
}
```
