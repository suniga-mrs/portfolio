<?php include_once('partials/layout.php'); ?>


<?php function get_page_content() { ?>
<!-- HTML Content Here -->
<section id="masthead" class="general">
    <div id="page-title" data-aos="fade-in" >
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

    
                    <div class="project-item" data-aos="fade-down" data-aos-delay="500">
                        <div  class="d-flex flex-row d-sm-block">
                            <div class="">
                                <div class="item-image box d-flex">
                                    <div class="image">  
                                        <img src="assets/images/spark-apps.JPG" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="details">
                                    <div class="item-body d-flex flex-column">
                                        <div class="item-title">
                                            <h3><a href="https://suniga-mrs.github.io/spark-apps-tech/" target="_blank">Spark Apps Tech</a></h3>
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
                                                <span>Web Design & Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="project-item" data-aos="fade-down" data-aos-delay="700">
                        <div  class="d-flex flex-row d-sm-block">
                            <div class="">
                                <div class="item-image box d-flex">
                                    <div class="image">  
                                        <img src="assets/images/outbox-systems.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="details">
                                    <div class="item-body d-flex flex-column">
                                        <div class="item-title">
                                            <h3><a href="http://inventory.michellesuniga.com" target="_blank">Outbox Inventory</a></h3>
                                        </div>
                                        <div class="item-desc">
                                            <p>An inventory system for a small milk tea shop</p>
                                        </div>
                                        <div class="item-footer mt-auto">
                                            <div class="d-block">
                                                <span>Laravel</span>
                                                <span>JS</span>
                                                <span>Bootstap 4</span>
                                            </div>
                                            <div class="d-block">
                                                <span>Web Design & Development</span>
                                            </div>
                                        </div>
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
<?php } ?>