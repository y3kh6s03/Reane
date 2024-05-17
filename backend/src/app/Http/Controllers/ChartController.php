<?php

namespace App\Http\Controllers;

use App\Models\Action;
use App\Models\Reach;
use App\Models\Skill;
use App\Services\CreateResponseDataService;
use App\Services\DateCalcService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ChartController extends Controller
{

  public function index(Request $req): JsonResponse
  {
    $email = $req->input('authEmail');
    $chartDatas = Reach::with(['skills' => ['actions']])->where('user_email', $email)->get()->toArray();
    foreach($chartDatas as $key => $data){
      $createdDate=explode('T',$chartDatas[$key]['created_at'])[0];
      $days=DateCalcService::calcDate($createdDate);
      $chartDatas[$key]['days']=$days;

      // $skills=$data['skills'];
      // $actionCount=0;
      // foreach($skills as $skillData){
      //   $actionCount+=count($skillData['actions']);
      // }
      // $chartDatas[$key]['actionCount']=$actionCount;
    }


    return response()->json($chartDatas);
  }

  public function store(Request $req): JsonResponse
  {

    $validator = Validator::make($req->all(), [
      'reachName' => 'required|string|max:255',
      'userEmail' => 'required|email|max:255',
      'userName' => 'required|string|max:255',
      'userImage' => 'nullable|string|max:255',
      'skills' => 'required|array',
    ]);

    if ($validator->fails()) {
      return response()->json([
        'errors' => $validator->errors()
      ], 422);
    }

    try {
      DB::beginTransaction();

      $chartData = CreateResponseDataService::CreateResponseData($req);

      DB::commit();

      return response()->json($chartData);
    } catch (Exception $e) {
      DB::rollBack();
      return response()->json(['error' => $e->getMessage()]);
    }
  }
}
