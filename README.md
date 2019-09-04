<<<<<<< HEAD
# easy-book
This is a react practice~
=======
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


##问题总结以及解决办法：
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


>>>>>>> ea20d118ebc67707f096f987be4c6a30eba0e83f
