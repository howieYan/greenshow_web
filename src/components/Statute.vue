<template>
<div>
	 <div class="header" id="header">
        <ul class="row">
            <li class="back1" tapmode="hover" @click="closeFrame"></li>
            <li class="col textCenter5">
                章程
            </li>
            <li class="right_width" style="width:67px"></li>
        </ul>
    </div>
    <div class="padding_t64_height text_center" style="padding-top:50px;" v-html="data.constitution">
    </div>
</div>
</template>
<script>
import api from '../api'

export default {
  name: 'Statute',
  data () {
    return {
      name: 'StatuteV',
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
        let result = await api.getTeam(this.id)
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

