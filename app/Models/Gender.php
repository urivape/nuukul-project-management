<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Gender
 * 
 * @property int $gender_id
 * @property string $short_description
 * @property string $description
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class Gender extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $table = 'gender';
	protected $primaryKey = 'gender_id';

	protected $fillable = [
		'short_description',
		'description'
	];
}
