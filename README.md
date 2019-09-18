## easy-book


![](https://user-gold-cdn.xitu.io/2019/9/3/16cf515ba7409124?w=1200&h=674&f=jpeg&s=97221)

## 前言：
最近在学习react，脚手架是用官方推荐的create-react-app 创建的。想在react中使用sass与less，发现跟vue不同的是，并不是你安装依赖就可以使用的，还需要在webpack中进行配置，当然这是针对less来说的~  


## 使用Sass:

create-react-app 创建的 react项目，默认就是支持Sass的，使用只需要安装一下  node-sass 这个包即可使用


```
npm install node-sass -D
```
 
## 使用Less:

create-react-app 创建的 react项目，不支持less,所以我们要对webpack进行配置


**第一步：暴露webpack的配置**

react项目，webpack配置默认是隐藏的，要想修改，必须先把它暴露出来：


```
npm run eject
```


**第二步：更改webpack的配置**

打开<span style="background:#ccc"> config -> webpack.config.js </span>，


![](https://user-gold-cdn.xitu.io/2019/9/3/16cf685edb611644?w=911&h=257&f=png&s=40097)

如图也验证了create-react-app 创建的 react项目，默认就是支持Sass的,我们只需复制一份sass的相关配置，然后修改成less就好，这是第一处修改


![](https://user-gold-cdn.xitu.io/2019/9/3/16cf680c3f328ef6?w=999&h=727&f=png&s=86181)

如图，这是webpack默认的sass的配置，同样只需要复制一份，将sass改成less即可，修改如下图，这是第二处修改


![](https://user-gold-cdn.xitu.io/2019/9/3/16cf681f3393d0b7?w=954&h=627&f=png&s=66630)

两处修改完保存即可。

**第三步：安装依赖包**


```
npm install less less-loader --save 
```

**第四步：运行项目，即可使用less**


```
npm start
```


## 问题总结以及解决办法：

1、css样式污染问题

使用CSS Modules，详情见：![CSS Modules](https://segmentfault.com/a/1190000014722978)

2、图片的引用方式

react src里面引入图片的几种方式es6不支持在<img />标签内直接写图片的路径，
即<img src="../images/photo.png"/>

（1）import 方法：

```
import imgURL from './../images/photo.png';
<img src={imgURL } />
```
（2）require方法 这种方法需要注意的是，require里只能写字符串，不能写变量。

```
<img src={require('./../images/photo.png')} />
```

3、使用动画

安装：

```
npm install react-transition-group --save

```

引用：
```
import { CSSTransition } from 'react-transition-group'
```
用法：

```
<CSSTransition 
    in={this.state.focus}   //用于判断是否出现的状态
    timeout={2000}           //动画持续时间
    classNames="slide"   //className值，防止重复
>
    <div>mengyun 呀~</div>
</CSSTransition>

```

当动画执行时，会在作用动画的上一层下加几个class,本身也可以

.slide-enter{
    transition: all .2s ease-out;
}
.slide-enter-active{
    width: 280px;
}
.slide-exit{
    transition: all .2s ease-out;
}
.slide-exit-active{
    width: 160px;
}


4、避免无意义的axios请求，性能优化

本来搜索框点击一次，发一次请求，点击一次，发一次请求，但是实际上，点击第一次的时候发送请求，第二次点的时候我不希望再发送这种没有必要的请求了，那就在聚焦的时候，传一个list,如果list.length===0,那么就发送请求。


5、在jsx中的三元表达式中使用iconfont会有问题

错误写法：

```
<i className={item.sex===1?'iconfont woman':'iconfont man'}>{item.sex===1?'&#xe620;':'&#xe835;'}</i>

```

如果如上写的话，不会显示字体图标，会直接显示&#xe620;与&#xe835; 这样的字体编码 。

原因：字体编码后面四位是Unicode编码，想使用字符串来传递的话，只要将&#xe620;改成 \ue620即可

正确写法：

```
<i className={item.sex===1?'iconfont woman':'iconfont man'}>{item.sex===1?'\ue620':'\ue835'}</i>

```

6、当我在home组件中使用react-redux时，会报错，mapStateToProps重复定义了，然后我改了一个名字页面就可以正常显示了，子组件也用了同样的名字，但是还是不理解为什么不可以跟子组件一样的名字。

7、为了避免组件做无意义的渲染，我需要优化

因为数据都是放在store里面，只要有数据变化，render就会执行，比如List组件的数据改变，Writer组件的数据没有改变，但是页面的render函数也会被重新执行，所以需要一个生命周期函数来优化

```
shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content!==this.props.content){
        return false;
    }else{
        return true;
    }
}

```

