##### 1. 模块加载

`ES6` 之前，模块加载方案，最主要的有 `CommonJS` 和 `AMD` 两种。前者用于服务器，后者用于浏览器。

`ES6` 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。

`CommonJS` 和 `AMD` 模块，都只能在运行时确定这些东西（加载模块即加载模块的所有方法、属性，生成一个对象）。因为只有运行时才能得到这个对象，这种加载称为“运行时加载”，导致完全没办法在编译时做“静态优化”。

`ES6` 模块不是对象，而是通过`export`命令显式指定输出的代码，再通过`import`命令输入。这种加载称为“编译时加载”或者静态加载，即 `ES6` 可以在编译时就完成模块加载，效率要比 `CommonJS` 模块的加载方式高。

`ES6` 的模块自动采用严格模式，不管你有没有在模块头部加上`"use strict"`。

`import` 引入 `js` 文件时同步引入（代码位置先后有关）



##### 2. css属性防止选择

```
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
select:none;
```



##### 3. 页面定时跳转

```
<meta http-equiv="refresh" content="5;url=http://www.baidu.com" />
```



##### 4. 监听浏览器返回按钮事件

```
window.addEventListener("popstate", function(e) {
    alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能
}, false);
```



##### 5. css 常用样式

```
// 超过1行显示...
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;

// 超过3行显示...
overflow: hidden;
text-overflow: ellipsis;
display: box;
display: -moz-box;
display: -o-box;
display: -webkit-box;
line-clamp: 3; //显示10行
-webkit-line-clamp: 3; // 显示10行
-moz-line-clamp: 3; // 显示10行
-o-line-clamp: 3; // 显示10行
box-orient: vertical;
-webkit-box-orient: vertical;
-moz-box-orient: vertical;
-o-box-orient: vertical;

input{
  caret-color: #889aa4; // 光标颜色  
}

input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #889aa4;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #889aa4;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #889aa4;
}
input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #889aa4;
}

// chrome表单input获取焦点时，input会有一个记录之前填写过的文本的下拉列表式的东东，当你选择其中一个时，
// input文本框的背景会变成黄色的，这是由于chrome会默认给input加上input:-webkit-autofill私有属性，
// 然后对其赋予以下样式:
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: rgb(250, 255, 189);
    background-image: none;
    color: rgb(0, 0, 0);
}

white-space: pre-wrap; // 保留空格换行
word-break: break-all; // 允许在单词内换行

/*iphone点击高亮取消*/
* {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

```

#####  

##### 6. 兼容性

 `animation-play-state:paused;` 动画暂停在 `iphone` 上不适用；

`vue` 项目，单页面微信分享时，点击下一页，然后返回上一页在可能会出现分享混乱；



##### 7. 事件委托

利用冒泡的原理，把事件加到父级元素上来触发效果。

```
e.preventDefault(); //阻止默认事件

e.cancelBubble = false; //阻止冒泡  IE
e.stopPropagation(); //阻止冒泡
```



##### 8. cookie

客户端用来存储数据，既可以在客户端设置也可以在服务器端设置。`cookie` 会跟随任意`HTTP`请求一起发送。

优点：兼容性好

缺点：一是增加了网络流量；二则是它的数据容量有限，最多只能存储`4KB`的数据，浏览器之间各有不同；三是不安全。    

cookie是存于用户硬盘的一个文件，这个文件通常对应于一个域名，也就是说，cookie可以跨越一个域名下的多个网页，但不能跨越多个域名使用。

`Domain` 对「哪个域」有效，（可以包含子域，也可以不包含子域）

`Path` 指定域的「路径」，默认为"/"，表示指定域下的所有路径都能访问。

`Expries/Max-age`  在新的`http` 协议中已经使用 `max-age` 属性来取代 `expries`。`expries` 表示的是失效时间，准确讲是「时刻」，`max-age` 表示的是生效的「时间段」，以「秒」为单位。若 `max-age` 为正值，则表示 `cookie` 会在 `max-age` 秒后失效。如例四中设置"max-age=10800;"，也就是生效时间是3个小时，那么 `cookie` 将在三小时后失效。若 `max-age` 为负值，则 `cookie` 将在浏览器会话结束后失效，即 `session`，`max-age` 的默认值为-1。若 `max-age` 为0，则表示删除 `cookie`。

`Httponly` 属性是用来限制客户端脚本对`cookie`的访问。将 `cookie` 设置成 `httponly`可以减轻`xss`攻击的危害，防止`cookie`被窃取，以增强`cookie`的安全性。（由于`cookie`中可能存放身份验证信息，放在`cookie`中容易泄露）

`Secure` 指定后，cookie只有在使用 `SSL` 连接（如 `HTTPS` 请求）时才会发送到服务器。

服务器端设置

```
Set-Cookie: name=value[; expires=GMTDate][; domain=domain][; path=path][; secure]
```

客户端设置

```
document.cookie="test1=myCookie1;" 
document.cookie="test2=myCookie2;domain=.google.com.hk;path=/webhp"
document.cookie="test3=myCookie3;domain=.google.com.hk;expires=Sat, 04 Nov 2017 16:00:00 GMT;secure" 
document.cookie="test4=myCookie4;domain=.google.com.hk;max-age=10800;"
```

`cookie ` 新增 修改

```
document.cookie = "test1=newCookie; domain=.google.com.hk; max-age=3600; secure" document.cookie = "test1=newCookie; path=/webhp; max-age=3600; secure"
```

没有覆盖原来的`cookie`，而是新增了`cookie`。这也是修改`cookie`时需要注意的地方，可以修改原`cookie`的`expries`、`secure`属性，但不能修改`domain`、`path`属性。修改`cookie`时`domain`、`path`必须与原`cookie`保持一致。

```
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}
```



##### 9. `webpack` 的 `hash` 与 `chunkhash` 的区别

 `chunkhash` 值 是根据具体模块文件的内容计算所得的 `hash` 值，所以某个文件的改动只会影响它本身的hash指纹，不会影响其他文件。每个文件的hash值都不相同

`hash值` 是 `webpack` 计算新的 `compilation` 得出的 `hash` 值，配置的编译输出文件，所有的文件名都会使用相同的hash指纹。



##### 10. 阻止页面滚动

```
function stopMove(event) {
    event.preventDefault();
}

document.addEventListener('touchmove', stopMove, false);

document.removeEventListener("touchmove", stopMove, false);
```



##### 11. 上滑加载更多

```
/*
    window.pageYOffset; // 页面滚动的距离
    window.innerHeight; // 窗口显示区域的高度
    document.documentElement; // 元素 html 文档
    document.documentElement.scrollHeight; // 文档的总高度
*/

window.loadMoreTimer = null;

function loadMore() {
    loadMoreTimer && clearTimeout(loadMoreTimer);
    loadMoreTimer = setTimeout(function () {
        if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight) {
            console.log(1);
        }else if(){

        }
    }, 50);
}

window.addEventListener('scroll', loadMore, false);

window.removeEventListener("scroll", loadMore, false);
```



##### 12. 下拉刷新

```
// 触摸开始
window.addEventListener('touchstart', function (event) {
    var touch = event.targetTouches[0];
    touchstart = touch.pageY
}, false);


// 手指移动中记录移动位置
window.addEventListener('touchmove', function (event) {
    var touch = event.targetTouches[0];
    if (touch.pageY <= 500) {
        outerScroller.style.top = touch.pageY - touchstart + 'px';
    }
}, false);


// 手指松开回弹
window.addEventListener('touchend', function (event) {
    var top = scroll.offsetTop;
    console.log(top)
    if (top > 80) 回调函数;
    if (top > 0) {
        var time = setInterval(function () {
            outerScroller.style.top = outerScroller.offsetTop - 4 + 'px';
            if (outerScroller.offsetTop <= 0) clearInterval(time);
        }, 1)
    }
}, false);
```



