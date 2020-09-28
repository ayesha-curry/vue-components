<template>
  <div class="wz-pagination" v-show="total > 0">
    <ul class="wz-pagination-center clearfix">
      <li v-if="current === 1" class="page-disable">
        <a href="javascript:void(0);">
          <i class="iconfont icon-zuojiantou"></i>
        </a>
      </li>
      <li v-else class="wz-pagination-li">
        <a @click="changePrev(current - 1)">
          <i class="iconfont icon-zuojiantou"></i>
        </a>
      </li>
      <template v-if="total <= 8 && current <= 5">
        <li class="wz-pagination-li" v-for="(item, idx) in total" :key="idx" :class="{ pageActive: current === item }">
          <a @click="changeCurrent(item)">{{ item }}</a>
        </li>
      </template>
      <template v-else>
        <!-- 首页始终展示的状态 -->
        <li class="wz-pagination-li" :class="{ pageActive: current === 1 }">
          <a @click="changeCurrent(1)">1</a>
        </li>
        <!-- 当前的页码大于5的时候 才出现向前省略的样式 -->
        <li class="wz-pagination-li" v-if="current >= 5">
          <a @click="changePrev">···</a>
        </li>
        <!-- 如果当前页码大于5和小于总数-2的时候 执行该规则 出现当前点击的前2位后2位的页码 -->
        <template v-if="current >= 5 && current < total - 2">
          <div @click="changeCurrentParent" class="ul-list-child">
            <div v-for="(it, idx) in total - 2" :key="idx + 2">
              <li class="wz-pagination-li" v-if="current - 2 === idx + 2" :class="{ pageActive: current === idx + 2 }">
                <a>{{ idx + 2 }}</a>
              </li>
              <li
                class="wz-pagination-li"
                v-else-if="current - 1 === idx + 2"
                :class="{ pageActive: current === idx + 2 }"
              >
                <a>{{ idx + 2 }}</a>
              </li>
              <li class="wz-pagination-li" v-else-if="current === idx + 2" :class="{ pageActive: current === idx + 2 }">
                <a>{{ idx + 2 }}</a>
              </li>
              <li
                class="wz-pagination-li"
                v-else-if="current + 1 === idx + 2"
                :class="{ pageActive: current === idx + 2 }"
              >
                <a>{{ idx + 2 }}</a>
              </li>
              <li
                class="wz-pagination-li"
                v-else-if="current + 2 === idx + 2"
                :class="{ pageActive: current === idx + 2 }"
              >
                <a>{{ idx + 2 }}</a>
              </li>
            </div>
          </div>
        </template>
        <!-- 如果当前页码小于5 执行该规则  出现1 2 3 4 5 6-->
        <template v-else-if="current < 5">
          <div @click="changeCurrentParent">
            <li class="wz-pagination-li" :class="{ pageActive: current === 2 }">
              <a>2</a>
            </li>
            <li class="wz-pagination-li" :class="{ pageActive: current === 3 }">
              <a>3</a>
            </li>
            <li class="wz-pagination-li" :class="{ pageActive: current === 4 }">
              <a>4</a>
            </li>
            <li class="wz-pagination-li" :class="{ pageActive: current === 5 }">
              <a>5</a>
            </li>
            <li v-show="total != 6" class="wz-pagination-li" :class="{ pageActive: current === 6 }">
              <a>6</a>
            </li>
          </div>
        </template>
        <!-- 如果当前页码小于等于总数-3的时候（例如一共10页，点击7 出现 56789 但是9和10之间不需要省略标志） 执行该规则 出现向后点击的页码-->
        <li class="wz-pagination-li" v-if="current < total - 3 && total - 6 > 1">
          <a @click="changeNext">···</a>
        </li>
        <!-- 如果当前页码大于等于总数-2的时候 执行该规则 出现向后点击的页码-->
        <template v-if="current >= total - 2">
          <div @click="changeCurrentParent">
            <li class="wz-pagination-li" :class="{ pageActive: current === total - 4 }">
              <a>{{ total - 4 }}</a>
            </li>
            <li class="wz-pagination-li" :class="{ pageActive: current === total - 3 }">
              <a>{{ total - 3 }}</a>
            </li>
            <li class="wz-pagination-li" :class="{ pageActive: current === total - 2 }">
              <a>{{ total - 2 }}</a>
            </li>
            <li class="wz-pagination-li" :class="{ pageActive: current === total - 1 }">
              <a>{{ total - 1 }}</a>
            </li>
          </div>
        </template>
        <li class="wz-pagination-li" :class="{ pageActive: current === total }">
          <a @click="changeCurrent(total)">{{ total }}</a>
        </li>
      </template>
      <li v-if="current === total" class="page-disable">
        <a href="javascript:void(0);">
          <i class="iconfont icon-youjiantou_huaban"></i>
        </a>
      </li>
      <li v-else class="wz-pagination-li">
        <a @click="changeNext(current + 1)">
          <i class="iconfont icon-youjiantou_huaban"></i>
        </a>
      </li>
      <li class="redirect-box">跳转至<input type="number" v-model="current" @keyup="changeCurrent(current)" />页</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: this.currentPage // 当前页码
    }
  },
  props: {
    // 总页数
    total: {
      type: Number,
      default: 0
    },
    // 当前页码
    currentPage: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    console.log(this.currentPage, 1523)
  },
  methods: {
    // 事件委托
    changeCurrentParent(e) {
      if (e.srcElement.tagName.toUpperCase() === 'A') {
        this.changeCurrent(e.srcElement.textContent)
      }
    },
    changeCurrent(cur) {
      // 防止在跳转输入框修改无值时出现异常
      if (!cur) {
        this.current = 1
      } else {
        this.current = parseInt(cur)
        this.$emit('change-current', this.current)
      }
    },
    changePrev(idx) {
      //  如果有参数 则是点击箭头 向前翻一页 没有参数 则是点击省略部分
      if (idx && idx > 1) {
        this.current = idx
      } else if (idx && idx === 1) {
        this.current = 1
      } else if (this.current - 5 > 0) {
        this.current -= 5
      } else {
        this.current = 1
      }
      this.$emit('change-prev', this.current)
    },
    changeNext(idx) {
      //  如果有参数 则是点击箭头 向后翻一页 没有参数 则是点击省略部分
      if (idx && idx < this.total) {
        this.current = idx
      } else if (idx && idx === this.total) {
        this.current = this.total
      } else if (this.current + 5 < this.total) {
        this.current += 5
      } else {
        this.current = this.total
      }
      this.$emit('change-next', this.current)
    }
  }
}
</script>
<style lang="scss" scoped>
// 分页器
.wz-pagination {
  max-width: 1200px;
  margin: 100px auto;
  min-height: 40px;
  > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .ul-list-child {
      display: flex;
      flex-direction: row;
    }
    .wz-pagination-li {
      color: #fff;
      width: 36px;
      height: 36px;
      line-height: 36px;
      display: block;
      float: left;
      background: #ffffff;
      border: 1px solid #eaeaea;
      border-radius: 4px;
      border-radius: 4px;
      margin-right: 5px;
      text-align: center;
      &:hover {
        background-color: #005aee;
        color: #fff;
        cursor: pointer;
        > a,
        > i {
          color: #fff;
        }
      }
      > a {
        font-size: 14px;
        color: #999;
        display: block;
        width: 36px;
        height: 36px;
        > i {
          font-size: 14px;
          color: #999;
        }
      }
    }
    .redirect-box {
      margin-left: 20px;
      font-size: 16px;
      color: #999;
      line-height: 36px;
      > input {
        display: inline-block;
        margin: 0 8px;
        width: 66px;
        height: 36px;
        line-height: 36px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 14px;
        color: #ccc;
        text-align: center;
      }
    }
    .page-disable {
      background-color: #dcdfe6;
      color: #fff;
      width: 36px;
      height: 36px;
      line-height: 36px;
      display: block;
      float: left;
      border: 1px solid #eaeaea;
      border-radius: 4px;
      border-radius: 4px;
      margin-right: 5px;
      text-align: center;
      > i,
      > a {
        cursor: not-allowed;
        color: #999;
      }
      &:hover {
        background-color: #fff;
        color: #005aee;
      }
    }
    .pageActive {
      background-color: #005aee;
      color: #fff;
      cursor: pointer;
      > a,
      > i {
        color: #fff;
      }
    }
  }
}
</style>
