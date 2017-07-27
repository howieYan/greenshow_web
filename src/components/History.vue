<template>
<div>
  <div class="header" id="header">
      <ul class="row">
          <li class="back1" tapmode="hover" @click="closeFrame"></li>
          <li class="col textCenter5">
              历史
          </li>
          <li class="right_width" style="width:67px;"></li>
      </ul>
  </div>
  <div class="padding_t64_height" style="padding-top:50px;">

      <div class="div_img_jiantou">
        日期： {{ formatTs(data.time) }}

        <div v-html="data.description"></div>
      </div>
  </div>
</div>
</template>
<script>
import api from '../api'
import * as lib from '../lib'

export default {
  name: 'History',
  data () {
    return {
      name: 'HistoryV',
      data: null
    }
  },

  computed: {
    id () {
      return this.$route.params.id
    }
  },

  created () {
    this.loadData()
  },

  methods: {
    formatTs: lib.formatTs,

    async loadData () {
      try {
        this.data = {}
        let result = await api.getHistory(this.id)
        console.debug(`%o`, result)
        this.data = api.isValid(result) && result.data ? result.data : {}
      }
      catch (e) {
        console.error(e)
      }
    },
    closeFrame () {
      this.$router.go(-1)
    }
  },

  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../css/resetd.css';
</style>

