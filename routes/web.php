<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'LoginController@login');

Auth::routes();

//Route::middleware('auth:api')->get('/access', function (Request $request) { return view('login'); });
//Route::group(array('before' => 'auth'), function() {
Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'DefaultController@index'); 

    Route::get('/dashboard_default', 'DefaultController@index');
    Route::get('/Dashboard_Default', 'DefaultController@index');

    Route::get('/dashboard_clean', 'DefaultController@index');
    Route::get('/Dashboard_Clean', 'DefaultController@index'); 

    Route::get('/dashboard_compact', 'DefaultController@index');
    Route::get('/Dashboard_Compact', 'DefaultController@index');

    Route::get('/widgets', 'DefaultController@index');
    Route::get('/Widgets', 'DefaultController@index');

    Route::get('/tables_basic', 'DefaultController@index');
    Route::get('/Tables_Basic', 'DefaultController@index');

    Route::get('lista_actividades', 'DefaultController@index');
    Route::get('Lista_Actividades', 'DefaultController@index');

    Route::resource('tasks', 'TaskController');
});

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
/*
Route::any('{req}', function($req) {
    $uri = $_SERVER['REQUEST_URI'];

    $path = strtok($uri, '?');

    $query = '';
    if(strpos($uri, '?') !== false){
        $after = substr($uri, strpos($uri, '?') + 1);
        if($after !== false){
            $query = $after;
        }
    }

    if(strtolower($path) !== $path){
        $redirectUri = strtolower($path);
        if(strlen($query) > 0)
            $redirectUri .= '?' . $query;

        return redirect(trim($redirectUri, '/'));
    }

    return response()->view('shared.error_404', [], 404);

})->where('req', '^.*');
    */