<?php

use Illuminate\Database\Seeder;
use App\Models\Package;

class PackagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = Faker\Factory::create();
        $package = new Package();

        // 18 random packages
        /** @var \Illuminate\Database\Eloquent\Collection $packages */
        $packages = factory(Package::class)->times(18)->create();
    }
}
