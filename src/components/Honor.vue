<template>
<div>
  <div class="header" id="header">
      <ul class="row">
          <li class="back1" tapmode="hover" @click="closeFrame"></li>
          <li class="col textCenter5">
              {{ data.event }}
          </li>
          <li class="right_width" style="width:67px;"></li>
      </ul>
  </div>
  <div class="padding_t64_height background_color" style="padding-top:50px;">
      <div class="background_color  colunm">
          <div class="width_image_width100 width_image_width100_image">
              <!-- <img class="" :src="'/static/automobile.png'" alt=""> -->
              <div class="bg_rahmen3">
                  <p class="width_b">
                      {{ data.event }}
                  </p>
                  <p class="width_b">
                      {{ data.title }}
                  </p>
                  <p class="width_b">
                      {{ data.description }}
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
  name: 'Honor',
  data () {
    return {
      name: 'HonorV',
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
        let result = await api.getHonor(this.id)
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

