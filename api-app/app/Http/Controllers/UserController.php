<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $users = User::all();
            // return $users;

            return response()->json([
                'status' => 'success',
                'data' => $users,
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
        //
        try {
            $user = User::create($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $user,
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
        //
        try {
            $user = User::find($id);
            if ($user == null) {
                return response()->json([
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'User not found',
                ]);
            } else {
                return response()->json([
                    'status' => 'success',
                    'data' => $user,
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
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
            $user = User::find($id);
            if ($user == null) {
                return response()->json([
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'User not found',
                ]);
            } else {
                $user->update($request->all());
                return response()->json([
                    'status' => 'success',
                    'data' => $user,
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
        //
    }
}
