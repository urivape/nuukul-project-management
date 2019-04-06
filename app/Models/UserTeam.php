<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class UserTeam
 * 
 * @property int $user_team_id
 * @property int $user_id
 * @property int $team_id
 * @property int $user_created
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class UserTeam extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $primaryKey = 'user_team_id';

	protected $casts = [
		'user_id' => 'int',
		'team_id' => 'int',
		'user_created' => 'int'
	];

	protected $fillable = [
		'user_id',
		'team_id',
		'user_created'
	];
}
