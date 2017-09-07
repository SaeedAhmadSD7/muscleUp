<?php

use Illuminate\Database\Seeder;
use App\Models\Day;
use Carbon\Carbon;
class DaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Day::truncate();

        for ($i=1;$i<=30;$i++) {
            DB::table('days')->insert(array(
                'title'=>'Day'.' '.$i,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ));
        }

    }
}
