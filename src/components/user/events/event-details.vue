<template>
    <div class="event-detail form">
        <div class="form-row">
            <div>
                <header class="label">Title</header>
                <input placeholder="Event Title" type="text" name="" id="" class="input sm">
            </div>
        </div>
        <div class="form-row">
            <div>
                <header class="label">
                    Date
                </header>
                <input type="date" name="" id="" class="input sm">
            </div>
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">Start Time</header>
                <input type="time" class="input sm" name="" id="">
            </div>
            <div>
                <header class="label">End Time</header>
                <input type="time" class="input sm" name="" id="">
            </div>
        </div>
        <div class="form-row">
            <div>
                <header class="label">description</header>
                <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea>
            </div>
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">Email Contact</header>
                <input placeholder="email@domain.com" type="text" name="" id="" class="input sm">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Event_Details'
}
</script>

<style lang="scss" scoped>
 .event-detail {
    background: #fff;
    border-radius: 2px;
    border: 1px solid rgba(17,18,21,0.1);
    padding: 20px 16px;
    margin-bottom: 16px;
 }
</style>
