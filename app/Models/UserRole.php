<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class UserRole
 * 
 * @property int $user_role_id
 * @property int $user_id
 * @property int $role_id
 * @property int $user_created
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class UserRole extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $primaryKey = 'user_role_id';

	protected $casts = [
		'user_id' => 'int',
		'role_id' => 'int',
		'user_created' => 'int'
	];

	protected $fillable = [
		'user_id',
		'role_id',
		'user_created'
	];
}
