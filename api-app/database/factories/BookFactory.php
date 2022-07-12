<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'judul' => $this->faker->title(),
            'penerbit' => $this->faker->name(),
            'pengarang' => $this->faker->name(),
            'tahun_terbit' => $this->faker->year(),
            'kategori_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
