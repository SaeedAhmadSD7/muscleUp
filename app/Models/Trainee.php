<?php

namespace App\Models;

use App\Utils\Globals\UserType;
use Illuminate\Database\Eloquent\Model;
use App\Utils\Globals\AppConstant;
use Illuminate\Support\Facades\DB;

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
 * @property-read \App\Models\DietAllocation $allocation
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

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function employee(){
        return $this->belongsTo(Employee::class);
    }


    public function medicalhistory(){
        return $this->hasOne(MedicalHistory::class);
    }

    public function allocation()
    {
        return $this->hasOne(DietAllocation::class);
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
//        $oderBy = isset($params['orderBy']) ? $params['orderBy'] : ['created_at|DESC'];

        $key = isset($params['searchInput']) ? $params['searchInput'] : '';

        $qry = DB::table('wels AS w')
            ->select(['w.form_no','w.old_student_id','w.vu_reg_no','w.name','w.father','w.study_program','w.degree_program',
                'w.study_at','w.student_mailing_address','w.student_permanent_address','w.student_vu_email','w.student_personal_email'
                ,'w.student_phone_no','w.mobile',])

            ->orWhere('w.form_no' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.old_student_id' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.vu_reg_no' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.name' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.father' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.study_program' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.degree_program' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.study_at' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.student_mailing_address' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.student_permanent_address' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.student_vu_email' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.student_personal_email' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.student_phone_no' , 'LIKE', '%' . $key . '%')
            ->orWhere('w.mobile' , 'LIKE', '%' . $key . '%')

//->where('w.vu_reg_no' , 'LIKE', '%' . '014-VU' . '%')
//            ->join('wels AS w','w.vu_reg_no','l.vu_reg_no')
;


//        $qry = DB::table('lds AS l')
//            ->select(['w.form_no','w.old_student_id','w.vu_reg_no','w.name','w.father','w.study_program','w.degree_program','w.study_at','w.student_mailing_address','w.student_permanent_address','w.student_vu_email','w.student_personal_email','w.student_phone_no','w.mobile',])
//            ->join('wels AS w','w.vu_reg_no','l.vu_reg_no');

//        $qry = $this->from('trainees AS t')
//            ->select(['b.id AS bId','u.id AS uId','t.id','t.code', 'u.first_name','u.last_name','u.email','profile_img','t.initial_fee'])
//            ->join('users AS u','u.id','t.user_id')
//            ->join('branches AS b','b.id','t.branch_id');

//        foreach ($oderBy as $o){
//            list($oderByCol,$direction) = explode('|',$o);
//            $qry->orderBy('t.'.$oderByCol,$direction);
//        }
//        $qry->groupBy(['b.id','u.id','t.id','u.first_name','u.last_name','u.email','t.initial_fee','t.created_at']);
//      dd($qry->toSql());
//        dd($limit);
        return $qry->paginate($limit);
    }



    public function instructors()
    {
        return $this->belongsToMany(Instructor::class, 'instructor_trainee');
    }

    public static function saveTrainee($data){

//        $vRules = Trainee::$rules;
//            $id = isset($data['id']) ? $data['id'] : '';
//            if($id != ''){
//                $trainee = Trainee::find($id);
//                $user = User::find($id);
//            }else{
//                return $response = ['success'=>false, 'error'=> true, 'message' => ' record did not find for updation! '];
//            }
//dd($data);
        $user = new User($data);
        $password = "asdf1234";
        $user->password = bcrypt($password);
        $user['type'] = 'Trainee';
        $user->first_name = $user->first_name;
        $user->last_name= $user->last_name;
        $user->email = $user->email;
        $user->dob = $user->dob;
        $user->gender = $user->gender;
        $user->phone_number = $user->phone_number;
        $user->address = $user->address;
        $user->profile_img = $user->profile_img;
        $user->branch_id= "1";
        $user->gym_id = "1";
        $user->save();

        date_default_timezone_set("Asia/Karachi");
        $joining_date = date('Y-m-d H:i:s');

        $trainee = new Trainee($data);
        $trainee['user_id'] = $user->id;
        $trainee['joining_date'] = $joining_date;
        $trainee->height = $trainee->height;
        $trainee->branch_id = "1";
        $trainee->code = "123";
        $trainee->save();

        $response = ['success'=>true, 'error'=> false, 'message'=> 'Tainee has been saved successfully!'];
        return $response;
    }

    public static function editTrainee($data, $id){

        $user = User::find($id);
        $user->first_name = $data['first_name'];
        $user->last_name = $data['last_name'];
        $user->phone_number = $data['phone_number'];
        $user->dob = $data['dob'];
        $user->gender = $data['gender'];
        $user->address = $data['address'];
        $user->city = $data['city'];
        $user->country = $data['country'];
        $user->profile_img = $user->profile_img;
        $user->branch_id= $user->branch_id;
        $user->gym_id = $user->gym_id;
        $user->email = $user->email;
        $user->type = $user->type;
        $user->save();

        $trainee = $user->trainee;
        $trainee->branch_id = $trainee->branch_id;
        $trainee->user_id = $id;
        $trainee->height = $data['height'];
        $trainee->code = $trainee->code;
        $trainee->joining_date = $trainee->joining_date;
        $trainee->quit_date = $trainee->quit_date;
        $trainee->admission_fee = $trainee->admission_fee;
        $trainee->initial_fee = $trainee->initial_fee;
        $trainee->save();

        $response = ['success'=>true, 'error'=> false, 'message'=> 'Tainee has been Updated successfully!'];
        return $response;
    }


}
