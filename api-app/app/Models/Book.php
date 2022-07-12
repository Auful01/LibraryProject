<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $table = 'book';

    protected $fillable = [
        'kategori_id',
        'judul',
        'penerbit',
        'tahun_terbit',
        'pengarang',
        'status',
        // 'user_id',
    ];

    public function kategori()
    {
        return $this->belongsTo(BookCategory::class, 'kategori_id');
    }
}
