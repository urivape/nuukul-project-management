<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class TaskType
 * 
 * @property int $task_type_id
 * @property string $name
 * @property string $description
 * @property int $user_created
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class TaskType extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $primaryKey = 'task_type_id';

	protected $casts = [
		'user_created' => 'int'
	];

	protected $fillable = [
		'name',
		'description',
		'user_created'
	];
}
