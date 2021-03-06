# fj-components

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 一、分页组件
  ### 1. /src/components/Pagination/index.vue 是该组件的具体源码
  ### 2. 引用方式：
     a.把分页插件的源码拷贝到自己的项目的组件文件夹下
     b.首先在<script></script>区域内通过 import newPage from '@/components/Pagination/index'
       接着在components里面对组件进行注册,在data里记得要设置默认的curPage的值为1
       然后template里面使用
       <new-page :total="16" :currentPage="curPage" @change-current="handleChangeCurrent" @change-next="handleChangeNext" @change-prev="handleChangePrev"></new-page>
       最后再methods里面将tempalte里用到的事件进行注册
       handleChangeCurrent(val) {
          this.curPage = val
          console.log(val)
          // 可以在这里做一些自己的操作，例如修改请求服务器的入参，或者根据当前的页码打开新页面等等
        },
        handleChangePrev(val) {
          this.curPage = val
        },
        handleChangeNext(val) {
          this.curPage = val
        },
   ### 3.具体的引用代码如下所示
    <template>
      <div class="hello">
        <p>分页</p>
        <new-page :total="16" :currentPage="curPage" @change-current="handleChangeCurrent" @change-next="handleChangeNext" @change-prev="handleChangePrev"></new-page>
      </div>
    </template>

    <script>
    import newPage from '@/components/Pagination/index'
    export default {
      name: 'HelloWorld',
      props: {
        msg: String,
      },
      data() {
        return {
          curPage: 11,
        }
      },
      methods: {
        handleChangeCurrent(val) {
          this.curPage = val
          console.log(val)
        },
        handleChangePrev(val) {
          this.curPage = val
        },
        handleChangeNext(val) {
          this.curPage = val
        },
      },
      components: {
        newPage,
      },
    }
    </script>
  
  ### 前端菜菜的成品，一些急需定制自己的分页组件的童鞋拿去微调即可使用，亲测！目前！没毛病。
 
  ### 第一次上传自己的组件，很多不足的地方需要修正。还望路过的大神不吝赐教。
