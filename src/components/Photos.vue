<template>
<div>
  <div class="header" id="header">
      <ul class="row">
          <li class="back1" tapmode="hover" @click="closeFrame"></li>
          <li class="col textCenter5">
              相册
          </li>
          <li class="right_width" style="width:67px;"></li>
      </ul>
  </div>
  <div class="padding_t64_height" id="body" style="padding-top:50px;">
      <div class="width_150px" v-for="record in data" @click="clickOpen(record.id)">
          <img :src="record.pic ? record.pic : '/static/automobile.png'" alt="">
          <p>{{ record.title }}</p>
      </div>
  </div>
</div>
</template>
<script>
import api from '../api'

export default {
  name: 'Photos',
  data () {
    return {
      name: 'PhotosV',
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
        let result = await api.listAlbum(this.id, 'team', this.pager.page, this.pager.size)
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
      this.$router.push({ path: `/photo/${id}` })
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

