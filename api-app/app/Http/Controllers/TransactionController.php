<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Transaction;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $transactions = Transaction::with('user')->get();
            // return $transactions;

            return response()->json([
                'status' => 'success',
                'data' => $transactions,
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
            $transaction = Transaction::with('book')->find('book_id', $request->id);
            $transaction->book->status = 'dipinjam';
            $transaction->tanggal_pinjam = date('Y-m-d');
            $transaction->tanggal_kembali = date('Y-m-d', strtotime('+' . $request->day . ' days'));
            $transaction->save();
            return response()->json([
                'status' => 'success',
                'data' => $transaction,
            ]);
            // $request['user_id'] = 1;
            // $transaction = Transaction::create($request->all());
            // return response()->json([
            //     'status' => 'success',
            //     'data' => $transaction,
            // ]);
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
            $transaction = Transaction::find($id);
            if ($transaction == null) {
                return response()->json([
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'Transaction not found',
                ]);
            } else {
                return response()->json([
                    'status' => 'success',
                    'data' => $transaction,
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
            $transaction = Transaction::find($id);
            if ($transaction == null) {
                return response()->json([
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'Transaction not found',
                ]);
            } else {
                $transaction->update($request->all());
                return response()->json([
                    'status' => 'success',
                    'data' => $transaction,
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
            $transaction = Transaction::find($id);
            if ($transaction == null) {
                return response()->json([
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'Transaction not found',
                ]);
            } else {
                $transaction->delete();
                return response()->json([
                    'status' => 'success',
                    'data' => $transaction,
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

    public function getTerpinjam()
    {
        try {
            $transactions = Transaction::with('book')->where('kembali', '0')->get();
            return response()->json([
                'status' => 'success',
                'data' => $transactions,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function getTerpinjamById($id)
    {
        try {
            $transaction = Transaction::with('book')->where('book_id', $id)->where('kembali', "0")->first();
            return response()->json([
                'status' => 'success',
                'data' => $transaction,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'code' => 400,
                'status' => 'error',
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function pinjam(Request $request)
    {
        // return $request;
        try {
            $book = Book::where('id', $request->id)->first();
            // dd($book);
            if ($book->status == 'tersedia') {
                $book->update([
                    'status' => 'dipinjam',
                ]);
                $request['user_id'] = 1;
                $request['book_id'] = $request->id;
                $request['tanggal_pinjam'] = date('Y-m-d');
                $request['tanggal_kembali'] = date('Y-m-d', strtotime('+' . intval($request->day) . ' days'));
                $transaction = Transaction::create($request->all());
                return response()->json([
                    'status' => 'success',
                    'data' => $transaction,
                ]);
            } else {
                return response()->json([
                    'code' => 400,
                    'status' => 'error',
                    'message' => 'Buku Masih Tersedia',
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

    public function kembali(Request $request)
    {
        // dd('coba');
        // dd($request);
        // return $request;
        try {
            // return $request->id;
            $transaction = Transaction::with('book')->where('book_id', $request->id)->first();
            // return $transaction;
            Book::where('id', $request->id)->update([
                'status' => 'tersedia',
            ]);

            $start = Carbon::now();
            $end = new Carbon($transaction->tanggal_kembali);

            $diff = $end->diffInDays($start);

            if ($diff < 0) {
                $denda = $diff * 1000;
                return response()->json([
                    'status' => 'success',
                    'data' => 'Anda terkena Denda Sebesar:' . $denda,
                ]);
            } else {
                Transaction::with('book')->where('book_id', $request->id)->update([
                    'kembali' => '1',
                ]);
                return response()->json([
                    'status' => 'success',
                    'data' => 'Terima Kasih Mengembalikan Tepat Waktu',
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
