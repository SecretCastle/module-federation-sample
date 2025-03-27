# Module Federation Sample

基于`rsbuild`，简单探索`MF`的开发与使用

* `remote-app` 远程应用，类似于公共组件模块
* `host-app` 主应用，类似于容器应用，模拟主要以业务为主

## 开发

在`remote-app`和`host-app`中，执行`npm run dev`来启动开发模式。访问`http://localhost:3000`在`host-app`中查看`remote-app`
提供的公共组件。

## 公共模块打包

* `remote-app`：执行`npm run build`，打包后的文件在`dist`目录下
* `host-app`：执行`npm run dev`，引用`remote-app`的公共模块，打包后的文件在`dist`目录下。访问`http://localhost:3000`
  查看打包后的效果。

# Module Federation Sample

Based on `rsbuild`, simply explore the development and use of `MF`

* `remote-app` remote application, similar to the public component module

* `host-app` main application, similar to the container application, the simulation is mainly based on business

## Development

In `remote-app` and `host-app`, execute `npm run dev` to start the development mode. Visit `http://localhost:3000` to
view the public components provided by `remote-app` in `host-app`.

## Public module packaging

* `remote-app`: Execute `npm run build`, the packaged files are in the `dist` directory

* `host-app`: Execute `npm run dev`, reference the public module of `remote-app`, and the packaged files are in the
  `dist` directory. Visit `http://localhost:3000` to view the packaging effect.