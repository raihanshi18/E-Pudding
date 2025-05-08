<?php

namespace Database\Seeders;

use App\Models\role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        role::query ()->create(['name' => 'admin']);
        role::query ()->create(['name' => 'seller']);
        role::query()->create(['name' => 'user']);
    }
}
