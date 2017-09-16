<tr>
    <td style="text-align: center">
        <?php echo $count;?>
    </td>
    <td>
        {{--<input type="hidden" class="value" >--}}
        <select class="form-control day_name"  name="phase_id[]" id="" data-value="{{$phase->id}}">
            @foreach($phases as $phase_list)
                <option value="{{$phase_list->id}}">{{$phase_list->title}}</option>
            @endforeach
        </select>
    </td>
</tr>