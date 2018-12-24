<template>
    <div class="event-location form">
        <div class="form-row">
            <div>
                <header class="label">Location</header>
                <input placeholder="2232 E. 22nd St..." type="text" class="input sm" name="" id="">
            </div>
            <figure class="map-preview">

            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Event_Location'
}
</script>

<style lang="scss" scoped>
 .event-location {
    background: #fff;
    border-radius: 2px;
    border: 1px solid rgba(17,18,21,0.1);
    padding: 20px 16px;
    margin-bottom: 16px;

    .map-preview {
        height: 257px;	
        width: 568px;	
        border: 1px solid rgba(17,18,21,0.2);	
        border-radius: 2px;
        margin-top: 8px;
    }
 }
</style>
