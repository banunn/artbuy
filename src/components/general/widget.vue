<template>
<div class="widget-wrap">
    <div class="widget">
        <header v-if="title" class="w-head">
            <h3 class="label">{{title}}</h3>
        </header>
        <div class="w-body">
            <slot name="body"></slot>
        </div>
        <footer class="w-foot">
            <slot name="footer"></slot>
        </footer>
    </div>
    <div v-if="help" class="widget-help">
        <aside class="icon">
            <i class="material-icons">help_outline</i>
        </aside>
        <div class="help-body">
            <header>{{help.title}}</header>
            <p>{{help.text}}</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'widget',
    props: {
        title: String,
        help: Object
    }
}
</script>

<style lang="scss" scoped>
    h3 {
        margin:0;
        margin-bottom: 12px;
    }
</style>
