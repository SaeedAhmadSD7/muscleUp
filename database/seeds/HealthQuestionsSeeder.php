<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class HealthQuestionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('health_questions')->insert(
            [
                [
                    'stat_name' => 'previous_experience',
                    'question' => 'Do You have Any Previous Exercise Experience?',
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ], [
                'stat_name' => 'asthma',
                'question' => 'Do You have Asthama?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'blood_pressure',
                'question' => 'Do You have Blood Pressure Issues?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'cholesterol',
                'question' => 'Do You have Cholesterol Issues?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'heart_murmur',
                'question' => 'Do You have Heart MurMur issue??',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'knee_problems',
                'question' => 'Do You have Heart MurMur issue?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'arthritis',
                'question' => 'Do You have arthritis?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'dizziness',
                'question' => 'Do You have Dizziness?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'back_pain',
                'question' => 'Do You have Back Pain?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'kidney_condition',
                'question' => 'Do You have Kidney Issues?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'liver_condition',
                'question' => 'Do You have Liver Issues?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'smoke',
                'question' => 'Do You Smoke?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
                [
                    'stat_name' => 'drink',
                    'question' => 'Do You Drink Alcohol?',
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ], [
                'stat_name' => 'egg_allergies',
                'question' => 'Do You Egg Allergies?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
                [
                    'stat_name' => 'fish_allergies',
                    'question' => 'Do You Fish Allergies?',
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ], [
                'stat_name' => 'peanut_allergies',
                'question' => 'Do You Peanut Allergies?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'treenut_allergies',
                'question' => 'Do You Tree Nut Allergies?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'shellfish_allergies',
                'question' => 'Do You Shell Fish Allergies?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'stat_name' => 'wheat_allergies',
                'question' => 'Do You Wheat Allergies?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
                [
                    'stat_name' => 'soy_allergies',
                    'question' => 'Do You Soy Allergies?',
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ], [
                'stat_name' => 'meat_allergies',
                'question' => 'Do You Meat Allergies?',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
                [
                    'stat_name' => 'seed_allergies',
                    'question' => 'Do You Seed Allergies?',
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ]
            ]);

    }
}
