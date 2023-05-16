<template>
    <div class="showdefault">
      <!-- <h1>caonima</h1> -->
      <div v-for="(pair,index) in pairs.slice(0,arr_len)" :key="index">
        <el_row type="flex">
         <el-col span="6" class="center" >
          <div>
          <patient_block :name="pair[0].name" :patient_id="pair[0].id"></patient_block>
          </div>
         </el-col>
         <el-col span="6" class="center">
          <div>
          <patient_block :name="pair[1].name" :patient_id="pair[1].id"></patient_block>
         </div>
         </el-col>
       </el_row>
      </div>
      <div v-if="isExpanded">
        <div v-for="(pair,index) in pairs.slice(arr_len,)" :key="index">
        <el_row type="flex">
         <el-col span="6" class="center" >
          <div>
          <patient_block :name="pair[0].name" :patient_id="pair[0].id"></patient_block>
          </div>
         </el-col>
         <el-col span="6" class="center">
          <div>
          <patient_block :name="pair[1].name" :patient_id="pair[1].id"></patient_block>
         </div>
         </el-col>
       </el_row>
        </div>
      </div>
      <el_row>
        <el-col span="24" class="center"><el-button v-if="!isExpanded" @click="expandContent">more</el-button></el-col>
      </el_row>
    </div>
  </template>

<script>
// eslint-disable-next-line camelcase
import patient_block from './patient_block.vue'
export default {
  components: { patient_block },
  name: 'patient_list',
  props: {
    doc_id: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      'isExpanded': false,
      'patients': [
        {
          'id': 1,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W1',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 2,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W2',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 3,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W3',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 4,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W4',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 5,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W5',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 6,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W6',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 7,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W7',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 8,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W8',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 9,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W9',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 10,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W10',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 11,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W11',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        },
        {
          'id': 12,
          'img': 'http://dummyimage.com/400x400',
          'name': 'W12',
          'description': '色安细相统深直体经种和。家听多而还个。处图统片众指好业根已转基六。'
        }
      ]
    }
  },
  methods: {
    expandContent () {
      this.isExpanded = true
    }
  },
  computed: {
    pairs () {
      const result = []
      let ll = this.patients.length
      if (this.patients.length % 2 !== 0) ll = this.patients.length - 1
      for (let i = 0; i < ll; i += 2) {
        result.push([this.patients[i], this.patients[i + 1]])
      }
      if (ll !== this.patients.length) {
        result.push([this.patients[this.patients.length - 1], {'id': -1, 'img': '', 'name': '佚名', 'description': ''}])
      }
      return result
    },
    arr_len () {
      let ll = this.patients.length / 4
      if (ll % 2 !== 0) ll = ll + 1
      return ll
    }
  }
}
</script>

<style scoped>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-row {
    margin-bottom: 20px;
  }
</style>
