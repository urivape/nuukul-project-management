<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Project
 * 
 * @property int $project_id
 * @property string $name
 * @property string $description
 * @property int $user_created
 * @property int $client_id
 * @property \Carbon\Carbon $start_date
 * @property \Carbon\Carbon $end_date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class Project extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $primaryKey = 'project_id';

	protected $casts = [
		'user_created' => 'int',
		'client_id' => 'int'
	];

	protected $dates = [
		'start_date',
		'end_date'
	];

	protected $fillable = [
		'name',
		'description',
		'user_created',
		'client_id',
		'start_date',
		'end_date'
	];
}
