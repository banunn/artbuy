<template>
    <ab-widget :title="'Contact'">
        <template slot="body">
        <div class="w-content">
			<div class="contact-refs">
				<div><i class="material-icons">email</i><span>{{event.email}}</span></div>
				<div><i class="material-icons">phone</i><span>{{event.phone}}</span></div>
				<div><i class="material-icons">today</i><span>{{event.site}}</span></div>
			</div>
		</div>
        </template>
    </ab-widget>
</template>

<script>
export default {
    name: 'event_contact',
    data() {
        return {
            event: {
                email: 'john.smith@gmail.com',
                phone: '(534) 928-9321',
                site: 'www.weststreetstudios.com/events'
            }
        }
    }
     
}
</script>

<style lang="scss" scoped>
	.w-content {
		color: #111215;		
		font-size: 14px;	
		font-weight: 500;	
		letter-spacing: 0.1px;	
		line-height: 18px;
    }
    
    .contact-refs {
	> div {
		color: #111215;	
		font-size: 14px;	
		font-weight: 500;	
		letter-spacing: 0.1px;	
		line-height: 18px;
		display: flex;
		align-items: center;
		margin-bottom: 14px;
		&:last-child {
			margin-bottom:0;
		}
		i {
			font-size: 18px;
			margin-right: 12.5px;
		}
	}
}
</style>
