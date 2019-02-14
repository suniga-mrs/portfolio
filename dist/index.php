<?php include_once('partials/layout.php'); ?>


<?php function get_page_content() { ?>
	<section id="masthead" class="">
		<div id="page-title" data-aos="fade-in" >
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-10 offset-md-1">
						<h2 data-aos="fade-right">Hello! Let's make an <span>IMPACT</span></h2>
					</div>
				</div>
			</div>
		</div>

		<div class="d-block d-md-flex justify-content-end">
			<a href="projects.php" class="my-btn-1">See Projects</a>
		</div>
	</section>

	<section id="home-content" class="">
		<div class="container-fluid">
			<div class="row  no-gutters">



				<div class="col-md-8 offset-md-1">
					<div class="row content">
						<div class="col-md-12">
							<h3>I am a <span>Full Stack Web Developer</span> and a <span>Graphic Designer</span>.</h3>
							<p>Passionate in problem-solving and the creating reliable solutions, I hope to create a
								positive impact to the people and in every industry. Currently, I'm leveling up at Tuitt Philippines and looking for a full-time work as a web developer.</p>
						</div>
					</div>

					<div class="row d-md-none">
						<div class="col-md-12">
							<div>
								<a href="#" id="view-link" class="my-btn-2">View Skills</a>
							</div>
						</div>
					</div>
				</div>

				<div id="skillset" class="row no-gutters hide-box d-md-block">
					<!-- REPLACE D-NONE with class to show-->
					<div class="col-xs-12 col-md-8 offset-md-1">
						<div class="row no-gutters skillset-content ">
							<div class="col-md-12">
								<h4>Skillset</h4>
								<div class="row no-gutters skillset-list ">

									<div class="col-md-3">
										<ul>
											<li>HTML5</li>
											<li>CSS3</li>
											<li>Bootstrap 4</li>
											<li>PHP</li>
											<li>Laravel 5</li>
										</ul>
									</div>

									<div class="col-md-3">
										<ul>
											<li>Web Design</li>
											<li>Graphic Design</li>
											<li>Illustration</li>
											<li>Branding</li>
											<li>Art Direction</li>
										</ul>
									</div>

									<div class="col-md-3">
										<ul>
											<li>Photography</li>
											<li>Illustration</li>
											<li>Video Production</li>
											<li>Video Editing</li>
										</ul>
									</div>

								</div>
								<div class="row no-gutters d-md-none">
									<div class="col-md-12">
										<div>
											<a href="#" id="back-link" class="my-btn-2">Back</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
<?php }; ?>	