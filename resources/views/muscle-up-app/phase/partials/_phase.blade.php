<tr>
    <td style="text-align: center">
        <?php echo $count;?>
    </td>
    <td>
        <select class="form-control day_name"  name="day_id[]" id="">
            <option value="{{$phaseDetail->day_id}}">{{$phaseDetail->day->title}}</option>
            @foreach($days as $day)
                <option  value="{{$day->id}}">{{$day->title}}</option>
            @endforeach
        </select>
    </td>
    <td>
        <select class="form-control" name="wbs_id[]" id="">
            <option value="{{$phaseDetail->wbs_id}}">{{$phaseDetail->wbs->title}}</option>
            @foreach($Wbs as $wbs)
                <option value="{{$wbs->id}}">{{$wbs->title}}</option>
            @endforeach
        </select>
    </td>
</tr>