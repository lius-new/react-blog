## REACT BLOG

blog-frontend和blog-backend共同组成博客项目, 该项目前端页面以大致完成且目录结构清晰,数据都是通过mockjs模拟的. 后端完成了大致的框架，但是没有具体的实施. 

### blog-frontend

使用react+vite完成构建, 前端目录结果

#### 目录结构

```
src/
├─main.jsx                                  # 入口文件
├─utils
|   └util.js                                # 工具
├─styles
|   ├─index.scss                            # 全局css
|   └reset.scss                             # reset 浏览器
├─routes
|   ├─index.jsx                             # router的入口文件
|   ├─root                                  # 参考的`react-router-dom`官方的列子,创建的组件
|   |  ├─index.jsx
|   |  └root.module.scss
├─pages
|   ├─index.js                              # 将所有的页面export
|   ├─tags                                  # tags页面
|   |  ├─index.jsx
|   |  └tags.module.scss
|   ├─home                                  # home页面
|   |  ├─home.module.scss
|   |  └index.jsx
|   ├─error-page                            # 错误页面
|   |     ├─error-page.module.scss
|   |     └index.jsx
|   ├─categories                            # categories页面
|   |     ├─categories.module.scss
|   |     └index.jsx
|   ├─archives                              # archvies页面
|   |    ├─archives.module.scss
|   |    └index.jsx
|   ├─about                                 # about页面
|   |   ├─about.module.scss
|   |   └index.jsx
├─mock                                      # mock数据
|  └index.js
├─contains                                  # 与页面相关的组件
|    ├─index.js
|    ├─layout.jsx                           # 布局组件
|    ├─header                               # header组件
|    ├─footer                               # footer组件
|    ├─blog                                 # blog组件
├─components                                # 全局通用组件
|     ├─index.js
|     ├─theme                               # 主题
|     ├─positive-seventeen              
|     ├─menu-icon                           # 菜单的icon
|     ├─drawer                              # 抽屉组件
|     ├─blog-modal                          # 博客的modal
├─assets
|   ├─react.svg
|   ├─fonts
|   |   ├─Roboto                            # 字体
```

#### 前端使用

```
cd blog-frontend

npm install 

npm run dev
```

#### [在线查看](https://react-blog-lius.netlify.app/)


### blog-backend

待玩车
