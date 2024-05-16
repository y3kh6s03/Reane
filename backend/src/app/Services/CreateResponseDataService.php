<?php

namespace App\Services;

use App\Models\Action;
use App\Models\Reach;
use App\Models\Skill;

class CreateResponseDataService
{
  public static function createResponseData($req)
  {
    $reach = Reach::create([
      'name' => $req->input('reachName'),
      'user_email' => $req->input('userEmail'),
      'user_name' => $req->input('userName'),
      'user_image' => $req->input('userImage'),
    ]);

    $skills = $req->input('skills');

    foreach ($skills as $val) {
      $skillName = key($val);
      $skill = Skill::create([
        'name' => $skillName,
        'reach_id' => $reach->id,
      ]);
      $actions = $val[$skillName];
      $actionCount = 0;

      if (count($actions) >= 1) {
        foreach ($actions as $key => $actionData) {
          $actionCount++;
          $actionName = key($actionData);
          $action = Action::create([
            'name' => $actionName,
            'skill_id' => $skill->id,
            'reach_id' => $reach->id,
            'is_completed' => 0
          ]);
          $skillDatas[$skillName][$key] = array(array($action->name, $action->is_completed));
        }
      } else {
        $skillDatas = [];
      }
    }
    $chartData = [
      'id' => $reach->id,
      'userName' => $reach->user_name,
      'userEmail' => $reach->user_email,
      'userImage' => $reach->user_image,
      'days' => DateCalcService::calcDate($reach->createdAt),
      'reachName' => $reach->name,
      'skills' => $skillDatas,
      'actionCount' => $actionCount,
      'executedActionCount' => 0,
      'createdAt' => $reach->createdAt
    ];
    return $chartData;
  }
}
