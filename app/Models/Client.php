<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Client
 * 
 * @property int $client_id
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string $website
 * @property int $user_created
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class Client extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $primaryKey = 'client_id';

	protected $casts = [
		'user_created' => 'int'
	];

	protected $fillable = [
		'name',
		'email',
		'phone',
		'website',
		'user_created'
	];
}
