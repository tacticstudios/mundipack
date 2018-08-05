<?php

namespace App\Models;

use Illuminate\Support\Facades\Gate;
use App\Models\Traits\TranslatableJson;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

/**
 * App\Models\Package.
 *
 * @property int                                                               $id
 * @property string                                                            $name
 * @property string                                                            $display_name
 * @property string                                                            $hook
 * @property string                                                            $description
 * @property int                                                               $days
 * @property string                                                            $departure_city
 * @property string                                                            $arrival_city
 * @property string                                                            $departure_date
 * @property string                                                            $arrival_date
 * @property float                                                             $price
 * @property mixed                                                             $state
 * @property \Carbon\Carbon|null                                               $created_at
 * @property \Carbon\Carbon|null                                               $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Package whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Package whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Package whereDisplayName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Package whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Package whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Package whereDays($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Package whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Package extends Model
{
    use HasTranslations;
    use TranslatableJson;

    /**
     * The attributes that are translatable.
     *
     * @var array
     */
    public $translatable = [
        'display_name',
        'description',
        'hook',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'display_name',
        'hook',
        'description',
        'departure_city',
        'arrival_city',
        'departure_date',
        'arrival_date',
        'price',
        'state',
    ];

    public function __toString()
    {
        return $this->display_name ? : $this->name;
    }
}
