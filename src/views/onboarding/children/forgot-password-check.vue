<template>
    <div class="password-page">
        <div class="password-wrap">
			<header class="head">
					<h1>We've Sent You An Email...</h1>
					<h4>Please check {{emailAddress}}</h4>
			</header>
            <div class="form-wrap form">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis a saepe voluptatum pariatur reprehenderit aliquam itaque, animi nemo? Natus mollitia itaque veniam at ipsa?</p>
            </div>
            <footer class="foot">
                <button @click="$router.push('/')" class="btn txt-btn btn-primary">Go Home</button>
            </footer>
		</div>
    </div>
</template>

<script>
export default {
    name: 'forgot-password-check',
    data() {
        return {
            emailAddress: 'example@domain.com'
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">

.password-page {
    min-height: calc(100vh - 64px);
    background-color: #F5F7F7;
    padding-top: 72px;
}

.password-wrap {
		height: 412px;	
	width: 904px;	
	border: 1px solid rgba(17,18,21,0.1);	
	border-radius: 2px;
	background-color: #FFFFFF;
	margin: 72px auto;
	
	.head {
		text-align: center;
		padding: 50px 0 80px 0;
		h1 {
			margin:0;
			color: #111215;	
			font-size: 34px;	
			font-weight: bold;	
			letter-spacing: -0.5px;	
			line-height: 38px;	
			text-align: center;}
		h4 {
			margin:0;
			color: #111215;	
			font-size: 20px;	
			font-weight: 600;	
			line-height: 27px;	
			text-align: center;
			font-weight: normal;
		}
	}
	
	.form-wrap {
		padding: 0 72px;
	}
	
	.foot {
		padding: 24px 48px 0 48px;
		margin-top: 64px;
		border-top: 1px solid rgba(#000, .1);
		display: flex;
		justify-content: flex-end;
		button {
			height: 48px;
			padding: 0 20px;
				font-size: 12px;	
				font-weight: 600;	
				letter-spacing: 1.2px;	
				line-height: 16px;
			background: none;
			border: none;
			&.disabled {
				opacity: .65;
				pointer-events: none;
			}
			&.btn-secondary {
				text-transform: uppercase;
				color:  #111215;
			}
			&.btn-primary {
				background-color: #111215;
				color: #fff;
				cursor: pointer;
			}
		}
	}
}

</style>
