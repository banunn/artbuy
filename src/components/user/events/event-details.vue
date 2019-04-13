<template>
    <div class="event-detail form">
        <div class="form-row">
            <div>
                <header class="label">Event Image</header>
                <figure class="featured-img">
                    <img src="https://images.unsplash.com/photo-1547296017-978c31e1c124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80" alt="">
                    <div class="ctrls">
                        <button class="icon-btn"><i class="material-icons">remove_red_eye</i></button>
                        <button class="icon-btn"><i class="material-icons">edit</i></button>
                        <button class="icon-btn"><i class="material-icons">delete_outline</i></button>
                    </div>
                </figure>
            </div>
        </div>
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

 .featured-img {
     width: 100%;
     height: 257px;
     position: relative;
     .ctrls {
         position: absolute;
         bottom:16px;
         padding-right: 16px;
         z-index: 200;
         width: 100%;
         display:flex;
         justify-content: flex-end;
         button {
             -webkit-appearance: none;
             border: none;
             background: rgba(#fff, .45);
             height: 24px;
             width: 24px;
             border-radius: 50%;
             margin-left: 8px;
             &:hover {
                 background: rgba(#fff, .65);
             }
             i {
                 font-size: 16px;
             }
         }
     }
     img {
         height: 100%;
         width: 100%;
         object-fit: cover;
     }
 }
</style>
