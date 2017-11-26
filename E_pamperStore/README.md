# 问题记录
    1. 初始化显示时出错:  
        Cannot read property 'xxx' of null    状态的初始值不是null, 只能是{}/[]
        Cannot read property 'xxx' of undefined    外围用v-if来判断(3层表达式)
    2. 创建好BScroll对象, 样式都生成了, 就是不能滑动
        原因: 创建BScroll对象时, 列表没有显示(状态已经更新, 但列表更新是异步的, 所有还有显示)
        解决: 在列表更新之后才创建BScroll对象: this.$nextTick(() => {创建BScroll对象})
    3. 在组件中, 非组件的回调函数中更新状态, 界面不变化
        原因: this不是组件对象, 
        解决: 箭头函数/bind()/ 外部用me保存this, 内部不使用this而使用me
    4. 更新状态数据, 对应的界面不变化
        原因: 一般方法给一个已有绑定的对象中添加一个新的属性, 这个属性没有数据绑定
        解决: this.$set(obj, 'xxx', value)才有数据绑定
    5. 点击添加购物项, 会添加多个
        原因: 创建了多个BScroll对象来管理同一个DOM元素
        解决: 只创建一个BScroll对象 
        单例对象: 
            在准备创建前, 先判断是否已经存在(创建过)
            只有当不存在时, 才去创建对象, 并保存起来


##1）一、页面分析
     1.第一天拿到项目时没什么头绪，只下载了脚手架，搭建了大致的路由组件和一些非路由组件.然后就没布局的开始写页面;
     这种情况导致的结果就是各种乱套，页面没有整体布局，没有考虑到适配的问题，没有兼容，也没有搞清楚路由的作用，还
     有异步请求也没做到位；
     针对这些问题之后有了一些总结：
     一、布局：页面是由4个主路由构成，分别是：首页、分类、购物车、我的E宠。我们主要做的是这一部分；
        首页的主路由下又分为7个子路由，由于时间关系，这些先不做
        *问题一：  路由嵌套
           App是应用的根组件，在它的内部引入头部组件和4个主组件；
           App内的布局：content 、 footer  （主要是参照iPhone6的屏幕来设置的）
              footer:是应用的底部，引入4个主路由，高度固定，固定定位到应用的底部
              content:是用来显示应用的内容区，高度也是固定的，并开启overflow: hidden；
           App的默认页面是主路由首页的第一个子路由   
           首页路由布局：header 、 content  （首页中默认的是第一个子路由）
              header:是一个非路由组件，主要是应用的头部。头部高度固定，定位到应用的顶部
                 首页的子路由要在 header 中引入，并在 content 中显示，（这里content也是要定高，并要开启
                 overflow:heidden的）；（<router-link to='路径'>首页</router-link>）
                 头部组件要实现的功能：点击切换城市、网站，点击搜索，即滑动、点击切换子路由（导航区）
                 头部布局中用到了伸缩盒模型，和定位：（在定位中若子元素开启绝对定位时，父元素要开启相对定位，当
                 然这并不是必须的，子元素开启绝对定位时，一个元素的 containing block （包含块）是由其最近的
                 position 为 absolute / relative / fixed 的祖先元素决定的。只要父级元素设了position并
                 且不是static）
              content:显示子路由组件；在content中写 （<router-view></router-view>）
              注册子路由组件时，第一个子路由要写空串（path: '',component: pages,） 表示页面默认的是
              第一个子路由组件。（子路由前不用加 / ，因为浏览器上的路径后自带有，如果误写会找不到页面）。
           首页子路由布局：       
               页面分为：轮播图、专栏区、每日限购、热门栏目、潮品视频、体验馆、品牌特卖、口碑评价、footer区
                  遇到的问题：1.适配、2.兼容
                  设置包含块不能定高定宽，这里宽度一般用的都是百分比来做的：              
                  1）.固定一个某些宽度，使用一个模式，加上少许的媒体查询方案
                      （整个页面宽高用px写死，让宽度自适应）— 有点蠢了
                  2）.flexbox布局，用弹性盒子的方式，达到响应式效果 
                      这个也是比较常用的，属于css3的内容，当然也存在着pc端某些浏览器不支持的问题。
                      这个对于结构简单点的页面来说，比rem会显得更加好用，大家可以去网上学习一样相关的知识，
                      现在的主流混合开发框架都支持使用flexbox布局。特别是react-native。
                  3）.使用百分比加媒体查询
                  4）.使用rem
                      这样的页面在移动端运行完全没有问题，我们首先通过获取移动设备的宽度来动态计算html的font-size的值。
                      通常我们将font-size的默认值设为100px,这样更利于换算，我们就可以把所有的px单位直接除以100.。来算出我们需要设置的值。
                      同样我们需要在头部写一段js来进行计算：
                      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
                      <script type="text/javascript">
                      new function (){
                       var _self = this;
                      _self.width = 640;//设置默认最大宽度
                      _self.fontSize = 100;//默认字体大小
                      _self.widthProportion = function(){
                      var p = (document.body&&
                        document.body.clientWidth ||
                        document.getElementsByTagName("html")[0].offsetWidth)/_self.width;
                        return p>1?1:p<0.5?0.5:p;
                      };
                      _self.changePage = function(){
                          document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
                      }
                      _self.changePage();
                      window.addEventListener("resize",function(){_self.changePage();},false);
                      };
                      </script>
                      三目运算大家可能用得不是很多
                      return p>1?1:p<0.5?0.5:p;
                      这句话的意思是把p的值控制在0.5到1之间，当然我们也可以让它大于1，这样就可以在pc端满屏显示了。
                      但是整个界面会被拉长，会变得很丑，所以我们选择不这样做。                        
                      用rem布局自适应是一件很爽的事情，可是它的缺点就是在pc端，某些低端浏览器会不支持，但在手机上跑是完全没压力的。                                                                                            
                  5）.用js动态获取移动端页面宽度，动态自适应
                      var match,
                       scale,
                      TARGET_WIDTH = 320;
                      if (match = navigator.userAgent.match(/Android (\d+\.\d+)/)) {
                      if (parseFloat(match[1]) < 4.4) {
                        if (TARGET_WIDTH == 320) TARGET_WIDTH++;
                      var scale = window.screen.width / TARGET_WIDTH;
                      document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + TARGET_WIDTH + ', initial-scale = ' + scale + ', target-densitydpi=device-dpi');
                         }
                      } else {
                       document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + TARGET_WIDTH);
                      }
                  6）.传统做法，页面跳转
                      想通过一种方法完全完美地适应各个平台，要遇到的坑还是挺多的，所以现在依然会有一些人采用两套代码的形式进行移动端适配
                      要想在pc端的项目可以直接达到适配IE6.。移动端页面又可以完美展现，你必须要维护两套代码。
                      我们可以在pc端主页面的头部加入这样一段js代码：
                      <script type="text/javascript">
                      function checkBrowser() {
                                 var sUserAgent = navigator.userAgent.toLowerCase();
                                 var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
                                 var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
                                 var bIsMidp = sUserAgent.match(/midp/i) == "midp";
                                 var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
                                 var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
                                 var bIsAndroid = sUserAgent.match(/android/i) == "android";
                                 var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
                                 var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                                 if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {                      
                                     location.replace("http://www.baidu.com");
                                    //如果是移动端，就打开百度
                                 }
                             }
                          checkBrowser();                        
                      </script>
                      页面中我们可以看到，如果是移动端，我们可以实现自动跳转页面，而且在头部运行的js并不会在加载完页面之后执行，
                      整个过程用户完全感觉不到，可以达到很好的用户体验 。
        *问题二： 对Vuex运用原理不熟，搞不清楚状况。
             模拟数据库：在mock中使用mockjs来模拟数据接口，先引入mock.js和模拟的数据库，然后映射路由接口：
                       Mock.mock('/api2/firstPage',{   ——api访问路径
                         code: 0,
                         data: data.firstPage.petFirstPage    ——mock提供的数据
                       })  *需要什么数据，访问什么路径接口，提供对应的数据
             数据由Vuex来托管，所有数据都在state中在Vuex组件中可以使用mapState([''])来获取数据，但初始化数据为空，需要在组件中使用
             this.$store.dispatch('')来通知action,告诉它需要什么数据，action操作get(commit)发送异步请求，得到数据之后将信息传递
             给mutation，mutation可以直接操作state，将新的数据赋值给state从而更新页面。
             在页面中获取动态数据时由于层级问题获取不到数据：
                做多层遍历，将每一层数组都要遍历出来，查找属性时要注意层级问题。  
        *问题三： 插件运用不熟练
                      
                      
                      
                      
                      
