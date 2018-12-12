# scroll

## 结构

>   如果滚动内容是list, 将其包裹一层dom, 因为scroll只处理第一个子元素
```html
<scroll-dom>
    <container>
        <item/>
    </container>
</scroll-dom>
```

## 已知的无法修复的bug？

+ 如果没有内容纯背景(包括图片背景)容器在滚动时，背景会闪动；添加内容后则不会。猜测是浏览器or css bug?

## 待修复bug

+ 滚动中点击会有微小的下沉效果
+ 改进动量计算方式
[x] 动态改变probeType

## 使用

+ snap使用
    + 单次滚动距离以stepX/Y优先