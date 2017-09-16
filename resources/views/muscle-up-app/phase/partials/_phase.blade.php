<tr>
    <td style="text-align: center">
        <?php echo $count;?>
    </td>
    <td>
        <select class="form-control day_name"  name="day_id[]" id="">
            <option value="{{$day->day_id}}">{{$day->title}}</option>
            @foreach($days as $day)
                <option  value="{{$day->id}}">{{$day->title}}</option>
            @endforeach
        </select>
    </td>
    <td>
        <select class="form-control" name="wbs_id[]" id="">
            <option value="{{$day->wbs_id}}">{{$day->title}}</option>
            @foreach($wbs as $wbs_list)
                <option value="{{$wbs_list->id}}">{{$wbs_list->title}}</option>
            @endforeach
        </select>
    </td>
</tr>