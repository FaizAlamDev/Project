const Hero = () => (
	<section className='fj-hero'>
		<div className='fj-hero-wrapper row'>
			<div className='hero-left col-md-6'>
				<h1 className='white hero-title'>
					Hello there! Here is my website.
				</h1>
				<h2 className='white hero-subtitle'>
					This website is developed using React.
				</h2>
				<div className='button-container'>
					<a href='' className='btn btn-main bg-blue ttu'>
						Link
					</a>
				</div>
			</div>
			<div className='hero-right col-md-6'>
				<div className='hero-image-container'>
					<a className='grow hero-link'>
						<img
							className='hero-image'
							// src='https://i.udemycdn.com/course/750x422/1652608_662b_8.jpg'
							src='https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
						></img>
					</a>
				</div>
			</div>
		</div>
	</section>
)

export default Hero
