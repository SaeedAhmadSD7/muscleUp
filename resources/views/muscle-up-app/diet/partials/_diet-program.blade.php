<tr>
    <td style="text-align: center">
        <?php echo $count;?>
    </td>
    <td>
        <select class="form-control" name="meal_id[]" id="meal_no">
            <option value="{{$dietPlanDetail->meal_id}}">{{$dietPlanDetail->meal->name}}</option>
            @foreach($meals as $meal)
                <option value="{{$meal->id}}">{{$meal->name}}</option>
            @endforeach
        </select>
    </td>
    <td>
        <select class="form-control food_name" id="food_name" name="food_id[]">
            <option value="{{$dietPlanDetail->food_id}}">{{$dietPlanDetail->food->name}}</option>
            @foreach($foods as $food)
                <option data-calories="{{$food->calories}}" value="{{$food->id}}">{{$food->name}}</option>
            @endforeach
        </select>
    </td>
    <td>
        <input class="form-control" type="number" id="quantity" name="quantity[]"
               placeholder="Qrt:" style="width:60px;" value="{{$dietPlanDetail->quantity}}">
    </td>
    <td>
        <input class="form-control" type="text" id="calories" name="calories[]"
               placeholder="Cal" style="width:60px;" value="{{$dietPlanDetail->calories}}" readonly>
    </td>
    <td>
        <input class="form-control time_take_input" type="text" name="duration[]"
               placeholder="Time" style="width:60px" value="{{$dietPlanDetail->duration}}" readonly>
    </td>
    <td>
        <button class="remove_row btn btn-danger" type="button"><span
                    class="glyphicon glyphicon-remove-sign"></span></button>
    </td>
</tr>