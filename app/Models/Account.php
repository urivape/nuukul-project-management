<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 26 Mar 2019 16:50:34 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Account
 * 
 * @property int $account_id
 * @property string $name
 * @property string $address
 * @property string $phone
 * @property string $email
 * @property string $website
 * @property string $linkedin
 * @property string $facebook
 * @property string $twitter
 * @property string $instagram
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 *
 * @package App\Models
 */
class Account extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $primaryKey = 'account_id';

	protected $fillable = [
		'name',
		'address',
		'phone',
		'email',
		'website',
		'linkedin',
		'facebook',
		'twitter',
		'instagram'
	];
}
