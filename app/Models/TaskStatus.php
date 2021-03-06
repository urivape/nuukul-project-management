<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class TaskStatus
 * 
 * @property int $task_status_id
 * @property string $name
 * @property string $description
 * @property int $user_created
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class TaskStatus extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $table = 'task_status';
	protected $primaryKey = 'task_status_id';

	protected $casts = [
		'user_created' => 'int'
	];

	protected $fillable = [
		'name',
		'description',
		'user_created'
	];
}
