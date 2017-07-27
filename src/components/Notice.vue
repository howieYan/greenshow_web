<template>
<div>
	<div class="header" id="header">
        <ul class="row">
            <li class="back1" tapmode="hover" @click="closeFrame"></li>
            <li class="col textCenter5">
                {{ data.title }}
            </li>
            <li class="right_width" style="width:67px;"></li>
        </ul>
    </div>
    <div class="padding_t64_height" style="padding-top:50px;" v-html="data.description">
    </div>
</div>
</template>
<script>
import api from '../api'

export default {
  name: 'Notice',
  data () {
    return {
      name: 'NoticeV',
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
    async loadData () {
      try {
        this.data = {}
        let result = await api.getNews(this.id)
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
<style scoped>
@import '../css/resetd.css';
</style>
