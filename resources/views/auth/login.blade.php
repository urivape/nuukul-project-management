<!DOCTYPE html>
<!--
Item Name: Elisyam - Web App & Admin Dashboard Template
Version: 1.5
Author: SAEROX

** A license must be purchased in order to legally use this template for your project **
-->
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>Nuukul - Login</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <!-- Google Fonts -->
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
    <script>
    WebFont.load({
        google: {
            "families": ["Montserrat:400,500,600,700", "Noto+Sans:400,700"]
        },
        active: function() {
            sessionStorage.fonts = true;
        }
    });
    </script>
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('assets/img/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('assets/img/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('assets/img/favicon-16x16.png')}}">
    <!-- Stylesheet -->
    <link rel="stylesheet" href="{{asset('assets/vendors/css/base/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendors/css/base/elisyam-1.5.css')}}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <!-- Tweaks for older IEs-->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
</head>

<body class="bg-white">
    <!-- Begin Container -->
    <div class="container-fluid no-padding h-100">
        <div class="row flex-row h-100 bg-white">
            <!-- Begin Left Content -->
            <div class="col-xl-8 col-lg-6 col-md-5 no-padding">
                <div class="elisyam-bg background-01">
                    <div class="elisyam-overlay overlay-01"></div>
                    <div class="authentication-col-content mx-auto">
                        <h1 class="gradient-text-01">
                            Welcome To Nuukul!
                        </h1>
                        <span class="description">
                            Etiam consequat urna at magna bibendum, in tempor arcu fermentum vitae mi massa egestas.
                        </span>
                    </div>
                </div>
            </div>
            <!-- End Left Content -->
            <!-- Begin Right Content -->
            @guest
            <script>
              var csrf_token = '<?= csrf_token() ?>';
              var formAction = '<?= route('login') ?>';
              var formRememberMe = '<?= old('remember') ? 'checked' : ''  ?>';
              var routeRegister = '<?= route('register') ?>';
              var routeForgotPassword = '<?= route('password.request') ?>';
            </script>
            <div id="nuukulLogin" class="col-xl-4 col-lg-6 col-md-7 my-auto no-padding"></div>
            @else
            <div id="nuukulLogout" class="col-xl-4 col-lg-6 col-md-7 my-auto no-padding">
              <div class="text-center">
                <h3>You already are logged as <b>{{ Auth::user()->name }}</b></h3>
                <p>&nbsp;</p>
                <div>
                  <a href="/" class="btn btn-lg btn-gradient-01">Sign in</a>
                  <a href="{{ route('logout') }}" class="btn btn-lg btn-gradient-02"
                    onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Sign out</a>
                  <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                      @csrf
                  </form>
                </div>
              </div>
            </div>
            @endguest
            <!-- End Right Content -->
        </div>
        <!-- End Row -->
    </div>
    <!-- End Container -->
    <!-- Begin Vendor Js -->
    <script src="{{asset('assets/vendors/js/base/jquery.min.js')}}"></script>
    <script src="{{asset('assets/vendors/js/base/core.min.js')}}"></script>
    <script src="{{asset('assets/vendors/js/nicescroll/nicescroll.min.js')}}"></script>
    <!-- End Vendor Js -->
    <!-- Begin Page Vendor Js -->
    <script src="{{asset('assets/vendors/js/app/app.js')}}"></script>
    <!-- End Page Vendor Js -->
    <script src="{{asset('js/nuukulApp.js')}}"></script>
</body>

</html>