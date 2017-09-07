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
                'title'=>$exercise['name'],
                'description'=>$exercise['description'],
            ));
        }

    }




}

