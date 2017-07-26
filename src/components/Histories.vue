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
      <img class="width_height" :src="'/static/automobile.png'" alt="">
      <div class="div_img_jiantou">
          <img :src="'/static/jiantou.png'" alt="">
          <template v-for="(record, i) in data">
            <div class="section_title_height" @click="clickOpen(record.id)">
                <ul class="row">
                    <li class="border_radius">
                        <div></div>
                    </li>
                    <li class="col">
                        <div class="module_box" v-html="record.description">
                            <div class="triangle_border_left">

                            </div>

                        </div>
                    </li>
                </ul>
            </div>
            <div v-show="i + 1 < total" class="border1_height10px"></div>
          </template>
      </div>
  </div>
</div>
</template>
<script>
import api from '../api'

export default {
  name: 'Histories',
  data () {
    return {
      name: 'HistoriesV',
      pager: {
        page: 0,
        size: 10
      },
      total: 0,
      data: null
    }
  },

  computed: {
    id () {
      return this.$route.query.id
    }
  },

  created () {
    this.loadData()
  },

  methods: {
    async loadData () {
      try {
        this.total = 0
        this.data = []
        let result = await api.listHistory(this.id, 'team', this.pager.page, this.pager.size)
        console.debug(`%o`, result)
        this.total = api.isValid(result) && result.total ? result.total : 0
        this.data = api.isValid(result) && result.data ? result.data : []
      }
      catch (e) {
        console.error(e)
      }
    },

    closeFrame () {
      this.$router.go(-1)
    },

    clickOpen (id) {
      console.debug(`${this.name}.clickOpen: ${id}`)
      this.$router.push({ path: `/history/${id}` })
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

