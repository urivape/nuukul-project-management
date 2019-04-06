<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class UserDetail
 * 
 * @property int $user_detail_id
 * @property int $user_created
 * @property string $first_name
 * @property string $last_name
 * @property \Carbon\Carbon $birth_date
 * @property int $gender_id
 * @property string $about_me
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class UserDetail extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $primaryKey = 'user_detail_id';

	protected $casts = [
		'user_created' => 'int',
		'gender_id' => 'int'
	];

	protected $dates = [
		'birth_date'
	];

	protected $fillable = [
		'user_created',
		'first_name',
		'last_name',
		'birth_date',
		'gender_id',
		'about_me'
	];
}
