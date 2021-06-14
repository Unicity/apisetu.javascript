<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Unicity Warehouse Application</title>
    <meta charset="UTF-8">

    <!-- Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <!-- jQuery -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <!-- Font Awesome -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" >
    <!-- Date picker UI -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.css">
    <!-- Custom Theme Style -->
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/custom.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/green.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/custom.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/fileinput.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/viewer.css') }}" rel="stylesheet">
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title">
              @if (Auth::guest())
              <li><a href="{{ url('/upppayments/create') }}" class="site_title"><span>UNICITY</span></a>
              @else
              <a href="{{ url('/warehouseorders') }}" class="site_title"><span>UNICITY</span></a>
              @endif
            </div>
            <div class="clearfix"></div>
            <hr />
            <!-- /menu profile quick info -->
            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>&nbsp;</h3>
                <ul class="nav side-menu">
                  <li><a href="{{ url('/upppayments/create') }}"><i class="fa fa-money"></i>Upp Payment</a></li>
                  <li><a href="{{ url('https://www.unicity.com/ind/company/our-story/') }}" target="_blank"><i class="fa fa-user"></i>About US</a></li>
                  <li><a href="{{ url('https://www.unicity.com/ind/contact/') }}" target="_blank"><i class="fa fa-phone"></i>Contact US</a></li>
                  <li><a href="{{ url('https://www.unicity.com/ind/terms-of-use/') }}" target="_blank"><i class="fa fa-info"></i>Terms and Conditions</a></li>
                  <li><a href="{{ url('/pdf/Policy-Procedure-May2019.pdf') }}" target="_blank"><i class="fa fa-lock"></i>Policies & Procedures</a></li>
                </ul>
              </div>
            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <!--div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div-->
            <!-- /menu footer buttons -->
          </div>
        </div>
        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav class="" role="navigation">
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->
        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            @yield('content')
          </div>
        </div>
        <!-- /page content -->

        <!-- footer content -->
        <footer>
          <div class="pull-right">
            © <?php echo date("Y"); ?> Copyright Unicity International, Inc. All Rights Reserved.
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>
    <!-- Start delete Modal -->

    <!-- End delete Modal -->
     <!-- Bootstrap -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <!-- iCheck -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/iCheck/1.0.2/icheck.min.js"></script>
    <!-- FastClick -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.js"></script>
    <!-- DatePicker -->
    <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
    <!-- Custom Theme Scripts -->
    <!-- <script src="{{ asset('/js/custom.js') }}"></script>-->
    <script src="{{ asset('/js/custom.js') }}"></script>
    <script src="{{ asset('/js/light.js') }}"></script>
    <script src="{{ asset('/js/main.js') }}"></script>
    <script src="{{ asset('/js/viewer.js') }}"></script>
    <script src="{{ asset('/js/fileinput.js') }}"></script>
    <script src="{{ asset('/js/green.css') }}"></script>

    <script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
     <script src="https://cdn.datatables.net/1.10.15/js/dataTables.bootstrap.min.js"></script>
  </body>
</html>
