# Module Federation Sample

基于`rsbuild`，简单探索`MF`的开发与使用

* `remote-app` 远程应用，类似于公共组件模块
* `host-app` 主应用，类似于容器应用，模拟主要以业务为主
* `shared` 公共工具类或共享类

## 开发

在`remote-app`和`host-app`中，执行`npm run dev`来启动开发模式。访问`http://localhost:3000`在`host-app`中查看`remote-app`
提供的公共组件。

### shared

`shared`做为公共工具类，可在`remote-app`和`host-app`中引入后，开启`eager`后，会将`shared`打包到`bundle`中

## 公共模块打包

* `remote-app`：执行`npm run build`，打包后的文件在`dist`目录下
* `host-app`：执行`npm run dev`，引用`remote-app`的公共模块，打包后的文件在`dist`目录下。访问`http://localhost:3000`
  查看打包后的效果。

## 生产发布

* `remote-app`：执行`npm run build`，打包后的文件在`dist`目录下。启动`remote-app`的服务，并生成可访问`js`的地址.
* `host-app`：执行`npm run build`，打包后的文件在`dist`目录下。启动`host-app`服务，查看效果，会看到
  `remote-app`的公共模块被引用、`shared`模块部分会被引入并使用.

# Module Federation Sample

Based on `rsbuild`, simply explore the development and use of `MF`

* `remote-app` remote application, similar to the public component module

* `host-app` main application, similar to the container application, the simulation is mainly based on business

## Development

In `remote-app` and `host-app`, execute `npm run dev` to start the development mode. Visit `http://localhost:3000` to view the public components provided by `remote-app` in `host-app`.

### shared

`shared` is a public tool class. After it is introduced in `remote-app` and `host-app`, `shared` will be packaged into `bundle` after `eager` is turned on

## Public module packaging

* `remote-app`: Execute `npm run build`, and the packaged files are in the `dist` directory

* `host-app`: Execute `npm run dev`, reference the public module of `remote-app`, and the packaged files are in the `dist` directory. Visit `http://localhost:3000`
  to view the packaged effect.

## Production release

* `remote-app`: Execute `npm run build`, and the packaged files are in the `dist` directory. Start the `remote-app` service and generate an address that can access `js`.

* `host-app`: Execute `npm run build`, and the packaged files are in the `dist` directory. Start the `host-app` service and check the effect. You will see that the public module of `remote-app` is referenced and the `shared` module part is imported and used.