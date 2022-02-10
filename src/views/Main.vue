<template>
  
  <router-view />
</template>

<script>
import '@/theme/main.scss'
export default {
  name: 'Main',
  mounted(){
    this.$router.push('/quiz').catch(err => {console.log(err)})
  }
}
</script>
