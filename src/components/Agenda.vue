<template>
<div>
	<div>
		<div class="header" id="header">
		    <ul class="row">
		        <li class="back1" tapmode="hover" @click="closeFrame"></li>
		        <li class="col textCenter5">
		            赛程
		        </li>
		        <li class="right_width" style="width:67px;"></li>
		    </ul>
		</div>
		<div class="padding_t64_height" style="padding-top:50px;">
		    <div class="line_height60_bottom1" v-for="record in data" @click="clickEvent(record.id)">
		        <ul class="row">
		            <li class="col padding_left20px">{{ record.name }}</li>
		            <li class="padding_right20px">{{ record.clubName }}</li>
		        </ul>
		        <ul class="padding_left20px padding_right20px_li">
		            <li class="">
		                {{ formatTs(record.startDate, 'YYYY年MM月DD日') }}
		            </li>
		            <li class="">
                    {{ formatTs(record.startDate, 'ddd') }}
		            </li>
		            <li class="">
		                {{ formatTs(record.startDate, 'hh:mm') }} 开球
		            </li>
		            <li class="right_image_padding10">
		                <img :src="renderStatus(record.status)" alt="">
		            </li>
		        </ul>
		    </div>
		</div>
	</div>
</div>
</template>
<script>
import api from '../api'
import * as lib from '../lib'

export default {
  name: 'Agenda',
  data () {
    return {
      name: 'AgendaV',
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
    formatTs: lib.formatTs,

    renderStatus (status) {
      switch (Number(status)) {
        default:
        case 1: return '/static/signup_image.png' // 1:已发布，报名中;
        case 2: return '/static/signup_image1.png' // 2:进行中;
        case 3: return '/static/signup_image3.png' // 3:已取消;
        case 4: return '/static/signup_image2.png' // 4:已结束;
      }
    },

    async loadData () {
      try {
        this.total = 0
        this.data = []
        let result = await api.listEvent(this.id, 'team', this.pager.page, this.pager.size)
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

    clickEvent (id) {
      console.debug(`${this.name}.clickEvent: ${id}`)
      this.$router.push({ path: `/event/${id}` })
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

