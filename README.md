# 使用
* 编写业务代码，例如写了一个`t('xxx',{ns:'yyy'})`
* 执行 `yarn intl` ，会根据`i18next-scanner.config.js`配置自动生成key
* 填写对应值即可

## 注意
* 一般只用于生成`key`，无法做到自动删除无用的`key`，变更ns也不会删除原ns的key值
* 大型项目的运行效率待评估
* 更新`namespaces`修改`i18next-scanner.config.js`和`locales/index.ts即可`