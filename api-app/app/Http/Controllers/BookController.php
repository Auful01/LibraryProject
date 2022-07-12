<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $books = Book::all();
            // return $books;

            return response()->json([
                'status' => 'success',
                'data' => $books,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $book = Book::create($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $book,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $book = Book::find($id);
            if ($book == null) {
                return response()->json([
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'Book not found',
                ]);
            } else {
                return response()->json([
                    'status' => 'success',
                    'data' => $book,
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $book = Book::find($id);
            if ($book == null) {
                return response()->json([
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'Book not found',
                ]);
            } else {
                $book->update($request->all());
                return response()->json([
                    'status' => 'success',
                    'data' => $book,
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $book = Book::find($id);
            if ($book == null) {
                return response()->json([
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'Book not found',
                ]);
            } else {
                $book->delete();
                return response()->json([
                    'status' => 'success',
                    'data' => $book,
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }
}
