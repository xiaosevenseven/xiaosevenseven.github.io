# Flutter

创建 Flutter 项目 flutter create hello_world
运行 flutter run


## 组件

- appBar 导航栏
- body 主界面
- center 居中组件
- container 页面元素容器，类似于 html 的 div， 通过这个 container 指定界面中的尺寸和边距
- column 纵向布局，即元素按纵向一次排列
- floatingActionButton 悬浮按钮

### MaterialApp 应用入口

```dart
MaterialApp(
    title: "应用标题",
    theme: ThemeData(
        brightness: dark,       // 主题模式--dark 和 light 两种模式
        primaryColor: "xxx",    // 主色调
        accentColor: "xxxx",    // 辅助色
        textTheme: "xxx",       // 文字主体
        fontFamily: "xxx",      // 字体族
    )
)
```

在应用中可以通过 Theme.of(context)获取当前主体。`Theme.of(context).textTheme.bodyText1`


### BottomNavigationBar 底部导航栏

```dart
BottomNavigationBar(
    items: [],          // 对应的页面组件数组
    currentIndex: 0,    // 默认显示第几个页面
    type: BottomNavigationBarType.fixed,        // 组件类型
    onYap: () => {}     // 点击后的事件
)
```


### 基础组件

### 布局类组件

- SizedBox：指定尺寸的容器。
- ConstraintedBox：带约束条件的容器，如限制最小最大宽度和高度。
- DecoratedBox：带装饰的容器，比如渐变色。
- RotatedBox：旋转一定角度的容器。


### 容器类组件

### 可滚动组件

### 功能型组件