<?php include_once('partials/layout.php'); ?>


<?php function get_page_content() { ?>
<!-- HTML Content Here -->
<section id="masthead" class="general">
    <div id="page-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <h1>Projects</h1>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="project-list">
    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-12">
            <div class="project-container">

                <?php for($x = 0; $x < 6; $x++) { ?>
                    <div class="project-item">
                        <div  class="d-flex flex-row d-sm-block">
                            <div class="">
                                <div class="item-image box d-flex">
                                    <div class="image">  
                                        hello
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="details">
                                    <div class="item-body d-flex flex-column">
                                        <div class="item-title">
                                            <h3>Spark Apps Technology</h3>
                                        </div>
                                        <div class="item-desc">
                                            <p>A company brochure website</p>
                                        </div>
                                        <div class="item-footer mt-auto">
                                            <div class="d-block">
                                                <span>HTML</span>
                                                <span>CSS</span>
                                                <span>Bootstap 4</span>
                                            </div>
                                            <div class="d-block">
                                                <span>Branding</span>
                                                <span>Web Design & Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php } ?>