<?php

use Illuminate\Database\Seeder;
use App\Models\Exercise;

class ExerciseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Exercise::truncate();
        $exercise_Instance = new Exercise();
        $exercise_list = $exercise_Instance->getList();

        foreach ($exercise_list as $exercise) {

            DB::table('exercises')->insert(array(
//                'id'=> $exercise['id'],
                'name'=>$exercise['name'],
                'name_original'=>$exercise['name_original'],
                'category'=>$exercise['category'],
//                'muscles'=>$exercise['muscles'],
//                'muscles_secondary'=>(string)$exercise['muscles_secondary'].[],
//                'equipment'=>(string)$exercise['equipment'].[],
                'description'=>$exercise['description'],
            ));
        }

    }




}

