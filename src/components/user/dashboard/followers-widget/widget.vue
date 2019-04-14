<template>
    <art-widget title="Recent Followers">
        <template slot="body">
            <art-follower v-for="(f, index) in followers" :key="index" :follower="f"></art-follower>
        </template>
        <template slot="footer">
            <button @click="$router.push({name: 'userSocial'})" class=" btn btn-txt icon-btn">View All Followers <i class="material-icons">chevron_right</i></button> 
        </template>
    </art-widget>
</template>

<script>
import artWidget from '@/components/general/widget'
import artFollower from './follower-item'
export default {
    name: 'followers_widget',
    components: {
        artWidget,
        artFollower
    },
    data() {
        return {
            followers: [
                {
                    name: 'Jacob Harrison',
                    photoUrl: 'https://randomuser.me/api/portraits/men/87.jpg',
                    date: 'Today at 12:46 PM'
                },
                {
                    name: 'Hailey Hilson',
                    photoUrl: 'https://randomuser.me/api/portraits/women/77.jpg',
                    date: 'Today at 9:18 AM'
                },
                {
                    name: 'West Street',
                    photoUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
                    date: 'Yesterday at 11:32 AM'
                },
                {
                    name: 'Jason Sterling',
                    photoUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
                    date: 'October 25 at 11:24 PM'
                },
                {
                    name: 'Alex Owens',
                    photoUrl: 'https://randomuser.me/api/portraits/women/88.jpg',
                    date: 'October 25 at 10:03 AM'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn-txt {
        text-transform: uppercase;
        font-size: 10px;	
        font-weight: bold;	
        letter-spacing: 0.42px;	
        line-height: 12px;
        display: flex;
        align-items: center;
        i {
            font-size: 16px;
        }
    }
</style>
