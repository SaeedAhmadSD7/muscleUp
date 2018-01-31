<?php

namespace App\Models;

use App\Utils\Globals\UserType;
use Illuminate\Database\Eloquent\Model;
use App\Utils\Globals\AppConstant;

/**
 * App\Models\Trainee
 *
 * @property int $id
 * @property int|null $branch_id
 * @property int $user_id
 * @property string|null $code
 * @property float|null $height
 * @property string $joining_date
 * @property string|null $quit_date
 * @property float|null $admission_fee
 * @property float|null $initial_fee
 * @property string|null $deleted_at
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\Models\Allocation $allocation
 * @property-read \App\Models\Employee $employee
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\HealthQuestion[] $healthQuestion
 * @property-read \App\Models\MedicalHistory $medicalhistory
 * @property-read \App\Models\TraineeActivity $traineeActivity
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereAdmissionFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereBranchId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereHeight($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereInitialFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereJoiningDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereQuitDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Trainee whereUserId($value)
 * @mixin \Eloquent
 */
class Trainee extends Model
{
    protected $table = 'trainees';
    protected $primaryKey = 'id';
    protected $guarded = ["id"];
    public $fillable = ['branch_id','user_id','code','height','joining_date', 'quit_date','admission_fee','initial_fee','deleted_at'];

    public function user(){
        return $this->belongsTo(User::class);
    }


    public function gym(){
        return $this-> belongsTo(Gym::class);
    }

    public function employee(){
        return $this->belongsTo(Employee::class);
    }


    public function medicalhistory(){
        return $this->hasOne(MedicalHistory::class);
    }

    public function allocation()
    {
        return $this->hasOne(Allocation::class);
    }

    public function traineeActivity(){
        return $this->hasOne(TraineeActivity::class);
    }
    public function healthQuestion(){
        return $this->hasMany(HealthQuestion::class);
    }

    /**
     * @param array $params
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function fetchRecords(array $params=[])
    {
        $limit = isset($params['limit']) ? $params['limit'] : AppConstant::RECORD_LIMIT;
        $oderBy = isset($params['orderBy']) ? $params['orderBy'] : ['created_at|DESC'];

        $qry = $this->from('trainees AS t')
            ->select(['b.id AS bId','u.id AS uId','t.id','t.code', 'u.first_name','u.last_name','u.email','profile_img','t.initial_fee'])
            ->join('users AS u','u.id','t.user_id')
            ->join('branches AS b','b.id','t.branch_id');

        foreach ($oderBy as $o){
            list($oderByCol,$direction) = explode('|',$o);
            $qry->orderBy('t.'.$oderByCol,$direction);
        }
//        $qry->groupBy(['b.id','u.id','t.id','u.first_name','u.last_name','u.email','t.initial_fee','t.created_at']);
//      dd($qry->toSql());

        return $qry->paginate($limit);
    }

    public function instructors()
    {
        return $this->belongsToMany(Instructor::class, 'instructor_trainee');
    }
//    public function saveTrainee($data)
//    {
//
//    }

}
