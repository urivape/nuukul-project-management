<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class TaskComment
 * 
 * @property int $task_comment_id
 * @property int $task_id
 * @property string $title
 * @property string $comment
 * @property int $user_created
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class TaskComment extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $primaryKey = 'task_comment_id';

	protected $casts = [
		'task_id' => 'int',
		'user_created' => 'int'
	];

	protected $fillable = [
		'task_id',
		'title',
		'comment',
		'user_created'
	];
}
