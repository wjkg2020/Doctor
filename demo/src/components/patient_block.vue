<template>
    <div class="container">
        <div class="image">
        </div>
        <div class="text">
            <h1>{{name}}</h1>
            <el-button>info</el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'patient_block',
  props: {
    name: {
      type: String,
      default: '佚名'
    },
    patient_id: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-image: url('../assets/logo.png');
  background-size: cover;
  background-position: center;
}

.text {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
}

.text h1 {
  margin: 0;
  margin-top: 40px;
  /* background-color: aqua; */
}

.text button {
  margin: 10px;
  margin-top: 60px;
}
</style>
