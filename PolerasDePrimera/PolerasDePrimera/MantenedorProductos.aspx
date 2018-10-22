<%@ Page Title="" Language="C#" MasterPageFile="~/RopaPrimera.Master" AutoEventWireup="true" CodeBehind="MantenedorProductos.aspx.cs" Inherits="PolerasDePrimera.MantenedorProductos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

     <section>
    <!--======== START CLIENT DETAILS FORM ========-->
            <div class="c_panel margin-top-50">

                <div class="c_title bg-info padding-top-20 padding-bottom-20">
                    <h2><span class="font-bold">Ingrese Producto</span></h2>
                    <div class="clearfix"></div>
                </div><!--/.c_title-->

                <div class="c_content">
                    
                   <form class="form-horizontal">
                        <div class="form-group">
                            <label for="Descripción*" class="col-sm-2 control-label">Descripción*</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="produto-descripcion" placeholder="Descripción">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="Categoria*" class="col-sm-2 control-label">Categoria*</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="producto-categoria" placeholder="Categoria">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="Valor*" class="col-sm-2 control-label">Valor*</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="producto-valor" placeholder="Valor">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2">Foto</label>
                            <div class="col-md-10">
                                <div class="fileupload fileupload-new" data-provides="fileupload">
                                    <div class="fileupload-new thumbnail" style="width: 200px; height: 150px;">
                                        <img src="../../../assets/images/no-image.png" alt="image" />
                                    </div>
                                    <div class="fileupload-preview fileupload-exists thumbnail" style="max-width: 200px; max-height: 150px; line-height: 20px;"></div>
                                    <div>
                                        <span class="btn btn-white btn-file">
                                           <span class="fileupload-new"><i class="fa fa-paper-clip"></i> Seleccione imagen</span>
                                           <span class="fileupload-exists"><i class="fa fa-undo"></i> Cambiar</span>
                                           <input type="file" class="default" />
                                        </span>
                                        <a href="#" class="btn btn-danger fileupload-exists" data-dismiss="fileupload"><i class="fa fa-trash"></i> Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="submit" class="btn btn-info btn-flat">Enviar</button>
                            </div>
                        </div>
                    </form>
                    
                </div><!--/.c_content-->

            </div><!--/.c_panels-->
            <!--======== END BUG TRACKER FORM ========-->

    </section>

    <!--##################################################################################
    #
    # COMMON SCRIPT FOR THIS PAGE
    #
    ##################################################################################-->

    <!--common script init for all pages-->
    <script src="assets/js/theme.js" type="text/javascript" ></script>

    <!-- For for the page that has form only -->
    <script src="assets/js/forms.js"></script>
    <script src="assets/js/form-validation.js"></script>
    <script src="assets/js/form-wizard.js"></script>
    <script src="assets/js/form-plupload.js"></script>
    <script src="assets/js/form-x-editable.js"></script>

    <!--This css plugins uses on this page only-->
    <link href="assets/vendors/summernote/summernote.css" rel="stylesheet" />
    <link href="assets/vendors/bootstrap-datepicker/css/bootstrap-datepicker.css" rel="stylesheet" />
    <link href="assets/vendors/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" />
    <link href="assets/vendors/bootstrap-colorpicker/css/bootstrap-colorpicker.css" rel="stylesheet" />
    <link href="assets/vendors/bootstrap-tagsinput/bootstrap-tagsinput.css" rel="stylesheet" />
    <link href="assets/vendors/summernote/summernote-bs3.css" rel="stylesheet" />
    <link href="assets/vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" />
    <link href="assets/vendors/jquery.multi-select/css/multi-select.css" rel="stylesheet" />
    <link href="assets/vendors/typeahead/css/typeahead.css" rel="stylesheet" />
    <link href="assets/vendors/select2/select2.css" rel="stylesheet" />
    <link href="assets/vendors/ios-switch/css/switch.css" rel="stylesheet" />
    <link href="assets/vendors/bootstrap-star-rating/css/star-rating.css" rel="stylesheet" />
    <link href="assets/vendors/bootstrap-fileupload/css/bootstrap-fileupload.css" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <link href="assets/css/theme.css" rel="stylesheet">
    <link href="assets/css/style-responsive.css" rel="stylesheet"/>
    <link href="assets/css/class-helpers.css" rel="stylesheet"/>

 

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]>
    <script src="js/ie8-responsive-file-warning.js"></script><![endif]-->
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

    <script type="text/javascript">


        $(document).ready(function(){
            new WOW().init();

            App.initPage();
            App.initLeftSideBar();
            App.initCounter();
            App.initNiceScroll();
            App.initPanels();
            App.initProgressBar();
            App.initSlimScroll();
            App.initNotific8();
            App.initTooltipster();
            App.initStyleSwitcher();
            App.initMenuSelected();
            App.initRightSideBar();
            App.initSummernote();
            App.initAccordion();
            App.initModal();
            App.initPopover();

        });
    </script>
</asp:Content>
