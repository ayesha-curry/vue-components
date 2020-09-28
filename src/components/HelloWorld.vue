<template>
  <div class="hello">
    <h3>适用于企知道项目的组件开发</h3>
    <p>分页</p>
    <new-page :total="16" :currentPage="curPage" @change-current="handleChangeCurrent" @change-next="handleChangeNext" @change-prev="handleChangePrev"></new-page>
    <p>回到顶部</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 ;
}
p{
  color: #666;
  font-size: 28px;
}
</style>
