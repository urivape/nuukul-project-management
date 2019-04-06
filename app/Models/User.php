<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class User
 * 
 * @property int $user_id
 * @property string $name
 * @property string $email
 * @property \Carbon\Carbon $email_verified_at
 * @property string $password
 * @property int $account_id
 * @property string $remember_token
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class User extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $primaryKey = 'user_id';

	protected $casts = [
		'account_id' => 'int'
	];

	protected $dates = [
		'email_verified_at'
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
		'name',
		'email',
		'email_verified_at',
		'password',
		'account_id',
		'remember_token'
	];
}
