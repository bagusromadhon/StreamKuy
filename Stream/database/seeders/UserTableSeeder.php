<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $admin = User::create([
        'name' => 'Admin',
        'email' => 'admin@stream.test',
        'password' => bcrypt('password'),
        ]);
        $admin->assignRole('admin');
    }
}
