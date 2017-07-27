<template>
<div>
  <div class="header" id="header">
      <ul class="row">
          <li class="back1" tapmode="hover" @click="closeFrame"></li>
          <li class="col textCenter5">
              荣誉
          </li>
          <li class="right_width" style="width:67px;"></li>
      </ul>
  </div>
  <div class="padding_t64_height background_color" style="padding-top:50px;">
      <div class="background_color  colunm">
          <div class="width_image_width100 width_image_width100_image"  v-for="(record, i) in data" @click="clickOpen(record.id)">
              <img v-show="i % 2 === 0" class="" :src="'/static/automobile.png'" alt="">
              <div v-bind:class="(i % 2 === 0) ? 'bg_rahmen0' : 'bg_rahmen3'">
                  <p class="width_b">
                      {{ record.event }}
                  </p>
                  <p class="width_b">
                      {{ record.title }}
                  </p>
                  <p class="width_b">
                      {{ record.description }}
                  </p>
              </div>
          </div>
      </div>
  </div>
</div>
</template>
<script>
import api from '../api'

export default {
  name: 'Honors',
  data () {
    return {
      name: 'HonorsV',
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
        let result = await api.listHonor(this.id, 'team', this.pager.page, this.pager.size)
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
      this.$router.push({ path: `/honor/${id}` })
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

