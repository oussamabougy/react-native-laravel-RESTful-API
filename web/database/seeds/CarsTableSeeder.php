<?php

use Illuminate\Database\Seeder;

class CarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Car::create([
            'name'=> 'Golf',
            'color' => '#fg125r',
        ]);

        \App\Car::create([
            'name'=> 'Polo',
            'color' => '#fg17cc',
        ]);

    }
}
