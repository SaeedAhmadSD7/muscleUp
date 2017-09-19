<tr>
    <td style="text-align: center">
        <?php echo $count;?>
    </td>
    <td>
        <select class="form-control day_name"  name="day_id[]" id="" data-value="{{$day->pivot->day_id}}">
            @foreach($days as $day_list)
                <option value="{{$day_list->id}}">{{$day_list->title}}</option>
            @endforeach
        </select>
    </td>
    <td>
        <select class="form-control day_name" name="wbs_id[]" id="" data-value="{{$day->pivot->wbs_id}}">
            @foreach($wbs as $wbs_list)
                <option value="{{$wbs_list->id}}">{{$wbs_list->title}}</option>
            @endforeach
        </select>
    </td>
</tr>