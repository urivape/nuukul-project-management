<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Task
 * 
 * @property int $task_id
 * @property int $user_created
 * @property int $task_type_id
 * @property int $task_status_id
 * @property int $task_priority_id
 * @property int $project_id
 * @property string $name
 * @property string $description
 * @property string $tags
 * @property \Carbon\Carbon $start_date
 * @property \Carbon\Carbon $end_date
 * @property int $assigned_user_id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class Task extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $primaryKey = 'task_id';

	protected $casts = [
		'user_created' => 'int',
		'task_type_id' => 'int',
		'task_status_id' => 'int',
		'task_priority_id' => 'int',
		'project_id' => 'int',
		'assigned_user_id' => 'int'
	];

	protected $dates = [
		'start_date',
		'end_date'
	];

	protected $fillable = [
		'user_created',
		'task_type_id',
		'task_status_id',
		'task_priority_id',
		'project_id',
		'name',
		'description',
		'tags',
		'start_date',
		'end_date',
		'assigned_user_id'
	];
}
