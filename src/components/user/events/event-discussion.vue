<template>
    <ab-widget :title="'Event Discussion'">
        <template slot="body">
            <div v-for="c in comments" :key="c.id" class="comment">
                <header class="c-head">
                    <figure class="user-img"><img :src="c.user.photoUrl" alt=""></figure>
                    <div class="detail">
                        <h3>{{c.user.first_name + ' ' + c.user.last_name}}</h3>
                        <span class="date">{{c.date}}</span>
                    </div>
                </header>
                <div class="c-body">
                    <p v-text="c.body"></p>
                </div>
            </div>
        </template>
        <template slot="footer">
            <button class="text-btn"><span>View All Comments</span><i class="material-icons">keyboard_arrow_right</i></button>
        </template>
    </ab-widget>
</template>

<script>
export default {
    data() {
        return {
            comments: [
                {
                    id: 1,
                    user: {
                        first_name: 'Jacob',
                        last_name: 'Harrison',
                        photoUrl: 'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=125&q=80',
                    },
                    date: 'Today at 12:46 PM',
                    body: 'There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life. '
                },
                                {
                    id: 2,
                    user: {
                        first_name: 'Hailey',
                        last_name: 'Hilson',
                        photoUrl: 'https://images.unsplash.com/photo-1548382131-e0ebb1f0cdea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=125&q=80',
                    },
                    date: 'Today at 9:18 AM',
                    body: 'There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life. '
                },
                                {
                    id: 3,
                    user: {
                        first_name: 'Jason',
                        last_name: 'Sterling',
                        photoUrl: 'https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=125&q=80',
                    },
                    date: 'October 25 at 11:24 PM',
                    body: 'There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life. '
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.comment {
    margin-bottom: 16px;
    .c-head {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        .detail {
            margin-left: 8px;
            h3 {
                color: #111215;	font-size: 13px;	font-weight: bold;	line-height: 16px;
                margin:0;
            }
            span {
                	opacity: 0.8;	font-size: 12px;	letter-spacing: 0.5px;	line-height: 12px;
            }
        }
    }
    .c-body {
        opacity: 0.6;	font-size: 12px;	font-weight: 500;	line-height: 20px;
        p {
            &:first-child {
                margin-top:0;
            }
            &:last-child {
                margin-bottom:0;
            }
        }
    }
}

    .text-btn {
        -webkit-appearance: none;
        border: none;
        background: none;
        text-transform: uppercase;
        color: #111215;
        display: flex;
        align-items: center;
        font-size: 10px;
        font-weight: bold;
        letter-spacing: .5px;
        i {
            font-size: 18px;
        }
    }
</style>
