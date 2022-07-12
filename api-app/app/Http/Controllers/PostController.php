<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getAll()
    {
        try {
            $posts = Post::all();
            // return $posts;

            return response()->json([
                'status' => 'success',
                'data' => $posts,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function save(Request $request)
    {
        try {
            $post = Post::create($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $post,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function detail($id)
    {
        try {
            $post = Post::find($id);
            if ($post == null) {
                return response()->json([
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'Post not found',
                ]);
            } else {
                return response()->json([
                    'status' => 'success',
                    'data' => $post,
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
            //throw $th;
        }
    }

    public function update($id, Request $request)
    {

        try {
            $post = Post::find($id);
            $post->title = $request->title;
            $post->body = $request->body;
            $post->save();

            return response()->json([
                'status' => 'success',
                'data' => $post,
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function delete($id)
    {
        try {
            //code...
            $post = Post::find($id);
            $post->delete();
            // return $post;
            return response()->json([
                'status' => 'success',
                'data' => $post,
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }
}
