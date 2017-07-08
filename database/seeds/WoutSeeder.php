<?php

use Illuminate\Database\Seeder;
use App\Models\WorkoutPlan;

class WoutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $workout_plans = new WorkoutPlan();
        $workout_plans->wPlanId=1;
        $workout_plans->GymId=1;
        $workout_plans->wPlanType='Exercise';
        $workout_plans->save();

        $workout_plans = new WorkoutPlan();
        $workout_plans->wPlanId=2;
        $workout_plans->GymId=2;
        $workout_plans->wPlanType='Runing';
        $workout_plans->save();
    }
}
