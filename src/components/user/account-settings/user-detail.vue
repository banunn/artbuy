<template>
    <div class="user-detail form">
        <div class="form-row flex">
            <div class="form-group">
                <header class="label">
                    First Name
                </header>
                <input class="input sm" type="text" placeholder="First Name">
            </div>
            <div class="form-group">
                <header class="label">
                    Last Name
                </header>
                <input class="input sm" type="text" placeholder="Last Name">
            </div>
        </div>
        <div class="form-row">
            <header class="label">
                Email
            </header>
            <input class="input sm" type="email" placeholder="mail@address.com">
        </div>
        <div class="form-row">
            <header class="label">About Me</header>
            <textarea class="textarea" placeholder="just some text about me..."></textarea>
        </div>
        <header class="label">Location</header>
        <div class="form-row flex">
            <div>
                <input class="input sm" type="text" placeholder="city"></div>
            <div>
                <select class="select">
                    <option value="United States">United States</option>
                </select>
            </div>
            <div>
                <select class="select">
                    <option value="California">California</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'user_detail_form'
}
</script>

<style lang="scss" scoped>
    .user-detail {
        background: #fff;
        border-radius: 2px;
        border: 1px solid rgba(17,18,21,0.1);
        padding: 20px 16px;
        margin-bottom: 16px;
    }
</style>
