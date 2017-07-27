<template>
<div>
	<div class="header" id="header">
        <ul class="row">
            <li class="back1" tapmode="hover" @click="closeFrame"></li>
            <li class="col textCenter5">
                公告
            </li>
            <li class="right_width" style="width:67px;"></li>
        </ul>
    </div>
    <div class="padding_t64_height" style="padding-top:50px;">
        <ul class="row height50" v-for="record in data" @click="clickOpen(record.id)">
            <li class="border_radius line_height_center">
                <b></b>
            </li>
            <li class="col">
                {{ record.title }}
            </li>
            <li v-show="false" class="">
                <img :src="'/static/signup_image.png'" alt="">
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import api from '../api'

export default {
  name: 'Notices',
  data () {
    return {
      name: 'NoticesV',
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
        let result = await api.listNews(this.id, 'team', this.pager.page, this.pager.size)
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
      this.$router.push({ path: `/notice/${id}` })
    }
  },

  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/resetd.css';
</style>
