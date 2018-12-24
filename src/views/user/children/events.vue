<template>
    <div class="event-page">
        <transition name="fade" mode="out-in" appear>
             <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Events',
}
</script>

<style lang="scss" scoped>

</style>
