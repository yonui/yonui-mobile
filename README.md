# @metaui/antd-mobile

Metaui 扩展包，适配 Antd Mobile

## 贡献代码

本项目基于 Typescript 语言，主要内容为对Antd Mobile的一层封装，添加上相关的Manifest信息。

开发时请遵守项目中的eslint规范和commitlint规范，按要求格式化代码和提交信息。

## 如何开发组件

### 为什么选择Typescript?

开发组件的时候，需要按照约定写符合规范的Manifest定义。但是其结构比较复杂，容易写错。

用Typescript的话，可以引入定义好的Manifest类型定义 ` import { ComponentManifest, Component } from '@metaui/extension' `，基于它的提示和相应的报错，实现轻松编写Manifest的目的。

另外示例组件是用Typescript开发的，相关流程会比Javascript测试更多一些，质量相对更可靠一些。

### 我不熟悉/喜欢Typescript，是否可以用Javascript ?

可以，Typescript只是多一层类型定义检查，直接用JS编写符合规范的代码也是可以的。

### 代码组织结构

默认将所有组件平铺在 *components* 目录下。

每添加一个组件，就需要在*components*目录中创建一个子目录，名称和组件名称保持一致。同时在组件目录中创建相应的 index.tsx，以及配套的样式文件等。

最后，需要在顶层目录的 index.ts 中导出这个组件。

下面看下示例代码：

#### index.tsx

```typescript
export { default as Button } from './components/button'
```

#### components/button/index.tsx

```typescript
import React from 'react'
import { Button } from 'antd-mobile'
import { ButtonProps } from 'antd-mobile/lib/button'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@metaui/extension'
interface CustomsButtonProps extends ButtonProps {
  name: string
}
// todo 未配置 style activeStyle
const manifest: ComponentManifest = {
  name: 'Button', // 自定义组件名称
  label: '按钮', // 自定义组件文本
  // description: '',//描述
  props: [
    {
      name: 'name',
      type: FieldTypes.string,
      defaultValue: '按钮',
      showDesign: true,
      designConfig: {
        type: EditTypes.Icon,
        isRequired: true,
        props: {},
        label: '名称'
      }
    },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'primary',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'primary', text: '主按钮' },
            { value: 'ghost', text: '透明' },
            { value: 'warning', text: '警告红' }
          ]
        },
        label: '按钮类型'
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'large',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'large', text: '大' },
            { value: 'small', text: '小' }
          ]
        },
        label: '按钮大小'
      }
    },
    {
      name: 'activeClassName',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '点击反馈的自定义类名'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '设置禁用'
      }
    },
    {
      name: 'inline',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '行内按钮'
      }
    },
    {
      name: 'loading',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '按钮载入状态'
      }
    },
    {
      name: 'icon',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Icon,
        isRequired: true,
        props: {},
        label: '图标'
      }
    },
    {
      name: 'prefixCls',
      type: FieldTypes.string,
      defaultValue: 'am-button',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: 'class前缀'
      }
    },
    {
      name: 'className',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: true,
        props: {},
        label: '样式类名'
      }
    }
  ],
  children: [], // 可放置哪些子组件,暂时只支持数组,不支持方法
  parent: []
}
export default class ButtonComponent implements Component<CustomsButtonProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <Button {...props}>{props.name}</Button>)
}
```

### 项目构建配置

现在的打包方式是基于webpack的方式。

打包时使用了一个工具 `@metaui/extension-packager`，内部集成了 *webpack*、*babel* 以及其它各种 webpack plugin 和 loader。

暂时不支持传入自定义配置。

如果开发的时候用到了 Antd/AntdMobile/MaterialUI 等UI组件库，又想实现按需加载。就需要使用 babel-plugin-import 或 ts-import-plugin。目前在webpack中已经集成了ts-import-plugin，只需要在 tsconfig.json 中设置 `module: 'esnext'` 即可实现。
