<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InitBD extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->bigIncrements('account_id');
            $table->string('name');
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('facebook')->nullable();
            $table->string('twitter')->nullable();
            $table->string('instagram')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
        
        Schema::create('clients', function (Blueprint $table) {
            $table->increments('client_id');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('website');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->timestamps();
            $table->softDeletes();        
        });

        Schema::create('gender', function (Blueprint $table) {
            $table->bigIncrements('gender_id');
            $table->string('short_description');
            $table->string('description');
            $table->timestamps();
            $table->softDeletes();
        });
        
        Schema::create('labels', function (Blueprint $table) {
            $table->increments('label_id');
            $table->string('name');
            $table->string('description');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->timestamps();
            $table->softDeletes();        
        });

        Schema::create('password_resets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('email')->index();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });
        
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('project_id');
            $table->string('name');
            $table->string('description');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('client_id')
                ->unsigned()
                ->foreign('client_id')
                ->references('client_id')
                ->on('clients')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->timestamps();
            $table->softDeletes();        
        });
        
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('role_id');
            $table->string('name');
            $table->string('description');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users');
            $table->timestamps();
            $table->softDeletes();        
        });
        
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('task_id');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('task_type_id')
                ->unsigned()
                ->foreign('task_type_id')
                ->references('task_type_id')
                ->on('task_types')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('task_status_id')
                ->unsigned()
                ->foreign('task_status_id')
                ->references('task_status_id')
                ->on('task_status')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('task_priority_id')
                ->unsigned()
                ->foreign('task_priority_id')
                ->references('task_priority_id')
                ->on('task_priorities')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('project_id')
                ->unsigned()
                ->foreign('project_id')
                ->references('project_id')
                ->on('projects')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->string('name');
            $table->string('description');
            $table->string('tags')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->integer('assigned_user_id')
                ->unsigned()
                ->foreign('assigned_user_id')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->timestamps();
            $table->softDeletes();
        });
        
        Schema::create('task_comments', function (Blueprint $table) {
            $table->increments('task_comment_id');
            $table->integer('task_id')
                ->unsigned()
                ->foreign('task_id')
                ->references('task_id')
                ->on('tasks')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->string('title');
            $table->string('comment');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users');
            $table->timestamps();
            $table->softDeletes();        
        });
        
        Schema::create('task_labels', function (Blueprint $table) {
            $table->increments('task_label_id');
            $table->integer('task_id')
                ->unsigned()
                ->foreign('task_id')
                ->references('task_id')
                ->on('tasks')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('label_id')
                ->unsigned()
                ->foreign('label_id')
                ->references('label_id')
                ->on('labels')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->timestamps();
            $table->softDeletes();        
        });
        
        Schema::create('task_priorities', function (Blueprint $table) {
            $table->increments('task_priority_id');
            $table->string('name');
            $table->string('description');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->timestamps();
            $table->softDeletes();        
        });
        
        Schema::create('task_status', function (Blueprint $table) {
            $table->increments('task_status_id');
            $table->string('name');
            $table->string('description');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->timestamps();
            $table->softDeletes();        
        });
        
        Schema::create('task_types', function (Blueprint $table) {
            $table->increments('task_type_id');
            $table->string('name');
            $table->string('description');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->timestamps();
            $table->softDeletes();        
        });
        
        Schema::create('teams', function (Blueprint $table) {
            $table->increments('team_id');
            $table->string('name');
            $table->string('description');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->timestamps();
            $table->softDeletes();        
        });

        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('user_id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->integer('account_id')
                ->unsigned()
                ->default(1)
                ->foreign('account_id')
                ->references('account_id')
                ->on('accounts')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('user_details', function (Blueprint $table) {
            $table->bigIncrements('user_detail_id');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->string('first_name');
            $table->string('last_name');
            $table->date('birth_date')->nullable();
            $table->integer('gender_id')
                ->unsigned()
                ->foreign('gender_id')
                ->references('gender_id')
                ->on('gender')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->string('about_me');
            $table->timestamps();
            $table->softDeletes();
        });
        
        Schema::create('user_roles', function (Blueprint $table) {
            $table->increments('user_role_id');
            $table->integer('user_id')
                ->unsigned()
                ->foreign('user_id')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('role_id')
                ->unsigned()
                ->foreign('role_id')
                ->references('role_id')
                ->on('roles')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->timestamps();
            $table->softDeletes();        
        });
        
        Schema::create('user_teams', function (Blueprint $table) {
            $table->increments('user_team_id');
            $table->integer('user_id')
                ->unsigned()
                ->foreign('user_id')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('team_id')
                ->unsigned()
                ->foreign('team_id')
                ->references('team_id')
                ->on('teams')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->integer('user_created')
                ->unsigned()
                ->foreign('user_created')
                ->references('user_id')
                ->on('users')
                ->onUpdate('no action')
                ->onDelete('no action');
            $table->timestamps();
            $table->softDeletes();        
        });

        /*
         * Init data
         */

        DB::table('accounts')->insert(
            array(
                'name' => 'UnKnOwN Company'
            )
        );

        DB::table('roles')->insert(
            array(
                'name' => 'Administrator',
                'description' => 'Nuukul Administrator',
                'user_created' => 1,
                'created_at' => '2019-03-15'
            )
        );

        DB::table('users')->insert(
            array(
                'name' => 'Administrator',
                'email' => 'administrator@nuukul.com',
                'password' => Hash::make('Nuukul2019'),
                'account_id' => 1,
                'created_at' => '2019-03-15'
            )
        );

        DB::table('user_roles')->insert(
            array(
                'user_id' => 1,
                'role_id' => 1,
                'user_created' => 1,
                'created_at' => '2019-03-15'
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
        Schema::dropIfExists('clients'); 
        Schema::dropIfExists('gender');  
        Schema::dropIfExists('labels');
        Schema::dropIfExists('password_resets');
        Schema::dropIfExists('projects');     
        Schema::dropIfExists('roles');
        Schema::dropIfExists('tasks');
        Schema::dropIfExists('task_comments');
        Schema::dropIfExists('task_labels');
        Schema::dropIfExists('task_priorities');
        Schema::dropIfExists('task_status');
        Schema::dropIfExists('task_types');
        Schema::dropIfExists('teams');
        Schema::dropIfExists('users');
        Schema::dropIfExists('user_details');
        Schema::dropIfExists('user_roles');
        Schema::dropIfExists('user_teams');
    }
}
