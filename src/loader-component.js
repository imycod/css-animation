import commonComponents from './components/loader-components.js'
// import elementComponents from './element-plus-components'


import store from './store/index.js'

const customComponents = [
    // 便于自动注册每一个自定义组件
    ...commonComponents
]

export default function installComponents(app) {
    app.use(store)

    // 按需注册elementPlus的组件
    //   elementComponents.forEach((component) => {
    //     app.use(component)
    //   })

    // 注册自定义组件
    customComponents.forEach((component) => {
        app.component(component.name, component.sfc)
    })
}